function contoAllaRovescia(num){
    let contatore = num+1

    const id = setInterval(() =>{
        contatore--
        console.log(contatore)
    

    if(contatore === 0){
        clearInterval(id)
        console.log('Fine Conto')
        }
    },1000)
}

contoAllaRovescia(5)