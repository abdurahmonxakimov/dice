function randomnNumber() {
    let num = Math.round(Math.random() * 10)

    while (num < 1 || num > 6) {
        num = Math.round(Math.random() * 10)
    }

    return num
}

const imeges = {
    1: 'img/1.jpg',
    2: 'img/2.jpg',
    3: 'img/3.jpg',
    4: 'img/4.jpg',
    5: 'img/5.jpg',
    6: 'img/6.jpg',
}

function rollDice() {
    const num1 = randomnNumber()
    const num2 = randomnNumber()


    console.log(num1, num2);

    let img1 = document.getElementById('diceimg1')
    img1.src = imeges[num1]

    let img2 = document.getElementById('diceimg2')
    img2.src = imeges[num2]
}
