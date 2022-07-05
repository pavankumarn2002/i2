var colors;
//For Modal
$(document).ready(function () {
    $('[cell-mo^="[-mo"]').each(function () {
        var mo = $(this).attr('cell-mo').match(/[-][m][o](\d{1,})/i);
        var moValue = '[-mo' + mo[1] + ']';
        var opValue = '[-op' + mo[1] + ']';
        var clValue = '[-cl' + mo[1] + ']';
        $('[cell-mo^="' + opValue + '"]').click(function () {
            $('[cell-mo^="' + moValue + '"]').css({
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 999
            });
            $('[cell-mo^="' + moValue + '"]').toggle()
        });
        $('[cell-mo^="' + clValue + '"]').click(function () {
            $('[cell-mo^="' + moValue + '"]').toggle()
        });
    })
})
//For Side Menu
$(document).ready(function () {
    $('[cell-sm^="[-sm"]').each(function () {
        var sm = $(this).attr('cell-sm').match(/[-][s][m](\d{1,})/i);
        var smValue = '[-sm' + sm[1] + ':';

        var eleTo = $('[cell-sm^="' + smValue + '"]').attr('cell-sm').match(/[-][t][o]/i);
        var eleSh = $('[cell-sm^="' + smValue + '"]').attr('cell-sm').match(/[-][s][h]/i);
        var eleIh = $('[cell-sm^="' + smValue + '"]').attr('cell-sm').match(/[-][i][h]/i);
 
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-li]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "si-text-" + index);
        })
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-co]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "si-content-" + index);
        })
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "si-main-" + index);
        })

        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-li]"]').click(function () {
            var getId = this.id;
            var output = getId.substring(8);
            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-li]"]').toggleClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #si-content-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #si-content-' + output + ')').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-' + output + ')').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #su-content-x)').slideUp();
            }
            if (eleSh == '-sh') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-li]"]').addClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #si-content-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #si-content-' + output + ')').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-' + output + ')').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #su-content-x)').hide();
            }
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-text-x)').removeClass("active");
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-text-x)').removeClass("active");
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-text-x)').removeClass("active");
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #su-text-x)').removeClass("active");
        });
        $('[cell-sm^="' + smValue + '"][cell-sm$="]"][cell-sm*="-.cd"] > [cell-sm*="[-si]"] [cell-sm*="[-si-li]"]').mouseenter(function () {
            var getId = this.id;
            var output = getId.substring(8);
            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-li]"]').toggleClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #si-content-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #si-content-' + output + ')').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-' + output + ')').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #su-content-x)').slideUp();
            }
            if (eleSh == '-sh') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-li]"]').addClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #si-content-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-si-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #si-content-' + output + ')').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-' + output + ')').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #su-content-x)').hide();
            }
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-text-x)').removeClass("active");
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-text-x)').removeClass("active");
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-text-x)').removeClass("active");
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #su-text-x)').removeClass("active");
        });
        // For Side Sub Menu
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-li]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "su-text-" + index);
        })
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-co]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "su-content-" + index);
        })
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "su-main-" + index);
        })

        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-su-li]"]').click(function () {
            var getId = this.id;
            var output = getId.substring(8);
            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').toggleClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #su-content-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  #su-content-' + output + ')').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-' + output + ')').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-sp-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-x)').slideUp();
            }
            if (eleSh == '-sh') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').addClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #su-content-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  #su-content-' + output + ')').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-' + output + ')').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-sp-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-x)').hide();
            }
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-mi-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-text-x)').removeClass("active");
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-ma-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-text-x)').removeClass("active");
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-sp-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-text-x)').removeClass("active");
        });
        $('[cell-sm^="' + smValue + '"][cell-sm$="]"][cell-sm*="-.cd"] > [cell-sm*="[-si]"] [cell-sm*="[-su-li]"]').mouseenter(function () {
            var getId = this.id;
            var output = getId.substring(8);
            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').toggleClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #su-content-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  #su-content-' + output + ')').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-' + output + ')').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-sp-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-x)').slideUp();
            }
            if (eleSh == '-sh') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').addClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #su-content-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-su-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  #su-content-' + output + ')').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-' + output + ')').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-sp-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-x)').hide();
            }
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-mi-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-text-x)').removeClass("active");
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-ma-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-text-x)').removeClass("active");
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]  [cell-sm*="[-sp-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-text-x)').removeClass("active");
        });
        // For Side Sup Menu
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-li]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "sp-text-" + index);
        })
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-co]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "sp-content-" + index);
        })
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "sp-main-" + index);
        })

        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-li]"]').click(function () {
            var getId = this.id;
            var output = getId.substring(8);
            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').toggleClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-' + output + ')').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-' + output + ')').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-x)').slideUp();
            }
            if (eleSh == '-sh') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').addClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-' + output + ')').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-' + output + ')').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-x)').hide();
            }
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-text-x)').removeClass("active");
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-text-x)').removeClass("active");
        });
        $('[cell-sm^="' + smValue + '"][cell-sm$="]"][cell-sm*="-.cd"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-li]"]').mouseenter(function () {
            var getId = this.id;
            var output = getId.substring(8);
            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').toggleClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-' + output + ')').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-' + output + ')').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-x)').slideUp();
            }
            if (eleSh == '-sh') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').addClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-sp-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #sp-content-' + output + ')').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-' + output + ')').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-x)').hide();
            }
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-text-x)').removeClass("active");
            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-text-x)').removeClass("active");
        });
        // For Side Macro Menu
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-li]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "ma-text-" + index);
        })
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-co]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "ma-content-" + index);
        })
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "ma-main-" + index);
        })

        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-li]"]').click(function () {
            var getId = this.id;
            var output = getId.substring(8);
            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').toggleClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-' + output + ')').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-' + output + ')').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').slideUp();
            }
            if (eleSh == '-sh') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').addClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-' + output + ')').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-' + output + ')').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').hide();
            }

            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-text-x)').removeClass("active");
        });
        $('[cell-sm^="' + smValue + '"][cell-sm$="]"][cell-sm*="-.cd"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-li]"]').mouseenter(function () {
            var getId = this.id;
            var output = getId.substring(8);
            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').toggleClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-' + output + ')').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-' + output + ')').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').slideUp();
            }
            if (eleSh == '-sh') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').addClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-ma-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #ma-content-' + output + ')').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-' + output + ')').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-x)').hide();
            }

            $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-text-x)').removeClass("active");
        });
        // For Side Micro Menu
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-li]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "mi-text-" + index);
        })
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "mi-content-" + index);
        })
        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "mi-main-" + index);
        })

        $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-li]"]').click(function () {
            var getId = this.id;
            var output = getId.substring(8);
            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').toggleClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-' + output + ')').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-' + output + ')').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').slideUp();
            }
            if (eleSh == '-sh') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').addClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-' + output + ')').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-' + output + ')').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').hide();
            }
        });
        $('[cell-sm^="' + smValue + '"][cell-sm$="]"][cell-sm*="-.cd"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-li]"]').mouseenter(function () {
            var getId = this.id;
            var output = getId.substring(8);
            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').toggleClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-' + output + ')').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-' + output + '').slideToggle();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-' + output + ')').slideUp();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').slideUp();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').slideUp();
            }
            if (eleSh == '-sh') {
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + '').addClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-li]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #' + getId + ')').removeClass("active");
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] [cell-sm*="[-mi-co]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"] #mi-content-' + output + ')').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-' + output + '').show();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-mi-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #mi-main-' + output + ')').hide();

                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-ma-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #ma-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-sp-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #sp-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-su-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #su-main-x)').hide();
                $('[cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > [cell-sm*="[-si-ma]"]:not([cell-sm^="' + smValue + '"] > [cell-sm*="[-ma]"] > #si-main-x)').hide();
            }
        });

        //For Active Classes For Side Menu
        var eleSi = $('[cell-sm^="' + smValue + '"]').attr('cell-sm').match(/[-][s][i]/i);
        if (eleSi == '-si') {
            var siActive = $(this).attr('cell-sm').match(/[-][s][i](\d{1,})/i);
            jQuery(function () {
                jQuery($('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]').find('#si-text-' + siActive[1] + '')).click();
            });
        }
        var eleSu = $('[cell-sm^="' + smValue + '"]').attr('cell-sm').match(/[-][s][u]/i);
        if (eleSu == '-su') {
            var suActive = $(this).attr('cell-sm').match(/[-][s][u](\d{1,})/i);
            jQuery(function () {
                jQuery($('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]').find('#su-text-' + suActive[1] + '')).click();
            });
        }
        var eleSp = $('[cell-sm^="' + smValue + '"]').attr('cell-sm').match(/[-][s][p]/i);
        if (eleSp == '-sp') {
            var spActive = $(this).attr('cell-sm').match(/[-][s][p](\d{1,})/i);
            jQuery(function () {
                jQuery($('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]').find('#sp-text-' + spActive[1] + '')).click();
            });
        }
        var eleMa = $('[cell-sm^="' + smValue + '"]').attr('cell-sm').match(/[-][m][a]/i);
        if (eleMa == '-ma') {
            var maActive = $(this).attr('cell-sm').match(/[-][m][a](\d{1,})/i);
            jQuery(function () {
                jQuery($('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]').find('#ma-text-' + maActive[1] + '')).click();
            });
        }
        var eleMi = $('[cell-sm^="' + smValue + '"]').attr('cell-sm').match(/[-][m][i]/i);
        if (eleMi == '-mi') {
            var miActive = $(this).attr('cell-sm').match(/[-][m][i](\d{1,})/i);
            jQuery(function () {
                jQuery($('[cell-sm^="' + smValue + '"] > [cell-sm*="[-si]"]').find('#mi-text-' + miActive[1] + '')).click();
            });
        }
    });
});
//For Page Actions
$(document).ready(function () {
    $('[cell-pa^="[-pa"]').each(function () {
        var pa = $(this).attr('cell-pa').match(/[-][p][a](\d{1,})/i);
        var paValue = '[-pa' + pa[1] + ':';
        var eleCd = $(this).attr('cell-pa').match(/[.][c][d]/i);
        var eleTo = $(this).attr('cell-pa').match(/[-][t][o]/i);
        var eleSh = $(this).attr('cell-pa').match(/[-][s][h]/i);
        var eleIh = $(this).attr('cell-pa').match(/[-][i][h]/i);
        $('[cell-pa^="' + paValue + '"]').find('[cell-pa^="[-ec' + pa[1] + '"][cell-pa$="]"]').click(function () {

            var attr = $(this).attr('cell-pa').match(/[e][c](\d{1,})[^\w\*](\d{1,})/i);
            var ec1 = '[-ec' + pa[1] + '(' + attr[2] + ')]';
            var ea1 = '[-ea' + pa[1] + '(' + attr[2] + ')]';

            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + ec1 + '"]').toggleClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa*="' + ec1 + '"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa="' + ea1 + '"]').slideToggle();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa="' + ea1 + '"])').slideUp();

                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-su-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
            }

            if (eleSh == '-sh') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + ec1 + '"]').addClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa*="' + ec1 + '"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa="' + ea1 + '"]').show();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa="' + ea1 + '"])').hide();

                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-su-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
            }
            if (eleIh == '-ih') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + ec1 + '"]').toggleClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa="' + ea1 + '"]').slideToggle();
            }
            if (eleTo == '-to' || eleSh == '-sh' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-su-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
            }
        })
        if (eleCd == '.cd') {
            $('[cell-pa^="' + paValue + '"]').find('[cell-pa^="[-ec' + pa[1] + '"][cell-pa$="]"]').mouseenter(function () {
                var attr = $(this).attr('cell-pa').match(/[e][c](\d{1,})[^\w\*](\d{1,})/i);
                var ec1 = '[-ec' + pa[1] + '(' + attr[2] + ')]';
                var ea1 = '[-ea' + pa[1] + '(' + attr[2] + ')]';

                if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + ec1 + '"]').toggleClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa*="' + ec1 + '"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa="' + ea1 + '"]').slideToggle();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa="' + ea1 + '"])').slideUp();

                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-su-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                }

                if (eleSh == '-sh') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + ec1 + '"]').addClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa*="' + ec1 + '"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa="' + ea1 + '"]').show();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa="' + ea1 + '"])').hide();

                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-su-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                }
                if (eleIh == '-ih') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + ec1 + '"]').toggleClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa="' + ea1 + '"]').slideToggle();
                }
                if (eleTo == '-to' || eleSh == '-sh' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-su-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                }
            })
        }
        $('[cell-pa^="' + paValue + '"]').find(' [cell-pa^="[-su-ec' + pa[1] + '"][cell-pa$="]"]').click(function () {
            var suAttr = $(this).attr('cell-pa').match(/[s][u][-][e][c](\d{1,})[^\w\*](\d{1,})/i);
            var suEc1 = '[-su-ec' + pa[1] + '(' + suAttr[2] + ')]';
            var suEa1 = '[-su-ea' + pa[1] + '(' + suAttr[2] + ')]';
            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + suEc1 + '"]').toggleClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-su-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + suEc1 + '"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + suEa1 + '"]').slideToggle();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-su-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + suEa1 + '"])').slideUp();

                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
            }
            if (eleSh == '-sh') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + suEc1 + '"]').addClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-su-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + suEc1 + '"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + suEa1 + '"]').show();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-su-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + suEa1 + '"])').hide();

                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
            }
            if (eleIh == '-ih') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + suEc1 + '"]').toggleClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + suEa1 + '"]').slideToggle();
            }
            if (eleTo == '-to' || eleSh == '-sh' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
            }
        });
        if (eleCd == '.cd') {
            $('[cell-pa^="' + paValue + '"]').find('[cell-pa^="[-su-ec' + pa[1] + '"][cell-pa$="]"]').first().mouseenter(function () {
                var suAttr = $(this).attr('cell-pa').match(/[s][u][-][e][c](\d{1,})[^\w\*](\d{1,})/i);
                var suEc1 = '[-su-ec' + pa[1] + '(' + suAttr[2] + ')]';
                var suEa1 = '[-su-ea' + pa[1] + '(' + suAttr[2] + ')]';

                if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + suEc1 + '"]').toggleClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-su-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + suEc1 + '"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + suEa1 + '"]').slideToggle();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-su-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + suEa1 + '"])').slideUp();

                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                }
                if (eleSh == '-sh') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + suEc1 + '"]').addClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-su-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + suEc1 + '"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + suEa1 + '"]').show();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-su-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + suEa1 + '"])').hide();

                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                }
                if (eleIh == '-ih') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + suEc1 + '"]').toggleClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + suEa1 + '"]').slideToggle();
                }
                if (eleTo == '-to' || eleSh == '-sh' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                }
            });
        }
        $('[cell-pa^="' + paValue + '"]').find(' [cell-pa^="[-sp-ec' + pa[1] + '"][cell-pa$="]"]').click(function () {
            var spAttr = $(this).attr('cell-pa').match(/[s][p][-][e][c](\d{1,})[^\w\*](\d{1,})/i);
            var spEc1 = '[-sp-ec' + pa[1] + '(' + spAttr[2] + ')]';
            var spEa1 = '[-sp-ea' + pa[1] + '(' + spAttr[2] + ')]';

            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + spEc1 + '"]').toggleClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + spEc1 + '"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + spEa1 + '"]').slideToggle();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + spEa1 + '"])').slideUp();

                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
            }
            if (eleSh == '-sh') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + spEc1 + '"]').addClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + spEc1 + '"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + spEa1 + '"]').show();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + spEa1 + '"])').hide();

                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
            }
            if (eleIh == '-ih') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + spEc1 + '"]').toggleClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + spEa1 + '"]').slideToggle();
            }
            if (eleTo == '-to' || eleSh == '-sh' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
            }
        });
        if (eleCd == '.cd') {
            $('[cell-pa^="' + paValue + '"]').find(' [cell-pa^="[-sp-ec' + pa[1] + '"][cell-pa$="]"]').mouseenter(function () {
                var spAttr = $(this).attr('cell-pa').match(/[s][p][-][e][c](\d{1,})[^\w\*](\d{1,})/i);
                var spEc1 = '[-sp-ec' + pa[1] + '(' + spAttr[2] + ')]';
                var spEa1 = '[-sp-ea' + pa[1] + '(' + spAttr[2] + ')]';

                if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + spEc1 + '"]').toggleClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + spEc1 + '"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + spEa1 + '"]').slideToggle();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + spEa1 + '"])').slideUp();

                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                }
                if (eleSh == '-sh') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + spEc1 + '"]').addClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + spEc1 + '"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + spEa1 + '"]').show();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-sp-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + spEa1 + '"])').hide();

                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                }
                if (eleIh == '-ih') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + spEc1 + '"]').toggleClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + spEa1 + '"]').slideToggle();
                }
                if (eleTo == '-to' || eleSh == '-sh' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                }
            });
        }
        $('[cell-pa^="' + paValue + '"]').find('[cell-pa^="[-ma-ec' + pa[1] + '"][cell-pa$="]"]').click(function () {
            var maAttr = $(this).attr('cell-pa').match(/[m][a][-][e][c](\d{1,})[^\w\*](\d{1,})/i);
            var maEc1 = '[-ma-ec' + pa[1] + '(' + maAttr[2] + ')]';
            var maEa1 = '[-ma-ea' + pa[1] + '(' + maAttr[2] + ')]';

            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + maEc1 + '"]').toggleClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + maEc1 + '"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + maEa1 + '"]').slideToggle();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + maEa1 + '"])').slideUp();

                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
            }
            if (eleSh == '-sh') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + maEc1 + '"]').addClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + maEc1 + '"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + maEa1 + '"]').show();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + maEa1 + '"])').hide();

                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
            }
            if (eleIh == '-ih') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + maEc1 + '"]').toggleClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + maEa1 + '"]').slideToggle();
            }
            if (eleTo == '-to' || eleSh == '-sh' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
            }
        });
        if (eleCd == '.cd') {
            $('[cell-pa^="' + paValue + '"]').find(' [cell-pa^="[-ma-ec' + pa[1] + '"][cell-pa$="]"]').first().mouseenter(function () {
                var maAttr = $(this).attr('cell-pa').match(/[m][a][-][e][c](\d{1,})[^\w\*](\d{1,})/i);
                var maEc1 = '[-ma-ec' + pa[1] + '(' + maAttr[2] + ')]';
                var maEa1 = '[-ma-ea' + pa[1] + '(' + maAttr[2] + ')]';

                if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + maEc1 + '"]').toggleClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + maEc1 + '"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + maEa1 + '"]').slideToggle();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + maEa1 + '"])').slideUp();

                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').slideUp();
                }
                if (eleSh == '-sh') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + maEc1 + '"]').addClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + maEc1 + '"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + maEa1 + '"]').show();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-ma-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + maEa1 + '"])').hide();

                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x "])').hide();
                }
                if (eleIh == '-ih') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + maEc1 + '"]').toggleClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + maEa1 + '"]').slideToggle();
                }
                if (eleTo == '-to' || eleSh == '-sh' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="-x"])').removeClass("active");
                }
            });
        }
        $('[cell-pa^="' + paValue + '"]').find('[cell-pa^="[-mi-ec' + pa[1] + '"][cell-pa$="]"]').click(function () {
            var miAttr = $(this).attr('cell-pa').match(/[m][i][-][e][c](\d{1,})[^\w\*](\d{1,})/i);
            var miEc1 = '[-mi-ec' + pa[1] + '(' + miAttr[2] + ')]';
            var miEa1 = '[-mi-ea' + pa[1] + '(' + miAttr[2] + ')]';

            if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + miEc1 + '"]').toggleClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + miEc1 + '"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + miEa1 + '"]').slideToggle();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + miEa1 + '"])').slideUp();
            }
            if (eleSh == '-sh') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + miEc1 + '"]').addClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + miEc1 + '"])').removeClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + miEa1 + '"]').show();
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + miEa1 + '"])').show();
            }
            if (eleIh == '-ih') {
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + miEc1 + '"]').toggleClass("active");
                $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + miEa1 + '"]').slideToggle();
            }
        });
        if (eleCd == '.cd') {
            $('[cell-pa^="' + paValue + '"]').find(' [cell-pa^="[-mi-ec' + pa[1] + '"][cell-pa$="]"]').mouseenter(function () {
                var miAttr = $(this).attr('cell-pa').match(/[m][i][-][e][c](\d{1,})[^\w\*](\d{1,})/i);
                var miEc1 = '[-mi-ec' + pa[1] + '(' + miAttr[2] + ')]';
                var miEa1 = '[-mi-ea' + pa[1] + '(' + miAttr[2] + ')]';
                if (eleTo == '-to' || eleTo != '-to' && eleSh != '-sh' && eleIh != '-ih') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + miEc1 + '"]').toggleClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + miEc1 + '"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + miEa1 + '"]').slideToggle();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + miEa1 + '"])').slideUp();
                }
                if (eleSh == '-sh') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + miEc1 + '"]').addClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ec' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + miEc1 + '"])').removeClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + miEa1 + '"]').show();
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="[-mi-ea' + pa[1] + '"][cell-pa$="]"]:not([cell-pa^="["][cell-pa$="]"][cell-pa*="' + miEa1 + '"])').show();
                }
                if (eleIh == '-ih') {
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa*="' + miEc1 + '"]').toggleClass("active");
                    $(this).closest('[cell-pa^="[-pa"]').find('[cell-pa^="["][cell-pa$="]"][cell-pa*="' + miEa1 + '"]').slideToggle();
                }
            });
        }
        //For Page Actions in  Active State
        var eleEc = $(this).attr('cell-pa').match(/[-][a]/i);
        if (eleEc == '-a') {
            var ecActive = $(this).attr('cell-pa').match(/[-][a](\d{1,})/i);
            var pa = $(this).attr('cell-pa').match(/[-][p][a](\d{1,})/i);
            var paValue = '[-pa' + pa[1] + '';
            var ecValue = '[-ec' + pa[1] + '(' + ecActive[1] + ')]';
            jQuery(function () {
                jQuery($('[cell-pa^="' + paValue + '"]').find('[cell-pa="' + ecValue + '"]')).click();
            });
        }
        var eleSuEc = $(this).attr('cell-pa').match(/[-][s][u]/i);
        if (eleSuEc == '-su') {
            var suActive = $(this).attr('cell-pa').match(/su(\d{1,})/i);
            var pa = $(this).attr('cell-pa').match(/[-][p][a](\d{1,})/i);
            var paValue = '[-pa' + pa[1] + '';
            var suEcValue = '[-su-ec' + pa[1] + '(' + suActive[1] + ')]';
            jQuery(function () {
                jQuery($('[cell-pa^="' + paValue + '"]').find('[cell-pa="' + suEcValue + '"]')).click();
            });
        }
        var eleSpEc = $(this).attr('cell-pa').match(/[-][s][p]/i);
        if (eleSpEc == '-sp') {
            var spActive = $(this).attr('cell-pa').match(/sp(\d{1,})/i);
            var pa = $(this).attr('cell-pa').match(/[-][p][a](\d{1,})/i);
            var paValue = '[-pa' + pa[1] + '';
            var spEcValue = '[-sp-ec' + pa[1] + '(' + spActive[1] + ')]';
            jQuery(function () {
                jQuery($('[cell-pa^="' + paValue + '"]').find('[cell-pa="' + spEcValue + '"]')).click();
            });
        }
        var eleMaEc = $(this).attr('cell-pa').match(/[-][m][a]/i);
        if (eleMaEc == '-ma') {
            var maActive = $(this).attr('cell-pa').match(/ma(\d{1,})/i);
            var pa = $(this).attr('cell-pa').match(/[-][p][a](\d{1,})/i);
            var paValue = '[-pa' + pa[1] + '';
            var maEcValue = '[-ma-ec' + pa[1] + '(' + maActive[1] + ')]';
            jQuery(function () {
                jQuery($('[cell-pa^="' + paValue + '"]').find('[cell-pa="' + maEcValue + '"]')).click();
            });
        }
        var eleMiEc = $(this).attr('cell-pa').match(/[-][m][i]/i);
        if (eleMiEc == '-mi') {
            var miActive = $(this).attr('cell-pa').match(/mi(\d{1,})/i);
            var pa = $(this).attr('cell-pa').match(/[-][p][a](\d{1,})/i);
            var paValue = '[-pa' + pa[1] + '';
            var miEcValue = '[-mi-ec' + pa[1] + '(' + miActive[1] + ')]';
            jQuery(function () {
                jQuery($('[cell-pa^="' + paValue + '"]').find('[cell-pa="' + miEcValue + '"]')).click();
            });
        }
    });
});
// For Accordion
$(document).ready(function () {
    $('[cell-a^="[-ac"]').each(function () {
        var ac = $(this).attr('cell-a').match(/[-][a][c](\d{1,})/i);
        var acValue = '[-ac' + ac[1] + ':';
        $('[cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > [cell-a="[-l]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "ac-text-" + index);
        })
        $('[cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > [cell-a="[-c]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "ac-content-" + index);
        })

        $('[cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > [cell-a="[-l]"]').click(function () {
            var getId = this.id;
            var output = getId.substring(8);
            $('[cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > #' + getId + '').toggleClass("active");
            $('[cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > [cell-a="[-l]"]:not([cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > #' + getId + ')').removeClass("active");
            $('[cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > #ac-content-' + output + '').slideToggle();
            $('[cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > [cell-a="[-c]"]:not([cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > #ac-content-' + output + ')').slideUp();
        });
        $('[cell-a^="' + acValue + '"][cell-a$="]"][cell-a*="-.cd"] > [cell-a="[-aa]"] > [cell-a*="[-l]"]').mouseenter(function () {
            var getId = this.id;
            var output = getId.substring(8);
            $('[cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > #' + getId + '').toggleClass("active");
            $('[cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > [cell-a="[-l]"]:not([cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > #' + getId + ')').removeClass("active");
            $('[cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > #ac-content-' + output + '').slideToggle();
            $('[cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > [cell-a="[-c]"]:not([cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > #ac-content-' + output + ')').slideUp();
        });

        var eleAc = $('[cell-a^="' + acValue + '"]').attr('cell-a').match(/[-][a](\d{1,})/i);
        var acActive = $('[cell-a^="' + acValue + '"]').attr('cell-a').match(/[-][a](\d{1,})/i);
        if (eleAc = acActive) {
            var acActive = $('[cell-a^="' + acValue + '"]').attr('cell-a').match(/[-][a](\d{1,})/i);
            jQuery(function () {
                jQuery($('[cell-a^="' + acValue + '"] > [cell-a="[-aa]"] > #ac-text-' + acActive[1] + '')).click();
            });
        }
    })
})
// For Drop Down
$(document).ready(function () {
    $('[cell-dw^="[-dw"]').each(function () {
        var dw = $(this).attr('cell-dw').match(/[-][d][w](\d{1,})/i);
        var dwValue = '[-dw' + dw[1] + ':'
        $('[cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > [cell-dw="[-l]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "dw-text-" + index);
        })
        $('[cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > [cell-dw="[-c]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "dw-content-" + index);
        })

        $('[cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > [cell-dw="[-l]"]').click(function () {
            var getId = this.id;
            var output = getId.substring(8);
            $('[cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > #' + getId + '').toggleClass("active");
            $('[cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > [cell-dw="[-l]"]:not([cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > #' + getId + ')').removeClass("active");
            $('[cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > #dw-content-' + output + '').toggle();
            $('[cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > [cell-dw="[-c]"]:not([cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > #dw-content-' + output + ')').hide();
        });
        $('[cell-dw^="' + dwValue + '"][cell-dw$="]"][cell-dw*="-.cd"] > [cell-dw="[-da]"] > [cell-dw="[-l]"]').mouseenter(function () {
            var getId = this.id;
            var output = getId.substring(8);
            $('[cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > #' + getId + '').toggleClass("active");
            $('[cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > [cell-dw="[-l]"]:not([cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > #' + getId + ')').removeClass("active");
            $('[cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > #dw-content-' + output + '').toggle();
            $('[cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > [cell-dw="[-c]"]:not([cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > #dw-content-' + output + ')').hide();
        });

        var eleDw = $('[cell-dw^="' + dwValue + '"]').attr('cell-dw').match(/[-][a](\d{1,})/i);
        var dwActive = $('[cell-dw^="' + dwValue + '"]').attr('cell-dw').match(/[-][a](\d{1,})/i);
        if (eleDw = dwActive) {
            var dwActive = $('[cell-dw^="' + dwValue + '"]').attr('cell-dw').match(/[-][a](\d{1,})/i);
            jQuery(function () {
                jQuery($('[cell-dw^="' + dwValue + '"] > [cell-dw="[-da]"] > #dw-text-' + dwActive[1] + '')).click();
            });
        }
    })
})
//For Append
$(document).ready(function () {
    $(window).resize(function () {
        $('[cell-ap^="[-ap"]').each(function () {
            var ap = $(this).attr('cell-ap').match(/[-][a][p](\d{1,})/i);
            var apValue = '[-ap' + ap[1] + ':'

            var receive = $(this).attr('cell-ap').match(/[r][e](\d{1,})*/i);
            var receiveDesk = $(this).attr('cell-ap').match(/[d][r](\d{1,})*/i);
            var receiveLarge = $(this).attr('cell-ap').match(/[l][r](\d{1,})*/i);
            var receiveTab = $(this).attr('cell-ap').match(/[t][r](\d{1,})*/i);
            var receiveMobile = $(this).attr('cell-ap').match(/[m][r](\d{1,})*/i);
            var receiveSmall = $(this).attr('cell-ap').match(/[s][r](\d{1,})*/i);

            var ele = $(this).attr('cell-ap').match(/[r][e]/i);
            var eleD = $(this).attr('cell-ap').match(/[d][r]/i);
            var eleL = $(this).attr('cell-ap').match(/[l][r]/i);
            var eleT = $(this).attr('cell-ap').match(/[t][r]/i);
            var eleM = $(this).attr('cell-ap').match(/[m][r]/i);
            var eleS = $(this).attr('cell-ap').match(/[s][r]/i);

            if (ele == 're') {
                $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-se' + receive[1] + ':"]').appendTo('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-re' + receive[1] + ':"]')
            }
            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dr') {
                    $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-ds' + receiveDesk[1] + ':"]').appendTo('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-dr' + receiveDesk[1] + ':"]')
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dr') {
                    $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-ds' + receiveDesk[1] + ':"]').appendTo('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-dr' + receiveDesk[1] + ':"]')
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lr') {
                    $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-ls' + receiveLarge[1] + ':"]').appendTo('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-lr' + receiveLarge[1] + ':"]')
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tr') {
                    $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-ts' + receiveTab[1] + ':"]').appendTo('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-tr' + receiveTab[1] + ':"]')
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mr') {
                    $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-ms' + receiveMobile[1] + ':"]').appendTo('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-mr' + receiveMobile[1] + ':"]')
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sr') {
                    $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-ss' + receiveSmall[1] + ':"]').appendTo('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-sr' + receiveSmall[1] + ':"]')
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sr') {
                    $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-ss' + receiveSmall[1] + ':"]').appendTo('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-sr' + receiveSmall[1] + ':"]')
                }
            }
        })
        $('[cell-ap^="[-ap"]').each(function () {
            var ap = $(this).attr('cell-ap').match(/[-][a][p](\d{1,})/i);
            var apValue = '[-ap' + ap[1] + ':'

            var after = $(this).attr('cell-ap').match(/[a][f](\d{1,})*/i);
            var afterDesk = $(this).attr('cell-ap').match(/[d][a](\d{1,})*/i);
            var afterLarge = $(this).attr('cell-ap').match(/[l][a](\d{1,})*/i);
            var afterTab = $(this).attr('cell-ap').match(/[t][a](\d{1,})*/i);
            var afterMobile = $(this).attr('cell-ap').match(/[m][a](\d{1,})*/i);
            var afterSmall = $(this).attr('cell-ap').match(/[s][a](\d{1,})*/i);

            var ele = $(this).attr('cell-ap').match(/[a][f]/i);
            var eleD = $(this).attr('cell-ap').match(/[d][a]/i);
            var eleL = $(this).attr('cell-ap').match(/[l][a]/i);
            var eleT = $(this).attr('cell-ap').match(/[t][a]/i);
            var eleM = $(this).attr('cell-ap').match(/[m][a]/i);
            var eleS = $(this).attr('cell-ap').match(/[s][a]/i);
            if (ele == 'af') {
                $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-th' + after[1] + ':"]').insertAfter('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-af' + after[1] + ':"]')
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'da') {
                    $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-dh' + afterDesk[1] + ':"]').insertAfter('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-da' + afterDesk[1] + ':"]')
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'da') {
                    $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-dh' + afterDesk[1] + ':"]').insertAfter('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-da' + afterDesk[1] + ':"]')
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'la') {
                    $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-lh' + afterLarge[1] + ':"]').insertAfter('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-la' + afterLarge[1] + ':"]')
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'ta') {
                    $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-th' + afterTab[1] + ':"]').insertAfter('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-ta' + afterTab[1] + ':"]')
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ma') {
                    $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-mh' + afterMobile[1] + ':"]').insertAfter('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-ma' + afterMobile[1] + ':"]')
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sa') {
                    $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-sh' + afterSmall[1] + ':"]').insertAfter('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-sa' + afterSmall[1] + ':"]')
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sa') {
                    $('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-sh' + afterSmall[1] + ':"]').insertAfter('[cell-ap^="' + apValue + '"][cell-ap$="]"][cell-ap*="-sa' + afterSmall[1] + ':"]')
                }
            }
        })
    })
        .resize();
});
//For Horizontal Tab
$(document).ready(function () {
    $('[cell-tb^="[-hz"] > [cell-tb="[-ta]"] > [cell-tb="[-l]"]').each(function () {
        var hz = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[-][h][z](\d{1,})/i);
        var radius = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[r][^,]*?(\d{1,})*/i);
        var width = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[w][^,]*?(\d{1,})*/i);
        var height = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[h][^,]*?(\d{1,})*/i);
        var borderLeft = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[b][l](\d{1,})[^\w\*](\d{1,})/i);
        var borderRight = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[b][r](\d{1,})[^\w\*](\d{1,})/i);
        var borderTop = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[b][t](\d{1,})[^\w\*](\d{1,})/i);
        var borderBottom = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[b][b](\d{1,})[^\w\*](\d{1,})/i);
        var borderLeftHover = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[.][b][l](\d{1,})[^\w\*](\d{1,})/i);
        var borderRightHover = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[.][b][r](\d{1,})[^\w\*](\d{1,})/i);
        var borderTopHover = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[.][b][t](\d{1,})[^\w\*](\d{1,})/i);
        var borderBottomHover = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[.][b][b](\d{1,})[^\w\*](\d{1,})/i);
        var border = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[b][o](\d{1,})[^\w\*](\d{1,})/i);
        var borderHover = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[.][b][o](\d{1,})[^\w\*](\d{1,})/i);
        var backGround = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[-][b][g][^,]*?(\d{1,})*/i);
        var backGroundHover = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[.][b][g][^,]*?(\d{1,})*/i);
        var text = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
        var textHover = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[.][t][s](\d{1,})[^\w\*](\d{1,})/i);
        var padding = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[p](\d{1,})/i);
        var paddingVertical = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[p][v](\d{1,})[^\w\*](\d{1,})/i);
        var paddingHorizontal = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[p][h](\d{1,})[^\w\*](\d{1,})/i);

        var eleR = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[r]/i);
        var eleW = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[w]/i);
        var eleH = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[h]/i);
        var eleB = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[b][o]/i);
        var eleBl = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[b][l]/i);
        var eleBr = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[b][r]/i);
        var eleBt = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[b][t]/i);
        var eleBb = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[b][b]/i);
        var eleBlHo = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[.][b][l]/i);
        var eleBrHo = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[.][b][r]/i);
        var eleBtHo = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[.][b][t]/i);
        var eleBbHo = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[.][b][b]/i);
        var eleBHo = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[.][b][o]/i);
        var eleBg = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[b][g]/i);
        var eleBgHo = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[.][b][g]/i);
        var eleTx = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[t][s]/i);
        var eleTxHo = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[.][t][s]/i);
        var eleP = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[p]/i);
        var elePv = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[p][v]/i);
        var elePh = $(this).closest('[cell-tb^="[-hz"]').attr('cell-tb').match(/[p][h]/i);

        if (eleR == 'r') {
            $(this).css('border-radius', '' + radius[1] + 'px');
        }
        if (eleW == 'w') {
            $(this).css('width', '' + width[1] + '%');
        }
        if (eleH == 'h') {
            $(this).css('height', '' + height[1] + 'px');
        }
        if (eleBg == 'bg') {
            var backGroundNum = backGround[1] - 1;
            $(this).css('background-color', '' + colors[backGroundNum] + '');

        }
        if (eleBgHo == '.bg') {
            $(this).mouseenter(function () {
                var backGroundHoverNum = backGroundHover[1] - 1;
                $(this).css('background-color', '' + colors[backGroundHoverNum] + '');
            })
            $(this).mouseleave(function () {
                var backGroundNum = backGround[1] - 1;
                $(this).css('background-color', '' + colors[backGroundNum] + '');
            })
        }

        if (elePv == 'pv') {
            $(this).css({ 'padding-top': '' + paddingVertical[1] + 'px', 'padding-bottom': '' + paddingVertical[1] + 'px' });
        }
        if (elePh == 'ph') {
            $(this).css({ 'padding-left': '' + paddingHorizontal[1] + 'px', 'padding-right': '' + paddingHorizontal[1] + 'px' });
        }
        if (eleP = padding) {
            $(this).css({ 'padding': '' + padding[1] + 'px' });
        }
        if (eleB == 'bo') {
            var borderNum = border[2] - 1;
            $(this).css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
        }
        if (eleBHo == '.bo') {
            $(this).mouseenter(function () {
                var borderHoverNum = borderHover[2] - 1;
                $(this).css('border', '' + border[1] + 'px solid ' + colors[borderHoverNum] + '');
            })
            $(this).mouseleave(function () {
                var borderNum = border[2] - 1;
                $(this).css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
            })
        }

        if (eleBl == 'bl') {
            var borderLeftNum = borderLeft[2] - 1;
            $(this).css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
            $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
        }
        if (eleBlHo == '.bl') {
            $(this).hover(function () {
                var borderLeftHoverNum = borderLeftHover[2] - 1;
                $(this).css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
                $(this).css('border-left', '' + borderLeftHover[1] + 'px solid ' + colors[borderLeftHoverNum] + '');
            })
            $(this).mouseleave(function () {
                var borderLeftNum = borderLeft[2] - 1;
                $(this).css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
                $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
            })
        }

        if (eleBr == 'br') {
            var borderRightNum = borderRight[2] - 1;
            $(this).css({ 'botder-top': '0', 'botder-bottom': '0', 'botder-left': '0' })
            $(this).css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
        }
        if (eleBrHo == '.br') {
            $(this).hover(function () {
                var borderRightHoverNum = borderRightHover[2] - 1;
                $(this).css({ 'botder-top': '0', 'botder-bottom': '0', 'botder-left': '0' })
                $(this).css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
            })
        }

        if (eleBt == 'bt') {
            var borderTopNum = borderTop[2] - 1;
            $(this).css({ 'botder-bottom': '0', 'botder-right': '0', 'botder-left': '0' })
            $(this).css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
        }
        if (eleBtHo == '.bt') {
            $(this).hover(function () {
                var borderTopHoverNum = borderTopHover[2] - 1;
                $(this).css({ 'botder-bottom': '0', 'botder-right': '0', 'botder-left': '0' })
                $(this).css('border-top', '' + borderTopHover[1] + 'px solid ' + colors[borderTopHoverNum] + '');
            })
        }

        if (eleBb == 'bb') {
            var borderBottomNum = borderBottom[2] - 1;
            $(this).css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
            $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
        }
        if (eleBbHo == '.bb') {
            $(this).hover(function () {
                var borderBottomHoverNum = borderBottomHover[2] - 1;
                $(this).css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
                $(this).css('border-bottom', '' + borderBottomHover[1] + 'px solid ' + colors[borderBottomHoverNum] + '');
            })
            $(this).mouseleave(function () {
                var borderBottomNum = borderBottom[2] - 1;
                $(this).css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
                $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
            })
        }

        if (eleTx == 'ts') {
            var textNum = text[2] - 1;
            $(this).css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
        }
        if (eleTxHo == '.ts') {
            $(this).hover(function () {
                var textHoverNum = textHover[2] - 1;
                $(this).css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textHoverNum] + '' });
            })
            $(this).mouseleave(function () {
                var textNum = text[2] - 1;
                $(this).css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
            })
        }

    })
    // For Horizontal Tab
    $('[cell-tb^="[-hz"]').each(function () {
        var hz = $(this).attr('cell-tb').match(/[-][h][z](\d{1,})/i);
        var hzValue = '[-hz' + hz[1] + ':';
        $('[cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > [cell-tb="[-l]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "hz-list-" + index);
        })
        $('[cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > [cell-tb="[-c]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "hz-content-" + index);
        })
        $('[cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > [cell-tb="[-l]"]').click(function () {
            var getId = this.id;
            var output = getId.substring(8);
            $('[cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > #' + getId + '').toggleClass("active");
            $('[cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > [cell-tb*="[-l]"]:not([cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > #' + getId + ')').removeClass("active");
            $('[cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > #hz-content-' + output + '').toggle();
            $('[cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > [cell-tb*="[-c]"]:not([cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > #hz-content-' + output + ')').hide();
        });
        $('[cell-tb^="' + hzValue + '"][cell-tb$="]"][cell-tb*="-.cd"]  > [cell-tb="[-ta]"] > [cell-tb*="[-l]"]').mouseenter(function () {
            var getId = this.id;
            var output = getId.substring(8);
            jQuery(function () {
                $('[cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > .active').click();
            });
            $('[cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > #' + getId + '').toggleClass("active");
            $('[cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > [cell-tb*="[-l]"]:not([cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > #' + getId + ')').removeClass("active");
            $('[cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > #hz-content-' + output + '').toggle();
            $('[cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > [cell-tb*="[-c]"]:not([cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > #hz-content-' + output + ')').hide();
        });

        var eleHz = $('[cell-tb^="' + hzValue + '"]').attr('cell-tb').match(/[-][a]/i);
        console.log(eleHz)
        if (eleHz == '-a') {
            var active = $('[cell-tb^="' + hzValue + '"]').attr('cell-tb').match(/a(\d{1,})/i);
            jQuery(function () {
                jQuery('[cell-tb^="' + hzValue + '"]  > [cell-tb="[-ta]"] > #hz-list-' + active[1] + '').click();
            });
        }
    })
});
//For Vertical Tab
$(document).ready(function () {
    $('[cell-tb^="[-vr"]  > [cell-tb="[-ta]"] > [cell-sl="[-lo]"] > [cell-tb="[-l]"]').each(function () {
        var vr = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[-][v][r](\d{1,})/i);
        var vrValue = '[-vr' + vr[1] + '-';
        var radius = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[r][^,]*?(\d{1,})*/i);
        var width = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[w][^,]*?(\d{1,})*/i);
        var height = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[h][^,]*?(\d{1,})*/i);
        var borderLeft = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[b][l](\d{1,})[^\w\*](\d{1,})/i);
        var borderRight = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[b][r](\d{1,})[^\w\*](\d{1,})/i);
        var borderTop = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[b][t](\d{1,})[^\w\*](\d{1,})/i);
        var borderBottom = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[b][b](\d{1,})[^\w\*](\d{1,})/i);
        var borderLeftHover = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[.][b][l](\d{1,})[^\w\*](\d{1,})/i);
        var borderRightHover = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[.][b][r](\d{1,})[^\w\*](\d{1,})/i);
        var borderTopHover = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[.][b][t](\d{1,})[^\w\*](\d{1,})/i);
        var borderBottomHover = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[.][b][b](\d{1,})[^\w\*](\d{1,})/i);
        var border = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[b][o](\d{1,})[^\w\*](\d{1,})/i);
        var borderHover = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[.][b][o](\d{1,})[^\w\*](\d{1,})/i);
        var backGround = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[-][b][g][^,]*?(\d{1,})*/i);
        var backGroundHover = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[.][b][g][^,]*?(\d{1,})*/i);
        var text = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
        var textHover = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[.][t][s](\d{1,})[^\w\*](\d{1,})/i);
        var padding = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[p](\d{1,})/i);
        var paddingVertical = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[p][v](\d{1,})[^\w\*](\d{1,})/i);
        var paddingHorizontal = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[p][h](\d{1,})[^\w\*](\d{1,})/i);

        var eleR = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[r]/i);
        var eleW = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[w]/i);
        var eleH = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[h]/i);
        var eleB = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[b][o]/i);
        var eleBl = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[b][l]/i);
        var eleBr = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[b][r]/i);
        var eleBt = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[b][t]/i);
        var eleBb = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[b][b]/i);
        var eleBlHo = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[.][b][l]/i);
        var eleBrHo = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[.][b][r]/i);
        var eleBtHo = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[.][b][t]/i);
        var eleBbHo = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[.][b][b]/i);
        var eleBHo = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[.][b][o]/i);
        var eleBg = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[b][g]/i);
        var eleBgHo = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[.][b][g]/i);
        var eleTx = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[t][s]/i);
        var eleTxHo = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[.][t][s]/i);
        var eleP = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[p]/i);
        var elePv = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[p][v]/i);
        var elePh = $(this).closest('[cell-tb^="[-vr"]').attr('cell-tb').match(/[p][h]/i);

        if (eleR == 'r') {
            $(this).css('border-radius', '' + radius[1] + 'px');
        }
        if (eleW == 'w') {
            $(this).css('width', '' + width[1] + '%');
        }
        if (eleH == 'h') {
            $(this).css('height', '' + height[1] + 'px');
        }
        if (eleBg == 'bg') {
            var backGroundNum = backGround[1] - 1;
            $(this).css('background-color', '' + colors[backGroundNum] + '');
        }

        if (eleBgHo == '.bg') {
            $(this).mouseenter(function () {
                var backGroundHoverNum = backGroundHover[1] - 1;
                $(this).css('background-color', '' + colors[backGroundHoverNum] + '');
            })
            $(this).mouseleave(function () {
                var backGroundNum = backGround[1] - 1;
                $(this).css('background-color', '' + colors[backGroundNum] + '');
            })
        }
        if (elePv == 'pv') {
            $(this).css({ 'padding-top': '' + paddingVertical[1] + 'px', 'padding-bottom': '' + paddingVertical[1] + 'px' });
        }
        if (elePh == 'ph') {
            $(this).css({ 'padding-left': '' + paddingHorizontal[1] + 'px', 'padding-right': '' + paddingHorizontal[1] + 'px' });
        }
        if (eleP = padding) {
            $(this).css({ 'padding': '' + padding[1] + 'px' });
        }
        if (eleB == 'bo') {
            var borderNum = border[2] - 1;
            $(this).css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
        }
        if (eleBHo == '.bo') {
            $(this).mouseenter(function () {
                var borderHoverNum = borderHover[2] - 1;
                $(this).css('border', '' + border[1] + 'px solid ' + colors[borderHoverNum] + '');
            })
            $(this).mouseleave(function () {
                var borderNum = border[2] - 1;
                $(this).css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
            })
        }

        if (eleBl == 'bl') {
            var borderLeftNum = borderLeft[2] - 1;
            $(this).css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
            $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
        }
        if (eleBlHo == '.bl') {
            $(this).hover(function () {
                var borderLeftHoverNum = borderLeftHover[2] - 1;
                $(this).css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
                $(this).css('border-left', '' + borderLeftHover[1] + 'px solid ' + colors[borderLeftHoverNum] + '');
            })
            $(this).mouseleave(function () {
                var borderLeftNum = borderLeft[2] - 1;
                $(this).css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
                $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
            })
        }

        if (eleBr == 'br') {
            var borderRightNum = borderRight[2] - 1;
            $(this).css({ 'botder-top': '0', 'botder-bottom': '0', 'botder-left': '0' })
            $(this).css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
        }
        if (eleBrHo == '.br') {
            $(this).hover(function () {
                var borderRightHoverNum = borderRightHover[2] - 1;
                $(this).css({ 'botder-top': '0', 'botder-bottom': '0', 'botder-left': '0' })
                $(this).css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
            })
        }

        if (eleBt == 'bt') {
            var borderTopNum = borderTop[2] - 1;
            $(this).css({ 'botder-bottom': '0', 'botder-right': '0', 'botder-left': '0' })
            $(this).css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
        }
        if (eleBtHo == '.bt') {
            $(this).hover(function () {
                var borderTopHoverNum = borderTopHover[2] - 1;
                $(this).css({ 'botder-bottom': '0', 'botder-right': '0', 'botder-left': '0' })
                $(this).css('border-top', '' + borderTopHover[1] + 'px solid ' + colors[borderTopHoverNum] + '');
            })
        }

        if (eleBb == 'bb') {
            var borderBottomNum = borderBottom[2] - 1;
            $(this).css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
            $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
        }
        if (eleBbHo == '.bb') {
            $(this).hover(function () {
                var borderBottomHoverNum = borderBottomHover[2] - 1;
                $(this).css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
                $(this).css('border-bottom', '' + borderBottomHover[1] + 'px solid ' + colors[borderBottomHoverNum] + '');
            })
            $(this).mouseleave(function () {
                var borderBottomNum = borderBottom[2] - 1;
                $(this).css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
                $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
            })
        }

        if (eleTx == 'ts') {
            var textNum = text[2] - 1;
            $(this).css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
        }
        if (eleTxHo == '.ts') {
            $(this).hover(function () {
                var textHoverNum = textHover[2] - 1;
                $(this).css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textHoverNum] + '' });
            })
            $(this).mouseleave(function () {
                var textNum = text[2] - 1;
                $(this).css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
            })
        }

    })
    // For Vertical Tab
    $('[cell-tb^="[-vr"]').each(function () {
        var vr = $(this).attr('cell-tb').match(/[-][v][r](\d{1,})/i);
        var vrValue = '[-vr' + vr[1] + ':';
        $('[cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-lo]"] > [cell-tb="[-l]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "vr-list-" + index);
        })
        $('[cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-m]"] > [cell-tb="[-c]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "vr-content-" + index);
        })
        $('[cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-lo]"] > [cell-tb*="[-l]"]').click(function () {
            var getId = this.id;
            var output = getId.substring(8);
            $('[cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-lo]"] > #' + getId + '').toggleClass("active");
            $('[cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-lo]"] > [cell-tb="[-l]"]:not([cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-lo]"] > #' + getId + ')').removeClass("active");
            $('[cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-m]"] >  #vr-content-' + output + '').toggle();
            $('[cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-m]"] > [cell-tb="[-c]"]:not([cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-m]"] > #vr-content-' + output + ')').hide();
        });
        $('[cell-tb^="' + vrValue + '"][cell-tb$="]"][cell-tb*="-.cd"]  > [cell-tb="[-ta]"] > [cell-sl="[-lo]"] > [cell-tb="[-l]"]').mouseenter(function () {
            var getId = this.id;
            var output = getId.substring(8);
            jQuery(function () {
                $('[cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-lo]"] > .active').click();
            });
            $('[cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-lo]"] > #' + getId + '').toggleClass("active");
            $('[cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-lo]"] > [cell-tb="[-l]"]:not([cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-lo]"] > #' + getId + ')').removeClass("active");
            $('[cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-m]"] >  #vr-content-' + output + '').toggle();
            $('[cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-m]"] > [cell-tb="[-c]"]:not([cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-m]"] > #vr-content-' + output + ')').hide();
        });
        var eleVr = $('[cell-tb^="' + vrValue + '"]').attr('cell-tb').match(/[-][a]/i);
        if (eleVr == '-a') {
            var active = $('[cell-tb^="' + vrValue + '"]').attr('cell-tb').match(/a(\d{1,})/i);
            jQuery(function () {
                jQuery('[cell-tb^="' + vrValue + '"]  > [cell-tb="[-ta]"] > [cell-sl="[-lo]"] > #vr-list-' + active[1] + '').click();
            });
        }
    })
});
//For Roll Menu
$(document).ready(function () {
    $('[cell-rm^="[-rm"]').each(function () {
        var rm = $(this).attr('cell-rm').match(/[-][r][m](\d{1,})/i);
        var rmValue = '[-rm' + rm[1] + ':';
        $('[cell-rm^="' + rmValue + '"]').find('[cell-rm^="[-ra]"] [cell-rm^="[-rb]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "roll-block-" + index);
        })
        $('[cell-rm^="' + rmValue + '"]').find('[cell-rm^="[-ra]"] [cell-rm^="[-rc]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "roll-content-" + index);
        })
        $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-rb]"]').click(function () {
            var rollId = this.id;
            var rollOutput = rollId.substring(11);

            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] #' + rollId + '').toggleClass("active");
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-rb]"]:not([cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] #' + rollId + ')').removeClass("active");
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] #roll-content-' + rollOutput + '').toggle();
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-rc]"]:not([cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] #roll-content-' + rollOutput + ')').hide();

            var h1 = $('[cell-rm^="' + rmValue + '"]  [cell-rm^="[-ra]"] [cell-rm^="[-rc]"]').height() - 2;
            $('[cell-rm^="' + rmValue + '"]  [cell-rm^="[-ra]"] [cell-rm^="[-rc]"] [cell-rm^="[-vl]"]').css('height', h1 + 'px')
        });


        $('[cell-rm^="' + rmValue + '"]').find('[cell-rm^="[-ra]"] [cell-rm^="[-su-rb]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "inner-roll-block-" + index);
        })
        $('[cell-rm^="' + rmValue + '"]').find('[cell-rm^="[-ra]"] [cell-rm^="[-su-rc]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "inner-roll-content-" + index);
        })
        $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-su-rb]"]').click(function () {
            var innerId = this.id;
            var innerOutput = innerId.substring(17);
            $('[cell-rm^="' + rmValue + '"] #' + innerId + '').toggleClass("active");
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-su-rb]"]:not([cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] #' + innerId + ')').removeClass("active");
            $('[cell-rm^="' + rmValue + '"] #inner-roll-content-' + innerOutput + '').toggle();
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-su-rc]"]:not([cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] #inner-roll-content-' + innerOutput + ')').hide();

            var nearestId = $('[cell-rm^="' + rmValue + '"]  #' + innerId + '').closest('[cell-rm^="[-ra]"] [cell-rm^="[-rc]"]').prop('id');
            var numItems = $('[cell-rm^="' + rmValue + '"] #' + nearestId + ' [cell-rm^="[-su-rb]"]').length;
            if (innerOutput == numItems - 1) {
                var height = $('[cell-rm^="' + rmValue + '"] #inner-roll-content-' + innerOutput + '').height();
                var height1 = $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-rc]"]').height();
                var h = (+height1) - (+height) - 17;
                $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-rc]"] [cell-rm^="[-vl]"]').css('height', h + 'px');

                var rollContentH = $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-rc]"]').height() - 2;
                var verLineH = $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-rc]"] [cell-rm^="[-vl]"]').height();
                if (verLineH <= 0) {
                    $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-rc]"] [cell-rm^="[-vl]"]').css('height', rollContentH + 'px')
                }
            }
            else {
                var h1 = $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-rc]"]').height() - 2;
                $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-rc]"] [cell-rm^="[-vl]"]').css('height', h1 + 'px')
            }

            var innerH = $('[cell-rm^="' + rmValue + '"] #inner-roll-content-' + innerOutput + '').height() - 3;
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-su-rc]"] [cell-rm^="[-su-vl]"]').css('height', innerH + 'px')

        });


        $('[cell-rm^="' + rmValue + '"] ').find('[cell-rm^="[-ra]"] [cell-rm^="[-sp-rb]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "sub-roll-block-" + index);
        })
        $('[cell-rm^="' + rmValue + '"]').find('[cell-rm^="[-ra]"] [cell-rm^="[-sp-rc]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "sub-roll-content-" + index);
        })
        $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-sp-rb]"]').click(function () {
            var subId = this.id;
            var subOutput = subId.substring(15);
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] #' + subId + '').toggleClass("active");
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-sp-rb]"]:not([cell-rm^="' + rmValue + '"] #' + subId + ')').removeClass("active");
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] #sub-roll-content-' + subOutput + '').toggle();
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-sp-rc]"]:not([cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] #sub-roll-content-' + subOutput + ')').hide();

            var nearestId = $('[cell-rm^="' + rmValue + '"] #' + subId + '').closest('[cell-rm^="[-su-rc]"]').prop('id');
            var numItems = $('[cell-rm^="' + rmValue + '"] #' + nearestId + ' [cell-rm^="[-sp-rb]"]').length;
            if (subOutput == numItems - 1) {
                var parentHeight1 = $('[cell-rm^="' + rmValue + '"] #sub-roll-content-' + subOutput + '').closest('[cell-rm^="[-su-rc]"]').height();

                var height = $('[cell-rm^="' + rmValue + '"] #sub-roll-content-' + subOutput + '').height();

                var h = (+parentHeight1) - (+height) - 17;
                $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-su-rc]"] [cell-rm^="[-su-vl]"]').css('height', h + 'px')

                var rollContentH = $('[cell-rm^="' + rmValue + '"] #' + nearestId + '').height() - 2;
                var verLineH = $('[cell-rm^="' + rmValue + '"] #' + nearestId + ' [cell-rm^="[-su-vl]"]').height();
                if (verLineH <= 0) {
                    $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-su-rc]"] [cell-rm^="[-su-vl]"]').css('height', rollContentH + 'px')
                }
            }
            else {
                var parentHeight2 = $('[cell-rm^="' + rmValue + '"] #sub-roll-content-' + subOutput + '').closest('[cell-rm^="[-su-rc]"]').height() - 2;
                var closeId = $('[cell-rm^="' + rmValue + '"] #sub-roll-content-' + subOutput + '').closest('[cell-rm^="[-su-rc]"]').prop('id');
                $('[cell-rm^="' + rmValue + '"] #' + closeId + ' [cell-rm^="[-su-vl]"]').css('height', parentHeight2 + 'px')
            }

            var subH = $('[cell-rm^="' + rmValue + '"] #sub-roll-content-' + subOutput + '').height() - 3;
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-sp-rc]"] [cell-rm^="[-sp-vl]"]').css('height', subH + 'px')
        });


        $('[cell-rm^="' + rmValue + '"]').find('[cell-rm^="[-ra]"] [cell-rm^="[-ma-rb]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "sup-roll-block-" + index);
        })
        $('[cell-rm^="' + rmValue + '"]').find('[cell-rm^="[-ra]"] [cell-rm^="[-ma-rc]"]').each(function (index) {
            $(this).attr("");
            $(this).attr("id", "sup-roll-content-" + index);
        })
        $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-ma-rb]"]').click(function () {
            var supId = this.id;
            var supOutput = supId.substring(15);
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] #' + supId + '').toggleClass("active");
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-ma-rb]"]:not([cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] #' + supId + ')').removeClass("active");
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] #sup-roll-content-' + supOutput + '').toggle();
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] [cell-rm^="[-ma-rc]"]:not([cell-rm^="' + rmValue + '"] [cell-rm^="[-ra]"] #sup-roll-content-' + supOutput + ')').hide();


            var nearestId = $('[cell-rm^="' + rmValue + '"] #' + supId + '').closest('[cell-rm^="[-sp-rc]"]').prop('id');
            var numItems = $('[cell-rm^="' + rmValue + '"] #' + nearestId + ' [cell-rm^="[-ma-rb]"]').length;
            if (supOutput == numItems - 1) {
                var parentHeight1 = $('[cell-rm^="' + rmValue + '"] #sup-roll-content-' + supOutput + '').closest('[cell-rm^="[-sp-rc]"]').height();
                var height = $('[cell-rm^="' + rmValue + '"] #sup-roll-content-' + supOutput + '').height();

                var h = (+parentHeight1) - (+height) - 17;
                $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-sp-rc]"] [cell-rm^="[-sp-vl]"]').css('height', h + 'px')

                var rollContentH = $('[cell-rm^="' + rmValue + '"] #' + nearestId + '').height() - 2;
                var verLineH = $('[cell-rm^="' + rmValue + '"] #' + nearestId + ' [cell-rm^="[-sp-vl]"]').height();
                if (verLineH <= 100) {
                    $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-sp-rc]"] [cell-rm^="[-sp-vl]"]').css('height', rollContentH + 'px')
                }
            }
            else {
                var parentHeight2 = $('[cell-rm^="' + rmValue + '"] #sup-roll-content-' + supOutput + '').closest('[cell-rm^="[-sp-rc]"]').height() - 2;
                var closeId = $('[cell-rm^="' + rmValue + '"] #sup-roll-content-' + supOutput + '').closest('[cell-rm^="[-sp-rc]"]').prop('id');
                $('[cell-rm^="' + rmValue + '"] #' + closeId + ' [cell-rm^="[-sp-vl]"]').css('height', parentHeight2 + 'px')
            }

            var supH = $('[cell-rm^="' + rmValue + '"] #sup-roll-content-' + supOutput + '').height() - 3;
            $('[cell-rm^="' + rmValue + '"] [cell-rm^="[-ma-rc]"] [cell-rm^="[-ma-vl]"]').css('height', supH + 'px')
        });
    })
})
