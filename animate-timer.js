
let countUpArr = [];
let last_known_scroll_position = 0.0;
let ticking = false;


function collectData() {
	
	var arr = document.getElementsByClassName('animate-timer');
	//if the class name is not there, don't continue. returned nothing. 
	if (arr.length <= 0) return;

	//arr.length = the amount of donuts
	for (let i = 0; i < arr.length; i++) {
		//we put the i element into the const el
		const el = arr[i];

		const obj = {
			element: el,
			endValue: parseInt(el.innerHTML),
			// startValue: parseInt(0),
			isActivate: false,
			top: offset(el).top,
			left: offset(el).left,
		};
		countUpArr.push(obj);
		//after getting all the values, set it to 0%
		el.innerHTML = '0%';
	}

	document.addEventListener('scroll', function (e) {
		last_known_scroll_position = window.scrollY;
		// use tick to dampen the calls
		if (!ticking) {
			window.requestAnimationFrame(function (e) {
				for (let i = 0; i < countUpArr.length; i++) {
					var obj = countUpArr[i];
					var viewH = window.innerHeight;
					if (last_known_scroll_position >= (obj.top - (viewH / 2)) && obj.isActivate == false) {
						obj.isActivate = true;
						startAnimation(obj.element, obj.endValue);
					}
				}
				ticking = false;
			});
			ticking = true;
		}
	});
}

function offset(el) {
	var rect = el.getBoundingClientRect();
	return {
		top: rect.top + document.documentElement.scrollTop,
		left: rect.left + document.documentElement.scrollLeft
	}
}

function startAnimation(el, nr) {
	el.innerHTML = '0%';
	let counter = 0;
	let timer = setInterval(updateCounter, 50);
	function updateCounter() {
		counter++;
		el.innerHTML = counter + "%";
		if (counter >= nr) {
			clearInterval(timer);
		}
	}
}

document.addEventListener('DOMContentLoaded', function (event) {
	// the event occurred
	// console.log('DOM ready');
	collectData()
});