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

let maxValueArray = [];


function searchDonuts(name){
    //finding all the donut elements
    console.log(maxValueArray);
    var elementArray = document.getElementsByClassName(name);
    for (var i = 0, l = elementArray.length; i < l; i++) {
        console.log('Dit is een donut');

        var element = elementArray[i]; //all the elements with this class, stop de waarde in de var element
         
        var total = element.innerHTML;
        maxValueArray.push(parseInt(total)); //this is a string that is parsed to an int
        animateValue(element,total);
        

        console.log(total);
        console.log(element.id);
       
        // element.innerHTML = 0 + '%';
        // element.onclick = (element) => {console.log("click" + element.id)}; 
        
    }
    console.log(maxValueArray);
}

function animateValue(element, number){
element.innerHTML = number -1;
}

function changeContent(text) {
    var elementOne = document.getElementsByClassName('donut')[0];
     if (objOne.startAmount > objOne.amount) return;
    //replace the content of the element
    elementOne.innerHTML = objOne.startAmount + '%';

    var elementTwo = document.getElementsByClassName('donut')[1];
    if (objTwo.startAmount > objTwo.amount) return;
    elementTwo.innerHTML = objTwo.startAmount + '%';

    var elementThree = document.getElementsByClassName('donut')[2];
    if (objThree.startAmount > objThree.amount) return;
    elementThree.innerHTML = objThree.startAmount + '%';


    var element = document.getElementsByClassName("donut");
    if (element > 10) return;
     

    console.log('Het werkt');
    elementOne.classList.add('toggle');
    elementTwo.classList.add('toggle');
    elementThree.classList.add('toggle');
}


function findAndUpdate(){
    	var btn = document.getElementById('addOne');
	    btn.onclick = function () {
		console.log('click');
		objOne.startAmount++;
        objTwo.startAmount++;
        objThree.startAmount++;
		changeContent();
	}
}


document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM ready');
    searchDonuts('donut'); //finding all the donut elements
  /*  changeContent(objOne.startAmount + "%");
    changeContent(objTwo.startAmount + "%");
    changeContent(objThree.startAmount + "%"); */
   /* findAndUpdate();
*/
});

//in de html wordt de waarde gezet