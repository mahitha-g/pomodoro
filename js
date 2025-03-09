let timerEl = document.getElementById("timer");
let button1 = document.getElementById("button1");
let stopel = document.getElementById("stop");
let button2 = document.getElementById("start")
let shortbreak = document.getElementById("short");
let longbreak = document.getElementById("long");



button1.addEventListener("click", function() {
            let text1 = 25;
            let text2 = ":";
            let text3 = 00;
            let text4 = 59;

            timerEl.textContent = text1 + text2 + text3;
            stopel.addEventListener("click", function() {

            })

            button2.addEventListener("click", function() {
                        let text4 = 59;
                        let intervalId = setInterval(function() {
                            text5 = text4 - 1;
                            if (text4 === 00) {
                                text1 = text1 - 1
                            }

                        })

                        shortbreak.addEventListener("click", function() {
                            let text1 = 05;
                            let text2 = ":";
                            let text3 = 00;
                            let text4 = 59;

                            timerEl.textContent = text1 + text2 + text3;
                        })

                        longbreak.addEventListener("click", function() {
                            let text1 = 25;
                            let text2 = ":";
                            let text3 = 00;
                            let text4 = 59;

                            timerEl.textContent = text1 + text2 + text3;
                        })
