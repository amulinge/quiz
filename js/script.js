/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q1score= question1(q1Result);
        var q2score= question2(q2Result);
        var q3score= question3(q3Result);
        var totalScore= q1score + q2score +q3score;
        var final= finalsweater(totalScore);
        $(".result").html(final);
        console.log(totalScore);
    });
    function question1(answer) {
        
        if (answer === "reading" ||answer === "Reading") {
            return 2;
        }
        else if (answer === "Sports" || answer === "sports"){
            return 3;
        }
        else {
            return 0;
        }
    }
    
    function question2(food){
        
        if (food === "waffles" || food === "Waffles"){
            return 2;
        }
        else if (food === "pancakes" || food === "Pancakes"){
            return 3;
        }
        else if (food === "french toast" || food === "French Toast"){
            return 4;
        }
        else{
            return 0;
        }}
        
    function question3(animal) {
        
        if (animal === "duck" || animal === "Duck") {
            return 5;
        }
       
        else {
            return 0;
    }}
    
    function finalsweater(results) {
    
        if (results > 6){
            return "you are a vibranium sweater";
        }
        else if (results > 4 && results < 6){
            return "you are a jabari tribe sweater";
        }
        else {
            return "you are de streth of de black pentha";
        }
    }
});
