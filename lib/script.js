$(document).ready(function(){

  $.getJSON("data/data.json",function(data){
      for(var i = 0; i < data.response.profile.length; i++){
        $('.' + data.response.profile[i].val + '').click(selectedFace(i,data))
      }
    });

    function selectedFace(i,data){
      return function(){
        $('.profileImage')[0].innerHTML = '<img src="' + data.response.profile[i].photo + '">';
        $('.profileName')[0].innerHTML = "NAME: " + data.response.profile[i].name + "<br>TEAM: " + data.response.profile[i].team;
        $('.profile').show();
  }
}

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
	});

});
