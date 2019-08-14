
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
$('#nextbtn').on('click', function () {
    // e.preventDefault();
    // datepickerStart = $('#datepicker').text()
    // datepickerLast = $('#pasdatepicker1').text()
    // category=$('#sel2 option:selected').text()
    // $('#sel2').find(":selected").each(function () {
    //     skill = $(this).text();
    // });;
    // pay=$('#pay option:selected').text()
    // money=$('#money option:selected').text()
    // console.log(datepickerLast,datepickerStart,category,skill,skill,money)
    console.log('salam')

    // users.push({
    //     username: username,
    //     password: password,
    //     email:email,
    //     userType:userType,
    // })


    // database.ref().set({

    //     users: users
    // })
    // if(userType==1)
    // window.open('./signUpNext.html','_blank')

})