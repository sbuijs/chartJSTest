var obj ={
startAmount: "0"
}
var objOne = {
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
    // if (count > objOne.amount) return;
    // console.log('Het werkt?');
    el.innerText = text;
}



document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM ready');
    hello('Steef!');
    searchID('amount');
    changeContent(obj.startAmount +"%");
    
});

