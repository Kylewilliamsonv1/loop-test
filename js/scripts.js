$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const array = [1, 2, 3];
    array.forEach(function(number) {
      console.log(number * 2);
    });
  });
});