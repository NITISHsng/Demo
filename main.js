
var height=screen.height;
 var width=screen.width;
var a=width/2;
var b=height*70/100-100;
 document.getElementById("contanar").style.transformOrigin =a + "px " + a + "px";
document.getElementById('random-number-bord').style.width=b+'px';
var computerpoints=0;
var playerpoints=0;
 var ready123=new Audio("/sound/ready123.mp3");
 var timersound=new Audio("/sound/timersound.mp3");
 var clear=new Audio("/sound/clear.mp3");
 var cancel=new Audio("/sound/cancel.mp3");
 var chain=new Audio("/sound/chain.mp3");
 var  insert=new Audio("/sound/selection.mp3");
 var  select=new Audio("/sound/select.mp3");
 var  selectionsound=new Audio("/sound/insert.mp3");
 var  bgmusic=new Audio("/sound/backgroundmusic.mp3");
 
 var level=localStorage.getItem('level');
 
 if (level==null) {
   //firstly call this function 
 levelup(2,'1');
 } else {
   levelup(2,level);
 }


//alert smg

function AlertSmg(x) {
  document.getElementById('alert-smg').style.display='flex';
  document.getElementById('alert-smg').innerHTML=x;
  setTimeout(function fname() {
   document.getElementById('alert-smg').style.display='none';
  },2000)
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
var buttons=document.querySelectorAll("#selectionbutt div button");
function selection(){
  if(ready==true){
    ready=false;
    for (var i = 1; i <=6; i++) {
      let x="inv"+i;
      let q="random"+i;
      document.getElementById(`${q}`).innerHTML=0;
      document.getElementById(`${x}`).innerHTML='000';
     var plr="other-plr"+i;
      document.getElementById(`${plr}`).value = 0;
      document.getElementById(`${plr}`).innerHTML = '$' + '0000';
      document.getElementById(`${x}`).value=0;
      buttons[i-1].style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.7) 0px 15px 12px";
    }
  }else{
    for (var i = 0; i < 12; i++){
      buttons[i].style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.7) 0px 15px 12px";
    }
  }
}
// select a button
var totalcoinongame=1;
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
       var plr="other-plr"+i;
       document.getElementById(`${plr}`).value=0;
      document.getElementById(`${plr}`).innerHTML= '$'+'0000';
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
 var RandomImage=[
   "/images/Rlalpan.png",
   "/images/Rkalapan.png",
   "/images/Rthikri.png",
   "/images/Rking.png",
   "/images/Rjhandi.png",
   "/images/Rchiri.png"
   ];
 //create newale
 var cardornumber=1;
 function createnewele(){
   for(var i = 1; i <=6; i++) {
     var x = "random" + i;
          var RandomNumberORImage = document.getElementById(`${x}`);
          RandomNumberORImage.innerHTML = '';
     for (var j = 1; j< 20; j++) {
       var RDM= Math.floor((Math.random() * 6) );
       if(cardornumber==1){
           var newele = document.createElement("img");
           
           newele.className = "ani";
           newele.src = RandomImage[RDM];
           RandomNumberORImage.appendChild(newele);
       } else {
         console.log(1);
         var newele = document.createElement("div");
      
         newele.className = "ani";
         newele.innerHTML=RDM;
         RandomNumberORImage.appendChild(newele);
       }
     }
   }
}
 // random number create in random number box
 function randomnumber(){
   for(var i = 1; i <=6; i++) {
     var x = "random" + i;
    var RandomNumberORImage = document.getElementById(`${x}`);
    RandomNumberORImage.innerHTML="";
    var RDM = Math.floor((Math.random() * 6)+1);
    if(cardornumber==1){
    var newele = document.createElement("img");
   newele.src = RandomImage[RDM-1];
   RandomNumberORImage.appendChild(newele);
    } else {
    document.getElementById(`${x}`).innerHTML=RDM;
    }
    document.getElementById(`${x}`).value=RDM;
   }
 }
 
 
 //profile
