// this javascript file is to link firebase with the project.

// below set of code is our credentials got from firebase while initializing the project.
const firebaseConfig = {
  apiKey: "AIzaSyA_HHqKeHB7RZhdNn8pT_q7Ikf1Vqm2-EM",
  authDomain: "single-channel-remote.firebaseapp.com",
  projectId: "single-channel-remote",
  storageBucket: "single-channel-remote.appspot.com",
  messagingSenderId: "763504018424",
  appId: "1:763504018424:web:5833f29a814580b304cc0d",
  measurementId: "G-9VQHW5M787",
  databaseURL: "https://single-channel-remote-default-rtdb.firebaseio.com/",
};

// below line of code will initialize firebase with our credentials.
firebase.initializeApp(firebaseConfig);
