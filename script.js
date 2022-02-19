//Constante com data atual
//quando usamos data.getMonth() retorna uma lista com Jan de indice 0
const data = new Date();
console.log(data.getDate());

const renderizarCalendario = () => {
    data.setDate(1)

    //Criando variavel para gerar lista numerica dos dias
    const diasDoMes = document.querySelector('.dias');
    let dias = "";
    //criando variavel para identificar o ultimo dia de cada mes
    const ultimoDia = new Date(data.getFullYear(), data.getMonth() + 1,0).getDate();
    //criando variavel para identificar o primeiro dia de cada mes
    const diasMesAnterior = new Date(data.getFullYear(), data.getMonth(),0).getDate();
    //index do primeiro dia do mes
    const primeiroDiaIndex = data.getDay()
    //index do ultimo dia do mes
    const ultimoDiaIndex = new Date(data.getFullYear(), data.getMonth() + 1,0).getDay();
    //index dos dias da semana
    const proximosDias = 7 - ultimoDiaIndex - 1;
    //Lista de meses
    const meses = [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez"
    ];

    //Insere o mês no HTML usando o indice correspondente ao mes atual
    document.querySelector('.mes-titulo').innerHTML = meses[data.getMonth()];

    //DESCOBRIR COMO DEIXAR A DATA EM PORTUGUES ESCRITA DA FORMA QUE ESTÁ
    document.querySelector('.mes-data-completa').innerHTML = new Date().toDateString();

    for(let x = primeiroDiaIndex; x > 0; x--){
        dias += `<div class = "outro-mes">${diasMesAnterior - x + 1}</div>`;
    }

    //Metodo para gerar lista de dias do mes utilizando variavel do ultimoDia
    for(let i = 1; i <= ultimoDia; i++) {
        if(i === new Date().getDate() && data.getMonth() === new Date().getMonth()) {
            dias += `<div class = "hoje">${i}</div>`;
        } else {
            dias += `<div>${i}</div>`;
        }    
    }

    for(let j = 1; j <= proximosDias; j++) {
        dias += `<div class = "outro-mes">${j}</div>`;
        diasDoMes.innerHTML = dias;
    }
}

document.querySelector('.anterior').addEventListener('click', () => {
    data.setMonth(data.getMonth() - 1);
    renderizarCalendario();
})

document.querySelector('.proximo').addEventListener('click', () => {
    data.setMonth(data.getMonth() + 1);
    renderizarCalendario();
})

renderizarCalendario();