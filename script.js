// Variáveis globais
var iframeDocument = null;
var iframe = null;
var setupListeners = true;
var segundoExecucao = 0;
var timer = null;
var estadoSimulacaoRodando = false;
var setupEfetuado = false;
var versaoGrafico = "1";
var agentesSimulacao = [];
var tipoModelo = document.getElementById('tipoModelo').value;

// Função chamada quando o arquivo é selecionado
function handleFileSelect(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const htmlContent = event.target.result;
    iframe = document.getElementById('janelaSimulacao');

    iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(htmlContent);
    iframeDocument.close();

    document.getElementById("configuracao").style.display = "block";
    const configurationSection = document.getElementById('configuracao');
    configurationSection.classList.remove('hidden');
    executarAudio(`Simulação carregada com sucesso!`);
    const divGrafico = iframeDocument.getElementsByClassName('netlogo-plot')[0];
    versaoGrafico = divGrafico.getAttribute('data-highcharts-chart');
  };

  reader.readAsText(file);
}

// Função que será executada a cada segundo
function pegarDados() {
  if (!iframeDocument) return;

  if (emExecucao()) {
    segundoExecucao++;
    try {
      const intervaloSegundos = parseInt(document.getElementById('intervaloSegundos').value);
      if (segundoExecucao % intervaloSegundos === 0) {
        executarMonitoramento();
      }
    } catch (error) {
      alert("Erro ao executar o monitoramento. Verifique se o valor de segundos para execução está correto.");
    }
  }
}

