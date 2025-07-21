 const getrandom1 = () =>{
 var random=Math.random()*6+1;
     random=Math.floor(random);

     if(random===1){
     document.querySelector(".thefirst img").src="dice1.png"}
     else if(random===2){
     document.querySelector(".thefirst img").src="dice2.png"}
     else if(random===3){
     document.querySelector(".thefirst img").src="dice3.png"}
     else if(random===4){
     document.querySelector(".thefirst img").src="dice4.png"}
     else if(random===5){
     document.querySelector(".thefirst img").src="dice1.png"}
     }

     const getrandom2 = () =>{
 var random=Math.random()*6+1;
     random=Math.floor(random);

     if(random===1){
     document.querySelector(".thesecond img").src="dice1.png"}
     else if(random===2){
     document.querySelector(".thesecond img").src="dice2.png"}
     else if(random===3){
     document.querySelector(".thesecond img").src="dice3.png"}
     else if(random===4){
     document.querySelector(".thesecond img").src="dice4.png"}
     else if(random===5){
     document.querySelector(".thesecond img").src="dice1.png"}
     }
     getrandom1();
     getrandom2();