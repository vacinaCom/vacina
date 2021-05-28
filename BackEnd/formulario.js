$(document).ready(function () {
  $("#bntFormulario").click(function () {
    $("#statusVacinacao").hide();
    console.log($("#idade").val())
    switch ($("#categoriaEspecial").val()) {
      case "0": if ($("#idade").val() >= 90) {
        $("#resCategoria").text("Acima de 90 anos")
        $("#resData").text("10 de Abril")
      } else if ($("#idade").val() >= 85 && $("#idade").val() <= 89) {
        $("#resCategoria").text("Entre 85 e 89 anos")
        $("#resData").text("12 de fevereiro")
      } else if ($("#idade").val() >= 80 && $("#idade").val() <= 84) {
        $("#resCategoria").text("Entre 80 e 84 anos")
        $("#resData").text("27 de Fevereiro")
      } else if ($("#idade").val() >= 77 && $("#idade").val() <= 79) {
        $("#resCategoria").text("Entre 77 e 79 anos")
        $("#resData").text("03 de Março")
      } else if ($("#idade").val() >= 75 && $("#idade").val() <= 76) {
        $("#resCategoria").text("Entre 75 e 76 anos")
        $("#resData").text("15 de Março")
      } else if ($("#idade").val() >= 72 && $("#idade").val() <= 74) {
        $("#resCategoria").text("Entre 72 e 74 anos")
        $("#resData").text("19 de Março")
      } else if ($("#idade").val() >= 69 && $("#idade").val() <= 71) {
        $("#resCategoria").text("Entre 69 e 71 anos")
        $("#resData").text("26 de Março")
      } else if ($("#idade").val() == 68) {
        $("#resCategoria").text("68 anos")
        $("#resData").text("02 de Abril")
      } else if ($("#idade").val() == 67) {
        $("#resCategoria").text("67 anos")
        $("#resData").text("12 de Abril")
      } else if ($("#idade").val() >= 65 && $("#idade").val() <= 66) {
        $("#resCategoria").text("Entre 65 e 66 anos")
        $("#resData").text("21 de Abril")
      } else if ($("#idade").val() == 64) {
        $("#resCategoria").text("64 anos")
        $("#resData").text("23 de Abril")
      } else if ($("#idade").val() == 63) {
        $("#resCategoria").text("63 anos")
        $("#resData").text("29 de Abril")
      } else if ($("#idade").val() >= 60 && $("#idade").val() <= 62) {
        $("#resCategoria").text("Entre 60 e 62 anos")
        $("#resData").text("12 de Abril")

      } else if ($("#idade").val() >= 55 && $("#idade").val() <= 59) {
        $("#resCategoria").text("Entre 55 e 59 anos")
        $("#resData").text("Entre 21 e 31 de julho")
      } else if ($("#idade").val() >= 50 && $("#idade").val() <= 54) {
        $("#resCategoria").text("Entre 50 e 54 anos")
        $("#resData").text("Entre 2 e 16 de agosto")
      } else if ($("#idade").val() >= 45 && $("#idade").val() <= 49) {
        $("#resCategoria").text("Entre 45 e 49 anos")
        $("#resData").text("A partir de 17 de agosto")
      } else {
        $("#tituloAgendamento").text("Sem Previsão de Vacinação!")
        $("#resCategoria").text("Sua faixa de idade não entra nos parâmetros de Vacinação")
        $("#resData").text("Sem Previsão")
      }; break;
      case "1": $("#resCategoria").text("Trabalhador de saúde, indígenas e quilombolas")
        $("#resData").text("17 de Janeiro"); break;
      case "2": $("#resCategoria").text("Profissionais de segurança pública e administração penitenciária")
        $("#resData").text("10 de Abril"); break;
      case "3": if ($("#idade").val() >= 47) {
        $("#resCategoria").text("Profissionais da educação a partir de 47 anos")
        $("#resData").text("10 de Abril"); break;
      } else {
        alert('Idade fora dos Parâmetros!')
        $("#resCategoria").text("Categoria sem data prevista de Vacinação!")
        $("#resData").text("Sem previsão")
        $("#tituloAgendamento").text("Sem Previsão de Vacinação!")
      }; break;

      case "4": if ($("#idade").val() >= 18 && $("#idade").val() <= 59) {
        $("#resCategoria").text("Síndrome de Down (18 a 59 anos)")
        $("#resData").text("10 de Maio")
      } else {
        alert('Idade fora dos Parâmetros!')
        $("#resCategoria").text("Categoria sem data prevista de Vacinação!")
        $("#resData").text("Sem previsão")
        $("#tituloAgendamento").text("Sem Previsão de Vacinação!")
      }; break;
      case "5": if ($("#idade").val() >= 18 && $("#idade").val() <= 59) {
        $("#resCategoria").text("Pacientes renais em diálise (18 a 59 anos)")
        $("#resData").text("10 de Maio"); break;
      } else {
        alert('Idade fora dos Parâmetros!')
        $("#resCategoria").text("Categoria sem data prevista de Vacinação!")
        $("#resData").text("Sem previsão")
        $("#tituloAgendamento").text("Sem Previsão de Vacinação!")
      }; break;
      case "6": if ($("#idade").val() >= 18 && $("#idade").val() <= 59) {
        $("#resCategoria").text("Transplantados imunossuprimidos (18 a 59 anos)")
        $("#resData").text("10 de Maio"); break;
      } else {
        alert('Idade fora dos Parâmetros!')
        $("#resCategoria").text("Categoria sem data prevista de Vacinação!")
        $("#resData").text("Sem previsão")
        $("#tituloAgendamento").text("Sem Previsão de Vacinação!")
      }; break;
      case "7": if ($("#idade").val() >= 47) {
        $("#resCategoria").text("Metroviários e ferroviários (trabalhadores do setor com 47 anos ou mais) exceto operadores de trem(Outra categoria).")
        $("#resData").text("11 de Maio"); break;
      } else {
        alert('Idade fora dos Parâmetros!')
        $("#resCategoria").text("Categoria sem data prevista de Vacinação!")
        $("#resData").text("Sem previsão")
        $("#tituloAgendamento").text("Sem Previsão de Vacinação!")
      }; break;

      case "8": if ($("#idade").val() >= 18) {
        $("#resCategoria").text("Grávidas e puérperas com comorbidades (acima de 18 anos)")
        $("#resData").text("11 de Maio"); break;
      } else {
        alert('Idade fora dos Parâmetros!')
        $("#resCategoria").text("Categoria sem data prevista de Vacinação!")
        $("#resData").text("Sem previsão")
        $("#tituloAgendamento").text("Sem Previsão de Vacinação!")
      }; break;

      case "9": if ($("#idade").val() >= 55 && $("#idade").val() <= 59) {
        $("#resCategoria").text("Pessoas com Deficiência Permanente (BPC) (55 a 59 anos)")
        $("#resData").text("11 de Maio"); break;
      } else {
        alert('Idade fora dos Parâmetros!')
        $("#resCategoria").text("Categoria sem data prevista de Vacinação!")
        $("#resData").text("Sem previsão")
        $("#tituloAgendamento").text("Sem Previsão de Vacinação!")
      }; break;

      case "10": if ($("#idade").val() >= 55 && $("#idade").val() <= 59) {
        $("#resCategoria").text("Pessoas com Comorbidades (55 a 59 anos)")
        $("#resData").text("1 de Maio"); break;
      } else {
        alert('Idade fora dos Parâmetros!')
        $("#resCategoria").text("Categoria sem data prevista de Vacinação!")
        $("#resData").text("Sem previsão")
        $("#tituloAgendamento").text("Sem Previsão de Vacinação!")
      }; break;

      case "11": if ($("#idade").val() >= 50 && $("#idade").val() <= 54) {
        $("#resCategoria").text("Pessoas com Deficiência Permanente (BPC) e pessoas com comorbidades (50 e 54 anos)")
        $("#resData").text("14 de Maio"); break;
      } else {
        alert('Idade fora dos Parâmetros!')
        $("#resCategoria").text("Categoria sem data prevista de Vacinação!")
        $("#resData").text("Sem previsão")
        $("#tituloAgendamento").text("Sem Previsão de Vacinação!")
      }; break;

      case "12": if ($("#idade").val() >= 18) {
        $("#resCategoria").text("Grávidas e puérperas com comorbidades (acima de 18 anos)")
        $("#resData").text("11 de Maio"); break;
      } else {
        alert('Idade fora dos Parâmetros!')
        $("#resCategoria").text("Categoria sem data prevista de Vacinação!")
        $("#resData").text("Sem previsão")
        $("#tituloAgendamento").text("Sem Previsão de Vacinação!")
      }; break;

      case "13": $("#resCategoria").text("Motoristas e cobradores de ônibus")
        $("#resData").text("18 de Maio"); break;
      case "14": if ($("#idade").val() >= 45 && $("#idade").val() <= 49) {
        $("#resCategoria").text("Pessoas com comorbidades e com deficiência permanente (BPC) (45 a 49 anos)")
        $("#resData").text("21 de Maio"); break;
      } else {
        alert('Idade fora dos Parâmetros!')
        $("#resCategoria").text("Categoria sem data prevista de Vacinação!")
        $("#resData").text("Sem previsão")
        $("#tituloAgendamento").text("Sem Previsão de Vacinação!")
      }; break;

      case "15": if ($("#idade").val() >= 40 && $("#idade").val() <= 45) {
        $("#resCategoria").text("Pessoas com comorbidades e com deficiência permanente (BPC) (40 a 44 anos)")
        $("#resData").text("28 de Maio"); break;
      } else {
        alert('Idade fora dos Parâmetros!')
        $("#resCategoria").text("Categoria sem data prevista de Vacinação!")
        $("#resData").text("Sem previsão")
        $("#tituloAgendamento").text("Sem Previsão de Vacinação!")
      }; break;

      case "16":
        $("#resCategoria").text("Metroviários e ferroviários (operadores de trem de todas as idades")
        $("#resData").text("11 de Maio");
        ; break;

      case "17":
        $("#resCategoria").text("Profissionais do transporte aéreo")
        $("#resData").text("28 de Maio");
        ; break;

      case "18":
        $("#resCategoria").text("Profissionais do transporte portuário")
        $("#resData").text("1 de junho");
        ; break;

      case "19":
        if ($("#idade").val() >= 18 && $("#idade").val() <= 46) {
          $("#resCategoria").text("Profissionais da Educação (18 e 46 anos)")
          $("#resData").text("Entre 21 e 31 de julho");
        } else {
          alert('Idade fora dos Parâmetros!')
          $("#resCategoria").text("Categoria sem data prevista de Vacinação!")
          $("#resData").text("Sem previsão")
          $("#tituloAgendamento").text("Sem Previsão de Vacinação!")
        }; break;

    }

    $("#containerForm").hide()
    $("#cardAgendamento").show()


  })


})