// Executa o monitoramento e reproduz a resposta em áudio
function executarMonitoramento() {
  try {
    let agentesSimulacao = [];
    // para modelo Wolves e Sheep com energia
    let somaEnergia = 0;
    // atualizando para garantir que está certo
    tipoModelo = document.getElementById('tipoModelo').value;

    // variáveis
    if (tipoModelo == "wolveSheep") {
      agentesSimulacao = ["sheep","wolves"];
    } else if (tipoModelo == "fireflies") {
      agentesSimulacao = ["turtles"];
    } else if (tipoModelo == "traffic") {
      agentesSimulacao = ["turtles"];
    } else if (tipoModelo == "segregation") {
      agentesSimulacao = ["turtles"];
    }
    // cabeçalho do CSV do TextArea
    var textoParaSalvar = document.getElementById("arquivoDownload").value;
    if (textoParaSalvar == "") {        
        if (tipoModelo == "wolveSheep") {
          textoParaSalvar += "second;" + agentesSimulacao.join(";") + ";energy\n";
        } else if (tipoModelo == "fireflies") {
          textoParaSalvar += "second;flashing_fireflies\n";
        } else if (tipoModelo == "traffic") {
          textoParaSalvar += "second;car_speed;min_speed;max_speed\n";
        } else if (tipoModelo == "segregation") {
          textoParaSalvar += "second;agents;unhappy\n";
        } else {
          textoParaSalvar += "\n";
        }
    }
    
    const situacaoAgentes = iframe.contentWindow.BreedManager.breeds();
    const nomesAgentes = Object.keys(situacaoAgentes);
    var textoInformativo = "Contagem: ";
    if (tipoModelo == "wolveSheep") {
        somaEnergia = iframe.contentWindow.world._patches.reduce((acumulador, objeto) => acumulador + objeto._varManager["countdown"], 0);
    }
    var dadosParaSalvar = [0 ,0 ,0, 0];


    // passando para maiuscula para comparar com o que vem do netlogo
    agentesSimulacao = agentesSimulacao.map(agente => agente.toUpperCase());
    for (const nomeAgente of nomesAgentes) {
      if (agentesSimulacao.includes(nomeAgente.toUpperCase())) {
        const { originalName, members } = situacaoAgentes[nomeAgente];
        if (tipoModelo == "wolveSheep") {
            textoInformativo += `raça: ${originalName} contém ${members.length} ${members.length != 1 ? 'membros' : 'membro'}`;
            dadosParaSalvar[agentesSimulacao.indexOf(nomeAgente)+1] = members.length;
        } else if (tipoModelo == "fireflies") {
            // vagalume aceso fica com cor 45
            var turtlesWithColor45 = members.filter(function(turtle) {
              return turtle._color === 45;
            });
            textoInformativo += `Simulação contém ${turtlesWithColor45.length} ${turtlesWithColor45.length != 1 ? 'vagalumes piscando' : 'vagalume piscando'}`;
            dadosParaSalvar[agentesSimulacao.indexOf(nomeAgente)+1] = turtlesWithColor45.length;
          } else if (tipoModelo == "traffic") {
            // Encontrar o maior e o menor speed usando reduce
            var { maiorSpeed, menorSpeed } = members.reduce((acc, turtle) => {
                const speed = turtle._varManager.speed;
                return {
                    maiorSpeed: Math.max(acc.maiorSpeed, speed),
                    menorSpeed: Math.min(acc.menorSpeed, speed)
                };
            }, { maiorSpeed: -Infinity, menorSpeed: Infinity });
            
            // Encontrar a velocidade do Turtle com _color igual a 15 usando find
            var velocidadeColor15 = members.find(turtle => turtle._color === 15)?._varManager.speed;
          
            textoInformativo += `Velocidade do Carro: ${velocidadeColor15.toFixed(2)} Velocidade Mínima: ${menorSpeed.toFixed(2)} Velocidade Máxima: ${maiorSpeed.toFixed(2)}`;
            dadosParaSalvar[1] = velocidadeColor15.toFixed(2);
            dadosParaSalvar[2] = menorSpeed.toFixed(2);
            dadosParaSalvar[3] = maiorSpeed.toFixed(2);
          } else if (tipoModelo == "segregation") {
            // itens com happy = true
            var turtlesWithUnHappy = members.filter(function(turtle) {
              return turtle._varManager["happy?"] != true;
            });
            textoInformativo += `Simulação contém ${members.length} agentes sendo ${turtlesWithUnHappy.length} ${turtlesWithUnHappy.length != 1 ? 'agentes infelizes' : 'agente infeliz'}`;
            dadosParaSalvar[1] = members.length;
            dadosParaSalvar[2] = turtlesWithUnHappy.length;
          }
        
      }
    }
    if (tipoModelo == "wolveSheep") {
      textoInformativo += `. Energia total ${Math.floor(somaEnergia)}.`;
      dadosParaSalvar[3] = Math.floor(somaEnergia);
      textoParaSalvar += `\n${segundoExecucao};${dadosParaSalvar[1]};${dadosParaSalvar[2]};${dadosParaSalvar[3]}`;
    } else if (tipoModelo == "fireflies") {
      textoParaSalvar += `\n${segundoExecucao};${dadosParaSalvar[1]}`;
    } else if (tipoModelo == "traffic") {
      textoParaSalvar += `\n${segundoExecucao};${dadosParaSalvar[1]};${dadosParaSalvar[2]};${dadosParaSalvar[3]}`;
    } else if (tipoModelo == "segregation") {
      // "second;agents;unhappy\n";
      textoParaSalvar += `\n${segundoExecucao};${dadosParaSalvar[1]};${dadosParaSalvar[2]}`;
    }
    executarAudio(textoInformativo);    
    document.getElementById("arquivoDownload").value = textoParaSalvar;
  } catch (error) {
    console.log(error);
  }
  
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

// Verifica se a simulação está em execução
function emExecucao() {
  if (!iframeDocument) return false;

  const elements = iframeDocument.getElementsByClassName('netlogo-forever-button');
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.classList.contains('netlogo-active')) {
      if (!estadoSimulacaoRodando) {
        executarAudio(`Iniciando simulação. A contagem será informada a cada ${parseInt(document.getElementById('intervaloSegundos').value)} segundos`);
        estadoSimulacaoRodando = true;
      }
      return true;
    }
    if (!element.classList.contains('netlogo-disabled') && !setupEfetuado) {
        executarAudio(`Setup da simulação executado com sucesso.`);
        setupEfetuado = true;
        const divGrafico = iframeDocument.getElementsByClassName('netlogo-plot')[0];
        versaoGrafico = divGrafico.getAttribute('data-highcharts-chart');
    }
  }
  const divGrafico = iframeDocument.getElementsByClassName('netlogo-plot')[0];
  if (versaoGrafico != divGrafico.getAttribute('data-highcharts-chart')){
      // executarAudio(`Setup da simulação executado com sucesso devido a mudança no gráfico`);
      versaoGrafico = divGrafico.getAttribute('data-highcharts-chart');
  }
  


  if (estadoSimulacaoRodando) {
    executarAudio("Pausando simulação");
    estadoSimulacaoRodando = false;
  }
  return false;
}

// Inicia o timer para pegar dados a cada segundo
function iniciarMonitoramento() {
  if (timer) return;
  timer = setInterval(pegarDados, 1000);
}

// Para o timer de monitoramento
function pararMonitoramento() {
  clearInterval(timer);
  timer = null;
}

// Realiza o download o texto do TextArea
function downloadTexto() {
  const textarea = document.getElementById('arquivoDownload');
  const texto = textarea.value;
  
  // Cria um elemento de link
  const link = document.createElement('a');
  link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(texto);
  link.download = 'simulacao.csv';
  
  // Simula um clique no link para iniciar o download
  link.click();
}

// Event listener para o botão de seleção de arquivo
document.getElementById('arquivoSimulacao').addEventListener('change', handleFileSelect);
document.getElementById('botaoDownload').addEventListener('click', downloadTexto);

iniciarMonitoramento();