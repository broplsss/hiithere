// --- Sound --- \\
var bomb_sound = new Audio('bomb.mp3')

const characters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var code = get_code();
var guess = [];
var i = 1;
var can = true;
var time = 60;
function get_code(){
	var value = []

	for (var n = 0; n < 4; n++) {
		value.push(random_item(characters))
	}
	return value
}
setInterval(function(){
	time --;
	if (time == 0) {
		bomb_sound.play()
		document.getElementById('lose').style.display = 'block';
		document.getElementById('part2').style.display = 'none';
	}
	if (time > 9) {
		document.getElementById('time_left').innerHTML = '00:' + time;
	} else {
		document.getElementById('time_left').innerHTML = '00:0' + time;
	}
	if (time > 9) {
		document.getElementById('time_left2').innerHTML = '00:' + time;
	} else {
		document.getElementById('time_left2').innerHTML = '00:0' + time;
	}
}, 1000)

function number(x) {
	if (can == true) {
		guess.push(x)
		console.log(guess)
		if (i == 1) {
			document.getElementById('one').innerHTML = x;
			i ++;
		} else if (i == 2) {
			document.getElementById('two').innerHTML = x;
			i ++;
		} else if (i == 3) {
			document.getElementById('three').innerHTML = x;
			i ++;
		} else if (i == 4) {
			document.getElementById('four').innerHTML = x;
			i ++;
		}
		if (guess.length == 4) {
			var count = 0;
			for (var num=0; num < 4; num ++) {
				if (guess[num] == code[num]) {
					highlight(num+1)
					count += 1
				} else {
					bad(num+1);
					
				}
			}
			if (count == 4) {
				
				document.getElementById('part2').style.display = 'block';
			}
			can = false
			setTimeout(reset, 1000)
			guess = [];
			i = 1;

		}
	}
}
function highlight(item) {
	if (item == 1) {
		document.getElementById('one').style.background = "rgb(1, 77, 1)";
	} else if (item == 2) {
		document.getElementById('two').style.background = "rgb(1, 77, 1)";
	} else if (item == 3) {
		document.getElementById('three').style.background = "rgb(1, 77, 1)";
	} else if (item == 4) {
		document.getElementById('four').style.background = "rgb(1, 77, 1)";
	}
}
function bad(item) {
	if (item == 1) {
		document.getElementById('one').style.background = "red";
	} else if (item == 2) {
		document.getElementById('two').style.background = "red";
	} else if (item == 3) {
		document.getElementById('three').style.background = "red";
	} else if (item == 4) {
		document.getElementById('four').style.background = "red";
	}
}
function reset() {
	document.getElementById('one').style.background = 'rgb(48, 48, 48)';
	document.getElementById('one').innerHTML = '0';
	document.getElementById('two').style.background = 'rgb(48, 48, 48)';
	document.getElementById('two').innerHTML = '0';
	document.getElementById('three').style.background = 'rgb(48, 48, 48)';
	document.getElementById('three').innerHTML = '0';
	document.getElementById('four').style.background = 'rgb(48, 48, 48)';
	document.getElementById('four').innerHTML = '0';
	can = true
}
function random_item(items) {
  return items[Math.floor(Math.random()*items.length)];    
}
function cut(x) {
	var correct_color = random_item(['red', 'white', 'blue', 'green'])
	if (x == correct_color) {
		document.getElementById('part2').style.display = 'none';
		document.getElementById('win').style.display = 'block';
		document.getElementById('seconds_to_spare').innerHTML = "You defused the bomb with " + time + ' left to spare';
		time = -10
	} else {
		bomb_sound.play();
		document.getElementById('part2').style.display = 'none';
		document.getElementById('lose').style.display = 'block';
		time = -10
	}
}


function restart() {
	location.reload()
}