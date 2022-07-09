var colors;
//For Absolute Slide
$(document).ready(function () {
    $(window).resize(function () {
        $('[cell-sl^="[-aa"]').each(function () {
            var slide = $(this).attr('cell-sl').match(/[a][s](\d{1,})[^\w\*](\d{1,})/i);
            var slideDesk = $(this).attr('cell-sl').match(/[d][a](\d{1,})[^\w\*](\d{1,})/i);
            var slideLarge = $(this).attr('cell-sl').match(/[l][a](\d{1,})[^\w\*](\d{1,})/i);
            var slideTab = $(this).attr('cell-sl').match(/[t][a](\d{1,})[^\w\*](\d{1,})/i);
            var slideMobile = $(this).attr('cell-sl').match(/[m][a](\d{1,})[^\w\*](\d{1,})/i);
            var slideSmall = $(this).attr('cell-sl').match(/[s][a](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-sl').match(/[a][s]/i);
            var eleD = $(this).attr('cell-sl').match(/[d][a]/i);
            var eleL = $(this).attr('cell-sl').match(/[l][a]/i);
            var eleT = $(this).attr('cell-sl').match(/[t][a]/i);
            var eleM = $(this).attr('cell-sl').match(/[m][a]/i);
            var eleS = $(this).attr('cell-sl').match(/[s][a]/i);

            var eleSp = $(this).attr('cell-sl').match(/[f][s]/i);
            var eleSpD = $(this).attr('cell-sl').match(/[d][f]/i);
            var eleSpL = $(this).attr('cell-sl').match(/[l][f]/i);
            var eleSpT = $(this).attr('cell-sl').match(/[t][f]/i);
            var eleSpM = $(this).attr('cell-sl').match(/[m][f]/i);
            var eleSpS = $(this).attr('cell-sl').match(/[s][f]/i);

            if (ele == 'as') {
                var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                var aaValue = '[-aa' + aa[1] + ':';

                var slide = $(this).attr('cell-sl').match(/[a][s](\d{1,})[^\w\*](\d{1,})/i);
                var widthLeft = slide[1] * 5;
                var widthRight = slide[2] * 5;
                var marg = 100 - widthRight;

                var z = 99999 - aa[1];
                $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                $('[cell-sl^="' + aaValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-right': '-' + widthRight + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                $('[cell-sl^="' + aaValue + '"] .as-left-close').click(function () {
                    var slide = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[a][s](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeft = slide[1] * 5;

                    var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var speed = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', 'position': 'absolute' });
                    if (eleSp != 'fs') {
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                    }
                    if (eleSp == 'fs') {
                        var speedLeftNum = speed[1] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                    }
                });
                $('[cell-sl^="' + aaValue + '"] .as-right-close').click(function () {
                    var slide = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[a][s](\d{1,})[^\w\*](\d{1,})/i);
                    var widthRightDesk = slide[2] * 5;

                    var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var speed = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightDesk + '%', 'width': '' + widthRightDesk + '%', 'position': 'absolute' });
                    if (eleSp != 'fs') {
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                    }
                    if (eleSp == 'fs') {
                        var speedRightNum = speed[2] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                    }
                });
                $('[cell-sl^="' + aaValue + '"] .as-left-open').click(function () {
                    var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var speed = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                    if (eleSp != 'fs') {
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                    }
                    if (eleSp == 'fs') {
                        var speedLeftNum = speed[1] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                    }
                });
                $('[cell-sl^="' + aaValue + '"] .as-right-open').click(function () {
                    var slide = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[da[s](\d{1,})[^\w\*](\d{1,})/i);
                    var widthRight = slide[2] * 5;
                    var marg = 100 - widthRight;

                    var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var speed = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                    if (eleSp != 'fs') {
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    if (eleSp == 'fs') {
                        var speedRightNum = speed[2] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                    }
                })
                if (eleSp != 'fs') {
                    var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                    $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                    $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                    $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                }
                var speed = $(this).attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);
                if (eleSp == 'fs') {
                    var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var speedLeftNum = speed[1] * 0.2;
                    var speedRightNum = speed[2] * 0.2;
                    $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                    $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                    $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                    $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                }
            }

            if (ele != 'as') {
                if (eleD == 'da') {
                    var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var slideDesk = $(this).attr('cell-sl').match(/[d][a](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftDesk = slideDesk[1] * 5;
                    var widthRightDesk = slideDesk[2] * 5;
                    var marg = 100 - widthRightDesk;

                    var z = 99999 - aa[1];
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + aaValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-right': '-' + widthRightDesk + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + aaValue + '"] .as-left-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftDesk = slideDesk[1] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'position': 'absolute' });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightDesk = slideDesk[2] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightDesk + '%', 'width': '' + widthRightDesk + '%', 'position': 'absolute' });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-left-open').click(function () {
                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-open').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightDesk = slideDesk[2] * 5;
                        var marg = 100 - widthRightDesk;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    })
                    if (eleSpD != 'df') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedDesk = $(this).attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpD == 'df') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLeftDeskNum = speedDesk[1] * 0.2;
                        var speedRightDeskNum = speedDesk[2] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                    }
                }
                if (eleL == 'la' & eleD != 'da') {
                    var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var slideLarge = $(this).attr('cell-sl').match(/[l][a](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftLarge = slideLarge[1] * 5;
                    var widthRightLarge = slideLarge[2] * 5;
                    var marg = 100 - widthRightLarge;

                    var z = 99999 - aa[1];
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + aaValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftLarge + '%', 'margin-left': '-' + widthLeftLarge + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftLarge + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightLarge + '%', 'margin-right': '-' + widthRightLarge + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightLarge + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + aaValue + '"] .as-left-close').click(function () {
                        var slideLarge = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[l][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftLarge = slideLarge[1] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftLarge + '%', 'margin-left': '-' + widthLeftLarge + '%', 'position': 'absolute' });
                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedLeftLargeNum = speedLarge[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-close').click(function () {
                        var slideLarge = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[l][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightLarge = slideLarge[2] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightLarge + '%', 'width': '' + widthRightLarge + '%', 'position': 'absolute' });
                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedRightLargeNum = speedLarge[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-left-open').click(function () {
                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedLeftLargeNum = speedLarge[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-open').click(function () {
                        var slideLarge = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[l][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightLarge = slideLarge[2] * 5;
                        var marg = 100 - widthRightLarge;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedRightLargeNum = speedLarge[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        }
                    })
                    if (eleSpL != 'lf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedLarge = $(this).attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpL == 'lf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLeftLargeNum = speedLarge[1] * 0.2;
                        var speedRightLargeNum = speedLarge[2] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                    }
                }
                if (eleT == 'ta' & eleD != 'da' & eleL != 'la') {
                    var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var slideTab = $(this).attr('cell-sl').match(/[t][a](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftTab = slideTab[1] * 5;
                    var widthRightTab = slideTab[2] * 5;
                    var marg = 100 - widthRightTab;

                    var z = 99999 - aa[1];
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + aaValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftTab + '%', 'margin-left': '-' + widthLeftTab + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftTab + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightTab + '%', 'margin-right': '-' + widthRightTab + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightTab + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + aaValue + '"] .as-left-close').click(function () {
                        var slideTab = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[t][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftTab = slideTab[1] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftTab + '%', 'margin-left': '-' + widthLeftTab + '%', 'position': 'absolute' });
                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedLeftTabNum = speedTab[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-close').click(function () {
                        var slideTab = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[t][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightTab = slideTab[2] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightTab + '%', 'width': '' + widthRightTab + '%', 'position': 'absolute' });
                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedRightTabNum = speedTab[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-left-open').click(function () {
                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedLeftTabNum = speedTab[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-open').click(function () {
                        var slideTab = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[t][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightTab = slideTab[2] * 5;
                        var marg = 100 - widthRightTab;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedRightTabNum = speedTab[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        }
                    })
                    if (eleSpT != 'tf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedTab = $(this).attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpT == 'tf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLeftTabNum = speedTab[1] * 0.2;
                        var speedRightTabNum = speedTab[2] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                    }
                }
                if (eleM == 'ma' & eleD != 'da' & eleL != 'la' & eleT != 'ta') {
                    var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var slideMobile = $(this).attr('cell-sl').match(/[m][a](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftMobile = slideMobile[1] * 5;
                    var widthRightMobile = slideMobile[2] * 5;
                    var marg = 100 - widthRightMobile;

                    var z = 99999 - aa[1];
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + aaValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftMobile + '%', 'margin-left': '-' + widthLeftMobile + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftMobile + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightMobile + '%', 'margin-right': '-' + widthRightMobile + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightMobile + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + aaValue + '"] .as-left-close').click(function () {
                        var slideMobile = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[m][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftMobile = slideMobile[1] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftMobile + '%', 'margin-left': '-' + widthLeftMobile + '%', 'position': 'absolute' });
                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftMobileNum = speedMobile[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-close').click(function () {
                        var slideMobile = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[m][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightMobile = slideMobile[2] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightMobile + '%', 'width': '' + widthRightMobile + '%', 'position': 'absolute' });
                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedRightMobileNum = speedMobile[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-left-open').click(function () {
                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftMobileNum = speedMobile[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-open').click(function () {
                        var slideMobile = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[m][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightMobile = slideMobile[2] * 5;
                        var marg = 100 - widthRightMobile;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedRightMobileNum = speedMobile[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        }
                    })
                    if (eleSpM != 'mf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedMobile = $(this).attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpM == 'mf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLeftMobileNum = speedMobile[1] * 0.2;
                        var speedRightMobileNum = speedMobile[2] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                    }
                }
                if (eleS == 'sa' & eleD != 'da' & eleL != 'la' & eleT != 'ta' & eleM != 'ma') {
                    var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var slideSmall = $(this).attr('cell-sl').match(/[s][a](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftSmall = slideSmall[1] * 5;
                    var widthRightSmall = slideSmall[2] * 5;
                    var marg = 100 - widthRightSmall;

                    var z = 99999 - aa[1];
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + aaValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-right': '-' + widthRightSmall + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + aaValue + '"] .as-left-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftSmall = slideSmall[1] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightSmall + '%', 'width': '' + widthRightSmall + '%', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-left-open').click(function () {
                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-open').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;
                        var marg = 100 - widthRightSmall;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    })
                    if (eleSpS != 'sf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedSmall = $(this).attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpS == 'sf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLeftSmallNum = speedSmall[1] * 0.2;
                        var speedRightSmallNum = speedSmall[2] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                    }
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'da') {
                    var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var slideDesk = $(this).attr('cell-sl').match(/[d][a](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftDesk = slideDesk[1] * 5;
                    var widthRightDesk = slideDesk[2] * 5;
                    var marg = 100 - widthRightDesk;

                    var z = 99999 - aa[1];
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + aaValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-right': '-' + widthRightDesk + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + aaValue + '"] .as-left-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftDesk = slideDesk[1] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'position': 'absolute' });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightDesk = slideDesk[2] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightDesk + '%', 'width': '' + widthRightDesk + '%', 'position': 'absolute' });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-left-open').click(function () {
                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-open').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightDesk = slideDesk[2] * 5;
                        var marg = 100 - widthRightDesk;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    })
                    if (eleSpD != 'df') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedDesk = $(this).attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpD == 'df') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLeftDeskNum = speedDesk[1] * 0.2;
                        var speedRightDeskNum = speedDesk[2] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                    }
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'da') {
                    var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var slideDesk = $(this).attr('cell-sl').match(/[d][a](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftDesk = slideDesk[1] * 5;
                    var widthRightDesk = slideDesk[2] * 5;
                    var marg = 100 - widthRightDesk;

                    var z = 99999 - aa[1];
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + aaValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-right': '-' + widthRightDesk + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + aaValue + '"] .as-left-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftDesk = slideDesk[1] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'position': 'absolute' });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightDesk = slideDesk[2] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightDesk + '%', 'width': '' + widthRightDesk + '%', 'position': 'absolute' });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-left-open').click(function () {
                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-open').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightDesk = slideDesk[2] * 5;
                        var marg = 100 - widthRightDesk;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    })
                    if (eleSpD != 'df') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedDesk = $(this).attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpD == 'df') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLeftDeskNum = speedDesk[1] * 0.2;
                        var speedRightDeskNum = speedDesk[2] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                    }
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'la') {
                    var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var slideLarge = $(this).attr('cell-sl').match(/[l][a](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftLarge = slideLarge[1] * 5;
                    var widthRightLarge = slideLarge[2] * 5;
                    var marg = 100 - widthRightLarge;

                    var z = 99999 - aa[1];
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + aaValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftLarge + '%', 'margin-left': '-' + widthLeftLarge + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftLarge + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightLarge + '%', 'margin-right': '-' + widthRightLarge + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightLarge + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + aaValue + '"] .as-left-close').click(function () {
                        var slideLarge = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[l][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftLarge = slideLarge[1] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftLarge + '%', 'margin-left': '-' + widthLeftLarge + '%', 'position': 'absolute' });
                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedLeftLargeNum = speedLarge[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-close').click(function () {
                        var slideLarge = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[l][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightLarge = slideLarge[2] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightLarge + '%', 'width': '' + widthRightLarge + '%', 'position': 'absolute' });
                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedRightLargeNum = speedLarge[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-left-open').click(function () {
                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedLeftLargeNum = speedLarge[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-open').click(function () {
                        var slideLarge = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[l][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightLarge = slideLarge[2] * 5;
                        var marg = 100 - widthRightLarge;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedRightLargeNum = speedLarge[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        }
                    })
                    if (eleSpL != 'lf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedLarge = $(this).attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpL == 'lf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLeftLargeNum = speedLarge[1] * 0.2;
                        var speedRightLargeNum = speedLarge[2] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                    }
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'ta') {
                    var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var slideTab = $(this).attr('cell-sl').match(/[t][a](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftTab = slideTab[1] * 5;
                    var widthRightTab = slideTab[2] * 5;
                    var marg = 100 - widthRightTab;

                    var z = 99999 - aa[1];
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + aaValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftTab + '%', 'margin-left': '-' + widthLeftTab + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftTab + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightTab + '%', 'margin-right': '-' + widthRightTab + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightTab + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + aaValue + '"] .as-left-close').click(function () {
                        var slideTab = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[t][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftTab = slideTab[1] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftTab + '%', 'margin-left': '-' + widthLeftTab + '%', 'position': 'absolute' });
                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedLeftTabNum = speedTab[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-close').click(function () {
                        var slideTab = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[t][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightTab = slideTab[2] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightTab + '%', 'width': '' + widthRightTab + '%', 'position': 'absolute' });
                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedRightTabNum = speedTab[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-left-open').click(function () {
                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedLeftTabNum = speedTab[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-open').click(function () {
                        var slideTab = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[t][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightTab = slideTab[2] * 5;
                        var marg = 100 - widthRightTab;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedRightTabNum = speedTab[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        }
                    })
                    if (eleSpT != 'tf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedTab = $(this).attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpT == 'tf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLeftTabNum = speedTab[1] * 0.2;
                        var speedRightTabNum = speedTab[2] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                    }
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ma') {
                    var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var slideMobile = $(this).attr('cell-sl').match(/[m][a](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftMobile = slideMobile[1] * 5;
                    var widthRightMobile = slideMobile[2] * 5;
                    var marg = 100 - widthRightMobile;

                    var z = 99999 - aa[1];
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + aaValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftMobile + '%', 'margin-left': '-' + widthLeftMobile + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftMobile + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightMobile + '%', 'margin-right': '-' + widthRightMobile + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightMobile + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + aaValue + '"] .as-left-close').click(function () {
                        var slideMobile = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[m][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftMobile = slideMobile[1] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftMobile + '%', 'margin-left': '-' + widthLeftMobile + '%', 'position': 'absolute' });
                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftMobileNum = speedMobile[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-close').click(function () {
                        var slideMobile = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[m][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightMobile = slideMobile[2] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightMobile + '%', 'width': '' + widthRightMobile + '%', 'position': 'absolute' });
                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedRightMobileNum = speedMobile[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-left-open').click(function () {
                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftMobileNum = speedMobile[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-open').click(function () {
                        var slideMobile = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[m][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightMobile = slideMobile[2] * 5;
                        var marg = 100 - widthRightMobile;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedRightMobileNum = speedMobile[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        }
                    })
                    if (eleSpM != 'mf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedMobile = $(this).attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpM == 'mf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLeftMobileNum = speedMobile[1] * 0.2;
                        var speedRightMobileNum = speedMobile[2] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                    }
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sa') {
                    var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var slideSmall = $(this).attr('cell-sl').match(/[s][a](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftSmall = slideSmall[1] * 5;
                    var widthRightSmall = slideSmall[2] * 5;
                    var marg = 100 - widthRightSmall;

                    var z = 99999 - aa[1];
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + aaValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-right': '-' + widthRightSmall + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + aaValue + '"] .as-left-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftSmall = slideSmall[1] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightSmall + '%', 'width': '' + widthRightSmall + '%', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-left-open').click(function () {
                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-open').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;
                        var marg = 100 - widthRightSmall;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    })
                    if (eleSpS != 'sf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedSmall = $(this).attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpS == 'sf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLeftSmallNum = speedSmall[1] * 0.2;
                        var speedRightSmallNum = speedSmall[2] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                    }
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sa') {
                    var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                    var aaValue = '[-aa' + aa[1] + ':';

                    var slideSmall = $(this).attr('cell-sl').match(/[s][a](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftSmall = slideSmall[1] * 5;
                    var widthRightSmall = slideSmall[2] * 5;
                    var marg = 100 - widthRightSmall;

                    var z = 99999 - aa[1];
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + aaValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-right': '-' + widthRightSmall + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + aaValue + '"] .as-left-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftSmall = slideSmall[1] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightSmall + '%', 'width': '' + widthRightSmall + '%', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-left-open').click(function () {
                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + aaValue + '"] .as-right-open').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][a](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;
                        var marg = 100 - widthRightSmall;

                        var aa = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-aa"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + aaValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    })
                    if (eleSpS != 'sf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedSmall = $(this).attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpS == 'sf') {
                        var aa = $(this).attr('cell-sl').match(/[-][a][a](\d{1,})/i);
                        var aaValue = '[-aa' + aa[1] + ':';

                        var speedLeftSmallNum = speedSmall[1] * 0.2;
                        var speedRightSmallNum = speedSmall[2] * 0.2;
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + aaValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                    }
                }
            }
        })
    })

        .resize();

});
//For Slide
$(document).ready(function () {
    $(window).resize(function () {
        $('[cell-sl^="[-na"]').each(function () {
            var slide = $(this).attr('cell-sl').match(/[n][s](\d{1,})[^\w\*](\d{1,})/i);
            var slideDesk = $(this).attr('cell-sl').match(/[d][n](\d{1,})[^\w\*](\d{1,})/i);
            var slideLarge = $(this).attr('cell-sl').match(/[l][n](\d{1,})[^\w\*](\d{1,})/i);
            var slideTab = $(this).attr('cell-sl').match(/[t][n](\d{1,})[^\w\*](\d{1,})/i);
            var slideMobile = $(this).attr('cell-sl').match(/[m][n](\d{1,})[^\w\*](\d{1,})/i);
            var slideSmall = $(this).attr('cell-sl').match(/[s][n](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-sl').match(/[n][s]/i);
            var eleD = $(this).attr('cell-sl').match(/[d][n]/i);
            var eleL = $(this).attr('cell-sl').match(/[l][n]/i);
            var eleT = $(this).attr('cell-sl').match(/[t][n]/i);
            var eleM = $(this).attr('cell-sl').match(/[m][n]/i);
            var eleS = $(this).attr('cell-sl').match(/[s][n]/i);

            var eleSp = $(this).attr('cell-sl').match(/[f][s]/i);
            var eleSpD = $(this).attr('cell-sl').match(/[d][f]/i);
            var eleSpL = $(this).attr('cell-sl').match(/[l][f]/i);
            var eleSpT = $(this).attr('cell-sl').match(/[t][f]/i);
            var eleSpM = $(this).attr('cell-sl').match(/[m][f]/i);
            var eleSpS = $(this).attr('cell-sl').match(/[s][f]/i);

            if (ele == 'ns') {
                var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                var naValue = '[-na' + na[1] + ':';

                var slide = $(this).attr('cell-sl').match(/[n][s](\d{1,})[^\w\*](\d{1,})/i);
                var widthLeft = slide[1] * 5;
                var widthRight = slide[2] * 5;

                $('[cell-sl^="' + naValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '0', "position": "relative" });
                $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', "position": "relative" });
                $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '0', "position": "relative" });
                $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '-' + widthRight + '%', "position": "relative" });

                $('[cell-sl^="' + naValue + '"] .left-close').click(function () {
                    var slide = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[n][s](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeft = slide[1] * 5;

                    var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var speed = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', "position": "relative" });
                    if (eleSp != 'fs') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                    }
                    if (eleSp == 'fs') {
                        var speedLeftNum = speed[1] * 0.2;
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                    }
                });
                $('[cell-sl^="' + naValue + '"] .right-close').click(function () {
                    var slide = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[n][s](\d{1,})[^\w\*](\d{1,})/i);
                    var widthRight = slide[2] * 5;

                    var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var speed = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '-' + widthRight + '%', "position": "relative" });
                    if (eleSp != 'fs') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                    }
                    if (eleSp == 'fs') {
                        var speedRightNum = speed[2] * 0.2;
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                    }
                });
                $('[cell-sl^="' + naValue + '"] .left-open').click(function () {
                    var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var speed = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    if (eleSp != 'fs') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                    }
                    if (eleSp == 'fs') {
                        var speedLeftNum = speed[1] * 0.2;
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                    }
                });
                $('[cell-sl^="' + naValue + '"] .right-open').click(function () {
                    var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var speed = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    if (eleSp != 'fs') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    if (eleSp == 'fs') {
                        var speedRightNum = speed[2] * 0.2;
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                    }
                })
                if (eleSp != 'fs') {
                    var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                }
                var speed = $(this).attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);
                if (eleSp == 'fs') {
                    var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var speedLeftNum = speed[1] * 0.2;
                    var speedRightNum = speed[2] * 0.2;
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                }
            }

            if (ele != 'ns') {
                if (eleD == 'dn') {
                    var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var slideDesk = $(this).attr('cell-sl').match(/[d][n](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftDesk = slideDesk[1] * 5;
                    var widthRightDesk = slideDesk[2] * 5;

                    $('[cell-sl^="' + naValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '-' + widthRightDesk + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + naValue + '"] .left-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftDesk = slideDesk[1] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightDesk = slideDesk[2] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '-' + widthRightDesk + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .left-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    })
                    if (eleSpD != 'df') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedDesk = $(this).attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpD == 'df') {
                        var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLeftDeskNum = speedDesk[1] * 0.2;
                        var speedRightDeskNum = speedDesk[2] * 0.2;

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                    }
                }
                if (eleL == 'ln' & eleD != 'dn') {
                    var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var slideLarge = $(this).attr('cell-sl').match(/[l][n](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftLarge = slideLarge[1] * 5;
                    var widthRightLarge = slideLarge[2] * 5;

                    $('[cell-sl^="' + naValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftLarge + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftLarge + '%', 'margin-left': '-' + widthLeftLarge + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightLarge + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightLarge + '%', 'margin-left': '0', 'margin-right': '-' + widthRightLarge + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + naValue + '"] .left-close').click(function () {

                        var slideLarge = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[l][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftLarge = slideLarge[1] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftLarge + '%', 'margin-left': '-' + widthLeftLarge + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedLeftLargeNum = speedLarge[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-close').click(function () {
                        var slideLarge = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[l][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightLarge = slideLarge[2] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightLarge + '%', 'margin-left': '0', 'margin-right': '-' + widthRightLarge + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedRightLargeNum = speedLarge[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .left-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedLeftLargeNum = speedLarge[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedRightLargeNum = speedLarge[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        }
                    })
                    if (eleSpL != 'lf') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedLarge = $(this).attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpL == 'lf') {
                        var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLeftLargeNum = speedLarge[1] * 0.2;
                        var speedRightLargeNum = speedLarge[2] * 0.2;

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                    }
                }
                if (eleT == 'tn' & eleD != 'da' & eleL != 'la') {
                    var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var slideTab = $(this).attr('cell-sl').match(/[t][n](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftTab = slideTab[1] * 5;
                    var widthRightTab = slideTab[2] * 5;

                    $('[cell-sl^="' + naValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftTab + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftTab + '%', 'margin-left': '-' + widthLeftTab + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightTab + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightTab + '%', 'margin-left': '0', 'margin-right': '-' + widthRightTab + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + naValue + '"] .left-close').click(function () {

                        var slideTab = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[t][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftTab = slideTab[1] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftTab + '%', 'margin-left': '-' + widthLeftTab + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedLeftTabNum = speedTab[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-close').click(function () {
                        var slideTab = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[t][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightTab = slideTab[2] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightTab + '%', 'margin-left': '0', 'margin-right': '-' + widthRightTab + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedRightTabNum = speedTab[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .left-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedLeftTabNum = speedTab[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedRightTabNum = speedTab[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        }
                    })
                    if (eleSpT != 'tf') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedTab = $(this).attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpT == 'tf') {
                        var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLeftTabNum = speedTab[1] * 0.2;
                        var speedRightTabNum = speedTab[2] * 0.2;

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                    }
                }
                if (eleM == 'mn' & eleD != 'da' & eleL != 'la' & eleT != 'ta') {
                    var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var slideMobile = $(this).attr('cell-sl').match(/[m][n](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftMobile = slideMobile[1] * 5;
                    var widthRightMobile = slideMobile[2] * 5;

                    $('[cell-sl^="' + naValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftMobile + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftMobile + '%', 'margin-left': '-' + widthLeftMobile + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightMobile + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightMobile + '%', 'margin-left': '0', 'margin-right': '-' + widthRightMobile + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + naValue + '"] .left-close').click(function () {

                        var slideMobile = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[m][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftMobile = slideMobile[1] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftMobile + '%', 'margin-left': '-' + widthLeftMobile + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftMobileNum = speedMobile[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-close').click(function () {
                        var slideMobile = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[m][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightMobile = slideMobile[2] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightMobile + '%', 'margin-left': '0', 'margin-right': '-' + widthRightMobile + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedRightMobileNum = speedMobile[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .left-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftMobileNum = speedMobile[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedRightMobileNum = speedMobile[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        }
                    })
                    if (eleSpM != 'mf') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedMobile = $(this).attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpM == 'mf') {
                        var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLeftMobileNum = speedMobile[1] * 0.2;
                        var speedRightMobileNum = speedMobile[2] * 0.2;

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                    }
                }
                if (eleS == 'sn' & eleD != 'da' & eleL != 'la' & eleT != 'ta' & eleM != 'mn') {
                    var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var slideSmall = $(this).attr('cell-sl').match(/[s][n](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftSmall = slideSmall[1] * 5;
                    var widthRightSmall = slideSmall[2] * 5;

                    $('[cell-sl^="' + naValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-left': '0', 'margin-right': '-' + widthRightSmall + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + naValue + '"] .left-close').click(function () {

                        var slideSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftSmall = slideSmall[1] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightSmall + '%', 'margin-left': '0', 'margin-right': '-' + widthRightSmall + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .left-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    })
                    if (eleSpS != 'sf') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedSmall = $(this).attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpS == 'sf') {
                        var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLeftSmallNum = speedSmall[1] * 0.2;
                        var speedRightSmallNum = speedSmall[2] * 0.2;

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                    }
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dn') {
                    var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var slideDesk = $(this).attr('cell-sl').match(/[d][n](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftDesk = slideDesk[1] * 5;
                    var widthRightDesk = slideDesk[2] * 5;

                    $('[cell-sl^="' + naValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '-' + widthRightDesk + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + naValue + '"] .left-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftDesk = slideDesk[1] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightDesk = slideDesk[2] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '-' + widthRightDesk + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .left-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    })
                    if (eleSpD != 'df') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedDesk = $(this).attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpD == 'df') {
                        var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLeftDeskNum = speedDesk[1] * 0.2;
                        var speedRightDeskNum = speedDesk[2] * 0.2;

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                    }
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dn') {
                    var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var slideDesk = $(this).attr('cell-sl').match(/[d][n](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftDesk = slideDesk[1] * 5;
                    var widthRightDesk = slideDesk[2] * 5;

                    $('[cell-sl^="' + naValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '-' + widthRightDesk + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + naValue + '"] .left-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftDesk = slideDesk[1] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightDesk = slideDesk[2] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '-' + widthRightDesk + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .left-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    })
                    if (eleSpD != 'df') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedDesk = $(this).attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpD == 'df') {
                        var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLeftDeskNum = speedDesk[1] * 0.2;
                        var speedRightDeskNum = speedDesk[2] * 0.2;

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                    }
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'ln') {
                    var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var slideLarge = $(this).attr('cell-sl').match(/[l][n](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftLarge = slideLarge[1] * 5;
                    var widthRightLarge = slideLarge[2] * 5;

                    $('[cell-sl^="' + naValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftLarge + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftLarge + '%', 'margin-left': '-' + widthLeftLarge + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightLarge + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightLarge + '%', 'margin-left': '0', 'margin-right': '-' + widthRightLarge + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + naValue + '"] .left-close').click(function () {

                        var slideLarge = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[l][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftLarge = slideLarge[1] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftLarge + '%', 'margin-left': '-' + widthLeftLarge + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedLeftLargeNum = speedLarge[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-close').click(function () {
                        var slideLarge = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[l][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightLarge = slideLarge[2] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightLarge + '%', 'margin-left': '0', 'margin-right': '-' + widthRightLarge + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedRightLargeNum = speedLarge[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .left-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedLeftLargeNum = speedLarge[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedRightLargeNum = speedLarge[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        }
                    })
                    if (eleSpL != 'lf') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedLarge = $(this).attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpL == 'lf') {
                        var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLeftLargeNum = speedLarge[1] * 0.2;
                        var speedRightLargeNum = speedLarge[2] * 0.2;

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                    }
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tn') {
                    var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var slideTab = $(this).attr('cell-sl').match(/[t][n](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftTab = slideTab[1] * 5;
                    var widthRightTab = slideTab[2] * 5;

                    $('[cell-sl^="' + naValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftTab + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftTab + '%', 'margin-left': '-' + widthLeftTab + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightTab + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightTab + '%', 'margin-left': '0', 'margin-right': '-' + widthRightTab + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + naValue + '"] .left-close').click(function () {

                        var slideTab = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[t][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftTab = slideTab[1] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftTab + '%', 'margin-left': '-' + widthLeftTab + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedLeftTabNum = speedTab[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-close').click(function () {
                        var slideTab = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[t][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightTab = slideTab[2] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightTab + '%', 'margin-left': '0', 'margin-right': '-' + widthRightTab + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedRightTabNum = speedTab[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .left-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedLeftTabNum = speedTab[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedRightTabNum = speedTab[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        }
                    })
                    if (eleSpT != 'tf') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedTab = $(this).attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpT == 'tf') {
                        var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLeftTabNum = speedTab[1] * 0.2;
                        var speedRightTabNum = speedTab[2] * 0.2;

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                    }
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mn') {
                    var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var slideMobile = $(this).attr('cell-sl').match(/[m][n](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftMobile = slideMobile[1] * 5;
                    var widthRightMobile = slideMobile[2] * 5;

                    $('[cell-sl^="' + naValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftMobile + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftMobile + '%', 'margin-left': '-' + widthLeftMobile + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightMobile + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightMobile + '%', 'margin-left': '0', 'margin-right': '-' + widthRightMobile + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + naValue + '"] .left-close').click(function () {

                        var slideMobile = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[m][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftMobile = slideMobile[1] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftMobile + '%', 'margin-left': '-' + widthLeftMobile + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftMobileNum = speedMobile[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-close').click(function () {
                        var slideMobile = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[m][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightMobile = slideMobile[2] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightMobile + '%', 'margin-left': '0', 'margin-right': '-' + widthRightMobile + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedRightMobileNum = speedMobile[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .left-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftMobileNum = speedMobile[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedRightMobileNum = speedMobile[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        }
                    })
                    if (eleSpM != 'mf') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedMobile = $(this).attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpM == 'mf') {
                        var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLeftMobileNum = speedMobile[1] * 0.2;
                        var speedRightMobileNum = speedMobile[2] * 0.2;

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                    }
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sn') {
                    var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var slideSmall = $(this).attr('cell-sl').match(/[s][n](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftSmall = slideSmall[1] * 5;
                    var widthRightSmall = slideSmall[2] * 5;

                    $('[cell-sl^="' + naValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-left': '0', 'margin-right': '-' + widthRightSmall + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + naValue + '"] .left-close').click(function () {

                        var slideSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftSmall = slideSmall[1] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightSmall + '%', 'margin-left': '0', 'margin-right': '-' + widthRightSmall + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .left-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    })
                    if (eleSpS != 'sf') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedSmall = $(this).attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpS == 'sf') {
                        var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLeftSmallNum = speedSmall[1] * 0.2;
                        var speedRightSmallNum = speedSmall[2] * 0.2;

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                    }
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sn') {
                    var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                    var naValue = '[-na' + na[1] + ':';

                    var slideSmall = $(this).attr('cell-sl').match(/[s][n](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftSmall = slideSmall[1] * 5;
                    var widthRightSmall = slideSmall[2] * 5;

                    $('[cell-sl^="' + naValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-left': '0', 'margin-right': '-' + widthRightSmall + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + naValue + '"] .left-close').click(function () {

                        var slideSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftSmall = slideSmall[1] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][n](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;

                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightSmall + '%', 'margin-left': '0', 'margin-right': '-' + widthRightSmall + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .left-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + naValue + '"] .right-open').click(function () {
                        var na = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-na"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    })
                    if (eleSpS != 'sf') {
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedSmall = $(this).attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpS == 'sf') {
                        var na = $(this).attr('cell-sl').match(/[-][n][a](\d{1,})/i);
                        var naValue = '[-na' + na[1] + ':';

                        var speedLeftSmallNum = speedSmall[1] * 0.2;
                        var speedRightSmallNum = speedSmall[2] * 0.2;

                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + naValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                    }
                }
            }
        })
    })
        .resize();
});
//For Responsive Slide
$(document).ready(function () {
    $(window).resize(function () {
        $('[cell-sl^="[-ra"]').each(function () {
            var slide = $(this).attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
            var slideDesk = $(this).attr('cell-sl').match(/[d][r](\d{1,})[^\w\*](\d{1,})/i);
            var slideLarge = $(this).attr('cell-sl').match(/[l][r](\d{1,})[^\w\*](\d{1,})/i);
            var slideTab = $(this).attr('cell-sl').match(/[t][r](\d{1,})[^\w\*](\d{1,})/i);
            var slideMobile = $(this).attr('cell-sl').match(/[m][r](\d{1,})[^\w\*](\d{1,})/i);
            var slideSmall = $(this).attr('cell-sl').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);

            var speedTab = $(this).attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);
            var speedMobile = $(this).attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);
            var speedSmall = $(this).attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-sl').match(/[r][s]/i);
            var eleD = $(this).attr('cell-sl').match(/[d][r]/i);
            var eleL = $(this).attr('cell-sl').match(/[l][r]/i);
            var eleT = $(this).attr('cell-sl').match(/[t][r]/i);
            var eleM = $(this).attr('cell-sl').match(/[m][r]/i);
            var eleS = $(this).attr('cell-sl').match(/[s][r]/i);

            var eleSp = $(this).attr('cell-sl').match(/[f][s]/i);
            var eleSpD = $(this).attr('cell-sl').match(/[d][f]/i);
            var eleSpL = $(this).attr('cell-sl').match(/[l][f]/i);
            var eleSpT = $(this).attr('cell-sl').match(/[t][f]/i);
            var eleSpM = $(this).attr('cell-sl').match(/[m][f]/i);
            var eleSpS = $(this).attr('cell-sl').match(/[s][f]/i);

            if (ele != 'rs') {
                if (eleD == 'dr') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slideDesk = $(this).attr('cell-sl').match(/[d][r](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftDesk = slideDesk[1] * 5;
                    var widthRightDesk = slideDesk[2] * 5;

                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '-' + widthRightDesk + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {

                        var slideDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftDesk = slideDesk[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightDesk = slideDesk[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '-' + widthRightDesk + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    })
                    if (eleSpD != 'df') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedDesk = $(this).attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpD == 'df') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftDeskNum = speedDesk[1] * 0.2;
                        var speedRightDeskNum = speedDesk[2] * 0.2;

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                    }
                }
                if (eleL == 'lr' & eleD != 'dr') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slideLarge = $(this).attr('cell-sl').match(/[l][r](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftLarge = slideLarge[1] * 5;
                    var widthRightLarge = slideLarge[2] * 5;

                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftLarge + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftLarge + '%', 'margin-left': '-' + widthLeftLarge + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightLarge + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightLarge + '%', 'margin-left': '0', 'margin-right': '-' + widthRightLarge + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {

                        var slideLarge = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[l][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftLarge = slideLarge[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftLarge + '%', 'margin-left': '-' + widthLeftLarge + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedLeftLargeNum = speedLarge[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slideLarge = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[l][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightLarge = slideLarge[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightLarge + '%', 'margin-left': '0', 'margin-right': '-' + widthRightLarge + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedRightLargeNum = speedLarge[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedLeftLargeNum = speedLarge[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedRightLargeNum = speedLarge[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        }
                    })
                    if (eleSpL != 'lf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedLarge = $(this).attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpL == 'lf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftLargeNum = speedLarge[1] * 0.2;
                        var speedRightLargeNum = speedLarge[2] * 0.2;

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                    }
                }
                if (eleT == 'tr' & eleD != 'dr' & eleL != 'lr') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slideTab = $(this).attr('cell-sl').match(/[t][r](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftTab = slideTab[1] * 5;
                    var widthRightTab = slideTab[2] * 5;

                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftTab + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftTab + '%', 'margin-left': '-' + widthLeftTab + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightTab + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightTab + '%', 'margin-left': '0', 'margin-right': '-' + widthRightTab + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {

                        var slideTab = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[t][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftTab = slideTab[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftTab + '%', 'margin-left': '-' + widthLeftTab + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedLeftTabNum = speedTab[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slideTab = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[t][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightTab = slideTab[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightTab + '%', 'margin-left': '0', 'margin-right': '-' + widthRightTab + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedRightTabNum = speedTab[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedLeftTabNum = speedTab[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedRightTabNum = speedTab[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        }
                    })
                    if (eleSpT != 'tf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedTab = $(this).attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpT == 'tf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftTabNum = speedTab[1] * 0.2;
                        var speedRightTabNum = speedTab[2] * 0.2;

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                    }
                }
                if (eleM == 'mr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slideMobile = $(this).attr('cell-sl').match(/[m][r](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftMobile = slideMobile[1] * 5;
                    var widthRightMobile = slideMobile[2] * 5;
                    var marg = 100 - widthRightMobile;

                    var z = 99999 - ra[1];
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftMobile + '%', 'margin-left': '-' + widthLeftMobile + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftMobile + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightMobile + '%', 'margin-right': '-' + widthRightMobile + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightMobile + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {
                        var slideMobile = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[m][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftMobile = slideMobile[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftMobile + '%', 'margin-left': '-' + widthLeftMobile + '%', 'position': 'absolute' });
                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftMobileNum = speedMobile[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slideMobile = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[m][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightMobile = slideMobile[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightMobile + '%', 'width': '' + widthRightMobile + '%', 'position': 'absolute' });
                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedRightMobileNum = speedMobile[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftMobileNum = speedMobile[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var slideMobile = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[m][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightMobile = slideMobile[2] * 5;
                        var marg = 100 - widthRightMobile;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedRightMobileNum = speedMobile[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        }
                    })
                    if (eleSpM != 'mf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedMobile = $(this).attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpM == 'mf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftMobileNum = speedMobile[1] * 0.2;
                        var speedRightMobileNum = speedMobile[2] * 0.2;
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                    }
                }
                if (eleS == 'sr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr' & eleM != 'mr') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slideSmall = $(this).attr('cell-sl').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftSmall = slideSmall[1] * 5;
                    var widthRightSmall = slideSmall[2] * 5;
                    var marg = 100 - widthRightSmall;

                    var z = 99999 - ra[1];
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-right': '-' + widthRightSmall + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftSmall = slideSmall[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightSmall + '%', 'width': '' + widthRightSmall + '%', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;
                        var marg = 100 - widthRightSmall;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    })
                    if (eleSpS != 'sf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedSmall = $(this).attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpS == 'sf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftSmallNum = speedSmall[1] * 0.2;
                        var speedRightSmallNum = speedSmall[2] * 0.2;
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                    }
                }
            }
            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (ele == 'rs') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slide = $(this).attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeft = slide[1] * 5;
                    var widthRight = slide[2] * 5;

                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '0', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '0', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '-' + widthRight + '%', "position": "relative" });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeft = slide[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedLeftNum = speed[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRight = slide[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '-' + widthRight + '%', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedRightNum = speed[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedLeftNum = speed[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedRightNum = speed[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        }
                    })
                    var speed = $(this).attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSp != 'fs') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    if (eleSp == 'fs') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftNum = speed[1] * 0.2;
                        var speedRightNum = speed[2] * 0.2;
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                    }
                }
                if (eleD == 'dr') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slideDesk = $(this).attr('cell-sl').match(/[d][r](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftDesk = slideDesk[1] * 5;
                    var widthRightDesk = slideDesk[2] * 5;

                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '-' + widthRightDesk + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {

                        var slideDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftDesk = slideDesk[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightDesk = slideDesk[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '-' + widthRightDesk + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    })
                    if (eleSpD != 'df') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedDesk = $(this).attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpD == 'df') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftDeskNum = speedDesk[1] * 0.2;
                        var speedRightDeskNum = speedDesk[2] * 0.2;

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                    }
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (ele == 'rs') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slide = $(this).attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeft = slide[1] * 5;
                    var widthRight = slide[2] * 5;

                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '0', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '0', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '-' + widthRight + '%', "position": "relative" });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeft = slide[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedLeftNum = speed[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRight = slide[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '-' + widthRight + '%', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedRightNum = speed[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedLeftNum = speed[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedRightNum = speed[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        }
                    })
                    var speed = $(this).attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSp != 'fs') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    if (eleSp == 'fs') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftNum = speed[1] * 0.2;
                        var speedRightNum = speed[2] * 0.2;
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                    }
                }
                if (eleD == 'dr') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slideDesk = $(this).attr('cell-sl').match(/[d][r](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftDesk = slideDesk[1] * 5;
                    var widthRightDesk = slideDesk[2] * 5;

                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '-' + widthRightDesk + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {

                        var slideDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftDesk = slideDesk[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftDesk + '%', 'margin-left': '-' + widthLeftDesk + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slideDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightDesk = slideDesk[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightDesk + '%', 'margin-left': '0', 'margin-right': '-' + widthRightDesk + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedLeftDeskNum = speedDesk[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedDesk = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpD != 'df') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpD == 'df') {
                            var speedRightDeskNum = speedDesk[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        }
                    })
                    if (eleSpD != 'df') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedDesk = $(this).attr('cell-sl').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpD == 'df') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftDeskNum = speedDesk[1] * 0.2;
                        var speedRightDeskNum = speedDesk[2] * 0.2;

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftDeskNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightDeskNum + 's');
                    }
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (ele == 'rs') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slide = $(this).attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeft = slide[1] * 5;
                    var widthRight = slide[2] * 5;

                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '0', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '0', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '-' + widthRight + '%', "position": "relative" });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeft = slide[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedLeftNum = speed[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRight = slide[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '-' + widthRight + '%', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedRightNum = speed[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedLeftNum = speed[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedRightNum = speed[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        }
                    })
                    var speed = $(this).attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSp != 'fs') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    if (eleSp == 'fs') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftNum = speed[1] * 0.2;
                        var speedRightNum = speed[2] * 0.2;
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                    }
                }
                if (eleL == 'lr') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slideLarge = $(this).attr('cell-sl').match(/[l][r](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftLarge = slideLarge[1] * 5;
                    var widthRightLarge = slideLarge[2] * 5;

                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftLarge + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftLarge + '%', 'margin-left': '-' + widthLeftLarge + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightLarge + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightLarge + '%', 'margin-left': '0', 'margin-right': '-' + widthRightLarge + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {

                        var slideLarge = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[l][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftLarge = slideLarge[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftLarge + '%', 'margin-left': '-' + widthLeftLarge + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedLeftLargeNum = speedLarge[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slideLarge = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[l][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightLarge = slideLarge[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightLarge + '%', 'margin-left': '0', 'margin-right': '-' + widthRightLarge + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedRightLargeNum = speedLarge[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedLeftLargeNum = speedLarge[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLarge = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpL != 'lf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpL == 'lf') {
                            var speedRightLargeNum = speedLarge[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        }
                    })
                    if (eleSpL != 'lf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedLarge = $(this).attr('cell-sl').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpL == 'lf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftLargeNum = speedLarge[1] * 0.2;
                        var speedRightLargeNum = speedLarge[2] * 0.2;

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftLargeNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightLargeNum + 's');
                    }
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (ele == 'rs') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slide = $(this).attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeft = slide[1] * 5;
                    var widthRight = slide[2] * 5;

                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '0', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '0', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '-' + widthRight + '%', "position": "relative" });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeft = slide[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedLeftNum = speed[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRight = slide[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRight + '%', 'margin-left': '0', 'margin-right': '-' + widthRight + '%', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedRightNum = speed[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedLeftNum = speed[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedRightNum = speed[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        }
                    })
                    var speed = $(this).attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSp != 'fs') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    if (eleSp == 'fs') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftNum = speed[1] * 0.2;
                        var speedRightNum = speed[2] * 0.2;
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                    }
                }
                if (eleT == 'tr') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slideTab = $(this).attr('cell-sl').match(/[t][r](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftTab = slideTab[1] * 5;
                    var widthRightTab = slideTab[2] * 5;

                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftTab + '%', 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftTab + '%', 'margin-left': '-' + widthLeftTab + '%', 'transition': 'margin-left 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-m"]').css({ 'flex-grow': '1' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightTab + '%', 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightTab + '%', 'margin-left': '0', 'margin-right': '-' + widthRightTab + '%', 'transition': 'margin-right 4s', "position": "relative" });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {

                        var slideTab = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[t][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftTab = slideTab[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftTab + '%', 'margin-left': '-' + widthLeftTab + '%', 'transition': 'margin-left 4s', "position": "relative" });

                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedLeftTabNum = speedTab[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slideTab = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[t][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightTab = slideTab[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'width': '' + widthRightTab + '%', 'margin-left': '0', 'margin-right': '-' + widthRightTab + '%', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedRightTabNum = speedTab[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'transition': 'margin-left 4s', "position": "relative" });
                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedLeftTabNum = speedTab[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedTab = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'margin-left': '0', 'margin-right': '0', 'transition': 'margin-right 4s', "position": "relative" });

                        if (eleSpT != 'tf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpT == 'tf') {
                            var speedRightTabNum = speedTab[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        }
                    })
                    if (eleSpT != 'tf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedTab = $(this).attr('cell-sl').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpT == 'tf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftTabNum = speedTab[1] * 0.2;
                        var speedRightTabNum = speedTab[2] * 0.2;

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftTabNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightTabNum + 's');
                    }
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (ele == 'rs') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slide = $(this).attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);

                    var widthLeft = slide[1] * 5;
                    var widthRight = slide[2] * 5;
                    var marg = 100 - widthRight;
                    var z = 99999 - ra[1];
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');

                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", 'position': 'relative' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-right': '-' + widthRight + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeft = slide[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', 'position': 'absolute' });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedLeftNum = speed[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRight = slide[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRight + '%', 'width': '' + widthRight + '%', 'position': 'absolute' });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedRightNum = speed[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedLeftNum = speed[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRight = slide[2] * 5;
                        var marg = 100 - widthRight;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedRightNum = speed[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        }
                    })
                    if (eleSp != 'fs') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speed = $(this).attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSp == 'fs') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftNum = speed[1] * 0.2;
                        var speedRightNum = speed[2] * 0.2;

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                    }
                }
                if (eleM == 'mr') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slideMobile = $(this).attr('cell-sl').match(/[m][r](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftMobile = slideMobile[1] * 5;
                    var widthRightMobile = slideMobile[2] * 5;
                    var marg = 100 - widthRightMobile;

                    var z = 99999 - ra[1];
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftMobile + '%', 'margin-left': '-' + widthLeftMobile + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftMobile + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightMobile + '%', 'margin-right': '-' + widthRightMobile + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightMobile + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {
                        var slideMobile = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[m][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftMobile = slideMobile[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftMobile + '%', 'margin-left': '-' + widthLeftMobile + '%', 'position': 'absolute' });
                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftMobileNum = speedMobile[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slideMobile = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[m][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightMobile = slideMobile[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightMobile + '%', 'width': '' + widthRightMobile + '%', 'position': 'absolute' });
                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedRightMobileNum = speedMobile[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedLeftMobileNum = speedMobile[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var slideMobile = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[m][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightMobile = slideMobile[2] * 5;
                        var marg = 100 - widthRightMobile;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedMobile = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpM != 'mf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpM == 'mf') {
                            var speedRightMobileNum = speedMobile[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        }
                    })
                    if (eleSpM != 'mf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedMobile = $(this).attr('cell-sl').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpM == 'mf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftMobileNum = speedMobile[1] * 0.2;
                        var speedRightMobileNum = speedMobile[2] * 0.2;
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftMobileNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightMobileNum + 's');
                    }
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (ele == 'rs') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slide = $(this).attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);

                    var widthLeft = slide[1] * 5;
                    var widthRight = slide[2] * 5;
                    var marg = 100 - widthRight;
                    var z = 99999 - ra[1];
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');

                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", 'position': 'relative' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-right': '-' + widthRight + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeft = slide[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', 'position': 'absolute' });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedLeftNum = speed[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRight = slide[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRight + '%', 'width': '' + widthRight + '%', 'position': 'absolute' });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedRightNum = speed[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedLeftNum = speed[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRight = slide[2] * 5;
                        var marg = 100 - widthRight;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedRightNum = speed[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        }
                    })
                    if (eleSp != 'fs') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speed = $(this).attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSp == 'fs') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftNum = speed[1] * 0.2;
                        var speedRightNum = speed[2] * 0.2;

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                    }
                }
                if (eleS == 'sr') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slideSmall = $(this).attr('cell-sl').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftSmall = slideSmall[1] * 5;
                    var widthRightSmall = slideSmall[2] * 5;
                    var marg = 100 - widthRightSmall;

                    var z = 99999 - ra[1];
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-right': '-' + widthRightSmall + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftSmall = slideSmall[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightSmall + '%', 'width': '' + widthRightSmall + '%', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;
                        var marg = 100 - widthRightSmall;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    })
                    if (eleSpS != 'sf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedSmall = $(this).attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpS == 'sf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftSmallNum = speedSmall[1] * 0.2;
                        var speedRightSmallNum = speedSmall[2] * 0.2;
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                    }
                }
            }
            else if (width < 319.98) {
                if (ele == 'rs') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slide = $(this).attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);

                    var widthLeft = slide[1] * 5;
                    var widthRight = slide[2] * 5;
                    var marg = 100 - widthRight;
                    var z = 99999 - ra[1];
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');

                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", 'position': 'relative' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeft + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-right': '-' + widthRight + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRight + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeft = slide[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeft + '%', 'margin-left': '-' + widthLeft + '%', 'position': 'absolute' });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedLeftNum = speed[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRight = slide[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRight + '%', 'width': '' + widthRight + '%', 'position': 'absolute' });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedRightNum = speed[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedLeftNum = speed[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var slide = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[r][s](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRight = slide[2] * 5;
                        var marg = 100 - widthRight;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speed = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSp != 'fs') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSp == 'fs') {
                            var speedRightNum = speed[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        }
                    })
                    if (eleSp != 'fs') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speed = $(this).attr('cell-sl').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSp == 'fs') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftNum = speed[1] * 0.2;
                        var speedRightNum = speed[2] * 0.2;

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightNum + 's');
                    }
                }
                if (eleS == 'sr') {
                    var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                    var raValue = '[-ra' + ra[1] + ':';

                    var slideSmall = $(this).attr('cell-sl').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);
                    var widthLeftSmall = slideSmall[1] * 5;
                    var widthRightSmall = slideSmall[2] * 5;
                    var marg = 100 - widthRightSmall;

                    var z = 99999 - ra[1];
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').css("right", '0');
                    $('[cell-sl^="' + raValue + '"]').css({ "overflow": "hidden", "position": "relative" });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'overflow': 'hidden', 'width': '' + widthLeftSmall + '%', 'margin-left': '0', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-right': '-' + widthRightSmall + '%', 'position': 'absolute', 'z-index': '' + z + '' });
                    $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ 'overflow': 'hidden', 'width': '' + widthRightSmall + '%', 'margin-right': '0', 'position': 'absolute', 'z-index': '' + z + '' });

                    $('[cell-sl^="' + raValue + '"] .rs-left-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthLeftSmall = slideSmall[1] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().attr('cell-sl', '[-lc]')
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css({ 'width': '' + widthLeftSmall + '%', 'margin-left': '-' + widthLeftSmall + '%', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-close').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().attr('cell-sl', '[-rc]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css({ "margin-right": '-' + widthRightSmall + '%', 'width': '' + widthRightSmall + '%', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-left-open').click(function () {
                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().attr('cell-sl', '[-lo]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css({ 'margin-left': '0', 'position': 'absolute' });

                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedLeftSmallNum = speedSmall[1] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        }
                    });
                    $('[cell-sl^="' + raValue + '"] .rs-right-open').click(function () {
                        var slideSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);
                        var widthRightSmall = slideSmall[2] * 5;
                        var marg = 100 - widthRightSmall;

                        var ra = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedSmall = $(this).closest('[cell-sl^="[-ra"]').attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().attr('cell-sl', '[-ro]');
                        $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css({ "margin-right": '0', 'position': 'absolute' });
                        if (eleSpS != 'sf') {
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                        }
                        if (eleSpS == 'sf') {
                            var speedRightSmallNum = speedSmall[2] * 0.2;
                            $('[cell-sl^="' + raValue + '"]').find('[cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        }
                    })
                    if (eleSpS != 'sf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left 4s');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right 4s');
                    }
                    var speedSmall = $(this).attr('cell-sl').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);
                    if (eleSpS == 'sf') {
                        var ra = $(this).attr('cell-sl').match(/[-][r][a](\d{1,})/i);
                        var raValue = '[-ra' + ra[1] + ':';

                        var speedLeftSmallNum = speedSmall[1] * 0.2;
                        var speedRightSmallNum = speedSmall[2] * 0.2;
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lc"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-rc"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-lo"]').first().css("transition", 'margin-left ' + speedLeftSmallNum + 's');
                        $('[cell-sl^="' + raValue + '"]').find(' [cell-sl^="["][cell-sl$="]"][cell-sl*="-ro"]').last().css("transition", 'margin-right ' + speedRightSmallNum + 's');
                    }
                }
            }
        })
    })

        .resize();

});
//FOR RESPONSIVE FLOAT
$(document).ready(function () {
    var numArray = [];
    $('[cell-rf^="[-fl"]').each(function (index) {
        var fl = $(this).attr('cell-rf').match(/[-][f][l](\d{1,})/i);
        var flValue = '[-fl' + fl[1] + ':';

        var eleD = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/dl/i);
        var eleL = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/ll/i);
        var eleT = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/tl/i);
        var eleM = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/ml/i);
        var eleS = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/sl/i);
        var width = $(window).width();
        if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'dl') {
                var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/dl[^,]*?(\d{1,})/i);
                numArray.push(regex[1]);
            }
        }
        if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'dl') {
                var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/dl[^,]*?(\d{1,})/i);
                numArray.push(regex[1]);
            }
        }
        if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'll') {
                var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/ll[^,]*?(\d{1,})/i);
                numArray.push(regex[1]);
            }
        }
        if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tl') {
                var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/tl[^,]*?(\d{1,})/i);
                numArray.push(regex[1]);
            }
        }
        if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'ml') {
                var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/ml[^,]*?(\d{1,})/i);
                numArray.push(regex[1]);
            }
        }
        if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'sl') {
                var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/sl[^,]*?(\d{1,})/i);
                numArray.push(regex[1]);
            }
        }
        else if (width < 319.98) {
            if (eleS == 'sl') {
                var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/sl[^,]*?(\d{1,})/i);
                numArray.push(regex[1]);
            }
        }
        //For Counter Names
        var flLength = $('[cell-rf^="[-fl"]').length;
        var count = [];
        for (i = 0; i <= flLength; i++) {
            count[i] = 0;
        }
        //For Left Float
        $('[cell-rf^="' + flValue + '"]').find(".rf-left-float").first().click(function () {
            var output = fl[1] - 1;
            var width = $(window).width();

            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/dl[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/dl[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'll') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/ll[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/tl[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ml') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/ml[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/sl[^,]*?(\d{1,})/i);
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/sl[^,]*?(\d{1,})/i);
                }
            }
            num = regex[1];
            var marg = 100 / num;
            var floatLength = $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf^="[-c"]').length

            count[output]++;
            if (count[output] > floatLength) {
                count[output] = floatLength
            }

            var eleFs = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/fs/i);

            for (i = 1; i <= count[output]; i++) {
                var z = i - 1;
                var actualMarg = (100 - (marg * count[output]) + (marg * i) - marg);
                var x = i;
                if (actualMarg >= (-marg))
                    var attr = '[-c' + x + ']';
                $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"]').css('margin-left', +actualMarg + '%');
                if (eleFs != 'fs') {
                    $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"]').css('transsition', 'margin-left 2s');
                }
                if (eleFs == 'fs') {
                    var floatSpeed = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/fs[^,]*?(\d{1,})/i);
                    var fs = parseInt(floatSpeed[1]) * 0.2;
                    $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"]').css('transsition', 'margin-left ' + fs + 's');
                }
            }
            //For Transform Scale
            var numMath = Math.floor(num / 2);
            var floatV = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/fv/i);
            if (floatV == 'fv') {
                for (i = 0; i <= count[output]; i++) {
                    if (num % 2 != 0) {
                        if (i < Math.abs(count[output] - (numMath))) {
                            var x1 = i;
                            var attr = '[-c' + x1 + ']';
                            var scale = Math.abs((((count[output] - num) + (numMath)) * 0.05) - 1) + (i * 0.05);
                            $('[cell-rf^="' + flValue + '"]  > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transform', 'scale(' + scale + ')');

                            if (scale >= 1) {
                                $('[cell-rf^="' + flValue + '"]  > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transform', 'scale(1)');
                            }
                            $('[cell-rf^="' + flValue + '"]  > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transition', 'transform 4s');
                        }

                        if (i >= Math.abs((count[output] - numMath))) {
                            var x1 = i;
                            var attr = '[-c' + x1 + ']';
                            var scale1 = Math.abs(1 - (i * 0.05) + ((count[output] - numMath + 1) * 0.05));

                            $('[cell-rf^="' + flValue + '"]  > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transform', 'scale(' + scale1 + ')');
                            $('[cell-rf^="' + flValue + '"]  > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transition', 'transform 4s');

                        }
                    }
                    if (num % 2 == 0) {
                        if (i <= Math.abs(count[output] - (numMath) + 1)) {
                            var x1 = i;
                            var attr = '[-c' + x1 + ']';
                            var scale = Math.abs((((count[output] - num) + (numMath)) * 0.05) - 1) + (i * 0.05);
                            $('[cell-rf^="' + flValue + '"]  > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transform', 'scale(' + scale + ')');

                            if (scale >= 1) {
                                $('[cell-rf^="' + flValue + '"]  > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transform', 'scale(1)');
                            }
                            $('[cell-rf^="' + flValue + '"]  > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transition', 'transform 4s');
                        }

                        if (i > Math.abs((count[output] - numMath))) {
                            var x1 = i;
                            var attr = '[-c' + x1 + ']';
                            var scale1 = Math.abs(1 - (i * 0.05) + ((count[output] - numMath + 1) * 0.05));

                            $('[cell-rf^="' + flValue + '"]  > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').first().css('transform', 'scale(' + scale1 + ')');
                            $('[cell-rf^="' + flValue + '"]  > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').first().css('transition', 'transform 4s');

                        }
                    }
                }
            }
        });
        //For Float Buttons
        $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-bu"]').find('.rf-button').click(function () {

            var output = $(this).index()
            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/dl[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/dl[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'll') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/ll[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/tl[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ml') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/ml[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/sl[^,]*?(\d{1,})/i);
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/sl[^,]*?(\d{1,})/i);
                }
            }
            var num = parseInt(regex[1]);
            var out = parseInt(output);

            if (out <= count[index]) {
                var click = Math.abs(count[index] + out + num - 2);
                for (var j = 0; j <= (click); j++) {
                    jQuery(function () {
                        jQuery($('[cell-rf^="' + flValue + '"]').find('.rf-right-float').first()).click();
                    });
                }
            }

            if (out > count[index]) {
                var click = Math.abs(count[index] - out - num + 2);
                for (var j = 0; j <= click; j++) {
                    jQuery(function () {
                        jQuery($('[cell-rf^="' + flValue + '"]').find('.rf-left-float').first()).click();
                    });
                }
            }
        })
        //For Right Float
        $('[cell-rf^="' + flValue + '"]').find(".rf-right-float").first().click(function () {
            var output = fl[1] - 1;
            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/dl[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/dl[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'll') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/ll[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/tl[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ml') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/ml[^,]*?(\d{1,})/i);
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/sl[^,]*?(\d{1,})/i);
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sl') {
                    var regex = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/sl[^,]*?(\d{1,})/i);
                }
            }
            num = regex[1];
            var marg = 100 / num;

            count[output]--;
            if (count[output] <= 0) {
                count[output] = 0
            }
            var eleFs = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/fs/i);

            for (i = 0; i <= count[output]; i++) {
                var actualMarg = 100 - (marg * count[output]) + (marg * i);
                var x = i + 1;
                if (actualMarg >= (-marg))
                    var attr = '[-c' + x + ']';
                $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"]').css('margin-left', +actualMarg + '%');
                if (eleFs != 'fs') {
                    $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"]').css('transsition', 'margin-left 2s');
                }
                if (eleFs == 'fs') {
                    var floatSpeed = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/fs[^,]*?(\d{1,})/i);
                    var fs = parseInt(floatSpeed[1]) * 0.2;
                    $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"]').css('transsition', 'margin-left ' + fs + 's');
                }
            }
            //For Transform Scale
            var eleFv = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/fv/i);
            var numMath = Math.floor(num / 2);
            var floatV = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/fv/i);
            if (eleFv == 'fv') {
                for (i = 0; i <= count[output]; i++) {
                    if (num % 2 != 0) {
                        if (i < Math.abs(count[output] - (numMath))) {
                            var x1 = i;
                            var attr = '[-c' + x1 + ']';
                            var scale = Math.abs((((count[output] - num) + (numMath)) * 0.05) - 1) + (i * 0.05);
                            $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transform', 'scale(' + scale + ')');

                            if (scale >= 1) {
                                $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transform', 'scale(1)');
                            }
                            $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transition', 'transform 4s');
                        }

                        if (i >= Math.abs((count[output] - numMath))) {
                            var x1 = i;
                            var attr = '[-c' + x1 + ']';
                            var scale1 = Math.abs(1 - (i * 0.05) + ((count[output] - numMath + 1) * 0.05));

                            $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transform', 'scale(' + scale1 + ')');
                            $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transition', 'transform 4s');

                        }
                    }
                    if (num % 2 == 0) {
                        if (i <= Math.abs(count[output] - (numMath) + 1)) {
                            var x1 = i;
                            var attr = '[-c' + x1 + ']';
                            var scale = Math.abs((((count[output] - num) + (numMath)) * 0.05) - 1) + (i * 0.05);
                            $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transform', 'scale(' + scale + ')');

                            if (scale >= 1) {
                                $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transform', 'scale(1)');
                            }
                            $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transition', 'transform 4s');
                        }

                        if (i > Math.abs((count[output] - numMath))) {
                            var x1 = i;
                            var attr = '[-c' + x1 + ']';
                            var scale1 = Math.abs(1 - (i * 0.05) + ((count[output] - numMath + 1) * 0.05));

                            $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transform', 'scale(' + scale1 + ')');
                            $('[cell-rf^="' + flValue + '"] > [cell-rf^="[-fa"] > [cell-rf*="' + attr + '"] > div').css('transition', 'transform 4s');

                        }
                    }
                }
            }
        });
    })
})
//For Active Float
$(document).ready(function () {
    var activeArray = []
    $('[cell-rf^="[-fl"]').each(function (index) {
        var fl = $(this).attr('cell-rf').match(/[-][f][l](\d{1,})/i);
        var flValue = '[-fl' + fl[1] + ':';
        var eleA = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/a/i);
        if (eleA == 'a') {
            var active = $('[cell-rf^="' + flValue + '"]').attr("cell-rf").match(/a(\d{1,})/i);
            activeArray.push(active[1])
        }
        jQuery(function () {
            $(window).resize(function () {
                var width = $(window).width();
                if (width >= 1484.99 && width <= 2500) {
                    jQuery($('[cell-rf^="' + flValue + '"] > [cell-rf^="[-bu"] > .active')).click();
                }
                if (width >= 1199.99 && width <= 1484.98) {
                    jQuery($('[cell-rf^="' + flValue + '"] > [cell-rf^="[-bu"] > .active')).click();
                }
                if (width >= 991.99 && width <= 1199.98) {
                    jQuery($('[cell-rf^="' + flValue + '"] > [cell-rf^="[-bu"] > .active')).click();
                }
                if (width >= 767.99 && width <= 991.98) {
                    jQuery($('[cell-rf^="' + flValue + '"] > [cell-rf^="[-bu"] > .active')).click();
                }
                if (width >= 575.99 && width <= 767.98) {
                    jQuery($('[cell-rf^="' + flValue + '"] > [cell-rf^="[-bu"] > .active')).click();
                }
                else if (width >= 319.98 && width <= 575.98) {
                    jQuery($('[cell-rf^="' + flValue + '"] > [cell-rf^="[-bu"] > .active')).click();
                }

            })
                .resize();
        });
    })
})
//FOR SINGLE FLOAT
$(document).ready(function () {
    $('[cell-fl^="[-fl"]').each(function () {
        var fl = $(this).attr('cell-fl').match(/[-][f][l](\d{1,})/i);
        var flValue = '[-fl' + fl[1] + ':';
        var counts = [];
        var index = fl[1] - 1
        $(this).attr("");
        $(this).attr("id", "float-" + index);
        counts[index] = 0;

        $('[cell-fl^="' + flValue + '"]').find('.left-float').first().click(function () {
            var output = fl[1] - 1;
            var floatLength = $('#float-' + output + ' [cell-fl^="["][cell-fl$="]"][cell-fl*=-c] ').length
            counts[output]++;
            if (counts[output] > floatLength) {
                counts[output] = floatLength
            }
            var leftMove = +(counts[output]) - 1;
            $('[cell-fl^="' + flValue + '"] > [cell-fl^="[-fa]"] > [cell-fl^="["][cell-fl$="]"][cell-fl*=-c' + counts[output] + '] ').css('margin-left', '0px');
            $('[cell-fl^="' + flValue + '"] > [cell-fl^="[-fa]"] > [cell-fl^="["][cell-fl$="]"][cell-fl*=-c' + leftMove + '] ').css('margin-left', '-100%');
            var eleFs = $('[cell-fl^="' + flValue + '"]').attr("cell-fl").match(/[f][s]/i);
            if (eleFs != 'fs') {
                $('[cell-fl^="' + flValue + '"] > [cell-fl^="[-fa]"] > [cell-fl^="["][cell-fl$="]"][cell-fl*=-c' + counts[output] + '] ').css('transsition', 'margin-left 2s');
                $('[cell-fl^="' + flValue + '"] > [cell-fl^="[-fa]"] > [cell-fl^="["][cell-fl$="]"][cell-fl*=-c' + leftMove + '] ').css('transsition', 'margin-left 2s');
            }
            if (eleFs == 'fs') {
                var speed = $('[cell-fl^="' + flValue + '"]').attr("cell-fl").match(/[f][s](\d{1,})/i);
                var fs = speed[1] * 0.2;
                $('[cell-fl^="' + flValue + '"] > [cell-fl^="[-fa]"] > [cell-fl^="["][cell-fl$="]"][cell-fl*=-c' + counts[output] + '] ').css('transsition', 'margin-left ' + fs + 's');
                $('[cell-fl^="' + flValue + '"] > [cell-fl^="[-fa]"] > [cell-fl^="["][cell-fl$="]"][cell-fl*=-c' + leftMove + '] ').css('transsition', 'margin-left ' + fs + 's');
            }
        });
        $('[cell-fl^="' + flValue + '"]').find('.right-float').first().click(function () {
            var output = fl[1] - 1;
            counts[output]--;
            if (counts[output] <= 0) {
                counts[output] = 0
            }
            var counters = counts[output] + 1
            var rightMove = +(counters) - 1;
            $('[cell-fl^="' + flValue + '"] > [cell-fl^="[-fa]"] > [cell-fl^="["][cell-fl$="]"][cell-fl*=-c' + counters + '] ').css('margin-left', '100%');
            $('[cell-fl^="' + flValue + '"] > [cell-fl^="[-fa]"] > [cell-fl^="["][cell-fl$="]"][cell-fl*=-c' + rightMove + '] ').css('margin-left', '0px');
            var eleFs = $('[cell-fl^="' + flValue + '"]').attr("cell-fl").match(/[f][s]/i);
            if (eleFs != 'fs') {
                $('[cell-fl^="' + flValue + '"] > [cell-fl^="[-fa]"] > [cell-fl^="["][cell-fl$="]"][cell-fl*=-c' + counters + '] ').css('transsition', 'margin-left 2s');
                $('[cell-fl^="' + flValue + '"] > [cell-fl^="[-fa]"] > [cell-fl^="["][cell-fl$="]"][cell-fl*=-c' + rightMove + '] ').css('transsition', 'margin-left 2s');
            }
            if (eleFs == 'fs') {
                var speed = $('[cell-fl^="' + flValue + '"]').attr("cell-fl").match(/[f][s](\d{1,})/i);
                var fs = speed[1] * 0.2;
                $('[cell-fl^="' + flValue + '"] > [cell-fl^="[-fa]"] > [cell-fl^="["][cell-fl$="]"][cell-fl*=-c' + counters + '] ').css('transsition', 'margin-left ' + fs + 's');
                $('[cell-fl^="' + flValue + '"] > [cell-fl^="[-fa]"] > [cell-fl^="["][cell-fl$="]"][cell-fl*=-c' + rightMove + '] ').css('transsition', 'margin-left ' + fs + 's');
            }
        });
        //For Active Float
        var eleA = $('[cell-fl^="' + flValue + '"]').attr("cell-fl").match(/a/i);
        jQuery(function () {
            if (eleA == 'a') {
                var active = $('[cell-fl^="' + flValue + '"]').attr("cell-fl").match(/a(\d{1,})/i);
                var activeFloat = active[1] - 1;
                for (i = 0; i <= activeFloat; i++) {
                    jQuery($('[cell-fl^="' + flValue + '"]').find('.left-float')).first().click();
                }
            }
        });
    })
});