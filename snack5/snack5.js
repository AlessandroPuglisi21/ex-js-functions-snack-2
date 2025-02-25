function stampaOgniSecondo(parola) {
    let counter = 0; 

    const id = setInterval(() => {
        console.log(parola);
        counter++;

        if (counter === 5) { 
            clearInterval(id);
            console.log("Intervallo interrotto!");
        }
    }, 1000);
}

stampaOgniSecondo('miao');
