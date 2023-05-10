//import {con,query} from 'db/connect.js'
// import variavel para importa from 
//const result = query()
var keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ç"]
var words = ["Lebrow James", "Curry", "Trae Young", "Kevin Durant", "Jue Holiday", "Lamelo Ball", "Anthony Edwars", "Devin Boker", "Jason Tatum", "Anthony Davis", "John Collins"]
var letters = keys.length

var contwords = words.length
var drawnword
var  wordtype
var  wordcount
var word = [] //array sem nada 





for (var c = 0; c < 1; c++) {

    for (var i = 0; i < letters - 13; i++) {

        //document.getElementById("keyboard").appendChild(button)
        var divb = document.createElement("div")
        document.getElementById("keyboard1").appendChild(divb)
        divb.setAttribute("id", i)




        var button = document.createElement("button")

        document.getElementById(i).appendChild(button)

        button.setAttribute("value", keys[i])

        button.innerHTML = keys[i]




        divb.setAttribute("class", "col")

        button.setAttribute("class", "btn btn-success")

        button.setAttribute("type", "button")

        button.style.width = "45px"

        button.style.marginLeft = "-15px"

    }

    for (var i = 14; i < letters; i++) {



        var divb = document.createElement("div")

        document.getElementById("keyboard2").appendChild(divb)

        divb.setAttribute("id", i)




        var button = document.createElement("button")

        document.getElementById(i).appendChild(button)

        button.setAttribute("value", keys[i])

        button.innerHTML = keys[i]




        divb.setAttribute("class", "col")

        button.setAttribute("class", "btn btn-success")
        button.setAttribute("type", "button")

        button.style.width = "45px"

        button.style.marginLeft = "-15px"

    }

}

//document.getElementById("buttons").innerHTML = result




function lucky() {

    var diff = contwords // quantidades de inem no array

    var rand = Math.random() //pega um valor randomico 0 a 1 sortea

    rand = Math.floor(rand * diff) // mathch floor redonda pra baixo os decimais fica 0,1 fica 1 0,5 x 11 == x,5

    return rand //

}
 drawnword = words[lucky()] // as palavras o indice sortea 
//var wordtype = drawnword.split(' ')
//console.log(drawnword.split(''))
var wordspace = drawnword.split('')//dicidi ela se tiver espaço em prego e vdivi se for simples fica inteira ser for composta maior que 1

wordcount = wordspace.length //quantas palavras contando quantas palavras 

//console.log(wordcount)

if(wordcount > 1) {
    wordtype = true

   // console.log('composta de'+wordtype.length+'palavras')
}
else
{
    wordtype = false
}
//console.log(wordtype)
if (wordtype == true){ 
    for(var i = 0; i < wordcount;i++){
    word[i]  = wordspace[i].split('')////drawnword primeiro indice vai receber wordspace se meu wordtype for maior que 1 letra por letra separando
    //console.log(word[i])
    }
    
}
else{
    word[0] = wordspace[0].split('')//
}
for(var i = 0;i < word.length;i++){
    for (var j=0;j < word[i].length;j++){
  var input = document.createElement("input")
  input.setAttribute('type','text',)
  input.setAttribute('class','row') 
  input.setAttribute('value',word[i][j ])
  document.getElementById('word').appendChild(input) 
  input.style.width = "90px"
  input.style.marginLeft = "60px"
  input.style.border = "solid 5px $indigo-700"
  input.style.borderRadius = "15px"
  input.style.color = "white"

        
   
  
    }
}

for(var c = 0;c < letters;c++)

{




}
//console.log(word)





//console.log(drawnword.split(''))
//console.log(lucky())





