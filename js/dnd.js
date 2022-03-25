window.onload = function() {
  var box = document.getElementById('piece1');
  box.addEventListener('touchmove', function(e) {
    var touchLocation = e.targetTouches[0];
    box.style.left = touchLocation.pageX + 'px';
    box.style.top = touchLocation.pageY + 'px';
  })
  box.addEventListener('touchend', function(e) {
    var x = parseInt(box.style.left);
    var y = parseInt(box.style.top);
  })
}
