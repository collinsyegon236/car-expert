//This file contain only log out functionallity because it has to follow specific order while executing.


document.querySelector('.btn-logout').addEventListener('click', function () {
    firebase.auth().signOut();
    console.log('lol');
});