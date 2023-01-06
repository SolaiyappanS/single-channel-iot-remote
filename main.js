// this is main javascript file.

var lightStatus = false;
// local variable to store boolean value.

// below function will run at the start of the web page.
$(document).ready(function () {
  getData();
  // calling getData function to initialize local variable with current status.

  // below function will run once the user click the switchBtn button.
  $("#switchBtn").click(function () {
    lightStatus = !lightStatus;
    // switching the local variable status.

    setData(lightStatus);
    // calling setData function to send new status to the server (firebase here).

    getData();
    // calling getData function to get the switch's current status.
  });
});

// creating new function "setData" with a parameter "value".
function setData(value) {
  // below code will send the data "value" to the path "/light" in firebase.
  firebase.database().ref("/light").set(value);
}

// creating new function "getData".
function getData() {
  // below code will get the data from the path "/light" in firebase.
  firebase
    .database()
    .ref("/light")
    .on("value", (res) => {
      lightStatus = res.val();
      // updating the local variable with the data from firebase.

      var currentState = res.val() ? "ON" : "OFF";
      // creating a new variable "currentState" to store string "ON" or "OFF" based on the data from firebase.

      $("#orgLightState").html(currentState);
      // updating text inside html with id "orgLightState".
    });
}
