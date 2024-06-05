function createParticle (x, y) {
  var size = Math.random() * 50 + 10;
  
  x -= (size / 2);
  y -= (size / 2);
  
  var particle = document.createElement('div');
  document.body.appendChild(particle);
  
  TweenMax.set(particle, {
    x: x, 
    y: y,
    width: size,
    height: size,
    background: function () {
      return `hsl(${Math.random() *90+200}, 50%, 50%)`
    }
  });
  TweenMax.to(particle, Math.random() * 2 + 1, {
    x: x + (Math.random() - 0.5) * 200,
    y: y + (Math.random() - 0.5) * 200,
    opacity: 0,
    scale:0,
    ease: Power2.easeOut,
    onComplete: function () {
      document.body.removeChild(particle);
    }
  })
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
