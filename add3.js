function askUserName(){
    
    let userName = prompt('please Enter Your Name');
  
document.write(userName)

return userName;
}

askUserName();

function joinQuestion() {
var answer;

let question1 = confirm(' Do you want to join a band?');

if (question1==true) {
    answer = 'That&lsquo;s great! Join a band today!';
    
} else  { 
    answer = 'That&lsquo;s too bad! Let us know when you change your mind!';

}
document.write(answer);
}



function timeOfDay(){
    var today = new Date();
    var hourNow = today.getHours()
    var greeting;
    
    if (hourNow > 18) {
        greeting = 'Good Evening!';
    } else if (hourNow > 12) {
        greeting = 'Good Afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good Morning!';
    } else {
          greeting = 'Welcome!'
      }
    document.write('<h2>' +  greeting  + '</h2>');
    
    return greeting;
    }
    
    //let daylyGreet = timeOfDay();




    
/* function joinQuestion() {}
let answer;
let question1 = confirm(' Do you want to join a band?');
if (question1==true) {
    answer = ''
    document.write('That&lsquo;s great! Join a band today!');
} else  { 
    document.write('That&lsquo;s too bad! Let us know when you change your mind!');
}
*/
