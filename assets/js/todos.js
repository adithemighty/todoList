$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(200, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
  if (event.which === 13) {
    const todoText = $(this).val();
    $("ul").append(
      `<li><span class="delete"><i class="fas fa-trash"></i></span> ${todoText}</li>`
    );
    $(this).val("");
  }
});

$(".plus").on("click", function() {
  $('input[type="text"]').fadeToggle();
});
