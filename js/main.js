function() {
  if ($('#side').hasClass('close')) {
    $('#container, #header').removeClass('onside');
    $('#side').removeClass();
  } else {
    $('#container, #header').addClass('onside');
    $('#side').addClass('close');
  }
}