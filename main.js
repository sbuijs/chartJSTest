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

var count = 0;


function searchID(name){
    var el = document.getElementById(name);
    console.log(el);
}

function changeContent(text) {
    var el = document.getElementById('amount');
    if (count > objTwo.amount) return;
    console.log('Het werkt?');

    el.innerText = count + "%";
	el.title = 'changed';
	el.classList.add('toggle');
    
}

function findAndUpdate() {
	var btn = document.getElementById('addOne');
	btn.onclick = function () {
		console.log('click');
		count++;
		changeContent();
	}
}

document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM ready');
    searchID('amount');
    changeContent(obj.startAmount +"%");
    findAndUpdate();
});

