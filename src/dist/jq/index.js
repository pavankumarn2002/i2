var ptPage;
var pcPage;
var colors;
//For Animations

  $("[cell-an]").each(function (i) {
    var an = $(this).attr('cell-an').match(/[-][a][n](\d{1,})/i);
    var anValue = '[-an' + an[1] + ':';

    var cl = $(this).attr('cell-an').match(/[-][c][l](\d{1,})/i);

    var rotateX = $(this).attr('cell-an').match(/[r][x](\d{1,})[^\w\*](\d{1,})/i);
    var rotateY = $(this).attr('cell-an').match(/[r][y](\d{1,})[^\w\*](\d{1,})/i);
    var rotateZ = $(this).attr('cell-an').match(/[r][z](\d{1,})[^\w\*](\d{1,})/i);
    var scaleX = $(this).attr('cell-an').match(/[s][x](\d{1,})[^\w\*](\d{1,})/i);
    var scaleY = $(this).attr('cell-an').match(/[s][y](\d{1,})[^\w\*](\d{1,})/i);
    var scaleZ = $(this).attr('cell-an').match(/[s][z](\d{1,})[^\w\*](\d{1,})/i);
    var skewX = $(this).attr('cell-an').match(/[K][x](\d{1,})[^\w\*](\d{1,})/i);
    var skewY = $(this).attr('cell-an').match(/[K][y](\d{1,})[^\w\*](\d{1,})/i);
    var translateX = $(this).attr('cell-an').match(/[t][x](\d{1,})[^\w\*](\d{1,})/i);
    var translateY = $(this).attr('cell-an').match(/[t][y](\d{1,})[^\w\*](\d{1,})/i);
    var speed = $(this).attr('cell-an').match(/[s][p](\d{1,})[^\w\*](\d{1,})/i);
    var delay = $(this).attr('cell-an').match(/[d](\d{1,})[^\w\*](\d{1,})/i);
    var fixedCorner = $(this).attr('cell-an').match(/[f][c](\d{1,})[^\w\*](\d{1,})/i);
    var margin = $(this).attr('cell-an').match(/[m][a](\d{1,})[^\w\*](\d{1,})/i);
    var marginLeft = $(this).attr('cell-an').match(/[m][l](\d{1,})[^\w\*](\d{1,})/i);
    var marginRight = $(this).attr('cell-an').match(/[m][r](\d{1,})[^\w\*](\d{1,})/i);
    var marginTop = $(this).attr('cell-an').match(/[m][t](\d{1,})[^\w\*](\d{1,})/i);
    var marginBottom = $(this).attr('cell-an').match(/[m][b](\d{1,})[^\w\*](\d{1,})/i);
    var padding = $(this).attr('cell-an').match(/[p][a](\d{1,})[^\w\*](\d{1,})/i);
    var paddingLeft = $(this).attr('cell-an').match(/[p][l](\d{1,})[^\w\*](\d{1,})/i);
    var paddingRight = $(this).attr('cell-an').match(/[p][r](\d{1,})[^\w\*](\d{1,})/i);
    var paddingTop = $(this).attr('cell-an').match(/[p][t](\d{1,})[^\w\*](\d{1,})/i);
    var paddingBottom = $(this).attr('cell-an').match(/[p][b](\d{1,})[^\w\*](\d{1,})/i);
    var border = $(this).attr('cell-an').match(/[b][o](\d{1,})[^\w\*](\d{1,})/i);
    var borderLeft = $(this).attr('cell-an').match(/[b][l](\d{1,})[^\w\*](\d{1,})/i);
    var borderRight = $(this).attr('cell-an').match(/[b][r](\d{1,})[^\w\*](\d{1,})/i);
    var borderTop = $(this).attr('cell-an').match(/[b][t](\d{1,})[^\w\*](\d{1,})/i);
    var borderBottom = $(this).attr('cell-an').match(/[b][b](\d{1,})[^\w\*](\d{1,})/i);
    var borderColor = $(this).attr('cell-an').match(/[b][c](\d{1,})[^\w\*](\d{1,})/i);
    var borderRadius = $(this).attr('cell-an').match(/[r][a](\d{1,})[^\w\*](\d{1,})/i);
    var borderRadiusPer = $(this).attr('cell-an').match(/[r][p](\d{1,})[^\w\*](\d{1,})/i);
    var width = $(this).attr('cell-an').match(/[w][i](\d{1,})[^\w\*](\d{1,})/i);
    var height = $(this).attr('cell-an').match(/[h][i](\d{1,})[^\w\*](\d{1,})/i);
    var outLine = $(this).attr('cell-an').match(/[o][l](\d{1,})[^\w\*](\d{1,})/i);
    var outColor = $(this).attr('cell-an').match(/[o][c](\d{1,})[^\w\*](\d{1,})/i);
    var textColor = $(this).attr('cell-an').match(/[t][c](\d{1,})[^\w\*](\d{1,})/i);
    var fontSize = $(this).attr('cell-an').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);
    var fontWeight = $(this).attr('cell-an').match(/[f][w](\d{1,})[^\w\*](\d{1,})/i);
    var letterSpacing = $(this).attr('cell-an').match(/[l][s](\d{1,})[^\w\*](\d{1,})/i);
    var wordSpacing = $(this).attr('cell-an').match(/[w][s](\d{1,})[^\w\*](\d{1,})/i);
    var lineHeight = $(this).attr('cell-an').match(/[l][h](\d{1,})[^\w\*](\d{1,})/i);
    var textShadow = $(this).attr('cell-an').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
    var boxShadow = $(this).attr('cell-an').match(/[b][s](\d{1,})[^\w\*](\d{1,})/i);
    var backGround = $(this).attr('cell-an').match(/[b][g](\d{1,})[^\w\*](\d{1,})/i);
    var opacity = $(this).attr('cell-an').match(/[o][p](\d{1,})[^\w\*](\d{1,})/i);


    var ele = $(this).attr('cell-an').match(/[a][n]/i);
    var eleWo = $(this).attr('cell-an').match(/[w][o]/i);
    var eleHo = $(this).attr('cell-an').match(/[h][o]/i);
    var eleMe = $(this).attr('cell-an').match(/[m][e]/i);
    var eleMo = $(this).attr('cell-an').match(/[m][o]/i);
    var eleCl = $(this).attr('cell-an').match(/[c][l]/i);
    var eleIc = $(this).attr('cell-an').match(/[i][c]/i);
    var eleIt = $(this).attr('cell-an').match(/[i][t]/i);
    var eleTx = $(this).attr('cell-an').match(/[t][x]/i);
    var eleTy = $(this).attr('cell-an').match(/[t][y]/i);
    var eleSx = $(this).attr('cell-an').match(/[s][x]/i);
    var eleSy = $(this).attr('cell-an').match(/[s][y]/i);
    var eleSz = $(this).attr('cell-an').match(/[s][z]/i);
    var eleKx = $(this).attr('cell-an').match(/[k][x]/i);
    var eleKy = $(this).attr('cell-an').match(/[k][y]/i);
    var eleRx = $(this).attr('cell-an').match(/[r][x]/i);
    var eleRy = $(this).attr('cell-an').match(/[r][y]/i);
    var eleRz = $(this).attr('cell-an').match(/[r][z]/i);
    var eleSp = $(this).attr('cell-an').match(/[s][p]/i);
    var eleD = $(this).attr('cell-an').match(/[d]/i);
    var eleFc = $(this).attr('cell-an').match(/[f][c]/i);
    var eleMa = $(this).attr('cell-an').match(/[m][a]/i);
    var eleMl = $(this).attr('cell-an').match(/[m][l]/i);
    var eleMr = $(this).attr('cell-an').match(/[m][r]/i);
    var eleMt = $(this).attr('cell-an').match(/[m][t]/i);
    var eleMb = $(this).attr('cell-an').match(/[m][b]/i);
    var elePa = $(this).attr('cell-an').match(/[p][a]/i);
    var elePl = $(this).attr('cell-an').match(/[p][l]/i);
    var elePr = $(this).attr('cell-an').match(/[p][r]/i);
    var elePt = $(this).attr('cell-an').match(/[p][t]/i);
    var elePb = $(this).attr('cell-an').match(/[p][b]/i);
    var eleBo = $(this).attr('cell-an').match(/[b][o]/i);
    var eleBl = $(this).attr('cell-an').match(/[b][l]/i);
    var eleBr = $(this).attr('cell-an').match(/[b][r]/i);
    var eleBt = $(this).attr('cell-an').match(/[b][t]/i);
    var eleBb = $(this).attr('cell-an').match(/[b][b]/i);
    var eleBc = $(this).attr('cell-an').match(/[b][c]/i);
    var eleRa = $(this).attr('cell-an').match(/[r][a]/i);
    var eleRp = $(this).attr('cell-an').match(/[r][p]/i);
    var eleWi = $(this).attr('cell-an').match(/[w][i]/i);
    var eleHi = $(this).attr('cell-an').match(/[h][i]/i);
    var eleOl = $(this).attr('cell-an').match(/[o][l]/i);
    var eleOc = $(this).attr('cell-an').match(/[o][c]/i);
    var eleTc = $(this).attr('cell-an').match(/[t][c]/i);
    var eleFs = $(this).attr('cell-an').match(/[f][s]/i);
    var eleFw = $(this).attr('cell-an').match(/[f][w]/i);
    var eleUc = $(this).attr('cell-an').match(/[u][c]/i);
    var eleLc = $(this).attr('cell-an').match(/[l][c]/i);
    var eleCf = $(this).attr('cell-an').match(/[c][f]/i);
    var eleLs = $(this).attr('cell-an').match(/[l][s]/i);
    var eleWs = $(this).attr('cell-an').match(/[w][s]/i);
    var eleLh = $(this).attr('cell-an').match(/[l][h]/i);
    var eleTs = $(this).attr('cell-an').match(/[t][s]/i);
    var eleBs = $(this).attr('cell-an').match(/[b][s]/i);
    var eleBg = $(this).attr('cell-an').match(/[B][g]/i);
    var eleOp = $(this).attr('cell-an').match(/[o][p]/i);
    var eleNr = $(this).attr('cell-an').match(/[n][r]/i);
    var eleNm = $(this).attr('cell-an').match(/[n][m]/i);

    var values = [];
    var fValues = [];
    if (eleTy == 'ty') {
      var translateYNum = translateY[1] * 10;
      var translateYNumF = translateY[2] * 10;
      var val0 = translateYNum;
      values.splice(0, 0, val0);
      var valF0 = translateYNumF;
      fValues.splice(0, 0, valF0);
    }
    if (eleTy != 'ty') {
      var val0 = 0;
      values.splice(0, 0, val0);
      var valF0 = 0;
      fValues.splice(0, 0, valF0);
    }
    if (eleTx == 'tx') {
      var translateXNum = translateX[1] * 10;
      var translateXNumF = translateX[2] * 10;
      var val1 = translateXNum;
      values.splice(1, 0, val1);
      var valF1 = translateXNumF;
      fValues.splice(1, 0, valF1);
    }
    if (eleTx != 'tx') {
      var val1 = 0;
      values.splice(1, 0, val1);
      var valF1 = 0;
      fValues.splice(1, 0, valF1);
    }
    if (eleSy == 'sy') {
      var scaleYNum = scaleY[1] * 0.1;
      var scaleYNumF = scaleY[2] * 0.1;
      var val2 = scaleYNum;
      values.splice(2, 0, val2);
      var valF2 = scaleYNumF;
      fValues.splice(2, 0, valF2);
    }
    if (eleSy != 'sy') {
      var val2 = 1;
      values.splice(2, 0, val2);
      var valF2 = 1;
      fValues.splice(2, 0, valF2);
    }
    if (eleSx == 'sx') {
      var scaleXNum = scaleX[1] * 0.1;
      var scaleXNumF = scaleX[2] * 0.1;
      var val3 = scaleXNum;
      values.splice(3, 0, val3);
      var valF3 = scaleXNumF;
      fValues.splice(3, 0, valF3);
    }
    if (eleSx != 'sx') {
      var val3 = 1;
      values.splice(3, 0, val3);
      var valF3 = 1;
      fValues.splice(3, 0, valF3);
    }
    if (eleSz == 'sz') {
      var scaleZNum = scaleZ[1] * 0.1;
      var scaleZNumF = scaleZ[2] * 0.1;
      var val4 = scaleZNum;
      values.splice(4, 0, val4);
      var valF4 = scaleZNumF;
      fValues.splice(4, 0, valF4);
    }
    if (eleSz != 'sz') {
      var val4 = 1;
      values.splice(4, 0, val4);
      var valF4 = 1;
      fValues.splice(4, 0, valF4);
    }
    if (eleKy == 'ky') {
      var skewYNum = skewY[1] * 10;
      var skewYNumF = skewY[2] * 10;
      var val5 = skewYNum;
      values.splice(5, 0, val5);
      var valF5 = skewYNumF;
      fValues.splice(5, 0, valF5);
    }
    if (eleKy != 'ky') {
      var val5 = 0;
      values.splice(5, 0, val5);
      var valF5 = 0;
      fValues.splice(5, 0, valF5);
    }
    if (eleKx == 'kx') {
      var skewXNum = skewX[1] * 10;
      var skewXNumF = skewX[2] * 10;
      var val6 = skewXNum;
      values.splice(6, 0, val6);
      var valF6 = skewXNumF;
      fValues.splice(6, 0, valF6);
    }
    if (eleKx != 'kx') {
      var val6 = 0;
      values.splice(6, 0, val6);
      var valF6 = 0;
      fValues.splice(6, 0, valF6);
    }
    if (eleRy == 'ry') {
      var rotateYNum = rotateY[1] * 10;
      var rotateYNumF = rotateY[2] * 10;
      var val7 = rotateYNum;
      values.splice(7, 0, val7);
      var valF7 = rotateYNumF;
      fValues.splice(7, 0, valF7);
    }
    if (eleRy != 'ry') {
      var val7 = 0;
      values.splice(7, 0, val7);
      var valF7 = 0;
      fValues.splice(7, 0, valF7);
    }
    if (eleRx == 'rx') {
      var rotateXNum = rotateX[1] * 10;
      var rotateXNumF = rotateX[2] * 10;
      var val8 = rotateXNum;
      values.splice(8, 0, val8);
      var valF8 = rotateXNumF;
      fValues.splice(8, 0, valF8);
    }
    if (eleRx != 'rx') {
      var val8 = 0;
      values.splice(8, 0, val8);
      var valF8 = 0;
      fValues.splice(8, 0, valF8);
    }
    if (eleRz == 'rz') {
      var rotateZNum = rotateZ[1] * 10;
      var rotateZNumF = rotateZ[2] * 10;
      var val9 = rotateZNum;
      values.splice(9, 0, val9);
      var valF9 = rotateZNumF;
      fValues.splice(9, 0, valF9);
    }
    if (eleRz != 'rz') {
      var val9 = 0;
      values.splice(9, 0, val9);
      var valF9 = 0;
      fValues.splice(9, 0, valF9);
    }
    if (eleSp == 'sp') {
      var speedNum = speed[1] * 0.1;
      var speedNumF = speed[2] * 0.1;
      var val10 = speedNum;
      values.splice(10, 0, val10);
      var valF10 = speedNumF;
      fValues.splice(10, 0, valF10);
    }
    if (eleSp != 'sp') {
      var val10 = 2;
      values.splice(10, 0, val10);
      var valF10 = 2;
      fValues.splice(10, 0, valF10);
    }
    if (eleD == 'd') {
      var delayNum = delay[1] * 0.1;
      var delayNumF = delay[2] * 0.1;
      var val11 = delayNum;
      values.splice(11, 0, val11);
      var valF11 = delayNumF;
      fValues.splice(11, 0, valF11);
    }
    if (eleD != 'd') {
      var val11 = 0;
      values.splice(11, 0, val11);
      var valF11 = 0;
      fValues.splice(11, 0, valF11);
    }
    if (eleFc == 'fc') {
      var val12 = '' + fixedCorner[1] + '% ' + fixedCorner[2] + '%';
      values.splice(12, 0, val12);
      var valF12 = '' + fixedCorner[1] + '% ' + fixedCorner[2] + '%';
      fValues.splice(12, 0, valF12);
    }
    if (eleFc != 'fc') {
      var val12 = 'center';
      values.splice(12, 0, val12);
      var valF12 = 'center';
      fValues.splice(12, 0, valF12);
    }
    if (eleMa == 'ma') {
      var val13 = margin[1];
      values.splice(13, 0, val13);
      var valF13 = margin[2];
      fValues.splice(13, 0, valF13);
    }
    if (eleMa != 'ma') {
      var val13 = 'ud';
      values.splice(13, 0, val13);
      var valF13 = 'ud';
      fValues.splice(13, 0, valF13);
    }
    if (eleMl == 'ml') {
      var val14 = marginLeft[1];
      values.splice(14, 0, val14);
      var valF14 = marginLeft[2];
      fValues.splice(14, 0, valF14);
    }
    if (eleMl != 'ml') {
      var val14 = 'ud';
      values.splice(14, 0, val14);
      var valF14 = 'ud';
      fValues.splice(14, 0, valF14);
    }
    if (eleMr == 'mr') {
      var val15 = marginRight[1];
      values.splice(15, 0, val15);
      var valF15 = marginRight[2];
      fValues.splice(15, 0, valF15);
    }
    if (eleMr != 'mr') {
      var val15 = 'ud';
      values.splice(15, 0, val15);
      var valF15 = 'ud';
      fValues.splice(15, 0, valF15);
    }
    if (eleMt == 'mt') {
      var val16 = marginTop[1];
      values.splice(16, 0, val16);
      var valF16 = marginTop[2];
      fValues.splice(16, 0, valF16);
    }
    if (eleMt != 'mt') {
      var val16 = 'ud';
      values.splice(16, 0, val16);
      var valF16 = 'ud';
      fValues.splice(16, 0, valF16);
    }
    if (eleMb == 'mb') {
      var val17 = marginBottom[1];
      values.splice(17, 0, val17);
      var valF17 = marginBottom[2];
      fValues.splice(17, 0, valF17);
    }
    if (eleMb != 'mb') {
      var val17 = 'ud';
      values.splice(17, 0, val17);
      var valF17 = 'ud';
      fValues.splice(17, 0, valF17);
    }
    if (elePa == 'pa') {
      var val18 = padding[1];
      values.splice(18, 0, val18);
      var valF18 = padding[2];
      fValues.splice(18, 0, valF18);
    }
    if (elePa != 'pa') {
      var val18 = 'ud';
      values.splice(18, 0, val18);
      var valF18 = 'ud';
      fValues.splice(18, 0, valF18);
    }
    if (elePl == 'pl') {
      var val19 = paddingLeft[1];
      values.splice(19, 0, val19);
      var valF19 = paddingLeft[2];
      fValues.splice(19, 0, valF19);
    }
    if (elePl != 'pl') {
      var val19 = 'ud';
      values.splice(19, 0, val19);
      var valF19 = 'ud';
      fValues.splice(19, 0, valF19);
    }
    if (elePr == 'pr') {
      var val20 = paddingRight[1];
      values.splice(20, 0, val20);
      var valF20 = paddingRight[2];
      fValues.splice(20, 0, valF20);
    }
    if (elePr != 'pr') {
      var val20 = 'ud';
      values.splice(20, 0, val20);
      var valF20 = 'ud';
      fValues.splice(20, 0, valF20);
    }
    if (elePt == 'pt') {
      var val21 = paddingTop[1];
      values.splice(21, 0, val21);
      var valF21 = paddingTop[2];
      fValues.splice(21, 0, valF21);
    }
    if (elePt != 'pt') {
      var val21 = 'ud';
      values.splice(21, 0, val21);
      var valF21 = 'ud';
      fValues.splice(21, 0, valF21);
    }
    if (elePb == 'pb') {
      var val22 = paddingBottom[1];
      values.splice(22, 0, val22);
      var valF22 = paddingBottom[2];
      fValues.splice(22, 0, valF22);
    }
    if (elePb != 'pb') {
      var val22 = 'ud';
      values.splice(22, 0, val22);
      var valF22 = 'ud';
      fValues.splice(22, 0, valF22);
    }
    if (eleBo == 'bo') {
      var val23 = '' + border[1] + 'px solid';
      console.log('' + border[1] + 'px solid')
      values.splice(23, 0, val23);
      var valF23 = '' + border[2] + 'px solid';
      fValues.splice(23, 0, valF23);
    }
    if (eleBo != 'bo') {
      var val23 = 'ud';
      values.splice(23, 0, val23);
      var valF23 = 'ud';
      fValues.splice(23, 0, valF23);
    }
    if (eleBl == 'bl') {
      var val24 = '' + borderLeft[1] + 'px solid';
      values.splice(24, 0, val24);
      var valF24 = '' + borderLeft[2] + 'px solid';
      fValues.splice(24, 0, valF24);
    }
    if (eleBl != 'bl') {
      var val24 = 'ud';
      values.splice(24, 0, val24);
      var valF24 = 'ud';
      fValues.splice(24, 0, valF24);
    }
    if (eleBr == 'br') {
      var val25 = '' + borderRight[1] + 'px solid';
      values.splice(25, 0, val25);
      var valF25 = '' + borderRight[2] + 'px solid';
      fValues.splice(25, 0, valF25);
    }
    if (eleBr != 'br') {
      var val25 = 'ud';
      values.splice(25, 0, val25);
      var valF25 = 'ud';
      fValues.splice(25, 0, valF25);
    }
    if (eleBt == 'bt') {
      var val26 = '' + borderTop[1] + 'px solid';
      values.splice(26, 0, val26);
      var valF26 = '' + borderTop[2] + 'px solid';
      fValues.splice(26, 0, valF26);
    }
    if (eleBt != 'bt') {
      var val26 = 'ud';
      values.splice(26, 0, val26);
      var valF26 = 'ud';
      fValues.splice(26, 0, valF26);
    }
    if (eleBb == 'bb') {
      var val27 = '' + borderBottom[1] + 'px solid';
      values.splice(27, 0, val27);
      var valF27 = '' + borderBottom[2] + 'px solid';
      fValues.splice(27, 0, valF27);
    }
    if (eleBb != 'bb') {
      var val27 = 'ud';
      values.splice(27, 0, val27);
      var valF27 = 'ud';
      fValues.splice(27, 0, valF27);
    }
    if (eleBc == 'bc') {
      var colorNum = borderColor[1] - 1;
      var colorNumF = borderColor[2] - 1;
      var val28 = '' + colors[colorNum] + '';
      values.splice(28, 0, val28);
      var valF28 = '' + colors[colorNumF] + '';
      fValues.splice(28, 0, valF28);
    }
    if (eleBc != 'bc') {
      var val28 = 'ud';
      values.splice(28, 0, val28);
      var valF28 = 'ud';
      fValues.splice(28, 0, valF28);
    }
    if (eleRa == 'ra') {
      var val29 = '' + borderRadius[1] + 'px';
      values.splice(29, 0, val29);
      var valF29 = '' + borderRadius[2] + 'px';
      fValues.splice(29, 0, valF29);
    }
    if (eleRa != 'ra') {
      var val29 = 'ud';
      values.splice(29, 0, val29);
      var valF29 = 'ud';
      fValues.splice(29, 0, valF29);
    }
    if (eleRp == 'rp') {
      var val30 = '' + borderRadiusPer[1] + '%';
      values.splice(30, 0, val30);
      var valF30 = '' + borderRadiusPer[2] + '%';
      fValues.splice(30, 0, valF30);
    }
    if (eleRp != 'rp') {
      var val30 = 'ud';
      values.splice(30, 0, val30);
      var valF30 = 'ud';
      fValues.splice(30, 0, valF30);
    }
    if (eleWi == 'wi') {
      var val31 = '' + width[1] + '%';
      values.splice(31, 0, val31);
      var valF31 = '' + width[2] + '%';
      fValues.splice(31, 0, valF31);
    }

    if (eleWi != 'wi') {
      var val31 = 'ud';
      values.splice(31, 0, val31);
      var valF31 = 'ud';
      fValues.splice(31, 0, valF31);
    }

    if (eleHi == 'hi') {
      var val32 = '' + height[1] + 'px';
      values.splice(32, 0, val32);
      var valF32 = '' + height[2] + 'px';
      fValues.splice(32, 0, valF32);
    }

    if (eleHi != 'hi') {
      var val32 = 'ud';
      values.splice(32, 0, val32);
      var valF32 = 'ud';
      fValues.splice(32, 0, valF32);
    }

    if (eleOl == 'ol') {
      var val33 = '' + outLine[1] + 'px';
      values.splice(33, 0, val33);
      var valF33 = '' + outLine[2] + 'px';
      fValues.splice(33, 0, valF33);
    }

    if (eleOl != 'ol') {
      var val33 = 'ud';
      values.splice(33, 0, val33);
      var valF33 = 'ud';
      fValues.splice(33, 0, valF33);
    }

    if (eleOc == 'oc') {
      var colorNum = outColor[1] - 1;
      var colorNumF = outColor[2] - 1;
      var val34 = '' + colors[colorNum] + '';
      values.splice(34, 0, val34);
      var valF34 = '' + colors[colorNumF] + '';
      fValues.splice(34, 0, valF34);
    }

    if (eleOc != 'oc') {
      var val34 = 'ud';
      values.splice(34, 0, val34);
      var valF34 = 'ud';
      fValues.splice(34, 0, valF34);
    }

    if (eleTc == 'tc') {
      var colorNum = textColor[1] - 1;
      var colorNumF = textColor[2] - 1;
      var val35 = '' + colors[colorNum] + '';
      values.splice(35, 0, val35);
      var valF35 = '' + colors[colorNumF] + '';
      fValues.splice(35, 0, valF35);
    }

    if (eleTc != 'tc') {
      var val35 = 'ud';
      values.splice(35, 0, val35);
      var valF35 = 'ud';
      fValues.splice(35, 0, valF35);
    }

    if (eleFs == 'fs') {
      var val36 = '' + fontSize[1] + 'px';
      values.splice(36, 0, val36);
      var valF36 = '' + fontSize[2] + 'px';
      fValues.splice(36, 0, valF36);
    }

    if (eleFs != 'fs') {
      var val36 = 'ud';
      values.splice(36, 0, val36);
      var valF36 = 'ud';
      fValues.splice(36, 0, valF36);
    }

    if (eleFw == 'fw' && fontWeight[1] >= 0 && fontWeight[2] <= 10) {
      var fontWeightNum = fontWeight[1] * 100;
      var fontWeightNumF = fontWeight[2] * 100;
      var val37 = '' + fontWeightNum + '';
      values.splice(37, 0, val37);
      var valF37 = '' + fontWeightNumF + '';
      fValues.splice(37, 0, valF37);
    }

    if (eleFw != 'fw') {
      var val37 = 'ud';
      values.splice(37, 0, val37);
      var valF37 = 'ud';
      fValues.splice(37, 0, valF37);
    }

    if (eleLs == 'ls') {
      var val38 = '' + letterSpacing[1] + 'px';
      values.splice(38, 0, val38);
      var valF38 = '' + letterSpacing[2] + 'px';
      fValues.splice(38, 0, valF38);
    }

    if (eleLs != 'ls') {
      var val38 = 'ud';
      values.splice(38, 0, val38);
      var valF38 = 'ud';
      fValues.splice(38, 0, valF38);
    }

    if (eleWs == 'ws') {
      var val39 = '' + wordSpacing[1] + 'px';
      values.splice(39, 0, val39);
      var valF39 = '' + wordSpacing[2] + 'px';
      fValues.splice(39, 0, valF39);
    }

    if (eleWs != 'ws') {
      var val39 = 'ud';
      values.splice(39, 0, val39);
      var valF39 = 'ud';
      fValues.splice(39, 0, valF39);
    }

    if (eleLh == 'lh') {
      var val40 = '' + lineHeight[1] + 'px';
      values.splice(40, 0, val40);
      var valF39 = '' + lineHeight[2] + 'px';
      fValues.splice(40, 0, valF40);
    }

    if (eleLh != 'lh') {
      var val40 = 'ud';
      values.splice(40, 0, val40);
      var valF40 = 'ud';
      fValues.splice(40, 0, valF40);
    }

    if (eleBg == 'bg') {
      var colorNum = backGround[1] - 1;
      var colorNumF = backGround[2] - 1;
      var val41 = '' + colors[colorNum] + '';
      values.splice(41, 0, val41);
      var valF41 = '' + colors[colorNumF] + '';
      fValues.splice(41, 0, valF41);
    }

    if (eleBg != 'bg') {
      var val41 = 'ud';
      values.splice(41, 0, val41);
      var valF41 = 'ud';
      fValues.splice(41, 0, valF41);
    }

    if (eleOp == 'op') {
      var opacityNum = opacity[1] * 0.1;
      var opacityNumF = opacity[2] * 0.1;
      var val42 = '' + opacityNum + '';
      values.splice(42, 0, val42);
      var valF42 = '' + opacityNumF + '';
      fValues.splice(42, 0, valF42);
    }

    if (eleOp != 'op') {
      var val42 = 'ud';
      values.splice(42, 0, val42);
      var valF42 = 'ud';
      fValues.splice(42, 0, valF42);
    }

    if (eleUc == 'uc') {
      $('[cell-an^="' + anValue + '"]').css({ 'text-transform': 'uppercase' });
    }

    if (eleLc == 'lc') {
      $('[cell-an^="' + anValue + '"]').css({ 'text-transform': 'lowercase' });
    }

    if (eleCf == 'cf') {
      $('[cell-an^="' + anValue + '"]').css({ 'text-transform': 'capitalize' });
    }

    $('[cell-an^="' + anValue + '"]').css({ 'transform-origin': '' + values[12] + '' });


    if (eleWo == 'wo') {
      if (eleNr == 'nr') {
        $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(-' + values[0] + '%) translateX(-' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(-' + values[5] + 'deg) skewX(-' + values[6] + 'deg) rotateY(-' + values[7] + 'deg) rotateX(-' + values[8] + 'deg) rotateZ(-' + values[9] + 'deg)' });
        console.log('-' + values[8] + 'deg')
      }
      if (eleNr != 'nr') {
        $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(' + values[0] + '%) translateX(' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(' + values[5] + 'deg) skewX(' + values[6] + 'deg) rotateY(' + values[7] + 'deg) rotateX(' + values[8] + 'deg) rotateZ(' + values[9] + 'deg)' });
        console.log('' + values[8] + 'deg')
      }
      if (eleNm == 'nm') {
        $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '-' + values[14] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '-' + values[15] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '-' + values[16] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '-' + values[17] + '%' });
      }
      if (eleNm != 'nm') {
        $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '' + values[14] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '' + values[15] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '' + values[16] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '' + values[17] + '%' });
      }
      $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + values[13] + '%' });
      $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + values[18] + '%' });
      $('[cell-an^="' + anValue + '"]').css({ 'padding-left': '' + values[19] + '%' });
      $('[cell-an^="' + anValue + '"]').css({ 'padding-right': '' + values[20] + '%' });
      $('[cell-an^="' + anValue + '"]').css({ 'padding-top': '' + values[21] + '%' });
      $('[cell-an^="' + anValue + '"]').css({ 'padding-bottom': '' + values[22] + '%' });
      $('[cell-an^="' + anValue + '"]').css({ 'border': '' + values[23] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'border-left': '' + values[24] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'border-right': '' + values[25] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'border-top': '' + values[26] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'border-bottom': '' + values[27] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'border-color': '' + values[28] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + values[29] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + values[30] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
      $('[cell-an^="' + anValue + '"]').css({ outline: '' + values[33] + ' solid ' + values[34] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'color': '' + values[35] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'font-size': '' + values[36] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'font-weight': '' + values[37] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'letter-spacing': '' + values[38] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'word-spacing': '' + values[39] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'line-height': '' + values[40] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'background-color': '' + values[41] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + values[42] + '' });
      if (eleTs == 'ts') {
        var textShadowNum = textShadow[2] - 1
        var pos = textShadow[1] * (1)
        $('[cell-an^="' + anValue + '"]').css({ 'text-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[textShadowNum] + '' });
      }
      if (eleBs == 'bs') {
        var boxShadowNum = boxShadow[2] - 1
        var pos = boxShadow[1] * (1)
        $('[cell-an^="' + anValue + '"]').css({ 'box-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[boxShadowNum] + '' });

      }
      $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + values[10] + 's' });
      $('[cell-an^="' + anValue + '"]').css({ 'transition-delay': '' + values[11] + 's' });

      var d = parseInt(speed[1]) * 200;
      setInterval(function () {
        if (eleNr == 'nr') {
          $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(-' + fValues[0] + '%) translateX(-' + fValues[1] + '%) scaleY(' + fValues[2] + ') scaleX(' + fValues[3] + ') scale(' + fValues[4] + ') skewY(-' + fValues[5] + 'deg) skewX(-' + fValues[6] + 'deg) rotateY(-' + fValues[7] + 'deg) rotateX(-' + fValues[8] + 'deg) rotateZ(-' + fValues[9] + 'deg)' });
          console.log('-' + fValues[8] + 'deg')
        }
        if (eleNr != 'nr') {
          $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(' + fValues[0] + '%) translateX(' + fValues[1] + '%) scaleY(' + fValues[2] + ') scaleX(' + fValues[3] + ') scale(' + fValues[4] + ') skewY(' + fValues[5] + 'deg) skewX(' + fValues[6] + 'deg) rotateY(' + fValues[7] + 'deg) rotateX(' + fValues[8] + 'deg) rotateZ(' + fValues[9] + 'deg)' });
          console.log('' + fValues[8] + 'deg')
        }
        if (eleNm == 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '-' + fValues[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '-' + fValues[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '-' + fValues[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '-' + fValues[17] + '%' });
        }
        if (eleNm != 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '' + fValues[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '' + fValues[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '' + fValues[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '' + fValues[17] + '%' });
        }
        $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + fValues[13] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + fValues[18] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-left': '' + fValues[19] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-right': '' + fValues[20] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-top': '' + fValues[21] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-bottom': '' + fValues[22] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'border': '' + fValues[23] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-left': '' + fValues[24] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-right': '' + fValues[25] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-top': '' + fValues[26] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-bottom': '' + fValues[27] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-color': '' + fValues[28] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + fValues[29] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + fValues[30] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + fValues[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + fValues[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ outline: '' + fValues[33] + ' solid ' + fValues[34] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'color': '' + fValues[35] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'font-size': '' + fValues[36] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'font-weight': '' + fValues[37] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'letter-spacing': '' + fValues[38] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'word-spacing': '' + fValues[39] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'line-height': '' + fValues[40] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'background-color': '' + fValues[41] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + fValues[42] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + fValues[10] + 's' });
        $('[cell-an^="' + anValue + '"]').css({ 'transition-delay': '' + fValues[11] + 's' });
      }, d);
    }

    if (eleHo == 'ho') {
      $('[cell-an^="' + anValue + '"]').mouseenter(function () {
        if (eleNr == 'nr') {
          $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(-' + values[0] + '%) translateX(-' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(-' + values[5] + 'deg) skewX(-' + values[6] + 'deg) rotateY(-' + values[7] + 'deg) rotateX(-' + values[8] + 'deg) rotateZ(-' + values[9] + 'deg)' });
          console.log('-' + values[8] + 'deg')
        }
        if (eleNr != 'nr') {
          $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(' + values[0] + '%) translateX(' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(' + values[5] + 'deg) skewX(' + values[6] + 'deg) rotateY(' + values[7] + 'deg) rotateX(' + values[8] + 'deg) rotateZ(' + values[9] + 'deg)' });
          console.log('' + values[8] + 'deg')
        }
        if (eleNm == 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '-' + values[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '-' + values[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '-' + values[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '-' + values[17] + '%' });
        }
        if (eleNm != 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '' + values[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '' + values[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '' + values[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '' + values[17] + '%' });
        }
        $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + values[13] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + values[18] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-left': '' + values[19] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-right': '' + values[20] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-top': '' + values[21] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-bottom': '' + values[22] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'border': '' + values[23] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-left': '' + values[24] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-right': '' + values[25] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-top': '' + values[26] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-bottom': '' + values[27] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-color': '' + values[28] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + values[29] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + values[30] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ outline: '' + values[33] + ' solid ' + values[34] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'color': '' + values[35] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'font-size': '' + values[36] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'font-weight': '' + values[37] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'letter-spacing': '' + values[38] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'word-spacing': '' + values[39] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'line-height': '' + values[40] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'background-color': '' + values[41] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + values[42] + '' });
        if (eleTs == 'ts') {
          var textShadowNum = textShadow[2] - 1
          var pos = textShadow[1] * (1)
          $('[cell-an^="' + anValue + '"]').css({ 'text-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[textShadowNum] + '' });
        }
        if (eleBs == 'bs') {
          var boxShadowNum = boxShadow[2] - 1
          var pos = boxShadow[1] * (1)
          $('[cell-an^="' + anValue + '"]').css({ 'box-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[boxShadowNum] + '' });

        }
        $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + values[10] + 's' });
        $('[cell-an^="' + anValue + '"]').css({ 'transition-delay': '' + values[11] + 's' });
      })
      $('[cell-an^="' + anValue + '"]').mouseleave(function () {
        var d = parseInt(speed[1]) * 200;
        setInterval(function () {
          if (eleNr == 'nr') {
            $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(-' + fValues[0] + '%) translateX(-' + fValues[1] + '%) scaleY(' + fValues[2] + ') scaleX(' + fValues[3] + ') scale(' + fValues[4] + ') skewY(-' + fValues[5] + 'deg) skewX(-' + fValues[6] + 'deg) rotateY(-' + fValues[7] + 'deg) rotateX(-' + fValues[8] + 'deg) rotateZ(-' + fValues[9] + 'deg)' });
            console.log('-' + fValues[8] + 'deg')
          }
          if (eleNr != 'nr') {
            $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(' + fValues[0] + '%) translateX(' + fValues[1] + '%) scaleY(' + fValues[2] + ') scaleX(' + fValues[3] + ') scale(' + fValues[4] + ') skewY(' + fValues[5] + 'deg) skewX(' + fValues[6] + 'deg) rotateY(' + fValues[7] + 'deg) rotateX(' + fValues[8] + 'deg) rotateZ(' + fValues[9] + 'deg)' });
            console.log('' + fValues[8] + 'deg')
          }
          if (eleNm == 'nm') {
            $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '-' + fValues[14] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '-' + fValues[15] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '-' + fValues[16] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '-' + fValues[17] + '%' });
          }
          if (eleNm != 'nm') {
            $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '' + fValues[14] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '' + fValues[15] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '' + fValues[16] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '' + fValues[17] + '%' });
          }
          $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + fValues[13] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + fValues[18] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding-left': '' + fValues[19] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding-right': '' + fValues[20] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding-top': '' + fValues[21] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding-bottom': '' + fValues[22] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'border': '' + fValues[23] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-left': '' + fValues[24] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-right': '' + fValues[25] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-top': '' + fValues[26] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-bottom': '' + fValues[27] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-color': '' + fValues[28] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + fValues[29] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + fValues[30] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'width': '' + fValues[31] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'height': '' + fValues[32] + '' });
          $('[cell-an^="' + anValue + '"]').css({ outline: '' + fValues[33] + ' solid ' + fValues[34] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'color': '' + fValues[35] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'font-size': '' + fValues[36] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'font-weight': '' + fValues[37] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'letter-spacing': '' + fValues[38] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'word-spacing': '' + fValues[39] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'line-height': '' + fValues[40] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'background-color': '' + fValues[41] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + fValues[42] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + fValues[10] + 's' });
          $('[cell-an^="' + anValue + '"]').css({ 'transition-delay': '' + fValues[11] + 's' });
        }, d);
      })
    }

    if (eleMe == 'me') {
      $('[cell-an^="' + anValue + '"]').mouseenter(function () {
        if (eleNr == 'nr') {
          $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(-' + values[0] + '%) translateX(-' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(-' + values[5] + 'deg) skewX(-' + values[6] + 'deg) rotateY(-' + values[7] + 'deg) rotateX(-' + values[8] + 'deg) rotateZ(-' + values[9] + 'deg)' });
          console.log('-' + values[8] + 'deg')
        }
        if (eleNr != 'nr') {
          $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(' + values[0] + '%) translateX(' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(' + values[5] + 'deg) skewX(' + values[6] + 'deg) rotateY(' + values[7] + 'deg) rotateX(' + values[8] + 'deg) rotateZ(' + values[9] + 'deg)' });
          console.log('' + values[8] + 'deg')
        }
        if (eleNm == 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '-' + values[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '-' + values[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '-' + values[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '-' + values[17] + '%' });
        }
        if (eleNm != 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '' + values[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '' + values[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '' + values[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '' + values[17] + '%' });
        }
        $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + values[13] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + values[18] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-left': '' + values[19] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-right': '' + values[20] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-top': '' + values[21] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-bottom': '' + values[22] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'border': '' + values[23] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-left': '' + values[24] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-right': '' + values[25] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-top': '' + values[26] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-bottom': '' + values[27] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-color': '' + values[28] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + values[29] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + values[30] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ outline: '' + values[33] + ' solid ' + values[34] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'color': '' + values[35] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'font-size': '' + values[36] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'font-weight': '' + values[37] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'letter-spacing': '' + values[38] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'word-spacing': '' + values[39] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'line-height': '' + values[40] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'background-color': '' + values[41] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + values[42] + '' });
        if (eleTs == 'ts') {
          var textShadowNum = textShadow[2] - 1
          var pos = textShadow[1] * (1)
          $('[cell-an^="' + anValue + '"]').css({ 'text-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[textShadowNum] + '' });
        }
        if (eleBs == 'bs') {
          var boxShadowNum = boxShadow[2] - 1
          var pos = boxShadow[1] * (1)
          $('[cell-an^="' + anValue + '"]').css({ 'box-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[boxShadowNum] + '' });

        }
        $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + values[10] + 's' });
        $('[cell-an^="' + anValue + '"]').css({ 'transition-delay': '' + values[11] + 's' });
      })
    }

    if (eleMo == 'mo') {
      $('[cell-an^="' + anValue + '"]').mouseleave(function () {

        if (eleNr == 'nr') {
          $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(-' + fValues[0] + '%) translateX(-' + fValues[1] + '%) scaleY(' + fValues[2] + ') scaleX(' + fValues[3] + ') scale(' + fValues[4] + ') skewY(-' + fValues[5] + 'deg) skewX(-' + fValues[6] + 'deg) rotateY(-' + fValues[7] + 'deg) rotateX(-' + fValues[8] + 'deg) rotateZ(-' + fValues[9] + 'deg)' });
          console.log('-' + fValues[8] + 'deg')
        }
        if (eleNr != 'nr') {
          $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(' + fValues[0] + '%) translateX(' + fValues[1] + '%) scaleY(' + fValues[2] + ') scaleX(' + fValues[3] + ') scale(' + fValues[4] + ') skewY(' + fValues[5] + 'deg) skewX(' + fValues[6] + 'deg) rotateY(' + fValues[7] + 'deg) rotateX(' + fValues[8] + 'deg) rotateZ(' + fValues[9] + 'deg)' });
          console.log('' + fValues[8] + 'deg')
        }
        if (eleNm == 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '-' + fValues[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '-' + fValues[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '-' + fValues[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '-' + fValues[17] + '%' });
        }
        if (eleNm != 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '' + fValues[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '' + fValues[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '' + fValues[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '' + fValues[17] + '%' });
        }
        $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + fValues[13] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + fValues[18] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-left': '' + fValues[19] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-right': '' + fValues[20] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-top': '' + fValues[21] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-bottom': '' + fValues[22] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'border': '' + fValues[23] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-left': '' + fValues[24] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-right': '' + fValues[25] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-top': '' + fValues[26] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-bottom': '' + fValues[27] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-color': '' + fValues[28] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + fValues[29] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + fValues[30] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + fValues[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + fValues[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ outline: '' + fValues[33] + ' solid ' + fValues[34] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'color': '' + fValues[35] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'font-size': '' + fValues[36] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'font-weight': '' + fValues[37] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'letter-spacing': '' + fValues[38] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'word-spacing': '' + fValues[39] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'line-height': '' + fValues[40] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'background-color': '' + fValues[41] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + fValues[42] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + fValues[10] + 's' });
        $('[cell-an^="' + anValue + '"]').css({ 'transition-delay': '' + fValues[11] + 's' });

      })
    }

    if (eleIc == 'ic') {
      $('[cell-an^="' + anValue + '"]').click(function () {
        if (eleNr == 'nr') {
          $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(-' + values[0] + '%) translateX(-' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(-' + values[5] + 'deg) skewX(-' + values[6] + 'deg) rotateY(-' + values[7] + 'deg) rotateX(-' + values[8] + 'deg) rotateZ(-' + values[9] + 'deg)' });
          console.log('-' + values[8] + 'deg')
        }
        if (eleNr != 'nr') {
          $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(' + values[0] + '%) translateX(' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(' + values[5] + 'deg) skewX(' + values[6] + 'deg) rotateY(' + values[7] + 'deg) rotateX(' + values[8] + 'deg) rotateZ(' + values[9] + 'deg)' });
          console.log('' + values[8] + 'deg')
        }
        if (eleNm == 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '-' + values[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '-' + values[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '-' + values[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '-' + values[17] + '%' });
        }
        if (eleNm != 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '' + values[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '' + values[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '' + values[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '' + values[17] + '%' });
        }
        $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + values[13] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + values[18] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-left': '' + values[19] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-right': '' + values[20] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-top': '' + values[21] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding-bottom': '' + values[22] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'border': '' + values[23] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-left': '' + values[24] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-right': '' + values[25] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-top': '' + values[26] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-bottom': '' + values[27] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-color': '' + values[28] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + values[29] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + values[30] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ outline: '' + values[33] + ' solid ' + values[34] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'color': '' + values[35] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'font-size': '' + values[36] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'font-weight': '' + values[37] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'letter-spacing': '' + values[38] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'word-spacing': '' + values[39] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'line-height': '' + values[40] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'background-color': '' + values[41] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + values[42] + '' });
        if (eleTs == 'ts') {
          var textShadowNum = textShadow[2] - 1
          var pos = textShadow[1] * (1)
          $('[cell-an^="' + anValue + '"]').css({ 'text-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[textShadowNum] + '' });
        }
        if (eleBs == 'bs') {
          var boxShadowNum = boxShadow[2] - 1
          var pos = boxShadow[1] * (1)
          $('[cell-an^="' + anValue + '"]').css({ 'box-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[boxShadowNum] + '' });

        }
        $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + values[10] + 's' });
        $('[cell-an^="' + anValue + '"]').css({ 'transition-delay': '' + values[11] + 's' });
      })
    }

    if (eleIt == 'it') {
      var count = 0;
      $(this).click(function () {
        count++;
        if (count % 2 == 0) {
          if (eleNr == 'nr') {
            $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(-' + fValues[0] + '%) translateX(-' + fValues[1] + '%) scaleY(' + fValues[2] + ') scaleX(' + fValues[3] + ') scale(' + fValues[4] + ') skewY(-' + fValues[5] + 'deg) skewX(-' + fValues[6] + 'deg) rotateY(-' + fValues[7] + 'deg) rotateX(-' + fValues[8] + 'deg) rotateZ(-' + fValues[9] + 'deg)' });
            console.log('-' + fValues[8] + 'deg')
          }
          if (eleNr != 'nr') {
            $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(' + fValues[0] + '%) translateX(' + fValues[1] + '%) scaleY(' + fValues[2] + ') scaleX(' + fValues[3] + ') scale(' + fValues[4] + ') skewY(' + fValues[5] + 'deg) skewX(' + fValues[6] + 'deg) rotateY(' + fValues[7] + 'deg) rotateX(' + fValues[8] + 'deg) rotateZ(' + fValues[9] + 'deg)' });
            console.log('' + fValues[8] + 'deg')
          }
          if (eleNm == 'nm') {
            $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '-' + fValues[14] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '-' + fValues[15] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '-' + fValues[16] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '-' + fValues[17] + '%' });
          }
          if (eleNm != 'nm') {
            $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '' + fValues[14] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '' + fValues[15] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '' + fValues[16] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '' + fValues[17] + '%' });
          }
          $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + fValues[13] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + fValues[18] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding-left': '' + fValues[19] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding-right': '' + fValues[20] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding-top': '' + fValues[21] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding-bottom': '' + fValues[22] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'border': '' + fValues[23] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-left': '' + fValues[24] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-right': '' + fValues[25] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-top': '' + fValues[26] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-bottom': '' + fValues[27] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-color': '' + fValues[28] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + fValues[29] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + fValues[30] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'width': '' + fValues[31] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'height': '' + fValues[32] + '' });
          $('[cell-an^="' + anValue + '"]').css({ outline: '' + fValues[33] + ' solid ' + fValues[34] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'color': '' + fValues[35] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'font-size': '' + fValues[36] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'font-weight': '' + fValues[37] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'letter-spacing': '' + fValues[38] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'word-spacing': '' + fValues[39] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'line-height': '' + fValues[40] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'background-color': '' + fValues[41] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + fValues[42] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + fValues[10] + 's' });
          $('[cell-an^="' + anValue + '"]').css({ 'transition-delay': '' + fValues[11] + 's' });
        }
        if (count % 2 != 0) {
          if (eleNr == 'nr') {
            $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(-' + values[0] + '%) translateX(-' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(-' + values[5] + 'deg) skewX(-' + values[6] + 'deg) rotateY(-' + values[7] + 'deg) rotateX(-' + values[8] + 'deg) rotateZ(-' + values[9] + 'deg)' });
            console.log('-' + values[8] + 'deg')
          }
          if (eleNr != 'nr') {
            $('[cell-an^="' + anValue + '"]').css({ transform: 'translateY(' + values[0] + '%) translateX(' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(' + values[5] + 'deg) skewX(' + values[6] + 'deg) rotateY(' + values[7] + 'deg) rotateX(' + values[8] + 'deg) rotateZ(' + values[9] + 'deg)' });
            console.log('' + values[8] + 'deg')
          }
          if (eleNm == 'nm') {
            $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '-' + values[14] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '-' + values[15] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '-' + values[16] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '-' + values[17] + '%' });
          }
          if (eleNm != 'nm') {
            $('[cell-an^="' + anValue + '"]').css({ 'margin-left': '' + values[14] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-right': '' + values[15] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-top': '' + values[16] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'margin-bottom': '' + values[17] + '%' });
          }
          $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + values[13] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + values[18] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding-left': '' + values[19] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding-right': '' + values[20] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding-top': '' + values[21] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding-bottom': '' + values[22] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'border': '' + values[23] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-left': '' + values[24] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-right': '' + values[25] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-top': '' + values[26] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-bottom': '' + values[27] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-color': '' + values[28] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + values[29] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'border-radius': '' + values[30] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
          $('[cell-an^="' + anValue + '"]').css({ outline: '' + values[33] + ' solid ' + values[34] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'color': '' + values[35] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'font-size': '' + values[36] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'font-weight': '' + values[37] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'letter-spacing': '' + values[38] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'word-spacing': '' + values[39] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'line-height': '' + values[40] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'background-color': '' + values[41] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + values[42] + '' });
          if (eleTs == 'ts') {
            var textShadowNum = textShadow[2] - 1
            var pos = textShadow[1] * (1)
            $('[cell-an^="' + anValue + '"]').css({ 'text-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[textShadowNum] + '' });
          }
          if (eleBs == 'bs') {
            var boxShadowNum = boxShadow[2] - 1
            var pos = boxShadow[1] * (1)
            $('[cell-an^="' + anValue + '"]').css({ 'box-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[boxShadowNum] + '' });

          }
          $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + values[10] + 's' });
          $('[cell-an^="' + anValue + '"]').css({ 'transition-delay': '' + values[11] + 's' });
        }
      })
    }

  })
  //For Nested Toggle And Click Actions
  $("[cell-an]").each(function (i) {
    $("[cell-an]").each(function (j) {
      var an = $(this).attr('cell-an').match(/[-][a][n](\d{1,})/i);
      var anValue = '[-an' + an[1] + ':';

      var cl = $(this).attr('cell-an').match(/[-][c][l](\d{1,})/i);

      var rotateX = $(this).attr('cell-an').match(/[r][x](\d{1,})[^\w\*](\d{1,})/i);
      var rotateY = $(this).attr('cell-an').match(/[r][y](\d{1,})[^\w\*](\d{1,})/i);
      var rotateZ = $(this).attr('cell-an').match(/[r][z](\d{1,})[^\w\*](\d{1,})/i);
      var scaleX = $(this).attr('cell-an').match(/[s][x](\d{1,})[^\w\*](\d{1,})/i);
      var scaleY = $(this).attr('cell-an').match(/[s][y](\d{1,})[^\w\*](\d{1,})/i);
      var scaleZ = $(this).attr('cell-an').match(/[s][z](\d{1,})[^\w\*](\d{1,})/i);
      var skewX = $(this).attr('cell-an').match(/[K][x](\d{1,})[^\w\*](\d{1,})/i);
      var skewY = $(this).attr('cell-an').match(/[K][y](\d{1,})[^\w\*](\d{1,})/i);
      var translateX = $(this).attr('cell-an').match(/[t][x](\d{1,})[^\w\*](\d{1,})/i);
      var translateY = $(this).attr('cell-an').match(/[t][y](\d{1,})[^\w\*](\d{1,})/i);
      var speed = $(this).attr('cell-an').match(/[s][p](\d{1,})[^\w\*](\d{1,})/i);
      var delay = $(this).attr('cell-an').match(/[d](\d{1,})[^\w\*](\d{1,})/i);
      var fixedCorner = $(this).attr('cell-an').match(/[f][c](\d{1,})[^\w\*](\d{1,})/i);
      var margin = $(this).attr('cell-an').match(/[m][a](\d{1,})[^\w\*](\d{1,})/i);
      var marginLeft = $(this).attr('cell-an').match(/[m][l](\d{1,})[^\w\*](\d{1,})/i);
      var marginRight = $(this).attr('cell-an').match(/[m][r](\d{1,})[^\w\*](\d{1,})/i);
      var marginTop = $(this).attr('cell-an').match(/[m][t](\d{1,})[^\w\*](\d{1,})/i);
      var marginBottom = $(this).attr('cell-an').match(/[m][b](\d{1,})[^\w\*](\d{1,})/i);
      var padding = $(this).attr('cell-an').match(/[p][a](\d{1,})[^\w\*](\d{1,})/i);
      var paddingLeft = $(this).attr('cell-an').match(/[p][l](\d{1,})[^\w\*](\d{1,})/i);
      var paddingRight = $(this).attr('cell-an').match(/[p][r](\d{1,})[^\w\*](\d{1,})/i);
      var paddingTop = $(this).attr('cell-an').match(/[p][t](\d{1,})[^\w\*](\d{1,})/i);
      var paddingBottom = $(this).attr('cell-an').match(/[p][b](\d{1,})[^\w\*](\d{1,})/i);
      var border = $(this).attr('cell-an').match(/[b][o](\d{1,})[^\w\*](\d{1,})/i);
      var borderLeft = $(this).attr('cell-an').match(/[b][l](\d{1,})[^\w\*](\d{1,})/i);
      var borderRight = $(this).attr('cell-an').match(/[b][r](\d{1,})[^\w\*](\d{1,})/i);
      var borderTop = $(this).attr('cell-an').match(/[b][t](\d{1,})[^\w\*](\d{1,})/i);
      var borderBottom = $(this).attr('cell-an').match(/[b][b](\d{1,})[^\w\*](\d{1,})/i);
      var borderColor = $(this).attr('cell-an').match(/[b][c](\d{1,})[^\w\*](\d{1,})/i);
      var borderRadius = $(this).attr('cell-an').match(/[r][a](\d{1,})[^\w\*](\d{1,})/i);
      var borderRadiusPer = $(this).attr('cell-an').match(/[r][p](\d{1,})[^\w\*](\d{1,})/i);
      var width = $(this).attr('cell-an').match(/[w][i](\d{1,})[^\w\*](\d{1,})/i);
      var height = $(this).attr('cell-an').match(/[h][i](\d{1,})[^\w\*](\d{1,})/i);
      var outLine = $(this).attr('cell-an').match(/[o][l](\d{1,})[^\w\*](\d{1,})/i);
      var outColor = $(this).attr('cell-an').match(/[o][c](\d{1,})[^\w\*](\d{1,})/i);
      var textColor = $(this).attr('cell-an').match(/[t][c](\d{1,})[^\w\*](\d{1,})/i);
      var fontSize = $(this).attr('cell-an').match(/[f][s](\d{1,})[^\w\*](\d{1,})/i);
      var fontWeight = $(this).attr('cell-an').match(/[f][w](\d{1,})[^\w\*](\d{1,})/i);
      var letterSpacing = $(this).attr('cell-an').match(/[l][s](\d{1,})[^\w\*](\d{1,})/i);
      var wordSpacing = $(this).attr('cell-an').match(/[w][s](\d{1,})[^\w\*](\d{1,})/i);
      var lineHeight = $(this).attr('cell-an').match(/[l][h](\d{1,})[^\w\*](\d{1,})/i);
      var textShadow = $(this).attr('cell-an').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
      var boxShadow = $(this).attr('cell-an').match(/[b][s](\d{1,})[^\w\*](\d{1,})/i);
      var backGround = $(this).attr('cell-an').match(/[b][g](\d{1,})[^\w\*](\d{1,})/i);
      var opacity = $(this).attr('cell-an').match(/[o][p](\d{1,})[^\w\*](\d{1,})/i);


      var ele = $(this).attr('cell-an').match(/[a][n]/i);
      var eleWo = $(this).attr('cell-an').match(/[w][o]/i);
      var eleHo = $(this).attr('cell-an').match(/[h][o]/i);
      var eleMe = $(this).attr('cell-an').match(/[m][e]/i);
      var eleMo = $(this).attr('cell-an').match(/[m][o]/i);
      var eleCl = $(this).attr('cell-an').match(/[c][l]/i);
      var eleCa = $(this).attr('cell-an').match(/[c][a]/i);
      var eleTa = $(this).attr('cell-an').match(/[t][a]/i);
      var eleTx = $(this).attr('cell-an').match(/[t][x]/i);
      var eleTy = $(this).attr('cell-an').match(/[t][y]/i);
      var eleSx = $(this).attr('cell-an').match(/[s][x]/i);
      var eleSy = $(this).attr('cell-an').match(/[s][y]/i);
      var eleSz = $(this).attr('cell-an').match(/[s][z]/i);
      var eleKx = $(this).attr('cell-an').match(/[k][x]/i);
      var eleKy = $(this).attr('cell-an').match(/[k][y]/i);
      var eleRx = $(this).attr('cell-an').match(/[r][x]/i);
      var eleRy = $(this).attr('cell-an').match(/[r][y]/i);
      var eleRz = $(this).attr('cell-an').match(/[r][z]/i);
      var eleSp = $(this).attr('cell-an').match(/[s][p]/i);
      var eleD = $(this).attr('cell-an').match(/[d]/i);
      var eleFc = $(this).attr('cell-an').match(/[f][c]/i);
      var eleMa = $(this).attr('cell-an').match(/[m][a]/i);
      var eleMl = $(this).attr('cell-an').match(/[m][l]/i);
      var eleMr = $(this).attr('cell-an').match(/[m][r]/i);
      var eleMt = $(this).attr('cell-an').match(/[m][t]/i);
      var eleMb = $(this).attr('cell-an').match(/[m][b]/i);
      var elePa = $(this).attr('cell-an').match(/[p][a]/i);
      var elePl = $(this).attr('cell-an').match(/[p][l]/i);
      var elePr = $(this).attr('cell-an').match(/[p][r]/i);
      var elePt = $(this).attr('cell-an').match(/[p][t]/i);
      var elePb = $(this).attr('cell-an').match(/[p][b]/i);
      var eleBo = $(this).attr('cell-an').match(/[b][o]/i);
      var eleBl = $(this).attr('cell-an').match(/[b][l]/i);
      var eleBr = $(this).attr('cell-an').match(/[b][r]/i);
      var eleBt = $(this).attr('cell-an').match(/[b][t]/i);
      var eleBb = $(this).attr('cell-an').match(/[b][b]/i);
      var eleBc = $(this).attr('cell-an').match(/[b][c]/i);
      var eleRa = $(this).attr('cell-an').match(/[r][a]/i);
      var eleRp = $(this).attr('cell-an').match(/[r][p]/i);
      var eleWi = $(this).attr('cell-an').match(/[w][i]/i);
      var eleHi = $(this).attr('cell-an').match(/[h][i]/i);
      var eleOl = $(this).attr('cell-an').match(/[o][l]/i);
      var eleOc = $(this).attr('cell-an').match(/[o][c]/i);
      var eleTc = $(this).attr('cell-an').match(/[t][c]/i);
      var eleFs = $(this).attr('cell-an').match(/[f][s]/i);
      var eleFw = $(this).attr('cell-an').match(/[f][w]/i);
      var eleUc = $(this).attr('cell-an').match(/[u][c]/i);
      var eleLc = $(this).attr('cell-an').match(/[l][c]/i);
      var eleCf = $(this).attr('cell-an').match(/[c][f]/i);
      var eleLs = $(this).attr('cell-an').match(/[l][s]/i);
      var eleWs = $(this).attr('cell-an').match(/[w][s]/i);
      var eleLh = $(this).attr('cell-an').match(/[l][h]/i);
      var eleTs = $(this).attr('cell-an').match(/[t][s]/i);
      var eleBs = $(this).attr('cell-an').match(/[b][s]/i);
      var eleBg = $(this).attr('cell-an').match(/[B][g]/i);
      var eleOp = $(this).attr('cell-an').match(/[o][p]/i);
      var eleNr = $(this).attr('cell-an').match(/[n][r]/i);
      var eleNm = $(this).attr('cell-an').match(/[n][m]/i);
      var eleAi = $(this).attr('cell-an').match(/[a][i]/i);
      var eleAa = $(this).attr('cell-an').match(/[a][a]/i);
      var eleXi = $(this).attr('cell-an').match(/[x][i]/i);
      var eleXa = $(this).attr('cell-an').match(/[x][]/i);

      var values = [];
      var fValues = [];
      if (eleTy == 'ty') {
        var translateYNum = translateY[1] * 10;
        var translateYNumF = translateY[2] * 10;
        var val0 = translateYNum;
        values.splice(0, 0, val0);
        var valF0 = translateYNumF;
        fValues.splice(0, 0, valF0);
      }
      if (eleTy != 'ty') {
        var val0 = 0;
        values.splice(0, 0, val0);
        var valF0 = 0;
        fValues.splice(0, 0, valF0);
      }
      if (eleTx == 'tx') {
        var translateXNum = translateX[1] * 10;
        var translateXNumF = translateX[2] * 10;
        var val1 = translateXNum;
        values.splice(1, 0, val1);
        var valF1 = translateXNumF;
        fValues.splice(1, 0, valF1);
      }
      if (eleTx != 'tx') {
        var val1 = 0;
        values.splice(1, 0, val1);
        var valF1 = 0;
        fValues.splice(1, 0, valF1);
      }
      if (eleSy == 'sy') {
        var scaleYNum = scaleY[1] * 0.1;
        var scaleYNumF = scaleY[2] * 0.1;
        var val2 = scaleYNum;
        values.splice(2, 0, val2);
        var valF2 = scaleYNumF;
        fValues.splice(2, 0, valF2);
      }
      if (eleSy != 'sy') {
        var val2 = 1;
        values.splice(2, 0, val2);
        var valF2 = 1;
        fValues.splice(2, 0, valF2);
      }
      if (eleSx == 'sx') {
        var scaleXNum = scaleX[1] * 0.1;
        var scaleXNumF = scaleX[2] * 0.1;
        var val3 = scaleXNum;
        values.splice(3, 0, val3);
        var valF3 = scaleXNumF;
        fValues.splice(3, 0, valF3);
      }
      if (eleSx != 'sx') {
        var val3 = 1;
        values.splice(3, 0, val3);
        var valF3 = 1;
        fValues.splice(3, 0, valF3);
      }
      if (eleSz == 'sz') {
        var scaleZNum = scaleZ[1] * 0.1;
        var scaleZNumF = scaleZ[2] * 0.1;
        var val4 = scaleZNum;
        values.splice(4, 0, val4);
        var valF4 = scaleZNumF;
        fValues.splice(4, 0, valF4);
      }
      if (eleSz != 'sz') {
        var val4 = 1;
        values.splice(4, 0, val4);
        var valF4 = 1;
        fValues.splice(4, 0, valF4);
      }
      if (eleKy == 'ky') {
        var skewYNum = skewY[1] * 10;
        var skewYNumF = skewY[2] * 10;
        var val5 = skewYNum;
        values.splice(5, 0, val5);
        var valF5 = skewYNumF;
        fValues.splice(5, 0, valF5);
      }
      if (eleKy != 'ky') {
        var val5 = 0;
        values.splice(5, 0, val5);
        var valF5 = 0;
        fValues.splice(5, 0, valF5);
      }
      if (eleKx == 'kx') {
        var skewXNum = skewX[1] * 10;
        var skewXNumF = skewX[2] * 10;
        var val6 = skewXNum;
        values.splice(6, 0, val6);
        var valF6 = skewXNumF;
        fValues.splice(6, 0, valF6);
      }
      if (eleKx != 'kx') {
        var val6 = 0;
        values.splice(6, 0, val6);
        var valF6 = 0;
        fValues.splice(6, 0, valF6);
      }
      if (eleRy == 'ry') {
        var rotateYNum = rotateY[1] * 10;
        var rotateYNumF = rotateY[2] * 10;
        var val7 = rotateYNum;
        values.splice(7, 0, val7);
        var valF7 = rotateYNumF;
        fValues.splice(7, 0, valF7);
      }
      if (eleRy != 'ry') {
        var val7 = 0;
        values.splice(7, 0, val7);
        var valF7 = 0;
        fValues.splice(7, 0, valF7);
      }
      if (eleRx == 'rx') {
        var rotateXNum = rotateX[1] * 10;
        var rotateXNumF = rotateX[2] * 10;
        var val8 = rotateXNum;
        values.splice(8, 0, val8);
        var valF8 = rotateXNumF;
        fValues.splice(8, 0, valF8);
      }
      if (eleRx != 'rx') {
        var val8 = 0;
        values.splice(8, 0, val8);
        var valF8 = 0;
        fValues.splice(8, 0, valF8);
      }
      if (eleRz == 'rz') {
        var rotateZNum = rotateZ[1] * 10;
        var rotateZNumF = rotateZ[2] * 10;
        var val9 = rotateZNum;
        values.splice(9, 0, val9);
        var valF9 = rotateZNumF;
        fValues.splice(9, 0, valF9);
      }
      if (eleRz != 'rz') {
        var val9 = 0;
        values.splice(9, 0, val9);
        var valF9 = 0;
        fValues.splice(9, 0, valF9);
      }
      if (eleSp == 'sp') {
        var speedNum = speed[1] * 0.1;
        var speedNumF = speed[2] * 0.1;
        var val10 = speedNum;
        values.splice(10, 0, val10);
        var valF10 = speedNumF;
        fValues.splice(10, 0, valF10);
      }
      if (eleSp != 'sp') {
        var val10 = 2;
        values.splice(10, 0, val10);
        var valF10 = 2;
        fValues.splice(10, 0, valF10);
      }
      if (eleD == 'd') {
        var delayNum = delay[1] * 0.1;
        var delayNumF = delay[2] * 0.1;
        var val11 = delayNum;
        values.splice(11, 0, val11);
        var valF11 = delayNumF;
        fValues.splice(11, 0, valF11);
      }
      if (eleD != 'd') {
        var val11 = 0;
        values.splice(11, 0, val11);
        var valF11 = 0;
        fValues.splice(11, 0, valF11);
      }
      if (eleFc == 'fc') {
        var val12 = '' + fixedCorner[1] + '% ' + fixedCorner[2] + '%';
        values.splice(12, 0, val12);
        var valF12 = '' + fixedCorner[1] + '% ' + fixedCorner[2] + '%';
        fValues.splice(12, 0, valF12);
      }
      if (eleFc != 'fc') {
        var val12 = 'center';
        values.splice(12, 0, val12);
        var valF12 = 'center';
        fValues.splice(12, 0, valF12);
      }
      if (eleMa == 'ma') {
        var val13 = margin[1];
        values.splice(13, 0, val13);
        var valF13 = margin[2];
        fValues.splice(13, 0, valF13);
      }
      if (eleMa != 'ma') {
        var val13 = 'ud';
        values.splice(13, 0, val13);
        var valF13 = 'ud';
        fValues.splice(13, 0, valF13);
      }
      if (eleMl == 'ml') {
        var val14 = marginLeft[1];
        values.splice(14, 0, val14);
        var valF14 = marginLeft[2];
        fValues.splice(14, 0, valF14);
      }
      if (eleMl != 'ml') {
        var val14 = 'ud';
        values.splice(14, 0, val14);
        var valF14 = 'ud';
        fValues.splice(14, 0, valF14);
      }
      if (eleMr == 'mr') {
        var val15 = marginRight[1];
        values.splice(15, 0, val15);
        var valF15 = marginRight[2];
        fValues.splice(15, 0, valF15);
      }
      if (eleMr != 'mr') {
        var val15 = 'ud';
        values.splice(15, 0, val15);
        var valF15 = 'ud';
        fValues.splice(15, 0, valF15);
      }
      if (eleMt == 'mt') {
        var val16 = marginTop[1];
        values.splice(16, 0, val16);
        var valF16 = marginTop[2];
        fValues.splice(16, 0, valF16);
      }
      if (eleMt != 'mt') {
        var val16 = 'ud';
        values.splice(16, 0, val16);
        var valF16 = 'ud';
        fValues.splice(16, 0, valF16);
      }
      if (eleMb == 'mb') {
        var val17 = marginBottom[1];
        values.splice(17, 0, val17);
        var valF17 = marginBottom[2];
        fValues.splice(17, 0, valF17);
      }
      if (eleMb != 'mb') {
        var val17 = 'ud';
        values.splice(17, 0, val17);
        var valF17 = 'ud';
        fValues.splice(17, 0, valF17);
      }
      if (elePa == 'pa') {
        var val18 = padding[1];
        values.splice(18, 0, val18);
        var valF18 = padding[2];
        fValues.splice(18, 0, valF18);
      }
      if (elePa != 'pa') {
        var val18 = 'ud';
        values.splice(18, 0, val18);
        var valF18 = 'ud';
        fValues.splice(18, 0, valF18);
      }
      if (elePl == 'pl') {
        var val19 = paddingLeft[1];
        values.splice(19, 0, val19);
        var valF19 = paddingLeft[2];
        fValues.splice(19, 0, valF19);
      }
      if (elePl != 'pl') {
        var val19 = 'ud';
        values.splice(19, 0, val19);
        var valF19 = 'ud';
        fValues.splice(19, 0, valF19);
      }
      if (elePr == 'pr') {
        var val20 = paddingRight[1];
        values.splice(20, 0, val20);
        var valF20 = paddingRight[2];
        fValues.splice(20, 0, valF20);
      }
      if (elePr != 'pr') {
        var val20 = 'ud';
        values.splice(20, 0, val20);
        var valF20 = 'ud';
        fValues.splice(20, 0, valF20);
      }
      if (elePt == 'pt') {
        var val21 = paddingTop[1];
        values.splice(21, 0, val21);
        var valF21 = paddingTop[2];
        fValues.splice(21, 0, valF21);
      }
      if (elePt != 'pt') {
        var val21 = 'ud';
        values.splice(21, 0, val21);
        var valF21 = 'ud';
        fValues.splice(21, 0, valF21);
      }
      if (elePb == 'pb') {
        var val22 = paddingBottom[1];
        values.splice(22, 0, val22);
        var valF22 = paddingBottom[2];
        fValues.splice(22, 0, valF22);
      }
      if (elePb != 'pb') {
        var val22 = 'ud';
        values.splice(22, 0, val22);
        var valF22 = 'ud';
        fValues.splice(22, 0, valF22);
      }
      if (eleBo == 'bo') {
        var val23 = '' + border[1] + 'px solid';
        console.log('' + border[1] + 'px solid')
        values.splice(23, 0, val23);
        var valF23 = '' + border[2] + 'px solid';
        fValues.splice(23, 0, valF23);
      }
      if (eleBo != 'bo') {
        var val23 = 'ud';
        values.splice(23, 0, val23);
        var valF23 = 'ud';
        fValues.splice(23, 0, valF23);
      }
      if (eleBl == 'bl') {
        var val24 = '' + borderLeft[1] + 'px solid';
        values.splice(24, 0, val24);
        var valF24 = '' + borderLeft[2] + 'px solid';
        fValues.splice(24, 0, valF24);
      }
      if (eleBl != 'bl') {
        var val24 = 'ud';
        values.splice(24, 0, val24);
        var valF24 = 'ud';
        fValues.splice(24, 0, valF24);
      }
      if (eleBr == 'br') {
        var val25 = '' + borderRight[1] + 'px solid';
        values.splice(25, 0, val25);
        var valF25 = '' + borderRight[2] + 'px solid';
        fValues.splice(25, 0, valF25);
      }
      if (eleBr != 'br') {
        var val25 = 'ud';
        values.splice(25, 0, val25);
        var valF25 = 'ud';
        fValues.splice(25, 0, valF25);
      }
      if (eleBt == 'bt') {
        var val26 = '' + borderTop[1] + 'px solid';
        values.splice(26, 0, val26);
        var valF26 = '' + borderTop[2] + 'px solid';
        fValues.splice(26, 0, valF26);
      }
      if (eleBt != 'bt') {
        var val26 = 'ud';
        values.splice(26, 0, val26);
        var valF26 = 'ud';
        fValues.splice(26, 0, valF26);
      }
      if (eleBb == 'bb') {
        var val27 = '' + borderBottom[1] + 'px solid';
        values.splice(27, 0, val27);
        var valF27 = '' + borderBottom[2] + 'px solid';
        fValues.splice(27, 0, valF27);
      }
      if (eleBb != 'bb') {
        var val27 = 'ud';
        values.splice(27, 0, val27);
        var valF27 = 'ud';
        fValues.splice(27, 0, valF27);
      }
      if (eleBc == 'bc') {
        var colorNum = borderColor[1] - 1;
        var colorNumF = borderColor[2] - 1;
        var val28 = '' + colors[colorNum] + '';
        values.splice(28, 0, val28);
        var valF28 = '' + colors[colorNumF] + '';
        fValues.splice(28, 0, valF28);
      }
      if (eleBc != 'bc') {
        var val28 = 'ud';
        values.splice(28, 0, val28);
        var valF28 = 'ud';
        fValues.splice(28, 0, valF28);
      }
      if (eleRa == 'ra') {
        var val29 = '' + borderRadius[1] + 'px';
        values.splice(29, 0, val29);
        var valF29 = '' + borderRadius[2] + 'px';
        fValues.splice(29, 0, valF29);
      }
      if (eleRa != 'ra') {
        var val29 = 'ud';
        values.splice(29, 0, val29);
        var valF29 = 'ud';
        fValues.splice(29, 0, valF29);
      }
      if (eleRp == 'rp') {
        var val30 = '' + borderRadiusPer[1] + '%';
        values.splice(30, 0, val30);
        var valF30 = '' + borderRadiusPer[2] + '%';
        fValues.splice(30, 0, valF30);
      }
      if (eleRp != 'rp') {
        var val30 = 'ud';
        values.splice(30, 0, val30);
        var valF30 = 'ud';
        fValues.splice(30, 0, valF30);
      }
      if (eleWi == 'wi') {
        var val31 = '' + width[1] + '%';
        values.splice(31, 0, val31);
        var valF31 = '' + width[2] + '%';
        fValues.splice(31, 0, valF31);
      }

      if (eleWi != 'wi') {
        var val31 = 'ud';
        values.splice(31, 0, val31);
        var valF31 = 'ud';
        fValues.splice(31, 0, valF31);
      }

      if (eleHi == 'hi') {
        var val32 = '' + height[1] + 'px';
        values.splice(32, 0, val32);
        var valF32 = '' + height[2] + 'px';
        fValues.splice(32, 0, valF32);
      }

      if (eleHi != 'hi') {
        var val32 = 'ud';
        values.splice(32, 0, val32);
        var valF32 = 'ud';
        fValues.splice(32, 0, valF32);
      }

      if (eleOl == 'ol') {
        var val33 = '' + outLine[1] + 'px';
        values.splice(33, 0, val33);
        var valF33 = '' + outLine[2] + 'px';
        fValues.splice(33, 0, valF33);
      }

      if (eleOl != 'ol') {
        var val33 = 'ud';
        values.splice(33, 0, val33);
        var valF33 = 'ud';
        fValues.splice(33, 0, valF33);
      }

      if (eleOc == 'oc') {
        var colorNum = outColor[1] - 1;
        var colorNumF = outColor[2] - 1;
        var val34 = '' + colors[colorNum] + '';
        values.splice(34, 0, val34);
        var valF34 = '' + colors[colorNumF] + '';
        fValues.splice(34, 0, valF34);
      }

      if (eleOc != 'oc') {
        var val34 = 'ud';
        values.splice(34, 0, val34);
        var valF34 = 'ud';
        fValues.splice(34, 0, valF34);
      }

      if (eleTc == 'tc') {
        var colorNum = textColor[1] - 1;
        var colorNumF = textColor[2] - 1;
        var val35 = '' + colors[colorNum] + '';
        values.splice(35, 0, val35);
        var valF35 = '' + colors[colorNumF] + '';
        fValues.splice(35, 0, valF35);
      }

      if (eleTc != 'tc') {
        var val35 = 'ud';
        values.splice(35, 0, val35);
        var valF35 = 'ud';
        fValues.splice(35, 0, valF35);
      }

      if (eleFs == 'fs') {
        var val36 = '' + fontSize[1] + 'px';
        values.splice(36, 0, val36);
        var valF36 = '' + fontSize[2] + 'px';
        fValues.splice(36, 0, valF36);
      }

      if (eleFs != 'fs') {
        var val36 = 'ud';
        values.splice(36, 0, val36);
        var valF36 = 'ud';
        fValues.splice(36, 0, valF36);
      }

      if (eleFw == 'fw' && fontWeight[1] >= 0 && fontWeight[2] <= 10) {
        var fontWeightNum = fontWeight[1] * 100;
        var fontWeightNumF = fontWeight[2] * 100;
        var val37 = '' + fontWeightNum + '';
        values.splice(37, 0, val37);
        var valF37 = '' + fontWeightNumF + '';
        fValues.splice(37, 0, valF37);
      }

      if (eleFw != 'fw') {
        var val37 = 'ud';
        values.splice(37, 0, val37);
        var valF37 = 'ud';
        fValues.splice(37, 0, valF37);
      }

      if (eleLs == 'ls') {
        var val38 = '' + letterSpacing[1] + 'px';
        values.splice(38, 0, val38);
        var valF38 = '' + letterSpacing[2] + 'px';
        fValues.splice(38, 0, valF38);
      }

      if (eleLs != 'ls') {
        var val38 = 'ud';
        values.splice(38, 0, val38);
        var valF38 = 'ud';
        fValues.splice(38, 0, valF38);
      }

      if (eleWs == 'ws') {
        var val39 = '' + wordSpacing[1] + 'px';
        values.splice(39, 0, val39);
        var valF39 = '' + wordSpacing[2] + 'px';
        fValues.splice(39, 0, valF39);
      }

      if (eleWs != 'ws') {
        var val39 = 'ud';
        values.splice(39, 0, val39);
        var valF39 = 'ud';
        fValues.splice(39, 0, valF39);
      }

      if (eleLh == 'lh') {
        var val40 = '' + lineHeight[1] + 'px';
        values.splice(40, 0, val40);
        var valF39 = '' + lineHeight[2] + 'px';
        fValues.splice(40, 0, valF40);
      }

      if (eleLh != 'lh') {
        var val40 = 'ud';
        values.splice(40, 0, val40);
        var valF40 = 'ud';
        fValues.splice(40, 0, valF40);
      }

      if (eleBg == 'bg') {
        var colorNum = backGround[1] - 1;
        var colorNumF = backGround[2] - 1;
        var val41 = '' + colors[colorNum] + '';
        values.splice(41, 0, val41);
        var valF41 = '' + colors[colorNumF] + '';
        fValues.splice(41, 0, valF41);
      }

      if (eleBg != 'bg') {
        var val41 = 'ud';
        values.splice(41, 0, val41);
        var valF41 = 'ud';
        fValues.splice(41, 0, valF41);
      }

      if (eleOp == 'op') {
        var opacityNum = opacity[1] * 0.1;
        var opacityNumF = opacity[2] * 0.1;
        var val42 = '' + opacityNum + '';
        values.splice(42, 0, val42);
        var valF42 = '' + opacityNumF + '';
        fValues.splice(42, 0, valF42);
      }

      if (eleOp != 'op') {
        var val42 = 'ud';
        values.splice(42, 0, val42);
        var valF42 = 'ud';
        fValues.splice(42, 0, valF42);
      }

      if (eleUc == 'uc') {
        $('[cell-an^="' + anValue + '"]').css({ 'text-transform': 'uppercase' });
      }

      if (eleLc == 'lc') {
        $('[cell-an^="' + anValue + '"]').css({ 'text-transform': 'lowercase' });
      }

      if (eleCf == 'cf') {
        $('[cell-an^="' + anValue + '"]').css({ 'text-transform': 'capitalize' });
      }

      $('[cell-an^="' + anValue + '"]').css({ 'transform-origin': '' + values[12] + '' });


      $('[cell-an*="-cl' + i + '"]').click(function () {
        if (eleNr == 'nr') {
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ transform: 'translateY(-' + values[0] + '%) translateX(-' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(-' + values[5] + 'deg) skewX(-' + values[6] + 'deg) rotateY(-' + values[7] + 'deg) rotateX(-' + values[8] + 'deg) rotateZ(-' + values[9] + 'deg)' });
        }
        if (eleNr != 'nr') {
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ transform: 'translateY(' + values[0] + '%) translateX(' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(' + values[5] + 'deg) skewX(' + values[6] + 'deg) rotateY(' + values[7] + 'deg) rotateX(' + values[8] + 'deg) rotateZ(' + values[9] + 'deg)' });
        }
        if (eleNm == 'nm') {
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'margin-left': '-' + values[14] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'margin-right': '-' + values[15] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'margin-top': '-' + values[16] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'margin-bottom': '-' + values[17] + '%' });
        }
        if (eleNm != 'nm') {
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'margin-left': '' + values[14] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'margin-right': '' + values[15] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'margin-top': '' + values[16] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'margin-bottom': '' + values[17] + '%' });
        }
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'margin': '' + values[13] + '%' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'padding': '' + values[18] + '%' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'padding-left': '' + values[19] + '%' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'padding-right': '' + values[20] + '%' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'padding-top': '' + values[21] + '%' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'padding-bottom': '' + values[22] + '%' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'border': '' + values[23] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'border-left': '' + values[24] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'border-right': '' + values[25] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'border-top': '' + values[26] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'border-bottom': '' + values[27] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'border-color': '' + values[28] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'border-radius': '' + values[29] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'border-radius': '' + values[30] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ outline: '' + values[33] + ' solid ' + values[34] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'color': '' + values[35] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'font-size': '' + values[36] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'font-weight': '' + values[37] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'letter-spacing': '' + values[38] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'word-spacing': '' + values[39] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'line-height': '' + values[40] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'background-color': '' + values[41] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'opacity': '' + values[42] + '' });
        if (eleTs == 'ts') {
          var textShadowNum = textShadow[2] - 1
          var pos = textShadow[1] * (1)
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'text-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[textShadowNum] + '' });
        }
        if (eleBs == 'bs') {
          var boxShadowNum = boxShadow[2] - 1;
          var pos = boxShadow[1] * (1);
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'box-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[boxShadowNum] + '' });
        }
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'transition': 'all ' + values[10] + 's' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'transition-delay': '' + values[11] + 's' });

      })
      var count = 0;
      $('[cell-an*="-to' + i + '"]').click(function () {
        count++;
        if (count % 2 == 0) {
          if (eleNr == 'nr') {
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ transform: 'translateY(-' + fValues[0] + '%) translateX(-' + fValues[1] + '%) scaleY(' + fValues[2] + ') scaleX(' + fValues[3] + ') scale(' + fValues[4] + ') skewY(-' + fValues[5] + 'deg) skewX(-' + fValues[6] + 'deg) rotateY(-' + fValues[7] + 'deg) rotateX(-' + fValues[8] + 'deg) rotateZ(-' + fValues[9] + 'deg)' });
          }
          if (eleNr != 'nr') {
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ transform: 'translateY(' + fValues[0] + '%) translateX(' + fValues[1] + '%) scaleY(' + fValues[2] + ') scaleX(' + fValues[3] + ') scale(' + fValues[4] + ') skewY(' + fValues[5] + 'deg) skewX(' + fValues[6] + 'deg) rotateY(' + fValues[7] + 'deg) rotateX(' + fValues[8] + 'deg) rotateZ(' + fValues[9] + 'deg)' });
          }
          if (eleNm == 'nm') {
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-left': '-' + fValues[14] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-right': '-' + fValues[15] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-top': '-' + fValues[16] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-bottom': '-' + fValues[17] + '%' });
          }
          if (eleNm != 'nm') {
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-left': '' + fValues[14] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-right': '' + fValues[15] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-top': '' + fValues[16] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-bottom': '' + fValues[17] + '%' });
          }
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin': '' + fValues[13] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'padding': '' + fValues[18] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'padding-left': '' + fValues[19] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'padding-right': '' + fValues[20] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'padding-top': '' + fValues[21] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'padding-bottom': '' + fValues[22] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border': '' + fValues[23] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border-left': '' + fValues[24] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border-right': '' + fValues[25] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border-top': '' + fValues[26] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border-bottom': '' + fValues[27] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border-color': '' + fValues[28] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border-radius': '' + fValues[29] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border-radius': '' + fValues[30] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'width': '' + fValues[31] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'height': '' + fValues[32] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ outline: '' + fValues[33] + ' solid ' + fValues[34] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'color': '' + fValues[35] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'font-size': '' + fValues[36] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'font-weight': '' + fValues[37] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'letter-spacing': '' + fValues[38] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'word-spacing': '' + fValues[39] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'line-height': '' + fValues[40] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'background-color': '' + fValues[41] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'opacity': '' + fValues[42] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'transition': 'all ' + fValues[10] + 's' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'transition-delay': '' + fValues[11] + 's' });
        }
        if (count % 2 != 0) {
          if (eleNr == 'nr') {
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ transform: 'translateY(-' + values[0] + '%) translateX(-' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(-' + values[5] + 'deg) skewX(-' + values[6] + 'deg) rotateY(-' + values[7] + 'deg) rotateX(-' + values[8] + 'deg) rotateZ(-' + values[9] + 'deg)' });
          }
          if (eleNr != 'nr') {
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ transform: 'translateY(' + values[0] + '%) translateX(' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(' + values[5] + 'deg) skewX(' + values[6] + 'deg) rotateY(' + values[7] + 'deg) rotateX(' + values[8] + 'deg) rotateZ(' + values[9] + 'deg)' });
          }
          if (eleNm == 'nm') {
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-left': '-' + values[14] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-right': '-' + values[15] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-top': '-' + values[16] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-bottom': '-' + values[17] + '%' });
          }
          if (eleNm != 'nm') {
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-left': '' + values[14] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-right': '' + values[15] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-top': '' + values[16] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin-bottom': '' + values[17] + '%' });
          }
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin': '' + values[13] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'padding': '' + values[18] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'padding-left': '' + values[19] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'padding-right': '' + values[20] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'padding-top': '' + values[21] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'padding-bottom': '' + values[22] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border': '' + values[23] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border-left': '' + values[24] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border-right': '' + values[25] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border-top': '' + values[26] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border-bottom': '' + values[27] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border-color': '' + values[28] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border-radius': '' + values[29] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border-radius': '' + values[30] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'width': '' + values[31] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'height': '' + values[32] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'width': '' + values[31] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'height': '' + values[32] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ outline: '' + values[33] + ' solid ' + values[34] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'color': '' + values[35] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'font-size': '' + values[36] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'font-weight': '' + values[37] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'letter-spacing': '' + values[38] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'word-spacing': '' + values[39] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'line-height': '' + values[40] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'background-color': '' + values[41] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'opacity': '' + values[42] + '' });
          if (eleTs == 'ts') {
            var textShadowNum = textShadow[2] - 1
            var pos = textShadow[1] * (1)
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'text-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[textShadowNum] + '' });
          }
          if (eleBs == 'bs') {
            var boxShadowNum = boxShadow[2] - 1;
            var pos = boxShadow[1] * (1);
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'box-shadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[boxShadowNum] + '' });
          }
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'transition': 'all ' + values[10] + 's' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'transition-delay': '' + values[11] + 's' });
        }
      })
    })
  });

