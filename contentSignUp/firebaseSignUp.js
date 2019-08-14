
var firebaseConfig = {
    apiKey: "AIzaSyCoxDOWlnMTD_lvC198Q_n699Vh1N3vcQE",
    authDomain: "devdb-e2b11.firebaseapp.com",
    databaseURL: "https://devdb-e2b11.firebaseio.com",
    projectId: "devdb-e2b11",
    storageBucket: "devdb-e2b11.appspot.com",
    messagingSenderId: "353455750630",
    appId: "1:353455750630:web:45198f5e973914f5"
};
// Initialize Firebase
let users = []

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
user_id=0
$('#loginbtn').on('click', function (e) {
    e.preventDefault();
    user_id++;
    username = $('#username').val()
    password = $('#password').val()
    email = $('#email').val()
    userType=$('#choise option:selected').val()
  
    localStorage.setItem('user_id',user_id)
    localStorage.setItem('username',username)
    localStorage.setItem('password',password)
    localStorage.setItem('email',email)
    localStorage.setItem('usertype',userType)


    // users.push({
    //     user_id:user_id,
    //     username: username,
    //     password: password,
    //     email:email,
    //     userType:userType,
    // })


    // database.ref().set({

    //     users: users
    // })

    
    if(userType==1){
        window.open('./freelancer.html','_blank')
    }
    else if( userType==2){
        window.open('./signUpNext.html','_blank')
      
    }
    
    // database.ref('/users/').on('value', function (snapshot) {
    //     users = snapshot.val()
    //     // console.log(users)
    //     // $('#users').empty()
    //     let count = 0
    //     for (let i = 0; i < users.length; i++) {
    //         if ((username.trim() == users[i].username.trim()) && ((password.trim() == users[i].password))) {
    //             count++
    //         }


    //         $('#users').append('<div>' + users[i].username + ' ' + users[i].password + '</div>')
    //     }
    //     if (count > 0) {

    //         console.log('bele user movcuddur')

    //         window.open('./employer.html', '_blank')

    //         $.ajax({
    //             type: 'GET',
    //             url: 'https://devdb-e2b11.firebaseio.com/.json',


    //         }).done(function (data) {
    //             let usr
    //             //    let user=database.ref('/users/').orderByChild('username').equalTo(username)
    //             for (let i = 0; i < data.users.length; i++)
    //                 if (username == data.users[i].username) {
    //                     $('#usr').text(username)
    //                     console.log(username)
    //                     localStorage.setItem('username',username)
    //                 }


    //         }).catch(function (err) {
    //             console.log('error var')
    //             console.log(err)
    //         });

    //     }
    //     else
    //         console.log('user movcud deyil!!!!!!!!')


    // })

})
// database.ref('/users/').on('value', function (snapshot) {
//     users = snapshot.val()
//     console.log(users)
//     // $('#users').empty()
//     for (let i = 0; i < users.length; i++) {


//         $('#users').append('<div>' + users[i].username + ' ' + users[i].password + '</div>')
//     }

// })