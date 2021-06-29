//  let userName = 'Jonathan'

//  userName = 'Nunn'
//  console.log(userName)

// userName = 'Nunnzu'
// console.log(userName)

// userName = 'Code'
// console.log(userName)
let ninja1;
function getuserName(){
 let userName = prompt('what is username first name')
 ninja1 = userName
 console.log(userName)
 document.write('<h2>' + userName + '</h2>');
return userName;
}


function getuserAnswer(){ 
    let userAnswer = prompt('is naruto great show?');
    console.log(userAnswer)
    
    if (userAnswer == 'yes') {
        document.write('<h1>Welcome Great Hokage ' + ninja1 + '</h1>');
    }
    
    if (userAnswer == 'no') {
        document.write('<h1>Leave Village' + ninja1 + '</h1>')

    }
}
// let ninja1 = getuserName();
// console.log(ninja1);

// getuserAnswer();
    






