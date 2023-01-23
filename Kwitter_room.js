firebaseConfig = {
    apiKey: "AIzaSyBpFKlu_QMkL9T_iyupcOmn-y-0_04rtY0",
    authDomain: "let-s-chat-7cadd.firebaseapp.com",
    projectId: "let-s-chat-7cadd",
    storageBucket: "let-s-chat-7cadd.appspot.com",
    messagingSenderId: "1076369102453",
    appId: "1:1076369102453:web:14e4ace3328d4c8bfb0a3c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username = localStorage.getItem("username")
  document.getElementById("h3").innerHTML = "Welcome "+ username +"!"
  function add(){
    roomname = document.getElementById("text_input2").value
    firebase.database().ref("/").child(roomname).update({
      purpose : "Adding room name"
    })
    localStorage.setItem("room_name", roomname)
    window.location = "kwitter_page.html"
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names)
      row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
 function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("room_name", name)
  window.location = "kwitter_page.html"
 }





function logout(){
localStorage.removeItem("room_name")
localStorage.removeItem("username")
window.location = "index.html"

}