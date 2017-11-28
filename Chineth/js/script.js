$(document).ready(function() {

  //declare var arr for gif changing
  var arr = ['img/gif1.gif','img/gif2.gif', 'img/gif3.gif' , 'img/gif4.gif'];
  var counter = 0;


  //hover container to fade nav
  $(function() {
    $('.parentContainer').hover(function() {
      $('.nav').fadeTo(600, 0);
    }, function() {
      $('.nav').fadeTo(600, 1);
    });
    console.log('parentContainer')
  });

  $(function() {
    $('video').hover(function() {
      $('.nav').fadeTo(600, 0);
    }, function() {
      $('.nav').fadeTo(600, 1);
    });
  });

  // change logo gif

  $('#imageContainer').click(function(){
    if(counter <=arr.length-2){
      counter +=1;
    }else{
      counter =0;
    }

    if(counter==3){
      $('#imageContainer').css('width','180%');
      $('#imageContainer').css('margin-left','-25%');
      $('#imageContainer').css('margin-top','-15%');
      $('#imageContainer').css('z-index','0');
    }else{
      $('#imageContainer').css('width','120%');
      $('#imageContainer').css('margin-left','-7%');
      $('#imageContainer').css('margin-top','5%');
      $('#imageContainer').css('z-index','0');
    }

    console.log(counter);
    $('#switch').attr('src', arr[counter]);

  });

  // click to play/pause
  $('video').click(function(){
    this[this.paused ? 'play' : 'pause']();
  });


  // press spacebar to Play/Pause.
  var body = $( 'body' );

  body.keypress( function ( e ) {
    if ( e.which == 32 ) {
      // Stop the jerk.
      e.preventDefault();

      // If video is paused.
      if ($('video').get(0).paused == true ) {
        $('video').get(0).play();
      } else {
        $('video').get(0).pause();
      }
    }
  }); // End keypress().


  var voiceEngaged = $("#voice_engaged")[0];
  $("#voice")
  .mouseenter(function() {
  voiceEngaged.play();
  });

  $("#voice")
  .mouseleave(function() {
  voiceEngaged.pause();
  });

  var cryptoEngaged = $("#china_engaged")[0];
  $("#china")
  .mouseenter(function() {
  chinaEngaged.play();
  });
  $("#china")
  .mouseleave(function() {
  chinaEngaged.pause();
  });


  var resistanceEngaged = $("#resistance_engaged")[0];
  $("#resistance")
  .mouseenter(function() {
  resistanceEngaged.play();
  });
  $("#resistance")
  .mouseleave(function() {
  voiceEngaged.pause();
  });



  var introEngaged = $("#intro_engaged")[0];
  $("#intro")
  .mouseenter(function() {
  introEngaged.play();
  });
  $("#intro")
  .mouseleave(function() {
  introEngaged.pause();
  });

  var manifestoEngaged = $("#manifesto_engaged")[0];
  $("#manifesto")
  .mouseenter(function() {
  manifestoEngaged.play();
  });
  $("#manifesto")
  .mouseleave(function() {
  manifestoEngaged.pause();
  });


});
