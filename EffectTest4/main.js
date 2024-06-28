// script.js
let canCreateShapes = true;
const coolDownTime = 1000; // 5秒

document.addEventListener('keydown', (event) => {
    if (canCreateShapes) {
        switch (event.code) {
            case 'KeyZ':
                createShapes(39, 'star');
                break;
            case 'KeyX':
                createShapes(39, 'heart');
                break;
            case 'KeyC':
                createShapes(39, 'diamond');
                break;
        }
        canCreateShapes = false;
        setTimeout(() => {
            canCreateShapes = true;
        }, coolDownTime);
    }
});

function createShapes(count, shapeClass) {
    for (let i = 0; i < count; i++) {
        createShape(shapeClass);
    }
}

function createShape(shapeClass) {
    const shapeField = document.getElementById('star-field');
    const shape = document.createElement('div');
    shape.classList.add('shape', shapeClass);

    // ランダムな色を設定
    const colors = ['#6ff', '#6f9', '#ff7', '#f9f', '#75a9ff', '#ffad90'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    shape.style.setProperty('--shape-color', color);

    // ランダムな位置を設定
    shape.style.left = `${Math.random() * 100}vw`;
    shape.style.top = `${Math.random() * 100}vh`;
    shapeField.appendChild(shape);

    // アニメーション終了後に形を削除
    shape.addEventListener('animationend', () => {
        shape.remove();
    });
}