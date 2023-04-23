// We need to do something when the grid cells are clicked
var nextplayerElement = document.getElementById(
    "next-player");
var gridCells = document.querySelectorAll('.grid > *')
// console.log( gridCell); // a list of DOM noeds



// "State" of the application
// state means data that is needed to run the application.
var nextPlayer = 'X'
var cellStates = [
    '','','',
    '','','',
    '','',''
];

var winningStates=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function setNextPlayer(){
    //console.log( index )
    nextPlayer = (nextPlayer === 'X') ? 'O' : 'X';
    nextplayerElement.textContent = nextPlayer; // textContent will change the displaying Next Player data
}

function isGameOver(){
   for(var i=0; i< winningStates.length; i++){
    var winningState = winningStates[i];

    if(
        cellStates[winningState[0]] !=='' &&
        cellStates[winningState[0]] === cellStates[winningState[1]] &&
        cellStates[winningState[1]] === cellStates[winningState[2]]
    ){
        alert( 'Game Over')
        return true;
    }
   }
   return false;
}

console.log( cellStates[winningStates[0]] )
console.log( cellStates[winningStates[1]] );


gridCells.forEach(
    function( gridCell ){
        gridCell.addEventListener('click',function(){
            //alert('You clicked a grid cell')
           
            var index = gridCell.getAttribute( 'data-index');
            
            // check for invalid move
            if(cellStates[index] !==''){
                alert('This cell has already been filled. Select some oter cell');
                return;
            }

            gridCell.textContent = nextPlayer; // textContext will put data of user in the block
            cellStates[index]= nextPlayer; // nextPlayer's data will enter into the array
            setNextPlayer( );

            isGameOver();
        })
    }
)