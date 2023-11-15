$(document).ready(function(){
  $("#SearchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("shop-section shop-card card card-body card-title").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});