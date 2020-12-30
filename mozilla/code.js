let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'firefox.svg') {
        myImage.setAttribute('src', 'firefox2.svg');
    } else {
        myImage.setAttribute('src', 'firefox.svg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Welcome ${myName}` + ' to my first website';
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome ' + storedName + ' to my first website';
}

myButton.onclick = function() {
    setUserName();
}

