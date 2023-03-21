//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDU4lpAKKL9bzNm5j0i-LX_lFvFJedWZv8",
    authDomain: "comp1800-202321.firebaseapp.com",
    projectId: "comp1800-202321",
    storageBucket: "comp1800-202321.appspot.com",
    messagingSenderId: "1016892848666",
    appId: "1:1016892848666:web:20301b0a57d05a84a22fa3"

};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
