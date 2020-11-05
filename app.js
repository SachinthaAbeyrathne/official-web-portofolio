

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAwgxCL0RF46XyNTlM_OPvQIcuIIeUVuBM",
    authDomain: "contactform-firebase-4ee4e.firebaseapp.com",
    databaseURL: "https://contactform-firebase-4ee4e.firebaseio.com",
    projectId: "contactform-firebase-4ee4e",
    storageBucket: "contactform-firebase-4ee4e.appspot.com",
    messagingSenderId: "708104786906",
    appId: "1:708104786906:web:10246fa067210a367526e3"
  }
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// start grabbing the DOM Element
const submitBtn = document.querySelector('#submit');

let userName = document.querySelector('#userFullName');
let userEmail = document.querySelector('#userEmail');
let userMessage = document.querySelector('#userMessage');

const db = firestore.collection("contact-Data");

submitBtn.addEventListener('click', function(){
   let userNameInput = userName.value;
   let userEmailInput = userEmail.value;
   let userMessageInput = userMessage.value;
//    Access the Database Collection
db.add({
    name: userNameInput,
    email: userEmailInput,
    message: userMessageInput 
}).then (function () {

   console.log("Data Saved"); 
})
   .catch(function(error) {
   console.log(error);
});
});

var r = submitBtn(Successful Message!);
if (r == true){
  window.location.reload();
}
