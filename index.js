let nomeHeroi = "Mulher Maravilha"
let nivelDeExperiencia = 3000
let nivel = ""

if (nivelDeExperiencia <1000){
nivel = "Ferro"
} else if (nivelDeExperiencia >=1001 && nivelDeExperiencia <=2000 ) {
    nivel = "Bronze"
} else if (nivelDeExperiencia >= 2001 && nivelDeExperiencia <= 5000){
    nivel = " Prata "
} else if (nivelDeExperiencia >= 5001 && nivelDeExperiencia <= 7000){
    nivel = "Ouro"
} else if (nivelDeExperiencia >= 7001 && nivelDeExperiencia <= 8000){
    nivel = Platina
} else if (nivelDeExperiencia >= 8001 && nivelDeExperiencia <= 9000){
    nivel = "Ascendente"
} else if (nivelDeExperiencia >= 9001 && nivelDeExperiencia <=1000){
    nivel = "Imortal"
} else if (nivelDeExperiencia >= 1001){
    nivel = "radiante"
}

console.log ("O herói de nome "  +  nomeHeroi, "está no nível de "  +  nivel)
