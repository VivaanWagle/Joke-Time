 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAeXIJcJRBKTYKjF6baLe8PpeD2hUnU-Tg",
      authDomain: "kwitter-86cd3.firebaseapp.com",
      projectId: "kwitter-86cd3",
      storageBucket: "kwitter-86cd3.appspot.com",
      messagingSenderId: "1030279020362",
      appId: "1:1030279020362:web:41d34d8d35cf0249b94bb3"
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
