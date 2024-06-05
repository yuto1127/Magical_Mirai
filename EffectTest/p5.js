let particleList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(80);

  for (const particle of particleList) {
    fill(particle.color);
    circle(particle.x, particle.y, particle.size);
    particle.x -= particle.dx;
    particle.y -= particle.dy;
    particle.size -= particle.ds;
    particle.color[3] -= particle.da;
    particle.lifetime -= 1;
  }

  particleList = particleList.filter((particle) => {
    return particle.lifetime > 0;
  });
}

function mouseMoved() {
  createParticle(mouseX, mouseY);
}

function createParticle(x0, y0) {
  const size = Math.random(10, 60);
  const [x, y, color] = [
    x0 + random(-size / 4, size / 4),
    y0 + random(-size / 4, size / 4),
    [random(90, 290), 50, 50, 100],
  ];
  const lifetime = Mathrandom(1, 3) * 60;
  const [dx, dy, ds, da] = [
    random(-100, 100) / lifetime,
    random(-100, 100) / lifetime,
    size / lifetime,
    100 / lifetime,
  ];

  const particle = { x, y, size, dx, dy, ds, color, da, lifetime };
  particleList.push(particle);
}
window.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    createParticle(x, y);
  });
  document.body.addEventListener('touchmove', function (e) {
    var x = e.touches[0].clientX;
    var y = e.touches[0].clientY;
    e.preventDefault();
    createParticle(x, y);
  });