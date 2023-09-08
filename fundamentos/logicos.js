//2 trabalhos= freelance , se o 1 dar certo e o 2 dar certo no finde vc compra uma tv.
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //e
    const comprarTv50 = trabalho1 && trabalho2 //ou
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))