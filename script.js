//Constante com data atual
//quando usamos data.getMonth() retorna uma lista com Jan de indice 0
const data = new Date();


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
document.querySelector('.mes-data-completa').innerHTML = data.toDateString();

//Criando variavel para gerar lista numerica dos dias
const diasDoMes = document.querySelector('.dias');
let dias = "";

//criando variavel para identificar o ultimo dia de cada mes
const ultimoDia = new Date(data.getFullYear(), data.getMonth() + 1,0).getDate();

//Metodo para gerar lista de dias do mes utilizando variavel do ultimoDia
for(let i = 1; i <= ultimoDia; i++) {
    // x += 10  x= x + 10
    dias+= `<div>${i}</div>`;
    diasDoMes.innerHTML = dias;
}

