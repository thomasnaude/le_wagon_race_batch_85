$(document).ready(function(){
  $('#again').click(function(){
    location.reload();
  });

  $(document).keyup(function(event){
    if (event.keyCode == 65) {
      var id = 1;
    } else if (event.keyCode == 80) {
      var id = 2;
    }
    moveCar(id);
  });

  moveIa(2);

  function checkWon(id, next) {

    if (next.hasClass('finish')){
      $(document).off( 'keyup' );
      setTimeout(function() {
        // if (window.confirm('Player ' + id + ' won do you want to reset?')) {
        //   location.reload();
        //   }
        $('#checkwon .modal-title').text('Player ' + id + ' won');
        $('#checkwon').modal('show');
      }, 100);
    }
  };

  function moveCar(id){
    var current = $('#player' + id + '_race td.active');
    var next = current.next();
    current.removeClass('active');
    next.addClass('active');
    checkWon(id, next);
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function moveIa(){
    var rand = getRandomArbitrary(100, 1000);
    setTimeout(function() {
      moveCar(2);
      moveIa();
    }, rand);

  }
  // we use timeout to make the player 2 (ia) move
});



