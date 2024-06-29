/* CSS */
const style = document.createElement('style');
style.textContent = `
body {
    margin: 0;
    overflow: hidden;
}

#app_window {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: black;
    overflow: hidden;
}

.shape {
    position: absolute;
    transform-origin: center;
    animation: fall 3s linear forwards, sway 3s linear forwards, fadeOut 3s linear forwards, rotate 3s linear forwards;
}

/* 星 */
.star {
    width: 50px;
    height: 50px;
    background-color: var(--shape-color, white);
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

/* ハート */
.heart {
    width: 50px;
    height: 40px;
    background-color: var(--shape-color, red);
    clip-path: polygon(50% 15%, 61% 10%, 75% 0%, 90% 10%, 95% 25%, 90% 40%, 50% 80%, 10% 40%, 5% 25%, 10% 10%, 25% 0%, 39% 10%);
}

/* ダイヤモンド */
.diamond {
    width: 30px;
    height: 30px;
    background-color: var(--shape-color, yellow);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

@keyframes fall {
    0% { transform: translateY(-100px); opacity: 1; }
    100% { transform: translateY(100vh); }
}

@keyframes sway {
    0% { transform: translateX(0); }
    50% { transform: translateX(20px); }
    100% { transform: translateX(0); }
}

@keyframes fadeOut {
    0% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);

/* JavaScript */
let canCreateShapes = true;
const coolDownTime = 1000;

document.addEventListener('keydown', (event) => {
    if (canCreateShapes) {
        handleKeyPress(event.code);
        canCreateShapes = false;
        setTimeout(() => {
            canCreateShapes = true;
        }, coolDownTime);
    }
});

function handleKeyPress(keyCode) {
    switch (keyCode) {
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
}

function createShapes(count, shapeClass) {
    for (let i = 0; i < count; i++) {
        createShape(shapeClass);
    }
}

function createShape(shapeClass) {
    const shapeField = document.getElementById('app_window');
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