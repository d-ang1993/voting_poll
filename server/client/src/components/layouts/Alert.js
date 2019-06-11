import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  // let descriptionAlert;

  // if (alerts !== null && alerts.length > 0) {
  //   return (<div>
  //     {alerts.map(alert => {
  //       return alert.msg
  //     })}
  //   </div>)
  // }

  // if (alerts !== null && alerts.length > 0) {
  //   alerts.map(alert => {
  //     return ( <div>
  //       {alert.msg}
  //     </div>)
  //   });
  // }
  //
  // return <div>{descriptionAlert}</div>;
  return (

    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ))
  );
};

Alert.propTypes = {
  name: PropTypes.string
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
