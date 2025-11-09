// 1. Defina a data de início do relacionamento (em formato ISO: Ano-Mês-Dia)
// O JavaScript conta os meses de 0 a 11.
// Mês 0 = Janeiro, Mês 1 = Fevereiro, etc.
// A data 04/02/2025 é: new Date(2025, 1, 4)
const dataInicio = new Date('2025-02-04T00:00:00'); 

// 2. Função para calcular e exibir o tempo
function atualizarContador() {
    const agora = new Date();
    // Calcula a diferença em milissegundos
    let diferencaEmMilisegundos = agora.getTime() - dataInicio.getTime();

    // 3. Definições de tempo em milissegundos
    const MS_POR_SEGUNDO = 1000;
    const MS_POR_MINUTO = MS_POR_SEGUNDO * 60;
    const MS_POR_HORA = MS_POR_MINUTO * 60;
    const MS_POR_DIA = MS_POR_HORA * 24;

    // 4. Calcular Unidades (do maior para o menor para evitar problemas)
    
    // ANOS, MESES e SEMANAS são mais complexos de calcular de forma EXATA
    // apenas com milissegundos devido à variação de dias nos meses/anos.
    // Usaremos a aproximação mais comum para os demais.

    // A. Contagem em Dias, Horas, Minutos e Segundos
    // (Esta é a contagem MAIS precisa)

    const totalDias = Math.floor(diferencaEmMilisegundos / MS_POR_DIA);
    
    let diasRestantes = totalDias;
    
    // Simplificação de Anos e Meses (requer um cálculo mais complexo para ser EXATO)
    // Para simplificar e manter a precisão total, vamos exibir apenas Dias/Horas/Minutos/Segundos
    // ou usar as unidades que 'sobram' da maior para a menor:
    
    // ANOS
    const anosAproximados = Math.floor(totalDias / 365.25);
    diferencaEmMilisegundos %= (MS_POR_DIA * 365.25); // Remove os anos da diferença
    
    // DIAS (Remanescentes após remover anos)
    const dias = Math.floor(diferencaEmMilisegundos / MS_POR_DIA);
    diferencaEmMilisegundos %= MS_POR_DIA;
    
    // HORAS
    const horas = Math.floor(diferencaEmMilisegundos / MS_POR_HORA);
    diferencaEmMilisegundos %= MS_POR_HORA;
    
    // MINUTOS
    const minutos = Math.floor(diferencaEmMilisegundos / MS_POR_MINUTO);
    diferencaEmMilisegundos %= MS_POR_MINUTO;
    
    // SEGUNDOS
    const segundos = Math.floor(diferencaEmMilisegundos / MS_POR_SEGUNDO);

    // *Desafio Avançado: Para Meses Exatos, seria necessário usar a biblioteca Moment.js ou 
    // criar uma função que lide com a variação de dias de cada mês.*
    // Para o nosso guia inicial, focaremos na contagem em Anos (Aproximado), Dias, Horas, Minutos e Segundos.
    
    // Para preencher o campo 'Meses' podemos usar a contagem de dias/30.4375 (média de dias no mês)
    const mesesAproximados = Math.floor(totalDias / 30.4375);
    
    // 5. Atualizar o DOM (HTML)
    document.getElementById('anos').innerText = anosAproximados;
    document.getElementById('meses').innerText = mesesAproximados; // Contagem total
    // Se quiser ver apenas Dias remanescentes após meses/anos, altere aqui.
    document.getElementById('dias').innerText = totalDias; // Contagem Total de Dias
    document.getElementById('horas').innerText = horas.toString().padStart(2, '0');
    document.getElementById('minutos').innerText = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').innerText = segundos.toString().padStart(2, '0');
}

// 6. Iniciar a contagem e atualizar a cada segundo
atualizarContador(); // Chama uma vez imediatamente
setInterval(atualizarContador, 1000); // Chama a cada 1000ms (1 segundo)