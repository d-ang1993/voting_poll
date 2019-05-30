const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth')

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
    console.log(err.message)
    res.status(500).res('Server Error')
  }
});


//@route POST api/poll/create
//@desc - Create a poll
//@access Private

router.post('/', auth, async (req,res) => {

  try {
    console.log(req.user)
    const { id } = req.user
    const user = await User.findById(id)
    console.log(user)
    const {question, options} = req.body
    const poll = await Poll.create({
      question,
      options: options.map(option => ({ option,
        votes: 0 }))
    });
    res.status(201).json(poll)
  } catch (err) {

  }
})
module.exports = router;
