body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');

body.appendChild(container);

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        console.log(i);
        // const container = document.querySelector('.container');
        const sqDiv = document.createElement('div');
        sqDiv.classList.add('squareDiv');
        // sqDiv.textContent = `${i+1} - ${j + 1}`;
        sqDiv.style.cssText = `grid-row: ${i + 1}; grid-column: ${j + 1}`;
        sqDiv.value = 1;
        container.appendChild(sqDiv);
    }
}

const allSquareqDiv = document.querySelectorAll('.squareDiv');
allSquareqDiv.forEach((div) => {
    div.addEventListener('mouseover', function (event) {
        if (this.value > 0 && this.value - 0.1 >= 0) {
            this.value = parseFloat((this.value - 0.1).toFixed(1));
        }
        // this.style.backgroundColor = 'grey';
        this.classList.add('hovered');
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const hovered = document.querySelector('.hovered');
        // this.style.cssText = `filter: brightness(${this.value})`;
        this.style.filter = `brightness(${this.value})`;
        hovered.style.backgroundColor = '#' + randomColor;
        
        // console.log(this);
    });
});

allSquareqDiv.forEach((div) => {
    div.addEventListener('mouseout', function(e) {
        this.classList.remove('hovered');
        const hovered = document.querySelector('.hovered');
        this.style.backgroundColor = 'white';
    });
});



const button = document.querySelector('button');
button.addEventListener('click', function () {
    let grid = prompt('What grid size would you like ?');
    while (grid > 64) {
        alert('Lower than 65 please');
        grid = prompt('What size ?');
    }
    // else {
        const allSqDivCount = document.querySelectorAll('.squareDiv');
        const count = Math.sqrt(allSqDivCount.length);
        // console.log(count);
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                const sqDiv = document.querySelector('.squareDiv');
                container.removeChild(sqDiv);
            }
        }
        for (let i = 0; i < grid; i++) {
            for (let j = 0; j < grid; j++) {
                const container = document.querySelector('.container');
                const newSquareDiv = document.createElement('div');
                newSquareDiv.classList.add('squareDiv');
                newSquareDiv.style.cssText = `grid-column: ${j + 1}; grid-row: ${i + 1}; grid-template-columns: minmax(0, 1fr);`;
                newSquareDiv.value = 1;
                container.appendChild(newSquareDiv);
            }
        }
        console.log('finish create');
        const allNewSquareDiv = document.querySelectorAll('.squareDiv');
        allNewSquareDiv.forEach((div) => {
            div.addEventListener('mouseover', function (ev) {
                if (this.value > 0 && this.value - 0.1 >= 0) {
                    this.value = parseFloat((this.value - 0.1).toFixed(1));
                }
                this.classList.add('hovered');
                // this.classList.add('brightness');
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                const hovered = document.querySelector('.hovered');
                const brightness = document.querySelector('.brightness');
                // this.style.cssText = `filter: brightness(${this.value})`;     THIS BUG WHEN HOVERING ALL OF THE LAST COLUMN, THEY DISAPPEAR TO BECOME ROW
                this.style.filter = `brightness(${this.value})`;
                hovered.style.backgroundColor = '#' + randomColor;
            });
        });

        allNewSquareDiv.forEach((div) => {
            div.addEventListener('mouseout', function (evout) {
                this.classList.remove('hovered');
                this.style.backgroundColor = 'white';
            });
        });
    // }
}); 



// const allNewSquareDiv = document.querySelectorAll('.squareDiv');
// allNewSquareDiv.forEach((div) => {
//     div.addEventListener('mouseover', function (ev) {
//         this.classList.add('hovered');
//         const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//         const hovered = document.querySelector('.hovered');
//         hovered.style.backgroundColor = '#' + randomColor;
//         console.log(this);
//     });
// });

// allNewSquareDiv.forEach((div) => {
//     div.addEventListener('mouseout', function (evout) {
//         this.classList.remove('hovered');
//         this.style.backgroundColor = 'white';
//     });
// });