var profileLv1=[
 '/image/img1lv1.jpeg',
 '/image/img2lv1.jpeg',
 '/image/img3lv1.jpeg',
 '/image/img4lv1.jpeg',
 '/image/img5lv1.jpeg',
 '/image/img6lv1.jpeg',
 '/image/img7lv1.jpeg',
  '/image/img8lv1.jpeg',
  ];
 var profileLv2= [
  '/image/img1lv2.jpeg',
  '/image/img2lv2.jpeg',
  '/image/img3lv2.jpeg',
  '/image/img4lv2.jpeg',
  '/image/img5lv2.jpeg',
  '/image/img6lv2.jpeg',
  '/image/img7lv2.jpeg',
   '/image/img8lv2.jpeg',
   ];
   var profileLv3=[
 '/image/img1lv3.jpeg',
 '/image/img2lv3.jpeg',
 '/image/img3lv3.jpeg',
 '/image/img4lv3.jpeg',
 '/image/img5lv3.jpeg',
 '/image/img6lv3.jpeg',
 '/image/img7lv3.jpeg',
 '/image/img8lv3.jpeg',
  ];
function CreatProfile(){
  for (var i = 1; i <=8; i++) {
   var pro = 'profile' + i;
   if(level=='1'){
    document.getElementById('player-logo').src = profileLv2[5];
    document.getElementById(`${pro}`).src = profileLv1[i-1];
   } else if (level=='2'){
     document.getElementById(`${pro}`).src = profileLv2[i-1];
     document.getElementById('player-logo').src = profileLv3[3];
   } else if (level=='3' || level=='4') {
     document.getElementById(`${pro}`).src = profileLv3[i-1];
     document.getElementById('player-logo').src = profileLv3[2];
   }
  }
}  
CreatProfile();
//level related features
 function levelup(x,y){
   localStorage.setItem("level",y);
   OtherPlayerCreatePoints(y);
//   localStorage.clear();
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
   if(selectionNo>6){
     selectionNo=selectionNo-6;
   }
   let p="inv" +selectionNo;
   document.getElementById(`${p}`).innerHTML=x*(index+1)*100;
   document.getElementById(`${p}`).value=x*(index+1)*100;
 });
 });
 document.getElementById("computerpoints").innerHTML='$'+computerpoints;
 document.getElementById("playerpoints").innerHTML='$'+playerpoints;
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
    document.getElementById("playerpoints").innerHTML='$'+playerpoints;
 document.getElementById("computerpoints").innerHTML='$'+computerpoints;
   },3000)
   
 }
 //ready button
