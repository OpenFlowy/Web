let message: string = 'Hello, World!';
console.log(message);

// Create and append a heading element
let heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
