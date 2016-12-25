$(document).ready(function() {
  $('#period-switcher a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $('#period-switcher a:first').tab('show');
});
