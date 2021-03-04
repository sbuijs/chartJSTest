var objOne = {
    startAmount: "0",
	amount: "25",
};

var objTwo = {
    amount: "50"
};

var objThree = {
    amount: "75"
};

function hello(name) {
    console.log('Hello ' + name + '!');
}


function searchID(name){
    var el = document.getElementById(name);
    console.log(el);
}

function changeContent(text) {
	var el = document.getElementById('amount');
    el.innerText = text;
}


document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM ready');
    hello('Steef!');
    searchID('amount');
    changeContent(objOne.startAmount +"%");
});
