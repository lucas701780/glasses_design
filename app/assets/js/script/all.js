$(document).ready(function () {
  // 漢堡選單
  $('.mobile-menu').click(function (e) {
      e.preventDefault();
      $('.menu').toggleClass('active');
  })

});