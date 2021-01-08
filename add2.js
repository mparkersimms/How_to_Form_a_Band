function askUserName(){
    // Matt
    /* functions allow you to creat code and reference it later on without having to 
    type the code out again */ 
    /* naming a variable can be anything you want 
    - good idea to make it something useful. example 
    - "askUserName" could be "potato"*/
    let userName = prompt('please Enter Your Name');
    // print Matt
document.write(userName)
    // return Matt allows the username to be used outside of the function
return userName;
}
    // getUserName = 'Matt' 
let getUserName = askUserName();


//how to invoke funtion-
    // askUserName();