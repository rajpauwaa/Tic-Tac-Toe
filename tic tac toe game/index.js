const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');
const xSym = '✕';
const oSym = '○';

let gamestart = true;
let xnext = true;
let winner = null;

//functions
const letToSym = (letter) => letter == 'x' ? xSym : oSym;

const win = (letter) => {
    gamestart = false;
    winner = letter;
    if (winner == 'x') {
        statusDiv.innerHTML = `${letToSym(winner)} has won!`;
    } else {
        statusDiv.innerHTML = `<span>${letToSym(winner)} has won!</span>`;
    }
}

const checkGameStatus = () => {
    const one = cellDivs[0].classList[1];
    const two = cellDivs[1].classList[1];
    const three = cellDivs[2].classList[1];
    const four = cellDivs[3].classList[1];
    const five = cellDivs[4].classList[1];
    const six = cellDivs[5].classList[1];
    const seven = cellDivs[6].classList[1];
    const eight = cellDivs[7].classList[1];
    const nine = cellDivs[8].classList[1];

    //decide winner
    if (one && one === two && one === three) {
        win(one);
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');

    } else if (four && four === five && four === six) {
        win(four);
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');

    } else if (seven && seven === eight && seven === nine) {
        win(seven);
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');

    } else if (one && one === four && one === seven) {
        win(one);
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');

    } else if (two && two === five && two === eight) {
        win(two);
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');

    } else if (three && three === six && three === nine) {
        win(three);
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (one && one === five && one === nine) {
        win(one);
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');

    } else if (three && three === five && three === seven) {
        win(three);
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');

    } else if (one && two && three && four && five && six && seven && eight && nine) {
        gamestart = false;
        statusDiv.innerHTML = ' Game is Tied!'
    }
    else {
        xnext = !xnext;
        if (xnext) {
            statusDiv.innerHTML = `${xSym} is next`;
        }
        else {
            statusDiv.innerHTML = `<span> ${oSym} is next </span`;
        }

    }
};



//event handle
const handleReset = () => {
    xnext = true;
    statusDiv.innerHTML = `${xSym} is next`;
    winner = null;
    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won'); 

    }
};

const handlCellClick = (e) => {
    const classList = e.target.classList;


    if (classList[1] == 'x' || classList[1] == 'o') {
        return;
    }

    if (xnext) {
        classList.add('x');
        checkGameStatus();
    }
    else {
        classList.add('o');
        checkGameStatus();
    }
};
//event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handlCellClick);
}