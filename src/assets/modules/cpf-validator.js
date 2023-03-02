export default function tratarCpf(cpf){
    const cpfLimpo = cpf.replace(/\D+/g, '')
    const cpfArray = Array.from(cpfLimpo)
    let multiplicador = cpfArray.length + 2

    function pegarDigito(){
        const arrayMult = cpfArray.map(num => {
            multiplicador--
            return num * multiplicador
        })

        const arraySum = arrayMult.reduce((acumulador, num) => acumulador += Number(num), 0)

        return (11 - (Number(arraySum) % 11))
    }
    
    function adicionarDigito(){
        const digito = pegarDigito()
        cpfArray.push(digito > 9 ? 0 : digito)
    }
    
    while(cpfArray.length < 11){
        if (cpfArray.length == 10){ multiplicador = cpfArray.length + 2 }
        adicionarDigito()
    
        if (cpfArray.length == 11 && cpfLimpo[0].repeat(cpfLimpo.length) != cpfLimpo){
            return cpfArray.join('')
        }
    }
}
