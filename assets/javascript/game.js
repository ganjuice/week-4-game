//GLOBAL VARIABLES
//=====================================================================
var goal = Math.floor((Math.random()* 102) + 19);
//secret value of each crystal
var blue = Math.floor((Math.random()* 12) + 1);
var white = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var rainbow = Math.floor((Math.random()* 12) + 1);
var wins = 0
var losses = 0
var total = 0
//FUNCTIONS (reusable blocks of code taht I will call upon when needed)
//=====================================================================
var turn = function (){
    $("#wins").empty();
    $("#wins").append(wins);
    $("#losses").empty();
    $("#losses").append(losses);
    $("#total").empty();
    $("#total").append(total);
}

var reset = function(){
    total = 0
    goal = Math.floor((Math.random()* 102) + 19);
    blue = Math.floor((Math.random()* 12) + 1);
    white = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    rainbow = Math.floor((Math.random()* 12) + 1);
    $("#goal").empty();
    $("#goal").append(goal);
    turn ();
}
var logic =function (){
    if (total == goal) {
        wins++;
        reset();
    }else if(total > goal){
        losses++
        reset();
    }else{
        turn();
    }
}
$("#goal").append(goal);

$("#total").append(total)
//MAIN PROCESS 


$(document).ready(function(){
    $("#blue").click(function(){
        total = total + blue;
        logic();
    })
    $("#white").click(function(){
        total = total + white;
        logic();
    })
    $("#yellow").click(function(){
        total = total + yellow;
        logic();
    })
    $("#rainbow").click(function(){
        total = total + rainbow;
        logic();
    })
});