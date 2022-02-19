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
