let boxes = document.querySelectorAll('.grid-container div');
let totalCount = document.getElementById('count');
let colors = ['silver', 'white', 'brown', 'yellow', 'white', 'pink', 'black', 'pink',
    'yellow', 'green', 'orange', 'brown', 'black', 'green', 'silver', 'orange'];
let prevColor, currentColor, prevBoxPosition, currentBoxPosition;
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

            if (j % 2 == 1) {
                currentColor = colors[i];
                currentBoxPosition = i;
                setTimeout(() => {
                    if (prevColor != currentColor) {
                        boxes[prevBoxPosition].style.background = "grey";
                        boxes[currentBoxPosition].style.background = "grey";
                    }
                    flag = true;
                }, 1000);
                count++;
                totalCount.innerHTML = `${count}`
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

