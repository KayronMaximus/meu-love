const dataInicio = new Date('2025-02-04T00:00:00'); 

function atualizarContador() {
    const agora = new Date();
    // 1. Calcula a diferença TOTAL em milissegundos
    const totalMilissegundos = agora.getTime() - dataInicio.getTime();

    // 2. Definições de tempo em milissegundos
    const MS_POR_SEGUNDO = 1000;
    const MS_POR_MINUTO = MS_POR_SEGUNDO * 60;
    const MS_POR_HORA = MS_POR_MINUTO * 60;
    const MS_POR_DIA = MS_POR_HORA * 24;
    const MS_POR_SEMANA = MS_POR_DIA * 7; 

    // 3. Cálculos Totais (Para exibir a contagem cumulativa)
    const totalDias = Math.floor(totalMilissegundos / MS_POR_DIA);
    const totalSemanas = Math.floor(totalMilissegundos / MS_POR_SEMANA);
    const anosAproximados = Math.floor(totalDias / 365.25);
    const mesesAproximados = Math.floor(totalDias / 30.4375);
    
    // 4. Cálculo das Horas, Minutos e Segundos (o que resta do último dia)
    
    // Usa 'restanteMilisegundos' para evitar conflito e calcular o 'resto' do dia.
    let restanteMilisegundos = totalMilissegundos % MS_POR_DIA; 
    
    // HORAS
    const horas = Math.floor(restanteMilisegundos / MS_POR_HORA);
    restanteMilisegundos %= MS_POR_HORA;
    
    // MINUTOS
    const minutos = Math.floor(restanteMilisegundos / MS_POR_MINUTO);
    restanteMilisegundos %= MS_POR_MINUTO;
    
    // SEGUNDOS
    const segundos = Math.floor(restanteMilisegundos / MS_POR_SEGUNDO);

    // 5. Atualizar o DOM (HTML)
    document.getElementById('anos').innerText = anosAproximados;
    document.getElementById('meses').innerText = mesesAproximados;
    document.getElementById('semanas').innerText = totalSemanas; 
    document.getElementById('dias').innerText = totalDias; 
    document.getElementById('horas').innerText = horas.toString().padStart(2, '0');
    document.getElementById('minutos').innerText = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').innerText = segundos.toString().padStart(2, '0');

    const segundosElemento = document.getElementById('segundos');
segundosElemento.innerText = segundos.toString().padStart(2, '0');

// 🌟 NOVO: Efeito de Pulso 🌟
// A. Remove a classe para garantir que ela possa ser aplicada de novo
segundosElemento.classList.remove('pulse');

// B. Força o navegador a recalcular o layout (muitas vezes necessário para reiniciar a animação)
void segundosElemento.offsetWidth; 

// C. Adiciona a classe, disparando a animação
segundosElemento.classList.add('pulse');
}

atualizarContador(); 
setInterval(atualizarContador, 1000);