//For Wizards

  $('[cell-wz^="[-wz"]').each(function (index) {
    var counts = [];
    counts[index] = -1;

    var wizardAttr = $(this).attr('cell-wz').replace("-wz:", '-wz'+index+':')
    $(this).attr('cell-wz', '' + wizardAttr + '')

    var wz = $(this).attr('cell-wz').match(/[-][w][z](\d{1,})/i);
    var wzValue = '[-wz' + wz[1] + ':';

    $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > [cell-wz="[-l]"]').each(function (index) {
      $(this).attr("");
      $(this).attr("id", "vr-list-" + index);
    })
    $('[cell-wz^="' + wzValue + '"]  > [cell-wz^="[-ca]"] >  [cell-wz^="[-c]"]').each(function (index) {
      $(this).attr("");
      $(this).attr("id", "vr-content-" + index);
    })
    $('[cell-wz^="' + wzValue + '"]  > [cell-wz^="[-cb]"] >  [cell-wz^="[-pv]"]').each(function (index) {
      $(this).attr("");
      $(this).attr("id", "preview-" + index);
    })
    $('[cell-wz^="' + wzValue + '"]  > [cell-wz^="[-cb]"] >  [cell-wz^="[-nx]"]').each(function (index) {
      $(this).attr("");
      $(this).attr("id", "next-" + index);
    })

    $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] >  [cell-wz*="[-l]"]').click(function () {
      var getId = this.id;
      var output = getId.substring(8);
      counts[index] = parseInt(output);

      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > [cell-wz="[-m]"]').hide();
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > #' + getId + '').toggleClass("active");
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > [cell-wz="[-l]"]:not([cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > #' + getId + ')').removeClass("active");
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > #vr-content-' + output + '').toggle();
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > [cell-wz="[-c]"]:not([cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] >  #vr-content-' + output + ')').hide();

    });
    $('[cell-wz^="' + wzValue + '"][cell-wz$="]"][cell-wz*="-.cd"]  > [cell-wz="[-wa]"] > [cell-wz="[-l]"]').mouseenter(function () {
      var getId = this.id;
      var output = getId.substring(8);
      counts[index] = parseInt(output);

      jQuery(function () {
        $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > .active').click();
      });

      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > [cell-wz="[-m]"]').hide();
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > #' + getId + '').toggleClass("active");
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > [cell-wz="[-l]"]:not([cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > #' + getId + ')').removeClass("active");
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > #vr-content-' + output + '').toggle();
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > [cell-wz="[-c]"]:not([cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] >  #vr-content-' + output + ')').hide();
    });
    $('[cell-wz^="' + wzValue + '"] #next-0').click(function () {
      counts[index]++;
      var floatLength = ($('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > [cell-wz="[-l]"]').length) - 1;

      if (counts[index] >= floatLength) {
        counts[index] = floatLength
      }
      if (counts[index] >= 0) {
        $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-cb]"] #preview-0').show();
      }
      if (counts[index] < 0) {
        $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-cb]"] #preview-0').hide();
      }

      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > [cell-wz="[-m]"]').hide();
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > #vr-list-' + counts[index] + '').toggleClass("active");
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > [cell-wz="[-l]"]:not([cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > #vr-list-' + counts[index] + ')').removeClass("active");
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > #vr-content-' + counts[index] + '').toggle();
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > [cell-wz="[-c]"]:not([cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] >  #vr-content-' + counts[index] + ')').hide();
    });
    $('[cell-wz^="' + wzValue + '"] #preview-0').click(function () {
      counts[index]--;
      if (counts[index] <= -1) {
        counts[index] = -1
      }
      if (counts[index] == -1) {
        $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-cb]"] #preview-0').hide();
        $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > [cell-wz="[-m]"]').show();
      }
      if (counts[index] >= -1) {
        $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > [cell-wz="[-m]"]').hide();
      }

      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > #vr-list-' + counts[index] + '').toggleClass("active");
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > [cell-wz="[-l]"]:not([cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > #vr-list-' + counts[index] + ')').removeClass("active");
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > #vr-content-' + counts[index] + '').toggle();
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > [cell-wz="[-c]"]:not([cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] >  #vr-content-' + counts[index] + ')').hide();
    });

    var eleVr = $('[cell-wz^="' + wzValue + '"]').attr('cell-wz').match(/[-][a]/i);
    if (eleVr == '-a') {
      var active = $('[cell-wz^="' + wzValue + '"]').attr('cell-wz').match(/a(\d{1,})/i);
      jQuery(function () {
        jQuery('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] >  #vr-list-' + active[1] + '').click();
      });
    }
  })

//For Smoot Scroll

  $('[cell-ss^="[-ss"]').each(function (index) {

    var smoothAttr = $(this).attr('cell-ss').replace("-ss:", '-ss'+index+':')
    $(this).attr('cell-ss', '' + smoothAttr + '')

    var ss = $(this).attr('cell-ss').match(/[-][s][s](\d{1,})/i);
    var ssValue = '[-ss:';

    $('[cell-ss^="' + ssValue + '"] > [cell-ss^="[-sb"]').each(function (index) {
      $(this).attr("");
      $(this).attr("id", "div-" + index);
      $('[cell-ss^="' + ssValue + '"] > [cell-ss^="[-ca"]').append('<a cell-ss=[-cl' + index + '] href="#div-' + index + '" class="click-col"><div class="click"></div></a>')
    })
    jQuery(function () {
      jQuery('[cell-ss^="' + ssValue + '"] > [cell-ss^="[-ca"] > [cell-ss^="[-cl0"]').click();
    });
    var n = 0;
    $('[cell-ss^="' + ssValue + '"] > [cell-ss^="[-sb"]').on('mousewheel DOMMouseScroll', function (e) {
      if (e.originalEvent.wheelDelta / 120 > 0) {
        n--
        var id = this.id;
        var out = parseInt(id.substring(4)) - 1;
        $('[cell-ss^="' + ssValue + '"] > [cell-ss^="[-ca"] > [cell-ss^="[-cl' + out + '"]').trigger('click');
      }
      else {
        n++
        var id = this.id;
        var out = parseInt(id.substring(4)) + 1;
        $('[cell-ss^="' + ssValue + '"] > [cell-ss^="[-ca"] > [cell-ss^="[-cl' + out + '"]').trigger('click');
      }
    })
    //Smooth Scroll
    $('[cell-ss^="' + ssValue + '"] > [cell-ss^="[-ca"] > a').click(function () {
      var targetDiv = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(targetDiv).offset().top
      }, 1000);
      var out = targetDiv.substring(5);
      console.log(out)

      $('[cell-ss^="' + ssValue + '"] > [cell-ss^="[-ca"] > [cell-ss^="[-cl' + out + '"]').toggleClass('active');
      $('[cell-ss^="' + ssValue + '"] > [cell-ss^="[-ca"] > a:not([cell-ss^="' + ssValue + '"] > [cell-ss^="[-ca"] > [cell-ss^="[-cl' + out + '"])').removeClass('active');
    });
  })

//For Buttons

  $(window).resize(function () {
    $("[cell-bu]").each(function (index) {
      var height = $(this).attr('cell-bu').match(/[h][^,]*?(\d{1,})*/i);
      var width = $(this).attr('cell-bu').match(/[w][^,]*?(\d{1,})*/i);
      var widthPer = $(this).attr('cell-bu').match(/[w][.][^,]*?(\d{1,})*/i);
      var radius = $(this).attr('cell-bu').match(/[r][a][^,]*?(\d{1,})*/i);
      var radiusPer = $(this).attr('cell-bu').match(/[r][a][.][^,]*?(\d{1,})*/i);
      var backGround = $(this).attr('cell-bu').match(/[-][b][g][^,]*?(\d{1,})*/i);
      var backGroundHover = $(this).attr('cell-bu').match(/[.][b][g][^,]*?(\d{1,})*/i);
      var borderLeft = $(this).attr('cell-bu').match(/[b][l](\d{1,})[^\w\*](\d{1,})/i);
      var borderRight = $(this).attr('cell-bu').match(/[b][r](\d{1,})[^\w\*](\d{1,})/i);
      var borderTop = $(this).attr('cell-bu').match(/[b][t](\d{1,})[^\w\*](\d{1,})/i);
      var borderBottom = $(this).attr('cell-bu').match(/[b][b](\d{1,})[^\w\*](\d{1,})/i);
      var borderLeftHover = $(this).attr('cell-bu').match(/[.][b][l](\d{1,})[^\w\*](\d{1,})/i);
      var borderRightHover = $(this).attr('cell-bu').match(/[.][b][r](\d{1,})[^\w\*](\d{1,})/i);
      var borderTopHover = $(this).attr('cell-bu').match(/[.][b][t](\d{1,})[^\w\*](\d{1,})/i);
      var borderBottomHover = $(this).attr('cell-bu').match(/[.][b][b](\d{1,})[^\w\*](\d{1,})/i);
      var border = $(this).attr('cell-bu').match(/[-][b][o](\d{1,})[^\w\*](\d{1,})/i);
      var borderHover = $(this).attr('cell-bu').match(/[.][b][o](\d{1,})[^\w\*](\d{1,})/i);
      var NoOfButtons = $(this).attr('cell-bu').match(/[n][b](\d{1,})/i);

      var eleH = $(this).attr('cell-bu').match(/[h]/i);
      var eleW = $(this).attr('cell-bu').match(/[w]/i);
      var eleWp = $(this).attr('cell-bu').match(/[w][.]/i);
      var eleR = $(this).attr('cell-bu').match(/[r][a]/i);
      var eleRp = $(this).attr('cell-bu').match(/[r][a][.]/i);
      var eleBg = $(this).attr('cell-bu').match(/[-][b][g]/i);
      var eleBgHo = $(this).attr('cell-bu').match(/[.][b][g]/i);
      var eleBo = $(this).attr('cell-bu').match(/[b][o]/i);
      var eleBl = $(this).attr('cell-bu').match(/[b][l]/i);
      var eleBr = $(this).attr('cell-bu').match(/[b][r]/i);
      var eleBt = $(this).attr('cell-bu').match(/[b][t]/i);
      var eleBb = $(this).attr('cell-bu').match(/[b][b]/i);
      var eleBlHo = $(this).attr('cell-bu').match(/[.][b][l]/i);
      var eleBrHo = $(this).attr('cell-bu').match(/[.][b][r]/i);
      var eleBtHo = $(this).attr('cell-bu').match(/[.][b][t]/i);
      var eleBbHo = $(this).attr('cell-bu').match(/[.][b][b]/i);
      var eleBHo = $(this).attr('cell-bu').match(/[.][b][o]/i);
      var eleNoB = $(this).attr('cell-bu').match(/[n][b]/i);

      if (eleNoB == 'nb') {
        var NoOfButtonsNum = 100 / NoOfButtons[1];
        $(this).find('button').css({ 'width': '' + NoOfButtonsNum + '%' });
      }
      if (eleH == 'h') {
        $(this).css('height', '' + height[1] + 'px');
      }
      if (eleW == 'w') {
        $(this).css('width', '' + width[1] + 'px');
      }
      if (eleWp == 'w.') {
        $(this).css('width', '' + widthPer[1] + '%');
      }
      if (eleR == 'ra') {
        $(this).css('border-radius', '' + radius[1] + 'px');
      }
      if (eleRp == 'ra.') {
        $(this).css('border-radius', '' + radiusPer[1] + '%');
      }
      if (eleBg == '-bg') {
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

      if (eleBo == 'bo') {
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
          $(this).find('input').css({ 'border-top': '0', 'border-bottom': '0', 'border-left': '0' })
          $(this).find('input').css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
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


    })
  })
    .resize();

//For Toggle Switches

  $('[cell-tg^="["][cell-tg$="]"][cell-tg*="-ts"]').each(function (index) {
    $(this).attr("");
    $(this).attr("id", "tg-switch-" + index);
  })
  $('[cell-tg^="["][cell-tg$="]"][cell-tg*="-tr"]').each(function (index) {
    $(this).attr("");
    $(this).attr("id", "toggler-" + index);
  })
  $('[cell-tg^="["][cell-tg$="]"][cell-tg*="-ts"]').click(function () {
    var getId = this.id;
    var output = getId.substring(10);
    $('#' + getId + '').toggleClass("active");
  });
  $('[cell-tg^="["][cell-tg$="]"][cell-tg*="-tr"]').each(function () {
    var height = $(this).attr('cell-tg').match(/[h][^,]*?(\d{1,})*/i);
    var width = $(this).attr('cell-tg').match(/[w][^,]*?(\d{1,})*/i);
    var widthPer = $(this).attr('cell-tg').match(/[w][.][^,]*?(\d{1,})*/i);
    var radius = $(this).attr('cell-tg').match(/[r][a][^,]*?(\d{1,})*/i);
    var radiusPer = $(this).attr('cell-tg').match(/[r][a][.][^,]*?(\d{1,})*/i);
    var backGround = $(this).attr('cell-tg').match(/[-][b][g][^,]*?(\d{1,})*/i);
    var backGroundHover = $(this).attr('cell-tg').match(/[.][b][g][^,]*?(\d{1,})*/i);
    var borderLeft = $(this).attr('cell-tg').match(/[b][l](\d{1,})[^\w\*](\d{1,})/i);
    var borderRight = $(this).attr('cell-tg').match(/[b][r](\d{1,})[^\w\*](\d{1,})/i);
    var borderTop = $(this).attr('cell-tg').match(/[b][t](\d{1,})[^\w\*](\d{1,})/i);
    var borderBottom = $(this).attr('cell-tg').match(/[b][b](\d{1,})[^\w\*](\d{1,})/i);
    var borderLeftHover = $(this).attr('cell-tg').match(/[.][b][l](\d{1,})[^\w\*](\d{1,})/i);
    var borderRightHover = $(this).attr('cell-tg').match(/[.][b][r](\d{1,})[^\w\*](\d{1,})/i);
    var borderTopHover = $(this).attr('cell-tg').match(/[.][b][t](\d{1,})[^\w\*](\d{1,})/i);
    var borderBottomHover = $(this).attr('cell-tg').match(/[.][b][b](\d{1,})[^\w\*](\d{1,})/i);
    var border = $(this).attr('cell-tg').match(/[-][b][o](\d{1,})[^\w\*](\d{1,})/i);
    var borderHover = $(this).attr('cell-tg').match(/[.][b][o](\d{1,})[^\w\*](\d{1,})/i);
    var speed = $(this).attr('cell-tg').match(/[s][p](\d{1,})/i);

    var eleH = $(this).attr('cell-tg').match(/[h]/i);
    var eleW = $(this).attr('cell-tg').match(/[w]/i);
    var eleWp = $(this).attr('cell-tg').match(/[w][.]/i);
    var eleR = $(this).attr('cell-tg').match(/[r][a]/i);
    var eleRp = $(this).attr('cell-tg').match(/[r][a][.]/i);
    var eleBg = $(this).attr('cell-tg').match(/[-][b][g]/i);
    var eleBgHo = $(this).attr('cell-tg').match(/[.][b][g]/i);
    var eleBo = $(this).attr('cell-tg').match(/[b][o]/i);
    var eleBl = $(this).attr('cell-tg').match(/[b][l]/i);
    var eleBr = $(this).attr('cell-tg').match(/[b][r]/i);
    var eleBt = $(this).attr('cell-tg').match(/[b][t]/i);
    var eleBb = $(this).attr('cell-tg').match(/[b][b]/i);
    var eleBlHo = $(this).attr('cell-tg').match(/[.][b][l]/i);
    var eleBrHo = $(this).attr('cell-tg').match(/[.][b][r]/i);
    var eleBtHo = $(this).attr('cell-tg').match(/[.][b][t]/i);
    var eleBbHo = $(this).attr('cell-tg').match(/[.][b][b]/i);
    var eleBHo = $(this).attr('cell-tg').match(/[.][b][o]/i);
    var eleSp = $(this).attr('cell-tg').match(/[s][p]/i);

    if (eleSp == 'sp') {
      var speedNum = speed[1] * 0.1;
      $(this).css('transition', 'all ' + speedNum + 's');
    }
    if (eleH == 'h') {
      $(this).css('height', '' + height[1] + 'px');
    }
    if (eleW == 'w') {
      $(this).css('width', '' + width[1] + 'px');
    }
    if (eleWp == 'w.') {
      $(this).css('width', '' + widthPer[1] + '%');
    }
    if (eleR == 'ra') {
      $(this).css('border-radius', '' + radius[1] + 'px');
    }
    if (eleRp == 'ra.') {
      $(this).css('border-radius', '' + radiusPer[1] + '%');
    }
    if (eleBg == '-bg') {
      var backGroundNum = backGround[1] - 1;
      $(this).css('background-color', '' + colors[backGroundNum] + '');
    }

    if (eleBgHo == '.bg') {
      var backGroundHoverNum = backGroundHover[1] - 1;
      $(this).mouseenter(function () {
        var backGroundHoverNum = backGroundHover[1] - 1;
        $(this).css('background-color', '' + colors[backGroundHoverNum] + '');
      })
      $(this).mouseleave(function () {
        var backGroundNum = backGround[1] - 1;
        $(this).css('background-color', '' + colors[backGroundNum] + '');
      })
    }

    if (eleBo == 'bo') {
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

  });
  $('[cell-tg^="["][cell-tg$="]"][cell-tg*="-ts"]').each(function () {
    var height = $(this).attr('cell-tg').match(/[h][^,]*?(\d{1,})*/i);
    var width = $(this).attr('cell-tg').match(/[w][^,]*?(\d{1,})*/i);
    var widthPer = $(this).attr('cell-tg').match(/[w][.][^,]*?(\d{1,})*/i);
    var radius = $(this).attr('cell-tg').match(/[r][a][^,]*?(\d{1,})*/i);
    var radiusPer = $(this).attr('cell-tg').match(/[r][a][.][^,]*?(\d{1,})*/i);
    var backGround = $(this).attr('cell-tg').match(/[-][b][g][^,]*?(\d{1,})*/i);
    var backGroundHover = $(this).attr('cell-tg').match(/[.][b][g][^,]*?(\d{1,})*/i);
    var borderLeft = $(this).attr('cell-tg').match(/[b][l](\d{1,})[^\w\*](\d{1,})/i);
    var borderRight = $(this).attr('cell-tg').match(/[b][r](\d{1,})[^\w\*](\d{1,})/i);
    var borderTop = $(this).attr('cell-tg').match(/[b][t](\d{1,})[^\w\*](\d{1,})/i);
    var borderBottom = $(this).attr('cell-tg').match(/[b][b](\d{1,})[^\w\*](\d{1,})/i);
    var borderLeftHover = $(this).attr('cell-tg').match(/[.][b][l](\d{1,})[^\w\*](\d{1,})/i);
    var borderRightHover = $(this).attr('cell-tg').match(/[.][b][r](\d{1,})[^\w\*](\d{1,})/i);
    var borderTopHover = $(this).attr('cell-tg').match(/[.][b][t](\d{1,})[^\w\*](\d{1,})/i);
    var borderBottomHover = $(this).attr('cell-tg').match(/[.][b][b](\d{1,})[^\w\*](\d{1,})/i);
    var border = $(this).attr('cell-tg').match(/[-][b][o](\d{1,})[^\w\*](\d{1,})/i);
    var borderHover = $(this).attr('cell-tg').match(/[.][b][o](\d{1,})[^\w\*](\d{1,})/i);

    var eleH = $(this).attr('cell-tg').match(/[h]/i);
    var eleW = $(this).attr('cell-tg').match(/[w]/i);
    var eleWp = $(this).attr('cell-tg').match(/[w][.]/i);
    var eleR = $(this).attr('cell-tg').match(/[r][a]/i);
    var eleRp = $(this).attr('cell-tg').match(/[r][a][.]/i);
    var eleBg = $(this).attr('cell-tg').match(/[-][b][g]/i);
    var eleBgHo = $(this).attr('cell-tg').match(/[.][b][g]/i);
    var eleBo = $(this).attr('cell-tg').match(/[b][o]/i);
    var eleBl = $(this).attr('cell-tg').match(/[b][l]/i);
    var eleBr = $(this).attr('cell-tg').match(/[b][r]/i);
    var eleBt = $(this).attr('cell-tg').match(/[b][t]/i);
    var eleBb = $(this).attr('cell-tg').match(/[b][b]/i);
    var eleBlHo = $(this).attr('cell-tg').match(/[.][b][l]/i);
    var eleBrHo = $(this).attr('cell-tg').match(/[.][b][r]/i);
    var eleBtHo = $(this).attr('cell-tg').match(/[.][b][t]/i);
    var eleBbHo = $(this).attr('cell-tg').match(/[.][b][b]/i);
    var eleBHo = $(this).attr('cell-tg').match(/[.][b][o]/i);


    if (eleH == 'h') {
      $(this).css('height', '' + height[1] + 'px');
    }
    if (eleW == 'w') {
      $(this).css('width', '' + width[1] + 'px');
    }
    if (eleWp == 'w.') {
      $(this).css('width', '' + widthPer[1] + '%');
    }
    if (eleR == 'ra') {
      $(this).css('border-radius', '' + radius[1] + 'px');
    }
    if (eleRp == 'ra.') {
      $(this).css('border-radius', '' + radiusPer[1] + '%');
    }
    if (eleBg == '-bg') {
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

    if (eleBo == 'bo') {
      var borderNum = border[2] - 1;
      $(this).css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
    }
    if (eleBHo == '.bo') {
      $(this)
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

  });

//For Pie

  $('[cell-pi^="[-pi"]').each(function (index) {

    var piAttr = $(this).attr('cell-pi').replace("-pi:", '-pi'+index+':')
    $(this).attr('cell-pi', '' + piAttr + '')

    var pi = $(this).attr('cell-pi').match(/[-][p][i](\d{1,})/i);
    var piValue = '[-pi' + pi[1] + ':';

    var height = $('[cell-pi^="' + piValue + '"]').attr('cell-pi').match(/[h][^,]*?(\d{1,})*/i);
    var width = $('[cell-pi^="' + piValue + '"]').attr('cell-pi').match(/[w][^,]*?(\d{1,})*/i);
    var radius = $('[cell-pi^="' + piValue + '"]').attr('cell-pi').match(/[r][a][^,]*?(\d{1,})*/i);
    var radiusPer = $('[cell-pi^="' + piValue + '"]').attr('cell-pi').match(/[r][a][.][^,]*?(\d{1,})*/i);

    var eleH = $('[cell-pi^="' + piValue + '"]').attr('cell-pi').match(/[h]/i);
    var eleW = $('[cell-pi^="' + piValue + '"]').attr('cell-pi').match(/[w]/i);
    var eleR = $('[cell-pi^="' + piValue + '"]').attr('cell-pi').match(/[r][a]/i);
    var eleRp = $('[cell-pi^="' + piValue + '"]').attr('cell-pi').match(/[r][a][.]/i);

    if (eleH == 'h') {
      $('[cell-pi^="' + piValue + '"]').css('height', '' + height[1] + 'px');
    }
    if (eleW == 'w') {
      $('[cell-pi^="' + piValue + '"]').css('width', '' + width[1] + 'px');
    }

    if (eleR == 'ra') {
      $('[cell-pi^="' + piValue + '"]').css('border-radius', '' + radius[1] + 'px');
    }
    if (eleRp == 'ra.') {
      $('[cell-pi^="' + piValue + '"]').css('border-radius', '' + radiusPer[1] + '%');
    }
    var col = [];
    $('[cell-pi^="' + piValue + '"] [cell-pi^="[-dg"]').each(function () {

      var dg = $(this).attr('cell-pi').match(/[-][d][g](\d{1,})/i);
      var dgValue = '[-dg' + dg[1] + ':';

      var partBackgroundColor = $('[cell-pi^="' + piValue + '"] [cell-pi^="' + dgValue + '"]').attr('cell-pi').match(/[p][g](\d{1,})[^\w\*](\d{1,})/i);

      var part = partBackgroundColor[2] - 1;

      col.push('' + colors[part] + ' 0 ' + partBackgroundColor[1] + 'deg')
      var elePg = $('[cell-pi^="' + piValue + '"] [cell-pi^="' + dgValue + '"]').attr('cell-pi').match(/[p][g]/i);

      var p = col.join(",")
      if (elePg == 'pg') {
        $('[cell-pi^="' + piValue + '"]').css('background-image', 'conic-gradient(' + p + ')');
      }

    });
  });
  $('[cell-pi^="[-in"]').each(function () {
    var height = $(this).attr('cell-pi').match(/[h][^,]*?(\d{1,})*/i);
    var width = $(this).attr('cell-pi').match(/[w][^,]*?(\d{1,})*/i);
    var radius = $(this).attr('cell-pi').match(/[r][a][^,]*?(\d{1,})*/i);
    var radiusPer = $(this).attr('cell-pi').match(/[r][a][.][^,]*?(\d{1,})*/i);

    var eleH = $(this).attr('cell-pi').match(/[h]/i);
    var eleW = $(this).attr('cell-pi').match(/[w]/i);
    var eleR = $(this).attr('cell-pi').match(/[r][a]/i);
    var eleRp = $(this).attr('cell-pi').match(/[r][a][.]/i);

    if (eleH == 'h') {
      $(this).css('height', '' + height[1] + 'px');
    }
    if (eleW == 'w') {
      $(this).css('width', '' + width[1] + 'px');
    }

    if (eleR == 'ra') {
      $(this).css('border-radius', '' + radius[1] + 'px');
    }
    if (eleRp == 'ra.') {
      $(this).css('border-radius', '' + radiusPer[1] + '%');
    }
  });

//For Progress Bar

  $('[cell-pb^="[-pb"]').each(function () {
    var height = $(this).attr('cell-pb').match(/[h][^,]*?(\d{1,})*/i);
    var width = $(this).attr('cell-pb').match(/[w][^,]*?(\d{1,})*/i);
    var radius = $(this).attr('cell-pb').match(/[r][a][^,]*?(\d{1,})*/i);
    var radiusPer = $(this).attr('cell-pb').match(/[r][a][.][^,]*?(\d{1,})*/i);
    var backgroundColor = $(this).attr('cell-pb').match(/[b][g][^,]*?(\d{1,})*/i);
    var border = $(this).attr('cell-pb').match(/[b][o](\d{1,})[^\w\*](\d{1,})/i);
    var text = $(this).attr('cell-pb').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
    var textHover = $(this).attr('cell-pb').match(/[.][t][s](\d{1,})[^\w\*](\d{1,})/i);
    var labelWidth = $(this).attr('cell-pb').match(/[l][s](\d{1,})/i);

    var eleH = $(this).attr('cell-pb').match(/[h]/i);
    var eleW = $(this).attr('cell-pb').match(/[w]/i);
    var eleR = $(this).attr('cell-pb').match(/[r][a]/i);
    var eleRp = $(this).attr('cell-pb').match(/[r][a][.]/i);
    var eleBg = $(this).attr('cell-pb').match(/[b][g]/i);
    var eleBo = $(this).attr('cell-pb').match(/[b][o]/i);
    var eleTx = $(this).attr('cell-pb').match(/[t][s]/i);
    var eleTxHo = $(this).attr('cell-pb').match(/[.][t][s]/i);
    var eleLs = $(this).attr('cell-pb').match(/[l][s]/i);

    if (eleH == 'h') {
      $(this).find('[cell-pb^="[-pa"]').css('height', '' + height[1] + 'px');
    }
    if (eleW == 'w') {
      $(this).find('[cell-pb^="[-pa"] [cell-pb^="[-ba"]').css('width', '' + width[1] + '%');
    }
    if (eleBg == 'bg') {
      backgroundColorNum = backgroundColor[1] - 1
      $(this).find('[cell-pb^="[-pa"] [cell-pb^="[-ba"]').css('background-color', '' + colors[backgroundColorNum] + '');
    }
    if (eleBo == 'bo') {
      borderNum = border[2] - 1
      $(this).find('[cell-pb^="[-pa"]').css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
    }
    if (eleR == 'ra') {
      $(this).find('[cell-pb^="[-pa"]').css('border-radius', '' + radius[1] + 'px');
    }
    if (eleRp == 'ra.') {
      $(this).find('[cell-pb^="[-pa"]').css('border-radius', '' + radiusPer[1] + '%');
    }
    if (eleTx == 'ts') {
      var textNum = text[2] - 1;
      $(this).find('label').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
    }
    if (eleLs == 'ls') {
      $(this).find('label').css({ 'width': '' + labelWidth[1] + 'px' });
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
  });

//For Nav Bar

  $(window).resize(function () {
    $('[cell-nv^="[-nv"]').each(function (index) {

      var navAttr = $(this).attr('cell-nv').replace("-nv:", '-nv'+index+':')
      $(this).attr('cell-nv', '' + navAttr + '')

      var nv = $(this).attr('cell-nv').match(/[-][n][v](\d{1,})/i);
      var nvValue = '[-nv' + nv[1] + ':';

      var height = $(this).attr('cell-nv').match(/[h][^,]*?(\d{1,})*/i);

      var eleH = $('[cell-nv^="' + nvValue + '"]').attr('cell-nv').match(/[h]/i);
      var eleFx = $('[cell-nv^="' + nvValue + '"]').attr('cell-nv').match(/[f][x]/i);
      var eleSk = $('[cell-nv^="' + nvValue + '"]').attr('cell-nv').match(/[s][k]/i);

      var ht = $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-na"] [cell-nv^="[-lg"]').height();
      var wt = $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-na"]').width();

      if (eleFx == 'fx') {
        $('[cell-nv^="' + nvValue + '"]').closest('header').css({ 'position': 'fixed', 'zIndex': '9999999' });
      }
      if (eleSk == 'sk') {
        $('[cell-nv^="' + nvValue + '"]').closest('header').css({ 'position': 'sticky', 'zIndex': '9999999' });
      }

      var width = $(window).width();
      if (width >= 1484.99 && width <= 2500) {
        if (eleH == 'h') {
          $('[cell-nv^="' + nvValue + '"]').find('[cell-nv^="[-na"]').css('height', '' + height[1] + 'px');
          $('[cell-nv^="' + nvValue + '"]').find('[cell-nv^="[-lg"]').css('height', '' + height[1] + 'px');
        }
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-lg"]').css({ 'zIndex': '9999999', 'position': 'relative' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').css({ 'marginTop': '0px' })
        $('[cell-nv^="' + nvValue + '"][cell-nv$="]"][cell-nv*="-sr"] [cell-nv^="[-li"]').css({ 'marginLeft': '0px', 'transition': '.1s' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').css({ 'zIndex': '9999999' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').slideDown()
      }
      if (width >= 1199.99 && width <= 1484.98) {
        if (eleH == 'h') {
          $('[cell-nv^="' + nvValue + '"]').find('[cell-nv^="[-na"]').css('height', '' + height[1] + 'px');
          $('[cell-nv^="' + nvValue + '"]').find('[cell-nv^="[-lg"]').css('height', '' + height[1] + 'px');
        }
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-lg"]').css({ 'zIndex': '9999999', 'position': 'relative' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').css({ 'marginTop': '0px' })
        $('[cell-nv^="' + nvValue + '"][cell-nv$="]"][cell-nv*="-sr"] [cell-nv^="[-li"]').css({ 'marginLeft': '0px', 'transition': '.1s' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').css({ 'zIndex': '9999999' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').slideDown()
      }
      if (width >= 991.99 && width <= 1199.98) {
        if (eleH == 'h') {
          $('[cell-nv^="' + nvValue + '"]').find('[cell-nv^="[-na"]').css('height', '' + height[1] + 'px');
          $('[cell-nv^="' + nvValue + '"]').find('[cell-nv^="[-lg"]').css('height', '' + height[1] + 'px');
        }
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-lg"]').css({ 'zIndex': '9999999', 'position': 'relative' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').css({ 'marginTop': '0px' })
        $('[cell-nv^="' + nvValue + '"][cell-nv$="]"][cell-nv*="-sr"] [cell-nv^="[-li"]').css({ 'marginLeft': '0px', 'transition': '.1s' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').css({ 'zIndex': '9999999' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').slideDown()
      }
      if (width >= 767.99 && width <= 991.98) {
        if (eleH == 'h') {
          $('[cell-nv^="' + nvValue + '"]').find('[cell-nv^="[-na"]').css('height', 'auto');
          $('[cell-nv^="' + nvValue + '"]').find('[cell-nv^="[-lg"]').css('height', 'auto');
        }
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-lg"]').css({ 'zIndex': '9999999', 'position': 'absolute' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').css({ 'marginTop': '' + ht + 'px' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').css({ 'zIndex': '999999' })
      }
      if (width >= 575.99 && width <= 767.98) {
        if (eleH == 'h') {
          $('[cell-nv^="' + nvValue + '"]').find('[cell-nv^="[-na"]').css('height', 'auto');
          $('[cell-nv^="' + nvValue + '"]').find('[cell-nv^="[-lg"]').css('height', 'auto');
        }
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-lg"]').css({ 'zIndex': '9999999', 'position': 'absolute' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').css({ 'marginTop': '' + ht + 'px' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').css({ 'zIndex': '999999' })
      }
      if (width >= 319.98 && width <= 575.98) {
        if (eleH == 'h') {
          $('[cell-nv^="' + nvValue + '"]').find('[cell-nv^="[-na"]').css('height', 'auto');
          $('[cell-nv^="' + nvValue + '"]').find('[cell-nv^="[-lg"]').css('height', 'auto');
        }
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-lg"]').css({ 'zIndex': '9999999', 'position': 'absolute' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').css({ 'marginTop': '' + ht + 'px' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').css({ 'zIndex': '999999' })
      }
      else if (width < 319.98) {
        if (eleH == 'h') {
          $('[cell-nv^="' + nvValue + '"]').find('[cell-nv^="[-na"]').css('height', 'auto');
          $('[cell-nv^="' + nvValue + '"]').find('[cell-nv^="[-lg"]').css('height', 'auto');
        }
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-lg"]').css({ 'zIndex': '9999999', 'position': 'absolute' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').css({ 'marginTop': '' + ht + 'px' })
        $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').css({ 'zIndex': '999999' })
      }

      var countL = 0;
      $('[cell-nv^="' + nvValue + '"][cell-nv$="]"][cell-nv*="-sl"] button').click(function () {

        var eleSl = $('[cell-nv^="' + nvValue + '"]').attr('cell-nv').match(/[s][l]/i);

        countL++;
        if (countL % 2 != 0) {
          if (eleSl == 'sl') {
            $(this).closest('[cell-nv^="[-nv"][cell-nv$="]"][cell-nv*="-sl"]').find('[cell-nv^="[-li"]').css('margin-left', '-100%');
            $(this).closest('[cell-nv^="[-nv"][cell-nv$="]"][cell-nv*="-sl"]').find('[cell-nv^="[-li"]').css('transition', 'margin-left 2s');
          }
        }
        if (countL % 2 == 0) {
          if (eleSl == 'sl') {
            $(this).closest('[cell-nv^="[-nv"][cell-nv$="]"][cell-nv*="-sl"]').find('[cell-nv^="[-li"]').css('margin-left', '0');
            $(this).closest('[cell-nv^="[-nv"][cell-nv$="]"][cell-nv*="-sl"]').find('[cell-nv^="[-li"]').css('transition', 'margin-left 2s');
          }
        }
      })
      var countR = 0;
      $('[cell-nv^="' + nvValue + '"][cell-nv$="]"][cell-nv*="-sr"] button').click(function () {
        var eleSr = $('[cell-nv^="' + nvValue + '"]').attr('cell-nv').match(/[s][r]/i);
        countR++;
        if (countR % 2 != 0) {
          if (eleSr == 'sr') {
            $(this).find('[cell-nv^="[-li"]').css('margin-left', '100%');
            $(this).find('[cell-nv^="[-li"]').css('transition', 'margin-left 2s');
          }
        }
        if (countR % 2 == 0) {
          if (eleSr == 'sr') {
            $(this).find('[cell-nv^="[-li"]').css('margin-left', '0');
            $(this).find('[cell-nv^="[-li"]').css('transition', 'margin-left 2s');
          }
        }
      })
      var countT = 0;
      $('[cell-nv^="' + nvValue + '"][cell-nv$="]"][cell-nv*="-st"] button').click(function () {
        var eleSt = $('[cell-nv^="' + nvValue + '"]').attr('cell-nv').match(/[s][t]/i);
        countT++;
        var ht = $('[cell-nv^="[-nv"] [cell-nv^="[-lg"]').height();
        $('[cell-nv^="[-nv"] [cell-nv^="[-li"]').css({ 'marginTop': '' + ht + 'px' })
        if (countT % 2 != 0) {
          if (eleSt == 'st') {
            $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').slideUp()
          }
        }
        if (countT % 2 == 0) {
          if (eleSt == 'st') {
            $('[cell-nv^="' + nvValue + '"] [cell-nv^="[-li"]').slideDown()
          }
        }
      })
    })

  })
    .resize();