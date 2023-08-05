const boxes = Array.from(document.getElementsByClassName('box'));
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', reset);
let headerText = document.getElementById('header-text');
const areas = [null, null, null, null, null, null, null, null, null];
const o_text = "o";
const x_text = "x";
let currentPlayer = o_text;
let winBoxesIds = [];

function bindClickEvent() {
    boxes.forEach(box => {
        box.addEventListener('click', handleBoxClick);
    })
}

bindClickEvent();
function handleBoxClick(e) {
    if(winBoxesIds.length > 0){
        return
    }
    const id = e.target.id;
    if (!areas[id]) {
        areas[id] = currentPlayer;
        e.target.innerHTML = currentPlayer;


        if (hasPlayerWon(currentPlayer)) {
            headerText.innerHTML = `${currentPlayer} has won!!`;
            headerText.style.background = 'lightgreen';
            changeWinBoxesBg();
            return
        }
        currentPlayer = currentPlayer === o_text ? x_text : o_text;
      }


    }

    function hasPlayerWon(cPlayer){
        if(areas[0] === cPlayer){
            if(areas[1]===cPlayer && areas[2]===cPlayer){
                winBoxesIds = [0,1,2];
                return true;
            }
            if(areas[3]===cPlayer && areas[6]===cPlayer){
                winBoxesIds = [0,3,6];
                return true;
        }
        if(areas[4]===cPlayer && areas[8]===cPlayer){
          winBoxesIds = [0,4,8];
          return true;
        }
      }
      if(areas[4] === cPlayer){
        if(areas[1]===cPlayer && areas[7]===cPlayer){
          winBoxesIds = [4,1,7];
          return true;
        }
        if(areas[2]===cPlayer && areas[6]===cPlayer){
          winBoxesIds = [4,2,6];
          return true;
        }
        if(areas[3]===cPlayer && areas[5]===cPlayer){
          winBoxesIds = [4,3,5];
          return true;
        }
      }
      if(areas[8] === cPlayer){
        if(areas[7]===cPlayer && areas[6]===cPlayer){
          winBoxesIds = [8,7,6];
          return true;
        }
        if(areas[5]===cPlayer && areas[2]===cPlayer){
          winBoxesIds = [8,5,2];
          return true;
        }
      }
    }

    function changeWinBoxesBg(){
      winBoxesIds.forEach(id=>{
        boxes[id].style.background = 'lightgreen'
      })
      boxes.forEach(box=>{
        box.style.cursor = 'not-allowed'
      })
    }

    function reset() {
      winBoxesIds = [];
      areas.forEach((val, index)=>{
        areas[index] = null;
      })
      boxes.forEach(box=>{
        box.innerHTML = '';
        box.style.background = '';
        box.style.cursor = 'pointer'
      })
      headerText.innerHTML = "Ready to play..";
      headerText.style.background = "";
      currentPlayer = o_text;
    }