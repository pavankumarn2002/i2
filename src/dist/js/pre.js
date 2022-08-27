$(document).ready(function () {
    $('xmp').each(function () {
        var $this = $(this);
        var t = $this.html();
        $this.text(t.replace('<', '<').replace('>', '>').replace(/>/g, '>'));
      });
      
      $('.xmp').each(function () {
        var $this = $(this);
        var t = $this.html();
        $this.text(t.replace("'[", '[').replace("]'", ']'));
      });
      
      $('pre').each(function () {
        var $this = $(this);
        var t = $this.html();
        $this.text(t.replace('<', '<').replace('>', '>').replace(/>/g, '>'));
        $this.text(t.replace("'[", '[').replace("]'", ']').replace(/>/g, '>'));
      });
    $('.pre').css('text-align', 'left');
    $('xmp').css('text-align', 'left');
})