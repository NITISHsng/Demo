
var height=screen.height;
 var width=screen.width;
var a=width/2;
var b=height*70/100-100;
 document.getElementById("contanar").style.transformOrigin =a + "px " + a + "px";
document.getElementById('random-number-bord').style.width=b+'px';

 var ready123=new Audio("/sound/ready123.mp3");
 var timersound=new Audio("/sound/timersound.mp3");
 var clear=new Audio("/sound/clear.mp3");
 var cancel=new Audio("/sound/cancel.mp3");
 var chain=new Audio("/sound/chain.mp3");
 var  insert=new Audio("/sound/selection.mp3");
 var  select=new Audio("/sound/select.mp3");
 var  selectionsound=new Audio("/sound/insert.mp3");
// localStorage.clear();
 var level=localStorage.getItem('level');
 
 if (level==null) {
   //firstly call this function 
 levelup(2,'1');
 } else {
   levelup(2,level);
 }


 function suggestvalue(){
   if(level==1){
     X=1;
   }else if(level==2){
     x=10;
   } else if (level==3){
     x=100;
   } else if (level==4) {
     x=1000;
   }
 }
 var selectionNo;
// select a button shadow change
function selection(){
  if(ready==true){
    ready=false;
    for (var i = 1; i <=6; i++) {
      let x="inv"+i;
      let q="random"+i;
      document.getElementById(`${q}`).innerHTML=0;
      document.getElementById(`${x}`).innerHTML='000';
      buttons[i-1].style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.7) 0px 15px 12px";
    }
  }else{
    for (var i = 0; i < 6; i++){
      buttons[i].style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.7) 0px 15px 12px";
    }
  }
}
// select a button
var totalcoinongame=1;
var buttons=document.querySelectorAll("#selectionbutt button");
 buttons.forEach(function(button,index) {
  button.addEventListener('click', function(){
    selectionsound.play();
    navigator.vibrate(30);//selection vibration 
    selectionNo=index+1;
    selection();
    if (totalcoinongame==1) {
      totalcoinongame=0;
      document.getElementById("bord-gif").style.display="none";
    } 
     button.style.boxShadow = "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px";
  });
});
 // low medium and high button ..
 var lowmedhigh=document.querySelectorAll(".low-med-high button");
 lowmedhigh.forEach(function(button,index) {
  button.addEventListener('click', function(){
    for (var i = 0; i <3; i++) {
      lowmedhigh[i].style.boxShadow="0px 0px 10px pink";
      lowmedhigh[i].style.textShadow="0px 0px 0px pink";
    }
   button.style.textShadow ="0px 2px 4px pink";
   button.style.boxShadow='0px 2px 2px 3px rgba(20,0,0,.6)';
  });
 });
// clear and cancel 
 document.getElementById("clear").onclick = function(){
   navigator.vibrate(30);
    if(ready==true){
      ready=false;
      clear.play();
      for(var i = 1; i <= 6; i++) {
       let p="inv" +i;
       let q="random"+i;
       document.getElementById(`${p}`).innerHTML="000";
       document.getElementById(`${p}`).value=0;
       document.getElementById(`${q}`).innerHTML=0;
      }
      document.getElementById('total-coin').value=0;
      document.getElementById('bord-gif').style.display='none';
    }else{
      cancel.play();
      let p="inv"+selectionNo;
      document.getElementById(`${p}`).innerHTML="000";
      document.getElementById(`${p}`).value=0;
    }
 }
 //TimeR
 function startTimer() {
   let count = 3;
   const interval = setInterval(function() {
     document.getElementById('timer').innerHTML=count;
     if (count === 0) {
       clearInterval(interval);
     } else {
       count--;
     }
   }, 700);
 }
 //create newale
 function createnewele(){
   for(var i = 1; i <=6; i++) {
     let x = "random" + i;
     for (var j = 1; j< 20; j++) {
       var newele = document.createElement("div");
       newele.className = "ani";
       newele.innerHTML = Math.floor((Math.random() * 6) + 1);
       document.getElementById(`${x}`).appendChild(newele);
     }
   }
}
 // random number create in random number box
 function randomnumber(){
   for(var i = 1; i <=6; i++) {
     let x = "random" + i;
     let y= Math.floor(Math.random() * 6)+1;  
     document.getElementById(`${x}`).innerHTML=y;
     document.getElementById(`${x}`).value=y;
   }
 }
