
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken } from "firebase/messaging"


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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export const messaging = getMessaging(app)
function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      getToken(messaging, { vapidKey: 'BLK3tbbBdkDqcKSCIu0bT6wuvG10gH6tt9HLab-NslnzUNlTehIDG4oXd6g-WHi8bWKvpupYyHkFQtdsSV1vatI',
     }).then((currentToken) => {
          if (currentToken) {
            console.log("currentToken:", currentToken);
          } else {
            console.log("Can not get token.")
          }
        }
  ).catch((err) =>{
    console.log("An error occurred while retrieving token." , err);
  });
    } else {
      console.log("Do not have permission.")
    }
  })
}

requestPermission();


  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  }
  

// export { messaging }


