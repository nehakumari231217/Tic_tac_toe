let resetBtn = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#NEWbtn");
let p = document.querySelector("#msg");
let player0 = true;//player1 , player2

const  winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 const restgame = () => {
player0 = true;
    msgcontainer.classList.add("hide");
    endisabledbox();
 };

  let boxs = document.getElementsByClassName("box");
    Array.from(boxs).forEach(element => {
          element.addEventListener("click", () => {
           console.log("box was clik");
        if(player0) {
            element.innerText ="o";
            player0 = false;
            element.style.color = " red";
        }else {
            element.innerText ="x";
            player0 = true;
            element.style.color = " green";
        }
        element.disabled = true;
        cheackwinner();
       });
        
    });
    const endisabledbox = () => {
        for( let box of boxs){
           box.disabled= false;
           box.innerText =" ";
        }
    };

    const disabledbox = ()=>{
        for( let box of boxs){
         box.disabled= true;
        }
    };
    const showinner = ( winner) =>{
        msg.innerText = `congratulation winnwe is ${ winner}`;
        msgcontainer.classList.remove("hide");
        disabledbox();
    };

     const  cheackwinner = () => {
        for(let patterns  of winpatterns){
             let val1 = boxs[patterns[0]].innerText;
              let val2= boxs[patterns[1]].innerText;
              let val3=boxs[patterns[2]].innerText;

              if ( val1 != "" && val2 != "" &&  val3 != "" ){
                if (val1 === val2 && val2 === val3)
                {
                    console.log("winner" , val1);
                    showinner(val1);
                } 
              }
        }
    };
    newGameBtn.addEventListener("click", restgame);
    resetBtn.addEventListener("click", restgame);

