const firebaseConfig = {
      apiKey: "AIzaSyAgSof5oiT4Je7Bw-0-55xxP-M3xiC963I",
      authDomain: "lets-chat-project-3caa2.firebaseapp.com",
      databaseURL: "https://lets-chat-project-3caa2-default-rtdb.firebaseio.com",
      projectId: "lets-chat-project-3caa2",
      storageBucket: "lets-chat-project-3caa2.appspot.com",
      messagingSenderId: "997388086434",
      appId: "1:997388086434:web:15187e847872aa1d367bfb",
      measurementId: "G-8CJHL989CE"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function adduser() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"

      });
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>"
                  document.getElementById("output").innerHTML+=row;

                  //End code
            });
      });
}
getData();



    





