let randomNumber =  0;
let totalPoints = 0;
let duckPoint = 0;
let pointsArray = [];
let quack = document.getElementById("audio");




let randomFunction = function(){
    for(let i = 0;i < 4; i++){
        pointsArray.push(Math.floor(Math.random()*12)+1);
        randomNumber = Math.floor(Math.random()*102)+19;
        $("#goalNumber").text("Try to get this number! "+randomNumber);
        $("#yourPoints").text("This is your current points! "+totalPoints);

    }
}

 let repeatDuck = function(){
     for(let j = 0; j < pointsArray.length; j++){
         
        $(".duck"+j).attr("duckvalue", pointsArray[j]);  
        $(".duck"+j).addClass("game");    
     }
 }

let gamefunct = function(){
    $(".game").on("click",function(){

        
        quack.play();
        duckPoint = $(this).attr("duckValue");
        duckPoint = parseInt(duckPoint);
        totalPoints += duckPoint;

        $("#yourPoints").text("This is your current points! "+totalPoints);
        
        if(totalPoints == randomNumber){
            $("#state").text("You Win!!");
            totalPoints = 0;
            pointsArray = [];
            randomFunction();
            repeatDuck();
        }//if
        
        if(totalPoints > randomNumber){
            $("#state").text("You lose =(");
            totalPoints = 0;
            pointsArray = [];
            randomFunction();
            repeatDuck();
        }//if
        
    })//end .game
}//end game funct


$("#state").text("See if you can beat the ducks!");
randomFunction();
repeatDuck();
gamefunct();



