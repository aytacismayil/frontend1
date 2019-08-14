
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


  database.ref('/usersDatas/').on('value', function (snapshot) {
  users = snapshot.val()
  console.log(users)
  // $('#users').empty()
  for (let i = 0; i < users.length; i++) {


    if (users[i] != null) {

      // if (users[i].usertype == 1)
        $('#rowMain').append($("<div class='col-md-4 col-sm-4 col-xs-4' data-id=" + i + ">" + "<p>Category: " + users[i].category + "</p>" + "<p>Languages: " + users[i].languages + "</p>" +
          "<p>Deadline:" + users[i].dateTimeStart + "-" + users[i].dateTimeEnd + "</p>" + "<p>Wage:" + users[i].money + "(" + users[i].pay + ")</p>" + "<p>Project(About):" + users[i].nameProject + "(" + users[i].aboutProject + ")</p>" +
          "<p>Project Manager:" + users[i].username + "(" + users[i].email + ")"
          + "<p><button type='submit' style='balckground:red' class='form-control'>Apply Job</button></p>" + "</div>"));
      // alert('1')
    // }
    // else if (users[i].usertype == '2') {
      $('#rowMain').append($("<div class='col-md-4 col-sm-4 col-xs-4' data-id=" + i + ">" + "<p>Worker type: " + users[i].workerType + "</p>" + "<p>Languages: " + users[i].ProgrammingLang + "</p>" +
        "<p>Email:" + users[i].email + "</p>" + "<p>Username:" + users[i].username + "</p>" + "<p>About me:" + users[i].about
        + "<p><button type='submit' style='balckground:red' class='form-control'>Apply Job</button></p>" + "</div>"));
    //   alert('2')

    // }


  }
  }
})