//level related features
 function levelup(x,y){
   localStorage.setItem("level",y);
  // localStorage.clear();
   document.getElementById("level").innerHTML=("level-"+y); 
   document.getElementById('win-loss-box').style.display='none';
   document.getElementById("notes").style.display='flex';
 if(x==0){
 document.getElementById("level-comment").innerHTML=("Try again");
 }else if(x==1){
 if(y!=5){
 document.getElementById("level-comment").innerHTML=("Congratulations! <br> You've reached a level "+y);
 }else{
 document.getElementById("level-comment").innerHTML=("Congratulations! <br> You finish this game");  
 }
 }else if(x==2){
  document.getElementById("level-comment").innerHTML=("welcome <br>best of luck for next level");  
  }
 setTimeout(function () {
   document.getElementById("notes").style.display='none';
 },4000)
 //level check and give coin/points
 switch(y){
 case('1'):
   level=1;
   playerpoints=10000;
 computerpoints=50000;
 document.getElementById('level-on-header').innerHTML='L1';
 break;
 case('2'):
   level=2;
   playerpoints =100000;
 computerpoints=500000;
 document.getElementById('level-on-header').innerHTML='L2';
 break;
 case('3'):
   level=3;
   playerpoints =1000000;
 computerpoints=5000000;  
 document.getElementById('level-on-header').innerHTML='L3';
 break;
 case('4'):
   level=4;
   playerpoints = 10000000;
   computerpoints = 1000000000;
   document.getElementById('level-on-header').innerHTML='L4';
 break;
 case('5'):
   document.getElementById('level-on-header').innerHTML='L5';
  const finish=confirm("congratulations \n continue with level-1");
  if(finish==true){
   levelup(1,'1');
  } else {
    levelup(1,'4');
  }
 break;
 }

// localStorage.setItem("level", level);

 if (level == 1) {
    x = 1;
  } else if (level == 2) {
    x = 10;
  } else if (level == 3) {
    x = 100;
  } else if (level == 4) {
    x = 1000;
  }

 let innvalue=document.querySelector("#all-suggestion"); 
 innvalue.innerHTML='';
 for(let i=1;i<=100;i++){
 let createbutton=document.createElement("button");
 createbutton.textContent = 100*i*x;
 innvalue.appendChild(createbutton);
 }
 // value insert on game 
   setTimeout(function () {
 var valueinsert=document.querySelectorAll("#all-suggestion button");
 valueinsert.forEach(function(button,index) {
 button.addEventListener('click', function(){
   insert.play();
   navigator.vibrate(30);
   let p="inv" +selectionNo;
   document.getElementById(`${p}`).innerHTML=x*(index+1)*100;
   document.getElementById(`${p}`).value=x*(index+1)*100;
 });
 });
 document.getElementById("computerpoints").innerHTML=computerpoints;
 document.getElementById("playerpoints").innerHTML=playerpoints;
 },2000)
 }
 var rdm1=0,rdm2=0,rdm3=0,rdm4=0,rdm5=0,rdm6=0;
//level of function 
function ifrandomvalue1(){
 if(rdm1==1 ){
 rdm1=0;
 }
 if(rdm2==1 ){
 rdm2=0;
 }
 if(rdm3==1 ){
 rdm3=0;
 }
 if(rdm4==1 ){
 rdm4=0;
 }
 if(rdm5==1 ){
 rdm5=0;
 }
 if(rdm6==1 ){
 rdm6=0;
 }
 }
 function ifrandomvaluemorethen1(){
 if(rdm1!==1 && rdm1 !=0){
 rdm1++;
 }
 if(rdm2!=1 && rdm2 !=0){
 rdm2++;
 }
 if(rdm3!=1 && rdm3 !=0){
 rdm3++;
 }
 if(rdm4!=1 && rdm4 !=0){
 rdm4++;
 }
 if(rdm5!=1 && rdm5 !=0){
 rdm5++;
 }
 if(rdm6!=1 && rdm6 !=0){
 rdm6++;
 }       
 }
 //win/loss box..
 function winloss() {
   document.getElementById('win-loss-box').style. display='flex';
      setTimeout(function() {
    document.getElementById('win-loss-box').style. display='none';
    document.getElementById("playerpoints").innerHTML=playerpoints;
 document.getElementById("computerpoints").innerHTML=computerpoints;
   },3000)
   
 }
 //ready button
