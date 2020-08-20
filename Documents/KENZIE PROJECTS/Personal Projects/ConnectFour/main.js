

//HTML
    // polish
//CSS
    // polish 
let playAreaArray = 
        [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
        ]
 
count = 0
playerColor = 'black'
function changeTurn(){
    
    if (count%2===0){
        playerColor = 'red'
    }
    if (count%2===1) {
        playerColor = 'black'
    }
    count ++
}

function updateGrid(chosen){
    playAreaArray[parseInt(chosen.dataset.row)][parseInt(chosen.dataset.column)] = playerColor
}

document.querySelector('#playArea').addEventListener('click', 
    function placePiece(evt){
        let event = evt.target
        if (event.className === 'disk'){
            event = event.parentElement
        }
        
        
        childArray = Array.from(event.children)
        
        for(let element in childArray){
            
            if (childArray[element].style.background === 'white'){
                let chosen = event.children[element]
                chosen.style.background = playerColor
                updateGrid(chosen)
                win(chosen)
                changeTurn()
                return
            }
        }
        
        
    }
)





function win(chosen){
    let indexRow = Number(chosen.dataset.row)
    let indexColumn = Number(chosen.dataset.column)
    let diagL = []
    let diagR = []
    if(chosen.dataset.row <= 2){   
        if (
            playAreaArray[indexRow][indexColumn] === 
            playAreaArray[indexRow+1][indexColumn] &&
            playAreaArray[indexRow][indexColumn] ===
            playAreaArray[indexRow+2][indexColumn] &&
            playAreaArray[indexRow][indexColumn] ===
            playAreaArray[indexRow+3][indexColumn] 
            ){
                alert (playerColor + ' Wins') 
                return (playerColor + ' Wins') 
        }
    }   
        if (playAreaArray[indexRow].join('').includes('redredredred') || playAreaArray[indexRow].join('').includes('blackblackblackblack')) {
            alert (playerColor + ' Wins') 
            return (playerColor + ' Wins')   
        }
        
        for(i = -3; i <=3; i++){
            if(indexRow+i>=0 && indexRow+i<=5){
                diagL.push(playAreaArray[indexRow+i][indexColumn-i])
            }
        }
        
        for(i = -3; i <=3; i++){
            if(indexRow+i>=0 && indexRow+i<=5){
                diagR.push(playAreaArray[indexRow+i][indexColumn+i])
            }
        }
        
        
        if (
            diagL.join('').includes('redredredred') || diagL.join('').includes('blackblackblackblack') || diagR.join('').includes('redredredred') || diagR.join('').includes('blackblackblackblack')
            )
            {
                alert  (playerColor + ' Wins') 
                return (playerColor + ' Wins')   
            }
            
            if (playAreaArray[0].includes(0) !== true){
                alert ('tie')
                return('tie')
            }
        
}
        