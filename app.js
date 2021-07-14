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
    




function Picture(){
    numOfPics = prompt ('how many clones do you want naruto to make! (from 1 to 100)');
    url = "https://dw9to29mmj727.cloudfront.net/misc/newsletter-naruto3.png";
    let picCounter = 1;
    while (!(numOfPics >= 1 && numOfPics < 100)){
        numOfPics = prompt ('How many clone u would like to see? (from 1 to 10)');
    }

    for (let i = 0; i < numOfPics; i++){
        document.write('<img src="' + url + '" >');
        document.write('Picture number ' + picCounter++);
    }
}

  Picture(); 

  
 