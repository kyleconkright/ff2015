$(document).ready(function(){
  $('.leftFootball').click(function(){
    $('.leftFootball').hide();
    $('.rightFootball').show();
  })

  $('.rightFootball').click(function(){
    $('.rightFootball').hide();
    $('.leftFootball').show();
  })

  $('.akira').click(function(){
    $('.profile')[0].outerHTML = '<div class="profile"><a name="profile"><img src="assets/img/akira.jpg"></a></div>';
    $('.profile').show();
  })

  $('.chris').click(function(){
    $('.profile')[0].outerHTML = '<div class="profile"><a name="profile"><img src="assets/img/chris.jpg"></a></div>';
    $('.profile').show();
  })

  $('.kylec').click(function(){
    $('.profile')[0].outerHTML = '<div class="profile"><a name="profile"><img src="assets/img/kylec.jpg"></a></div>';
    $('.profile').show();
  })

  $('.eric').click(function(){
    $('.profile')[0].outerHTML = '<div class="profile"><a name="profile"><img src="assets/img/eric.jpg"></a></div>';
    $('.profile').show();
  })

  $('.matt').click(function(){
    $('.profile')[0].outerHTML = '<div class="profile"><a name="profile"><img src="assets/img/matt.jpg"></a></div>';
    $('.profile').show();
  })

  $('.kyleh').click(function(){
    $('.profile')[0].outerHTML = '<div class="profile"><a name="profile"><img src="assets/img/kyleh.jpg"></a></div>';
    $('.profile').show();
  })

  $('.yo').click(function(){
    $('.profile')[0].outerHTML = '<div class="profile"><a name="profile"><img src="assets/img/yo.jpg"></a></div>';
    $('.profile').show();
  })

  $('.brian').click(function(){
    $('.profile')[0].outerHTML = '<div class="profile"><a name="profile"><img src="assets/img/brian.jpg"></a></div>';
    $('.profile').show();
  })

  $('.vince').click(function(){
    $('.profile')[0].outerHTML = '<div class="profile"><a name="profile"><img src="assets/img/vince.jpg"></a></div>';
    $('.profile').show();
  })

  $('.chase').click(function(){
    $('.profile')[0].outerHTML = '<div class="profile"><a name="profile"><img src="assets/img/chase.jpg"></a></div>';
    $('.profile').show();
  })

  $('.mark').click(function(){
    $('.profile')[0].outerHTML = '<div class="profile"><a name="profile"><img src="assets/img/mark.jpg"></a></div>';
    $('.profile').show();
  })

  $('.tom').click(function(){
    $('.profile')[0].outerHTML = '<div class="profile"><a name="profile"><img src="assets/img/tom.jpg"></a></div>';
    $('.profile').show();
  })

  $('.sign').click(function(){
    $('.profile')[0].outerHTML = '<div class="profile"><a name="profile"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/s6dejP1QqJg" frameborder="0" allowfullscreen></iframe></a></div>';
    $('.profile').show();
  })

	$('[href^="#"]').click(function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    $('html, body').stop().animate({
	        'scrollTop': $('.profile').offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
      $('.profile').prepend('<div class="top"><a href="#top">TOP</a></div>');
	});

});
