
var firebaseConfig = {
    apiKey: "AIzaSyBLNgi4QJhmrKygRQvp0L4ZgFIkyYWcWxg",
    authDomain: "my-car-f766d.firebaseapp.com",
    projectId: "my-car-f766d",
    storageBucket: "my-car-f766d.appspot.com",
    messagingSenderId: "238368456088",
    appId: "1:238368456088:web:65ee6e1dba087eaa9b3fed"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
firebase.auth.Auth.Persistence.LOCAL;

document.querySelector('.forgetPass').addEventListener('click', function () {
    
    var auth = firebase.auth()
    var email = document.getElementById('exampleInputEmail1').value
    
    if (email != '') {
        auth.sendPasswordResetEmail(email).then(function () {
            alert("Email has been sent to you to reset your password")
        })
            .catch(function (error) {
            var errorCode = error.code
            var errorMessage = error.message

            alert("Message : " + errorMessage)
            });
    } else {
        alert('Email cannot be blank')
    }
    console.log(email);
});
