var greets = [
  'Hello! 👋',
  'Hi! 👋',
  'Howdy! 👋',
  'Namaste 🙏',
  'Hey 👋,',
  'Anyoung haseyo 🙏',
  'Jojo Loppa 🙏',
  'Tashi Delek 🙏',
  'Chhyaajalo 🙏',
  'Sewaro 🙏',
];

var selectedQuestion = null;

function getRandomPerson() {
  var randomPerson = selectPerson();

  if (!randomPerson) {
    $('#question').fadeOut(0);
    return $('#person').html('Game Over! <h3>Thank You</h3>');
  }

  randomPerson.active = false;

  $('#person').html(greetPerson(randomPerson.name));
  $('#profile-pic').attr('src', randomPerson.image);

  $('#btn-choose-person').addClass('hide');
  $('#btn-ques').removeClass('hide');
  $('.profile-pic-wrapper').removeClass('hide');
  $('#question').empty();
  $('#question').fadeOut(0);

  displayQuestionNumbers();
}

function selectPerson() {
  var activePersons = participients.filter(function (person) {
    return person.active === true;
  });

  if (!activePersons.length) {
    $('#btn-choose-person').addClass('hide');
    $('#btn-ques').addClass('hide');
    $('.profile-pic-wrapper').addClass('hide');
    $('#ques-board').addClass('hide');
    $('#question').addClass('hide');

    return;
  }

  return activePersons[getRandomInt(activePersons.length)];
}

function greetPerson(person) {
  var greet = greets[Math.floor(Math.random() * greets.length)];

  return `<span class="small">${greet}</span> ${person}!`;
}

function displayQuestionNumbers() {
  var totalQuestions = questions.length;
  // $('#ques-board').removeClass('hide');
  $('#ques-board').fadeIn(1000);
  $('#ques-options').empty();

  for (var i = 0; i < totalQuestions; i++) {
    var question = null;
    if (questions[i].active)
      question = `<span id="ques-no-${questions[i].key}" onclick="selectQuestion(${questions[i].key})" class="col-md-1 options">${questions[i].key}</span>`;
    else
      question = `<span class="col-md-1 inactive ">${questions[i].key}</span>`;

    $('#ques-options').append(question);
  }
}

function selectQuestion(questionKey) {
  var totalQuestions = questions.length;

  if (!selectedQuestion) {
    for (var i = 0; i < totalQuestions; i++) {
      if (questions[i].key === questionKey) {
        selectedQuestion = questions[i].ques;
        questions[i].active = false;
        $(`#ques-no-${questionKey}`).addClass('active');

        break;
      }
    }
  }
}

function getSelectedQuestion() {
  // $('#ques-board').addClass('hide');
  if (selectedQuestion) {
    $('#ques-board').fadeOut(100);
    $('#btn-choose-person').removeClass('hide');
    $('#btn-ques').addClass('hide');
    $('#question').html(selectedQuestion);
    $('#question').fadeIn(1000);

    return (selectedQuestion = null);
  }

  alert('Please select the Number.');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function skipPerson() {
  selectedQuestion = null;
  getRandomPerson();
}
