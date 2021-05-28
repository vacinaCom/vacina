$(document).ready(function () {
  $("#bntHome").click(function () {
    $("#telaLogin").hide()
    $("#telaRegistro").hide()
    $("#containerForm").show()

  })

  $("#navClique").click(function(){
    console.log("Teste")
    $("#telaLogin").hide()
    $("#containerForm").hide()
    $("#cardAgendamento").hide()
    
    $("#telaRegistro").show()
  })

  $("#navLogin").click(function () {
    $("#telaRegistro").hide()
    $("#containerForm").hide()

    $("#telaLogin").show()
  })

  $("#linkEntrar").click(function () {
    $("#telaRegistro").hide()
    $("#containerForm").hide()
    $("#telaLogin").show()
  })

  $("#navRegistre").click(function () {
    $("#containerForm").hide()
    $("#telaLogin").hide()

    $("#telaRegistro").show()

  })

  $("#linkRegistre").click(function () {
    $("#containerForm").hide()
    $("#telaLogin").hide()

    $("#telaRegistro").show()
  })

  $("#navAgendamento").click(function(){
    $("#telaLogin").hide();
    
    $("#statusVacinacao").show();
    $("#containerForm").show()

  })


})
