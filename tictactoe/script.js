const players = document.querySelectorAll('.starter-btn');
const boxes = document.querySelectorAll('.cell');
const playerX = players[0];
const playerO = players[1];

let X = false;
let O = false;



function searchPossibleWin(clickedBoxes, winnings) {
    for(let i = 0; i < winnings.length; ++i) {
        let flag = false;
        for(let j = 0; j < winnings[i].length; ++j) {
            if(!clickedBoxes.includes(winnings[i][j])) {
                flag = true;
                break ;
            }
        }
        if(!flag) {
            const id1 = document.getElementsByClassName(`${String(winnings[i][0])}`)[0].textContent;
            const id2 = document.getElementsByClassName(`${String(winnings[i][1])}`)[0].textContent;
            const id3 = document.getElementsByClassName(`${String(winnings[i][2])}`)[0].textContent;
            if((id1 === 'X' && id2 === 'X' && id3 === 'X') || (id1 === 'O' && id2 === 'O' && id3 === 'O')) {
                return [winnings[i][0], winnings[i][1], winnings[i][2]] ;
            }
        }
    }
    return false ;
}




playerX.addEventListener('click', (e) => {
    e.preventDefault();
    if(!O) {
        X = true;
        playerX.style.backgroundColor = `gray`;
        playerX.style.color = `white`;
    }
});

playerO.addEventListener('click', (e) => {
    e.preventDefault();
    if(!X) {
        O = true;
        playerO.style.backgroundColor = `gray`;
        playerO.style.color = `white`;
    }
});

let clickedBoxes = [];

boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.textContent.trim();
        const boxId = Number(e.target.classList[1]);
        clickedBoxes.push(boxId);
        // console.log(boxId);
        if(target === "") {
            if(X) {
                box.textContent = 'X';
                X = false;
                O = true;
            } else {
                box.textContent = 'O';
                O = false;
                X = true;
            }
        }
        if(clickedBoxes.length >= 3) {
            // console.log("nkdm");
            const combo = searchPossibleWin(clickedBoxes, winnings)
            if(combo) {
                console.log(combo)
                // winner anouncement
                document.getElementsByClassName(`${combo[0]}`)[0].style.backgroundColor = `red`;
                document.getElementsByClassName(`${combo[1]}`)[0].style.backgroundColor = `red`;
                document.getElementsByClassName(`${combo[2]}`)[0].style.backgroundColor = `red`;
            }
        }
    })
})



const winnings =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

function search(target) {
    const ans = winnings.some(sub => {
        sub.length <= target.length &&
        winnings.every((val, i) => val == target[i]);
    });

    return ans ;
}