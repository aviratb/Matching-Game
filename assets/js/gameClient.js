let boxes = document.querySelectorAll('.grid-container div');
let totalCount = document.getElementById('count');
let colors = ['red', 'white', 'brown', 'yellow', 'white', 'pink', 'black', 'pink',
    'yellow', 'green', 'blue', 'brown', 'black', 'green', 'red', 'blue'];
let prevColor, currentColor, prevBoxPosition, currentBoxPosition, matchedBoxes = 0;
let count = 0, j = 0;
let flag = true;
totalCount.innerHTML = `${count}`;

for (let i = 0; i < boxes.length; i++) {

    boxes[i].onclick = function (event) {

        event.preventDefault();

        if (flag) {

            flag = false;
            this.style.background = colors[i];

            if (j % 2 == 0) {
                prevColor = colors[i];
                prevBoxPosition = i;
                flag = true;
            }
            else {
                currentColor = colors[i];
                currentBoxPosition = i;
                if (prevColor != currentColor) {
                    setTimeout(() => {
                        boxes[prevBoxPosition].style.background = "grey";
                        boxes[currentBoxPosition].style.background = "grey";
                        flag = true;
                    }, 1000);
                }
                else {
                    matchedBoxes += 2;
                    boxes[prevBoxPosition].onclick = false;
                    boxes[currentBoxPosition].onclick = false;
                    flag = true;
                }
                count++;
                totalCount.innerHTML = `${count}`
            }

            if (matchedBoxes == 16) {
                flag = false;
            }

            j++;
        }
    }
}

// Animation on scroll
window.onload = function () {
    AOS.init({
        duration: 1500,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}

