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

function searchDonuts(name){
    var el = document.getElementsByClassName(name);
    for (var i = 0, l = el.length; i < l; i++) {
        console.log('Dit is een donut');
        
    }
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
    searchDonuts('donut');
    changeContent(obj.startAmount +"%");
    findAndUpdate();
});

