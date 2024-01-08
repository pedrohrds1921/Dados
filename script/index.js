const diceElements = [
    document.querySelector('.dice1'),
    document.querySelector('.dice2'),
    document.querySelector('.dice3'),
    document.querySelector('.dice4'),
    document.querySelector('.dice5'),
    document.querySelector('.dice6')
  ];

  const body= document.querySelector('body')

  const bgColors=['#235789','#C1292E','#392061','#1A1B25','#7F2CCB','#1B3022']

const rollingDices=()=> {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
        diceElements.forEach((dice, index) => {
        console.log(randomNumber)
         dice.style.display = index === randomNumber - 1 ? 'inline-block' : 'none';
       })
       body.style.backgroundColor = bgColors[randomNumber - 1];
}


function animacion(){
    let count=0
    const interval = setInterval(() => {
        if (count < 6) {
            diceElements.forEach((dice, index) => {
                dice.style.display = index === count ? 'inline-block' : 'none';
              
            });
            body.style.backgroundColor = bgColors[count];
            console.log(body.style.backgroundColor)
            count++;
        } else {
            clearInterval(interval); 
            rollingDices()
        }
    },260);
}




window.addEventListener('click',()=>{
    animacion()
})