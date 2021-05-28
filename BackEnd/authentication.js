var btnLogin = document.getElementById('btnLogin');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');

var email = document.getElementById('email');
var password = document.getElementById('password');
var login = document.getElementById('login')

btnLogin.addEventListener('click', function () {
  firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function (result) {
    alert('Usuário Conectado!')
    console.log("Sucesso!!")
    $("#telaRegistro").hide()
    $("#containerForm").hide()
    $("#telaLogin").hide()


    $("#containerForm").show()


  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    alert(errorMessage);
    alert('Usuário Não cadastrado!')
  });
})



login.addEventListener('click', function () {
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      alert('Usuário Cadastrado!')
      $("#telaRegistro").hide()
  
  
      $("#containerForm").show()
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;   
       alert('Usuário Com Falha!')

      // ..
    });
})
