importScripts("https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.5.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyCWFWXT4sVuIhy5GpJKjfUa87_sa3DYYZs",
  authDomain: "fullfood-84c0d.firebaseapp.com",
  databaseURL: "https://fullfood-84c0d-default-rtdb.firebaseio.com",
  projectId: "fullfood-84c0d",
  storageBucket: "fullfood-84c0d.appspot.com",
  messagingSenderId: "359505676966",
  appId: "1:359505676966:web:495b3d5a3a4c09d79c8267",
  measurementId: "G-KRZ5H801LK"
  };
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);

  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon,
  };

  self.registration.showNotification(payload.data.title, notificationOptions);
});