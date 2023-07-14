let turn = "X"
let gameover = false;

const changeTurn = ()=>{
return turn === "X"?"O":"X"
}

const checkWin = ()=>{
  let boxtext =document.getElementsByClassName("box-text");

    let wins = [
      [0,1,2,0,-32,90],
      [3,4,5,0,0,90],
      [6,7,8,0,32,90],
      [0,3,6,-3100,0,0],
      [1,4,7,50,0,0],
      [2,5,8,3100,0,0],
      [0,4,8,90,0,-45],
      [2,4,6,-90,0,45]

    ]

    wins.forEach(e =>{
      if((boxtext[e[0]].innerText ===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){

        document.querySelector(".game-turn").innerText =  boxtext[e[0]].innerText +" Won";
        gameover=true
        document.querySelector(".line").style.transform = `translate(${e[3]}%,${e[4]}%) rotate(${e[5]}deg)`
        document.getElementById('line').classList.add('line-tr');
        turn = ''

     
      }
    }) 
    }
    

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{

  let boxtext = element.querySelector(".box-text");
  element.addEventListener('click',(e)=>{
    if(boxtext.innerText ===''){
    boxtext.innerText= turn;
 
    turn = changeTurn();
    
    if(!gameover){
      document.getElementsByClassName("game-turn")[0].innerText = turn ;
      
    }
    else{
     

    }

    
    
    checkWin();
    }
    
  })


})

let reset = document.querySelector(".reset");

reset.addEventListener('click',()=>{
  let boxtexts = document.querySelectorAll(".box-text");
  Array.from(boxtexts).forEach(element =>{
    element.innerText="";
  })

  
  

  turn = "X"
  gameover=false
  document.getElementsByClassName("game-turn")[0].innerText = turn ;
  document.getElementById('line').classList.remove('line-tr');


})


if("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js").then(registration =>{
    console.log("SW Registered!"); 
    console.log(registration); 
  }).catch(error =>{
    console.log("SW Registration Failed!");
    console.log(error);  
  })
}




