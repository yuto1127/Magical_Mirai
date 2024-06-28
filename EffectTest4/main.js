// script.js
let canCreateStars = true;
const coolDownTime = 1000; 

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && canCreateStars) {
        createStars(39);
        canCreateStars = false;
        setTimeout(() => {
            canCreateStars = true;
        }, coolDownTime);
    }
});

function createStars(count) {
    for (let i = 0; i < count; i++) {
        createStar();
    }
}

function createStar() {
    const starField = document.getElementById('star-field');
    const star = document.createElement('div');
    star.classList.add('star');

    // ランダムな色を設定
    const colors = ['#6ff', '#6f9', '#ff7', '#f9f', '#75a9ff', '#ffad90'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    star.style.setProperty('--star-color', color);

    // ランダムな位置を設定
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    starField.appendChild(star);

    // アニメーション終了後に星を削除
    star.addEventListener('animationend', () => {
        star.remove();
    });
}