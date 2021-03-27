let boxes = document.querySelectorAll('.grid-container div');
let colors = ['blue', 'red', 'pink', 'yellow', 'white', 'green', 'black', 'brown', 'yellow', 'green', 'black', 'brown', 'red', 'pink', 'blue', 'white'];
let prevColor, currentColor, j = 0, prevBoxPosition, currentBoxPosition, count = 0;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function (event) {
        event.preventDefault();
        this.style.background = colors[i];
        if (j % 2 == 0) {
            prevColor = colors[i];
            prevBoxPosition = i;
        }
        if (j % 2 == 1) {
            currentColor = colors[i];
            currentBoxPosition = i;
            setTimeout(() => {
                if (prevColor != currentColor) {
                    boxes[prevBoxPosition].style.background = "grey";
                    boxes[currentBoxPosition].style.background = "grey";
                }
            }, 800);
            count++;
            document.getElementById('count').innerHTML = `${count}`
        }
        j++;
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

