(function() {
    const componentId = 'check-your-tax-refund-potential';
    const checkYourTaxRefundPotentialElement = document.getElementById(componentId);
    document.addEventListener('DOMContentLoaded', function (event) {
        if (checkYourTaxRefundPotentialElement && checkYourTaxRefundPotentialElement !== undefined) {
            startLoadingComponent(event);
        }
    });

    function startLoadingComponent() {
        const tryItForFreeLink = 'https://www.finday.com';
        const questionAnswers = [
            {
                question: 'Moved to The Netherlands in 2019?',
                answer: "It's worth it! You should receive a very high tax refund",
                color: "#7b68ee",
                emotion: 'happy',
                id: 1
            },
            {
                question: 'Worked less than 12 months in 2019?',
                answer: "It's worth it! You should receive a very high tax refund",
                color: "#a50270",
                emotion: 'happy',
                id: 2
            },
            {
                question: 'Non working Partner ?',
                answer: "You can expect a high tax refund",
                color: "#7b68ee",
                emotion: 'happy',
                id: 3
            },
            {
                question: 'Worked as a freelancer?',
                answer: "You are obliged to file your taxes",
                color: "#00b2a9",
                emotion: 'happy',
                id: 4
            },
            {
                question: 'Bought a house in 2019?',
                answer: "You can expect a high tax refund",
                color: "#7b68ee",
                emotion: 'happy',
                id: 5
            },
            {
                question: 'Received a letter from the Tax office ?',
                answer: "You are obliged to file your taxes",
                color: "#00b2a9",
                emotion: 'happy',
                id: 6
            },
            {
                question: 'Travel to work using public transport more than 10 km ?',
                answer: "You can expect a high tax refund",
                color: "#a50270",
                emotion: 'happy',
                id: 7
            },
            {
                question: 'Paid for training or seminars?',
                answer: "It's worth it! You should receive a very high tax refund",
                color: "#7b68ee",
                emotion: 'happy',
                id: 8
            }
        ];

        loadComponentHTML(questionAnswers, tryItForFreeLink);
    }

    function loadComponentHTML(questionAnswers, tryItForFreeLink) {
        let buildHTML = '<div class="check-your-refund">';
        buildHTML += '<h1>Check your tax refund potential</h1>';
        questionAnswers.forEach(item => {
            buildHTML += loadSingleItem(item);
        });
        buildHTML += loadComponentFooter(tryItForFreeLink);
        buildHTML += '</div>';

        checkYourTaxRefundPotentialElement.innerHTML = buildHTML;
        addComponentEventListners();
    }

    function loadSingleItem(item) {
        let buildHTML = '<div class="input-box-holder">' +
                '<input type="checkbox" class="item_checkbox" ' +
                'data-js-answer="' + item.answer + '" id="' + item.id + '" ' + 
                'data-js-emotion="' + item.emotion + '" value="' + item.id + '" ' +
                'data-js-color="' + item.color + '" /> ' +
                '<label for="' + item.id +'">' + item.question + '</label>' +
            '</div>';
        return buildHTML;
    }

    function addComponentEventListners() {
        let items = document.querySelectorAll('.check-your-refund input.item_checkbox[type="checkbox"]');
        for (let i = 0; i < items.length; i ++) {
            items[i].addEventListener('change', checkItemChecked, false);
        }
    }

    function loadComponentFooter(tryItForFreeLink) {
        let buildHTML = '<div class="refund-footer">';
        buildHTML += '<div class="check-box-message js-hide"><span></span></div>';
        buildHTML += '<div class="try-it-free"><a target="_blank" href="' + tryItForFreeLink + '">';
        buildHTML += '<button class="btn-try-it">try it for free</button></a></div>';
        buildHTML += '<div>';
        return buildHTML;
    }

    function checkItemChecked(event) {
        if (event.target.checked) {
            const answer = event.target.attributes['data-js-answer'].value;
            const emotion = event.target.attributes['data-js-emotion'].value;
            const itemColor = event.target.attributes['data-js-color'].value;
            processAnswersEmotion(answer, emotion, itemColor);
        } else {
            checkAndClearAnswers();
        }
    }

    function checkAndClearAnswers() {
        let checkboxCheckedLength = [].slice.call(document.querySelectorAll(".check-your-refund .input-box-holder .item_checkbox"))
        .filter(function(e) { return e.checked; }).length;

        if (checkboxCheckedLength === 0) {
            document.querySelector('.check-your-refund .refund-footer .check-box-message').classList.add('js-hide');
        }
    }

    function processAnswersEmotion(answer, emotion, itemColor) {
        const answerElement = document.querySelector('.check-your-refund .refund-footer .check-box-message span');
        answerElement.innerText = answer.toString();
        answerElement.style.color = itemColor;
        document.querySelector('.check-your-refund .refund-footer .check-box-message').classList.remove('js-hide');

        if (emotion.toString() === 'happy') {
            confetti.start(1500, 200, 500);
        }
    }
})();


// Particles animation

// You can call any of the following available functions:

