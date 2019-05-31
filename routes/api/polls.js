const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Poll = require("../../models/Poll");
const User = require("../../models/User");

//GET api/poll
//@desc - test route

router.get("/", (req, res) => {
  res.send("Poll");
});

//@route GET api/polls/all
//@desc - Show all Polls
//@access Public

router.get("/all", async (req, res) => {
  try {
    const polls = await Poll.find();
    res.status(200).json({ polls });
  } catch (err) {
    console.log(err.message);
    res.status(500).res("Server Error");
  }
});

//@route POST api/poll/create
//@desc - Create a poll
//@access Private

router.post("/", auth, async (req, res) => {
  try {
    // console.log(req.user)
    const { id } = req.user;
    const user = await User.findById(id).select("-password");
    console.log(user);

    const { question, options } = req.body;
    const poll = await Poll.create({
      question,
      user,
      options: options.map(option => ({ option, votes: 0 }))
    });

    user.polls.push(poll.id);
    // await user.save()
    console.log(user);

    await user.save();

    // console.log(user.polls)
    res.status(201).json(poll);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ msg: "Redirect" });
  }
});

//@route GET api/poll/user
//@desc GET - Your own poll
//@access Private

router.get("/user", auth, async (req, res) => {
  try {
    const { id, email } = req.user;

    const user = await User.findById(id).populate("polls");

    res.status(200).json(user.polls);
  } catch (err) {
    console.log(err.message);
    res.status(500).res("Server Error");
  }
});

//@route GET api/poll/:id
//@desc GET - Your own poll
//@access Public

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const poll = await Poll.findById(id).populate("user", ["name", "id"]);

    if (!poll) return res.status(400).json({ msg: "Poll not found" });

    res.status(200).json(poll);
  } catch (err) {
    console.log(err);
    res.status(500).res("Server Error");
  }
});

//@route Delete api/poll/:id
//@desc DELETE your poll
//@access Public

router.delete("/:id", auth, async (req, res) => {
  try {
    const { id: pollId } = req.params;
    const { id: userId } = req.user;

    const poll = await Poll.findById(pollId);

    if (!poll) return res.status(400).json({ msg: "Poll not found" });
    if (poll.user.toString() != userId) {
      return res.status(400).json({ msg: "Unathorized Access" });
    }

    const user = await User.findById(userId);
    console.log(user.polls);
    console.log(pollId.toString());

    user.polls.splice(pollId.toString(), 1);

    await user.save();
    await poll.remove();

    res.status(202).json({ msg: "Poll removed" });
  } catch (err) {
    console.log(err);
    res.status(500).res("Server Error");
  }
});

//@route POST api/poll/:id
//@desc Vote for a poll
//@access Private

router.post("/:id", auth, async (req, res) => {
  const { id: pollId } = req.params;
  const { id: userId } = req.user;
  const { answer } = req.body;
  try {
    if (answer) {
      const poll = await Poll.findById(pollId);

      if (!poll) return res.status(400).json({ msg: "Poll not found" });

      const vote = poll.options.map(option => {
        if (option.option === answer) {
          return {
            option: option.option,
            _id: option._id,
            votes: option.votes + 1
          };
        } else {
          return option;
        }
      });

      console.log(vote);

      if (vote) {
        poll.voted.push(userId);
        poll.options = vote;
        await poll.save();
      }
      return res.status(202).json({ msg: "Voted!" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).res("Server Error");
  }
});
module.exports = router;
