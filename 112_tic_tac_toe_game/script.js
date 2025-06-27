let currentPlayer = "X"
let arr = Array(9).fill(null);

function checkWinner() {
    if (
        (arr[0] !==null && arr[0] == arr[1] && arr[1] == arr[2]) || //row wiese
        (arr[3] !==null && arr[3] == arr[4] && arr[4] == arr[5]) || //row wise
        (arr[6] !==null && arr[6] == arr[7] && arr[7] == arr[8]) || //row wise
        (arr[0] !==null && arr[0] == arr[3] && arr[3] == arr[6]) || //row wise
        (arr[1] !==null && arr[1] == arr[4] && arr[4] == arr[7]) || //column wise
        (arr[2] !==null && arr[2] == arr[5] && arr[5] == arr[8]) || //colun wise
        (arr[0] !==null && arr[0] == arr[4] && arr[4] == arr[8]) || //diagonal
        (arr[2] !==null && arr[2] == arr[4] && arr[4] == arr[6]) //diagonal
    ) {
        //docuument.write remoove 
        // everything from page and show this which define inside write
        document.write(`Winner is ${currentPlayer}`) 

        // console.log(currentPlayer, "is winner..!")
    }
    if (!arr.some((e)=> e === null)) {
        document.write(`Draw!!`);
    }
}
function handleClick(el) {
    const id = Number(el.id);
    if(arr[id] !== null)return; //avoid to click again on clicked event, dobara na click kare already click pe
    arr[id] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X"; //sort form of if else
    el.innerText = currentPlayer;
    // console.log(arr)
    el.innerText;
    checkWinner()

}