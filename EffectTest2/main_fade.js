var btn = document.getElementById('mybtn');
var box = document.getElementById('mybox');

btn.onclick = function () {
  box.classList.toggle('is-show')
}

// Check clickable box
box.onclick = function () {
  alert('Box exists.')
}