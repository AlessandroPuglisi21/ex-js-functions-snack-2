
const creaTimer = (tempo) => {
    return () => {
        setTimeout(() => {
            console.log("Tempo scaduto!");
        }, tempo);
    }
}


const timerDi3Secondi = creaTimer(3000);
timerDi3Secondi();
