var lightStatus = false;

$(document).ready(function () {
  $("#switchBtn").click(function () {
    lightStatus = !lightStatus;
    setData(lightStatus);
    getData();
  });
});

function setData(value) {
  firebase.database().ref("/light").set(value);
}

function getData() {
  firebase
    .database()
    .ref("/light")
    .on("value", (res) => {
      var currentState = res.val() ? "ON" : "OFF";
      $("#orgLightState").html(currentState);
    });
}
