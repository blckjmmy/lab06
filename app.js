//  let userName = 'Jonathan'

//  userName = 'Nunn'
//  console.log(userName)

// userName = 'Nunnzu'
// console.log(userName)

// userName = 'Code'
// console.log(userName)

 let userName = prompt('what is username first name')
console.log(userName)
document.write('<h2>' + userName + '</h2>');

let userAnswer = prompt('is naruto great show?');
console.log(userAnswer)

 

if (userAnswer == 'yes') {
    document.write('<h1>welcome Great Hokage ' + userName + '</h1>');

}

if (userAnswer == 'no') {
    document.write('<h1>leave village' + userName + '</h1>')

}

