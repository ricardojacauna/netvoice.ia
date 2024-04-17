var dataFile = "";
const inputQuestion = document.getElementById("inputQuestion");
const header = document.getElementById("header");
const result = document.getElementById("result");


const OPENAI_API_KEY = "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";

function SendQuestion() {
  var sQuestion = `${header.value} \n ${dataFile} \n ${inputQuestion.value}`;
  executarAudio(`Enviando pergunta a IA`);
  fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + OPENAI_API_KEY,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo-instruct",
      prompt: sQuestion,
      max_tokens: 2048, // tamanho da resposta
      temperature: 0.5, // criatividade na resposta
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (result.value) result.value += "\n";

      if (json.error?.message) {
        result.value += `Error: ${json.error.message}`;
      } else if (json.choices?.[0].text) {
        var text = json.choices[0].text || "Sem resposta da IA";
        executarAudio(`Resposta: ${text}`);
        result.value += "Chat GPT: " + text;
      }

      result.scrollTop = result.scrollHeight;
    })
    .catch((error) => console.error("Error:", error))
    .finally(() => {
      inputQuestion.value = "";
      inputQuestion.disabled = false;
      inputQuestion.focus();
    });

  if (result.value) result.value += "\n\n\n";

  result.value += `Eu: ${sQuestion}`;
  inputQuestion.value = "Carregando...";
  inputQuestion.disabled = true;

  result.scrollTop = result.scrollHeight;
}

// Função chamada quando o arquivo é selecionado
function handleFileSelect(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    dataFile = event.target.result;
    executarAudio("Carregando arquivo para envio a IA.");
  };

  reader.readAsText(file);
}

// Event listener para o botão de seleção de arquivo
document.getElementById('dataFileInput').addEventListener('change', handleFileSelect);
document.getElementById('submitButton').addEventListener('click', SendQuestion);
inputQuestion.addEventListener("keypress", (e) => {
  if (inputQuestion.value && e.key === "Enter") SendQuestion();
});


 // Mapeamento de textos para cada opção selecionada
 var textosPorOpcao = {
  wolveSheep: " Considere que a tabela abaixo representa os dados de um gráfico cartesiano.\n"
  + " Onde a coluna “second” representa o tempo e fará parte do eixo x ou abscissas. \n"
  + " E as colunas “wolves”, ”sheep”, ”energy” estão representadas no eixo y ou ordenadas. Wolves e Sheeps são animais.",
  fireflies: " Considere que a tabela abaixo representa os dados de um gráfico cartesiano.\n"
  + " Onde a coluna “second” representa o tempo e fará parte do eixo x ou abscissas. \n"
  + " E as colunas “flashing_fireflies” está representada no eixo y ou ordenadas. Flashing Fireflies são vagalumes piscando.",
  traffic: " Considere que a tabela abaixo representa os dados de um gráfico cartesiano.\n"
  + " Onde a coluna “second” representa o tempo e fará parte do eixo x ou abscissas. \n"
  + " E as colunas “car_speed”, ”min_speed”, ”max_speed” estão representadas no eixo y ou ordenadas.\n"
  + "Car Speed é a velocidade do carro vermelho, min_speed é a menor velocidade entre todos os carros e max_speed é a maior velocidade entre todos os carros",  
  segregation: " Considere que a tabela abaixo representa os dados de um gráfico cartesiano.\n"
  + " Onde a coluna “second” representa o tempo e fará parte do eixo x ou abscissas. \n"
  + " E as colunas “agents” e ”unhappy” estão representadas no eixo y ou ordenadas. Agentes é a quantidade de agentes da simulação e Unhappy é a quantidade de agentes infelizes."
};

// Função para atualizar o textarea com base na opção selecionada
function atualizarTextarea() {
  var select = document.getElementById("tipoModelo");
  var textarea = document.getElementById("header");
  var opcaoSelecionada = select.value;
  var texto = textosPorOpcao[opcaoSelecionada];
  textarea.value = texto || ""; // Define o texto no textarea, se estiver disponível
}

// Reproduz a resposta em áudio
function executarAudio(texto) {
  try {
    const speech = new SpeechSynthesisUtterance(texto);
    speech.lang = 'pt-BR';
    window.speechSynthesis.speak(speech);
  } catch (error) {
    alert("Seu navegador não dá suporte a áudio.");
  }
}

// Event listener para mudanças na opção selecionada
document.getElementById("tipoModelo").addEventListener("change", atualizarTextarea);

// Chamada inicial para definir o textarea conforme a opção inicial selecionada
atualizarTextarea();