var totalcoin=0;
var ready;
var readybuttoncontrol=1;
 document.getElementById("ready").onclick = function(){
   if(readybuttoncontrol==1){
   ready123.play();
    totalcoin=0;
   for (var i = 1; i <=6; i++) {
     let p="inv"+i;
     let x=document.getElementById(`${p}`).value;
     if(x==null){ x=0; }
     totalcoin=totalcoin+x;
     document.getElementById('total-coin').innerHTML=totalcoin;
   }
   if(totalcoin==0){    
 alert("select a number or card");
 }else{
   if(playerpoints >=totalcoin){
     readybuttoncontrol=0;
     navigator.vibrate(40);
      // ready button clik animetion
  document.getElementById('ready').style.boxShadow = "0px 0px 3px 3px pink";
     selection();
    timersound.play();
     rdm1=0,rdm2=0,rdm3=0,rdm4=0,rdm55=0,rdm6=0;
     
     playerpoints=playerpoints-totalcoin;
     document.getElementById("playerpoints").innerHTML=playerpoints;
     document.getElementById('timer-box').style.visibility='visible';
    startTimer();
    document.getElementById('bord-gif').style.display="flex";
    totalcoinongame=1;
    setTimeout(function(){
      chain.play();
      document.getElementById('timer-box').style.visibility='hidden'; 
        createnewele();
        var elements = document.getElementsByClassName("ani");
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.display = 'block';
         }
    }, 3000); 
    setTimeout(function(){
      readybuttoncontrol=1;
  // ready button  animation off 
      document.getElementById('ready').style.boxShadow = "0px 0px 10px pink";
      randomnumber();
      ready=true;
     let win=0;
     // count random value 
 for (var i = 1; i <=6; i++) {
 let p="random" +i;
 let q=document.getElementById(`${p}`).value;
 let x="inv" +i;
     let y=document.getElementById(`${x}`).value;
      if (y==null) {
    document.getElementById(`${x}`).value=0;
      }
      //count rdm value
 switch(q){
 case(1):
 rdm1++;  
 break;
 case(2):
 rdm2++;
 break;
 case(3):
 rdm3++;
 break;
 case(4):
 rdm4++;
 break;
 case(5):
 rdm5++;
 break;
 case(6):
 rdm6++;
 break;
 }
 }
 let random1=document.getElementById("inv1").value;
 let random2=document.getElementById("inv2").value;
 let random3=document.getElementById("inv3").value;
 let random4=document.getElementById("inv4").value;
 let random5=document.getElementById("inv5").value;
 let random6=document.getElementById("inv6").value;
//increase rdm value by 1 or decrease 
 if (level==1){
 ifrandomvaluemorethen1();
 }else if(level==2){
  ifrandomvalue1();
  ifrandomvaluemorethen1();
}else if(level==3){
  ifrandomvalue1();
}
win=(rdm1*random1)+(rdm2*random2)+(rdm3*random3)+(rdm4*random4)+(rdm5*random5)+(rdm6*random6);
 computerpoints=computerpoints-win+totalcoin;
 playerpoints=playerpoints+win;
 // overall win or loss ...
 if(win>totalcoin){   
   winloss();
   document.getElementById('win').innerHTML=(win- totalcoin)+'+'+totalcoin;
   document.getElementById('loss').innerHTML='';
   document.getElementById('win-loss').innerHTML="You win";
    }else if(win==totalcoin){  
       winloss();
  document.getElementById('win').innerHTML=totalcoin;
   document.getElementById('loss').innerHTML='';
document.getElementById('win-loss').innerHTML="Drown";
 }else if(win<totalcoin){   
   winloss();
   document.getElementById('win').innerHTML='';
   document.getElementById('loss').innerHTML=totalcoin;
document.getElementById('win-loss').innerHTML="Your loss";
 }
 // level up
 if (computerpoints<=0) {
 if(level==1){ levelup(1,'2');
 }else if(level==2){ levelup(1,'3');
 }else if(level==3){ levelup(1,'4');
 }else if(level==4){ levelup(1,'5');
 }
 } 
// if level.down
 if (playerpoints <= 0) {
   if (level == 4) { levelup(0, '3');
   } else if (level == 3) { levelup(0, '2');
   } else if (level == 2) { levelup(0, '1');
   } else if (level == 1) {
     alert("Sorry you are a loser");
     levelup(0, 1);
   }
 }
 selectionNo=12;// out of selection button 
 for (var i = 1; i<=6; i++){
      let p="inv" +i;
       document.getElementById(`${p}`).value=0;
 }
    },6000);
  }else{ alert("check Your coin");  }
 } 
 } else {
   alert("wait...")
 }
 }
function shorting(x) {
  let suggestion = document.getElementById('all-suggestion');
  suggestion.scrollTo({
    top: x,
    behavior: 'smooth'
  });
}

document.getElementById('low').onclick = function() {
  shorting(0);
}
document.getElementById('medium').onclick = function() {
  shorting(1320);
}
document.getElementById('high').onclick = function() {
  shorting(2670);
}
