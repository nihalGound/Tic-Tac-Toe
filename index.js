const playerTurn = document.getElementById('Palyer-turn');
const boxes = document.querySelectorAll('.box');
const newGame = document.getElementById('options');
let Turn;
let gridIndex;
const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function checkGame(){
    winningPositions.forEach((position)=>{
        if((gridIndex[position[0]]!=="" && gridIndex[position[1]]!==""&& gridIndex[position[2]]!=="")&&(gridIndex[position[0]]===gridIndex[position[1]])&&(gridIndex[position[1]]===gridIndex[position[2]])){
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });
        let winner = gridIndex[position[0]];
            playerTurn.textContent = `Winner is ${winner}`;
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
            newGame.style.scale="1";
            return;
        }
    })
    gameDraw();
}
function initGame(){
    gridIndex = ["","","","","","","","",""];
    Turn = "X";
    playerTurn.textContent = `Current Player: ${Turn}`;
    boxes.forEach((box)=>{
        box.textContent = "";
        box.style.pointerEvents = "auto";
        box.classList.remove("win");
    })
    
}
initGame();
function swapTurn(){
    if(Turn==="X"){
        Turn ="0";
    }
    else{
        Turn = "X";
    }
}
function handleClick(index){
    gridIndex[index]=Turn;
    boxes[index].textContent=Turn;
    swapTurn();
    playerTurn.textContent = `Current Player: ${Turn}`;
    checkGame();
}
boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        handleClick(index);
    })
})

function gameDraw(){
    for (let index of gridIndex) {
        if((index==="")){
            return ;
        }
    }
    boxes.forEach((box) => {
        box.style.pointerEvents = "none";
    });
    playerTurn.textContent = "Game Draw!!";
    newGame.style.scale = "1";
}
newGame.onclick = ()=>{
    initGame();
}