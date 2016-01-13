var $gongSound = $('audio').get(0);

$('input').on('click', function() {
    $gongSound.play();
})
