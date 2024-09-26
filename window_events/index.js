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

// window.addEventListener('DOMContentLoaded', () => console.log('DOM has been loaded.'));

// window.addEventListener('DOMContentLoaded', () => console.log('DOM has been loaded.'));

// window.addEventListener('DOMContentLoaded', () => console.log('DOM has been loaded.'));
