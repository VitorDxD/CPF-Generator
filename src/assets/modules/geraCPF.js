import tratarCPF from "./cpf-validator";
const btn = document.querySelector('.gerar')
const result = document.querySelector('.cpf-gerado')

btn.addEventListener('click', ()=>{

    function rand(min = 100000000, max = 999999999){
        return String(Math.floor( Math.random() * (max - min) + min ))
    }
    
    const cpf = tratarCPF(rand())
    const cpfFormatted = 
        cpf.slice(0, 3) + '.' +
        cpf.slice(3, 6) + '.' +
        cpf.slice(6, 9) + '-' +
        cpf.slice(9, 11)

    result.innerText = cpfFormatted

})