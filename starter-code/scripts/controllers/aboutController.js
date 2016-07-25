(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('.tab-content').hide();
    $('#about').fadeIn();
    /* DONE: Reveal only the about section! */
  };

  module.aboutController = aboutController;
})(window);
