
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyA7xEOjs0113ziUz4Wva6EdSMBzP0_tHfM",
      authDomain: "kwitter-80fff.firebaseapp.com",
      databaseURL: "https://kwitter-80fff-default-rtdb.firebaseio.com",
      projectId: "kwitter-80fff",
      storageBucket: "kwitter-80fff.appspot.com",
      messagingSenderId: "380848896290",
      appId: "1:380848896290:web:581592f43f059b4e2ecd7b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " +  user_name  + "!" ;


function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose : "Adding Room Name"});
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";
}





function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";  
}