function creaContatoreAutomatico(messaggio,stop){
    let contatore = 0 

    const id = setInterval(() =>{
        console.log(messaggio)
        contatore++
    

    if(contatore === stop){
        clearInterval(id)
        console.log('stop')
        }
    },1000)
}

creaContatoreAutomatico("ciao",3)