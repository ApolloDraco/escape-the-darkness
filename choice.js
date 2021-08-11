function Direction(Choice){
    
    if(Choice == "left" || Choice == "right"){
        document.getElementById("result").innerHTML = "<br><br>A giant black spider descends from the ceiling!<br>You look up and it stares at you through bloody red eyes.<br> <br>Do you run for your life or stay?";
        document.getElementById('left1').style.display = 'none';
        document.getElementById("right1").style.display = 'none';
        document.getElementById("escape1").style.display = 'none';
        document.getElementById("result").style.display = 'inline';
        document.getElementById('left2').style.display = 'inline';
        document.getElementById("right2").style.display = 'inline';
        document.getElementById("escape2").style.display = 'inline';
    }
    
    if(Choice == "escape"){
        document.getElementById("result").innerHTML = "<br>GAME OVER<br><br>";
        document.getElementById('left1').style.display = 'none';
        document.getElementById("right1").style.display = 'none';
        document.getElementById("escape1").style.display = 'none';
        document.getElementById("tryagain").style.display = 'block';
        document.getElementById("result").style.display = 'inline';
    }
}
        
function Direction2(Choice){

        if(Choice == 'left2'){
            document.getElementById("result2").innerHTML = '<br>You run away from the spider and see two rooms.<br><br>Choose one to enter.<br>';
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById("B").style.display = 'inline';
        document.getElementById("C").style.display = 'inline';
        
        }
        
        if(Choice == 'right2'){
            document.getElementById("result2").innerHTML = "<br>The spider caught you in its web.<br><br>You're trapped...<br><br>GAME OVER<br>";
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result2").style.display = 'inline';
        }
        
        if(Choice == 'escape2'){
            document.getElementById("result2").innerHTML = "<br>GAME OVER<br>";
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result2").style.display = 'inline';
    }
}

function Direction3(Choice){
        
        if(Choice == "B"){
        document.getElementById("result3").innerHTML = "<br>You approach a dark oak chest. The lock is broken and you open it up. Brilliant golden light beams up to brighten the room. There are treasures of every kind in the chest. Oh no! A dragon! You died.<br><br>GAME OVER<br>";
        document.getElementById("B").style.display = 'none';
        document.getElementById("C").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result3").style.display = 'inline';
        }
        
              if(Choice == "C"){
        document.getElementById("result3").innerHTML = "<br>An enormous dragon breathing fire into the air! It's chained to the wall, but it looks like it wants to break free! It has broken free! And its breathing fire down onto everything! You've burned alive.<br><br>GAME OVER<br>";
        document.getElementById("B").style.display = 'none';
        document.getElementById("C").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result3").style.display = 'inline';
        }
}
    
function TryAgain(){
    Direction();
    document.getElementById("result3").style.display = 'none';
    document.getElementById("result4").style.display = 'none';
    document.getElementById("result5").style.display = 'none';
    document.getElementById("result6").style.display = 'none';
    document.getElementById('left1').style.display = 'inline';
    document.getElementById("right1").style.display = 'inline';
    document.getElementById("escape1").style.display = 'inline';
    document.getElementById('left2').style.display = 'none';
    document.getElementById("right2").style.display = 'none';
    document.getElementById("escape2").style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById("result2").style.display = 'none';
    document.getElementById('tryagain').style.display = 'none';
}
