let ajatusnappi = document.getElementById("ajatusnappi")
let ajatusnäyttö = document.getElementById("ajatusnäyttö")

let parempiajatus = document.getElementById("parempiajatus")
let automaattiajatus = document.getElementById("automaattiajatus")



let ajatukset=0

let multi=1
let multicosti=25

let automaattiajatukset=0
let automaattiajatustenhinta=15

function displayAjatusAmt(){
    ajatusnäyttö.innerText = "Sinulla on "+Math.round(ajatukset*10)/10+" ajatusta."
}

ajatusnappi.addEventListener("click", function(){
    ajatukset+=multi
    displayAjatusAmt()
})

parempiajatus.addEventListener("click", function(){
    if (ajatukset>=multicosti){
        ajatukset-=multicosti
        multicosti*=1.5
        multi++
        displayAjatusAmt()
        parempiajatus.innerText = "Suur-ajattelija, "+Math.round(multicosti*10)/10+" ajatusta"
    }
    else{
        alert("Sun ajatukset ei vaan riitä tähän.")
    }
})

automaattiajatus.addEventListener("click", function(){
    if (ajatukset>=automaattiajatustenhinta){
        ajatukset-=automaattiajatustenhinta
        automaattiajatustenhinta*=1.5
        automaattiajatukset++
        displayAjatusAmt()
        automaattiajatus.innerText = "Automaatti-ajattelija, "+Math.round(automaattiajatustenhinta*10)/10+" ajatusta"
    }
    else{
        alert("Sun ajatukset ei vaan riitä tähän.")
    }
})

setInterval(function(){
    ajatukset+=automaattiajatukset
    displayAjatusAmt()
},1000/3)