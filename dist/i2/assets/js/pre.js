$(document).ready(function () {
    $('.pre').each(function () {
        var $this = $(this);
        var t = $this.html();
        $this.text(t.replace('<', '<').replace('>', '>').replace(/>/g, '>\n'));
    });
    $('.pre').css('text-align', 'center');
})