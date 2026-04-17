var main = function() {
    var state;
  //The PLAY button
  $('#play').click(function(){
    $('#message').text("Playing track");
    $('#player').trigger("play");
  });
//Pause
    $('#pause').click(function(){
    $('#message').text("Track Paused");
    $('#player').trigger("pause");
  });
  //mute/unmute
  $('#mute').click(function() {
    let player = $('#player');
    let isMuted = player.prop('muted');
    player.prop('muted', !isMuted);
    $(this).text(isMuted ? "Mute" : "Unmute");
    $('#message').text(isMuted ? "Sound On" : "Muted");
  });

  //STOP
  $('#stop').click(function(){
    $('#player').prop('currentTime', 0);
    $('#message').text("Track Stopped");
    $('#player').trigger("pause");
  })

  $('#volumeUp').click(function() {
  let player = $('#player');
  let currentVolume = player.prop('volume');

  if (currentVolume < 1) {
    player.prop('volume', currentVolume + 0.1);
    $('#message').text("Volume: " + (currentVolume + 0.1).toFixed(1));
  }
});

$('#volumeDown').click(function() {
  let player = $('#player');
  let currentVolume = player.prop('volume');

  if (currentVolume > 0) {
    player.prop('volume', currentVolume - 0.1);
    $('#message').text("Volume: " + (currentVolume - 0.1).toFixed(1));
  }
});
}

$(document).ready(main);