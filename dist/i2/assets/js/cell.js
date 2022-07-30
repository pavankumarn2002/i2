var colors;
//For Columns
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-c]").each(function () {
            var col = $(this).attr('cell-c').match(/[c][^,]*?(\d{1,})*/i);
            var colDesk = $(this).attr('cell-c').match(/[d][^,]*?(\d{1,})*/i);
            var colLarge = $(this).attr('cell-c').match(/[l][^,]*?(\d{1,})*/i);
            var colTab = $(this).attr('cell-c').match(/[t][^,]*?(\d{1,})*/i);
            var colMobile = $(this).attr('cell-c').match(/[m][^,]*?(\d{1,})*/i);
            var colSmall = $(this).attr('cell-c').match(/[s][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-c').match(/[c]/i);
            var eleD = $(this).attr('cell-c').match(/[d]/i);
            var eleL = $(this).attr('cell-c').match(/[l]/i);
            var eleT = $(this).attr('cell-c').match(/[t]/i);
            var eleM = $(this).attr('cell-c').match(/[m]/i);
            var eleS = $(this).attr('cell-c').match(/[s]/i);

            var eleCo = $(this).attr('cell-c').match(/[c][o]*/i);
            var eleCoD = $(this).attr('cell-c').match(/[d][o]*/i);
            var eleCoL = $(this).attr('cell-c').match(/[l][o]*/i);
            var eleCoT = $(this).attr('cell-c').match(/[t][o]*/i);
            var eleCoM = $(this).attr('cell-c').match(/[m][o]*/i);
            var eleCoS = $(this).attr('cell-c').match(/[s][o]*/i);

            var eleCa = $(this).attr('cell-c').match(/[c][a]*/i);
            var eleCaD = $(this).attr('cell-c').match(/[d][a]*/i);
            var eleCaL = $(this).attr('cell-c').match(/[l][a]*/i);
            var eleCaT = $(this).attr('cell-c').match(/[t][a]*/i);
            var eleCaM = $(this).attr('cell-c').match(/[m][a]*/i);
            var eleCaS = $(this).attr('cell-c').match(/[s][a]*/i);

            if (ele == 'c') {
                var colSize = col[1] * 5
                $(this).css({ 'width': '' + colSize + '%', 'flex-grow': '0' });
            }
            if (eleCo == 'co') {
                $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
            }
            if (eleCa == 'ca') {
                $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
            }
            if (ele != 'c') {
                if (eleD == 'd') {
                    var colSizeDesk = colDesk[1] * 5
                    $(this).css({ 'width': '' + colSizeDesk + '%', 'flex-grow': '0' });
                }
                if (eleCoD == 'do') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaD == 'da') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
                if (eleL == 'l' & eleD != 'd') {
                    var colSizeLarge = colLarge[1] * 5
                    $(this).css({ 'width': '' + colSizeLarge + '%', 'flex-grow': '0' });
                }
                if (eleCoL == 'lo') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaL == 'la') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
                if (eleT == 't' & eleD != 'd' & eleL != 'l') {
                    var colSizeTab = colTab[1] * 5
                    $(this).css({ 'width': '' + colSizeTab + '%', 'flex-grow': '0' });
                }
                if (eleCoT == 'to') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaT == 'ta') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
                if (eleM == 'm' & eleD != 'd' & eleL != 'l' & eleT != 't') {
                    var colSizeMobile = colMobile[1] * 5
                    $(this).css({ 'width': '' + colSizeMobile + '%', 'flex-grow': '0' });
                }
                if (eleCoM == 'mo') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaM == 'ma') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
                if (eleS == 's' & eleD != 'd' & eleL != 'l' & eleT != 't' & eleM != 'm') {
                    var colSizeSmall = colSmall[1] * 5
                    $(this).css({ 'width': '' + colSizeSmall + '%', 'flex-grow': '0' });
                }
                if (eleCoS == 'so') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaS == 'sa') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }

            var winWidth = $(window).width();
            if (winWidth >= 1484.99 && winWidth <= 2500) {
                if (eleD == 'd') {
                    var colSizeDesk = colDesk[1] * 5
                    $(this).css({ 'width': '' + colSizeDesk + '%', 'flex-grow': '0' });
                }
                if (eleCoD == 'do') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaD == 'da') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }
            if (winWidth >= 1199.99 && winWidth <= 1484.98) {
                if (eleD == 'd') {
                    var colSizeDesk = colDesk[1] * 5
                    $(this).css({ 'width': '' + colSizeDesk + '%', 'flex-grow': '0' });
                }
                if (eleCoD == 'do') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaD == 'da') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }
            if (winWidth >= 991.99 && winWidth <= 1199.98) {
                if (eleL == 'l') {
                    var colSizeLarge = colLarge[1] * 5
                    $(this).css({ 'width': '' + colSizeLarge + '%', 'flex-grow': '0' });
                }
                if (eleCoL == 'lo') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaL == 'la') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }
            if (winWidth >= 767.99 && winWidth <= 991.98) {
                if (eleT == 't') {
                    var colSizeTab = colTab[1] * 5
                    $(this).css({ 'width': '' + colSizeTab + '%', 'flex-grow': '0' });
                }
                if (eleCoT == 'to') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaL == 'ta') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }
            if (winWidth >= 575.99 && winWidth <= 767.98) {
                if (eleM == 'm') {
                    var colSizeMobile = colMobile[1] * 5
                    $(this).css({ 'width': '' + colSizeMobile + '%', 'flex-grow': '0' });
                }
                if (eleCoM == 'mo') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaM == 'ma') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }
            if (winWidth >= 319.98 && winWidth <= 575.98) {
                if (eleS == 's') {
                    var colSizeSmall = colSmall[1] * 5
                    $(this).css({ 'width': '' + colSizeSmall + '%', 'flex-grow': '0' });
                }
                if (eleCoS == 'so') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaS == 'sa') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }
            else if (winWidth < 319.98) {
                if (eleS == 's') {
                    var colSizeSmall = colSmall[1] * 5
                    $(this).css({ 'width': '' + colSizeSmall + '%', 'flex-grow': '0' });
                }
                if (eleCoS == 'so') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaS == 'sa') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }
        })
        $("[cell-c]").each(function () {
            var order = $(this).attr('cell-c').match(/[r][^,]*?(\d{1,})*/i);
            var orderDesk = $(this).attr('cell-c').match(/[d][r][^,]*?(\d{1,})*/i);
            var orderLarge = $(this).attr('cell-c').match(/[l][r][^,]*?(\d{1,})*/i);
            var orderTab = $(this).attr('cell-c').match(/[t][r][^,]*?(\d{1,})*/i);
            var orderMobile = $(this).attr('cell-c').match(/[m][r][^,]*?(\d{1,})*/i);
            var orderSmall = $(this).attr('cell-c').match(/[s][r][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-c').match(/[r]/i);
            var eleD = $(this).attr('cell-c').match(/[d][r]/i);
            var eleL = $(this).attr('cell-c').match(/[l][r]/i);
            var eleT = $(this).attr('cell-c').match(/[t][r]/i);
            var eleM = $(this).attr('cell-c').match(/[m][r]/i);
            var eleS = $(this).attr('cell-c').match(/[s][r]/i);
            if (ele == 'r') {
                $(this).css('order', '-' + order[1] + '');
            }
            if (ele != 'r') {
                if (eleD == 'dr') {
                    $(this).css('order', '-' + orderDesk[1] + '');
                }
                if (eleL == 'lr' & eleD != 'dr') {
                    $(this).css('order', '-' + orderLarge[1] + '');
                }
                if (eleT == 'tr' & eleD != 'dr' & eleL != 'lr') {
                    $(this).css('order', '-' + orderTab[1] + '');
                }
                if (eleM == 'mr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr') {
                    $(this).css('order', '-' + orderMobile[1] + '');
                }
                if (eleS == 'sr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr' & eleM != 'mr') {
                    $(this).css('order', '-' + orderSmall[1] + '');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dr') {
                    $(this).css('order', '-' + orderDesk[1] + '');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dr') {
                    $(this).css('order', '-' + orderDesk[1] + '');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lr') {
                    $(this).css('order', '-' + orderLarge[1] + '');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tr') {
                    $(this).css('order', '-' + orderTab[1] + '');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mr') {
                    $(this).css('order', '-' + orderMobile[1] + '');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sr') {
                    $(this).css('order', '-' + orderSmall[1] + '');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sr') {
                    $(this).css('order', '-' + orderSmall[1] + '');
                }
            }
        })
    })
        .resize();
});
//For Widths
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-w]").each(function () {
            var width = $(this).attr('cell-w').match(/[w][^,]*?(\d{1,})*/i);
            var widthDesk = $(this).attr('cell-w').match(/[d][^,]*?(\d{1,})*/i);
            var widthLarge = $(this).attr('cell-w').match(/[l][^,]*?(\d{1,})*/i);
            var widthTab = $(this).attr('cell-w').match(/[t][^,]*?(\d{1,})*/i);
            var widthMobile = $(this).attr('cell-w').match(/[m][^,]*?(\d{1,})*/i);
            var widthSmall = $(this).attr('cell-w').match(/[s][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-w').match(/[w]/i);
            var eleD = $(this).attr('cell-w').match(/[d]/i);
            var eleL = $(this).attr('cell-w').match(/[l]/i);
            var eleT = $(this).attr('cell-w').match(/[t]/i);
            var eleM = $(this).attr('cell-w').match(/[m]/i);
            var eleS = $(this).attr('cell-w').match(/[s]/i);
            if (ele == 'w') {
                $(this).css('width', '' + width[1] + 'px');
            }
            if (ele != 'w') {
                if (eleD == 'd') {
                    $(this).css('width', '' + widthDesk[1] + 'px');
                }
                if (eleL == 'l' & eleD != 'd') {
                    $(this).css('width', '' + widthLarge[1] + 'px');
                }
                if (eleT == 't' & eleD != 'd' & eleL != 'l') {
                    $(this).css('width', '' + widthTab[1] + 'px');
                }
                if (eleM == 'm' & eleD != 'd' & eleL != 'l' & eleT != 't') {
                    $(this).css('width', '' + widthMobile[1] + 'px');
                }
                if (eleS == 's' & eleD != 'd' & eleL != 'l' & eleT != 't' & eleM != 'm') {
                    $(this).css('width', '' + widthSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'd') {
                    $(this).css('width', '' + widthDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'd') {
                    $(this).css('width', '' + widthDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'l') {
                    $(this).css('width', '' + widthLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 't') {
                    $(this).css('width', '' + widthTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'm') {
                    $(this).css('width', '' + widthMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 's') {
                    $(this).css('width', '' + widthSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 's') {
                    $(this).css('width', '' + widthSmall[1] + 'px');
                }
            }
        })
        $("[cell-w]").each(function () {
            var order = $(this).attr('cell-w').match(/[r][^,]*?(\d{1,})*/i);
            var orderDesk = $(this).attr('cell-w').match(/[d][r][^,]*?(\d{1,})*/i);
            var orderLarge = $(this).attr('cell-w').match(/[l][r][^,]*?(\d{1,})*/i);
            var orderTab = $(this).attr('cell-w').match(/[t][r][^,]*?(\d{1,})*/i);
            var orderMobile = $(this).attr('cell-w').match(/[m][r][^,]*?(\d{1,})*/i);
            var orderSmall = $(this).attr('cell-w').match(/[s][r][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-w').match(/[r]/i);
            var eleD = $(this).attr('cell-w').match(/[d][r]/i);
            var eleL = $(this).attr('cell-w').match(/[l][r]/i);
            var eleT = $(this).attr('cell-w').match(/[t][r]/i);
            var eleM = $(this).attr('cell-w').match(/[m][r]/i);
            var eleS = $(this).attr('cell-w').match(/[s][r]/i);
            if (ele == 'r') {
                $(this).css('order', '-' + order[1] + '');
            }
            if (ele != 'r') {
                if (eleD == 'dr') {
                    $(this).css('order', '-' + orderDesk[1] + '');
                }
                if (eleL == 'lr' & eleD != 'dr') {
                    $(this).css('order', '-' + orderLarge[1] + '');
                }
                if (eleT == 'tr' & eleD != 'dr' & eleL != 'lr') {
                    $(this).css('order', '-' + orderTab[1] + '');
                }
                if (eleM == 'mr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr') {
                    $(this).css('order', '-' + orderMobile[1] + '');
                }
                if (eleS == 'sr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr' & eleM != 'mr') {
                    $(this).css('order', '-' + orderSmall[1] + '');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dr') {
                    $(this).css('order', '-' + orderDesk[1] + '');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dr') {
                    $(this).css('order', '-' + orderDesk[1] + '');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lr') {
                    $(this).css('order', '-' + orderLarge[1] + '');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tr') {
                    $(this).css('order', '-' + orderTab[1] + '');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mr') {
                    $(this).css('order', '-' + orderMobile[1] + '');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sr') {
                    $(this).css('order', '-' + orderSmall[1] + '');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sr') {
                    $(this).css('order', '-' + orderSmall[1] + '');
                }
            }
        })
        $("[cell-w]").each(function () {
            var float = $(this).attr('cell-w').match(/[f](\d{1,})[^\w\*](\d{1,})/i);

            var floatDesk = $(this).attr('cell-w').match(/[d][f](\d{1,})[^\w\*](\d{1,})/i);
            var floatLarge = $(this).attr('cell-w').match(/[l][f](\d{1,})[^\w\*](\d{1,})/i);
            var floatTab = $(this).attr('cell-w').match(/[t][f](\d{1,})[^\w\*](\d{1,})/i);
            var floatMobile = $(this).attr('cell-w').match(/[m][f](\d{1,})[^\w\*](\d{1,})/i);
            var floatSmall = $(this).attr('cell-w').match(/[s][f](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-w').match(/[f]/i);
            var eleD = $(this).attr('cell-w').match(/[d][f]/i);
            var eleL = $(this).attr('cell-w').match(/[l][f]/i);
            var eleT = $(this).attr('cell-w').match(/[t][f]/i);
            var eleM = $(this).attr('cell-w').match(/[m][f]/i);
            var eleS = $(this).attr('cell-w').match(/[s][f]/i);
            if (ele == 'f') {
                if (float[1] == 1) {
                    $(this).css({ 'float': 'left' });
                }
                if (float[2] == 1) {
                    $(this).css({ 'float': 'right' });
                }
            }
            if (ele != 'f') {
                if (eleD == 'df') {
                    if (floatDesk[1] = 1) {
                        $(this).css({ 'float': 'left' });
                    }
                    if (floatDesk[1] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                    if (floatDesk[2] = 1) {
                        $(this).css({ 'float': 'right' });
                    }
                    if (floatDesk[2] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                }
                if (eleL == 'lf' & eleD != 'df') {
                    if (floatLarge[1] = 1) {
                        $(this).css({ 'float': 'left' });
                    }
                    if (floatLarge[1] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                    if (floatLarge[2] = 1) {
                        $(this).css({ 'float': 'right' });
                    }
                    if (floatLarge[2] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                }
                if (eleT == 'tf' & eleD != 'df' & eleL != 'lf') {
                    if (floatTab[1] = 1) {
                        $(this).css({ 'float': 'left' });
                    }
                    if (floatTab[1] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                    if (floatTab[2] = 1) {
                        $(this).css({ 'float': 'right' });
                    }
                    if (floatTab[2] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                }
                if (eleM == 'mf' & eleD != 'df' & eleL != 'lf' & eleT != 'tf') {
                    if (floatMobile[1] = 1) {
                        $(this).css({ 'float': 'left' });
                    }
                    if (floatMobile[1] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                    if (floatMobile[2] = 1) {
                        $(this).css({ 'float': 'right' });
                    }
                    if (floatMobile[2] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                }
                if (eleS == 'sf' & eleD != 'df' & eleL != 'lf' & eleT != 'tf' & eleM != 'mf') {
                    if (floatSmall[1] = 1) {
                        $(this).css({ 'float': 'left' });
                    }
                    if (floatSmall[1] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                    if (floatSmall[2] = 1) {
                        $(this).css({ 'float': 'right' });
                    }
                    if (floatSmall[2] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'df') {
                    if (floatDesk[1] = 1) {
                        $(this).css({ 'float': 'left' });
                    }
                    if (floatDesk[1] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                    if (floatDesk[2] = 1) {
                        $(this).css({ 'float': 'right' });
                    }
                    if (floatDesk[2] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'df') {
                    if (floatDesk[1] = 1) {
                        $(this).css({ 'float': 'left' });
                    }
                    if (floatDesk[1] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                    if (floatDesk[2] = 1) {
                        $(this).css({ 'float': 'right' });
                    }
                    if (floatDesk[2] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lf') {
                    if (floatLarge[1] = 1) {
                        $(this).css({ 'float': 'left' });
                    }
                    if (floatLarge[1] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                    if (floatLarge[2] = 1) {
                        $(this).css({ 'float': 'right' });
                    }
                    if (floatLarge[2] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tf') {
                    if (floatTab[1] = 1) {
                        $(this).css({ 'float': 'left' });
                    }
                    if (floatTab[1] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                    if (floatTab[2] = 1) {
                        $(this).css({ 'float': 'right' });
                    }
                    if (floatTab[2] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mf') {
                    if (floatMobile[1] = 1) {
                        $(this).css({ 'float': 'left' });
                    }
                    if (floatMobile[1] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                    if (floatMobile[2] = 1) {
                        $(this).css({ 'float': 'right' });
                    }
                    if (floatMobile[2] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sf') {
                    if (floatSmall[1] = 1) {
                        $(this).css({ 'float': 'left' });
                    }
                    if (floatSmall[1] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                    if (floatSmall[2] = 1) {
                        $(this).css({ 'float': 'right' });
                    }
                    if (floatSmall[2] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sf') {
                    if (floatSmall[1] = 1) {
                        $(this).css({ 'float': 'left' });
                    }
                    if (floatSmall[1] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                    if (floatSmall[2] = 1) {
                        $(this).css({ 'float': 'right' });
                    }
                    if (floatSmall[2] = 0) {
                        $(this).css({ 'float': 'none' });
                    }
                }
            }
        })
        $("[cell-w]").each(function () {
            var width = $(this).attr('cell-w').match(/[w][.][^,]*?(\d{1,})*/i);
            var widthDesk = $(this).attr('cell-w').match(/[d][.][^,]*?(\d{1,})*/i);
            var widthLarge = $(this).attr('cell-w').match(/[l][.][^,]*?(\d{1,})*/i);
            var widthTab = $(this).attr('cell-w').match(/[t][.][^,]*?(\d{1,})*/i);
            var widthMobile = $(this).attr('cell-w').match(/[m][.][^,]*?(\d{1,})*/i);
            var widthSmall = $(this).attr('cell-w').match(/[s][.][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-w').match(/[w][.]/i);
            var eleD = $(this).attr('cell-w').match(/[d][.]/i);
            var eleL = $(this).attr('cell-w').match(/[l][.]/i);
            var eleT = $(this).attr('cell-w').match(/[t][.]/i);
            var eleM = $(this).attr('cell-w').match(/[m][.]/i);
            var eleS = $(this).attr('cell-w').match(/[s][.]/i);
            if (ele == 'w.') {
                $(this).css('width', '' + width[1] + '%');
            }
            if (ele != 'w.') {
                if (eleD == 'd.') {
                    $(this).css('width', '' + widthDesk[1] + '%');
                }
                if (eleL == 'l.' & eleD != 'd.') {
                    $(this).css('width', '' + widthLarge[1] + '%');
                }
                if (eleT == 't.' & eleD != 'd.' & eleL != 'l.') {
                    $(this).css('width', '' + widthTab[1] + '%');
                }
                if (eleM == 'm.' & eleD != 'd.' & eleL != 'l.' & eleT != 't.') {
                    $(this).css('width', '' + widthMobile[1] + '%');
                }
                if (eleS == 's.' & eleD != 'd.' & eleL != 'l.' & eleT != 't.' & eleM != 'm.') {
                    $(this).css('width', '' + widthSmall[1] + '%');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'd.') {
                    $(this).css('width', '' + widthDesk[1] + '%');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'd.') {
                    $(this).css('width', '' + widthDesk[1] + '%');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'l.') {
                    $(this).css('width', '' + widthLarge[1] + '%');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 't.') {
                    $(this).css('width', '' + widthTab[1] + '%');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'm.') {
                    $(this).css('width', '' + widthMobile[1] + '%');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 's.') {
                    $(this).css('width', '' + widthSmall[1] + '%');
                }
            }
            else if (width < 319.98) {
                if (eleS == 's.') {
                    $(this).css('width', '' + widthSmall[1] + '%');
                }
            }
        })
        $("[cell-w]").each(function () {
            var ele = $(this).attr('cell-w').match(/[w][x]/i);
            var eleD = $(this).attr('cell-w').match(/[d][x]/i);
            var eleL = $(this).attr('cell-w').match(/[l][x]/i);
            var eleT = $(this).attr('cell-w').match(/[t][x]/i);
            var eleM = $(this).attr('cell-w').match(/[m][x]/i);
            var eleS = $(this).attr('cell-w').match(/[s][x]/i);

            if (ele == 'wx') {
                $(this).css('width', 'max-content');
            }
            if (ele != 'wx') {
                if (eleD == 'dx') {
                    $(this).css('width', 'max-content');
                }
                if (eleL == 'lx' & eleD != 'dx') {
                    $(this).css('width', 'max-content');
                }
                if (eleT == 'tx' & eleD != 'dx' & eleL != 'lx') {
                    $(this).css('width', 'max-content');
                }
                if (eleM == 'mx' & eleD != 'dx' & eleL != 'lx' & eleT != 'tx') {
                    $(this).css('width', 'max-content');
                }
                if (eleS == 'sx' & eleD != 'dx' & eleL != 'lx' & eleT != 'tx' & eleM != 'mx') {
                    $(this).css('width', 'max-content');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dx') {
                    $(this).css('width', 'max-content');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dx') {
                    $(this).css('width', 'max-content');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lx') {
                    $(this).css('width', 'max-content');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tx') {
                    $(this).css('width', 'max-content');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mx') {
                    $(this).css('width', 'max-content');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sx') {
                    $(this).css('width', 'max-content');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sx') {
                    $(this).css('width', 'max-content');
                }
            }
        })
        $("[cell-w]").each(function () {

            var ele = $(this).attr('cell-w').match(/[w][n]/i);
            var eleD = $(this).attr('cell-w').match(/[d][n]/i);
            var eleL = $(this).attr('cell-w').match(/[l][n]/i);
            var eleT = $(this).attr('cell-w').match(/[t][n]/i);
            var eleM = $(this).attr('cell-w').match(/[m][n]/i);
            var eleS = $(this).attr('cell-w').match(/[s][n]/i);
            if (ele == 'wn') {
                $(this).css('width', 'min-content');
            }
            if (ele != 'wn') {
                if (eleD == 'dn') {
                    $(this).css('width', 'min-content');
                }
                if (eleL == 'ln' & eleD != 'dn') {
                    $(this).css('width', 'min-content');
                }
                if (eleT == 'tn' & eleD != 'dn' & eleL != 'ln') {
                    $(this).css('width', 'min-content');
                }
                if (eleM == 'mn' & eleD != 'dn' & eleL != 'ln' & eleT != 'tn') {
                    $(this).css('width', 'min-content');
                }
                if (eleS == 'sn' & eleD != 'dn' & eleL != 'ln' & eleT != 'tn' & eleM != 'mn') {
                    $(this).css('width', 'min-content');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dn') {
                    $(this).css('width', 'min-content');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dn') {
                    $(this).css('width', 'min-content');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'ln') {
                    $(this).css('width', 'min-content');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tn') {
                    $(this).css('width', 'min-content');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mn') {
                    $(this).css('width', 'min-content');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sn') {
                    $(this).css('width', 'min-content');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sn') {
                    $(this).css('width', 'min-content');
                }
            }
        })
    })

        .resize();

});
//For Heights
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-h]").each(function () {
            var height = $(this).attr('cell-h').match(/[h][^,]*?(\d{1,})*/i);
            var heightDesk = $(this).attr('cell-h').match(/[d][^,]*?(\d{1,})*/i);
            var heightLarge = $(this).attr('cell-h').match(/[l][^,]*?(\d{1,})*/i);
            var heightTab = $(this).attr('cell-h').match(/[t][^,]*?(\d{1,})*/i);
            var heightMobile = $(this).attr('cell-h').match(/[m][^,]*?(\d{1,})*/i);
            var heightSmall = $(this).attr('cell-h').match(/[s][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-h').match(/[h]/i);
            var eleD = $(this).attr('cell-h').match(/[d]/i);
            var eleL = $(this).attr('cell-h').match(/[l]/i);
            var eleT = $(this).attr('cell-h').match(/[t]/i);
            var eleM = $(this).attr('cell-h').match(/[m]/i);
            var eleS = $(this).attr('cell-h').match(/[s]/i);
            if (ele == 'h') {
                $(this).css('height', '' + height[1] + 'px');
            }
            if (ele != 'h') {
                if (eleD == 'd') {
                    $(this).css('height', '' + heightDesk[1] + 'px');
                }
                if (eleL == 'l' & eleD != 'd') {
                    $(this).css('height', '' + heightLarge[1] + 'px');
                }
                if (eleT == 't' & eleD != 'd' & eleL != 'l') {
                    $(this).css('height', '' + heightTab[1] + 'px');
                }
                if (eleM == 'm' & eleD != 'd' & eleL != 'l' & eleT != 't') {
                    $(this).css('height', '' + heightMobile[1] + 'px');
                }
                if (eleS == 's' & eleD != 'd' & eleL != 'l' & eleT != 't' & eleM != 'm') {
                    $(this).css('height', '' + heightSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'd') {
                    $(this).css('height', '' + heightDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'd') {
                    $(this).css('height', '' + heightDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'l') {
                    $(this).css('height', '' + heightLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 't') {
                    $(this).css('height', '' + heightTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'm') {
                    $(this).css('height', '' + heightMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 's') {
                    $(this).css('height', '' + heightSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 's') {
                    $(this).css('height', '' + heightSmall[1] + 'px');
                }
            }
        })
        $("[cell-h]").each(function () {
            var height = $(this).attr('cell-h').match(/[h][.][^,]*?(\d{1,})*/i);
            var heightDesk = $(this).attr('cell-h').match(/[d][.][^,]*?(\d{1,})*/i);
            var heightLarge = $(this).attr('cell-h').match(/[l][.][^,]*?(\d{1,})*/i);
            var heightTab = $(this).attr('cell-h').match(/[t][.][^,]*?(\d{1,})*/i);
            var heightMobile = $(this).attr('cell-h').match(/[m][.][^,]*?(\d{1,})*/i);
            var heightSmall = $(this).attr('cell-h').match(/[s][.][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-h').match(/[h][.]/i);
            var eleD = $(this).attr('cell-h').match(/[d][.]/i);
            var eleL = $(this).attr('cell-h').match(/[l][.]/i);
            var eleT = $(this).attr('cell-h').match(/[t][.]/i);
            var eleM = $(this).attr('cell-h').match(/[m][.]/i);
            var eleS = $(this).attr('cell-h').match(/[s][.]/i);
            if (ele == 'h.') {
                $(this).css('height', '' + height[1] + '%');
            }
            if (ele != 'h.') {
                if (eleD == 'd.') {
                    $(this).css('height', '' + heightDesk[1] + '%');
                }
                if (eleL == 'l.' & eleD != 'd.') {
                    $(this).css('height', '' + heightLarge[1] + '%');
                }
                if (eleT == 't.' & eleD != 'd.' & eleL != 'l.') {
                    $(this).css('height', '' + heightTab[1] + '%');
                }
                if (eleM == 'm.' & eleD != 'd.' & eleL != 'l.' & eleT != 't.') {
                    $(this).css('height', '' + heightMobile[1] + '%');
                }
                if (eleS == 's.' & eleD != 'd.' & eleL != 'l.' & eleT != 't.' & eleM != 'm.') {
                    $(this).css('height', '' + heightSmall[1] + '%');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'd.') {
                    $(this).css('height', '' + heightDesk[1] + '%');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'd.') {
                    $(this).css('height', '' + heightDesk[1] + '%');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'l.') {
                    $(this).css('height', '' + heightLarge[1] + '%');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 't.') {
                    $(this).css('height', '' + heightTab[1] + '%');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'm.') {
                    $(this).css('height', '' + heightMobile[1] + '%');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 's.') {
                    $(this).css('height', '' + heightSmall[1] + '%');
                }
            }
            else if (width < 319.98) {
                if (eleS == 's.') {
                    $(this).css('height', '' + heightSmall[1] + '%');
                }
            }
        })
        $("[cell-h]").each(function () {
            var ele = $(this).attr('cell-h').match(/[h][a]/i);
            var eleD = $(this).attr('cell-h').match(/[d][a]/i);
            var eleL = $(this).attr('cell-h').match(/[l][a]/i);
            var eleT = $(this).attr('cell-h').match(/[t][a]/i);
            var eleM = $(this).attr('cell-h').match(/[m][a]/i);
            var eleS = $(this).attr('cell-h').match(/[s][a]/i);
            if (ele == 'ha') {
                $(this).css('height', 'auto');
            }
            if (ele != 'ha') {
                if (eleD == 'da') {
                    $(this).css('height', 'auto');
                }
                if (eleL == 'la' & eleD != 'da') {
                    $(this).css('height', 'auto');
                }
                if (eleT == 'ta' & eleD != 'da' & eleL != 'la') {
                    $(this).css('height', 'auto');
                }
                if (eleM == 'ma' & eleD != 'da' & eleL != 'la' & eleT != 'ta') {
                    $(this).css('height', 'auto');
                }
                if (eleS == 'sa' & eleD != 'da' & eleL != 'la' & eleT != 'ta' & eleM != 'ma') {
                    $(this).css('height', 'auto');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'da') {
                    $(this).css('height', 'auto');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'da') {
                    $(this).css('height', 'auto');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'la') {
                    $(this).css('height', 'auto');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'ta') {
                    $(this).css('height', 'auto');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ma') {
                    $(this).css('height', 'auto');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sa') {
                    $(this).css('height', 'auto');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sa') {
                    $(this).css('height', 'auto');
                }
            }
        })
        $("[cell-h]").each(function () {
            var ele = $(this).attr('cell-h').match(/[h][x]/i);
            var eleD = $(this).attr('cell-h').match(/[d][x]/i);
            var eleL = $(this).attr('cell-h').match(/[l][x]/i);
            var eleT = $(this).attr('cell-h').match(/[t][x]/i);
            var eleM = $(this).attr('cell-h').match(/[m][x]/i);
            var eleS = $(this).attr('cell-h').match(/[s][x]/i);
            if (ele == 'hx') {
                $(this).css('height', 'max-content');
            }
            if (ele != 'hx') {
                if (eleD == 'dx') {
                    $(this).css('height', 'max-content');
                }
                if (eleL == 'lx' & eleD != 'dx') {
                    $(this).css('height', 'max-content');
                }
                if (eleT == 'tx' & eleD != 'dx' & eleL != 'lx') {
                    $(this).css('height', 'max-content');
                }
                if (eleM == 'mx' & eleD != 'dx' & eleL != 'lx' & eleT != 'tx') {
                    $(this).css('height', 'max-content');
                }
                if (eleS == 'sx' & eleD != 'dx' & eleL != 'lx' & eleT != 'tx' & eleM != 'mx') {
                    $(this).css('height', 'max-content');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dx') {
                    $(this).css('height', 'max-content');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dx') {
                    $(this).css('height', 'max-content');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lx') {
                    $(this).css('height', 'max-content');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tx') {
                    $(this).css('height', 'max-content');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mx') {
                    $(this).css('height', 'max-content');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sx') {
                    $(this).css('height', 'max-content');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sx') {
                    $(this).css('height', 'max-content');
                }
            }
        })
        $("[cell-h]").each(function () {
            var ele = $(this).attr('cell-h').match(/[h][n]/i);
            var eleD = $(this).attr('cell-h').match(/[d][n]/i);
            var eleL = $(this).attr('cell-h').match(/[l][n]/i);
            var eleT = $(this).attr('cell-h').match(/[t][n]/i);
            var eleM = $(this).attr('cell-h').match(/[m][n]/i);
            var eleS = $(this).attr('cell-h').match(/[s][n]/i);
            if (ele == 'hn') {
                $(this).css('height', 'min-content');
            }
            if (ele != 'hn') {
                if (eleD == 'dn') {
                    $(this).css('height', 'min-content');
                }
                if (eleL == 'ln' & eleD != 'dn') {
                    $(this).css('height', 'min-content');
                }
                if (eleT == 'tn' & eleD != 'dn' & eleL != 'ln') {
                    $(this).css('height', 'min-content');
                }
                if (eleM == 'mn' & eleD != 'dn' & eleL != 'ln' & eleT != 'tn') {
                    $(this).css('height', 'min-content');
                }
                if (eleS == 'sn' & eleD != 'dn' & eleL != 'ln' & eleT != 'tn' & eleM != 'mn') {
                    $(this).css('height', 'min-content');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dn') {
                    $(this).css('height', 'min-content');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dn') {
                    $(this).css('height', 'min-content');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'ln') {
                    $(this).css('height', 'min-content');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tn') {
                    $(this).css('height', 'max-content');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mn') {
                    $(this).css('height', 'min-content');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sn') {
                    $(this).css('height', 'min-content');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sn') {
                    $(this).css('height', 'min-content');
                }
            }
        })
    })

        .resize();

});
//For Margin
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-m]").each(function () {
            var margin = $(this).attr('cell-m').match(/[m][^,]*?(\d{1,})*/i);
            var marginDesk = $(this).attr('cell-m').match(/[d][m][^,]*?(\d{1,})*/i);
            var marginLarge = $(this).attr('cell-m').match(/[l][m][^,]*?(\d{1,})*/i);
            var marginTab = $(this).attr('cell-m').match(/[t][m][^,]*?(\d{1,})*/i);
            var marginMobile = $(this).attr('cell-m').match(/[m][m][^,]*?(\d{1,})*/i);
            var marginSmall = $(this).attr('cell-m').match(/[s][m][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-m').match(/[m]/i);
            var eleD = $(this).attr('cell-m').match(/[d][m]/i);
            var eleL = $(this).attr('cell-m').match(/[l][m]/i);
            var eleT = $(this).attr('cell-m').match(/[t][m]/i);
            var eleM = $(this).attr('cell-m').match(/[m][m]/i);
            var eleS = $(this).attr('cell-m').match(/[s][m]/i);
            if (ele == 'm') {
                $(this).css('margin', '' + margin[1] + 'px ' + margin[1] + 'px ' + margin[1] + 'px ' + margin[1] + 'px');
            }
            if (ele != 'm') {
                if (eleD == 'dm') {
                    $(this).css('margin', '' + marginDesk[1] + 'px ' + marginDesk[1] + 'px ' + marginDesk[1] + 'px ' + marginDesk[1] + 'px');
                }
                if (eleL == 'lm' & eleD != 'dm') {
                    $(this).css('margin', '' + marginLarge[1] + 'px ' + marginLarge[1] + 'px ' + marginLarge[1] + 'px ' + marginLarge[1] + 'px');
                }
                if (eleT == 'tm' & eleD != 'dm' & eleL != 'lm') {
                    $(this).css('margin', '' + marginTab[1] + 'px ' + marginTab[1] + 'px ' + marginTab[1] + 'px ' + marginTab[1] + 'px');
                }
                if (eleM == 'mm' & eleD != 'dm' & eleL != 'lm' & eleT != 'tm') {
                    $(this).css('margin', '' + marginMobile[1] + 'px ' + marginMobile[1] + 'px ' + marginMobile[1] + 'px ' + marginMobile[1] + 'px');
                }
                if (eleS == 'sm' & eleD != 'dm' & eleL != 'lm' & eleT != 'tm' & eleM != 'mm') {
                    $(this).css('margin', '' + marginSmall[1] + 'px ' + marginSmall[1] + 'px ' + marginSmall[1] + 'px ' + marginSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dm') {
                    $(this).css('margin', '' + marginDesk[1] + 'px ' + marginDesk[1] + 'px ' + marginDesk[1] + 'px ' + marginDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dm') {
                    $(this).css('margin', '' + marginDesk[1] + 'px ' + marginDesk[1] + 'px ' + marginDesk[1] + 'px ' + marginDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lm') {
                    $(this).css('margin', '' + marginLarge[1] + 'px ' + marginLarge[1] + 'px ' + marginLarge[1] + 'px ' + marginLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tm') {
                    $(this).css('margin', '' + marginTab[1] + 'px ' + marginTab[1] + 'px ' + marginTab[1] + 'px ' + marginTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mm') {
                    $(this).css('margin', '' + marginMobile[1] + 'px ' + marginMobile[1] + 'px ' + marginMobile[1] + 'px ' + marginMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sm') {
                    $(this).css('margin', '' + marginSmall[1] + 'px ' + marginSmall[1] + 'px ' + marginSmall[1] + 'px ' + marginSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sm') {
                    $(this).css('margin', '' + marginSmall[1] + 'px ' + marginSmall[1] + 'px ' + marginSmall[1] + 'px ' + marginSmall[1] + 'px');
                }
            }
        })
        $("[cell-m]").each(function () {
            var marginLeft = $(this).attr('cell-m').match(/[l][^,]*?(\d{1,})*/i);
            var marginLeftDesk = $(this).attr('cell-m').match(/[d][l][^,]*?(\d{1,})*/i);
            var marginLeftLarge = $(this).attr('cell-m').match(/[l][l][^,]*?(\d{1,})*/i);
            var marginLeftTab = $(this).attr('cell-m').match(/[t][l][^,]*?(\d{1,})*/i);
            var marginLeftMobile = $(this).attr('cell-m').match(/[m][l][^,]*?(\d{1,})*/i);
            var marginLeftSmall = $(this).attr('cell-m').match(/[s][l][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-m').match(/[l]/i);
            var eleD = $(this).attr('cell-m').match(/[d][l]/i);
            var eleL = $(this).attr('cell-m').match(/[l][l]/i);
            var eleT = $(this).attr('cell-m').match(/[t][l]/i);
            var eleM = $(this).attr('cell-m').match(/[m][l]/i);
            var eleS = $(this).attr('cell-m').match(/[s][l]/i);
            if (ele == 'l') {
                $(this).css('margin-left', '' + marginLeft[1] + 'px');
            }
            if (ele != 'l') {
                if (eleD == 'dl') {
                    $(this).css('margin-left', '' + marginLeftDesk[1] + 'px');
                }
                if (eleL == 'll' & eleD != 'dl') {
                    $(this).css('margin-left', '' + marginLeftLarge[1] + 'px');
                }
                if (eleT == 'tl' & eleD != 'dl' & eleL != 'll') {
                    $(this).css('margin-left', '' + marginLeftTab[1] + 'px');
                }
                if (eleM == 'ml' & eleD != 'dl' & eleL != 'll' & eleT != 'tl') {
                    $(this).css('margin-left', '' + marginLeftMobile[1] + 'px');
                }
                if (eleS == 'sl' & eleD != 'dl' & eleL != 'll' & eleT != 'tl' & eleM != 'ml') {
                    $(this).css('margin-left', '' + marginLeftSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dl') {
                    $(this).css('margin-left', '' + marginLeftDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dl') {
                    $(this).css('margin-left', '' + marginLeftDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'll') {
                    $(this).css('margin-left', '' + marginLeftLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tl') {
                    $(this).css('margin-left', '' + marginLeftTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ml') {
                    $(this).css('margin-left', '' + marginLeftMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sl') {
                    $(this).css('margin-left', '' + marginLeftSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sl') {
                    $(this).css('margin-left', '' + marginLeftSmall[1] + 'px');
                }
            }
        })
        $("[cell-m]").each(function () {
            var marginRight = $(this).attr('cell-m').match(/[r][^,]*?(\d{1,})*/i);
            var marginRightDesk = $(this).attr('cell-m').match(/[d][r][^,]*?(\d{1,})*/i);
            var marginRightLarge = $(this).attr('cell-m').match(/[l][r][^,]*?(\d{1,})*/i);
            var marginRightTab = $(this).attr('cell-m').match(/[t][r][^,]*?(\d{1,})*/i);
            var marginRightMobile = $(this).attr('cell-m').match(/[m][r][^,]*?(\d{1,})*/i);
            var marginRightSmall = $(this).attr('cell-m').match(/[s][r][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-m').match(/[r]/i);
            var eleD = $(this).attr('cell-m').match(/[d][r]/i);
            var eleL = $(this).attr('cell-m').match(/[l][r]/i);
            var eleT = $(this).attr('cell-m').match(/[t][r]/i);
            var eleM = $(this).attr('cell-m').match(/[m][r]/i);
            var eleS = $(this).attr('cell-m').match(/[s][r]/i);
            if (ele == 'r') {
                $(this).css('margin-right', '' + marginRight[1] + 'px');
            }
            if (ele != 'r') {
                if (eleD == 'dr') {
                    $(this).css('margin-right', '' + marginRightDesk[1] + 'px');
                }
                if (eleL == 'lr' & eleD != 'dr') {
                    $(this).css('margin-right', '' + marginRightLarge[1] + 'px');
                }
                if (eleT == 'tr' & eleD != 'dr' & eleL != 'lr') {
                    $(this).css('margin-right', '' + marginRightTab[1] + 'px');
                }
                if (eleM == 'mr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr') {
                    $(this).css('margin-right', '' + marginRightMobile[1] + 'px');
                }
                if (eleS == 'sr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr' & eleM != 'mr') {
                    $(this).css('margin-right', '' + marginRightSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dr') {
                    $(this).css('margin-right', '' + marginRightDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dr') {
                    $(this).css('margin-right', '' + marginRightDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lr') {
                    $(this).css('margin-right', '' + marginRightLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tr') {
                    $(this).css('margin-right', '' + marginRightTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mr') {
                    $(this).css('margin-right', '' + marginRightMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sr') {
                    $(this).css('margin-right', '' + marginRightSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sr') {
                    $(this).css('margin-right', '' + marginRightSmall[1] + 'px');
                }
            }
        })
        $("[cell-m]").each(function () {
            var marginTop = $(this).attr('cell-m').match(/[t][^,]*?(\d{1,})*/i);
            var marginTopDesk = $(this).attr('cell-m').match(/[d][t][^,]*?(\d{1,})*/i);
            var marginTopLarge = $(this).attr('cell-m').match(/[l][t][^,]*?(\d{1,})*/i);
            var marginTopTab = $(this).attr('cell-m').match(/[t][t][^,]*?(\d{1,})*/i);
            var marginTopMobile = $(this).attr('cell-m').match(/[m][t][^,]*?(\d{1,})*/i);
            var marginTopSmall = $(this).attr('cell-m').match(/[s][t][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-m').match(/[t]/i);
            var eleD = $(this).attr('cell-m').match(/[d][t]/i);
            var eleL = $(this).attr('cell-m').match(/[l][t]/i);
            var eleT = $(this).attr('cell-m').match(/[t][t]/i);
            var eleM = $(this).attr('cell-m').match(/[m][t]/i);
            var eleS = $(this).attr('cell-m').match(/[s][t]/i);
            if (ele == 't') {
                $(this).css('margin-top', '' + marginTop[1] + 'px');
            }
            if (ele != 't') {
                if (eleD == 'dt') {
                    $(this).css('margin-top', '' + marginTopDesk[1] + 'px');
                }
                if (eleL == 'lt' & eleD != 'dt') {
                    $(this).css('margin-top', '' + marginTopLarge[1] + 'px');
                }
                if (eleT == 'tt' & eleD != 'dt' & eleL != 'lt') {
                    $(this).css('margin-top', '' + marginTopTab[1] + 'px');
                }
                if (eleM == 'mt' & eleD != 'dt' & eleL != 'lt' & eleT != 'tt') {
                    $(this).css('margin-top', '' + marginTopMobile[1] + 'px');
                }
                if (eleS == 'st' & eleD != 'dt' & eleL != 'lt' & eleT != 'tt' & eleM != 'mt') {
                    $(this).css('margin-top', '' + marginTopSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dt') {
                    $(this).css('margin-top', '' + marginTopDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dt') {
                    $(this).css('margin-top', '' + marginTopDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lt') {
                    $(this).css('margin-top', '' + marginTopLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tt') {
                    $(this).css('margin-top', '' + marginTopTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mt') {
                    $(this).css('margin-top', '' + marginTopMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'st') {
                    $(this).css('margin-top', '' + marginTopSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'st') {
                    $(this).css('margin-top', '' + marginTopSmall[1] + 'px');
                }
            }
        })
        $("[cell-m]").each(function () {
            var marginBottom = $(this).attr('cell-m').match(/[b][^,]*?(\d{1,})*/i);
            var marginBottomDesk = $(this).attr('cell-m').match(/[d][b][^,]*?(\d{1,})*/i);
            var marginBottomLarge = $(this).attr('cell-m').match(/[l][b][^,]*?(\d{1,})*/i);
            var marginBottomTab = $(this).attr('cell-m').match(/[t][b][^,]*?(\d{1,})*/i);
            var marginBottomMobile = $(this).attr('cell-m').match(/[m][b][^,]*?(\d{1,})*/i);
            var marginBottomSmall = $(this).attr('cell-m').match(/[s][b][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-m').match(/[b]/i);
            var eleD = $(this).attr('cell-m').match(/[d][b]/i);
            var eleL = $(this).attr('cell-m').match(/[l][b]/i);
            var eleT = $(this).attr('cell-m').match(/[t][b]/i);
            var eleM = $(this).attr('cell-m').match(/[m][b]/i);
            var eleS = $(this).attr('cell-m').match(/[s][b]/i);
            if (ele == 'b') {
                $(this).css('margin-bottom', '' + marginBottom[1] + 'px');
            }
            if (ele != 'b') {
                if (eleD == 'db') {
                    $(this).css('margin-bottom', '' + marginBottomDesk[1] + 'px');
                }
                if (eleL == 'lb' & eleD != 'db') {
                    $(this).css('margin-bottom', '' + marginBottomLarge[1] + 'px');
                }
                if (eleT == 'tb' & eleD != 'db' & eleL != 'lb') {
                    $(this).css('margin-bottom', '' + marginBottomTab[1] + 'px');
                }
                if (eleM == 'mb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb') {
                    $(this).css('margin-bottom', '' + marginBottomMobile[1] + 'px');
                }
                if (eleS == 'sb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb' & eleM != 'mb') {
                    $(this).css('margin-bottom', '' + marginBottomSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'db') {
                    $(this).css('margin-bottom', '' + marginBottomDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'db') {
                    $(this).css('margin-bottom', '' + marginBottomDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lb') {
                    $(this).css('margin-bottom', '' + marginBottomLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tb') {
                    $(this).css('margin-bottom', '' + marginBottomTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mb') {
                    $(this).css('margin-bottom', '' + marginBottomMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sb') {
                    $(this).css('margin-bottom', '' + marginBottomSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sb') {
                    $(this).css('margin-bottom', '' + marginBottomSmall[1] + 'px');
                }
            }
        })

        $("[cell-m]").each(function () {
            var margin = $(this).attr('cell-m').match(/[m][.][^,]*?(\d{1,})*/i);
            var marginDesk = $(this).attr('cell-m').match(/[d][m][.][^,]*?(\d{1,})*/i);
            var marginLarge = $(this).attr('cell-m').match(/[l][m][.][^,]*?(\d{1,})*/i);
            var marginTab = $(this).attr('cell-m').match(/[t][m][.][^,]*?(\d{1,})*/i);
            var marginMobile = $(this).attr('cell-m').match(/[m][m][.][^,]*?(\d{1,})*/i);
            var marginSmall = $(this).attr('cell-m').match(/[s][m][.][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-m').match(/[m][.]/i);
            var eleD = $(this).attr('cell-m').match(/[d][m][.]/i);
            var eleL = $(this).attr('cell-m').match(/[l][m][.]/i);
            var eleT = $(this).attr('cell-m').match(/[t][m][.]/i);
            var eleM = $(this).attr('cell-m').match(/[m][m][.]/i);
            var eleS = $(this).attr('cell-m').match(/[s][m][.]/i);
            if (ele == 'm.') {
                $(this).css('margin', '' + margin[1] + '% ' + margin[1] + '% ' + margin[1] + '% ' + margin[1] + '%');
            }
            if (ele != 'm.') {
                if (eleD == 'dm.') {
                    $(this).css('margin', '' + marginDesk[1] + '% ' + marginDesk[1] + '% ' + marginDesk[1] + '% ' + marginDesk[1] + '%');
                }
                if (eleL == 'lm.' & eleD != 'dm.') {
                    $(this).css('margin', '' + marginLarge[1] + '% ' + marginLarge[1] + '% ' + marginLarge[1] + '% ' + marginLarge[1] + '%');
                }
                if (eleT == 'tm.' & eleD != 'dm.' & eleL != 'lm.') {
                    $(this).css('margin', '' + marginTab[1] + '% ' + marginTab[1] + '% ' + marginTab[1] + '% ' + marginTab[1] + '%');
                }
                if (eleM == 'mm.' & eleD != 'dm.' & eleL != 'lm.' & eleT != 'tm.') {
                    $(this).css('margin', '' + marginMobile[1] + '% ' + marginMobile[1] + '% ' + marginMobile[1] + '% ' + marginMobile[1] + '%');
                }
                if (eleS == 'sm.' & eleD != 'dm.' & eleL != 'lm.' & eleT != 'tm.' & eleM != 'mm.') {
                    $(this).css('margin', '' + marginSmall[1] + '% ' + marginSmall[1] + '% ' + marginSmall[1] + '% ' + marginSmall[1] + '%');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dm.') {
                    $(this).css('margin', '' + marginDesk[1] + '% ' + marginDesk[1] + '% ' + marginDesk[1] + '% ' + marginDesk[1] + '%');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dm.') {
                    $(this).css('margin', '' + marginDesk[1] + '% ' + marginDesk[1] + '% ' + marginDesk[1] + '% ' + marginDesk[1] + '%');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lm.') {
                    $(this).css('margin', '' + marginLarge[1] + '% ' + marginLarge[1] + '% ' + marginLarge[1] + '% ' + marginLarge[1] + '%');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tm.') {
                    $(this).css('margin', '' + marginTab[1] + '% ' + marginTab[1] + '% ' + marginTab[1] + '% ' + marginTab[1] + '%');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mm.') {
                    $(this).css('margin', '' + marginMobile[1] + '% ' + marginMobile[1] + '% ' + marginMobile[1] + '% ' + marginMobile[1] + '%');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sm.') {
                    $(this).css('margin', '' + marginSmall[1] + '% ' + marginSmall[1] + '% ' + marginSmall[1] + '% ' + marginSmall[1] + '%');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sm.') {
                    $(this).css('margin', '' + marginSmall[1] + '% ' + marginSmall[1] + '% ' + marginSmall[1] + '% ' + marginSmall[1] + '%');
                }
            }
        })
        $("[cell-m]").each(function () {
            var marginLeft = $(this).attr('cell-m').match(/[l][.][^,]*?(\d{1,})*/i);
            var marginLeftDesk = $(this).attr('cell-m').match(/[d][l][.][^,]*?(\d{1,})*/i);
            var marginLeftLarge = $(this).attr('cell-m').match(/[l][l][.][^,]*?(\d{1,})*/i);
            var marginLeftTab = $(this).attr('cell-m').match(/[t][l][.][^,]*?(\d{1,})*/i);
            var marginLeftMobile = $(this).attr('cell-m').match(/[m][l][.][^,]*?(\d{1,})*/i);
            var marginLeftSmall = $(this).attr('cell-m').match(/[s][l][.][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-m').match(/[l][.]/i);
            var eleD = $(this).attr('cell-m').match(/[d][l][.]/i);
            var eleL = $(this).attr('cell-m').match(/[l][l][.]/i);
            var eleT = $(this).attr('cell-m').match(/[t][l][.]/i);
            var eleM = $(this).attr('cell-m').match(/[m][l][.]/i);
            var eleS = $(this).attr('cell-m').match(/[s][l][.]/i);
            if (ele == 'l.') {
                $(this).css('margin-left', '' + marginLeft[1] + '%');
            }
            if (ele != 'l.') {
                if (eleD == 'dl.') {
                    $(this).css('margin-left', '' + marginLeftDesk[1] + '%');
                }
                if (eleL == 'll.' & eleD != 'dl') {
                    $(this).css('margin-left', '' + marginLeftLarge[1] + '%');
                }
                if (eleT == 'tl.' & eleD != 'dl.' & eleL != 'll.') {
                    $(this).css('margin-left', '' + marginLeftTab[1] + '%');
                }
                if (eleM == 'ml.' & eleD != 'dl.' & eleL != 'll.' & eleT != 'tl.') {
                    $(this).css('margin-left', '' + marginLeftMobile[1] + '%');
                }
                if (eleS == 'sl.' & eleD != 'dl.' & eleL != 'll.' & eleT != 'tl.' & eleM != 'ml.') {
                    $(this).css('margin-left', '' + marginLeftSmall[1] + '%');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dl.') {
                    $(this).css('margin-left', '' + marginLeftDesk[1] + '%');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dl.') {
                    $(this).css('margin-left', '' + marginLeftDesk[1] + '%');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'll.') {
                    $(this).css('margin-left', '' + marginLeftLarge[1] + '%');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tl.') {
                    $(this).css('margin-left', '' + marginLeftTab[1] + '%');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ml.') {
                    $(this).css('margin-left', '' + marginLeftMobile[1] + '%');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sl.') {
                    $(this).css('margin-left', '' + marginLeftSmall[1] + '%');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sl.') {
                    $(this).css('margin-left', '' + marginLeftSmall[1] + '%');
                }
            }
        })
        $("[cell-m]").each(function () {
            var marginRight = $(this).attr('cell-m').match(/[r][.][^,]*?(\d{1,})*/i);
            var marginRightDesk = $(this).attr('cell-m').match(/[d][r][.][^,]*?(\d{1,})*/i);
            var marginRightLarge = $(this).attr('cell-m').match(/[l][r][.][^,]*?(\d{1,})*/i);
            var marginRightTab = $(this).attr('cell-m').match(/[t][r][.][^,]*?(\d{1,})*/i);
            var marginRightMobile = $(this).attr('cell-m').match(/[m][r][.][^,]*?(\d{1,})*/i);
            var marginRightSmall = $(this).attr('cell-m').match(/[s][r][.][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-m').match(/[r][.]/i);
            var eleD = $(this).attr('cell-m').match(/[d][r][.]/i);
            var eleL = $(this).attr('cell-m').match(/[l][r][.]/i);
            var eleT = $(this).attr('cell-m').match(/[t][r][.]/i);
            var eleM = $(this).attr('cell-m').match(/[m][r][.]/i);
            var eleS = $(this).attr('cell-m').match(/[s][r][.]/i);
            if (ele == 'r.') {
                $(this).css('margin-right', '' + marginRight[1] + '%');
            }
            if (ele != 'r.') {
                if (eleD == 'dr.') {
                    $(this).css('margin-right', '' + marginRightDesk[1] + '%');
                }
                if (eleL == 'lr.' & eleD != 'dr.') {
                    $(this).css('margin-right', '' + marginRightLarge[1] + '%');
                }
                if (eleT == 'tr.' & eleD != 'dr.' & eleL != 'lr.') {
                    $(this).css('margin-right', '' + marginRightTab[1] + '%');
                }
                if (eleM == 'mr.' & eleD != 'dr.' & eleL != 'lr.' & eleT != 'tr.') {
                    $(this).css('margin-right', '' + marginRightMobile[1] + '%');
                }
                if (eleS == 'sr.' & eleD != 'dr.' & eleL != 'lr.' & eleT != 'tr.' & eleM != 'mr.') {
                    $(this).css('margin-right', '' + marginRightSmall[1] + '%');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dr.') {
                    $(this).css('margin-right', '' + marginRightDesk[1] + '%');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dr.') {
                    $(this).css('margin-right', '' + marginRightDesk[1] + '%');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lr.') {
                    $(this).css('margin-right', '' + marginRightLarge[1] + '%');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tr.') {
                    $(this).css('margin-right', '' + marginRightTab[1] + '%');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mr.') {
                    $(this).css('margin-right', '' + marginRightMobile[1] + '%');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sr.') {
                    $(this).css('margin-right', '' + marginRightSmall[1] + '%');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sr.') {
                    $(this).css('margin-right', '' + marginRightSmall[1] + '%');
                }
            }
        })
        $("[cell-m]").each(function () {
            var marginTop = $(this).attr('cell-m').match(/[t][.][^,]*?(\d{1,})*/i);
            var marginTopDesk = $(this).attr('cell-m').match(/[d][t][.][^,]*?(\d{1,})*/i);
            var marginTopLarge = $(this).attr('cell-m').match(/[l][t][.][^,]*?(\d{1,})*/i);
            var marginTopTab = $(this).attr('cell-m').match(/[t][t][.][^,]*?(\d{1,})*/i);
            var marginTopMobile = $(this).attr('cell-m').match(/[m][t][.][^,]*?(\d{1,})*/i);
            var marginTopSmall = $(this).attr('cell-m').match(/[s][t][.][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-m').match(/[t][.]/i);
            var eleD = $(this).attr('cell-m').match(/[d][t][.]/i);
            var eleL = $(this).attr('cell-m').match(/[l][t][.]/i);
            var eleT = $(this).attr('cell-m').match(/[t][t][.]/i);
            var eleM = $(this).attr('cell-m').match(/[m][t][.]/i);
            var eleS = $(this).attr('cell-m').match(/[s][t][.]/i);
            if (ele == 't.') {
                $(this).css('margin-top', '' + marginTop[1] + '%');
            }
            if (ele != 't.') {
                if (eleD == 'dt.') {
                    $(this).css('margin-top', '' + marginTopDesk[1] + '%');
                }
                if (eleL == 'lt.' & eleD != 'dt.') {
                    $(this).css('margin-top', '' + marginTopLarge[1] + '%');
                }
                if (eleT == 'tt.' & eleD != 'dt.' & eleL != 'lt.') {
                    $(this).css('margin-top', '' + marginTopTab[1] + '%');
                }
                if (eleM == 'mt.' & eleD != 'dt.' & eleL != 'lt.' & eleT != 'tt.') {
                    $(this).css('margin-top', '' + marginTopMobile[1] + '%');
                }
                if (eleS == 'st.' & eleD != 'dt.' & eleL != 'lt.' & eleT != 'tt.' & eleM != 'mt.') {
                    $(this).css('margin-top', '' + marginTopSmall[1] + '%');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dt.') {
                    $(this).css('margin-top', '' + marginTopDesk[1] + '%');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dt.') {
                    $(this).css('margin-top', '' + marginTopDesk[1] + '%');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lt.') {
                    $(this).css('margin-top', '' + marginTopLarge[1] + '%');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tt.') {
                    $(this).css('margin-top', '' + marginTopTab[1] + '%');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mt.') {
                    $(this).css('margin-top', '' + marginTopMobile[1] + '%');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'st.') {
                    $(this).css('margin-top', '' + marginTopSmall[1] + '%');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'st.') {
                    $(this).css('margin-top', '' + marginTopSmall[1] + '%');
                }
            }
        })
        $("[cell-m]").each(function () {
            var marginBottom = $(this).attr('cell-m').match(/[b][.][^,]*?(\d{1,})*/i);
            var marginBottomDesk = $(this).attr('cell-m').match(/[d][b][.][^,]*?(\d{1,})*/i);
            var marginBottomLarge = $(this).attr('cell-m').match(/[l][b][.][^,]*?(\d{1,})*/i);
            var marginBottomTab = $(this).attr('cell-m').match(/[t][b][.][^,]*?(\d{1,})*/i);
            var marginBottomMobile = $(this).attr('cell-m').match(/[m][b][.][^,]*?(\d{1,})*/i);
            var marginBottomSmall = $(this).attr('cell-m').match(/[s][b][.][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-m').match(/[b][.]/i);
            var eleD = $(this).attr('cell-m').match(/[d][b][.]/i);
            var eleL = $(this).attr('cell-m').match(/[l][b][.]/i);
            var eleT = $(this).attr('cell-m').match(/[t][b][.]/i);
            var eleM = $(this).attr('cell-m').match(/[m][b][.]/i);
            var eleS = $(this).attr('cell-m').match(/[s][b][.]/i);
            if (ele == 'b.') {
                $(this).css('margin-bottom', '' + marginBottom[1] + '%');
            }
            if (ele != 'b.') {
                if (eleD == 'db.') {
                    $(this).css('margin-bottom', '' + marginBottomDesk[1] + '%');
                }
                if (eleL == 'lb.' & eleD != 'db.') {
                    $(this).css('margin-bottom', '' + marginBottomLarge[1] + '%');
                }
                if (eleT == 'tb.' & eleD != 'db.' & eleL != 'lb.') {
                    $(this).css('margin-bottom', '' + marginBottomTab[1] + '%');
                }
                if (eleM == 'mb.' & eleD != 'db.' & eleL != 'lb.' & eleT != 'tb.') {
                    $(this).css('margin-bottom', '' + marginBottomMobile[1] + '%');
                }
                if (eleS == 'sb.' & eleD != 'db.' & eleL != 'lb.' & eleT != 'tb.' & eleM != 'mb.') {
                    $(this).css('margin-bottom', '' + marginBottomSmall[1] + '%');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'db.') {
                    $(this).css('margin-bottom', '' + marginBottomDesk[1] + '%');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'db.') {
                    $(this).css('margin-bottom', '' + marginBottomDesk[1] + '%');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lb.') {
                    $(this).css('margin-bottom', '' + marginBottomLarge[1] + '%');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tb.') {
                    $(this).css('margin-bottom', '' + marginBottomTab[1] + '%');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mb.') {
                    $(this).css('margin-bottom', '' + marginBottomMobile[1] + '%');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sb.') {
                    $(this).css('margin-bottom', '' + marginBottomSmall[1] + '%');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sb.') {
                    $(this).css('margin-bottom', '' + marginBottomSmall[1] + '%');
                }
            }
        })
    })

        .resize();

});
//For Padding
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-p]").each(function () {
            var padding = $(this).attr('cell-p').match(/[p][^,]*?(\d{1,})*/i);
            var paddingDesk = $(this).attr('cell-p').match(/[d][p][^,]*?(\d{1,})*/i);
            var paddingLarge = $(this).attr('cell-p').match(/[l][p][^,]*?(\d{1,})*/i);
            var paddingTab = $(this).attr('cell-p').match(/[t][p][^,]*?(\d{1,})*/i);
            var paddingMobile = $(this).attr('cell-p').match(/[m][p][^,]*?(\d{1,})*/i);
            var paddingSmall = $(this).attr('cell-p').match(/[s][p][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-p').match(/[p]/i);
            var eleD = $(this).attr('cell-p').match(/[d][p]/i);
            var eleL = $(this).attr('cell-p').match(/[l][p]/i);
            var eleT = $(this).attr('cell-p').match(/[t][p]/i);
            var eleM = $(this).attr('cell-p').match(/[m][p]/i);
            var eleS = $(this).attr('cell-p').match(/[s][p]/i);
            if (ele == 'p') {
                $(this).css('padding', '' + padding[1] + 'px ' + padding[1] + 'px ' + padding[1] + 'px ' + padding[1] + 'px');
            }
            if (ele != 'p') {
                if (eleD == 'dp') {
                    $(this).css('padding', '' + paddingDesk[1] + 'px ' + paddingDesk[1] + 'px ' + paddingDesk[1] + 'px ' + paddingDesk[1] + 'px');
                }
                if (eleL == 'lp' & eleD != 'dp') {
                    $(this).css('padding', '' + paddingLarge[1] + 'px ' + paddingLarge[1] + 'px ' + paddingLarge[1] + 'px ' + paddingLarge[1] + 'px');
                }
                if (eleT == 'tp' & eleD != 'dp' & eleL != 'lp') {
                    $(this).css('padding', '' + paddingTab[1] + 'px ' + paddingTab[1] + 'px ' + paddingTab[1] + 'px ' + paddingTab[1] + 'px');
                }
                if (eleM == 'mp' & eleD != 'dp' & eleL != 'lp' & eleT != 'tp') {
                    $(this).css('padding', '' + paddingMobile[1] + 'px ' + paddingMobile[1] + 'px ' + paddingMobile[1] + 'px ' + paddingMobile[1] + 'px');
                }
                if (eleS == 'sp' & eleD != 'dp' & eleL != 'lp' & eleT != 'tp' & eleM != 'mp') {
                    $(this).css('padding', '' + paddingSmall[1] + 'px ' + paddingSmall[1] + 'px ' + paddingSmall[1] + 'px ' + paddingSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dp') {
                    $(this).css('padding', '' + paddingDesk[1] + 'px ' + paddingDesk[1] + 'px ' + paddingDesk[1] + 'px ' + paddingDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dp') {
                    $(this).css('padding', '' + paddingDesk[1] + 'px ' + paddingDesk[1] + 'px ' + paddingDesk[1] + 'px ' + paddingDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lp') {
                    $(this).css('padding', '' + paddingLarge[1] + 'px ' + paddingLarge[1] + 'px ' + paddingLarge[1] + 'px ' + paddingLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tp') {
                    $(this).css('padding', '' + paddingTab[1] + 'px ' + paddingTab[1] + 'px ' + paddingTab[1] + 'px ' + paddingTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mp') {
                    $(this).css('padding', '' + paddingMobile[1] + 'px ' + paddingMobile[1] + 'px ' + paddingMobile[1] + 'px ' + paddingMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sp') {
                    $(this).css('padding', '' + paddingSmall[1] + 'px ' + paddingSmall[1] + 'px ' + paddingSmall[1] + 'px ' + paddingSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sp') {
                    $(this).css('padding', '' + paddingSmall[1] + 'px ' + paddingSmall[1] + 'px ' + paddingSmall[1] + 'px ' + paddingSmall[1] + 'px');
                }
            }
        })
        $("[cell-p]").each(function () {
            var paddingLeft = $(this).attr('cell-p').match(/[l][^,]*?(\d{1,})*/i);
            var paddingLeftDesk = $(this).attr('cell-p').match(/[d][l][^,]*?(\d{1,})*/i);
            var paddingLeftLarge = $(this).attr('cell-p').match(/[l][l][^,]*?(\d{1,})*/i);
            var paddingLeftTab = $(this).attr('cell-p').match(/[t][l][^,]*?(\d{1,})*/i);
            var paddingLeftMobile = $(this).attr('cell-p').match(/[m][l][^,]*?(\d{1,})*/i);
            var paddingLeftSmall = $(this).attr('cell-p').match(/[s][l][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-p').match(/[l]/i);
            var eleD = $(this).attr('cell-p').match(/[d][l]/i);
            var eleL = $(this).attr('cell-p').match(/[l][l]/i);
            var eleT = $(this).attr('cell-p').match(/[t][l]/i);
            var eleM = $(this).attr('cell-p').match(/[m][l]/i);
            var eleS = $(this).attr('cell-p').match(/[s][l]/i);
            if (ele == 'l') {
                $(this).css('padding-left', '' + paddingLeft[1] + 'px');
            }
            if (ele != 'l') {
                if (eleD == 'dl') {
                    $(this).css('padding-left', '' + paddingLeftDesk[1] + 'px');
                }
                if (eleL == 'll' & eleD != 'dl') {
                    $(this).css('padding-left', '' + paddingLeftLarge[1] + 'px');
                }
                if (eleT == 'tl' & eleD != 'dl' & eleL != 'll') {
                    $(this).css('padding-left', '' + paddingLeftTab[1] + 'px');
                }
                if (eleM == 'ml' & eleD != 'dl' & eleL != 'll' & eleT != 'tl') {
                    $(this).css('padding-left', '' + paddingLeftMobile[1] + 'px');
                }
                if (eleS == 'sl' & eleD != 'dl' & eleL != 'll' & eleT != 'tl' & eleM != 'ml') {
                    $(this).css('padding-left', '' + paddingLeftSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dl') {
                    $(this).css('padding-left', '' + paddingLeftDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dl') {
                    $(this).css('padding-left', '' + paddingLeftDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'll') {
                    $(this).css('padding-left', '' + paddingLeftLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tl') {
                    $(this).css('padding-left', '' + paddingLeftTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ml') {
                    $(this).css('padding-left', '' + paddingLeftMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sl') {
                    $(this).css('padding-left', '' + paddingLeftSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sl') {
                    $(this).css('padding-left', '' + paddingLeftSmall[1] + 'px');
                }
            }
        })
        $("[cell-p]").each(function () {
            var paddingRight = $(this).attr('cell-p').match(/[r][^,]*?(\d{1,})*/i);
            var paddingRightDesk = $(this).attr('cell-p').match(/[d][r][^,]*?(\d{1,})*/i);
            var paddingRightLarge = $(this).attr('cell-p').match(/[l][r][^,]*?(\d{1,})*/i);
            var paddingRightTab = $(this).attr('cell-p').match(/[t][r][^,]*?(\d{1,})*/i);
            var paddingRightMobile = $(this).attr('cell-p').match(/[m][r][^,]*?(\d{1,})*/i);
            var paddingRightSmall = $(this).attr('cell-p').match(/[s][r][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-p').match(/[r]/i);
            var eleD = $(this).attr('cell-p').match(/[d][r]/i);
            var eleL = $(this).attr('cell-p').match(/[l][r]/i);
            var eleT = $(this).attr('cell-p').match(/[t][r]/i);
            var eleM = $(this).attr('cell-p').match(/[m][r]/i);
            var eleS = $(this).attr('cell-p').match(/[s][r]/i);
            if (ele == 'r') {
                $(this).css('padding-right', '' + paddingRight[1] + 'px');
            }
            if (ele != 'r') {
                if (eleD == 'dr') {
                    $(this).css('padding-right', '' + paddingRightDesk[1] + 'px');
                }
                if (eleL == 'lr' & eleD != 'dr') {
                    $(this).css('padding-right', '' + paddingRightLarge[1] + 'px');
                }
                if (eleT == 'tr' & eleD != 'dr' & eleL != 'lr') {
                    $(this).css('padding-right', '' + paddingRightTab[1] + 'px');
                }
                if (eleM == 'mr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr') {
                    $(this).css('padding-right', '' + paddingRightMobile[1] + 'px');
                }
                if (eleS == 'sr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr' & eleM != 'mr') {
                    $(this).css('padding-right', '' + paddingRightSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dr') {
                    $(this).css('padding-right', '' + paddingRightDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dr') {
                    $(this).css('padding-right', '' + paddingRightDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lr') {
                    $(this).css('padding-right', '' + paddingRightLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tr') {
                    $(this).css('padding-right', '' + paddingRightTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mr') {
                    $(this).css('padding-right', '' + paddingRightMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sr') {
                    $(this).css('padding-right', '' + paddingRightSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sr') {
                    $(this).css('padding-right', '' + paddingRightSmall[1] + 'px');
                }
            }
        })
        $("[cell-p]").each(function () {
            var paddingTop = $(this).attr('cell-p').match(/[t][^,]*?(\d{1,})*/i);
            var paddingTopDesk = $(this).attr('cell-p').match(/[d][t][^,]*?(\d{1,})*/i);
            var paddingTopLarge = $(this).attr('cell-p').match(/[l][t][^,]*?(\d{1,})*/i);
            var paddingTopTab = $(this).attr('cell-p').match(/[t][t][^,]*?(\d{1,})*/i);
            var paddingTopMobile = $(this).attr('cell-p').match(/[m][t][^,]*?(\d{1,})*/i);
            var paddingTopSmall = $(this).attr('cell-p').match(/[s][t][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-p').match(/[t]/i);
            var eleD = $(this).attr('cell-p').match(/[d][t]/i);
            var eleL = $(this).attr('cell-p').match(/[l][t]/i);
            var eleT = $(this).attr('cell-p').match(/[t][t]/i);
            var eleM = $(this).attr('cell-p').match(/[m][t]/i);
            var eleS = $(this).attr('cell-p').match(/[s][t]/i);
            if (ele == 't') {
                $(this).css('padding-top', '' + paddingTop[1] + 'px');
            }
            if (ele != 't') {
                if (eleD == 'dt') {
                    $(this).css('padding-top', '' + paddingTopDesk[1] + 'px');
                }
                if (eleL == 'lt' & eleD != 'dt') {
                    $(this).css('padding-top', '' + paddingTopLarge[1] + 'px');
                }
                if (eleT == 'tt' & eleD != 'dt' & eleL != 'lt') {
                    $(this).css('padding-top', '' + paddingTopTab[1] + 'px');
                }
                if (eleM == 'mt' & eleD != 'dt' & eleL != 'lt' & eleT != 'tt') {
                    $(this).css('padding-top', '' + paddingTopMobile[1] + 'px');
                }
                if (eleS == 'st' & eleD != 'dt' & eleL != 'lt' & eleT != 'tt' & eleM != 'mt') {
                    $(this).css('padding-top', '' + paddingTopSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dt') {
                    $(this).css('padding-top', '' + paddingTopDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dt') {
                    $(this).css('padding-top', '' + paddingTopDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lt') {
                    $(this).css('padding-top', '' + paddingTopLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tt') {
                    $(this).css('padding-top', '' + paddingTopTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mt') {
                    $(this).css('padding-top', '' + paddingTopMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'st') {
                    $(this).css('padding-top', '' + paddingTopSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'st') {
                    $(this).css('padding-top', '' + paddingTopSmall[1] + 'px');
                }
            }
        })
        $("[cell-p]").each(function () {
            var paddingBottom = $(this).attr('cell-p').match(/[b][^,]*?(\d{1,})*/i);
            var paddingBottomDesk = $(this).attr('cell-p').match(/[d][b][^,]*?(\d{1,})*/i);
            var paddingBottomLarge = $(this).attr('cell-p').match(/[l][b][^,]*?(\d{1,})*/i);
            var paddingBottomTab = $(this).attr('cell-p').match(/[t][b][^,]*?(\d{1,})*/i);
            var paddingBottomMobile = $(this).attr('cell-p').match(/[m][b][^,]*?(\d{1,})*/i);
            var paddingBottomSmall = $(this).attr('cell-p').match(/[s][b][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-p').match(/[b]/i);
            var eleD = $(this).attr('cell-p').match(/[d][b]/i);
            var eleL = $(this).attr('cell-p').match(/[l][b]/i);
            var eleT = $(this).attr('cell-p').match(/[t][b]/i);
            var eleM = $(this).attr('cell-p').match(/[m][b]/i);
            var eleS = $(this).attr('cell-p').match(/[s][b]/i);
            if (ele == 'b') {
                $(this).css('padding-bottom', '' + paddingBottom[1] + 'px');
            }
            if (ele != 'b') {
                if (eleD == 'db') {
                    $(this).css('padding-bottom', '' + paddingBottomDesk[1] + 'px');
                }
                if (eleL == 'lb' & eleD != 'db') {
                    $(this).css('padding-bottom', '' + paddingBottomLarge[1] + 'px');
                }
                if (eleT == 'tb' & eleD != 'db' & eleL != 'lb') {
                    $(this).css('padding-bottom', '' + paddingBottomTab[1] + 'px');
                }
                if (eleM == 'mb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb') {
                    $(this).css('padding-bottom', '' + paddingBottomMobile[1] + 'px');
                }
                if (eleS == 'sb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb' & eleM != 'mb') {
                    $(this).css('padding-bottom', '' + paddingBottomSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'db') {
                    $(this).css('padding-bottom', '' + paddingBottomDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'db') {
                    $(this).css('padding-bottom', '' + paddingBottomDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lb') {
                    $(this).css('padding-bottom', '' + paddingBottomLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tb') {
                    $(this).css('padding', '0px 0px ' + paddingBottomTab[1] + 'px 0px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mb') {
                    $(this).css('padding-bottom', '' + paddingBottomMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sb') {
                    $(this).css('padding-bottom', '' + paddingBottomSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sb') {
                    $(this).css('padding-bottom', '' + paddingBottomSmall[1] + 'px');
                }
            }
        })
        $("[cell-p]").each(function () {
            var padding = $(this).attr('cell-p').match(/[p][.][^,]*?(\d{1,})*/i);
            var paddingDesk = $(this).attr('cell-p').match(/[d][p][.][^,]*?(\d{1,})*/i);
            var paddingLarge = $(this).attr('cell-p').match(/[l][p][.][^,]*?(\d{1,})*/i);
            var paddingTab = $(this).attr('cell-p').match(/[t][p][.][^,]*?(\d{1,})*/i);
            var paddingMobile = $(this).attr('cell-p').match(/[m][p][.][^,]*?(\d{1,})*/i);
            var paddingSmall = $(this).attr('cell-p').match(/[s][p][.][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-p').match(/[p][.]/i);
            var eleD = $(this).attr('cell-p').match(/[d][p][.]/i);
            var eleL = $(this).attr('cell-p').match(/[l][p][.]/i);
            var eleT = $(this).attr('cell-p').match(/[t][p][.]/i);
            var eleM = $(this).attr('cell-p').match(/[m][p][.]/i);
            var eleS = $(this).attr('cell-p').match(/[s][p][.]/i);
            if (ele == 'p.') {
                $(this).css('padding', '' + padding[1] + '% ' + padding[1] + '% ' + padding[1] + '% ' + padding[1] + '%');
            }
            if (ele != 'p.') {
                if (eleD == 'dp.') {
                    $(this).css('padding', '' + paddingDesk[1] + '% ' + paddingDesk[1] + '% ' + paddingDesk[1] + '% ' + paddingDesk[1] + '%');
                }
                if (eleL == 'lp.' & eleD != 'dp.') {
                    $(this).css('padding', '' + paddingLarge[1] + '% ' + paddingLarge[1] + '% ' + paddingLarge[1] + '% ' + paddingLarge[1] + '%');
                }
                if (eleT == 'tp.' & eleD != 'dp.' & eleL != 'lp.') {
                    $(this).css('padding', '' + paddingTab[1] + '% ' + paddingTab[1] + '% ' + paddingTab[1] + '% ' + paddingTab[1] + '%');
                }
                if (eleM == 'mp.' & eleD != 'dp.' & eleL != 'lp.' & eleT != 'tp.') {
                    $(this).css('padding', '' + paddingMobile[1] + '% ' + paddingMobile[1] + '% ' + paddingMobile[1] + '% ' + paddingMobile[1] + '%');
                }
                if (eleS == 'sp.' & eleD != 'dp.' & eleL != 'lp.' & eleT != 'tp.' & eleM != 'mp.') {
                    $(this).css('padding', '' + paddingSmall[1] + '% ' + paddingSmall[1] + '% ' + paddingSmall[1] + '% ' + paddingSmall[1] + '%');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dp.') {
                    $(this).css('padding', '' + paddingDesk[1] + '% ' + paddingDesk[1] + '% ' + paddingDesk[1] + '% ' + paddingDesk[1] + '%');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dp.') {
                    $(this).css('padding', '' + paddingDesk[1] + '% ' + paddingDesk[1] + '% ' + paddingDesk[1] + '% ' + paddingDesk[1] + '%');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lp.') {
                    $(this).css('padding', '' + paddingLarge[1] + '% ' + paddingLarge[1] + '% ' + paddingLarge[1] + '% ' + paddingLarge[1] + '%');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tp.') {
                    $(this).css('padding', '' + paddingTab[1] + '% ' + paddingTab[1] + '% ' + paddingTab[1] + '% ' + paddingTab[1] + '%');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mp.') {
                    $(this).css('padding', '' + paddingMobile[1] + '% ' + paddingMobile[1] + '% ' + paddingMobile[1] + '% ' + paddingMobile[1] + '%');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sp.') {
                    $(this).css('padding', '' + paddingSmall[1] + '% ' + paddingSmall[1] + '% ' + paddingSmall[1] + '% ' + paddingSmall[1] + '%');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sp.') {
                    $(this).css('padding', '' + paddingSmall[1] + '% ' + paddingSmall[1] + '% ' + paddingSmall[1] + '% ' + paddingSmall[1] + '%');
                }
            }
        })
        $("[cell-p]").each(function () {
            var paddingLeft = $(this).attr('cell-p').match(/[l][.][^,]*?(\d{1,})*/i);
            var paddingLeftDesk = $(this).attr('cell-p').match(/[d][l][.][^,]*?(\d{1,})*/i);
            var paddingLeftLarge = $(this).attr('cell-p').match(/[l][l][.][^,]*?(\d{1,})*/i);
            var paddingLeftTab = $(this).attr('cell-p').match(/[t][l][.][^,]*?(\d{1,})*/i);
            var paddingLeftMobile = $(this).attr('cell-p').match(/[m][l][.][^,]*?(\d{1,})*/i);
            var paddingLeftSmall = $(this).attr('cell-p').match(/[s][l][.][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-p').match(/[l][.]/i);
            var eleD = $(this).attr('cell-p').match(/[d][l][.]/i);
            var eleL = $(this).attr('cell-p').match(/[l][l][.]/i);
            var eleT = $(this).attr('cell-p').match(/[t][l][.]/i);
            var eleM = $(this).attr('cell-p').match(/[m][l][.]/i);
            var eleS = $(this).attr('cell-p').match(/[s][l][.]/i);
            if (ele == 'l.') {
                $(this).css('padding-left', '' + paddingLeft[1] + '%');
            }
            if (ele != 'l.') {
                if (eleD == 'dl.') {
                    $(this).css('padding-left', '' + paddingLeftDesk[1] + '%');
                }
                if (eleL == 'll.' & eleD != 'dl.') {
                    $(this).css('padding-left', '' + paddingLeftLarge[1] + '%');
                }
                if (eleT == 'tl.' & eleD != 'dl.' & eleL != 'll.') {
                    $(this).css('padding-left', '' + paddingLeftTab[1] + '%');
                }
                if (eleM == 'ml.' & eleD != 'dl.' & eleL != 'll.' & eleT != 'tl.') {
                    $(this).css('padding-left', '' + paddingLeftMobile[1] + '%');
                }
                if (eleS == 'sl.' & eleD != 'dl.' & eleL != 'll.' & eleT != 'tl.' & eleM != 'ml.') {
                    $(this).css('padding-left', '' + paddingLeftSmall[1] + '%');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dl.') {
                    $(this).css('padding-left', '' + paddingLeftDesk[1] + '%');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dl.') {
                    $(this).css('padding-left', '' + paddingLeftDesk[1] + '%');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'll.') {
                    $(this).css('padding-left', '' + paddingLeftLarge[1] + '%');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tl.') {
                    $(this).css('padding-left', '' + paddingLeftTab[1] + '%');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ml.') {
                    $(this).css('padding-left', '' + paddingLeftMobile[1] + '%');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sl.') {
                    $(this).css('padding-left', '' + paddingLeftSmall[1] + '%');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sl.') {
                    $(this).css('padding-left', '' + paddingLeftSmall[1] + '%');
                }
            }
        })
        $("[cell-p]").each(function () {
            var paddingRight = $(this).attr('cell-p').match(/[r][.][^,]*?(\d{1,})*/i);
            var paddingRightDesk = $(this).attr('cell-p').match(/[d][r][.][^,]*?(\d{1,})*/i);
            var paddingRightLarge = $(this).attr('cell-p').match(/[l][r][.][^,]*?(\d{1,})*/i);
            var paddingRightTab = $(this).attr('cell-p').match(/[t][r][.][^,]*?(\d{1,})*/i);
            var paddingRightMobile = $(this).attr('cell-p').match(/[m][r][.][^,]*?(\d{1,})*/i);
            var paddingRightSmall = $(this).attr('cell-p').match(/[s][r][.][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-p').match(/[r][.]/i);
            var eleD = $(this).attr('cell-p').match(/[d][r][.]/i);
            var eleL = $(this).attr('cell-p').match(/[l][r][.]/i);
            var eleT = $(this).attr('cell-p').match(/[t][r][.]/i);
            var eleM = $(this).attr('cell-p').match(/[m][r][.]/i);
            var eleS = $(this).attr('cell-p').match(/[s][r][.]/i);
            if (ele == 'r.') {
                $(this).css('padding-right', '' + paddingRight[1] + '%');
            }
            if (ele != 'r.') {
                if (eleD == 'dr.') {
                    $(this).css('padding-right', '' + paddingRightDesk[1] + '%');
                }
                if (eleL == 'lr.' & eleD != 'dr.') {
                    $(this).css('padding-right', '' + paddingRightLarge[1] + '%');
                }
                if (eleT == 'tr.' & eleD != 'dr.' & eleL != 'lr.') {
                    $(this).css('padding-right', '' + paddingRightTab[1] + '%');
                }
                if (eleM == 'mr.' & eleD != 'dr.' & eleL != 'lr.' & eleT != 'tr.') {
                    $(this).css('padding-right', '' + paddingRightMobile[1] + '%');
                }
                if (eleS == 'sr.' & eleD != 'dr.' & eleL != 'lr.' & eleT != 'tr.' & eleM != 'mr.') {
                    $(this).css('padding-right', '' + paddingRightSmall[1] + '%');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dr.') {
                    $(this).css('padding-right', '' + paddingRightDesk[1] + '%');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dr.') {
                    $(this).css('padding-right', '' + paddingRightDesk[1] + '%');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lr.') {
                    $(this).css('padding-right', '' + paddingRightLarge[1] + '%');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tr.') {
                    $(this).css('padding-right', '' + paddingRightTab[1] + '%');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mr.') {
                    $(this).css('padding-right', '' + paddingRightMobile[1] + '%');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sr.') {
                    $(this).css('padding-right', '' + paddingRightSmall[1] + '%');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sr.') {
                    $(this).css('padding-right', '' + paddingRightSmall[1] + '%');
                }
            }
        })
        $("[cell-p]").each(function () {
            var paddingTop = $(this).attr('cell-p').match(/[t][.][^,]*?(\d{1,})*/i);
            var paddingTopDesk = $(this).attr('cell-p').match(/[d][t][.][^,]*?(\d{1,})*/i);
            var paddingTopLarge = $(this).attr('cell-p').match(/[l][t][.][^,]*?(\d{1,})*/i);
            var paddingTopTab = $(this).attr('cell-p').match(/[t][t][.][^,]*?(\d{1,})*/i);
            var paddingTopMobile = $(this).attr('cell-p').match(/[m][t][.][^,]*?(\d{1,})*/i);
            var paddingTopSmall = $(this).attr('cell-p').match(/[s][t][.][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-p').match(/[t][.]/i);
            var eleD = $(this).attr('cell-p').match(/[d][t][.]/i);
            var eleL = $(this).attr('cell-p').match(/[l][t][.]/i);
            var eleT = $(this).attr('cell-p').match(/[t][t][.]/i);
            var eleM = $(this).attr('cell-p').match(/[m][t][.]/i);
            var eleS = $(this).attr('cell-p').match(/[s][t][.]/i);
            if (ele == 't.') {
                $(this).css('padding-top', '' + paddingTop[1] + '%');
            }
            if (ele != 't.') {
                if (eleD == 'dt.') {
                    $(this).css('padding-top', '' + paddingTopDesk[1] + '%');
                }
                if (eleL == 'lt.' & eleD != 'dt.') {
                    $(this).css('padding-top', '' + paddingTopLarge[1] + '%');
                }
                if (eleT == 'tt.' & eleD != 'dt.' & eleL != 'lt.') {
                    $(this).css('padding-top', '' + paddingTopTab[1] + '%');
                }
                if (eleM == 'mt.' & eleD != 'dt.' & eleL != 'lt.' & eleT != 'tt.') {
                    $(this).css('padding-top', '' + paddingTopMobile[1] + '%');
                }
                if (eleS == 'st.' & eleD != 'dt.' & eleL != 'lt.' & eleT != 'tt.' & eleM != 'mt.') {
                    $(this).css('padding-top', '' + paddingTopSmall[1] + '%');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dt.') {
                    $(this).css('padding-top', '' + paddingTopDesk[1] + '%');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dt.') {
                    $(this).css('padding-top', '' + paddingTopDesk[1] + '%');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lt.') {
                    $(this).css('padding-top', '' + paddingTopLarge[1] + '%');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tt.') {
                    $(this).css('padding-top', '' + paddingTopTab[1] + '%');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mt.') {
                    $(this).css('padding-top', '' + paddingTopMobile[1] + '%');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'st.') {
                    $(this).css('padding-top', '' + paddingTopSmall[1] + '%');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'st.') {
                    $(this).css('padding-top', '' + paddingTopSmall[1] + '%');
                }
            }
        })
        $("[cell-p]").each(function () {
            var paddingBottom = $(this).attr('cell-p').match(/[b][.][^,]*?(\d{1,})*/i);
            var paddingBottomDesk = $(this).attr('cell-p').match(/[d][b][.][^,]*?(\d{1,})*/i);
            var paddingBottomLarge = $(this).attr('cell-p').match(/[l][b][.][^,]*?(\d{1,})*/i);
            var paddingBottomTab = $(this).attr('cell-p').match(/[t][b][.][^,]*?(\d{1,})*/i);
            var paddingBottomMobile = $(this).attr('cell-p').match(/[m][b][.][^,]*?(\d{1,})*/i);
            var paddingBottomSmall = $(this).attr('cell-p').match(/[s][b][.][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-p').match(/[b][.]/i);
            var eleD = $(this).attr('cell-p').match(/[d][b][.]/i);
            var eleL = $(this).attr('cell-p').match(/[l][b][.]/i);
            var eleT = $(this).attr('cell-p').match(/[t][b][.]/i);
            var eleM = $(this).attr('cell-p').match(/[m][b][.]/i);
            var eleS = $(this).attr('cell-p').match(/[s][b][.]/i);
            if (ele == 'b.') {
                $(this).css('padding-bottom', '' + paddingBottom[1] + '%');
            }
            if (ele != 'b.') {
                if (eleD == 'db.') {
                    $(this).css('padding-bottom', '' + paddingBottomDesk[1] + '%');
                }
                if (eleL == 'lb.' & eleD != 'db.') {
                    $(this).css('padding-bottom', '' + paddingBottomLarge[1] + '%');
                }
                if (eleT == 'tb.' & eleD != 'db.' & eleL != 'lb.') {
                    $(this).css('padding-bottom', '' + paddingBottomTab[1] + '%');
                }
                if (eleM == 'mb.' & eleD != 'db.' & eleL != 'lb.' & eleT != 'tb.') {
                    $(this).css('padding-bottom', '' + paddingBottomMobile[1] + '%');
                }
                if (eleS == 'sb.' & eleD != 'db.' & eleL != 'lb.' & eleT != 'tb.' & eleM != 'mb.') {
                    $(this).css('padding-bottom', '' + paddingBottomSmall[1] + '%');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'db.') {
                    $(this).css('padding-bottom', '' + paddingBottomDesk[1] + '%');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'db.') {
                    $(this).css('padding-bottom', '' + paddingBottomDesk[1] + '%');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lb.') {
                    $(this).css('padding-bottom', '' + paddingBottomLarge[1] + '%');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tb.') {
                    $(this).css('padding-bottom', '' + paddingBottomTab[1] + '%');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mb.') {
                    $(this).css('padding-bottom', '' + paddingBottomMobile[1] + '%');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sb.') {
                    $(this).css('padding-bottom', '' + paddingBottomSmall[1] + '%');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sb.') {
                    $(this).css('padding-bottom', '' + paddingBottomSmall[1] + '%');
                }
            }
        })
    })

        .resize();

});
//For Radius
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-r]").each(function () {
            var radius = $(this).attr('cell-r').match(/[r][^,]*?(\d{1,})*/i);
            var radiusDesk = $(this).attr('cell-r').match(/[d][^,]*?(\d{1,})*/i);
            var radiusLarge = $(this).attr('cell-r').match(/[l][^,]*?(\d{1,})*/i);
            var radiusTab = $(this).attr('cell-r').match(/[t][^,]*?(\d{1,})*/i);
            var radiusMobile = $(this).attr('cell-r').match(/[m][^,]*?(\d{1,})*/i);
            var radiusSmall = $(this).attr('cell-r').match(/[s][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-r').match(/[r]/i);
            var eleD = $(this).attr('cell-r').match(/[d]/i);
            var eleL = $(this).attr('cell-r').match(/[l]/i);
            var eleT = $(this).attr('cell-r').match(/[t]/i);
            var eleM = $(this).attr('cell-r').match(/[m]/i);
            var eleS = $(this).attr('cell-r').match(/[s]/i);
            if (ele == 'r') {
                $(this).css('border-radius', '' + radius[1] + 'px');
            }
            if (ele != 'r') {
                if (eleD == 'd') {
                    $(this).css('border-radius', '' + radiusDesk[1] + 'px');
                }
                if (eleL == 'l' & eleD != 'd') {
                    $(this).css('border-radius', '' + radiusLarge[1] + 'px');
                }
                if (eleT == 't' & eleD != 'd' & eleL != 'l') {
                    $(this).css('border-radius', '' + radiusTab[1] + 'px');
                }
                if (eleM == 'm' & eleD != 'd' & eleL != 'l' & eleT != 't') {
                    $(this).css('border-radius', '' + radiusMobile[1] + 'px');
                }
                if (eleS == 's' & eleD != 'd' & eleL != 'l' & eleT != 't' & eleM != 'm') {
                    $(this).css('border-radius', '' + radiusSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'd') {
                    $(this).css('border-radius', '' + radiusDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'd') {
                    $(this).css('border-radius', '' + radiusDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'l') {
                    $(this).css('border-radius', '' + radiusLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 't') {
                    $(this).css('border-radius', '' + radiusTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'm') {
                    $(this).css('border-radius', '' + radiusMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 's') {
                    $(this).css('border-radius', '' + radiusSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 's') {
                    $(this).css('border-radius', '' + radiusSmall[1] + 'px');
                }
            }
        })
        $("[cell-r]").each(function () {
            var radiusTop = $(this).attr('cell-r').match(/[r][t](\d{1,})[^\w\*](\d{1,})/i);
            var radiusTopDesk = $(this).attr('cell-r').match(/[d][t](\d{1,})[^\w\*](\d{1,})/i);
            var radiusTopLarge = $(this).attr('cell-r').match(/[l][t](\d{1,})[^\w\*](\d{1,})/i);
            var radiusTopTab = $(this).attr('cell-r').match(/[t][t](\d{1,})[^\w\*](\d{1,})/i);
            var radiusTopMobile = $(this).attr('cell-r').match(/[m][t](\d{1,})[^\w\*](\d{1,})/i);
            var radiusTopSmall = $(this).attr('cell-r').match(/[s][t](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-r').match(/[r][t]/i);
            var eleD = $(this).attr('cell-r').match(/[d][t]/i);
            var eleL = $(this).attr('cell-r').match(/[l][t]/i);
            var eleT = $(this).attr('cell-r').match(/[t][t]/i);
            var eleM = $(this).attr('cell-r').match(/[m][t]/i);
            var eleS = $(this).attr('cell-r').match(/[s][t]/i);
            if (ele == 'rt') {
                $(this).css({ 'border-top-left-radius': '' + radiusTop[1] + 'px', 'border-top-right-radius': '' + radiusTop[2] + 'px' });
            }
            if (ele != 'rt') {
                if (eleD == 'dt') {
                    $(this).css({ 'border-top-left-radius': '' + radiusTopDesk[1] + 'px', 'border-top-right-radius': '' + radiusTopDesk[2] + 'px' });
                }
                if (eleL == 'lt' & eleD != 'dt') {
                    $(this).css({ 'border-top-left-radius': '' + radiusTopLarge[1] + 'px', 'border-top-right-radius': '' + radiusTopLarge[2] + 'px' });
                }
                if (eleT == 'tt' & eleD != 'dt' & eleL != 'lt') {
                    $(this).css({ 'border-top-left-radius': '' + radiusTopTab[1] + 'px', 'border-top-right-radius': '' + radiusTopTab[2] + 'px' });
                }
                if (eleM == 'mt' & eleD != 'dt' & eleL != 'lt' & eleT != 'tt') {
                    $(this).css({ 'border-top-left-radius': '' + radiusTopMobile[1] + 'px', 'border-top-right-radius': '' + radiusTopMobile[2] + 'px' });
                }
                if (eleS == 'st' & eleD != 'dt' & eleL != 'lt' & eleT != 'tt' & eleM != 'mt') {
                    $(this).css({ 'border-top-left-radius': '' + radiusTopSmall[1] + 'px', 'border-top-right-radius': '' + radiusTopSmall[2] + 'px' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'd') {
                    $(this).css({ 'border-top-left-radius': '' + radiusTopDesk[1] + 'px', 'border-top-right-radius': '' + radiusTopDesk[2] + 'px' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'd') {
                    $(this).css({ 'border-top-left-radius': '' + radiusTopDesk[1] + 'px', 'border-top-right-radius': '' + radiusTopDesk[2] + 'px' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'l') {
                    $(this).css({ 'border-top-left-radius': '' + radiusTopLarge[1] + 'px', 'border-top-right-radius': '' + radiusTopLarge[2] + 'px' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 't') {
                    $(this).css({ 'border-top-left-radius': '' + radiusTopTab[1] + 'px', 'border-top-right-radius': '' + radiusTopTab[2] + 'px' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'm') {
                    $(this).css({ 'border-top-left-radius': '' + radiusTopMobile[1] + 'px', 'border-top-right-radius': '' + radiusTopMobile[2] + 'px' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 's') {
                    $(this).css({ 'border-top-left-radius': '' + radiusTopSmall[1] + 'px', 'border-top-right-radius': '' + radiusTopSmall[2] + 'px' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 's') {
                    $(this).css({ 'border-top-left-radius': '' + radiusTopSmall[1] + 'px', 'border-top-right-radius': '' + radiusTopSmall[2] + 'px' });
                }
            }
        })
        $("[cell-r]").each(function () {
            var radiusBottom = $(this).attr('cell-r').match(/[r][b](\d{1,})[^\w\*](\d{1,})/i);
            var radiusBottomDesk = $(this).attr('cell-r').match(/[d][b](\d{1,})[^\w\*](\d{1,})/i);
            var radiusBottomLarge = $(this).attr('cell-r').match(/[l][b](\d{1,})[^\w\*](\d{1,})/i);
            var radiusBottomTab = $(this).attr('cell-r').match(/[t][b](\d{1,})[^\w\*](\d{1,})/i);
            var radiusBottomMobile = $(this).attr('cell-r').match(/[m][b](\d{1,})[^\w\*](\d{1,})/i);
            var radiusBottomSmall = $(this).attr('cell-r').match(/[s][b](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-r').match(/[r][b]/i);
            var eleD = $(this).attr('cell-r').match(/[d][b]/i);
            var eleL = $(this).attr('cell-r').match(/[l][b]/i);
            var eleT = $(this).attr('cell-r').match(/[t][b]/i);
            var eleM = $(this).attr('cell-r').match(/[m][b]/i);
            var eleS = $(this).attr('cell-r').match(/[s][b]/i);
            if (ele == 'rb') {
                $(this).css({ 'border-bottom-left-radius': '' + radiusBottom[1] + 'px', 'border-bottom-right-radius': '' + radiusBottom[2] + 'px' });
            }
            if (ele != 'rb') {
                if (eleD == 'db') {
                    $(this).css({ 'border-bottom-left-radius': '' + radiusBottomDesk[1] + 'px', 'border-bottom-right-radius': '' + radiusBottomDesk[2] + 'px' });
                }
                if (eleL == 'lb' & eleD != 'db') {
                    $(this).css({ 'border-bottom-left-radius': '' + radiusBottomLarge[1] + 'px', 'border-bottom-right-radius': '' + radiusBottomLarge[2] + 'px' });
                }
                if (eleT == 'tb' & eleD != 'db' & eleL != 'lb') {
                    $(this).css({ 'border-bottom-left-radius': '' + radiusBottomTab[1] + 'px', 'border-bottom-right-radius': '' + radiusBottomTab[2] + 'px' });
                }
                if (eleM == 'mb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb') {
                    $(this).css({ 'border-bottom-left-radius': '' + radiusBottomMobile[1] + 'px', 'border-bottom-right-radius': '' + radiusBottomMobile[2] + 'px' });
                }
                if (eleS == 'sb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb' & eleM != 'mb') {
                    $(this).css({ 'border-bottom-left-radius': '' + radiusBottomSmall[1] + 'px', 'border-bottom-right-radius': '' + radiusBottomSmall[2] + 'px' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'db') {
                    $(this).css({ 'border-bottom-left-radius': '' + radiusBottomDesk[1] + 'px', 'border-bottom-right-radius': '' + radiusBottomDesk[2] + 'px' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'db') {
                    $(this).css({ 'border-bottom-left-radius': '' + radiusBottomDesk[1] + 'px', 'border-bottom-right-radius': '' + radiusBottomDesk[2] + 'px' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lb') {
                    $(this).css({ 'border-bottom-left-radius': '' + radiusBottomLarge[1] + 'px', 'border-bottom-right-radius': '' + radiusBottomLarge[2] + 'px' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tb') {
                    $(this).css({ 'border-bottom-left-radius': '' + radiusBottomTab[1] + 'px', 'border-bottom-right-radius': '' + radiusBottomTab[2] + 'px' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mb') {
                    $(this).css({ 'border-bottom-left-radius': '' + radiusBottomMobile[1] + 'px', 'border-bottom-right-radius': '' + radiusBottomMobile[2] + 'px' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sb') {
                    $(this).css({ 'border-bottom-left-radius': '' + radiusBottomSmall[1] + 'px', 'border-bottom-right-radius': '' + radiusBottomDeskSmall[2] + 'px' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sb') {
                    $(this).css({ 'border-bottom-left-radius': '' + radiusBottomSmall[1] + 'px', 'border-bottom-right-radius': '' + radiusBottomDeskSmall[2] + 'px' });
                }
            }
        })
        $("[cell-r]").each(function () {
            var radiusPer = $(this).attr('cell-r').match(/[r][.][^,]*?(\d{1,})*/i);
            var radiusPerDesk = $(this).attr('cell-r').match(/[d][r][^,]*?(\d{1,})*/i);
            var radiusPerLarge = $(this).attr('cell-r').match(/[l][r][.][^,]*?(\d{1,})*/i);
            var radiusPerTab = $(this).attr('cell-r').match(/[t][r][.][^,]*?(\d{1,})*/i);
            var radiusPerMobile = $(this).attr('cell-r').match(/[m][r][.][^,]*?(\d{1,})*/i);
            var radiusPerSmall = $(this).attr('cell-r').match(/[s][r][.][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-r').match(/[r][.]/i);
            var eleD = $(this).attr('cell-r').match(/[d][r][.]/i);
            var eleL = $(this).attr('cell-r').match(/[l][r][.]/i);
            var eleT = $(this).attr('cell-r').match(/[t][r][.]/i);
            var eleM = $(this).attr('cell-r').match(/[m][r][.]/i);
            var eleS = $(this).attr('cell-r').match(/[s][r][.]/i);
            if (ele == 'r.') {
                $(this).css('border-radius', '' + radiusPer[1] + '%');
            }
            if (ele != 'r.') {
                if (eleD == 'dr.') {
                    $(this).css('border-radius', '' + radiusPerDesk[1] + '%');
                }
                if (eleL == 'lr.' & eleD != 'dr.') {
                    $(this).css('border-radius', '' + radiusPerLarge[1] + '%');
                }
                if (eleT == 'tr.' & eleD != 'dr.' & eleL != 'lr.') {
                    $(this).css('border-radius', '' + radiusPerTab[1] + '%');
                }
                if (eleM == 'mr.' & eleD != 'dr.' & eleL != 'lr.' & eleT != 'tr.') {
                    $(this).css('border-radius', '' + radiusPerMobile[1] + '%');
                }
                if (eleS == 'sr.' & eleD != 'dr.' & eleL != 'lr.' & eleT != 'tr.' & eleM != 'mr.') {
                    $(this).css('border-radius', '' + radiusPerSmall[1] + '%');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dr.') {
                    $(this).css('border-radius', '' + radiusPerDesk[1] + '%');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dr.') {
                    $(this).css('border-radius', '' + radiusPerDesk[1] + '%');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lr.') {
                    $(this).css('border-radius', '' + radiusPerLarge[1] + '%');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tr.') {
                    $(this).css('border-radius', '' + radiusPerTab[1] + '%');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mr.') {
                    $(this).css('border-radius', '' + radiusPerMobile[1] + '%');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sr.') {
                    $(this).css('border-radius', '' + radiusPerSmall[1] + '%');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sr.') {
                    $(this).css('border-radius', '' + radiusPerSmall[1] + '%');
                }
            }
        })
    })

        .resize();

});
//For Text
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-t]").each(function () {
            var space = $(this).attr('cell-t').match(/[s](\d{1,})[^\w\*](\d{1,})/i);
            var spaceDesk = $(this).attr('cell-t').match(/[d][s](\d{1,})[^\w\*](\d{1,})/i);
            var spaceLarge = $(this).attr('cell-t').match(/[l][s](\d{1,})[^\w\*](\d{1,})/i);
            var spaceTab = $(this).attr('cell-t').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
            var spaceMobile = $(this).attr('cell-t').match(/[m][s](\d{1,})[^\w\*](\d{1,})/i);
            var spaceSmall = $(this).attr('cell-t').match(/[s][s](\d{1,})[^\w\*](\d{1,})/i);
            var paraSpace = $(this).attr('cell-t').match(/[p][s][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-t').match(/[s]/i);
            var eleD = $(this).attr('cell-t').match(/[d][s]/i);
            var eleL = $(this).attr('cell-t').match(/[l][s]/i);
            var eleT = $(this).attr('cell-t').match(/[t][s]/i);
            var eleM = $(this).attr('cell-t').match(/[m][s]/i);
            var eleS = $(this).attr('cell-t').match(/[s][s]/i);
            var elePs = $(this).attr('cell-t').match(/[p][s]/i);

            if (elePs == 'ps') {
                $(this).css({ 'text-indent': '' + paraSpace[1] + '%' });
            }
            if (ele == 's') {
                $(this).css({ 'letter-spacing': '' + space[1] + 'px', 'word-spacing': '' + space[2] + 'px' });
            }
            if (ele != 's') {
                if (eleD == 'ds') {
                    $(this).css({ 'letter-spacing': '' + spaceDesk[1] + 'px', 'word-spacing': '' + spaceDesk[2] + 'px' });
                }
                if (eleL == 'ls' & eleD != 'ds') {
                    $(this).css({ 'letter-spacing': '' + spaceLarge[1] + 'px', 'word-spacing': '' + spaceLarge[2] + 'px' });
                }
                if (eleT == 'ts' & eleD != 'ds' & eleL != 'ls') {
                    $(this).css({ 'letter-spacing': '' + spaceTab[1] + 'px', 'word-spacing': '' + spaceTab[2] + 'px' });
                }
                if (eleM == 'ms' & eleD != 'ds' & eleL != 'ls' & eleT != 'ts') {
                    $(this).css({ 'letter-spacing': '' + spaceMobile[1] + 'px', 'word-spacing': '' + spaceMobile[2] + 'px' });
                }
                if (eleS == 'ss' & eleD != 'ds' & eleL != 'ls' & eleT != 'ts' & eleM != 'ms') {
                    $(this).css({ 'letter-spacing': '' + spaceSmall[1] + 'px', 'word-spacing': '' + spaceSmall[2] + 'px' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'ds') {
                    $(this).css({ 'letter-spacing': '' + spaceDesk[1] + 'px', 'word-spacing': '' + spaceDesk[2] + 'px' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'ds') {
                    $(this).css({ 'letter-spacing': '' + spaceDesk[1] + 'px', 'word-spacing': '' + spaceDesk[2] + 'px' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'ls') {
                    $(this).css({ 'letter-spacing': '' + spaceLarge[1] + 'px', 'word-spacing': '' + spaceLarge[2] + 'px' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'ts') {
                    $(this).css({ 'letter-spacing': '' + spaceSmall[1] + 'px', 'word-spacing': '' + spaceSmall[2] + 'px' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ms') {
                    $(this).css({ 'letter-spacing': '' + spaceMobile[1] + 'px', 'word-spacing': '' + spaceMobile[2] + 'px' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'ss') {
                    $(this).css({ 'letter-spacing': '' + spaceSmall[1] + 'px', 'word-spacing': '' + spaceSmall[2] + 'px' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'ss') {
                    $(this).css({ 'letter-spacing': '' + spaceSmall[1] + 'px', 'word-spacing': '' + spaceSmall[2] + 'px' });
                }
            }
        })
    })

        .resize();

});
//For Fonts
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-f]").each(function () {
            var size = $(this).attr('cell-f').match(/[s][.][^,]*?(\d{1,})*/i);
            var sizeDesk = $(this).attr('cell-f').match(/[d][.][^,]*?(\d{1,})*/i);
            var sizeLarge = $(this).attr('cell-f').match(/[l][.][^,]*?(\d{1,})*/i);
            var sizeTab = $(this).attr('cell-f').match(/[t][.][^,]*?(\d{1,})*/i);
            var sizeMobile = $(this).attr('cell-f').match(/[m][.][^,]*?(\d{1,})*/i);
            var sizeSmall = $(this).attr('cell-f').match(/[s][.][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-f').match(/[s][.]/i);
            var eleD = $(this).attr('cell-f').match(/[d][s][.]/i);
            var eleL = $(this).attr('cell-f').match(/[l][s][.]/i);
            var eleT = $(this).attr('cell-f').match(/[t][s][.]/i);
            var eleM = $(this).attr('cell-f').match(/[m][s][.]/i);
            var eleS = $(this).attr('cell-f').match(/[s][s][.]/i);

            if (ele == 's.') {
                var sizeNum = size[1] * 0.07320644216691069;
                $(this).css('font-size', '' + sizeNum + 'vw');
            }
            if (ele != 's.') {
                if (eleD == 'ds.') {
                    var sizeDeskNum = sizeDesk[1] * 0.07320644216691069;
                    $(this).css('font-size', '' + sizeDeskNum + 'vw');
                }
                if (eleL == 'ls.' & eleD != 'ds.') {
                    var sizeLargeNum = sizeLarge[1] * 0.07320644216691069;
                    $(this).css('font-size', '' + sizeLargeNum + 'vw');
                }
                if (eleT == 'ts.' & eleD != 'ds.' & eleL != 'ls.') {
                    var sizeTabNum = sizeTab[1] * 0.07320644216691069;
                    $(this).css('font-size', '' + sizeTabNum + 'vw');
                }
                if (eleM == 'ms.' & eleD != 'ds.' & eleL != 'ls.' & eleT != 'ts.') {
                    var sizeMobileNum = sizeMobile[1] * 0.07320644216691069;
                    $(this).css('font-size', '' + sizeMobileNum + 'vw');
                }
                if (eleS == 'ss.' & eleD != 'ds.' & eleL != 'ls.' & eleT != 'ts.' & eleM != 'ms') {
                    var sizeSmallNum = sizeSmall[1] * 0.07320644216691069;
                    $(this).css('font-size', '' + sizeSmallNum + 'vw');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'ds.') {
                    var sizeDeskNum = sizeDesk[1] * 0.07320644216691069;
                    $(this).css('font-size', '' + sizeDeskNum + 'vw');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'ds.') {
                    var sizeDeskNum = sizeDesk[1] * 0.07320644216691069;
                    $(this).css('font-size', '' + sizeDeskNum + 'vw');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'ls.') {
                    var sizeLargeNum = sizeLarge[1] * 0.07320644216691069;
                    $(this).css('font-size', '' + sizeLargeNum + 'vw');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'ts.') {
                    var sizeTabNum = sizeTab[1] * 0.07320644216691069;
                    $(this).css('font-size', '' + sizeTabNum + 'vw');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ms.') {
                    var sizeMobileNum = sizeMobile[1] * 0.07320644216691069;
                    $(this).css('font-size', '' + sizeMobileNum + 'vw');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'ss.') {
                    var sizeSmallNum = sizeSmall[1] * 0.07320644216691069;
                    $(this).css('font-size', '' + sizeSmallNum + 'vw');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'ss.') {
                    var sizeSmallNum = sizeSmall[1] * 0.07320644216691069;
                    $(this).css('font-size', '' + sizeSmallNum + 'vw');
                }
            }
        })
        $("[cell-f]").each(function () {
            var size = $(this).attr('cell-f').match(/[s][^,]*?(\d{1,})*/i);
            var sizeDesk = $(this).attr('cell-f').match(/[d][^,]*?(\d{1,})*/i);
            var sizeLarge = $(this).attr('cell-f').match(/[l][^,]*?(\d{1,})*/i);
            var sizeTab = $(this).attr('cell-f').match(/[t][^,]*?(\d{1,})*/i);
            var sizeMobile = $(this).attr('cell-f').match(/[m][^,]*?(\d{1,})*/i);
            var sizeSmall = $(this).attr('cell-f').match(/[s][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-f').match(/[s]/i);
            var eleD = $(this).attr('cell-f').match(/[d][s]/i);
            var eleL = $(this).attr('cell-f').match(/[l][s]/i);
            var eleT = $(this).attr('cell-f').match(/[t][s]/i);
            var eleM = $(this).attr('cell-f').match(/[m][s]/i);
            var eleS = $(this).attr('cell-f').match(/[s][s]/i);

            if (ele == 's') {
                $(this).css('font-size', '' + size[1] + 'px');
            }
            if (ele != 's') {
                if (eleD == 'ds') {
                    $(this).css('font-size', '' + sizeDesk[1] + 'px');
                }
                if (eleL == 'ls' & eleD != 'ds') {
                    $(this).css('font-size', '' + sizeLarge[1] + 'px');
                }
                if (eleT == 'ts' & eleD != 'ds' & eleL != 'ls') {
                    $(this).css('font-size', '' + sizeTab[1] + 'px');
                }
                if (eleM == 'ms' & eleD != 'ds' & eleL != 'ls' & eleT != 'ts') {
                    $(this).css('font-size', '' + sizeMobile[1] + 'px');
                }
                if (eleS == 'ss' & eleD != 'ds' & eleL != 'ls' & eleT != 'ts' & eleM != 'ms') {
                    $(this).css('font-size', '' + sizeSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'ds') {
                    $(this).css('font-size', '' + sizeDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'ds') {
                    $(this).css('font-size', '' + sizeDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'ls') {
                    $(this).css('font-size', '' + sizeLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'ts') {
                    $(this).css('font-size', '' + sizeTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ms') {
                    $(this).css('font-size', '' + sizeMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'ss') {
                    $(this).css('font-size', '' + sizeSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'ss') {
                    $(this).css('font-size', '' + sizeSmall[1] + 'px');
                }
            }
        })
        $("[cell-f]").each(function () {
            var color = $(this).attr('cell-f').match(/[c](\d{1,})/i);
            var colorDesk = $(this).attr('cell-f').match(/[d][c][^,]*?(\d{1,})*/i);
            var colorLarge = $(this).attr('cell-f').match(/[l][c][^,]*?(\d{1,})*/i);
            var colorTab = $(this).attr('cell-f').match(/[t][c][^,]*?(\d{1,})*/i);
            var colorMobile = $(this).attr('cell-f').match(/[m][c][^,]*?(\d{1,})*/i);
            var colorSmall = $(this).attr('cell-f').match(/[s][c][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-f').match(/[c]/i);
            var eleD = $(this).attr('cell-f').match(/[d][c]/i);
            var eleL = $(this).attr('cell-f').match(/[l][c]/i);
            var eleT = $(this).attr('cell-f').match(/[t][c]/i);
            var eleM = $(this).attr('cell-f').match(/[m][c]/i);
            var eleS = $(this).attr('cell-f').match(/[s][c]/i);

            if (ele == 'c') {
                var colorNum = (color[1] - 1)
                $(this).css('color', '' + colors[colorNum] + '');
            }
            if (ele != 'c') {
                if (eleD == 'dc') {
                    var colorNumDesk = (colorDesk[1] - 1)
                    $(this).css('color', '' + colors[colorNumDesk] + '');
                }
                if (eleL == 'lc' & eleD != 'dc') {
                    var colorNumLarge = (colorLarge[1] - 1)
                    $(this).css('color', '' + colors[colorNumLarge] + '');
                }
                if (eleT == 'tc' & eleD != 'dc' & eleL != 'lc') {
                    var colorNumTab = (colorTab[1] - 1)
                    $(this).css('color', '' + colors[colorNumTab] + '');
                }
                if (eleM == 'mc' & eleD != 'dc' & eleL != 'lc' & eleT != 'tc') {
                    var colorNumMobile = (colorMobile[1] - 1)
                    $(this).css('color', '' + colors[colorNumMobile] + '');
                }
                if (eleS == 'sc' & eleD != 'dc' & eleL != 'lc' & eleT != 'tc' & eleM != 'mc') {
                    var colorNumSmall = (colorSmall[1] - 1);
                    $(this).css('color', '' + colors[colorNumSmall] + '');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dc') {
                    var colorNumDesk = (colorDesk[1] - 1)
                    $(this).css('color', '' + colors[colorNumDesk] + '');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dc') {
                    var colorNumDesk = (colorDesk[1] - 1)
                    $(this).css('color', '' + colors[colorNumDesk] + '');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lc') {
                    var colorNumLarge = (colorLarge[1] - 1)
                    $(this).css('color', '' + colors[colorNumLarge] + '');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tc') {
                    var colorNumTab = (colorTab[1] - 1)
                    $(this).css('color', '' + colors[colorNumTab] + '');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mc') {
                    var colorNumMobile = (colorMobile[1] - 1)
                    $(this).css('color', '' + colors[colorNumMobile] + '');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sc') {
                    var colorNumSmall = (colorSmall[1] - 1)
                    $(this).css('color', '' + colors[colorNumSmall] + '');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sc') {
                    var colorNumSmall = (colorSmall[1] - 1)
                    $(this).css('color', '' + colors[colorNumSmall] + '');
                }
            }
        })
        $("[cell-f]").each(function () {
            var weight = $(this).attr('cell-f').match(/[w](\d{1,})/i);
            var weightDesk = $(this).attr('cell-f').match(/[d][w][^,]*?(\d{1,})*/i);
            var weightLarge = $(this).attr('cell-f').match(/[l][w][^,]*?(\d{1,})*/i);
            var weightTab = $(this).attr('cell-f').match(/[t][w][^,]*?(\d{1,})*/i);
            var weightMobile = $(this).attr('cell-f').match(/[m][w][^,]*?(\d{1,})*/i);
            var weightSmall = $(this).attr('cell-f').match(/[s][w][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-f').match(/[w]/i);
            var eleD = $(this).attr('cell-f').match(/[d][w]/i);
            var eleL = $(this).attr('cell-f').match(/[l][w]/i);
            var eleT = $(this).attr('cell-f').match(/[t][w]/i);
            var eleM = $(this).attr('cell-f').match(/[m][w]/i);
            var eleS = $(this).attr('cell-f').match(/[s][w]/i);

            if (ele == 'w' && weight[1] <= 10) {
                var weightNum = (weight[1] * 100)
                $(this).css('font-weight', '' + weightNum + '');
            }
            if (ele != 'w') {
                if (eleD == 'dw' && weightDesk[1] <= 10) {
                    var weightDeskNum = (weightDesk[1] * 100)
                    $(this).css('font-weight', '' + weightDeskNum + '');
                }
                if (eleL == 'lw' & eleD != 'dw' && weightLarge[1] <= 10) {
                    var weightLargeNum = (weightLarge[1] * 100)
                    $(this).css('font-weight', '' + weightLargeNum + '');
                }
                if (eleT == 'tw' & eleD != 'dw' & eleL != 'lw' && weightTab[1] <= 10) {
                    var weightTabNum = (weightTab[1] * 100)
                    $(this).css('font-weight', '' + weightTabNum + '');
                }
                if (eleM == 'mw' & eleD != 'dw' & eleL != 'lw' & eleT != 'tw' && weightMobile[1] <= 10) {
                    var weightMobileNum = (weightMobile[1] * 100)
                    $(this).css('font-weight', '' + weightMobileNum + '');
                }
                if (eleS == 'sw' & eleD != 'dw' & eleL != 'lw' & eleT != 'tw' & eleM != 'mw' && weightSmall[1] <= 10) {
                    var weightSmallNum = (weightSmall[1] * 100)
                    $(this).css('font-weight', '' + weightSmallNum + '');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dw' && weightDesk[1] <= 10) {
                    var weightDeskNum = (weightDesk[1] * 100)
                    $(this).css('font-weight', '' + weightDeskNum + '');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dw' && weightDesk[1] <= 10) {
                    var weightDeskNum = (weightDesk[1] * 100)
                    $(this).css('font-weight', '' + weightDeskNum + '');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lw' && weightLarge[1] <= 10) {
                    var weightLargeNum = (weightLarge[1] * 100)
                    $(this).css('font-weight', '' + weightLargeNum + '');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tw' && weightTab[1] <= 10) {
                    var weightTabNum = (weightTab[1] * 100)
                    $(this).css('font-weight', '' + weightTabNum + '');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mw' && weightMobile[1] <= 10) {
                    var weightMobileNum = (weightMobile[1] * 100)
                    $(this).css('font-weight', '' + weightMobileNum + '');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sw' && weightSmall[1] <= 10) {
                    var weightSmallNum = (weightSmall[1] * 100)
                    $(this).css('font-weight', '' + weightSmallNum + '');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sw' && weightSmall[1] <= 10) {
                    var weightSmallNum = (weightSmall[1] * 100)
                    $(this).css('font-weight', '' + weightSmallNum + '');
                }
            }
        })
    })
        .resize();
});
//For Borders
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-b]").each(function () {
            var borderLeft = $(this).attr('cell-b').match(/[-][b][l](\d{1,})[^\w\*](\d{1,})/i);
            var borderRight = $(this).attr('cell-b').match(/[-][b][r](\d{1,})[^\w\*](\d{1,})/i);
            var borderTop = $(this).attr('cell-b').match(/[-][b][t](\d{1,})[^\w\*](\d{1,})/i);
            var borderBottom = $(this).attr('cell-b').match(/[-][b][b](\d{1,})[^\w\*](\d{1,})/i);
            var borderLeftHover = $(this).attr('cell-b').match(/[.][b][l](\d{1,})[^\w\*](\d{1,})/i);
            var borderRightHover = $(this).attr('cell-b').match(/[.][b][r](\d{1,})[^\w\*](\d{1,})/i);
            var borderTopHover = $(this).attr('cell-b').match(/[.][b][t](\d{1,})[^\w\*](\d{1,})/i);
            var borderBottomHover = $(this).attr('cell-b').match(/[.][b][b](\d{1,})[^\w\*](\d{1,})/i);
            var border = $(this).attr('cell-b').match(/[-][b][o](\d{1,})[^\w\*](\d{1,})/i);
            console.log(border);
            var borderHover = $(this).attr('cell-b').match(/[.][b][o](\d{1,})[^\w\*](\d{1,})/i);


            var eleB = $(this).attr('cell-b').match(/[-][b][o]/i);
            var eleBl = $(this).attr('cell-b').match(/[-][b][l]/i);
            var eleBr = $(this).attr('cell-b').match(/[-][b][r]/i);
            var eleBt = $(this).attr('cell-b').match(/[-][b][t]/i);
            var eleBb = $(this).attr('cell-b').match(/[-][b][b]/i);
            var eleBlHo = $(this).attr('cell-b').match(/[.][b][l]/i);
            var eleBrHo = $(this).attr('cell-b').match(/[.][b][r]/i);
            var eleBtHo = $(this).attr('cell-b').match(/[.][b][t]/i);
            var eleBbHo = $(this).attr('cell-b').match(/[.][b][b]/i);
            var eleBHo = $(this).attr('cell-b').match(/[.][b][o]/i);


            if (eleB == '-bo') {
                var borderNum = border[2] - 1;
                $(this).css('border-width', '' + border[1] + 'px ' + border[1] + 'px ' + border[1] + 'px ' + border[1] + 'px');
                $(this).css('border-style', 'solid');
                $(this).css('border-color', '' + colors[borderNum] + '');
            }
            if (eleBHo == '.bo') {
                $(this).mouseenter(function () {
                    var borderHoverNum = borderHover[2] - 1;
                    $(this).css('border-width', '' + borderHover[1] + 'px ' + borderHover[1] + 'px ' + borderHover[1] + 'px ' + borderHover[1] + 'px');
                    $(this).css('border-style', 'solid');
                    $(this).css('border-color', '' + colors[borderHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderNum = border[2] - 1;
                    $(this).css('border-width', '' + border[1] + 'px ' + border[1] + 'px ' + border[1] + 'px ' + border[1] + 'px');
                    $(this).css('border-style', 'solid');
                    $(this).css('border-color', '' + colors[borderNum] + '');
                })
            }

            if (eleBl == '-bl') {
                var borderLeftNum = borderLeft[2] - 1;
                $(this).css('border-width', '0 0 0 ' + borderLeft[1] + 'px');
                $(this).css('border-style', 'solid');
                $(this).css('border-color', '' + colors[borderLeftNum] + '');
            }
            if (eleBlHo == '.bl') {
                $(this).hover(function () {
                    var borderLeftHoverNum = borderLeftHover[2] - 1;
                    $(this).css('border-width', '0 0 0 ' + borderLeftHover[1] + 'px');
                    $(this).css('border-style', 'solid');
                    $(this).css('border-color', '' + colors[borderLeftHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderLeftNum = borderLeft[2] - 1;
                    $(this).css('border-width', '0 0 0 ' + borderLeft[1] + 'px');
                    $(this).css('border-style', 'solid');
                    $(this).css('border-color', '' + colors[borderLeftNum] + '');
                })
            }

            if (eleBr == '-br') {
                var borderRightNum = borderRight[2] - 1;
                $(this).css('border-width', '0 ' + borderRight[1] + 'px 0 0');
                $(this).css('border-style', 'solid');
                $(this).css('border-color', '' + colors[borderRightNum] + '');
            }
            if (eleBrHo == '.br') {
                $(this).hover(function () {
                    var borderRightHoverNum = borderRightHover[2] - 1;
                    $(this).css('border-width', '0 ' + borderRightHover[1] + 'px 0 0');
                    $(this).css('border-style', 'solid');
                    $(this).css('border-color', '' + colors[borderRightHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderRightNum = borderRight[2] - 1;
                    $(this).css('border-width', '0 ' + borderRight[1] + 'px 0 0');
                    $(this).css('border-style', 'solid');
                    $(this).css('border-color', '' + colors[borderRightNum] + '');
                })
            }

            if (eleBt == '-bt') {
                var borderTopNum = borderTop[2] - 1;
                $(this).css('border-width', '' + borderTop[1] + 'px 0 0 0');
                $(this).css('border-style', 'solid');
                $(this).css('border-color', '' + colors[borderTopNum] + '');
            }
            if (eleBtHo == '.bt') {
                $(this).hover(function () {
                    var borderTopHoverNum = borderTopHover[2] - 1;
                    $(this).css('border-width', '' + borderTopHover[1] + 'px 0 0 0');
                    $(this).css('border-style', 'solid');
                    $(this).css('border-color', '' + colors[borderTopHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderTopNum = borderTop[2] - 1;
                    $(this).css('border-width', '' + borderTop[1] + 'px 0 0 0');
                    $(this).css('border-style', 'solid');
                    $(this).css('border-color', '' + colors[borderTopNum] + '');
                })
            }

            if (eleBb == '-bb') {
                var borderBottomNum = borderBottom[2] - 1;
                $(this).css('border-width', '0 0 ' + borderBottom[1] + 'px 0');
                $(this).css('border-style', 'solid');
                $(this).css('border-color', '' + colors[borderBottomNum] + '');
            }
            if (eleBbHo == '.bb') {
                $(this).hover(function () {
                    var borderBottomHoverNum = borderBottomHover[2] - 1;
                    $(this).css('border-width', '0 0 ' + borderBottomHover[1] + 'px 0');
                    $(this).css('border-style', 'solid');
                    $(this).css('border-color', '' + colors[borderBottomHoverNum] + '');
                })
                $(this).mouseleave(function () {
                    var borderBottomNum = borderBottom[2] - 1;
                    $(this).css('border-width', '0 0 ' + borderBottom[1] + 'px 0');
                    $(this).css('border-style', 'solid');
                    $(this).css('border-color', '' + colors[borderBottomNum] + '');
                })
            }

        })
        $("[cell-b]").each(function () {
            var gradient = $(this).attr('cell-b').match(/[g][o](\d{1,})[^\w\*](\d{1,})/i);
            var gradientLeft = $(this).attr('cell-b').match(/[g][l](\d{1,})[^\w\*](\d{1,})/i);
            var gradientRight = $(this).attr('cell-b').match(/[g][r](\d{1,})[^\w\*](\d{1,})/i);
            var gradientTop = $(this).attr('cell-b').match(/[g][t](\d{1,})[^\w\*](\d{1,})/i);
            var gradientBottom = $(this).attr('cell-b').match(/[g][b](\d{1,})[^\w\*](\d{1,})/i);
            var gradientHorizontal = $(this).attr('cell-b').match(/[g][h](\d{1,})[^\w\*](\d{1,})/i);
            var gradientVertical = $(this).attr('cell-b').match(/[g][v](\d{1,})[^\w\*](\d{1,})/i);

            var eleGh = $(this).attr('cell-b').match(/[g][h]/i);
            var eleGv = $(this).attr('cell-b').match(/[g][v]/i);
            var eleGl = $(this).attr('cell-b').match(/[g][l]/i);
            var eleGr = $(this).attr('cell-b').match(/[g][r]/i);
            var eleGt = $(this).attr('cell-b').match(/[g][t]/i);
            var eleGb = $(this).attr('cell-b').match(/[g][b]/i);
            var eleG = $(this).attr('cell-b').match(/[g][o]/i);

            if (eleG == 'go') {
                $(this).css({ 'border-left': 'double ' + gradient[1] + 'px transparent' });
                $(this).css({ 'border-right': 'double ' + gradient[1] + 'px transparent' });
                $(this).css({ 'border-bottom': 'double ' + gradient[1] + 'px transparent' });
                $(this).css({ 'border-top': 'double ' + gradient[1] + 'px transparent' });
                if (eleGv == 'gv') {
                    var gradientNum = gradient[2] - 1;
                    var gradientFirstNum = gradientVertical[1] - 1;
                    var gradientSecondNum = gradientVertical[2] - 1;
                    $(this).css({ 'background-image': 'linear-gradient(' + colors[gradientNum] + ', ' + colors[gradientNum] + '),linear-gradient(90deg, ' + colors[gradientFirstNum] + ', ' + colors[gradientSecondNum] + '' });
                    $(this).css({ 'background-origin': 'border-box', 'background-clip': 'content-box,border-box' });
                }
                if (eleGh == 'gh') {
                    var gradientNum = gradient[2] - 1;
                    var gradientFirstNum = gradientHorizontal[1] - 1;
                    var gradientSecondNum = gradientHorizontal[2] - 1;
                    $(this).css({ 'background-image': 'linear-gradient(' + colors[gradientNum] + ', ' + colors[gradientNum] + '),linear-gradient(180deg, ' + colors[gradientFirstNum] + ', ' + colors[gradientSecondNum] + '' });
                    $(this).css({ 'background-origin': 'border-box', 'background-clip': 'content-box,border-box' });
                }
            }
            if (eleGl == 'gl') {
                $(this).css({ 'border-left': 'double ' + gradientLeft[1] + 'px transparent' });
                $(this).css({ 'border-right': '0' });
                $(this).css({ 'border-bottom': '0' });
                $(this).css({ 'border-top': '0' });
                if (eleGv == 'gv') {
                    var gradientNum = gradientLeft[2] - 1;
                    var gradientFirstNum = gradientVertical[1] - 1;
                    var gradientSecondNum = gradientVertical[2] - 1;
                    $(this).css({ 'background-image': 'linear-gradient(' + colors[gradientNum] + ', ' + colors[gradientNum] + '),linear-gradient(90deg, ' + colors[gradientFirstNum] + ', ' + colors[gradientSecondNum] + '' });
                    $(this).css({ 'background-origin': 'border-box', 'background-clip': 'content-box,border-box' });
                }
                if (eleGh == 'gh') {
                    var gradientNum = gradientLeft[2] - 1;
                    var gradientFirstNum = gradientHorizontal[1] - 1;
                    var gradientSecondNum = gradientHorizontal[2] - 1;
                    $(this).css({ 'background-image': 'linear-gradient(' + colors[gradientNum] + ', ' + colors[gradientNum] + '),linear-gradient(180deg, ' + colors[gradientFirstNum] + ', ' + colors[gradientSecondNum] + '' });
                    $(this).css({ 'background-origin': 'border-box', 'background-clip': 'content-box,border-box' });
                }
            }
            if (eleGr == 'gr') {
                $(this).css({ 'border-right': 'double ' + gradientRight[1] + 'px transparent' });
                $(this).css({ 'border-left': '0' });
                $(this).css({ 'border-bottom': '0' });
                $(this).css({ 'border-top': '0' });
                if (eleGv == 'gv') {
                    var gradientNum = gradientRight[2] - 1;
                    var gradientFirstNum = gradientVertical[1] - 1;
                    var gradientSecondNum = gradientVertical[2] - 1;
                    $(this).css({ 'background-image': 'linear-gradient(' + colors[gradientNum] + ', ' + colors[gradientNum] + '),linear-gradient(90deg, ' + colors[gradientFirstNum] + ', ' + colors[gradientSecondNum] + '' });
                    $(this).css({ 'background-origin': 'border-box', 'background-clip': 'content-box,border-box' });
                }
                if (eleGh == 'gh') {
                    var gradientNum = gradientRight[2] - 1;
                    var gradientFirstNum = gradientHorizontal[1] - 1;
                    var gradientSecondNum = gradientHorizontal[2] - 1;
                    $(this).css({ 'background-image': 'linear-gradient(' + colors[gradientNum] + ', ' + colors[gradientNum] + '),linear-gradient(180deg, ' + colors[gradientFirstNum] + ', ' + colors[gradientSecondNum] + '' });
                    $(this).css({ 'background-origin': 'border-box', 'background-clip': 'content-box,border-box' });
                }
            }
            if (eleGt == 'gt') {
                $(this).css({ 'border-top': 'double ' + gradientTop[1] + 'px transparent' });
                $(this).css({ 'border-right': '0' });
                $(this).css({ 'border-bottom': '0' });
                $(this).css({ 'border-left': '0' });
                if (eleGv == 'gv') {
                    var gradientNum = gradientTop[2] - 1;
                    var gradientFirstNum = gradientVertical[1] - 1;
                    var gradientSecondNum = gradientVertical[2] - 1;
                    $(this).css({ 'background-image': 'linear-gradient(' + colors[gradientNum] + ', ' + colors[gradientNum] + '),linear-gradient(90deg, ' + colors[gradientFirstNum] + ', ' + colors[gradientSecondNum] + '' });
                    $(this).css({ 'background-origin': 'border-box', 'background-clip': 'content-box,border-box' });
                }
                if (eleGh == 'gh') {
                    var gradientNum = gradientTop[2] - 1;
                    var gradientFirstNum = gradientHorizontal[1] - 1;
                    var gradientSecondNum = gradientHorizontal[2] - 1;
                    $(this).css({ 'background-image': 'linear-gradient(' + colors[gradientNum] + ', ' + colors[gradientNum] + '),linear-gradient(180deg, ' + colors[gradientFirstNum] + ', ' + colors[gradientSecondNum] + '' });
                    $(this).css({ 'background-origin': 'border-box', 'background-clip': 'content-box,border-box' });
                }
            }
            if (eleGb == 'gb') {
                $(this).css({ 'border-bottom': 'double ' + gradientBottom[1] + 'px transparent' });
                $(this).css({ 'border-right': '0' });
                $(this).css({ 'border-left': '0' });
                $(this).css({ 'border-top': '0' });
                if (eleGv == 'gv') {
                    var gradientNum = gradientBottom[2] - 1;
                    var gradientFirstNum = gradientVertical[1] - 1;
                    var gradientSecondNum = gradientVertical[2] - 1;
                    $(this).css({ 'background-image': 'linear-gradient(' + colors[gradientNum] + ', ' + colors[gradientNum] + '),linear-gradient(90deg, ' + colors[gradientFirstNum] + ', ' + colors[gradientSecondNum] + '' });
                    $(this).css({ 'background-origin': 'border-box', 'background-clip': 'content-box,border-box' });
                }
                if (eleGh == 'gh') {
                    var gradientNum = gradientBottom[2] - 1;
                    var gradientFirstNum = gradientHorizontal[1] - 1;
                    var gradientSecondNum = gradientHorizontal[2] - 1;
                    $(this).css({ 'background-image': 'linear-gradient(' + colors[gradientNum] + ', ' + colors[gradientNum] + '),linear-gradient(180deg, ' + colors[gradientFirstNum] + ', ' + colors[gradientSecondNum] + '' });
                    $(this).css({ 'background-origin': 'border-box', 'background-clip': 'content-box,border-box' });
                }
            }
        })
    })
        .resize();
});
//For Background
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-bg]").each(function () {
            var gradientHorizontal = $(this).attr('cell-bg').match(/[g][h](\d{1,})[^\w\*](\d{1,})/i);
            var gradientHorizontalDesk = $(this).attr('cell-bg').match(/[d][h](\d{1,})[^\w\*](\d{1,})/i);
            var gradientHorizontalLarge = $(this).attr('cell-bg').match(/[l][h](\d{1,})[^\w\*](\d{1,})/i);
            var gradientHorizontalTab = $(this).attr('cell-bg').match(/[t][h](\d{1,})[^\w\*](\d{1,})/i);
            var gradientHorizontalMobile = $(this).attr('cell-bg').match(/[m][h](\d{1,})[^\w\*](\d{1,})/i);
            var gradientHorizontalSmall = $(this).attr('cell-bg').match(/[s][h](\d{1,})[^\w\*](\d{1,})/i);

            var eleGh = $(this).attr('cell-bg').match(/[g][h]/i);
            var eleGhD = $(this).attr('cell-bg').match(/[d][h]/i);
            var eleGhL = $(this).attr('cell-bg').match(/[l][h]/i);
            var eleGhT = $(this).attr('cell-bg').match(/[t][h]/i);
            var eleGhM = $(this).attr('cell-bg').match(/[m][h]/i);
            var eleGhS = $(this).attr('cell-bg').match(/[s][h]/i);

            if (eleGh == 'gh') {
                gradientFirstNum = gradientHorizontal[1] - 1;
                gradientSecondNum = gradientHorizontal[2] - 1;
                $(this).css({ 'background': 'linear-gradient(180deg,' + colors[gradientFirstNum] + ', ' + colors[gradientSecondNum] + ')' });
            }
            if (eleGh != 'gh') {
                if (eleGhD == 'dh') {
                    gradientFirstDeskNum = gradientHorizontalDesk[1] - 1;
                    gradientSecondDeskNum = gradientHorizontalDesk[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(180deg,' + colors[gradientFirstDeskNum] + ', ' + colors[gradientSecondDeskNum] + ')' });
                }
                if (eleGhL == 'lh' & eleGhD != 'dh') {
                    gradientFirstLargeNum = gradientHorizontalLarge[1] - 1;
                    gradientSecondLargeNum = gradientHorizontalLarge[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(180deg,' + colors[gradientFirstLargeNum] + ', ' + colors[gradientSecondLargeNum] + ')' });
                }
                if (eleGhT == 'th' & eleGhD != 'dh' & eleGhL != 'lh') {
                    gradientFirstTabNum = gradientHorizontalTab[1] - 1;
                    gradientSecondTabNum = gradientHorizontalTab[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(180deg,' + colors[gradientFirstTabNum] + ', ' + colors[gradientSecondTabNum] + ')' });
                }
                if (eleGhM == 'mh' & eleGhD != 'dh' & eleGhL != 'lh' & eleGhT != 'th') {
                    gradientFirstMobileNum = gradientHorizontalMobile[1] - 1;
                    gradientSecondMobileNum = gradientHorizontalMobile[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(180deg,' + colors[gradientFirstMobileNum] + ', ' + colors[gradientSecondMobileNum] + ')' });
                }
                if (eleGhS == 'sh' & eleGhD != 'dh' & eleGhL != 'lh' & eleGhT != 'th' & eleGhM != 'mh') {
                    gradientFirstSmallNum = gradientHorizontalSmall[1] - 1;
                    gradientSecondSmallNum = gradientHorizontalSmall[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(180deg,' + colors[gradientFirstSmallNum] + ', ' + colors[gradientSecondSmallNum] + ')' });
                }
            }
            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleGhD == 'dh') {
                    gradientFirstDeskNum = gradientHorizontalDesk[1] - 1;
                    gradientSecondDeskNum = gradientHorizontalDesk[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(180deg,' + colors[gradientFirstDeskNum] + ', ' + colors[gradientSecondDeskNum] + ')' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleGhD == 'dh') {
                    gradientFirstDeskNum = gradientHorizontalDesk[1] - 1;
                    gradientSecondDeskNum = gradientHorizontalDesk[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(180deg,' + colors[gradientFirstDeskNum] + ', ' + colors[gradientSecondDeskNum] + ')' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleGhL == 'lh') {
                    gradientFirstLargeNum = gradientHorizontalLarge[1] - 1;
                    gradientSecondLargeNum = gradientHorizontalLarge[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(180deg,' + colors[gradientFirstLargeNum] + ', ' + colors[gradientSecondLargeNum] + ')' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleGhT == 'th') {
                    gradientFirstTabNum = gradientHorizontalTab[1] - 1;
                    gradientSecondTabNum = gradientHorizontalTab[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(180deg,' + colors[gradientFirstTabNum] + ', ' + colors[gradientSecondTabNum] + ')' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleGhM == 'mh') {
                    gradientFirstMobileNum = gradientHorizontalMobile[1] - 1;
                    gradientSecondMobileNum = gradientHorizontalMobile[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(180deg,' + colors[gradientFirstMobileNum] + ', ' + colors[gradientSecondMobileNum] + ')' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleGhS == 'sh') {
                    gradientFirsSmallNum = gradientHorizontalSmall[1] - 1;
                    gradientSecondSmallNum = gradientHorizontalSmall[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(180deg,' + colors[gradientFirstSmallNum] + ', ' + colors[gradientSecondSmallNum] + ')' });
                }
            }
            else if (width < 319.98) {
                if (eleGhS == 'sh') {
                    gradientFirsSmallNum = gradientHorizontalSmall[1] - 1;
                    gradientSecondSmallNum = gradientHorizontalSmall[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(180deg,' + colors[gradientFirstSmallNum] + ', ' + colors[gradientSecondSmallNum] + ')' });
                }
            }
        })
        $("[cell-bg]").each(function () {
            var gradientVertical = $(this).attr('cell-bg').match(/[g][v](\d{1,})[^\w\*](\d{1,})/i);
            var gradientVerticalDesk = $(this).attr('cell-bg').match(/[d][v](\d{1,})[^\w\*](\d{1,})/i);
            var gradientVerticalLarge = $(this).attr('cell-bg').match(/[l][v](\d{1,})[^\w\*](\d{1,})/i);
            var gradientVerticalTab = $(this).attr('cell-bg').match(/[t][v](\d{1,})[^\w\*](\d{1,})/i);
            var gradientVerticalMobile = $(this).attr('cell-bg').match(/[m][v](\d{1,})[^\w\*](\d{1,})/i);
            var gradientVerticalSmall = $(this).attr('cell-bg').match(/[s][v](\d{1,})[^\w\*](\d{1,})/i);

            var eleGv = $(this).attr('cell-bg').match(/[g][v]/i);
            var eleGvD = $(this).attr('cell-bg').match(/[d][v]/i);
            var eleGvL = $(this).attr('cell-bg').match(/[l][v]/i);
            var eleGvT = $(this).attr('cell-bg').match(/[t][v]/i);
            var eleGvM = $(this).attr('cell-bg').match(/[m][v]/i);
            var eleGvS = $(this).attr('cell-bg').match(/[s][v]/i);


            if (eleGv == 'gv') {
                gradientFirstNum = gradientVertical[1] - 1;
                gradientSecondNum = gradientVertical[2] - 1;
                $(this).css({ 'background': 'linear-gradient(90deg,' + colors[gradientFirstNum] + ', ' + colors[gradientSecondNum] + ')' });
            }
            if (eleGv != 'gv') {
                if (eleGvD == 'dv') {
                    gradientFirstDeskNum = gradientVerticalDesk[1] - 1;
                    gradientSecondDeskNum = gradientVerticalDesk[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(90deg,' + colors[gradientFirstDeskNum] + ', ' + colors[gradientSecondDeskNum] + ')' });
                }
                if (eleGvL == 'lv' & eleGvD != 'dv') {
                    gradientFirstLargeNum = gradientVerticalLarge[1] - 1;
                    gradientSecondLargeNum = gradientVerticalLarge[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(90deg,' + colors[gradientFirstLargeNum] + ', ' + colors[gradientSecondLargeNum] + ')' });
                }
                if (eleGvT == 'tv' & eleGvD != 'dv' & eleGvL != 'lv') {
                    gradientFirstTabNum = gradientVerticalTab[1] - 1;
                    gradientSecondTabNum = gradientVerticalTab[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(90deg,' + colors[gradientFirstTabNum] + ', ' + colors[gradientSecondTabNum] + ')' });
                }
                if (eleGvM == 'mv' & eleGvD != 'dv' & eleGvL != 'lv' & eleGvT != 'tv') {
                    gradientFirstMobileNum = gradientVerticalMobile[1] - 1;
                    gradientSecondMobileNum = gradientVerticalMobile[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(90deg,' + colors[gradientFirstMobileNum] + ', ' + colors[gradientSecondMobileNum] + ')' });
                }
                if (eleGvS == 'sv' & eleGvD != 'dv' & eleGvL != 'lv' & eleGvT != 'tv' & eleGvM != 'mv') {
                    gradientFirstSmallNum = gradientVerticalSmall[1] - 1;
                    gradientSecondSmallNum = gradientVerticalSmall[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(90deg,' + colors[gradientFirstSmallNum] + ', ' + colors[gradientSecondSmallNum] + ')' });
                }
            }
            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleGvD == 'dv') {
                    gradientFirstDeskNum = gradientVerticalDesk[1] - 1;
                    gradientSecondDeskNum = gradientVerticalDesk[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(90deg,' + colors[gradientFirstDeskNum] + ', ' + colors[gradientSecondDeskNum] + ')' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleGvD == 'dv') {
                    gradientFirstDeskNum = gradientVerticalDesk[1] - 1;
                    gradientSecondDeskNum = gradientVerticalDesk[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(90deg,' + colors[gradientFirstDeskNum] + ', ' + colors[gradientSecondDeskNum] + ')' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleGvL == 'lv') {
                    gradientFirstLargeNum = gradientVerticalLarge[1] - 1;
                    gradientSecondLargeNum = gradientVerticalLarge[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(90deg,' + colors[gradientFirstLargeNum] + ', ' + colors[gradientSecondLargeNum] + ')' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleGvT == 'tv') {
                    gradientFirstTabNum = gradientVerticalTab[1] - 1;
                    gradientSecondTabNum = gradientVerticalTab[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(90deg,' + colors[gradientFirstTabNum] + ', ' + colors[gradientSecondTabNum] + ')' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleGvM == 'mv') {
                    gradientFirstMobileNum = gradientVerticalMobile[1] - 1;
                    gradientSecondMobileNum = gradientVerticalMobile[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(90deg,' + colors[gradientFirstMobileNum] + ', ' + colors[gradientSecondMobileNum] + ')' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleGvS == 'sv') {
                    gradientFirsSmallNum = gradientVerticalSmall[1] - 1;
                    gradientSecondSmallNum = gradientVerticalSmall[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(90deg,' + colors[gradientFirstSmallNum] + ', ' + colors[gradientSecondSmallNum] + ')' });
                }
            }
            else if (width < 319.98) {
                if (eleGvS == 'sv') {
                    gradientFirsSmallNum = gradientVerticalSmall[1] - 1;
                    gradientSecondSmallNum = gradientVerticalSmall[2] - 1;
                    $(this).css({ 'background': 'linear-gradient(90deg,' + colors[gradientFirstSmallNum] + ', ' + colors[gradientSecondSmallNum] + ')' });
                }
            }
        })
        $("[cell-bg]").each(function () {
            var color = $(this).attr('cell-bg').match(/[c](\d{1,})/i);
            var colorDesk = $(this).attr('cell-bg').match(/[d][c][^,]*?(\d{1,})*/i);
            var colorLarge = $(this).attr('cell-bg').match(/[l][c][^,]*?(\d{1,})*/i);
            var colorTab = $(this).attr('cell-bg').match(/[t][c][^,]*?(\d{1,})*/i);
            var colorMobile = $(this).attr('cell-bg').match(/[m][c][^,]*?(\d{1,})*/i);
            var colorSmall = $(this).attr('cell-bg').match(/[s][c][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-bg').match(/[c]/i);
            var eleD = $(this).attr('cell-bg').match(/[d][c]/i);
            var eleL = $(this).attr('cell-bg').match(/[l][c]/i);
            var eleT = $(this).attr('cell-bg').match(/[t][c]/i);
            var eleM = $(this).attr('cell-bg').match(/[m][c]/i);
            var eleS = $(this).attr('cell-bg').match(/[s][c]/i);

            if (ele == 'c') {
                var colorNum = (color[1] - 1)
                $(this).css('background-color', '' + colors[colorNum] + '');
            }
            if (ele != 'c') {
                if (eleD == 'dc') {
                    var colorNumDesk = (colorDesk[1] - 1)
                    $(this).css('background-color', '' + colors[colorNumDesk] + '');
                }
                if (eleL == 'lc' & eleD != 'dc') {
                    var colorNumLarge = (colorLarge[1] - 1)
                    $(this).css('background-color', '' + colors[colorNumLarge] + '');
                }
                if (eleT == 'tc' & eleD != 'dc' & eleL != 'lc') {
                    var colorNumTab = (colorTab[1] - 1)
                    $(this).css('background-color', '' + colors[colorNumTab] + '');
                }
                if (eleM == 'mc' & eleD != 'dc' & eleL != 'lc' & eleT != 'tc') {
                    var colorNumMobile = (colorMobile[1] - 1)
                    $(this).css('background-color', '' + colors[colorNumMobile] + '');
                }
                if (eleS == 'sc' & eleD != 'dc' & eleL != 'lc' & eleT != 'tc' & eleM != 'mc') {
                    var colorNumSmall = (colorSmall[1] - 1);
                    $(this).css('background-color', '' + colors[colorNumSmall] + '');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dc') {
                    var colorNumDesk = (colorDesk[1] - 1)
                    $(this).css('background-color', '' + colors[colorNumDesk] + '');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dc') {
                    var colorNumDesk = (colorDesk[1] - 1)
                    $(this).css('background-color', '' + colors[colorNumDesk] + '');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lc') {
                    var colorNumLarge = (colorLarge[1] - 1)
                    $(this).css('background-color', '' + colors[colorNumLarge] + '');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tc') {
                    var colorNumTab = (colorTab[1] - 1)
                    $(this).css('background-color', '' + colors[colorNumTab] + '');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mc') {
                    var colorNumMobile = (colorMobile[1] - 1)
                    $(this).css('background-color', '' + colors[colorNumMobile] + '');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sc') {
                    var colorNumSmall = (colorSmall[1] - 1)
                    $(this).css('background-color', '' + colors[colorNumSmall] + '');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sc') {
                    var colorNumSmall = (colorSmall[1] - 1)
                    $(this).css('background-color', '' + colors[colorNumSmall] + '');
                }
            }
        })
    })
        .resize();
});
//For Grid
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-G]").each(function () {
            var gc = $(this).attr('cell-G').match(/[g][c](\d{1,})/i);
            var ele = $(this).attr('cell-G').match(/[g][c]/i);
            if (ele == 'gc') {
                if (gc[1] == '1') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto' });
                }
                if (gc[1] == '2') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto' });
                }
                if (gc[1] == '3') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto' });
                }
                if (gc[1] == '4') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto' });
                }
                if (gc[1] == '5') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto' });
                }
                if (gc[1] == '6') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto' });
                }
                if (gc[1] == '7') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto' });
                }
                if (gc[1] == '8') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto' });
                }
                if (gc[1] == '9') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto' });
                }
                if (gc[1] == '10') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto' });
                }
                if (gc[1] == '11') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto' });
                }
                if (gc[1] == '12') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto' });
                }
                if (gc[1] == '13') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto' });
                }
                if (gc[1] == '14') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto' });
                }
                if (gc[1] == '15') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto' });
                }
                if (gc[1] == '16') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto' });
                }
                if (gc[1] == '17') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto' });
                }
                if (gc[1] == '18') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto' });
                }
                if (gc[1] == '19') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto' });
                }
                if (gc[1] == '20') {
                    $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto' });
                }
            }
        })
        $("[cell-Gb]").each(function () {
            var box = $(this).attr('cell-Gb').match(/[b](\d{1,})[^\w\*](\d{1,})/i);
            var boxDesk = $(this).attr('cell-Gb').match(/[d][b](\d{1,})[^\w\*](\d{1,})/i);
            var boxLarge = $(this).attr('cell-Gb').match(/[l][b](\d{1,})[^\w\*](\d{1,})/i);
            var boxTab = $(this).attr('cell-Gb').match(/[t][b](\d{1,})[^\w\*](\d{1,})/i);
            var boxMobile = $(this).attr('cell-Gb').match(/[m][b](\d{1,})[^\w\*](\d{1,})/i);
            var boxSmall = $(this).attr('cell-Gb').match(/[s][b](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-Gb').match(/[b]/i);
            var eleD = $(this).attr('cell-Gb').match(/[d][b]/i);
            var eleL = $(this).attr('cell-Gb').match(/[l][b]/i);
            var eleT = $(this).attr('cell-Gb').match(/[t][b]/i);
            var eleM = $(this).attr('cell-Gb').match(/[m][b]/i);
            var eleS = $(this).attr('cell-Gb').match(/[s][b]/i);
            if (ele == 'b') {
                $(this).css({ 'grid-column': '' + box[1] + '/span ' + box[2] + '' });
            }
            if (ele != 'b') {
                if (eleD == 'db') {
                    $(this).css({ 'grid-column': '' + boxDesk[1] + '/span ' + boxDesk[2] + '' });
                }
                if (eleL == 'lb' & eleD != 'db') {
                    $(this).css({ 'grid-column': '' + boxLarge[1] + '/span ' + boxLarge[2] + '' });
                }
                if (eleT == 'tb' & eleD != 'db' & eleL != 'lb') {
                    $(this).css({ 'grid-column': '' + boxTab[1] + '/span ' + boxTab[2] + '' });
                }
                if (eleM == 'mb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb') {
                    $(this).css({ 'grid-column': '' + boxMobile[1] + '/span ' + boxMobile[2] + '' });
                }
                if (eleS == 'sb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb' & eleM != 'mb') {
                    $(this).css({ 'grid-column': '' + boxSmall[1] + '/span ' + boxSmall[2] + '' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'db') {
                    $(this).css({ 'grid-column': '' + boxDesk[1] + '/span ' + boxDesk[2] + '' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'db') {
                    $(this).css({ 'grid-column': '' + boxDesk[1] + '/span ' + boxDesk[2] + '' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lb') {
                    $(this).css({ 'grid-column': '' + boxLarge[1] + '/span ' + boxLarge[2] + '' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tb') {
                    $(this).css({ 'grid-column': '' + boxMobile[1] + '/span ' + boxMobile[2] + '' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mb') {
                    $(this).css({ 'grid-column': '' + boxSmall[1] + '/span ' + boxSmall[2] + '' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sb') {
                    $(this).css({ 'grid-column': '' + boxSmall[1] + '/span' + boxSmall[2] + '' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sb') {
                    $(this).css({ 'grid-column': '' + boxSmall[1] + '/span' + boxSmall[2] + '' });
                }
            }
        })
        $("[cell-Gb]").each(function () {
            var order = $(this).attr('cell-Gb').match(/[r][^,]*?(\d{1,})*/i);
            var orderDesk = $(this).attr('cell-Gb').match(/[d][r][^,]*?(\d{1,})*/i);
            var orderLarge = $(this).attr('cell-Gb').match(/[l][r][^,]*?(\d{1,})*/i);
            var orderTab = $(this).attr('cell-Gb').match(/[t][r][^,]*?(\d{1,})*/i);
            var orderMobile = $(this).attr('cell-Gb').match(/[m][r][^,]*?(\d{1,})*/i);
            var orderSmall = $(this).attr('cell-Gb').match(/[s][r][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-Gb').match(/[r]/i);
            var eleD = $(this).attr('cell-Gb').match(/[d][r]/i);
            var eleL = $(this).attr('cell-Gb').match(/[l][r]/i);
            var eleT = $(this).attr('cell-Gb').match(/[t][r]/i);
            var eleM = $(this).attr('cell-Gb').match(/[m][r]/i);
            var eleS = $(this).attr('cell-Gb').match(/[s][r]/i);
            if (ele == 'r') {
                $(this).css('grid-row', '' + order[1] + '');
            }
            if (ele != 'r') {
                if (eleD == 'dr') {
                    $(this).css('grid-row', '' + orderDesk[1] + '');
                }
                if (eleL == 'lr' & eleD != 'dr') {
                    $(this).css('grid-row', '' + orderLarge[1] + '');
                }
                if (eleT == 'tr' & eleD != 'dr' & eleL != 'lr') {
                    $(this).css('grid-row', '' + orderTab[1] + '');
                }
                if (eleM == 'mr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr') {
                    $(this).css('grid-row', '' + orderMobile[1] + '');
                }
                if (eleS == 'sr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr' & eleM != 'mr') {
                    $(this).css('grid-row', '' + orderSmall[1] + '');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dr') {
                    $(this).css('grid-row', '' + orderDesk[1] + '');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dr') {
                    $(this).css('grid-row', '' + orderDesk[1] + '');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lr') {
                    $(this).css('grid-row', '' + orderLarge[1] + '');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tr') {
                    $(this).css('grid-row', '' + orderTab[1] + '');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mr') {
                    $(this).css('grid-row', '' + orderMobile[1] + '');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sr') {
                    $(this).css('grid-row', '' + orderSmall[1] + '');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sr') {
                    $(this).css('grid-row', '' + orderSmall[1] + '');
                }
            }
        })
        $("[cell-Gb]").each(function () {
            var margin = $(this).attr('cell-Gb').match(/[g][^,]*?(\d{1,})*/i);
            var marginDesk = $(this).attr('cell-Gb').match(/[d][g][^,]*?(\d{1,})*/i);
            var marginLarge = $(this).attr('cell-Gb').match(/[l][g][^,]*?(\d{1,})*/i);
            var marginTab = $(this).attr('cell-Gb').match(/[t][g][^,]*?(\d{1,})*/i);
            var marginMobile = $(this).attr('cell-Gb').match(/[m][g][^,]*?(\d{1,})*/i);
            var marginSmall = $(this).attr('cell-Gb').match(/[s][g][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-Gb').match(/[g]/i);
            var eleD = $(this).attr('cell-Gb').match(/[d][g]/i);
            var eleL = $(this).attr('cell-Gb').match(/[l][g]/i);
            var eleT = $(this).attr('cell-Gb').match(/[t][g]/i);
            var eleM = $(this).attr('cell-Gb').match(/[m][g]/i);
            var eleS = $(this).attr('cell-Gb').match(/[s][g]/i);
            if (ele == 'g') {
                $(this).css('margin', '' + margin[1] + 'px');
            }
            if (ele != 'g') {
                if (eleD == 'dg') {
                    $(this).css('margin', '' + marginDesk[1] + 'px');
                }
                if (eleL == 'lg' & eleD != 'dg') {
                    $(this).css('margin', '' + marginLarge[1] + 'px');
                }
                if (eleT == 'tg' & eleD != 'dg' & eleL != 'lg') {
                    $(this).css('margin', '' + marginTab[1] + 'px');
                }
                if (eleM == 'mg' & eleD != 'dg' & eleL != 'lg' & eleT != 'tg') {
                    $(this).css('margin', '' + marginMobile[1] + 'px');
                }
                if (eleS == 'sg' & eleD != 'dg' & eleL != 'lg' & eleT != 'tg' & eleM != 'mg') {
                    $(this).css('margin', '' + marginSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dg') {
                    $(this).css('margin', '' + marginDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dg') {
                    $(this).css('margin', '' + marginDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lg') {
                    $(this).css('margin', '' + marginLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tg') {
                    $(this).css('margin', '' + marginTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mg') {
                    $(this).css('margin', '' + marginMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sg') {
                    $(this).css('margin', '' + marginSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sg') {
                    $(this).css('margin', '' + marginSmall[1] + 'px');
                }
            }
        })
        $("[cell-Gb]").each(function () {
            var margin = $(this).attr('cell-Gb').match(/[g][h](\d{1,})[^\w\*](\d{1,})/i);
            var marginDesk = $(this).attr('cell-Gb').match(/[d][h](\d{1,})[^\w\*](\d{1,})/i);
            var marginLarge = $(this).attr('cell-Gb').match(/[l][h](\d{1,})[^\w\*](\d{1,})/i);
            var marginTab = $(this).attr('cell-Gb').match(/[t][h](\d{1,})[^\w\*](\d{1,})/i);
            var marginMobile = $(this).attr('cell-Gb').match(/[m][h](\d{1,})[^\w\*](\d{1,})/i);
            var marginSmall = $(this).attr('cell-Gb').match(/[s][h](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-Gb').match(/[g][h]/i);
            var eleD = $(this).attr('cell-Gb').match(/[d][h]/i);
            var eleL = $(this).attr('cell-Gb').match(/[l][h]/i);
            var eleT = $(this).attr('cell-Gb').match(/[t][h]/i);
            var eleM = $(this).attr('cell-Gb').match(/[m][h]/i);
            var eleS = $(this).attr('cell-Gb').match(/[s][h]/i);
            if (ele == 'gh') {
                $(this).css({ 'margin-left': '' + margin[1] + 'px', 'margin-right': '' + margin[2] + 'px' });
            }
            if (ele != 'gh') {
                if (eleD == 'dh') {
                    $(this).css({ 'margin-left': '' + marginDesk[1] + 'px', 'margin-right': '' + marginDesk[2] + 'px' });
                }
                if (eleL == 'lh' & eleD != 'dh') {
                    $(this).css({ 'margin-left': '' + marginLarge[1] + 'px', 'margin-right': '' + marginLarge[2] + 'px' });
                }
                if (eleT == 'th' & eleD != 'dh' & eleL != 'lh') {
                    $(this).css({ 'margin-left': '' + marginTab[1] + 'px', 'margin-right': '' + marginTab[2] + 'px' });
                }
                if (eleM == 'mh' & eleD != 'dh' & eleL != 'lh' & eleT != 'th') {
                    $(this).css({ 'margin-left': '' + marginMobile[1] + 'px', 'margin-right': '' + marginMobile[2] + 'px' });
                }
                if (eleS == 'sh' & eleD != 'dh' & eleL != 'lh' & eleT != 'th' & eleM != 'mh') {
                    $(this).css({ 'margin-left': '' + marginSmall[1] + 'px', 'margin-right': '' + marginSmall[2] + 'px' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dh') {
                    $(this).css({ 'margin-left': '' + marginDesk[1] + 'px', 'margin-right': '' + marginDesk[2] + 'px' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dh') {
                    $(this).css({ 'margin-left': '' + marginDesk[1] + 'px', 'margin-right': '' + marginDesk[2] + 'px' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lh') {
                    $(this).css({ 'margin-left': '' + marginLarge[1] + 'px', 'margin-right': '' + marginLarge[2] + 'px' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'th') {
                    $(this).css({ 'margin-left': '' + marginTab[1] + 'px', 'margin-right': '' + marginTab[2] + 'px' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mh') {
                    $(this).css({ 'margin-left': '' + marginMobile[1] + 'px', 'margin-right': '' + marginMobile[2] + 'px' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sh') {
                    $(this).css({ 'margin-left': '' + marginSmall[1] + 'px', 'margin-right': '' + marginSmall[2] + 'px' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sh') {
                    $(this).css({ 'margin-left': '' + marginSmall[1] + 'px', 'margin-right': '' + marginSmall[2] + 'px' });
                }
            }
        })
        $("[cell-Gb]").each(function () {
            var margin = $(this).attr('cell-Gb').match(/[g][v](\d{1,})[^\w\*](\d{1,})/i);
            var marginDesk = $(this).attr('cell-Gb').match(/[d][v](\d{1,})[^\w\*](\d{1,})/i);
            var marginLarge = $(this).attr('cell-Gb').match(/[l][v](\d{1,})[^\w\*](\d{1,})/i);
            var marginTab = $(this).attr('cell-Gb').match(/[t][v](\d{1,})[^\w\*](\d{1,})/i);
            var marginMobile = $(this).attr('cell-Gb').match(/[m][v](\d{1,})[^\w\*](\d{1,})/i);
            var marginSmall = $(this).attr('cell-Gb').match(/[s][v](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-Gb').match(/[g][v]/i);
            var eleD = $(this).attr('cell-Gb').match(/[d][v]/i);
            var eleL = $(this).attr('cell-Gb').match(/[l][v]/i);
            var eleT = $(this).attr('cell-Gb').match(/[t][v]/i);
            var eleM = $(this).attr('cell-Gb').match(/[m][v]/i);
            var eleS = $(this).attr('cell-Gb').match(/[s][v]/i);
            if (ele == 'gv') {
                $(this).css({ 'margin-top': '' + margin[1] + 'px', 'margin-bottom': '' + margin[2] + 'px' });
            }
            if (ele != 'gv') {
                if (eleD == 'dv') {
                    $(this).css({ 'margin-top': '' + marginDesk[1] + 'px', 'margin-bottom': '' + marginDesk[2] + 'px' });
                }
                if (eleL == 'lv' & eleD != 'dv') {
                    $(this).css({ 'margin-top': '' + marginLarge[1] + 'px', 'margin-bottom': '' + marginLarge[2] + 'px' });
                }
                if (eleT == 'tv' & eleD != 'dv' & eleL != 'lv') {
                    $(this).css({ 'margin-top': '' + marginTab[1] + 'px', 'margin-bottom': '' + marginTab[2] + 'px' });
                }
                if (eleM == 'mv' & eleD != 'dv' & eleL != 'lv' & eleT != 'tv') {
                    $(this).css({ 'margin-top': '' + marginMobile[1] + 'px', 'margin-bottom': '' + marginMobile[2] + 'px' });
                }
                if (eleS == 'sv' & eleD != 'dv' & eleL != 'lv' & eleT != 'tv' & eleM != 'mv') {
                    $(this).css({ 'margin-top': '' + marginSmall[1] + 'px', 'margin-bottom': '' + marginSmall[2] + 'px' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dv') {
                    $(this).css({ 'margin-top': '' + marginDesk[1] + 'px', 'margin-bottom': '' + marginDesk[2] + 'px' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dv') {
                    $(this).css({ 'margin-top': '' + marginDesk[1] + 'px', 'margin-bottom': '' + marginDesk[2] + 'px' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lv') {
                    $(this).css({ 'margin-top': '' + marginLarge[1] + 'px', 'margin-bottom': '' + marginLarge[2] + 'px' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tv') {
                    $(this).css({ 'margin-top': '' + marginTab[1] + 'px', 'margin-bottom': '' + marginTab[2] + 'px' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mv') {
                    $(this).css({ 'margin-top': '' + marginMobile[1] + 'px', 'margin-bottom': '' + marginMobile[2] + 'px' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sv') {
                    $(this).css({ 'margin-top': '' + marginSmall[1] + 'px', 'margin-bottom': '' + marginSmall[2] + 'px' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sv') {
                    $(this).css({ 'margin-top': '' + marginSmall[1] + 'px', 'margin-bottom': '' + marginSmall[2] + 'px' });
                }
            }
        })
    })
        .resize();
});
//For Flex
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-Q]").each(function () {
            var margin = $(this).attr('cell-Q').match(/[g][^,]*?(\d{1,})*/i);
            var marginDesk = $(this).attr('cell-Q').match(/[d][g][^,]*?(\d{1,})*/i);
            var marginLarge = $(this).attr('cell-Q').match(/[l][g][^,]*?(\d{1,})*/i);
            var marginTab = $(this).attr('cell-Q').match(/[t][g][^,]*?(\d{1,})*/i);
            var marginMobile = $(this).attr('cell-Q').match(/[m][g][^,]*?(\d{1,})*/i);
            var marginSmall = $(this).attr('cell-Q').match(/[s][g][^,]*?(\d{1,})*/i);

            var ele = $(this).attr('cell-Q').match(/[g]/i);
            var eleD = $(this).attr('cell-Q').match(/[d][g]/i);
            var eleL = $(this).attr('cell-Q').match(/[l][g]/i);
            var eleT = $(this).attr('cell-Q').match(/[t][g]/i);
            var eleM = $(this).attr('cell-Q').match(/[m][g]/i);
            var eleS = $(this).attr('cell-Q').match(/[s][g]/i);
            if (ele == 'g') {
                $(this).find('[cell-c]').css('margin', '' + margin[1] + 'px');
            }
            if (ele != 'g') {
                if (eleD == 'dg') {
                    $(this).find('[cell-c]').css('margin', '' + marginDesk[1] + 'px');
                }
                if (eleL == 'lg' & eleD != 'dg') {
                    $(this).find('[cell-c]').css('margin', '' + marginLarge[1] + 'px');
                }
                if (eleT == 'tg' & eleD != 'dg' & eleL != 'lg') {
                    $(this).find('[cell-c]').css('margin', '' + marginTab[1] + 'px');
                }
                if (eleM == 'mg' & eleD != 'dg' & eleL != 'lg' & eleT != 'tg') {
                    $(this).find('[cell-c]').css('margin', '' + marginMobile[1] + 'px');
                }
                if (eleS == 'sg' & eleD != 'dg' & eleL != 'lg' & eleT != 'tg' & eleM != 'mg') {
                    $(this).find('[cell-c]').css('margin', '' + marginSmall[1] + 'px');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dg') {
                    $(this).find('[cell-c]').css('margin', '' + marginDesk[1] + 'px');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dg') {
                    $(this).find('[cell-c]').css('margin', '' + marginDesk[1] + 'px');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lg') {
                    $(this).find('[cell-c]').css('margin', '' + marginLarge[1] + 'px');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tg') {
                    $(this).find('[cell-c]').css('margin', '' + marginTab[1] + 'px');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mg') {
                    $(this).find('[cell-c]').css('margin', '' + marginMobile[1] + 'px');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sg') {
                    $(this).find('[cell-c]').css('margin', '' + marginSmall[1] + 'px');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sg') {
                    $(this).find('[cell-c]').css('margin', '' + marginSmall[1] + 'px');
                }
            }
        })
        $("[cell-Q]").each(function () {
            var margin = $(this).attr('cell-Q').match(/[g][h](\d{1,})[^\w\*](\d{1,})/i);
            var marginDesk = $(this).attr('cell-Q').match(/[d][h](\d{1,})[^\w\*](\d{1,})/i);
            console.log(marginDesk)
            var marginLarge = $(this).attr('cell-Q').match(/[l][h](\d{1,})[^\w\*](\d{1,})/i);
            var marginTab = $(this).attr('cell-Q').match(/[t][h](\d{1,})[^\w\*](\d{1,})/i);
            var marginMobile = $(this).attr('cell-Q').match(/[m][h](\d{1,})[^\w\*](\d{1,})/i);
            var marginSmall = $(this).attr('cell-Q').match(/[s][h](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-Q').match(/[g][h]/i);
            var eleD = $(this).attr('cell-Q').match(/[d][h]/i);
            console.log(eleD)
            var eleL = $(this).attr('cell-Q').match(/[l][h]/i);
            var eleT = $(this).attr('cell-Q').match(/[t][h]/i);
            var eleM = $(this).attr('cell-Q').match(/[m][h]/i);
            var eleS = $(this).attr('cell-Q').match(/[s][h]/i);
            if (ele == 'gh') {
                $(this).find('[cell-c]').css({ 'margin-left': '' + margin[1] + 'px', 'margin-right': '' + margin[2] + 'px' });
            }
            if (ele != 'gh') {
                if (eleD == 'dh') {
                    $(this).css({ 'margin-left': '' + marginDesk[1] + 'px', 'margin-right': '' + marginDesk[2] + 'px' });
                }
                if (eleL == 'lh' & eleD != 'dh') {
                    $(this).find('[cell-c]').css({ 'margin-left': '' + marginLarge[1] + 'px', 'margin-right': '' + marginLarge[2] + 'px' });
                }
                if (eleT == 'th' & eleD != 'dh' & eleL != 'lh') {
                    $(this).find('[cell-c]').css({ 'margin-left': '' + marginTab[1] + 'px', 'margin-right': '' + marginTab[2] + 'px' });
                }
                if (eleM == 'mh' & eleD != 'dh' & eleL != 'lh' & eleT != 'th') {
                    $(this).find('[cell-c]').css({ 'margin-left': '' + marginMobile[1] + 'px', 'margin-right': '' + marginMobile[2] + 'px' });
                }
                if (eleS == 'sh' & eleD != 'dh' & eleL != 'lh' & eleT != 'th' & eleM != 'mh') {
                    $(this).find('[cell-c]').css({ 'margin-left': '' + marginSmall[1] + 'px', 'margin-right': '' + marginSmall[2] + 'px' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dh') {
                    $(this).find('[cell-c]').css({ 'margin-left': '' + marginDesk[1] + 'px', 'margin-right': '' + marginDesk[2] + 'px' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dh') {
                    $(this).find('[cell-c]').css({ 'margin-left': '' + marginDesk[1] + 'px', 'margin-right': '' + marginDesk[2] + 'px' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lh') {
                    $(this).find('[cell-c]').css({ 'margin-left': '' + marginLarge[1] + 'px', 'margin-right': '' + marginLarge[2] + 'px' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'th') {
                    $(this).find('[cell-c]').css({ 'margin-left': '' + marginTab[1] + 'px', 'margin-right': '' + marginTab[2] + 'px' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mh') {
                    $(this).find('[cell-c]').css({ 'margin-left': '' + marginMobile[1] + 'px', 'margin-right': '' + marginMobile[2] + 'px' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sh') {
                    $(this).find('[cell-c]').css({ 'margin-left': '' + marginSmall[1] + 'px', 'margin-right': '' + marginSmall[2] + 'px' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sh') {
                    $(this).find('[cell-c]').css({ 'margin-left': '' + marginSmall[1] + 'px', 'margin-right': '' + marginSmall[2] + 'px' });
                }
            }
        })
        $("[cell-Q]").each(function () {
            var margin = $(this).attr('cell-Q').match(/[g][v](\d{1,})[^\w\*](\d{1,})/i);
            var marginDesk = $(this).attr('cell-Q').match(/[d][v](\d{1,})[^\w\*](\d{1,})/i);
            var marginLarge = $(this).attr('cell-Q').match(/[l][v](\d{1,})[^\w\*](\d{1,})/i);
            var marginTab = $(this).attr('cell-Q').match(/[t][v](\d{1,})[^\w\*](\d{1,})/i);
            var marginMobile = $(this).attr('cell-Q').match(/[m][v](\d{1,})[^\w\*](\d{1,})/i);
            var marginSmall = $(this).attr('cell-Q').match(/[s][v](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-Q').match(/[g][v]/i);
            var eleD = $(this).attr('cell-Q').match(/[d][v]/i);
            var eleL = $(this).attr('cell-Q').match(/[l][v]/i);
            var eleT = $(this).attr('cell-Q').match(/[t][v]/i);
            var eleM = $(this).attr('cell-Q').match(/[m][v]/i);
            var eleS = $(this).attr('cell-Q').match(/[s][v]/i);
            if (ele == 'gv') {
                $(this).find('[cell-c]').css({ 'margin-top': '' + margin[1] + 'px', 'margin-bottom': '' + margin[2] + 'px' });
            }
            if (ele != 'gv') {
                if (eleD == 'dv') {
                    $(this).find('[cell-c]').css({ 'margin-top': '' + marginDesk[1] + 'px', 'margin-bottom': '' + marginDesk[2] + 'px' });
                }
                if (eleL == 'lv' & eleD != 'dv') {
                    $(this).find('[cell-c]').css({ 'margin-top': '' + marginLarge[1] + 'px', 'margin-bottom': '' + marginLarge[2] + 'px' });
                }
                if (eleT == 'tv' & eleD != 'dv' & eleL != 'lv') {
                    $(this).find('[cell-c]').css({ 'margin-top': '' + marginTab[1] + 'px', 'margin-bottom': '' + marginTab[2] + 'px' });
                }
                if (eleM == 'mv' & eleD != 'dv' & eleL != 'lv' & eleT != 'tv') {
                    $(this).find('[cell-c]').css({ 'margin-top': '' + marginMobile[1] + 'px', 'margin-bottom': '' + marginMobile[2] + 'px' });
                }
                if (eleS == 'sv' & eleD != 'dv' & eleL != 'lv' & eleT != 'tv' & eleM != 'mv') {
                    $(this).find('[cell-c]').css({ 'margin-top': '' + marginSmall[1] + 'px', 'margin-bottom': '' + marginSmall[2] + 'px' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dv') {
                    $(this).find('[cell-c]').css({ 'margin-top': '' + marginDesk[1] + 'px', 'margin-bottom': '' + marginDesk[2] + 'px' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dv') {
                    $(this).find('[cell-c]').css({ 'margin-top': '' + marginDesk[1] + 'px', 'margin-bottom': '' + marginDesk[2] + 'px' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lv') {
                    $(this).find('[cell-c]').css({ 'margin-top': '' + marginLarge[1] + 'px', 'margin-bottom': '' + marginLarge[2] + 'px' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tv') {
                    $(this).find('[cell-c]').css({ 'margin-top': '' + marginTab[1] + 'px', 'margin-bottom': '' + marginTab[2] + 'px' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mv') {
                    $(this).find('[cell-c]').css({ 'margin-top': '' + marginMobile[1] + 'px', 'margin-bottom': '' + marginMobile[2] + 'px' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sv') {
                    $(this).find('[cell-c]').css({ 'margin-top': '' + marginSmall[1] + 'px', 'margin-bottom': '' + marginSmall[2] + 'px' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sv') {
                    $(this).find('[cell-c]').css({ 'margin-top': '' + marginSmall[1] + 'px', 'margin-bottom': '' + marginSmall[2] + 'px' });
                }
            }
        })
    })
        .resize();
});
//For Display 
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-d]").each(function () {

            var ele = $(this).attr('cell-d').match(/[n]/i);
            var eleD = $(this).attr('cell-d').match(/[d][n]/i);
            var eleL = $(this).attr('cell-d').match(/[l][n]/i);
            var eleT = $(this).attr('cell-d').match(/[t][n]/i);
            var eleM = $(this).attr('cell-d').match(/[m][n]/i);
            var eleS = $(this).attr('cell-d').match(/[s][n]/i);
            if (ele == 'n') {
                $(this).css('display', 'none');
            }
            if (ele != 'n') {
                if (eleD == 'dn') {
                    $(this).css('display', 'none');
                }
                if (eleL == 'ln' & eleD != 'dn') {
                    $(this).css('display', 'none');
                }
                if (eleT == 'tn' & eleD != 'dn' & eleL != 'ln') {
                    $(this).css('display', 'none');
                }
                if (eleM == 'mn' & eleD != 'dn' & eleL != 'ln' & eleT != 'tn') {
                    $(this).css('display', 'none');
                }
                if (eleS == 'sn' & eleD != 'dn' & eleL != 'ln' & eleT != 'tn' & eleM != 'mn') {
                    $(this).css('display', 'none');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dn') {
                    $(this).css('display', 'none');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dn') {
                    $(this).css('display', 'none');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'ln') {
                    $(this).css('display', 'none');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tn') {
                    $(this).css('display', 'none');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mn') {
                    $(this).css('display', 'none');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sn') {
                    $(this).css('display', 'none');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sn') {
                    $(this).css('display', 'none');
                }
            }
        })
        $("[cell-d]").each(function () {
            var ele = $(this).attr('cell-d').match(/[b]/i);
            var eleD = $(this).attr('cell-d').match(/[d][b]/i);
            var eleL = $(this).attr('cell-d').match(/[l][b]/i);
            var eleT = $(this).attr('cell-d').match(/[t][b]/i);
            var eleM = $(this).attr('cell-d').match(/[m][b]/i);
            var eleS = $(this).attr('cell-d').match(/[s][b]/i);
            if (ele == 'b') {
                $(this).css('display', 'block');
            }
            if (ele != 'b') {
                if (eleD == 'db') {
                    $(this).css('display', 'block');
                }
                if (eleL == 'lb' & eleD != 'db') {
                    $(this).css('display', 'block');
                }
                if (eleT == 'tb' & eleD != 'db' & eleL != 'lb') {
                    $(this).css('display', 'block');
                }
                if (eleM == 'mb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb') {
                    $(this).css('display', 'block');
                }
                if (eleS == 'sb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb' & eleM != 'mb') {
                    $(this).css('display', 'block');
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'db') {
                    $(this).css('display', 'block');
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'db') {
                    $(this).css('display', 'block');
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lb') {
                    $(this).css('display', 'block');
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tb') {
                    $(this).css('display', 'block');
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mb') {
                    $(this).css('display', 'block');
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sb') {
                    $(this).css('display', 'block');
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sb') {
                    $(this).css('display', 'block');
                }
            }
        })
        $("[cell-d]").each(function () {
            var ele = $(this).attr('cell-d').match(/[a]/i);
            var eleD = $(this).attr('cell-d').match(/[d][a]/i);
            var eleL = $(this).attr('cell-d').match(/[l][a]/i);
            var eleT = $(this).attr('cell-d').match(/[t][a]/i);
            var eleM = $(this).attr('cell-d').match(/[m][a]/i);
            var eleS = $(this).attr('cell-d').match(/[s][a]/i);
            if (ele == 'a') {
                $(this).children('div').css({ 'display': 'inline' });
            }
            if (ele != 'a') {
                if (eleD == 'da') {
                    $(this).children('div').css({ 'display': 'inline' });
                }
                if (eleL == 'la' & eleD != 'da') {
                    $(this).children('div').css({ 'display': 'inline' });
                }
                if (eleT == 'ta' & eleD != 'da' & eleL != 'la') {
                    $(this).children('div').css({ 'display': 'inline' });
                }
                if (eleM == 'ma' & eleD != 'da' & eleL != 'la' & eleT != 'ta') {
                    $(this).children('div').css({ 'display': 'inline' });
                }
                if (eleS == 'sa' & eleD != 'da' & eleL != 'la' & eleT != 'ta' & eleM != 'ma') {
                    $(this).children('div').css({ 'display': 'inline' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'da') {
                    $(this).children('div').css({ 'display': 'inline' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'da') {
                    $(this).children('div').css({ 'display': 'inline' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'la') {
                    $(this).children('div').css({ 'display': 'inline' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'ta') {
                    $(this).children('div').css({ 'display': 'inline' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ma') {
                    $(this).children('div').css({ 'display': 'inline' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sa') {
                    $(this).children('div').css({ 'display': 'inline' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sa') {
                    $(this).children('div').css({ 'display': 'inline' });
                }
            }
        })
        $("[cell-d]").each(function () {
            var ele = $(this).attr('cell-d').match(/[q]/i);
            var eleD = $(this).attr('cell-d').match(/[d][q]/i);
            var eleL = $(this).attr('cell-d').match(/[l][q]/i);
            var eleT = $(this).attr('cell-d').match(/[t][q]/i);
            var eleM = $(this).attr('cell-d').match(/[m][q]/i);
            var eleS = $(this).attr('cell-d').match(/[s][q]/i);
            if (ele == 'q') {
                $(this).children('div').css({ 'display': 'inline-block' });
            }
            if (ele != 'q') {
                if (eleD == 'dq') {
                    $(this).children('div').css({ 'display': 'inline-block' });
                }
                if (eleL == 'lq' & eleD != 'dq') {
                    $(this).children('div').css({ 'display': 'inline-block' });
                }
                if (eleT == 'tq' & eleD != 'dq' & eleL != 'lq') {
                    $(this).children('div').css({ 'display': 'inline-block' });
                }
                if (eleM == 'mq' & eleD != 'dq' & eleL != 'lq' & eleT != 'tq') {
                    $(this).children('div').css({ 'display': 'inline-block' });
                }
                if (eleS == 'sq' & eleD != 'dq' & eleL != 'lq' & eleT != 'tq' & eleM != 'mq') {
                    $(this).children('div').css({ 'display': 'inline-block' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dq') {
                    $(this).children('div').css({ 'display': 'inline-block' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dq') {
                    $(this).children('div').css({ 'display': 'inline-block' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lq') {
                    $(this).children('div').css({ 'display': 'inline-block' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tq') {
                    $(this).children('div').css({ 'display': 'inline-block' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mq') {
                    $(this).children('div').css({ 'display': 'inline-block' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sq') {
                    $(this).children('div').css({ 'display': 'inline-block' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sq') {
                    $(this).children('div').css({ 'display': 'inline-block' });
                }
            }
        })
    })

        .resize();

});
//For Box Shadow
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-bs]").each(function () {
            var shadowTopLeft = $(this).attr('cell-bs').match(/[w](\d{1,})[^\w\*](\d{1,})/i);
            var shadowTopRight = $(this).attr('cell-bs').match(/[x](\d{1,})[^\w\*](\d{1,})/i);
            var shadowBottomLeft = $(this).attr('cell-bs').match(/[y](\d{1,})[^\w\*](\d{1,})/i);
            var shadowBottomRight = $(this).attr('cell-bs').match(/[z](\d{1,})[^\w\*](\d{1,})/i);

            var eleTl = $(this).attr('cell-bs').match(/[w]/i);
            var eleTr = $(this).attr('cell-bs').match(/[x]/i);
            var eleBl = $(this).attr('cell-bs').match(/[y]/i);
            var eleBr = $(this).attr('cell-bs').match(/[z]/i);

            if (eleTl == 'w') {
                var shadowTopLeftNum = shadowTopLeft[2] - 1
                var neg = shadowTopLeft[1] * (-1)
                $(this).css({ 'box-shadow': '' + neg + 'px ' + neg + 'px 15px 0px ' + colors[shadowTopLeftNum] + '' });
            }
            if (eleTr == 'x') {
                var shadowTopRightNum = shadowTopRight[2] - 1
                var neg = shadowTopRight[1] * (-1)
                var pos = shadowTopRight[1] * (1)
                $(this).css({ 'box-shadow': '' + pos + 'px ' + neg + 'px 15px 0px ' + colors[shadowTopRightNum] + '' });
            }
            if (eleBl == 'y') {
                var shadowBottomLeftNum = shadowBottomLeft[2] - 1
                var neg = shadowBottomLeft[1] * (-1)
                var pos = shadowBottomLeft[1] * (1)
                $(this).css({ 'box-shadow': '' + neg + 'px ' + pos + 'px 15px 0px ' + colors[shadowBottomLeftNum] + '' });
            }
            if (eleBr == 'z') {
                var shadowBottomRightNum = shadowBottomRight[2] - 1
                var neg = shadowBottomRight[1] * (-1)
                var pos = shadowBottomRight[1] * (1)
                $(this).css({ 'box-shadow': '' + pos + 'px ' + pos + 'px 15px 0px ' + colors[shadowBottomRightNum] + '' });
            }
        })
        $("[cell-bs]").each(function () {
            var shadow = $(this).attr('cell-bs').match(/[l](\d{1,})[^\w\*](\d{1,})/i);
            var dum = shadow
            var shadowDesk = $(this).attr('cell-bs').match(/[d][l](\d{1,})[^\w\*](\d{1,})/i);
            var shadowLarge = $(this).attr('cell-bs').match(/[l][l](\d{1,})[^\w\*](\d{1,})/i);
            var shadowTab = $(this).attr('cell-bs').match(/[t][l](\d{1,})[^\w\*](\d{1,})/i);
            var shadowMobile = $(this).attr('cell-bs').match(/[m][l](\d{1,})[^\w\*](\d{1,})/i);
            var shadowSmall = $(this).attr('cell-bs').match(/[s][l](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-bs').match(/[l]/i);
            var eleD = $(this).attr('cell-bs').match(/[d][l]/i);
            var eleL = $(this).attr('cell-bs').match(/[l][l]/i);
            var eleT = $(this).attr('cell-bs').match(/[t][l]/i);
            var eleM = $(this).attr('cell-bs').match(/[m][l]/i);
            var eleS = $(this).attr('cell-bs').match(/[s][l]/i);
            if (dum = shadow) {
                var shadowNum = shadow[2] - 1
                $(this).css({ 'box-shadow': '-' + shadow[1] + 'px 0px 15px 0px ' + colors[shadowNum] + '' });
            }
            if (ele != 'l') {
                if (eleD == 'dl') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'box-shadow': '-' + shadowDesk[1] + 'px 0px 15px 0px ' + colors[shadowDeskNum] + '' });
                }
                if (eleL == 'll' & eleD != 'dl') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'box-shadow': '-' + shadowLarge[1] + 'px 0px 15px 0px ' + colors[shadowLargeNum] + '' });
                }
                if (eleT == 'tl' & eleD != 'dl' & eleL != 'll') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'box-shadow': '-' + shadowTab[1] + 'px 0px 15px 0px ' + colors[shadowTabNum] + '' });
                }
                if (eleM == 'ml' & eleD != 'dl' & eleL != 'll' & eleT != 'tl') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'box-shadow': '-' + shadowDesk[1] + 'px 0px 15px 0px ' + colors[shadowMobileNum] + '' });
                }
                if (eleS == 'sl' & eleD != 'dl' & eleL != 'll' & eleT != 'tl' & eleM != 'ml') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'box-shadow': '-' + shadowSmall[1] + 'px 0px 15px 0px ' + colors[shadowSmallNum] + '' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dl') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'box-shadow': '-' + shadowDesk[1] + 'px 0px 15px 0px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dl') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'box-shadow': '-' + shadowDesk[1] + 'px 0px 15px 0px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'll') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'box-shadow': '-' + shadowLarge[1] + 'px 0px 15px 0px ' + colors[shadowLargeNum] + '' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tl') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'box-shadow': '-' + shadowTab[1] + 'px 0px 15px 0px ' + colors[shadowTabNum] + '' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ml') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'box-shadow': '-' + shadowMobile[1] + 'px 0px 15px 0px ' + colors[shadowMobileNum] + '' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sl') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'box-shadow': '-' + shadowSmall[1] + 'px 0px 15px 0px ' + colors[shadowSmallNum] + '' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sl') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'box-shadow': '-' + shadowSmall[1] + 'px 0px 15px 0px ' + colors[shadowSmallNum] + '' });
                }
            }
        })
        $("[cell-bs]").each(function () {
            var shadow = $(this).attr('cell-bs').match(/[r](\d{1,})[^\w\*](\d{1,})/i);
            var dum = shadow
            var shadowDesk = $(this).attr('cell-bs').match(/[d][r](\d{1,})[^\w\*](\d{1,})/i);
            var shadowLarge = $(this).attr('cell-bs').match(/[l][r](\d{1,})[^\w\*](\d{1,})/i);
            var shadowTab = $(this).attr('cell-bs').match(/[t][r](\d{1,})[^\w\*](\d{1,})/i);
            var shadowMobile = $(this).attr('cell-bs').match(/[m][r](\d{1,})[^\w\*](\d{1,})/i);
            var shadowSmall = $(this).attr('cell-bs').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-bs').match(/[r]/i);
            var eleD = $(this).attr('cell-bs').match(/[d][r]/i);
            var eleL = $(this).attr('cell-bs').match(/[l][r]/i);
            var eleT = $(this).attr('cell-bs').match(/[t][r]/i);
            var eleM = $(this).attr('cell-bs').match(/[m][r]/i);
            var eleS = $(this).attr('cell-bs').match(/[s][r]/i);
            if (dum = shadow) {
                var shadowNum = shadow[2] - 1
                $(this).css({ 'box-shadow': '' + shadow[1] + 'px 0px 15px 0px ' + colors[shadowNum] + '' });
            }
            if (ele != 'r') {
                if (eleD == 'dr') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'box-shadow': '' + shadowDesk[1] + 'px 0px 15px 0px ' + colors[shadowDeskNum] + '' });
                }
                if (eleL == 'lr' & eleD != 'dr') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'box-shadow': '' + shadowLarge[1] + 'px 0px 15px 0px ' + colors[shadowLargeNum] + '' });
                }
                if (eleT == 'tr' & eleD != 'dr' & eleL != 'lr') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'box-shadow': '' + shadowTab[1] + 'px 0px 15px 0px ' + colors[shadowTabNum] + '' });
                }
                if (eleM == 'mr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'box-shadow': '' + shadowDesk[1] + 'px 0px 15px 0px ' + colors[shadowMobileNum] + '' });
                }
                if (eleS == 'sr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr' & eleM != 'mr') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'box-shadow': '' + shadowSmall[1] + 'px 0px 15px 0px ' + colors[shadowSmallNum] + '' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dr') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'box-shadow': '' + shadowDesk[1] + 'px 0px 15px 0px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dr') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'box-shadow': '' + shadowDesk[1] + 'px 0px 15px 0px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lr') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'box-shadow': '' + shadowLarge[1] + 'px 0px 15px 0px ' + colors[shadowLargeNum] + '' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tr') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'box-shadow': '' + shadowTab[1] + 'px 0px 15px 0px ' + colors[shadowTabNum] + '' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mr') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'box-shadow': '' + shadowMobile[1] + 'px 0px 15px 0px ' + colors[shadowMobileNum] + '' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sr') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'box-shadow': '' + shadowSmall[1] + 'px 0px 15px 0px ' + colors[shadowSmallNum] + '' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sr') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'box-shadow': '' + shadowSmall[1] + 'px 0px 15px 0px ' + colors[shadowSmallNum] + '' });
                }
            }
        })
        $("[cell-bs]").each(function () {
            var shadow = $(this).attr('cell-bs').match(/[t](\d{1,})[^\w\*](\d{1,})/i);
            var dum = shadow
            var shadowDesk = $(this).attr('cell-bs').match(/[d][t](\d{1,})[^\w\*](\d{1,})/i);
            var shadowLarge = $(this).attr('cell-bs').match(/[l][t](\d{1,})[^\w\*](\d{1,})/i);
            var shadowTab = $(this).attr('cell-bs').match(/[t][t](\d{1,})[^\w\*](\d{1,})/i);
            var shadowMobile = $(this).attr('cell-bs').match(/[m][t](\d{1,})[^\w\*](\d{1,})/i);
            var shadowSmall = $(this).attr('cell-bs').match(/[s][t](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-bs').match(/[t]/i);
            var eleD = $(this).attr('cell-bs').match(/[d][t]/i);
            var eleL = $(this).attr('cell-bs').match(/[l][t]/i);
            var eleT = $(this).attr('cell-bs').match(/[t][t]/i);
            var eleM = $(this).attr('cell-bs').match(/[m][t]/i);
            var eleS = $(this).attr('cell-bs').match(/[s][t]/i);
            if (dum = shadow) {
                var shadowNum = shadow[2] - 1
                $(this).css({ 'box-shadow': '0px -' + shadow[1] + 'px 15px 0px ' + colors[shadowNum] + '' });
            }
            if (ele != 't') {
                if (eleD == 'dt') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'box-shadow': '0px -' + shadowDesk[1] + 'px 15px 0px ' + colors[shadowDeskNum] + '' });
                }
                if (eleL == 'lt' & eleD != 'dt') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'box-shadow': '0px -' + shadowLarge[1] + 'px 15px 0px ' + colors[shadowLargeNum] + '' });
                }
                if (eleT == 'tt' & eleD != 'dt' & eleL != 'lt') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'box-shadow': '0px -' + shadowTab[1] + 'px 15px 0px ' + colors[shadowTabNum] + '' });
                }
                if (eleM == 'mt' & eleD != 'dt' & eleL != 'lt' & eleT != 'tt') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'box-shadow': '0px -' + shadowDesk[1] + 'px 15px 0px ' + colors[shadowMobileNum] + '' });
                }
                if (eleS == 'st' & eleD != 'dt' & eleL != 'lt' & eleT != 'tt' & eleM != 'mt') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'box-shadow': '0px -' + shadowSmall[1] + 'px 15px 0px ' + colors[shadowSmallNum] + '' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dt') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'box-shadow': '0px -' + shadowDesk[1] + 'px 15px 0px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dt') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'box-shadow': '0px -' + shadowDesk[1] + 'px 15px 0px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lt') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'box-shadow': '0px -' + shadowLarge[1] + 'px 15px 0px ' + colors[shadowLargeNum] + '' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tt') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'box-shadow': '0px -' + shadowTab[1] + 'px 15px 0px ' + colors[shadowTabNum] + '' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mt') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'box-shadow': '0px -' + shadowMobile[1] + 'px 15px 0px ' + colors[shadowMobileNum] + '' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'st') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'box-shadow': '0px -' + shadowSmall[1] + 'px 15px 0px ' + colors[shadowSmallNum] + '' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'st') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'box-shadow': '0px -' + shadowSmall[1] + 'px 15px 0px ' + colors[shadowSmallNum] + '' });
                }
            }
        })
        $("[cell-bs]").each(function () {
            var shadow = $(this).attr('cell-bs').match(/[b](\d{1,})[^\w\*](\d{1,})/i);
            var dum = shadow
            var shadowDesk = $(this).attr('cell-bs').match(/[d][b](\d{1,})[^\w\*](\d{1,})/i);
            var shadowLarge = $(this).attr('cell-bs').match(/[l][b](\d{1,})[^\w\*](\d{1,})/i);
            var shadowTab = $(this).attr('cell-bs').match(/[t][b](\d{1,})[^\w\*](\d{1,})/i);
            var shadowMobile = $(this).attr('cell-bs').match(/[m][b](\d{1,})[^\w\*](\d{1,})/i);
            var shadowSmall = $(this).attr('cell-bs').match(/[s][b](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-bs').match(/[b]/i);
            var eleD = $(this).attr('cell-bs').match(/[d][b]/i);
            var eleL = $(this).attr('cell-bs').match(/[l][b]/i);
            var eleT = $(this).attr('cell-bs').match(/[t][b]/i);
            var eleM = $(this).attr('cell-bs').match(/[m][b]/i);
            var eleS = $(this).attr('cell-bs').match(/[s][b]/i);
            if (dum = shadow) {
                var shadowNum = shadow[2] - 1
                $(this).css({ 'box-shadow': '0px ' + shadow[1] + 'px 15px 0px ' + colors[shadowNum] + '' });
            }
            if (ele != 'b') {
                if (eleD == 'db') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'box-shadow': '0px ' + shadowDesk[1] + 'px 15px 0px ' + colors[shadowDeskNum] + '' });
                }
                if (eleL == 'lb' & eleD != 'db') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'box-shadow': '0px ' + shadowLarge[1] + 'px 15px 0px ' + colors[shadowLargeNum] + '' });
                }
                if (eleT == 'tb' & eleD != 'db' & eleL != 'lb') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'box-shadow': '0px ' + shadowTab[1] + 'px 15px 0px ' + colors[shadowTabNum] + '' });
                }
                if (eleM == 'mb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'box-shadow': '0px ' + shadowDesk[1] + 'px 15px 0px ' + colors[shadowMobileNum] + '' });
                }
                if (eleS == 'sb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb' & eleM != 'mb') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'box-shadow': '0px ' + shadowSmall[1] + 'px 15px 0px ' + colors[shadowSmallNum] + '' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'db') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'box-shadow': '0px ' + shadowDesk[1] + 'px 15px 0px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'db') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'box-shadow': '0px ' + shadowDesk[1] + 'px 15px 0px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lb') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'box-shadow': '0px ' + shadowLarge[1] + 'px 15px 0px ' + colors[shadowLargeNum] + '' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tb') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'box-shadow': '0px ' + shadowTab[1] + 'px 15px 0px ' + colors[shadowTabNum] + '' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mb') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'box-shadow': '0px ' + shadowMobile[1] + 'px 15px 0px ' + colors[shadowMobileNum] + '' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sb') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'box-shadow': '0px ' + shadowSmall[1] + 'px 15px 0px ' + colors[shadowSmallNum] + '' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sb') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'box-shadow': '0px ' + shadowSmall[1] + 'px 15px 0px ' + colors[shadowSmallNum] + '' });
                }
            }
        })
    })

        .resize();

});
//For Text Shadow
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-ts]").each(function () {
            var shadowTopLeft = $(this).attr('cell-ts').match(/[w](\d{1,})[^\w\*](\d{1,})/i);
            var shadowTopRight = $(this).attr('cell-ts').match(/[x](\d{1,})[^\w\*](\d{1,})/i);
            var shadowBottomLeft = $(this).attr('cell-ts').match(/[y](\d{1,})[^\w\*](\d{1,})/i);
            var shadowBottomRight = $(this).attr('cell-ts').match(/[z](\d{1,})[^\w\*](\d{1,})/i);

            var eleTl = $(this).attr('cell-ts').match(/[w]/i);
            var eleTr = $(this).attr('cell-ts').match(/[x]/i);
            var eleBl = $(this).attr('cell-ts').match(/[y]/i);
            var eleBr = $(this).attr('cell-ts').match(/[z]/i);

            if (eleTl == 'w') {
                var shadowTopLeftNum = shadowTopLeft[2] - 1
                var neg = shadowTopLeft[1] * (-1)
                $(this).css({ 'text-shadow': '' + neg + 'px ' + neg + 'px 5px ' + colors[shadowTopLeftNum] + '' });
            }
            if (eleTr == 'x') {
                var shadowTopRightNum = shadowTopRight[2] - 1
                var neg = shadowTopRight[1] * (-1)
                var pos = shadowTopRight[1] * (1)
                $(this).css({ 'text-shadow': '' + pos + 'px ' + neg + 'px 5px ' + colors[shadowTopRightNum] + '' });
            }
            if (eleBl == 'y') {
                var shadowBottomLeftNum = shadowBottomLeft[2] - 1
                var neg = shadowBottomLeft[1] * (-1)
                var pos = shadowBottomLeft[1] * (1)
                $(this).css({ 'text-shadow': '' + neg + 'px ' + pos + 'px 5px ' + colors[shadowBottomLeftNum] + '' });
            }
            if (eleBr == 'z') {
                var shadowBottomRightNum = shadowBottomRight[2] - 1
                var neg = shadowBottomRight[1] * (-1)
                var pos = shadowBottomRight[1] * (1)
                $(this).css({ 'text-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[shadowBottomRightNum] + '' });
            }
        })
        $("[cell-ts]").each(function () {
            var shadow = $(this).attr('cell-ts').match(/[l](\d{1,})[^\w\*](\d{1,})/i);
            var dum = shadow;
            var shadowDesk = $(this).attr('cell-ts').match(/[d][l](\d{1,})[^\w\*](\d{1,})/i);
            var shadowLarge = $(this).attr('cell-ts').match(/[l][l](\d{1,})[^\w\*](\d{1,})/i);
            var shadowTab = $(this).attr('cell-ts').match(/[t][l](\d{1,})[^\w\*](\d{1,})/i);
            var shadowMobile = $(this).attr('cell-ts').match(/[m][l](\d{1,})[^\w\*](\d{1,})/i);
            var shadowSmall = $(this).attr('cell-ts').match(/[s][l](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-ts').match(/[l]/i);
            var eleD = $(this).attr('cell-ts').match(/[d][l]/i);
            var eleL = $(this).attr('cell-ts').match(/[l][l]/i);
            var eleT = $(this).attr('cell-ts').match(/[t][l]/i);
            var eleM = $(this).attr('cell-ts').match(/[m][l]/i);
            var eleS = $(this).attr('cell-ts').match(/[s][l]/i);
            if (dum = shadow) {
                var shadowNum = shadow[2] - 1
                $(this).css({ 'text-shadow': '-' + shadow[1] + 'px 0px 5px ' + colors[shadowNum] + '' });
            }
            if (ele != 'l') {
                if (eleD == 'dl') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'text-shadow': '-' + shadowDesk[1] + 'px 0px 5px ' + colors[shadowDeskNum] + '' });
                }
                if (eleL == 'll' & eleD != 'dl') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'text-shadow': '-' + shadowLarge[1] + 'px 0px 5px ' + colors[shadowLargeNum] + '' });
                }
                if (eleT == 'tl' & eleD != 'dl' & eleL != 'll') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'text-shadow': '-' + shadowTab[1] + 'px 0px 5px ' + colors[shadowTabNum] + '' });
                }
                if (eleM == 'ml' & eleD != 'dl' & eleL != 'll' & eleT != 'tl') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'text-shadow': '-' + shadowDesk[1] + 'px 0px 5px ' + colors[shadowMobileNum] + '' });
                }
                if (eleS == 'sl' & eleD != 'dl' & eleL != 'll' & eleT != 'tl' & eleM != 'ml') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'text-shadow': '-' + shadowSmall[1] + 'px 0px 5px ' + colors[shadowSmallNum] + '' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dl') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'text-shadow': '-' + shadowDesk[1] + 'px 0px 5px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dl') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'text-shadow': '-' + shadowDesk[1] + 'px 0px 5px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'll') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'text-shadow': '-' + shadowLarge[1] + 'px 0px 5px ' + colors[shadowLargeNum] + '' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tl') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'text-shadow': '-' + shadowTab[1] + 'px 0px 5px ' + colors[shadowTabNum] + '' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'ml') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'text-shadow': '-' + shadowMobile[1] + 'px 0px 5px ' + colors[shadowMobileNum] + '' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sl') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'text-shadow': '-' + shadowSmall[1] + 'px 0px 5px ' + colors[shadowSmallNum] + '' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sl') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'text-shadow': '-' + shadowSmall[1] + 'px 0px 5px ' + colors[shadowSmallNum] + '' });
                }
            }
        })
        $("[cell-ts]").each(function () {
            var shadow = $(this).attr('cell-ts').match(/[r](\d{1,})[^\w\*](\d{1,})/i);
            var dum = shadow;
            var shadowDesk = $(this).attr('cell-ts').match(/[d][r](\d{1,})[^\w\*](\d{1,})/i);
            var shadowLarge = $(this).attr('cell-ts').match(/[l][r](\d{1,})[^\w\*](\d{1,})/i);
            var shadowTab = $(this).attr('cell-ts').match(/[t][r](\d{1,})[^\w\*](\d{1,})/i);
            var shadowMobile = $(this).attr('cell-ts').match(/[m][r](\d{1,})[^\w\*](\d{1,})/i);
            var shadowSmall = $(this).attr('cell-ts').match(/[s][r](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-ts').match(/[r]/i);
            var eleD = $(this).attr('cell-ts').match(/[d][r]/i);
            var eleL = $(this).attr('cell-ts').match(/[l][r]/i);
            var eleT = $(this).attr('cell-ts').match(/[t][r]/i);
            var eleM = $(this).attr('cell-ts').match(/[m][r]/i);
            var eleS = $(this).attr('cell-ts').match(/[s][r]/i);
            if (dum = shadow) {
                var shadowNum = shadow[2] - 1
                $(this).css({ 'text-shadow': '' + shadow[1] + 'px 0px 5px ' + colors[shadowNum] + '' });
            }
            if (ele != 'r') {
                if (eleD == 'dr') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'text-shadow': '' + shadowDesk[1] + 'px 0px 5px ' + colors[shadowDeskNum] + '' });
                }
                if (eleL == 'lr' & eleD != 'dr') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'text-shadow': '' + shadowLarge[1] + 'px 0px 5px ' + colors[shadowLargeNum] + '' });
                }
                if (eleT == 'tr' & eleD != 'dr' & eleL != 'lr') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'text-shadow': '' + shadowTab[1] + 'px 0px 5px ' + colors[shadowTabNum] + '' });
                }
                if (eleM == 'mr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'text-shadow': '' + shadowDesk[1] + 'px 0px 5px ' + colors[shadowMobileNum] + '' });
                }
                if (eleS == 'sr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr' & eleM != 'mr') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'text-shadow': '' + shadowSmall[1] + 'px 0px 5px ' + colors[shadowSmallNum] + '' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dr') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'text-shadow': '' + shadowDesk[1] + 'px 0px 5px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dr') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'text-shadow': '' + shadowDesk[1] + 'px 0px 5px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lr') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'text-shadow': '' + shadowLarge[1] + 'px 0px 5px ' + colors[shadowLargeNum] + '' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tr') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'text-shadow': '' + shadowTab[1] + 'px 0px 5px ' + colors[shadowTabNum] + '' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mr') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'text-shadow': '' + shadowMobile[1] + 'px 0px 5px ' + colors[shadowMobileNum] + '' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sr') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'text-shadow': '' + shadowSmall[1] + 'px 0px 5px ' + colors[shadowSmallNum] + '' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sr') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'text-shadow': '' + shadowSmall[1] + 'px 0px 5px ' + colors[shadowSmallNum] + '' });
                }
            }
        })
        $("[cell-ts]").each(function () {
            var shadow = $(this).attr('cell-ts').match(/[t](\d{1,})[^\w\*](\d{1,})/i);
            var dum = shadow;
            var shadowDesk = $(this).attr('cell-ts').match(/[d][t](\d{1,})[^\w\*](\d{1,})/i);
            var shadowLarge = $(this).attr('cell-ts').match(/[l][t](\d{1,})[^\w\*](\d{1,})/i);
            var shadowTab = $(this).attr('cell-ts').match(/[t][t](\d{1,})[^\w\*](\d{1,})/i);
            var shadowMobile = $(this).attr('cell-ts').match(/[m][t](\d{1,})[^\w\*](\d{1,})/i);
            var shadowSmall = $(this).attr('cell-ts').match(/[s][t](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-ts').match(/[t]/i);
            var eleD = $(this).attr('cell-ts').match(/[d][t]/i);
            var eleL = $(this).attr('cell-ts').match(/[l][t]/i);
            var eleT = $(this).attr('cell-ts').match(/[t][t]/i);
            var eleM = $(this).attr('cell-ts').match(/[m][t]/i);
            var eleS = $(this).attr('cell-ts').match(/[s][t]/i);
            if (dum = shadow) {
                var shadowNum = shadow[2] - 1
                $(this).css({ 'text-shadow': '0px -' + shadow[1] + 'px 5px ' + colors[shadowNum] + '' });
            }
            if (ele != 't') {
                if (eleD == 'dt') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'text-shadow': '0px -' + shadowDesk[1] + 'px 5px ' + colors[shadowDeskNum] + '' });
                }
                if (eleL == 'lt' & eleD != 'dt') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'text-shadow': '0px -' + shadowLarge[1] + 'px 5px ' + colors[shadowLargeNum] + '' });
                }
                if (eleT == 'tt' & eleD != 'dt' & eleL != 'lt') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'text-shadow': '0px -' + shadowTab[1] + 'px 5px ' + colors[shadowTabNum] + '' });
                }
                if (eleM == 'mt' & eleD != 'dt' & eleL != 'lt' & eleT != 'tt') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'text-shadow': '0px -' + shadowDesk[1] + 'px 5px ' + colors[shadowMobileNum] + '' });
                }
                if (eleS == 'st' & eleD != 'dt' & eleL != 'lt' & eleT != 'tt' & eleM != 'mt') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'text-shadow': '0px -' + shadowSmall[1] + 'px 5px ' + colors[shadowSmallNum] + '' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'dt') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'text-shadow': '0px -' + shadowDesk[1] + 'px 5px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'dt') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'text-shadow': '0px -' + shadowDesk[1] + 'px 5px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lt') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'text-shadow': '0px -' + shadowLarge[1] + 'px 5px ' + colors[shadowLargeNum] + '' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tt') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'text-shadow': '0px -' + shadowTab[1] + 'px 5px ' + colors[shadowTabNum] + '' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mt') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'text-shadow': '0px -' + shadowMobile[1] + 'px 5px ' + colors[shadowMobileNum] + '' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'st') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'text-shadow': '0px -' + shadowSmall[1] + 'px 5px ' + colors[shadowSmallNum] + '' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'st') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'text-shadow': '0px -' + shadowSmall[1] + 'px 5px ' + colors[shadowSmallNum] + '' });
                }
            }
        })
        $("[cell-ts]").each(function () {
            var shadow = $(this).attr('cell-ts').match(/[b](\d{1,})[^\w\*](\d{1,})/i);
            var dum = shadow;
            var shadowDesk = $(this).attr('cell-ts').match(/[d][b](\d{1,})[^\w\*](\d{1,})/i);
            var shadowLarge = $(this).attr('cell-ts').match(/[l][b](\d{1,})[^\w\*](\d{1,})/i);
            var shadowTab = $(this).attr('cell-ts').match(/[t][b](\d{1,})[^\w\*](\d{1,})/i);
            var shadowMobile = $(this).attr('cell-ts').match(/[m][b](\d{1,})[^\w\*](\d{1,})/i);
            var shadowSmall = $(this).attr('cell-ts').match(/[s][b](\d{1,})[^\w\*](\d{1,})/i);

            var ele = $(this).attr('cell-ts').match(/[b]/i);
            var eleD = $(this).attr('cell-ts').match(/[d][b]/i);
            var eleL = $(this).attr('cell-ts').match(/[l][b]/i);
            var eleT = $(this).attr('cell-ts').match(/[t][b]/i);
            var eleM = $(this).attr('cell-ts').match(/[m][b]/i);
            var eleS = $(this).attr('cell-ts').match(/[s][b]/i);
            if (dum = shadow) {
                var shadowNum = shadow[2] - 1
                $(this).css({ 'text-shadow': '0px ' + shadow[1] + 'px 5px ' + colors[shadowNum] + '' });
            }
            if (ele != 'b') {
                if (eleD == 'db') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'text-shadow': '0px ' + shadowDesk[1] + 'px 5px ' + colors[shadowDeskNum] + '' });
                }
                if (eleL == 'lb' & eleD != 'db') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'text-shadow': '0px ' + shadowLarge[1] + 'px 5px ' + colors[shadowLargeNum] + '' });
                }
                if (eleT == 'tb' & eleD != 'db' & eleL != 'lb') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'text-shadow': '0px ' + shadowTab[1] + 'px 5px ' + colors[shadowTabNum] + '' });
                }
                if (eleM == 'mb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'text-shadow': '0px ' + shadowDesk[1] + 'px 5px ' + colors[shadowMobileNum] + '' });
                }
                if (eleS == 'sb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb' & eleM != 'mb') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'text-shadow': '0px ' + shadowSmall[1] + 'px 5px ' + colors[shadowSmallNum] + '' });
                }
            }

            var width = $(window).width();
            if (width >= 1484.99 && width <= 2500) {
                if (eleD == 'db') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'text-shadow': '0px ' + shadowDesk[1] + 'px 5px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 1199.99 && width <= 1484.98) {
                if (eleD == 'db') {
                    var shadowDeskNum = shadowDesk[2] - 1
                    $(this).css({ 'text-shadow': '0px ' + shadowDesk[1] + 'px 5px ' + colors[shadowDeskNum] + '' });
                }
            }
            if (width >= 991.99 && width <= 1199.98) {
                if (eleL == 'lb') {
                    var shadowLargeNum = shadowLarge[2] - 1
                    $(this).css({ 'text-shadow': '0px ' + shadowLarge[1] + 'px 5px ' + colors[shadowLargeNum] + '' });
                }
            }
            if (width >= 767.99 && width <= 991.98) {
                if (eleT == 'tb') {
                    var shadowTabNum = shadowTab[2] - 1
                    $(this).css({ 'text-shadow': '0px ' + shadowTab[1] + 'px 5px ' + colors[shadowTabNum] + '' });
                }
            }
            if (width >= 575.99 && width <= 767.98) {
                if (eleM == 'mb') {
                    var shadowMobileNum = shadowMobile[2] - 1
                    $(this).css({ 'text-shadow': '0px ' + shadowMobile[1] + 'px 5px ' + colors[shadowMobileNum] + '' });
                }
            }
            if (width >= 319.98 && width <= 575.98) {
                if (eleS == 'sb') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'text-shadow': '0px ' + shadowSmall[1] + 'px 5px ' + colors[shadowSmallNum] + '' });
                }
            }
            else if (width < 319.98) {
                if (eleS == 'sb') {
                    var shadowSmallNum = shadowSmall[2] - 1
                    $(this).css({ 'text-shadow': '0px ' + shadowSmall[1] + 'px 5px ' + colors[shadowSmallNum] + '' });
                }
            }
        })
    })

        .resize();

});
//For combo
$(document).ready(function () {
    $(window).resize(function () {
        $("[cell-cm]").each(function () {
            var col = $(this).attr('cell-cm').match(/[c][^,]*?(\d{1,})*/i);
            var colDesk = $(this).attr('cell-cm').match(/[d][^,]*?(\d{1,})*/i);
            var colLarge = $(this).attr('cell-cm').match(/[l][^,]*?(\d{1,})*/i);
            var colTab = $(this).attr('cell-cm').match(/[t][^,]*?(\d{1,})*/i);
            var colMobile = $(this).attr('cell-cm').match(/[m][^,]*?(\d{1,})*/i);
            var colSmall = $(this).attr('cell-cm').match(/[s][^,]*?(\d{1,})*/i);
            var width = $(this).attr('cell-cm').match(/[w][i](\d{1,})*/i);
            var widthPer = $(this).attr('cell-cm').match(/[w][i][.](\d{1,})*/i);
            var height = $(this).attr('cell-cm').match(/[h][t](\d{1,})*/i);
            var border = $(this).attr('cell-cm').match(/[b][o](\d{1,})[^\w\*](\d{1,})/i);
            var radius = $(this).attr('cell-cm').match(/[r][a](\d{1,})*/i);
            var radiusPer = $(this).attr('cell-cm').match(/[r][a][.](\d{1,})*/i);
            var padding = $(this).attr('cell-cm').match(/[p][a](\d{1,})*/i);
            var margin = $(this).attr('cell-cm').match(/[m][a](\d{1,})*/i);
            var backGround = $(this).attr('cell-cm').match(/[b][g](\d{1,})*/i);

            var ele = $(this).attr('cell-cm').match(/[c]/i);
            var eleD = $(this).attr('cell-cm').match(/[d]/i);
            var eleL = $(this).attr('cell-cm').match(/[l]/i);
            var eleT = $(this).attr('cell-cm').match(/[t]/i);
            var eleM = $(this).attr('cell-cm').match(/[m]/i);
            var eleS = $(this).attr('cell-cm').match(/[s]/i);
            var eleW = $(this).attr('cell-cm').match(/[w][i]/i);
            var eleWp = $(this).attr('cell-cm').match(/[w][i][.]/i);
            var eleH = $(this).attr('cell-cm').match(/[h][t]/i);
            var eleB = $(this).attr('cell-cm').match(/[b][o]/i);
            var eleBg = $(this).attr('cell-cm').match(/[b][g]/i);
            var eleR = $(this).attr('cell-cm').match(/[r][a]/i);
            var eleRp = $(this).attr('cell-cm').match(/[r][a][.]/i);
            var eleP = $(this).attr('cell-cm').match(/[p][a]/i);
            var eleM = $(this).attr('cell-cm').match(/[m][a]/i);

            var eleCo = $(this).attr('cell-cm').match(/[c][o]*/i);
            var eleCoD = $(this).attr('cell-cm').match(/[d][o]*/i);
            var eleCoL = $(this).attr('cell-cm').match(/[l][o]*/i);
            var eleCoT = $(this).attr('cell-cm').match(/[t][o]*/i);
            var eleCoM = $(this).attr('cell-cm').match(/[m][o]*/i);
            var eleCoS = $(this).attr('cell-cm').match(/[s][o]*/i);

            var eleCa = $(this).attr('cell-cm').match(/[c][a]*/i);
            var eleCaD = $(this).attr('cell-cm').match(/[d][a]*/i);
            var eleCaL = $(this).attr('cell-cm').match(/[l][a]*/i);
            var eleCaT = $(this).attr('cell-cm').match(/[t][a]*/i);
            var eleCaM = $(this).attr('cell-cm').match(/[m][a]*/i);
            var eleCaS = $(this).attr('cell-cm').match(/[s][a]*/i);

            if (eleW == 'wi') {
                $(this).css({ 'width': '' + width[1] + 'px'});
            }
            if (eleWp == 'wi.') {
                $(this).css({ 'width': '' + widthPer[1] + '%'});
            }
            if (eleH == 'ht') {
                $(this).css({ 'height': '' + height[1] + 'px'});
            }
            if (eleB == 'bo') {
                borderNum=border[2]-1
                $(this).css({ 'border': '' + border[1] + 'px solid ' + colors[borderNum] + ''});
            }
            if (eleBg == 'bg') {
                backGroundNum=backGround[1]-1
                $(this).css({ 'background-color': '' + colors[backGroundNum] + ''});
            }
            if (eleR == 'ra') {
                $(this).css({ 'border-radius': '' + radius[1] + 'px'});
            }
            if (eleRp == 'ra.') {
                $(this).css({ 'border-radius': '' + radiusPer[1] + '%'});
            }
            if (eleP == 'pa') {
                $(this).css({ 'padding': '' + padding[1] + 'px'});
            }
            if (eleM == 'ma') {
                $(this).css({ 'margin': '' + margin[1] + 'px'});
            }

            if (eleCo == 'co') {
                $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
            }
            if (eleCa == 'ca') {
                $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
            }
            if (ele != 'c') {
                if (eleD == 'd') {
                    var colSizeDesk = colDesk[1] * 5
                    $(this).css({ 'width': '' + colSizeDesk + '%', 'flex-grow': '0' });
                }
                if (eleCoD == 'do') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaD == 'da') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
                if (eleL == 'l' & eleD != 'd') {
                    var colSizeLarge = colLarge[1] * 5
                    $(this).css({ 'width': '' + colSizeLarge + '%', 'flex-grow': '0' });
                }
                if (eleCoL == 'lo') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaL == 'la') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
                if (eleT == 't' & eleD != 'd' & eleL != 'l') {
                    var colSizeTab = colTab[1] * 5
                    $(this).css({ 'width': '' + colSizeTab + '%', 'flex-grow': '0' });
                }
                if (eleCoT == 'to') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaT == 'ta') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
                if (eleM == 'm' & eleD != 'd' & eleL != 'l' & eleT != 't') {
                    var colSizeMobile = colMobile[1] * 5
                    $(this).css({ 'width': '' + colSizeMobile + '%', 'flex-grow': '0' });
                }
                if (eleCoM == 'mo') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaM == 'ma') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
                if (eleS == 's' & eleD != 'd' & eleL != 'l' & eleT != 't' & eleM != 'm') {
                    var colSizeSmall = colSmall[1] * 5
                    $(this).css({ 'width': '' + colSizeSmall + '%', 'flex-grow': '0' });
                }
                if (eleCoS == 'so') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaS == 'sa') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }

            var winWidth = $(window).width();
            if (winWidth >= 1484.99 && winWidth <= 2500) {
                if (eleD == 'd') {
                    var colSizeDesk = colDesk[1] * 5
                    $(this).css({ 'width': '' + colSizeDesk + '%', 'flex-grow': '0' });
                }
                if (eleCoD == 'do') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaD == 'da') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }
            if (winWidth >= 1199.99 && winWidth <= 1484.98) {
                if (eleD == 'd') {
                    var colSizeDesk = colDesk[1] * 5
                    $(this).css({ 'width': '' + colSizeDesk + '%', 'flex-grow': '0' });
                }
                if (eleCoD == 'do') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaD == 'da') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }
            if (winWidth >= 991.99 && winWidth <= 1199.98) {
                if (eleL == 'l') {
                    var colSizeLarge = colLarge[1] * 5
                    $(this).css({ 'width': '' + colSizeLarge + '%', 'flex-grow': '0' });
                }
                if (eleCoL == 'lo') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaL == 'la') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }
            if (winWidth >= 767.99 && winWidth <= 991.98) {
                if (eleT == 't') {
                    var colSizeTab = colTab[1] * 5
                    $(this).css({ 'width': '' + colSizeTab + '%', 'flex-grow': '0' });
                }
                if (eleCoT == 'to') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaL == 'ta') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }
            if (winWidth >= 575.99 && winWidth <= 767.98) {
                if (eleM == 'm') {
                    var colSizeMobile = colMobile[1] * 5
                    $(this).css({ 'width': '' + colSizeMobile + '%', 'flex-grow': '0' });
                }
                if (eleCoM == 'mo') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaM == 'ma') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }
            if (winWidth >= 319.98 && winWidth <= 575.98) {
                if (eleS == 's') {
                    var colSizeSmall = colSmall[1] * 5
                    $(this).css({ 'width': '' + colSizeSmall + '%', 'flex-grow': '0' });
                }
                if (eleCoS == 'so') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaS == 'sa') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }
            else if (winWidth < 319.98) {
                if (eleS == 's') {
                    var colSizeSmall = colSmall[1] * 5
                    $(this).css({ 'width': '' + colSizeSmall + '%', 'flex-grow': '0' });
                }
                if (eleCoS == 'so') {
                    $(this).css({ 'width': 'min-content', 'flex-grow': '1' });
                }
                if (eleCaS == 'sa') {
                    $(this).css({ 'width': 'max-content', 'flex-grow': '0' });
                }
            }

            if (ele == 'c') {
                var colSize = col[1] * 5
                $(this).css({ 'width': '' + colSize + '%', 'flex-grow': '0' });
            }
        })
        $("[cell-cm]").each(function () {
            var shadowTopLeft = $(this).attr('cell-cm').match(/[w](\d{1,})[^\w\*](\d{1,})/i);
            var shadowTopRight = $(this).attr('cell-cm').match(/[x](\d{1,})[^\w\*](\d{1,})/i);
            var shadowBottomLeft = $(this).attr('cell-cm').match(/[y](\d{1,})[^\w\*](\d{1,})/i);
            var shadowBottomRight = $(this).attr('cell-cm').match(/[z](\d{1,})[^\w\*](\d{1,})/i);

            var eleTl = $(this).attr('cell-cm').match(/[w]/i);
            var eleTr = $(this).attr('cell-cm').match(/[x]/i);
            var eleBl = $(this).attr('cell-cm').match(/[y]/i);
            var eleBr = $(this).attr('cell-cm').match(/[z]/i);

            if (eleTl == 'w') {
                var shadowTopLeftNum = shadowTopLeft[2] - 1
                var neg = shadowTopLeft[1] * (-1)
                $(this).css({ 'box-shadow': '' + neg + 'px ' + neg + 'px 15px 0px ' + colors[shadowTopLeftNum] + '' });
            }
            if (eleTr == 'x') {
                var shadowTopRightNum = shadowTopRight[2] - 1
                var neg = shadowTopRight[1] * (-1)
                var pos = shadowTopRight[1] * (1)
                $(this).css({ 'box-shadow': '' + pos + 'px ' + neg + 'px 15px 0px ' + colors[shadowTopRightNum] + '' });
            }
            if (eleBl == 'y') {
                var shadowBottomLeftNum = shadowBottomLeft[2] - 1
                var neg = shadowBottomLeft[1] * (-1)
                var pos = shadowBottomLeft[1] * (1)
                $(this).css({ 'box-shadow': '' + neg + 'px ' + pos + 'px 15px 0px ' + colors[shadowBottomLeftNum] + '' });
            }
            if (eleBr == 'z') {
                var shadowBottomRightNum = shadowBottomRight[2] - 1
                var neg = shadowBottomRight[1] * (-1)
                var pos = shadowBottomRight[1] * (1)
                $(this).css({ 'box-shadow': '' + pos + 'px ' + pos + 'px 15px 0px ' + colors[shadowBottomRightNum] + '' });
            }
        })
    })
        .resize();
});

