var firebaseConfig = {
    apiKey: "AIzaSyDcQBdGHJQMl1EdHW0JPu24VysPrc3B-KU",
    authDomain: "chatty-cce0e.firebaseapp.com",
    databaseURL: "https://chatty-cce0e-default-rtdb.firebaseio.com",
    projectId: "chatty-cce0e",
    storageBucket: "chatty-cce0e.appspot.com",
    messagingSenderId: "1010954879435",
    appId: "1:1010954879435:web:c93eca3d2c362be762b64e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";

function logout(){
window.location = "chatty-login.html"
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 
 //End code
 });});}
getData();

