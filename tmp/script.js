(function() {
  $(function() {
    return $.ajax({
      url: 'data/data.json',
      type: 'GET',
      dataType: 'json',
      success: function(results) {
        $('<ul id="menu"></ul>').appendTo('div.section div');
        return $.each(results.response.nav.links, function() {
          return $('<li></li>').append('<a href="' + this.href + '">' + this.val + '</a>').appendTo('div.section div ul#menu');
        });
      }
    });
  });

}).call(this);
