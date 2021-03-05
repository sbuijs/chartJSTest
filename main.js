var obj ={
startAmount: "0",
amount: "25"
}
var objOne = {
    startAmount: "0",
    amount: "25"
};

var objTwo = {
    startAmount: "0",
    amount: "50"
};

var objThree = {
    startAmount: "0",
    amount: "75"
};

var count = 0;

function searchDonuts(name){
    //finding all the donut elements
    var element = document.getElementsByClassName(name);
    for (var i = 0, l = element.length; i < l; i++) {
        console.log('Dit is een donut');
    }
}


function changeContent(name, text) {
    if (obj.startAmount > obj.amount) return;
    //replace the content of the element
    var element = document.getElementsByClassName(name);
    console.log('Het werkt');
    element.innerText = obj.startAmount;
}



document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM ready');
    searchDonuts('donut');
    changeContent(obj.startAmount + "%");
});

