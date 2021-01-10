const ulSquares = document.querySelector("ul.squares")
const random = (min , max) => Math.random() * (max - min) + min;

for(let squareIndex = 0; squareIndex <= 15;squareIndex++){
    const li = document.createElement("li")

    const size = Math.floor(random(10,120));
    const position = random(1, 99);
    const delay = random(5, 0.1);
    const duration = random(24, 12);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`

    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`

    ulSquares.appendChild(li)
}