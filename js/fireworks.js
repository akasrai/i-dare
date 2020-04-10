var max_fireworks = 5,
  max_sparks = 50;
var canvas = document.getElementById('fireworks');
var context = canvas.getContext('2d');
var fireworks = [];

for (var i = 0; i < max_fireworks; i++) {
  var firework = {
    sparks: [],
  };
  for (var n = 0; n < max_sparks; n++) {
    var spark = {
      vx: Math.random() * 5 + 0.5,
      vy: Math.random() * 5 + 0.5,
      weight: Math.random() * 0.3 + 0.03,
      red: Math.floor(Math.random() * 10),
      green: Math.floor(Math.random() * 10),
      blue: Math.floor(Math.random() * 10),
    };
    if (Math.random() > 0.5) spark.vx = -spark.vx;
    if (Math.random() > 0.5) spark.vy = -spark.vy;
    firework.sparks.push(spark);
  }
  fireworks.push(firework);
  resetFirework(firework);
}
window.requestAnimationFrame(explode);

function resetFirework(firework) {
  firework.x = Math.floor(Math.random() * canvas.width);
  firework.y = canvas.height;
  firework.age = 0;
  firework.phase = 'fly';
}

function explode() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((firework, index) => {
    if (firework.phase == 'explode') {
      firework.sparks.forEach((spark) => {
        for (var i = 0; i < 10; i++) {
          var trailAge = firework.age + i;
          var x = firework.x + spark.vx * trailAge;
          var y =
            firework.y +
            spark.vy * trailAge +
            spark.weight * trailAge * spark.weight * trailAge;
          var fade = i * 20 - firework.age * 2;
          var r = Math.floor(spark.red * fade);
          var g = Math.floor(spark.green * fade);
          var b = Math.floor(spark.blue * fade);
          context.beginPath();
          context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
          context.rect(x, y, 2, 2);
          context.fill();
        }
      });
      firework.age++;
      if (firework.age > 100 && Math.random() < 0.05) {
        resetFirework(firework);
      }
    } else {
      firework.y = firework.y - 10;
      for (var spark = 0; spark < 15; spark++) {
        context.beginPath();
        context.fillStyle = 'rgba(' + index * 50 + ',' + spark * 17 + ',0,1)';
        context.rect(
          firework.x + Math.random() * spark - spark / 2,
          firework.y + spark * 4,
          4,
          4
        );
        context.fill();
      }
      if (Math.random() < 0.001 || firework.y < 200) firework.phase = 'explode';
    }
  });

  window.requestAnimationFrame(explode);
}
