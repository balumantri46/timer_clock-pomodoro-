let ispaused= false;
let timer;
let min=16;
let sec=0;
let ent_time=null;
function start_timer(){
    timer=setInterval(update_timer,1000);
}
function update_timer(){
   const time = document.getElementById('timer');
   time.textContent=disp_time(min,sec);
   //if time is over
   if(min==0 && sec==0){
    clearInterval(timer);
    alert("Your Time's Up!!");
    ch_time();
   }
   //logic for backward running of time
   else if(!ispaused){
    if(sec>0){
        sec--;
    }
    else{
        sec=59;
        min--;
    }
   }
}
function disp_time(min,sec){
    //using string format for displaying of time
    //padstart is for getting 2 digit numbers and adding 0 infront of it
   return `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}


function ch_time(){
    //taking userinput for new time
    const new_min= prompt("Enter the minutes here");
    const new_sec=prompt("Enter the seconds here")
    if(new_min!=null && new_min>0){
       //parseInt()is used to convert string to base-10 integer
       ent_time= parseInt(new_min);
       min= ent_time;
       sec=parseInt(new_sec);
       ispaused=false;
       //displaying time
       const time = document.getElementById('timer');
       time.textContent=disp_time(min,sec);
    
    }
    else{
        alert("you entered invalid time! cilck the button again.");
    }
}
function toggle_pause(){
    //queryselector is used to select the id pause fromm the css 
    const tog_p= document.querySelector('#pause');
    //changing is paused to true
    ispaused=!ispaused;
    if(ispaused){
        //pausing the time
        clearInterval(timer);
        tog_p.textContent="resume";
       
    }
    else{
        start_timer();
        tog_p.textContent="pause";        
    }
}
function start_t(){
    start_timer();
}