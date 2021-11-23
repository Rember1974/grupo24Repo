let numero = 17

console.log(esprimo(numero));


function esprimo(num) {
    let cont = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            cont = cont + 1
            
        }
            
    }
    if (cont == 2) {
        return true
    }
    return false
}