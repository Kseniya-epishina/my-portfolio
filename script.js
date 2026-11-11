let  userName = prompt('Как вас зовут?');
alert("Привет, " + userName + "");
const myButton = document .getElementById( "myBtn" );
myButton.addEventListener( "click" , function () {   alert( "Кнопка нажата!" ); });

let clickCount = 0;
const myButton2 = document .getElementById( "myBtn2" );
myButton2.addEventListener( "click" , function () {   clickCount++;
    console.log('Количество нажатий:' + clickCount); });
