(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    $('.tab-content').hide();
    $('#articles').fadeIn();
    /* DONE: Reveal only the articles section! */
  };

  module.articleController = articleController;
})(window);