// 	confetti.start();                  //starts the confetti animation (keeps going until stopped manually)
// 	confetti.start(timeout);           //starts confetti animation with confetti timeout in milliseconds (if timeout is 0, it will keep going until stopped manually)
// 	confetti.start(timeout, amount);   //like confetti.start(timeout), but also specifies the number of confetti particles to throw (50 would be a good example)
// 	confetti.start(timeout, min, max); //like confetti.start(timeout), but also the specifies the number of confetti particles randomly between the specified minimum and maximum amount
// 	confetti.stop();        //stops adding confetti
// 	confetti.toggle();      //starts or stops the confetti animation depending on whether it's already running
// 	confetti.pause();       //freezes the confetti animation
// 	confetti.resume();      //unfreezes the confetti animation
// 	confetti.togglePause(); //toggles whether the confetti animation is paused
// 	confetti.remove();      //stops the confetti animation and remove all confetti immediately
// 	confetti.isPaused();    //returns true or false depending on whether the confetti animation is paused
// 	confetti.isRunning();   //returns true or false depending on whether the animation is running

// You can also configure these parameters:

// 	confetti.maxCount = 150;     //set max confetti count
// 	confetti.speed = 2;          //set the particle animation speed
// 	confetti.frameInterval = 20; //the confetti animation frame interval in milliseconds
// 	confetti.alpha = 1.0;        //the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
// 	confetti.gradient = false;   //whether to use gradients for the confetti particles

let confetti = {
	maxCount: 150,		//set max confetti count
	speed: 2,			//set the particle animation speed
	frameInterval: 15,	//the confetti animation frame interval in milliseconds
	alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
	gradient: false,	//whether to use gradients for the confetti particles
	start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
	stop: null,			//call to stop adding confetti
	toggle: null,		//call to start or stop the confetti animation depending on whether it's already running
	pause: null,		//call to freeze confetti animation
	resume: null,		//call to unfreeze confetti animation
	togglePause: null,	//call to toggle whether the confetti animation is paused
	remove: null,		//call to stop the confetti animation and remove all confetti immediately
	isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused
	isRunning: null		//call and returns true or false depending on whether the animation is running
};

(function() {
	confetti.start = startConfetti;
	confetti.stop = stopConfetti;
	confetti.toggle = toggleConfetti;
	confetti.pause = pauseConfetti;
	confetti.resume = resumeConfetti;
	confetti.togglePause = toggleConfettiPause;
	confetti.isPaused = isConfettiPaused;
	confetti.remove = removeConfetti;
	confetti.isRunning = isConfettiRunning;
	let supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
	let colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];
	let streamingConfetti = false;
	let animationTimer = null;
	let pause = false;
	let lastFrameTime = Date.now();
	let particles = [];
	let waveAngle = 0;
	let context = null;

	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = Math.random() * Math.PI;
		return particle;
	}

	function toggleConfettiPause() {
		if (pause)
			resumeConfetti();
		else
			pauseConfetti();
	}

	function isConfettiPaused() {
		return pause;
	}

	function pauseConfetti() {
		pause = true;
	}

	function resumeConfetti() {
		pause = false;
		runAnimation();
	}

	function runAnimation() {
		if (pause)
			return;
		else if (particles.length === 0) {
			context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			animationTimer = null;
		} else {
			let now = Date.now();
			let delta = now - lastFrameTime;
			if (!supportsAnimationFrame || delta > confetti.frameInterval) {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				updateParticles();
				drawParticles(context);
				lastFrameTime = now - (delta % confetti.frameInterval);
			}
			animationTimer = requestAnimationFrame(runAnimation);
		}
	}

	function startConfetti(timeout, min, max) {
		let width = window.innerWidth;
		let height = window.innerHeight;
		window.requestAnimationFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, confetti.frameInterval);
				};
		})();
		let canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
			document.body.prepend(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
			context = canvas.getContext("2d");
		} else if (context === null)
			context = canvas.getContext("2d");
		let count = confetti.maxCount;
		if (min) {
			if (max) {
				if (min == max)
					count = particles.length + max;
				else {
					if (min > max) {
						let temp = min;
						min = max;
						max = temp;
					}
					count = particles.length + ((Math.random() * (max - min) + min) | 0);
				}
			} else
				count = particles.length + min;
		} else if (max)
			count = particles.length + max;
		while (particles.length < count)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		pause = false;
		runAnimation();
		if (timeout) {
			window.setTimeout(stopConfetti, timeout);
		}
	}

	function stopConfetti() {
		streamingConfetti = false;
	}

	function removeConfetti() {
		stop();
		pause = false;
		particles = [];
	}

	function toggleConfetti() {
		if (streamingConfetti)
			stopConfetti();
		else
			startConfetti();
	}
	
	function isConfettiRunning() {
		return streamingConfetti;
	}

	function drawParticles(context) {
		let particle;
		let x, y, x2, y2;
		for (let i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			x2 = particle.x + particle.tilt;
			x = x2 + particle.diameter / 2;
			y2 = particle.y + particle.tilt + particle.diameter / 2;
			if (confetti.gradient) {
				let gradient = context.createLinearGradient(x, particle.y, x2, y2);
				gradient.addColorStop("0", particle.color);
				gradient.addColorStop("1.0", particle.color2);
				context.strokeStyle = gradient;
			} else
				context.strokeStyle = particle.color;
			context.moveTo(x, particle.y);
			context.lineTo(x2, y2);
			context.stroke();
		}
	}

	function updateParticles() {
		let width = window.innerWidth;
		let height = window.innerHeight;
		let particle;
		waveAngle += 0.01;
		for (let i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle) - 0.5;
				particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= confetti.maxCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();