var totalcoin=0;
var ready;
var readybuttoncontrol=1;
 document.getElementById("ready").onclick = function(){
   document.getElementById('about').style.display="none";
   document.getElementById('setting').style.display="none";
   document.getElementById('rdmnum1').style.display = "flex";
    document.getElementById('rdmnum2').style.display = "flex";
  
    
   if(readybuttoncontrol==1){
     setTimeout(function() {
          
     for (var i = 1; i <=8; i++) {
            let ss= Math.floor(Math.random()*2) + 1;
      let kk= Math.floor(Math.random() * 4) + 1;
        if(ss==1){
              var plr= "other-player" + i + "-coin";
              var xyz=document.getElementById(`${plr}`).value;
              xyz=xyz+investarr[i-1]*kk;
             document.getElementById(`${plr}`).innerHTML=xyz;
             document.getElementById(`${plr}`).value=xyz;
            }
        }
        },6000)
       
        
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
  AlertSmg("Select a number or card");
 }else{
   if(playerpoints >=totalcoin){
     readybuttoncontrol=0;
     navigator.vibrate(40);
      // ready button clik animetion
  document.getElementById('ready').style.boxShadow = "0px 0px 3px 3px pink";
     selection();
    timersound.play();
     rdm1=0,rdm2=0,rdm3=0,rdm4=0,rdm5=0,rdm6=0;
     playerpoints=playerpoints-totalcoin;
     document.getElementById("playerpoints").innerHTML='$'+playerpoints;
     document.getElementById('timer-box').style.visibility='visible';
    startTimer();
    RobotSelect();
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
var x="inv" +i;
 var y=document.getElementById(`${x}`).value;
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
   document.getElementById('win').innerHTML=win;
   document.getElementById('loss').innerHTML='';
   document.getElementById('win-loss').innerHTML="You win";
    }else if(win==totalcoin){  
       winloss();
  document.getElementById('win').innerHTML=totalcoin;
   document.getElementById('loss').innerHTML='';
document.getElementById('win-loss').innerHTML="Drow";
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
 CreatProfile();
 } 
// if level.down
 if (playerpoints <= 0) {
   if (level == 4) { levelup(0, '3');
   } else if (level == 3) { levelup(0, '2');
   } else if (level == 2) { levelup(0, '1');
   } else if (level == 1) {
     AlertSmg("Sorry you are a loser");
     levelup(0,'1');
   }
   CreatProfile();
 }
 selectionNo=20;// out of selection button 
 for (var i = 1; i<=6; i++){
      var p="inv" +i;
       document.getElementById(`${p}`).value=0;
 }
    },6000);
  }else{ AlertSmg("C=heck Your coin");  }
 } 
 } else {
   AlertSmg("Wait...")
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
// about button
var about =true;
document.getElementById('about-butt').onclick=function () {
  if (about==true) {
   about =false;
    document.getElementById('about').style.display="block";
    document.getElementById('rdmnum1').style.display="none";
    document.getElementById('rdmnum2').style.display="none";
    document.getElementById('setting').style.display="none";
    sttng=true;
  } else {
    about=true;
    document.getElementById('rdmnum1').style.display = "flex";
    document.getElementById('rdmnum2').style.display = "flex";
    document.getElementById('about').style.display="none";
  }
}
  var sttng=true;
document.getElementById('settings').onclick=function () {
  if (sttng==true) {
   sttng =false;
    document.getElementById('setting').style.display="block";
    document.getElementById('rdmnum1').style.display="none";
    document.getElementById('rdmnum2').style.display="none";
    document.getElementById('about').style.display="none";
  } else {
    sttng=true;
    document.getElementById('rdmnum1').style.display = "flex";
    document.getElementById('rdmnum2').style.display = "flex";
    document.getElementById('setting').style.display="none";
  }
}
//card or number
var CardNumber=true;
document.getElementById('card-or-number').onclick=function () {
 var CardStyle=document.getElementById('card-style');
 var NumberStyle=document.getElementById('number-style');
  if (CardNumber==true) {
    CardNumber=false;
       document.getElementById('num').style.display = "flex";
    document.getElementById('img').style.display="none";
    cardornumber=0;
    NumberStyle.style.fontWeight='1000';
    NumberStyle.style.color='blue';
    CardStyle.style.fontWeight='100';
    CardStyle.style.color='black';
    CardStyle.style.background='white';
    NumberStyle.style.background='yellow';
  } else {
    NumberStyle.style.fontWeight='100';
    NumberStyle.style.color='black';
    CardStyle.style.fontWeight = '1000';
    CardStyle.style.color = 'blue';
    CardStyle.style.background='yellow';
    NumberStyle.style.background='white';
    CardNumber=true;
       document.getElementById('img').style.display = "flex";
       document.getElementById('num').style.display = "none";
       cardornumber=1;
  }
}

document.getElementById('restart').onclick=function () {
  let conf=confirm("confirm reset");
 if(conf==true){
  levelup(1,"1");
  CreatProfile();
}
}

var bgmsc=1;
document.getElementById('bg-music').onclick=function () {
  if (bgmsc==1) {
    bgmsc=0;
    bgmusic.pause();
    document.getElementById('bg-music').style.color='black';
  } else {
    bgmsc=1;
    bgmusic.play();
    bgmusic.loop=true;
    document.getElementById('bg-music').style.color='rgba(120,0,0,1)';
  }
}
document.getElementById('fixed-level').onclick=function () {
 document.getElementById('fixed-level-value').style.display='block';
}
var fixedlevel=document.querySelectorAll("#fixed-level-value button");
 fixedlevel.forEach(function(button,index) {
  button.addEventListener('click', function(){
    levelup(3,(index+1).toString());
   
    document.getElementById('rdmnum1').style.display = "flex";
    document.getElementById('rdmnum2').style.display = "flex";
    document.getElementById('setting').style.display="none";
  var ss= document.getElementById("random-number-bord");
  CreatProfile();
  ss.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  document.getElementById('fixed-level-value').style.display='none';
  });
});
//robot
 function OtherPlayerCreatePoints(x) {
   var p,q;
   switch(x){
 case('1'):
   y=100;
   p=10000;
   q=50000;
 break;
 case('2'):
   y=1000;
   p =100000;
  q=500000;
 break;
 case('3'):
   y=10000;
   p=1000000;
   q=5000000;  
 break;
 case('4'):
      y=100000;
   p= 10000000;
   q= 1000000000;
 break;
 }
   for (var i = 1; i <= 8; i++) { 
     let PlayerCoin = Math.floor(Math.random() * (q/y - p/y + 1)) * y+ p/2;
        var plr = "other-player"+ i +"-coin";
       document.getElementById(`${plr}`).value=PlayerCoin;
       document.getElementById(`${plr}`).innerHTML='$'+PlayerCoin;
       document.getElementById(`${plr}`).value=PlayerCoin;
    }
 }
function OtherPlayerCoinInverse(i,j,x){
  var plr = "other-player" + x + "-coin";
  if(i>j){
    setTimeout(function() {
      document.getElementById(`${plr}`).innerHTML= '$'+i;
     document.getElementById(`${plr}`).value=i;
        i=i-j;
     OtherPlayerCoinInverse(i,j,x);
    }, 200)
    }
}
function OtherPlayerCoin(i,j,x){
  var plr="other-plr"+x;
  if( i<j){
    i=i+Math.floor(j/10);
    setTimeout(function() {
      document.getElementById(`${plr}`).innerHTML= '$'+i;
      OtherPlayerCoin(i,j,x);
    }, 50)
    }
}
var investarr=[0,0,0,0,0,0,0,0];
function RobotSelect() {
    for (var i = 1; i <= 8; i++) { 
        var plr = "other-player" + i + "-coin";
        var x = Math.floor((Math.random() * 6) + 1);
        var xy=document.getElementById(`${plr}`).value;
        var pro = 'profile' + i;
      var nn = Math.floor((Math.random() * 8) + 1);  
       if(level=='1' && xy<500){
         xy=10000-xy;
            document.getElementById(`${pro}`).src = profileLv1[nn - 1];
         document.getElementById(`${pro}`).style.transition = 'transform 2s';
        document.getElementById(`${pro}`).style.transform = 'rotateY(360deg)';

       } else if (level=='2' && xy<10000) {
         xy =100000-xy;
         document.getElementById(`${pro}`).src = profileLv2[nn - 1];
         document.getElementById(`${pro}`).style.transition = 'transform 2s';
        document.getElementById(`${pro}`).style.transform = 'rotateY(360deg)';

       } else if (level=='3' && xy<100000){
         xy=1000000-xy;
         document.getElementById(`${pro}`).src = profileLv3[nn - 1];
         document.getElementById(`${pro}`).style.transition = 'transform 2s';
        document.getElementById(`${pro}`).style.transform = 'rotateY(360deg)';
       } else if (level=='4' && xy<100000){
         xy=10000000-xy;
         document.getElementById(`${pro}`).src = profileLv3[nn - 1];
         document.getElementById(`${pro}`).style.transition = 'transform 2s';
        document.getElementById(`${pro}`).style.transform = 'rotateY(360deg)';
       }
        var y=0;
      y = Math.floor((Math.random() * Math.floor(xy/100)) + 1);
      
    var pl="other-plr"+x;
     var z= document.getElementById(`${pl}`).value;
     if(z==null){
       z=0;
     }
        if(xy>y*100){
          y=(y*100)+z;
        } else if (xy>y*10) {
          var y=(y*10);
        }
      investarr[i-1]=y;
        OtherPlayerCoin(z,y,x);
        OtherPlayerCoinInverse(xy,y,i);
        setTimeout(function() {
          document.getElementById(`${pl}`).innerHTML = '$' + y;
        }, 3010)
    }
}


