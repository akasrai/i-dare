let confetti_colors = [
  '#E68F17',
  '#FAB005',
  '#FA5252',
  '#E64980',
  '#BE4BDB',
  '#0B7285',
  '#15AABF',
  '#EE1233',
  '#40C057',
];
let confettis_conf = [
  // 1
  {
    angle: 270,
    spread: 45,
    startVelocity: 20,
    elementCount: 10,
    decay: 0.7,
    colors: confetti_colors,
  },
  // 2
  {
    angle: 270,
    spread: 90,
    startVelocity: 30,
    elementCount: 30,
    decay: 0.73,
    colors: confetti_colors,
  },
  // 3
  {
    angle: 90,
    spread: 180,
    startVelocity: 40,
    elementCount: 50,
    decay: 0.75,
    colors: confetti_colors,
  },
  // 4
  {
    angle: 90,
    spread: 270,
    startVelocity: 50,
    elementCount: 80,
    decay: 0.77,
    colors: confetti_colors,
  },
  // 5
  {
    angle: 90,
    spread: 360,
    startVelocity: 60,
    elementCount: 150,
    decay: 0.82,
    colors: confetti_colors,
  },
];

let person = document.getElementById('con');
$('#btn-choose-person').click(function () {
  window.confetti(person, confettis_conf[$('#profile-pic')]);
});
