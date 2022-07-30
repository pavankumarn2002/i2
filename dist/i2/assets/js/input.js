var colors;
//For Input Active Actions
$(document).ready(function () {
    jQuery(function () {
        jQuery("[cell-in^='[-ra'][cell-in$=']'][cell-in*='-a'] input").focus();
    });
    jQuery(function () {
        jQuery("[cell-in^='[-ch'][cell-in$=']'][cell-in*='-a'] input").click();
    });
    $("[cell-in^='['][cell-in$=']'][cell-in*='-ch'] input").click(function () {
        $(this).next('[cell-in^="["][cell-in$="]"][cell-in*="-ch"] [cell-in*="-ma"]').toggle()
        $(this).next('[cell-in^="["][cell-in$="]"][cell-in*="-ch"] [cell-in*="-ma"]').click(function () {
            $(this).hide()
        });
    });
    //For Box Select
    $('[cell-in^="["][cell-in$="]"][cell-in*="-ob"]').hide();
    $('[cell-in^="["][cell-in$="]"][cell-in*="-sb"]').each(function (index) {
        $(this).attr("");
        $(this).attr("id", "select-box-" + index);
    })
    $('[cell-in^="["][cell-in$="]"][cell-in*="-ob"]').each(function (index) {
        $(this).attr("");
        $(this).attr("id", "box-" + index);
    })
    $('[cell-in^="["][cell-in$="]"][cell-in*="-sb"]').click(function () {
        var getId = this.id;
        var idNum = getId.substring(11);
        $('#box-' + idNum + '').toggle()
        $('#' + getId + ' option').appendTo('#box-' + idNum + '');
    });
    $('[cell-in^="["][cell-in$="]"][cell-in*="-sb"]').on('mousedown', function (e) {
        e.preventDefault();
        this.blur();
        window.focus();
    });
    $("option").click(function () {
        var parentId = $(this).parent().attr('id');
        var value = $(this).attr('op');
        var idNum = parentId.substring(4);
        $('#box-' + idNum + '').toggle()
        $('#' + parentId + ' option[op="' + value + '"]').appendTo('#select-box-' + idNum + ' select');
    })

})
//For Inputs 
$(document).ready(function () {
    $(window).resize(function () {
        $('[cell-in^="[-ip"]').each(function () {
            var radius = $(this).attr('cell-in').match(/[r][^,]*?(\d{1,})*/i);
            var width = $(this).attr('cell-in').match(/[w][^,]*?(\d{1,})*/i);
            var height = $(this).attr('cell-in').match(/[h][^,]*?(\d{1,})*/i);
            var borderLeft = $(this).attr('cell-in').match(/[b][l](\d{1,})[^\w\*](\d{1,})/i);
            var borderRight = $(this).attr('cell-in').match(/[b][r](\d{1,})[^\w\*](\d{1,})/i);
            var borderTop = $(this).attr('cell-in').match(/[b][t](\d{1,})[^\w\*](\d{1,})/i);
            var borderBottom = $(this).attr('cell-in').match(/[b][b](\d{1,})[^\w\*](\d{1,})/i);
            var borderLeftHover = $(this).attr('cell-in').match(/[.][b][l](\d{1,})[^\w\*](\d{1,})/i);
            var borderRightHover = $(this).attr('cell-in').match(/[.][b][r](\d{1,})[^\w\*](\d{1,})/i);
            var borderTopHover = $(this).attr('cell-in').match(/[.][b][t](\d{1,})[^\w\*](\d{1,})/i);
            var borderBottomHover = $(this).attr('cell-in').match(/[.][b][b](\d{1,})[^\w\*](\d{1,})/i);
            var border = $(this).attr('cell-in').match(/[-][b][o](\d{1,})[^\w\*](\d{1,})/i);
            var borderHover = $(this).attr('cell-in').match(/[.][b][o](\d{1,})[^\w\*](\d{1,})/i);
            var backGround = $(this).attr('cell-in').match(/[-b][g][^,]*?(\d{1,})*/i);
            var backGroundHover = $(this).attr('cell-in').match(/[.][b][g][^,]*?(\d{1,})*/i);
            var text = $(this).attr('cell-in').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
            var textHover = $(this).attr('cell-in').match(/[.][t][s](\d{1,})[^\w\*](\d{1,})/i);

            var eleR = $(this).attr('cell-in').match(/[r]/i);
            var eleW = $(this).attr('cell-in').match(/[w]/i);
            var eleH = $(this).attr('cell-in').match(/[h]/i);
            var eleB = $(this).attr('cell-in').match(/[b][o]/i);
            var eleBl = $(this).attr('cell-in').match(/[b][l]/i);
            var eleBr = $(this).attr('cell-in').match(/[b][r]/i);
            var eleBt = $(this).attr('cell-in').match(/[b][t]/i);
            var eleBb = $(this).attr('cell-in').match(/[b][b]/i);
            var eleBlHo = $(this).attr('cell-in').match(/[.][b][l]/i);
            var eleBrHo = $(this).attr('cell-in').match(/[.][b][r]/i);
            var eleBtHo = $(this).attr('cell-in').match(/[.][b][t]/i);
            var eleBbHo = $(this).attr('cell-in').match(/[.][b][b]/i);
            var eleBHo = $(this).attr('cell-in').match(/[.][b][o]/i);
            var eleBg = $(this).attr('cell-in').match(/[b][g]/i);
            var eleBgHo = $(this).attr('cell-in').match(/[.][b][g]/i);
            var eleTx = $(this).attr('cell-in').match(/[t][s]/i);
            var eleTxHo = $(this).attr('cell-in').match(/[.][t][s]/i);

            if (eleR == 'r') {
                $(this).find('input').css('border-radius', '' + radius[1] + 'px');
            }
            if (eleW == 'w') {
                $(this).find('input').css('width', '' + width[1] + '%');
            }
            if (eleH == 'h') {
                $(this).find('input').css('height', '' + height[1] + 'px');
            }
            if (eleBg == 'bg') {
                var backGroundNum = backGround[1] - 1;
                $(this).find('input').css('background-color', '' + colors[backGroundNum] + '');
            }

            if (eleBgHo == '.bg') {
                $(this).mouseenter(function () {
                    var backGroundHoverNum = backGroundHover[1] - 1;
                    $(this).find('input').css('background-color', '' + colors[backGroundHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var backGroundNum = backGround[1] - 1;
                    $(this).find('input').css('background-color', '' + colors[backGroundNum] + '');
                })
            }
            if (eleB == 'bo') {
                var borderNum = border[2] - 1;
                $(this).find('input').css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
            }
            if (eleBHo == '.bo') {
                $(this).mouseenter(function () {
                    var borderHoverNum = borderHover[2] - 1;
                    $(this).find('input').css('border', '' + borderHover[1] + 'px solid ' + colors[borderHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderNum = border[2] - 1;
                    $(this).find('input').css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
                })
            }

            if (eleBl == 'bl') {
                var borderLeftNum = borderLeft[2] - 1;
                $(this).find('input').css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                $(this).find('input').css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
            }
            if (eleBlHo == '.bl') {
                $(this).hover(function () {
                    var borderLeftHoverNum = borderLeftHover[2] - 1;
                    $(this).find('input').css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                    $(this).find('input').css('border-left', '' + borderLeftHover[1] + 'px solid ' + colors[borderLeftHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderLeftNum = borderLeft[2] - 1;
                    $(this).find('input').css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                    $(this).find('input').css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
                })
            }

            if (eleBr == 'br') {
                var borderRightNum = borderRight[2] - 1;
                $(this).find('input').css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
                $(this).find('input').css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
            }
            if (eleBrHo == '.br') {
                $(this).hover(function () {
                    var borderRightHoverNum = borderRightHover[2] - 1;
                    $(this).find('input').css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
                    $(this).find('input').css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
                })
            }

            if (eleBt == 'bt') {
                var borderTopNum = borderTop[2] - 1;
                $(this).find('input').css({ 'border-bottom': '0', 'border-right': '0', 'border-left': '0' })
                $(this).find('input').css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
            }
            if (eleBtHo == '.bt') {
                $(this).hover(function () {
                    var borderTopHoverNum = borderTopHover[2] - 1;
                    $(this).find('input').css({ 'border-bottom': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).find('input').css('border-top', '' + borderTopHover[1] + 'px solid ' + colors[borderTopHoverNum] + '');
                })
            }

            if (eleBb == 'bb') {
                var borderBottomNum = borderBottom[2] - 1;
                $(this).find('input').css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
                $(this).find('input').css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
            }
            if (eleBbHo == '.bb') {
                $(this).hover(function () {
                    var borderBottomHoverNum = borderBottomHover[2] - 1;
                    $(this).find('input').css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).find('input').css('border-bottom', '' + borderBottomHover[1] + 'px solid ' + colors[borderBottomHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderBottomNum = borderBottom[2] - 1;
                    $(this).find('input').css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).find('input').css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
                })
            }

            if (eleTx == 'ts') {
                var textNum = text[2] - 1;
                $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
            }
            if (eleTxHo == '.ts') {
                $(this).hover(function () {
                    var textHoverNum = textHover[2] - 1;
                    $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textHoverNum] + '' });
                })
                $(this).mouseleave(function () {
                    var textNum = text[2] - 1;
                    $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
                })
            }

        })
        $('[cell-in^="[-ic"]').each(function () {
            var text = $(this).attr('cell-in').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
            var textHover = $(this).attr('cell-in').match(/[.][t][s](\d{1,})[^\w\*](\d{1,})/i);

            var eleTx = $(this).attr('cell-in').match(/[t][s]/i);
            var eleTxHo = $(this).attr('cell-in').match(/[.][t][s]/i);

            if (eleTx == 'ts') {
                var textNum = text[2] - 1;
                $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
            }
            if (eleTxHo == '.ts') {
                $(this).hover(function () {
                    var textHoverNum = textHover[2] - 1;
                    $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textHoverNum] + '' });
                })
                $(this).mouseleave(function () {
                    var textNum = text[2] - 1;
                    $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
                })
            }

        })
        $('[cell-in^="[-ic"] > [cell-in^="[-ib"]').each(function () {
            var radius = $(this).attr('cell-in').match(/[-][r][^,]*?(\d{1,})*/i);
            var width = $(this).attr('cell-in').match(/[w][^,]*?(\d{1,})*/i);
            var height = $(this).attr('cell-in').match(/[h][^,]*?(\d{1,})*/i);

            var borderLeft = $(this).attr('cell-in').match(/[b][l](\d{1,})[^\w\*](\d{1,})/i);
            var borderRight = $(this).attr('cell-in').match(/[b][r](\d{1,})[^\w\*](\d{1,})/i);
            var borderTop = $(this).attr('cell-in').match(/[b][t](\d{1,})[^\w\*](\d{1,})/i);
            var borderBottom = $(this).attr('cell-in').match(/[b][b](\d{1,})[^\w\*](\d{1,})/i);
            var borderLeftHover = $(this).attr('cell-in').match(/[.][b][l](\d{1,})[^\w\*](\d{1,})/i);
            var borderRightHover = $(this).attr('cell-in').match(/[.][b][r](\d{1,})[^\w\*](\d{1,})/i);
            var borderTopHover = $(this).attr('cell-in').match(/[.][b][t](\d{1,})[^\w\*](\d{1,})/i);
            var borderBottomHover = $(this).attr('cell-in').match(/[.][b][b](\d{1,})[^\w\*](\d{1,})/i);
            var border = $(this).attr('cell-in').match(/[b][o](\d{1,})[^\w\*](\d{1,})/i);
            var borderHover = $(this).attr('cell-in').match(/[.][b][o](\d{1,})[^\w\*](\d{1,})/i);
            var backGround = $(this).attr('cell-in').match(/[-b][g][^,]*?(\d{1,})*/i);
            var backGroundHover = $(this).attr('cell-in').match(/[.][b][g][^,]*?(\d{1,})*/i);

            var text = $(this).attr('cell-in').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
            var textHover = $(this).attr('cell-in').match(/[.][t][s](\d{1,})[^\w\*](\d{1,})/i);

            var iconWidth = $(this).attr('cell-in').match(/[i][w](\d{1,})[^\w\*](\d{1,})/i);
            var iconHeight = $(this).attr('cell-in').match(/[i][h](\d{1,})[^\w\*](\d{1,})/i);
            var iconSize = $(this).attr('cell-in').match(/[i][s](\d{1,})[^\w\*](\d{1,})/i);
            var theamColor = $(this).attr('cell-in').match(/[i][c](\d{1,})[^\w\*](\d{1,})/i);
            var iconPadding = $(this).attr('cell-in').match(/[p](\d{1,})[^\w\*](\d{1,})/i);
            var iconPaddingLeft = $(this).attr('cell-in').match(/[p][l](\d{1,})[^\w\*](\d{1,})/i);
            var iconPaddingRight = $(this).attr('cell-in').match(/[p][r](\d{1,})[^\w\*](\d{1,})/i);
            var iconPaddingTop = $(this).attr('cell-in').match(/[p][t](\d{1,})[^\w\*](\d{1,})/i);
            var iconPaddingBottom = $(this).attr('cell-in').match(/[p][b](\d{1,})[^\w\*](\d{1,})/i);
            var iconBackGround = $(this).attr('cell-in').match(/[i][g](\d{1,})[^\w\*](\d{1,})/i);
            var iconBackGroundHover = $(this).attr('cell-in').match(/[.][i][g](\d{1,})[^\w\*](\d{1,})/i);

            var eleR = $(this).attr('cell-in').match(/[-][r]/i);
            var eleW = $(this).attr('cell-in').match(/[w]/i);
            var eleH = $(this).attr('cell-in').match(/[h]/i);

            var eleB = $(this).attr('cell-in').match(/[b][o]/i);
            var eleBl = $(this).attr('cell-in').match(/[b][l]/i);
            var eleBr = $(this).attr('cell-in').match(/[b][r]/i);
            var eleBt = $(this).attr('cell-in').match(/[b][t]/i);
            var eleBb = $(this).attr('cell-in').match(/[b][b]/i);
            var eleBlHo = $(this).attr('cell-in').match(/[.][b][l]/i);
            var eleBrHo = $(this).attr('cell-in').match(/[.][b][r]/i);
            var eleBtHo = $(this).attr('cell-in').match(/[.][b][t]/i);
            var eleBbHo = $(this).attr('cell-in').match(/[.][b][b]/i);
            var eleBHo = $(this).attr('cell-in').match(/[.][b][o]/i);

            var eleBg = $(this).attr('cell-in').match(/[b][g]/i);
            var eleBgHo = $(this).attr('cell-in').match(/[.][b][g]/i);

            var eleTx = $(this).attr('cell-in').match(/[t][s]/i);
            var eleTxHo = $(this).attr('cell-in').match(/[.][t][s]/i);

            var eleIw = $(this).attr('cell-in').match(/[i][w]/i);
            var eleIh = $(this).attr('cell-in').match(/[i][h]/i);
            var eleIs = $(this).attr('cell-in').match(/[i][s]/i);
            var eleTc = $(this).attr('cell-in').match(/[i][c]/i);
            var eleIcBg = $(this).attr('cell-in').match(/[i][g]/i);
            var eleIcBgHo = $(this).attr('cell-in').match(/[.][i][g]/i);
            var eleIp = $(this).attr('cell-in').match(/[p]/i);
            var eleIpl = $(this).attr('cell-in').match(/[p][l]/i);
            var eleIpr = $(this).attr('cell-in').match(/[p][r]/i);
            var eleIpt = $(this).attr('cell-in').match(/[p][t]/i);
            var eleIpb = $(this).attr('cell-in').match(/[p][b]/i);

            if (eleR == '-r') {
                $(this).css('border-radius', '' + radius[1] + 'px');
            }

            if (eleW == 'w') {
                $(this).find('input').css('width', '' + width[1] + '%');
            }

            if (eleH == 'h') {
                $(this).find('input').css('height', '' + height[1] + 'px');
            }

            if (eleIh == 'ih') {
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'height': '' + iconHeight[1] + 'px' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'height': '' + iconHeight[2] + 'px' });
            }

            if (eleIw == 'iw') {
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'width': '' + iconWidth[1] + 'px' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'width': '' + iconWidth[2] + 'px' });
            }

            if (eleIs == 'is') {
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'font-size': '' + iconSize[1] + 'px' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'font-size': '' + iconSize[2] + 'px' });
            }

            if (eleTc == 'ic') {
                var theamColorLeftNum = theamColor[1] - 1;
                var theamColorRightNum = theamColor[2] - 1;
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'color': '' + colors[theamColorLeftNum] + '' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'color': '' + colors[theamColorRightNum] + '' });
            }

            if (eleIp == 'p') {
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'padding': '' + iconPadding[1] + 'px' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'padding': '' + iconPadding[2] + 'px' });
            }

            if (eleIpl == 'pl') {
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'padding-left': '' + iconPaddingLeft[1] + 'px' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'padding-left': '' + iconPaddingLeft[2] + 'px' });
            }

            if (eleIpr == 'pr') {
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'padding-right': '' + iconPaddingRight[1] + 'px' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'padding-right': '' + iconPaddingRight[2] + 'px' });
            }

            if (eleIpt == 'pt') {
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'padding-top': '' + iconPaddingTop[1] + 'px' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'padding-top': '' + iconPaddingTop[2] + 'px' });
            }

            if (eleIpb == 'pb') {
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'padding-bottom': '' + iconPaddingBottom[1] + 'px' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'padding-bottom': '' + iconPaddingBottom[2] + 'px' });
            }

            if (eleBg == 'bg') {
                var backGroundNum = backGround[1] - 1;
                $(this).find('input').css('background-color', '' + colors[backGroundNum] + '');

            }

            if (eleBgHo == '.bg') {
                $(this).mouseenter(function () {
                    var backGroundHoverNum = backGroundHover[1] - 1;
                    $(this).find('input').css('background-color', '' + colors[backGroundHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var backGroundNum = backGround[1] - 1;
                    $(this).find('input').css('background-color', '' + colors[backGroundNum] + '');
                })
            }

            if (eleIcBg == 'ig') {
                var iconBackGroundLeftNum = iconBackGround[1] - 1;
                var iconBackGroundRightNum = iconBackGround[2] - 1;
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css('background-color', '' + colors[iconBackGroundLeftNum] + '');
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css('background-color', '' + colors[iconBackGroundRightNum] + '');

            }

            if (eleIcBgHo == '.ig') {
                $(this).mouseenter(function () {
                    var iconBackGroundLeftHoverNum = iconBackGroundHover[1] - 1;
                    var iconBackGroundRightHoverNum = iconBackGroundHover[2] - 1;
                    $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css('background-color', '' + colors[iconBackGroundLeftHoverNum] + '');
                    $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css('background-color', '' + colors[iconBackGroundRightHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var iconBackGroundLeftNum = iconBackGround[1] - 1;
                    var iconBackGroundRightNum = iconBackGround[2] - 1;
                    $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css('background-color', '' + colors[iconBackGroundLeftNum] + '');
                    $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css('background-color', '' + colors[iconBackGroundRightNum] + '');
                })
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
                $(this).css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
            }
            if (eleBlHo == '.bl') {
                $(this).hover(function () {
                    var borderLeftHoverNum = borderLeftHover[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                    $(this).css('border-left', '' + borderLeftHover[1] + 'px solid ' + colors[borderLeftHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderLeftNum = borderLeft[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                    $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
                })
            }

            if (eleBr == 'br') {
                var borderRightNum = borderRight[2] - 1;
                $(this).css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
                $(this).css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
            }
            if (eleBrHo == '.br') {
                $(this).hover(function () {
                    var borderRightHoverNum = borderRightHover[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
                    $(this).css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderRightNum = borderRight[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
                    $(this).css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
                })
            }

            if (eleBt == 'bt') {
                var borderTopNum = borderTop[2] - 1;
                $(this).css({ 'border-bottom': '0', 'border-right': '0', 'border-left': '0' })
                $(this).css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
            }
            if (eleBtHo == '.bt') {
                $(this).hover(function () {
                    var borderTopHoverNum = borderTopHover[2] - 1;
                    $(this).css({ 'border-bottom': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).css('border-top', '' + borderTopHover[1] + 'px solid ' + colors[borderTopHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderTopNum = borderTop[2] - 1;
                    $(this).css({ 'border-bottom': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
                })
            }

            if (eleBb == 'bb') {
                var borderBottomNum = borderBottom[2] - 1;
                $(this).css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
                $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
            }
            if (eleBbHo == '.bb') {
                $(this).hover(function () {
                    var borderBottomHoverNum = borderBottomHover[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).css('border-bottom', '' + borderBottomHover[1] + 'px solid ' + colors[borderBottomHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderBottomNum = borderBottom[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
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
        $('[cell-in^="[-rd"]').each(function () {
            var widthOuter = $(this).attr('cell-in').match(/[w][o][^,]*?(\d{1,})*/i);
            var widthInner = $(this).attr('cell-in').match(/[w][i][^,]*?(\d{1,})*/i);
            var radiusOuter = $(this).attr('cell-in').match(/[r][o][^,]*?(\d{1,})*/i);
            var radiusInner = $(this).attr('cell-in').match(/[r][i][^,]*?(\d{1,})*/i);
            var borderOuter = $(this).attr('cell-in').match(/[b][o](\d{1,})[^\w\*](\d{1,})/i);
            var borderInner = $(this).attr('cell-in').match(/[b][i](\d{1,})[^\w\*](\d{1,})/i);
            var borderOuterHover = $(this).attr('cell-in').match(/[.][b][o](\d{1,})[^\w\*](\d{1,})/i);
            var borderInnerHover = $(this).attr('cell-in').match(/[.][b][i](\d{1,})[^\w\*](\d{1,})/i);

            var backGroundOuter = $(this).attr('cell-in').match(/[g][o](\d{1,})*/i);
            var backGroundInner = $(this).attr('cell-in').match(/[g][i](\d{1,})*/i);
            var backGroundOuterHover = $(this).attr('cell-in').match(/[.][g][o](\d{1,})*/i);
            var backGroundInnerHover = $(this).attr('cell-in').match(/[.][g][i](\d{1,})*/i);

            var text = $(this).attr('cell-in').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
            var textHover = $(this).attr('cell-in').match(/[.][t][s](\d{1,})[^\w\*](\d{1,})/i);


            var eleWo = $(this).attr('cell-in').match(/[w][o]/i);
            var eleA = $(this).attr('cell-in').match(/[a]/i);
            var eleWi = $(this).attr('cell-in').match(/[w][i]/i);
            var eleRo = $(this).attr('cell-in').match(/[r][o]/i);
            var eleRi = $(this).attr('cell-in').match(/[r][i]/i);
            var eleBo = $(this).attr('cell-in').match(/[b][o]/i);
            var eleBi = $(this).attr('cell-in').match(/[b][i]/i);
            var eleBoH = $(this).attr('cell-in').match(/[.][b][o]/i);
            var eleBiH = $(this).attr('cell-in').match(/[.][b][i]/i);
            var eleGo = $(this).attr('cell-in').match(/[g][o]/i);
            var eleGi = $(this).attr('cell-in').match(/[g][i]/i);
            var eleGoH = $(this).attr('cell-in').match(/[.][g][o]/i);
            var eleGiH = $(this).attr('cell-in').match(/[.][g][i]/i);

            var eleTx = $(this).attr('cell-in').match(/[t][s]/i);
            var eleTxHo = $(this).attr('cell-in').match(/[.][t][s]/i);

            var rd = $(this).attr('cell-in').match(/[-][r][d](\d{1,})/i);
            var rdValue = '[-rd' + rd[1] + ':';

            $('[cell-in^="' + rdValue + '"] [cell-in^="[-ra]"]').each(function (index) {
                $(this).attr("");
                $(this).attr("id", 'ra-' + index + '');
            })
            $('[cell-in^="' + rdValue + '"] [cell-in^="[-ra]"] input').each(function (index) {
                $(this).attr("");
                $(this).attr("id", 'in-' + index + '');
            })

            $('[cell-in^="' + rdValue + '"] [cell-in^="[-ra]"]').click(function () {
                var getId = this.id;

                if (eleBoH == '.bo') {
                    var borderOuterHoverNum = borderOuterHover[2] - 1;
                    $('[cell-in^="' + rdValue + '"] #' + getId + '').css('border', '' + borderOuterHover[1] + 'px solid ' + colors[borderOuterHoverNum] + '');
                    if (eleBo == 'bo') {
                        var borderOuterNum = borderOuter[2] - 1;
                        $('[cell-in^="' + rdValue + '"] [cell-in^="[-ra]"]:not([cell-in^="' + rdValue + '"] #' + getId + ')').css('border', '' + borderOuter[1] + 'px solid ' + colors[borderOuterNum] + '');
                    }
                }
                if (eleBiH == '.bi') {
                    var borderInnerHoverNum = borderInnerHover[2] - 1;
                    $('[cell-in^="' + rdValue + '"] #' + getId + ' input').css('border', '' + borderInnerHover[1] + 'px solid ' + colors[borderInnerHoverNum] + '');
                    if (eleBi == 'bi') {
                        var borderInnerNum = borderInner[2] - 1;
                        $('[cell-in^="' + rdValue + '"] [cell-in^="[-ra"] input:not([cell-in^="' + rdValue + '"] #' + getId + ' input)').css('border', '' + borderInner[1] + 'px solid ' + colors[borderInnerNum] + '');
                    }
                }
                if (eleGoH == '.go') {
                    var backGroundOuterHoverNum = backGroundOuterHover[1] - 1;
                    $('[cell-in^="' + rdValue + '"] #' + getId + '').css('background-color', '' + colors[backGroundOuterHoverNum] + '');
                    if (eleGo == 'go') {
                        var backGroundOuterNum = backGroundOuter[1] - 1;
                        $('[cell-in^="' + rdValue + '"] [cell-in^="[-ra]"]:not([cell-in^="' + rdValue + '"] #' + getId + ')').css('background-color', '' + colors[backGroundOuterNum] + '');
                    }
                }
                if (eleGiH == '.gi') {
                    var backGroundInnerHoverNum = backGroundInnerHover[1] - 1;
                    $('[cell-in^="' + rdValue + '"] #' + getId + ' input').css('background-color', '' + colors[backGroundInnerHoverNum] + '');
                    if (eleGi == 'gi') {
                        var backGroundInnerNum = backGroundInner[1] - 1;
                        $('[cell-in^="' + rdValue + '"] [cell-in^="[-ra"] input:not([cell-in^="' + rdValue + '"] #' + getId + ' input)').css('background-color', '' + colors[backGroundInnerNum] + '');
                    }
                }
            })
            if (eleA == 'a') {
                var ids=$(this).find('[cell-in^="[-ra]"]').attr('id');
                console.log(ids)
                jQuery(function(){
                    jQuery('[cell-in^="' + rdValue + '"] #'+ids+'').click();
                });
            }
            if (eleWi == 'wi') {
                $(this).find('input').css({ 'width': '' + widthInner[1] + 'px', 'height': '' + widthInner[1] + 'px' });
            }
            if (eleWo == 'wo') {
                $(this).find('[cell-in^="[-ra"]').css({ 'width': '' + widthOuter[1] + 'px', 'height': '' + widthOuter[1] + 'px' });
            }
            if (eleRo == 'ro') {
                $(this).find('[cell-in^="[-ra"]').css({ 'border-radius': '' + radiusOuter[1] + '%' });
            }
            if (eleRi == 'ri') {
                $(this).find('input').css({ 'border-radius': '' + radiusInner[1] + '%' });
            }

            if (eleTx == 'ts') {
                var textNum = text[2] - 1;
                $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
            }
            if (eleTxHo == '.ts') {
                $(this).hover(function () {
                    var textHoverNum = textHover[2] - 1;
                    $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textHoverNum] + '' });
                })
                $(this).mouseleave(function () {
                    var textNum = text[2] - 1;
                    $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
                })
            }

        })
        $('[cell-in^="[-se"]').each(function () {
            var text = $(this).attr('cell-in').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
            var textHover = $(this).attr('cell-in').match(/[.][t][s](\d{1,})[^\w\*](\d{1,})/i);

            var eleTx = $(this).attr('cell-in').match(/[t][s]/i);
            var eleTxHo = $(this).attr('cell-in').match(/[.][t][s]/i);

            if (eleTx == 'ts') {
                var textNum = text[2] - 1;
                $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
            }
            if (eleTxHo == '.ts') {
                $(this).hover(function () {
                    var textHoverNum = textHover[2] - 1;
                    $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textHoverNum] + '' });
                })
                $(this).mouseleave(function () {
                    var textNum = text[2] - 1;
                    $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
                })
            }

        })
        $('[cell-in^="[-se"] > [cell-in^="[-sa"] > [cell-in^="[-sb"]').each(function () {
            var radius = $(this).attr('cell-in').match(/[-][r][^,]*?(\d{1,})*/i);
            var width = $(this).attr('cell-in').match(/[w][^,]*?(\d{1,})*/i);
            var height = $(this).attr('cell-in').match(/[h][^,]*?(\d{1,})*/i);

            var borderLeft = $(this).attr('cell-in').match(/[b][l](\d{1,})[^\w\*](\d{1,})/i);
            var borderRight = $(this).attr('cell-in').match(/[b][r](\d{1,})[^\w\*](\d{1,})/i);
            var borderTop = $(this).attr('cell-in').match(/[b][t](\d{1,})[^\w\*](\d{1,})/i);
            var borderBottom = $(this).attr('cell-in').match(/[b][b](\d{1,})[^\w\*](\d{1,})/i);
            var borderLeftHover = $(this).attr('cell-in').match(/[.][b][l](\d{1,})[^\w\*](\d{1,})/i);
            var borderRightHover = $(this).attr('cell-in').match(/[.][b][r](\d{1,})[^\w\*](\d{1,})/i);
            var borderTopHover = $(this).attr('cell-in').match(/[.][b][t](\d{1,})[^\w\*](\d{1,})/i);
            var borderBottomHover = $(this).attr('cell-in').match(/[.][b][b](\d{1,})[^\w\*](\d{1,})/i);
            var border = $(this).attr('cell-in').match(/[b][o](\d{1,})[^\w\*](\d{1,})/i);
            var borderHover = $(this).attr('cell-in').match(/[.][b][o](\d{1,})[^\w\*](\d{1,})/i);
            var backGround = $(this).attr('cell-in').match(/[-b][g][^,]*?(\d{1,})*/i);
            var backGroundHover = $(this).attr('cell-in').match(/[.][b][g][^,]*?(\d{1,})*/i);

            var text = $(this).attr('cell-in').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
            var textHover = $(this).attr('cell-in').match(/[.][t][s](\d{1,})[^\w\*](\d{1,})/i);

            var iconWidth = $(this).attr('cell-in').match(/[i][w](\d{1,})[^\w\*](\d{1,})/i);
            var iconHeight = $(this).attr('cell-in').match(/[i][h](\d{1,})[^\w\*](\d{1,})/i);
            var iconSize = $(this).attr('cell-in').match(/[i][s](\d{1,})[^\w\*](\d{1,})/i);
            var iconColor = $(this).attr('cell-in').match(/[i][c](\d{1,})[^\w\*](\d{1,})/i);
            var iconPadding = $(this).attr('cell-in').match(/[p](\d{1,})[^\w\*](\d{1,})/i);
            var iconPaddingLeft = $(this).attr('cell-in').match(/[p][l](\d{1,})[^\w\*](\d{1,})/i);
            var iconPaddingRight = $(this).attr('cell-in').match(/[p][r](\d{1,})[^\w\*](\d{1,})/i);
            var iconPaddingTop = $(this).attr('cell-in').match(/[p][t](\d{1,})[^\w\*](\d{1,})/i);
            var iconPaddingBottom = $(this).attr('cell-in').match(/[p][b](\d{1,})[^\w\*](\d{1,})/i);
            var iconBackGround = $(this).attr('cell-in').match(/[i][g](\d{1,})[^\w\*](\d{1,})/i);
            var iconBackGroundHover = $(this).attr('cell-in').match(/[.][i][g](\d{1,})[^\w\*](\d{1,})/i);

            var eleR = $(this).attr('cell-in').match(/[-][r]/i);
            var eleW = $(this).attr('cell-in').match(/[w]/i);
            var eleH = $(this).attr('cell-in').match(/[h]/i);

            var eleB = $(this).attr('cell-in').match(/[b][o]/i);
            var eleBl = $(this).attr('cell-in').match(/[b][l]/i);
            var eleBr = $(this).attr('cell-in').match(/[b][r]/i);
            var eleBt = $(this).attr('cell-in').match(/[b][t]/i);
            var eleBb = $(this).attr('cell-in').match(/[b][b]/i);
            var eleBlHo = $(this).attr('cell-in').match(/[.][b][l]/i);
            var eleBrHo = $(this).attr('cell-in').match(/[.][b][r]/i);
            var eleBtHo = $(this).attr('cell-in').match(/[.][b][t]/i);
            var eleBbHo = $(this).attr('cell-in').match(/[.][b][b]/i);
            var eleBHo = $(this).attr('cell-in').match(/[.][b][o]/i);

            var eleBg = $(this).attr('cell-in').match(/[b][g]/i);
            var eleBgHo = $(this).attr('cell-in').match(/[.][b][g]/i);

            var eleTx = $(this).attr('cell-in').match(/[t][s]/i);
            var eleTxHo = $(this).attr('cell-in').match(/[.][t][s]/i);

            var eleIw = $(this).attr('cell-in').match(/[i][w]/i);
            var eleIh = $(this).attr('cell-in').match(/[i][h]/i);
            var eleIs = $(this).attr('cell-in').match(/[i][s]/i);
            var eleIc = $(this).attr('cell-in').match(/[i][c]/i);
            var eleIcBg = $(this).attr('cell-in').match(/[i][g]/i);
            var eleIcBgHo = $(this).attr('cell-in').match(/[.][i][g]/i);
            var eleIp = $(this).attr('cell-in').match(/[p]/i);
            var eleIpl = $(this).attr('cell-in').match(/[p][l]/i);
            var eleIpr = $(this).attr('cell-in').match(/[p][r]/i);
            var eleIpt = $(this).attr('cell-in').match(/[p][t]/i);
            var eleIpb = $(this).attr('cell-in').match(/[p][b]/i);

            if (eleR == '-r') {
                $(this).css('border-radius', '' + radius[1] + 'px');
            }

            if (eleW == 'w') {
                $(this).css('width', '' + width[1] + '%');
            }

            if (eleH == 'h') {
                $(this).css('height', '' + height[1] + 'px');
            }

            if (eleIh == 'ih') {
                $(this).css({ 'height': '' + iconHeight[1] + 'px' });
                $(this).css({ 'height': '' + iconHeight[2] + 'px' });
            }

            if (eleIw == 'iw') {
                $(this).css({ 'width': '' + iconWidth[1] + 'px' });
                $(this).css({ 'width': '' + iconWidth[2] + 'px' });
            }

            if (eleIs == 'is') {
                $(this).css({ 'font-size': '' + iconSize[1] + 'px' });
                $(this).css({ 'font-size': '' + iconSize[2] + 'px' });
            }

            if (eleIc == 'ic') {
                var iconColorLeftNum = iconColor[1] - 1;
                var iconColorRightNum = iconColor[2] - 1;
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'color': '' + colors[iconColorLeftNum] + '' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'color': '' + colors[iconColorRightNum] + '' });
            }

            if (eleIp == 'p') {
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'padding': '' + iconPadding[1] + 'px' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'padding': '' + iconPadding[2] + 'px' });
            }

            if (eleIpl == 'pl') {
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'padding-left': '' + iconPaddingLeft[1] + 'px' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'padding-left': '' + iconPaddingLeft[2] + 'px' });
            }

            if (eleIpr == 'pr') {
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'padding-right': '' + iconPaddingRight[1] + 'px' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'padding-right': '' + iconPaddingRight[2] + 'px' });
            }

            if (eleIpt == 'pt') {
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'padding-top': '' + iconPaddingTop[1] + 'px' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'padding-top': '' + iconPaddingTop[2] + 'px' });
            }

            if (eleIpb == 'pb') {
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css({ 'padding-bottom': '' + iconPaddingBottom[1] + 'px' });
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css({ 'padding-bottom': '' + iconPaddingBottom[2] + 'px' });
            }

            if (eleBg == 'bg') {
                var backGroundNum = backGround[1] - 1;
                $(this).find('select').css('background-color', '' + colors[backGroundNum] + '');

            }

            if (eleBgHo == '.bg') {
                $(this).mouseenter(function () {
                    var backGroundHoverNum = backGroundHover[1] - 1;
                    $(this).find('select').css('background-color', '' + colors[backGroundHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var backGroundNum = backGround[1] - 1;
                    $(this).find('select').css('background-color', '' + colors[backGroundNum] + '');
                })
            }

            if (eleIcBg == 'ig') {
                var iconBackGroundLeftNum = iconBackGround[1] - 1;
                var iconBackGroundRightNum = iconBackGround[2] - 1;
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css('background-color', '' + colors[iconBackGroundLeftNum] + '');
                $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css('background-color', '' + colors[iconBackGroundRightNum] + '');

            }

            if (eleIcBgHo == '.ig') {
                $(this).mouseenter(function () {
                    var iconBackGroundLeftHoverNum = iconBackGroundHover[1] - 1;
                    var iconBackGroundRightHoverNum = iconBackGroundHover[2] - 1;
                    $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css('background-color', '' + colors[iconBackGroundLeftHoverNum] + '');
                    $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css('background-color', '' + colors[iconBackGroundRightHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var iconBackGroundLeftNum = iconBackGround[1] - 1;
                    var iconBackGroundRightNum = iconBackGround[2] - 1;
                    $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-li"]').css('background-color', '' + colors[iconBackGroundLeftNum] + '');
                    $(this).find('div[cell-in^="["][cell-in$="]"][cell-in*="-ri"]').css('background-color', '' + colors[iconBackGroundRightNum] + '');
                })
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
                $(this).css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
            }
            if (eleBlHo == '.bl') {
                $(this).hover(function () {
                    var borderLeftHoverNum = borderLeftHover[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                    $(this).css('border-left', '' + borderLeftHover[1] + 'px solid ' + colors[borderLeftHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderLeftNum = borderLeft[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                    $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
                })
            }

            if (eleBr == 'br') {
                var borderRightNum = borderRight[2] - 1;
                $(this).css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
                $(this).css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
            }
            if (eleBrHo == '.br') {
                $(this).hover(function () {
                    var borderRightHoverNum = borderRightHover[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
                    $(this).css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderRightNum = borderRight[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
                    $(this).css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
                })
            }

            if (eleBt == 'bt') {
                var borderTopNum = borderTop[2] - 1;
                $(this).css({ 'border-bottom': '0', 'border-right': '0', 'border-left': '0' })
                $(this).css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
            }
            if (eleBtHo == '.bt') {
                $(this).hover(function () {
                    var borderTopHoverNum = borderTopHover[2] - 1;
                    $(this).css({ 'border-bottom': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).css('border-top', '' + borderTopHover[1] + 'px solid ' + colors[borderTopHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderTopNum = borderTop[2] - 1;
                    $(this).css({ 'border-bottom': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
                })
            }

            if (eleBb == 'bb') {
                var borderBottomNum = borderBottom[2] - 1;
                $(this).css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
                $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
            }
            if (eleBbHo == '.bb') {
                $(this).hover(function () {
                    var borderBottomHoverNum = borderBottomHover[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).css('border-bottom', '' + borderBottomHover[1] + 'px solid ' + colors[borderBottomHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderBottomNum = borderBottom[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
                })
            }

            if (eleTx == 'ts') {
                var textNum = text[2] - 1;
                $(this).find('select').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
                $(this).find('option').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
            }
            if (eleTxHo == '.ts') {
                $(this).hover(function () {
                    var textHoverNum = textHover[2] - 1;
                    $(this).find('select').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textHoverNum] + '' });
                })
                $(this).mouseleave(function () {
                    var textNum = text[2] - 1;
                    $(this).find('select').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
                })
            }

        })
        $('[cell-in^="[-se"] > [cell-in^="[-sa"] > [cell-in^="[-ob"]').each(function () {
            var radius = $(this).attr('cell-in').match(/[-][r][^,]*?(\d{1,})*/i);
            var width = $(this).attr('cell-in').match(/[w][^,]*?(\d{1,})*/i);
            var height = $(this).attr('cell-in').match(/[h][^,]*?(\d{1,})*/i);

            var borderLeft = $(this).attr('cell-in').match(/[b][l](\d{1,})[^\w\*](\d{1,})/i);
            var borderRight = $(this).attr('cell-in').match(/[b][r](\d{1,})[^\w\*](\d{1,})/i);
            var borderTop = $(this).attr('cell-in').match(/[b][t](\d{1,})[^\w\*](\d{1,})/i);
            var borderBottom = $(this).attr('cell-in').match(/[b][b](\d{1,})[^\w\*](\d{1,})/i);
            var borderLeftHover = $(this).attr('cell-in').match(/[.][b][l](\d{1,})[^\w\*](\d{1,})/i);
            var borderRightHover = $(this).attr('cell-in').match(/[.][b][r](\d{1,})[^\w\*](\d{1,})/i);
            var borderTopHover = $(this).attr('cell-in').match(/[.][b][t](\d{1,})[^\w\*](\d{1,})/i);
            var borderBottomHover = $(this).attr('cell-in').match(/[.][b][b](\d{1,})[^\w\*](\d{1,})/i);
            var border = $(this).attr('cell-in').match(/[b][o](\d{1,})[^\w\*](\d{1,})/i);
            var borderHover = $(this).attr('cell-in').match(/[.][b][o](\d{1,})[^\w\*](\d{1,})/i);
            var backGround = $(this).attr('cell-in').match(/[-b][g][^,]*?(\d{1,})*/i);
            var backGroundHover = $(this).attr('cell-in').match(/[.][b][g][^,]*?(\d{1,})*/i);

            var text = $(this).attr('cell-in').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
            var textHover = $(this).attr('cell-in').match(/[.][t][s](\d{1,})[^\w\*](\d{1,})/i);

            var iconWidth = $(this).attr('cell-in').match(/[i][w](\d{1,})[^\w\*](\d{1,})/i);
            var iconHeight = $(this).attr('cell-in').match(/[i][h](\d{1,})[^\w\*](\d{1,})/i);
            var iconSize = $(this).attr('cell-in').match(/[i][s](\d{1,})[^\w\*](\d{1,})/i);
            var theamColor = $(this).attr('cell-in').match(/[t][c](\d{1,})[^\w\*](\d{1,})/i);
            var iconPadding = $(this).attr('cell-in').match(/[p](\d{1,})[^\w\*](\d{1,})/i);
            var iconPaddingLeft = $(this).attr('cell-in').match(/[p][l](\d{1,})[^\w\*](\d{1,})/i);
            var iconPaddingRight = $(this).attr('cell-in').match(/[p][r](\d{1,})[^\w\*](\d{1,})/i);
            var iconPaddingTop = $(this).attr('cell-in').match(/[p][t](\d{1,})[^\w\*](\d{1,})/i);
            var iconPaddingBottom = $(this).attr('cell-in').match(/[p][b](\d{1,})[^\w\*](\d{1,})/i);
            var iconBackGround = $(this).attr('cell-in').match(/[i][g](\d{1,})[^\w\*](\d{1,})/i);
            var iconBackGroundHover = $(this).attr('cell-in').match(/[.][i][g](\d{1,})[^\w\*](\d{1,})/i);

            var eleR = $(this).attr('cell-in').match(/[-][r]/i);
            var eleW = $(this).attr('cell-in').match(/[w]/i);
            var eleH = $(this).attr('cell-in').match(/[h]/i);

            var eleB = $(this).attr('cell-in').match(/[b][o]/i);
            var eleBl = $(this).attr('cell-in').match(/[b][l]/i);
            var eleBr = $(this).attr('cell-in').match(/[b][r]/i);
            var eleBt = $(this).attr('cell-in').match(/[b][t]/i);
            var eleBb = $(this).attr('cell-in').match(/[b][b]/i);
            var eleBlHo = $(this).attr('cell-in').match(/[.][b][l]/i);
            var eleBrHo = $(this).attr('cell-in').match(/[.][b][r]/i);
            var eleBtHo = $(this).attr('cell-in').match(/[.][b][t]/i);
            var eleBbHo = $(this).attr('cell-in').match(/[.][b][b]/i);
            var eleBHo = $(this).attr('cell-in').match(/[.][b][o]/i);

            var eleBg = $(this).attr('cell-in').match(/[b][g]/i);
            var eleBgHo = $(this).attr('cell-in').match(/[.][b][g]/i);

            var eleTx = $(this).attr('cell-in').match(/[t][s]/i);
            var eleTxHo = $(this).attr('cell-in').match(/[.][t][s]/i);

            var eleIw = $(this).attr('cell-in').match(/[i][w]/i);
            var eleIh = $(this).attr('cell-in').match(/[i][h]/i);
            var eleIs = $(this).attr('cell-in').match(/[i][s]/i);
            var eleTc = $(this).attr('cell-in').match(/[t][c]/i);
            var eleIcBg = $(this).attr('cell-in').match(/[i][g]/i);
            var eleIcBgHo = $(this).attr('cell-in').match(/[.][i][g]/i);
            var eleIp = $(this).attr('cell-in').match(/[p]/i);
            var eleIpl = $(this).attr('cell-in').match(/[p][l]/i);
            var eleIpr = $(this).attr('cell-in').match(/[p][r]/i);
            var eleIpt = $(this).attr('cell-in').match(/[p][t]/i);
            var eleIpb = $(this).attr('cell-in').match(/[p][b]/i);

            if (eleR == '-r') {
                $(this).css('border-radius', '' + radius[1] + 'px');
            }

            if (eleW == 'w') {
                $(this).css('width', '' + width[1] + '%');
            }

            if (eleH == 'h') {
                $(this).css('height', '' + height[1] + 'px');
            }

            if (eleIh == 'ih') {
                $(this).find('option').css({ 'height': '' + iconHeight[1] + 'px' });
            }

            if (eleIw == 'iw') {
                $(this).find('option').css({ 'width': '' + iconWidth[1] + 'px' });
            }


            if (eleIp == 'p') {
                $(this).css({ 'padding': '' + iconPadding[1] + 'px' });
            }

            if (eleIpl == 'pl') {
                $(this).css({ 'padding-left': '' + iconPaddingLeft[1] + 'px' });
            }

            if (eleIpr == 'pr') {
                $(this).css({ 'padding-right': '' + iconPaddingRight[1] + 'px' });
            }

            if (eleIpt == 'pt') {
                $(this).css({ 'padding-top': '' + iconPaddingTop[1] + 'px' });
            }

            if (eleIpb == 'pb') {
                $(this).css({ 'padding-bottom': '' + iconPaddingBottom[1] + 'px' });
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

            if (eleIcBg == 'ig') {
                var iconBackGroundLeftNum = iconBackGround[1] - 1;
                $(this).find('option').css('background-color', '' + colors[iconBackGroundLeftNum] + '');
            }

            if (eleIcBgHo == '.ig') {
                $(this).mouseenter(function () {
                    var iconBackGroundLeftHoverNum = iconBackGroundHover[1] - 1;
                    $(this).find('option').css('background-color', '' + colors[iconBackGroundLeftHoverNum] + '');

                })
                $(this).mouseleave(function () {
                    var iconBackGroundLeftNum = iconBackGround[1] - 1;
                    $(this).find('option').css('background-color', '' + colors[iconBackGroundLeftNum] + '');

                })
            }

            if (eleB == 'bo') {
                var borderNum = border[2] - 1;
                $(this).find('option').css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
            }
            if (eleBHo == '.bo') {
                $(this).mouseenter(function () {
                    var borderHoverNum = borderHover[2] - 1;
                    $(this).find('option').css('border', '' + border[1] + 'px solid ' + colors[borderHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderNum = border[2] - 1;
                    $(this).find('option').css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
                })
            }

            if (eleBl == 'bl') {
                var borderLeftNum = borderLeft[2] - 1;
                $(this).find('option').css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                $(this).find('option').css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
            }
            if (eleBlHo == '.bl') {
                $(this).hover(function () {
                    var borderLeftHoverNum = borderLeftHover[2] - 1;
                    $(this).find('option').css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                    $(this).find('option').css('border-left', '' + borderLeftHover[1] + 'px solid ' + colors[borderLeftHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderLeftNum = borderLeft[2] - 1;
                    $(this).find('option').css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                    $(this).find('option').css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
                })
            }

            if (eleBr == 'br') {
                var borderRightNum = borderRight[2] - 1;
                $(this).find('option').css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
                $(this).find('option').css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
            }
            if (eleBrHo == '.br') {
                $(this).hover(function () {
                    var borderRightHoverNum = borderRightHover[2] - 1;
                    $(this).find('option').css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
                    $(this).find('option').css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderRightNum = borderRight[2] - 1;
                    $(this).find('option').css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
                    $(this).find('option').css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
                })
            }

            if (eleBt == 'bt') {
                var borderTopNum = borderTop[2] - 1;
                $(this).find('option').css({ 'border-bottom': '0', 'border-right': '0', 'border-left': '0' })
                $(this).find('option').css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
            }
            if (eleBtHo == '.bt') {
                $(this).hover(function () {
                    var borderTopHoverNum = borderTopHover[2] - 1;
                    $(this).find('option').css({ 'border-bottom': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).find('option').css('border-top', '' + borderTopHover[1] + 'px solid ' + colors[borderTopHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderTopNum = borderTop[2] - 1;
                    $(this).find('option').css({ 'border-bottom': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).find('option').css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
                })
            }

            if (eleBb == 'bb') {
                var borderBottomNum = borderBottom[2] - 1;
                $(this).find('option').css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
                $(this).find('option').css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
            }
            if (eleBbHo == '.bb') {
                $(this).hover(function () {
                    var borderBottomHoverNum = borderBottomHover[2] - 1;
                    $(this).find('option').css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).find('option').css('border-bottom', '' + borderBottomHover[1] + 'px solid ' + colors[borderBottomHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderBottomNum = borderBottom[2] - 1;
                    $(this).find('option').css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).find('option').css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
                })
            }

            if (eleTx == 'ts') {
                var textNum = text[2] - 1;
                $(this).find('option').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
            }
            if (eleTxHo == '.ts') {
                $(this).hover(function () {
                    var textHoverNum = textHover[2] - 1;
                    $(this).find('option').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textHoverNum] + '' });
                })
                $(this).mouseleave(function () {
                    var textNum = text[2] - 1;
                    $(this).find('option').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
                })
            }

        })
        $('[cell-in^="[-se"] > [cell-in^="[-sa"] > [cell-in^="[-sb"]').each(function () {

            var text = $(this).attr('cell-in').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
            var textHover = $(this).attr('cell-in').match(/[.][t][s](\d{1,})[^\w\*](\d{1,})/i);


            var eleTx = $(this).attr('cell-in').match(/[t][s]/i);
            var eleTxHo = $(this).attr('cell-in').match(/[.][t][s]/i);

            if (eleTx == 'ts') {
                var textNum = text[2] - 1;
                $(this).find('select').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
            }
            if (eleTxHo == '.ts') {
                $(this).hover(function () {
                    var textHoverNum = textHover[2] - 1;
                    $(this).find('select').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textHoverNum] + '' });
                })
                $(this).mouseleave(function () {
                    var textNum = text[2] - 1;
                    $(this).find('select').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
                })
            }

        })
        $('[cell-in^="[-ch"]').each(function () {
            var markWidth = $(this).attr('cell-in').match(/[m][w][^,]*?(\d{1,})*/i);
            var markHeight = $(this).attr('cell-in').match(/[m][h][^,]*?(\d{1,})*/i);
            var mark = $(this).attr('cell-in').match(/[-][m][a](\d{1,})[^\w\*](\d{1,})/i);
            var markTop = $(this).attr('cell-in').match(/[-][m][t](\d{1,})/i);
            var markBottom = $(this).attr('cell-in').match(/[-][m][b](\d{1,})/i);
            var markLeft = $(this).attr('cell-in').match(/[-][m][l](\d{1,})/i);
            var markRight = $(this).attr('cell-in').match(/[-][m][r](\d{1,})/i);
            var markHover = $(this).attr('cell-in').match(/[.][m][a](\d{1,})[^\w\*](\d{1,})/i);
            var text = $(this).attr('cell-in').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
            var textHover = $(this).attr('cell-in').match(/[.][t][s](\d{1,})[^\w\*](\d{1,})/i);

            var eleTx = $(this).attr('cell-in').match(/[t][s]/i);
            var eleTxHo = $(this).attr('cell-in').match(/[.][t][s]/i);
            var eleM = $(this).attr('cell-in').match(/[-][m][a]/i);
            var eleMHo = $(this).attr('cell-in').match(/[.][m][a]/i);
            var eleMw = $(this).attr('cell-in').match(/[m][w]/i);
            var eleMh = $(this).attr('cell-in').match(/[m][h]/i);
            var eleMt = $(this).attr('cell-in').match(/[m][t]/i);
            var eleMb = $(this).attr('cell-in').match(/[m][b]/i);
            var eleMl = $(this).attr('cell-in').match(/[m][l]/i);
            var eleMr = $(this).attr('cell-in').match(/[m][r]/i);

            if (eleMw == 'mw') {
                $(this).find('[cell-in^="[-ma"]').css('width', '' + markWidth[1] + 'px');
            }
            if (eleMh == 'mh') {
                $(this).find('[cell-in^="[-ma"]').css('height', '' + markHeight[1] + 'px');
            }

            if (eleM == '-ma') {
                var markNum = mark[2] - 1;
                $(this).find('[cell-in^="[-ma"]').css('border-bottom', '' + mark[1] + 'px solid ' + colors[markNum] + '');
                $(this).find('[cell-in^="[-ma"]').css('border-right', '' + mark[1] + 'px solid ' + colors[markNum] + '');
            }
            if (eleMt == 'mt') {
                $(this).find('[cell-in^="[-ma"]').css('margin-top', '-' + markTop[1] + 'px')
            }
            if (eleMb == 'mb') {
                $(this).find('[cell-in^="[-ma"]').css('margin-top', '' + markBottom[1] + 'px')
            }
            if (eleMl == 'ml') {
                $(this).find('[cell-in^="[-ma"]').css('margin-left', '-' + markLeft[1] + 'px')
            }
            if (eleMr == 'mr') {
                $(this).find('[cell-in^="[-ma"]').css('margin-left', '' + markRight[1] + 'px')
            }
            if (eleMHo == '.ma') {
                $(this).mouseenter(function () {
                    var markHoverNum = markHover[2] - 1;
                    $(this).find('[cell-in^="[-ma"]').css('border-bottom', '' + markHover[1] + 'px solid ' + colors[markHoverNum] + '');
                    $(this).find('[cell-in^="[-ma"]').css('border-right', '' + markHover[1] + 'px solid ' + colors[markHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var markNum = mark[2] - 1;
                    $(this).find('[cell-in^="[-ma"]').css('border-bottom', '' + mark[1] + 'px solid ' + colors[markNum] + '');
                    $(this).find('[cell-in^="[-ma"]').css('border-right', '' + mark[1] + 'px solid ' + colors[markNum] + '');
                })
            }

            if (eleTx == 'ts') {
                var textNum = text[2] - 1;
                $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
            }
            if (eleTxHo == '.ts') {
                $(this).hover(function () {
                    var textHoverNum = textHover[2] - 1;
                    $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textHoverNum] + '' });
                })
                $(this).mouseleave(function () {
                    var textNum = text[2] - 1;
                    $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
                })
            }
        })
        $('[cell-in^="[-ch"] [cell-in^="[-ca"] input').each(function () {
            var radius = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[r][^,]*?(\d{1,})*/i);
            var width = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[-][w][^,]*?(\d{1,})*/i);
            var height = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[-][h][^,]*?(\d{1,})*/i);

            var borderLeft = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[b][l](\d{1,})[^\w\*](\d{1,})/i);
            var borderRight = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[b][r](\d{1,})[^\w\*](\d{1,})/i);
            var borderTop = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[b][t](\d{1,})[^\w\*](\d{1,})/i);
            var borderBottom = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[b][b](\d{1,})[^\w\*](\d{1,})/i);
            var borderLeftHover = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[.][b][l](\d{1,})[^\w\*](\d{1,})/i);
            var borderRightHover = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[.][b][r](\d{1,})[^\w\*](\d{1,})/i);
            var borderTopHover = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[.][b][t](\d{1,})[^\w\*](\d{1,})/i);
            var borderBottomHover = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[.][b][b](\d{1,})[^\w\*](\d{1,})/i);
            var border = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[-][b][o](\d{1,})[^\w\*](\d{1,})/i);
            var borderHover = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[.][b][o](\d{1,})[^\w\*](\d{1,})/i);
            var backGround = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[-b][g][^,]*?(\d{1,})*/i);
            var backGroundHover = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[.][b][g][^,]*?(\d{1,})*/i);

            var eleR = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[r]/i);
            var eleW = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[w]/i);
            var eleH = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[h]/i);
            var eleB = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[b][o]/i);
            var eleBl = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[b][l]/i);
            var eleBr = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[b][r]/i);
            var eleBt = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[b][t]/i);
            var eleBb = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[b][b]/i);
            var eleBlHo = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[.][b][l]/i);
            var eleBrHo = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[.][b][r]/i);
            var eleBtHo = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[.][b][t]/i);
            var eleBbHo = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[.][b][b]/i);
            var eleBHo = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[.][b][o]/i);
            var eleBg = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[b][g]/i);
            var eleBgHo = $(this).closest('[cell-in^="[-ch"]').attr('cell-in').match(/[.][b][g]/i);

            if (eleR == 'r') {
                $(this).css('border-radius', '' + radius[1] + 'px');
            }
            if (eleW == 'w') {
                $(this).css('width', '' + width[1] + 'px');
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


            if (eleB == 'bo') {
                var borderNum = border[2] - 1;
                $(this).css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
            }
            if (eleBHo == '.bo') {
                $(this).mouseenter(function () {
                    var borderHoverNum = borderHover[2] - 1;
                    $(this).css('border', '' + borderHover[1] + 'px solid ' + colors[borderHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderNum = border[2] - 1;
                    $(this).css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
                })
            }
            if (eleBl == 'bl') {
                var borderLeftNum = borderLeft[2] - 1;
                $(this).css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
            }
            if (eleBlHo == '.bl') {
                $(this).mouseenter(function () {
                    var borderLeftHoverNum = borderLeftHover[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                    $(this).css('border-left', '' + borderLeftHover[1] + 'px solid ' + colors[borderLeftHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderLeftNum = borderLeft[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-right': '0', 'border-bottom': '0' })
                    $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
                })
            }

            if (eleBr == 'br') {
                var borderRightNum = borderRight[2] - 1;
                $(this).css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
                $(this).css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
            }
            if (eleBrHo == '.br') {
                $(this).mouseenter(function () {
                    var borderRightHoverNum = borderRightHover[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
                    $(this).css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderRightNum = borderRight[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
                    $(this).css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
                })
            }
            if (eleBt == 'bt') {
                var borderTopNum = borderTop[2] - 1;
                $(this).css({ 'border-bottom': '0', 'border-right': '0', 'border-left': '0' })
                $(this).css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
            }
            if (eleBtHo == '.bt') {
                $(this).mouseenter(function () {
                    var borderTopHoverNum = borderTopHover[2] - 1;
                    $(this).css({ 'border-bottom': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).css('border-top', '' + borderTopHover[1] + 'px solid ' + colors[borderTopHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderTopNum = borderTop[2] - 1;
                    $(this).css({ 'border-bottom': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
                })
            }
            if (eleBb == 'bb') {
                var borderBottomNum = borderBottom[2] - 1;
                $(this).css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
                $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
            }
            if (eleBbHo == '.bb') {
                $(this).mouseenter(function () {
                    var borderBottomHoverNum = borderBottomHover[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).css('border-bottom', '' + borderBottomHover[1] + 'px solid ' + colors[borderBottomHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderBottomNum = borderBottom[2] - 1;
                    $(this).css({ 'border-top': '0', 'border-right': '0', 'border-left': '0' })
                    $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
                })
            }

        })
    })
        .resize();
});
//For Graphs
$(document).ready(function () {
    $('[cell-gr^="[-gv"]').each(function () {
        var gv = $(this).attr('cell-gr').match(/[g][v](\d{1,})/i);
        var wh = $(this).attr('cell-gr').match(/[w][h](\d{1,})[^\w\*](\d{1,})/i);
        var fc = $(this).attr('cell-gr').match(/[f][c](\d{1,})/i);
        var fs = $(this).attr('cell-gr').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

        var eleWh = $(this).attr('cell-gr').match(/[w][h]/i);
        var eleFs = $(this).attr('cell-gr').match(/[f][s]/i);
        var eleFc = $(this).attr('cell-gr').match(/[f][c]/i);
        var gvValue = '[-gv' + gv[1] + ':';

        var graph = $('[cell-gr^="' + gvValue + '"]').attr("cell-gr").match(/g(\d{1,})[^\w\*](\d{1,})/i);
        for (i = 0; i <= graph[1]; i++) {
            $('[cell-gr^="' + gvValue + '"]').find(' [cell-gr^="[-ga"]').append('<div cell-Q=[-q] cell-gr=[-ro' + i + '] class="gr-row">' + '</div>');
            for (j = 0; j <= graph[2]; j++) {
                $('[cell-gr^="' + gvValue + '"]').find(' [cell-gr^="[-ga"] [cell-gr^="[-ro' + i + '"]').append('<div cell-c=[-ca] cell-gr=[-co' + j + '] class="gr-col"><div class="cell" cell-gr=[-c' + i + '(' + j + ')]>' + '</div></div>');
            }
        }
        $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-x"]').each(function (index) {
            var z = index + 1;
            $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-x' + z + ':"]').appendTo('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro' + graph[2] + ']"] [cell-gr^="[-co' + z + ']"] .cell')
            var verticalBar = $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-x' + z + ':"]').attr("cell-gr").match(/[b][a](\d{1,})[^\w\*](\d{1,})/i);
            var barColor = $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-x' + z + ':"]').attr("cell-gr").match(/[b][c](\d{1,})/i);
            var cellColor = $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-x' + z + ':"]').attr("cell-gr").match(/[c][c](\d{1,})[^\w\*](\d{1,})/i);

            var eleBc = $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-x' + z + ':"]').attr("cell-gr").match(/[b][c]/i);
            var eleC = $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-x' + z + ':"]').attr("cell-gr").match(/[c][c]/i);

            var vb1 = parseInt((+verticalBar[1]) - (+1))
            var vb2 = parseInt((+verticalBar[2]) - (+1))

            for (j = 0; j <= vb2; j++) {
                if (j >= vb1 && j <= vb2) {
                    startPoint = Math.abs((j - graph[2]))
                    $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro' + (startPoint - 1) + ']"] [cell-gr^="[-co' + (index + 1) + ']"] .cell').addClass('active-cell')
                    if (eleBc == 'bc') {
                        var bColor = barColor[1] - 1;
                        $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro' + (startPoint - 1) + ']"] [cell-gr^="[-co' + z + ']"]').find('.active-cell').css('background-color', '' + colors[bColor] + '')
                    }
                    if (eleC == 'cc') {
                        var l = parseInt(+cellColor[1]) + vb1 - (+1);
                        var m = Math.abs((l - graph[2]));
                        if (startPoint == m) {
                            var cColor = cellColor[2] - 1;
                            console.log(startPoint)
                            $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro' + (startPoint - 1) + ']"] [cell-gr^="[-co' + z + ']"]').find('.active-cell').css('background-color', '' + colors[cColor] + '')
                        }
                    }
                }
            }
        })
        $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-y"]').each(function (index) {
            var z = index + 1;
            var t = graph[2] - z;
            $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-y' + z + ':"]').appendTo('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro' + t + ']"] [cell-gr^="[-co0]"] .cell');
        })
        if (eleWh == 'wh') {
            $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro"] [cell-gr^="[-co"] .cell').css({ 'width': '' + wh[1] + 'px', 'height': '' + wh[2] + 'px' })
        }
        if (eleFs == 'fs') {
            $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro' + graph[2] + '"] [cell-gr^="[-co"] .cell').css({ 'font-size': '' + fs[1] + 'px' })
            $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro"] [cell-gr^="[-co"]:nth-child(1) .cell').css({ 'font-size': '' + fs[2] + 'px' })
        }
        if (eleFc == 'fc') {
            var color = fc[1] - 1;
            $('[cell-gr^="' + gvValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro"] [cell-gr^="[-co"] .active-cell').css({ 'background-color': '' + colors[color] + '' })
        }
    })
    $('[cell-gr^="[-gh"]').each(function () {
        var gh = $(this).attr('cell-gr').match(/[g][h](\d{1,})/i);
        var wh = $(this).attr('cell-gr').match(/[w][h](\d{1,})[^\w\*](\d{1,})/i);
        var fc = $(this).attr('cell-gr').match(/[f][c](\d{1,})/i);
        var fs = $(this).attr('cell-gr').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);

        var eleWh = $(this).attr('cell-gr').match(/[w][h]/i);
        var eleFc = $(this).attr('cell-gr').match(/[f][c]/i);
        var eleFs = $(this).attr('cell-gr').match(/[f][s]/i);
        var ghValue = '[-gh' + gh[1] + ':';


        var graph = $('[cell-gr^="' + ghValue + '"]').attr("cell-gr").match(/g(\d{1,})[^\w\*](\d{1,})/i);
        for (i = 0; i <= graph[1]; i++) {
            $('[cell-gr^="' + ghValue + '"]').find(' [cell-gr^="[-ga"]').append('<div cell-Q=[-q] cell-gr=[-ro' + i + '] class="gr-row">' + '</div>');
            for (j = 0; j <= graph[2]; j++) {
                $('[cell-gr^="' + ghValue + '"]').find(' [cell-gr^="[-ga"] [cell-gr^="[-ro' + i + '"]').append('<div cell-c=[-ca] cell-gr=[-co' + j + '] class="gr-col"><div class="cell" cell-gr=[-c' + i + '(' + j + ')]>' + '</div></div>');
            }
        }
        $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-x"]').each(function (index) {
            var z = index + 1;
            $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-x' + z + ':"]').appendTo('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro' + graph[2] + ']"] [cell-gr^="[-co' + z + ']"] .cell');
        })
        $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-y"]').each(function (index) {
            var z = index + 1;
            var t = graph[2] - z;
            $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-y' + z + ':"]').appendTo('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro' + t + ']"] [cell-gr^="[-co0]"] .cell')
            var horizontalBar = $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-y' + z + ':"]').attr("cell-gr").match(/[b][a](\d{1,})[^\w\*](\d{1,})/i);
            var barColor = $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-y' + z + ':"]').attr("cell-gr").match(/[b][c](\d{1,})/i);
            var cellColor = $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-y' + z + ':"]').attr("cell-gr").match(/[c][c](\d{1,})[^\w\*](\d{1,})/i);

            var eleBc = $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-y' + z + ':"]').attr("cell-gr").match(/[b][c]/i);
            var eleC = $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-y' + z + ':"]').attr("cell-gr").match(/[c][c]/i);

            var hb1 = parseInt((+horizontalBar[1]) - (+1))
            var hb2 = parseInt((+horizontalBar[2]) - (+1))
            for (j = 0; j <= hb2; j++) {
                if (j >= hb1 && j <= hb2) {
                    var st = graph[1] - (index + 1);
                    $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro' + st + ']"] [cell-gr^="[-co' + (j + 1) + ']"] .cell').addClass('active-cell')
                    if (eleBc == 'bc') {
                        var bColor = barColor[1] - 1;
                        $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro' + st + ']"] [cell-gr^="[-co' + (j + 1) + ']"]').find('.active-cell').css('background-color', '' + colors[bColor] + '')
                    }
                    if (eleC == 'cc') {
                        var l = parseInt(+cellColor[1]) + hb1 - (+1);
                        if (j == l) {
                            var cColor = cellColor[2] - 1;
                            $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro' + st + ']"] [cell-gr^="[-co' + (j + 1) + ']"]').find('.active-cell').css('background-color', '' + colors[cColor] + '')
                        }
                    }
                }
            }
        })
        if (eleWh == 'wh') {
            $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro"] [cell-gr^="[-co"] .cell').css({ 'width': '' + wh[1] + 'px', 'height': '' + wh[2] + 'px' })
        }
        if (eleFs == 'fs') {
            $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro' + graph[2] + '"] [cell-gr^="[-co"] .cell').css({ 'font-size': '' + fs[1] + 'px' })
            $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro"] [cell-gr^="[-co"]:nth-child(1) .cell').css({ 'font-size': '' + fs[2] + 'px' })
        }
        if (eleFc == 'fc') {
            var color = fc[1] - 1;
            $('[cell-gr^="' + ghValue + '"] [cell-gr^="[-ga"] [cell-gr^="[-ro"] [cell-gr^="[-co"] .active-cell').css({ 'background-color': '' + colors[color] + '' })
        }
    })
})
