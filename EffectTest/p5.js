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
    //星の軌跡を描く
    drawStar(particle.x, particle.y, 5, particle.size / 2, particle.size / 4);
    // 丸の軌跡を描く
    // circle(particle.x, particle.y, particle.size);
    particle.x -= particle.dx;
    particle.y -= particle.dy;
    particle.size -= particle.ds * 100;
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
    x0 + Math.random(-size / 4, size / 4),
    y0 + Math.random(-size / 4, size / 4),
    [Math.random(90, 290), 50, 50, 100],
  ];
  const lifetime = Math.random(1, 3) * 60;
  const [dx, dy, ds, da] = [
    Math.random(-100, 100) / lifetime,
    Math.random(-100, 100) / lifetime,
    size / lifetime,
    100 / lifetime,
  ];

  const particle = { x, y, size, dx, dy, ds, color, da, lifetime };
  particleList.push(particle);
}