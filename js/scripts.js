var maximize_button = '<div class="dock-button maximize" title="maximize" style="display: block;">BIG</div>';
$('.dock-body').append(maximize_button);


$('body').on('click', '.maximize', function () {
  console.log('yourmom');
  $('.gui-container').toggleClass('maximized')
})