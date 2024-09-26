window.addEventListener('load', () => console.log('Page has been loaded.'));

window.addEventListener('DOMContentLoaded', () => console.log('DOM has been loaded.'));

window.addEventListener('resize', () => console.log(`Windw's size has been changed: w-${window.innerWidth}, h-${window.innerHeight}`));

window.addEventListener('scroll', () => console.log(`Scrilled to ${window.screenY} pixels.`));

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    console.log('beforeunload');
});

window.addEventListener('unload', () => console.log('Page has been unloaded.'));

window.addEventListener('focus', () => console.log('Page is active.'));

window.addEventListener('blur', () => console.log('Page is passive.'));

window.addEventListener('error', (event) => console.log(`Error: ${event.message} on ${event.filename} in line ${event.lineno}:${event.colno}.`));

window.addEventListener('online', () => console.log('Connection restored.'));

window.addEventListener('offline', () => console.log('Connection was been lost.'));

const script = document.createElement('script');

script.src = './test.js';

document.head.append(script);

script.onload = function () {
    console.log(TEST);
    console.log(this);
};

let script2 = document.createElement('script');
script2.src = 'https://example.com/404.js'; 
document.head.append(script2);

script2.onerror = function () {
    console.log(`Download error ${this.src}`); 
};
