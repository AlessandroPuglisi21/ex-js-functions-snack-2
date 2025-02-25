function creaContatoreAutomatico(tempo){
    let contatore = 0 

    const id = setInterval(() =>{
        console.log(contatore++)
    

    if(contatore === 5){
        clearInterval(id)
        console.log('tempo scaduto')
        }
    },tempo)
}

creaContatoreAutomatico(1000)