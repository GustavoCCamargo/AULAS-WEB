//criar referências aos elementos que quero manipular

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

console.log(frm);
console.log(resp);

frm.addEventListener("submit", (e) =>{
    e.preventDefault("Efita o envio do formulário");
    alert("Você cliclou no botão");



    const soma = Number(frm.inNum1.value) + Number(frm.inNum2.value) + Number(frm.inNum3.value) + Number(frm.inNum4.value);
    const media =Number(soma/4);

    resp.innerText = `A soma é ${soma} e a média é ${media}`;

    const nomeFilme = frm.nomeFilme.value;
    const horas = (Number(frm.tempoFilme.value)/60).toFixed(0);
    const minutos = Number(frm.tempoFilme.value)%60;

    resp.innerText = `O filme ${nomeFilme} tem duração de ${horas} horas e ${minutos} minutos.`;

})