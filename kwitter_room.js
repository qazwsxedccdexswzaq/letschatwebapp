// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB72ClzRzjOeX1X_fhDp37Ysn6hovyo_aU",
    authDomain: "kwitter-bcf12.firebaseapp.com",
    databaseURL: "https://kwitter-bcf12-default-rtdb.firebaseio.com",
    projectId: "kwitter-bcf12",
    storageBucket: "kwitter-bcf12.appspot.com",
    messagingSenderId: "676919358022",
    appId: "1:676919358022:web:4d50ae865ddee17a1cd047"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
