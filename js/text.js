
document.getElementById('bold').addEventListener('click', function(){
    const main = document.getElementById('main-text');
    main.style.fontWeight = 800; 
})

document.getElementById('italic').addEventListener('click', function(){
    const main = document.getElementById('main-text');
    main.style.fontStyle = 'italic';
})

document.getElementById('under-line').addEventListener('click', function(){
    const main = document.getElementById('main-text');
    main.style.textDecoration = 'underline';
})

document.getElementById('left').addEventListener('click', function(){
    const main = document.getElementById('main-text');
    main.style.textAlign = 'left';
})

document.getElementById('center').addEventListener('click', function(){
    const main = document.getElementById('main-text');
    main.style.textAlign = 'center';
})
document.getElementById('right').addEventListener('click', function(){
    const main = document.getElementById('main-text');
    main.style.textAlign = 'right';
})
document.getElementById('justify').addEventListener('click', function(){
    const main = document.getElementById('main-text');
    main.style.textAlign = 'justify';
})

document.getElementById('size').addEventListener('keyup', function(){
    const input = document.getElementById('size');
    const main = document.getElementById('main-text');
    main.style.fontSize = input.value + 'px';
})
document.getElementById('size').addEventListener('click', function(){
    const input = document.getElementById('size');
    const main = document.getElementById('main-text');
    main.style.fontSize = input.value + 'px';
})

document.getElementById('color').addEventListener('click', function(){
    const main = document.getElementById('main-text');
    const color = document.getElementById('color');
    main.style.color = color.value;
})