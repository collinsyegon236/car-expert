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



document.querySelector('.btn-login').addEventListener('click', function () {
    
    var email = document.getElementById('userEmail').value
    var password = document.getElementById('pass').value

    console.log(email);

    if (email != '' && password != '') {
        
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
        document.querySelector('.btn-logout').addEventListener('click', function () {
    
        });

        result.catch(function (error) {
            var errorCode = error.code
            var errorMessage = error.message

            alert("Message : " + errorMessage)
        })
    } else {
        alert('Fill out all fields')
    }
});


//Sign Up Functionality.

document.querySelector('.btn-signup').addEventListener('click', function () {
    
    var email = document.getElementById('signUpEmail').value
    var password = document.getElementById('userPass').value
    var confirmPassword = document.getElementById('confirmPass').value
    
    if (email != '' && password != '' && confirmPassword != '') {    
        if (password == confirmPassword) {
            var result = firebase.auth().createUserWithEmailAndPassword(email, password);document.querySelector('.btn-logout').addEventListener('click', function () {
                
            });
    
            result.catch(function (error) {
                var errorCode = error.code
                var errorMessage = error.message
    
                alert("Message : " + errorMessage)
            })
        } else {
            alert('Passwords does not match')
     }
    } else {
        alert('Fill out all fields')
    }
});


//Recovery Set up 

