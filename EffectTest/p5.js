// パーティクルのリストを空の配列で初期化
let particleList = [];

function setup() {
  // キャンバスのサイズをウィンドウのサイズに設定
  createCanvas(windowWidth, windowHeight);
  // 線を描画しない
  noStroke();
  // 色のモデルをHSBで設定
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  // 背景を暗い灰色に設定
  background(80);

  // パーティクルリストの各パーティクルについて
  for (const particle of particleList) {
    // パーティクルの色を設定
    fill(particle.color);
    // 円を描画
    circle(particle.x, particle.y, particle.size);
    // パーティクルの位置を更新
    particle.x -= particle.dx;
    particle.y -= particle.dy;
    // パーティクルのサイズを更新
    particle.size -= particle.ds;
    // パーティクルの透明度を更新
    particle.color[3] -= particle.da;
    // パーティクルの有効期間を減らす
    particle.lifetime -= 1;
  }

  // 有効期間が0未満になったパーティクルをリストから除外
  particleList = particleList.filter((particle) => {
    return particle.lifetime > 0;
  });
}

// マウスが動いたときにcreateParticle関数を呼び出す
function mouseMoved() {
  createParticle(mouseX, mouseY);
}

// パーティクルを作成する関数
function createParticle(x0, y0) {
  // パーティクルのサイズをランダムに設定
  const size = Math.random() * 50 + 10;
  // パーティクルの位置を設定
  const [x, y, color] = [
    x0 + Math.random() * size - size / 2,
    y0 + Math.random() * size - size / 2,
    [Math.random() * 290 + 90, 50, 50, 100],
  ];
  // パーティクルの有効期間をランダムに設定
  const lifetime = Math.random() * 180 + 60;
  // パーティクルの速度をランダムに設定
  const [dx, dy, ds, da] = [
    (Math.random() - 0.5) * 100 / lifetime,
    (Math.random() - 0.5) * 100 / lifetime,
    size / lifetime,
    100 / lifetime,
  ];

  // パーティクルオブジェクトを作成してパーティクルリストに追加
  const particle = { x, y, size, dx, dy, ds, color, da, lifetime };
  particleList.push(particle);
}

// マウスが動いたときにcreateParticle関数を呼び出す
window.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  createParticle(x, y);
});

// タッチデバイスで画面が動いたときにcreateParticle関数を呼び出す
document.body.addEventListener('touchmove', function (e) {
  var x = e.touches[0].clientX;
  var y = e.touches[0].clientY;
  e.preventDefault();
  createParticle(x, y);
});