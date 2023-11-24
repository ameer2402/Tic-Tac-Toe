let currentPlayer='X';
let gameActive=true;
let gameState=['','','','','','','','',''];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let ex=document.getElementById('ex');
let circle=document.getElementById('oo');
let body=document.querySelector('body');

 function playerMove(cell){
    if(gameActive && gameState[cell]===''){
       gameState[cell]=currentPlayer;
       document.getElementsByClassName('cell')[cell].innerText=currentPlayer;
       document.getElementsByClassName('cell')[cell].style.color = currentPlayer==='X'?'yellow':'skyblue';
       if(checkWin()){
        document.getElementById('result').innerText=`Player ${currentPlayer} wins`;
        gameActive=false;
        return;
       }
       if(checkDraw()){
        document.getElementById('result').innerText = 'It\'s a draw!';
            gameActive = false;
       }
       currentPlayer=currentPlayer==='X'?'O':'X';
    }

 }
 function checkWin() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            if(gameState[c]==='X'){
                ex.innerText=parseInt(ex.innerText)+1;
                document.getElementById('result').style.backgroundColor="#fff2b2";
                document.getElementById('result').style.color="#7c620c";
            }
            else{
                circle.innerText=parseInt(circle.innerText)+1;
                document.getElementById('result').style.backgroundColor="#98f5e1";
                document.getElementById('result').style.color="#236c5b";
                
            }
            document.getElementById('result-box').style.display = 'flex';
            document.getElementById('result').style.display="block";
            setTimeout(() => {
                document.getElementById('result-box').style.display = 'none';
            }, 2000);
            
            return true;
        }
    }
    return false;
}

function checkDraw() {
    
    if(gameState.indexOf('') === -1){
        document.getElementById('result-box').style.display = 'flex';
     document.getElementById('result').style.display="block";
     document.getElementById('result').style.backgroundColor="#ededed";
                document.getElementById('result').style.color="#5d5d5d";
                setTimeout(() => {
                    document.getElementById('result-box').style.display = 'none';
                }, 2000);
     return true;
    }
    return false;

}


function resetGame() {
    
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('result').innerText = '';
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
    document.getElementById('result-box').style.display = 'none';
}
function clearHistory() {
    document.getElementById('result-box').style.display = 'none';

    console.log("hi");
    ex.textContent = 0;
    circle.textContent = 0;
}

