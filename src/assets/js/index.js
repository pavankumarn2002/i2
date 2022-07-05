var colors;

//For Transfering Page Contents From One Page To Other Page Using Local Storage (Without Ajax)
$(document).ready(function () {
  $("[cell-pc]").each(function () {
    var pc = $(this).attr('cell-pc').match(/[-][p][c](\d{1,})[^\w\*](\d{1,})/i);
    eleSe = $(this).attr('cell-pc').match(/[s][e]/i);
    eleRe = $(this).attr('cell-pc').match(/[r][e]/i);
    var dum = pc[1];
    var num = pc[2];
    //Using Local sTorage With Out Live Server
    if (pc[1] == dum && pc[2] == num) {
      if (eleSe == 'se') {
        var v = $('[cell-pc^="[-pc' + pc[1] + '(' + pc[2] + '):-se"]').html();
        localStorage.setItem('a-details' + pc[1] + '(' + pc[2] + ')', v);
      }
      if (eleRe == 're') {
        var aDetails = localStorage.getItem('a-details' + pc[1] + '(' + pc[2] + ')');
        $('[cell-pc^="[-pc' + pc[1] + '(' + pc[2] + '):-re"]').append(aDetails);
      }
    }
  })
})
// For Input & Select Values
$(document).ready(function () {
  // For Input Values
  $(".ac-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "ac-values-" + index);
  })
  $(".ac-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "ac-output-" + index);
  })
  $(".ac-values").keyup(function () {
    var getId = this.id;
    var value = $(this).val();
    var output = getId.substring(10);
    $('#ac-output-' + output + '').attr('cell-a', "[" + value + "]");
  });
  // For Select Values
  $(".column-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "column-values-" + index);
  })
  $(".output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "output-" + index);
  })
  $('.column-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.column-values').prop("id");
      var output = getId.substring(14);
      $('#output-' + output + '').attr('cell-c', "[" + values + "]");

    }
  });
});
$(document).ready(function () {
  $("[cell-in^='[-se'] [cell-in^='[-ob']").hide();
});

//For Tab
$(document).ready(function () {
  $(".tab-container").find(".tab-list").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "tab-list-" + index);
  })
  $(".tab-container").find(".content").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "content-" + index);
  })
  $(".tab-container .tab-list").click(function () {
    var getId = this.id;
    var output = getId.substring(9);
    $('.tab-container #' + getId + '').toggleClass("active");
    $('.tab-container .tab-list:not(.tab-container #' + getId + ')').removeClass("active");
    $('.tab-container #content-' + output + '').slideToggle();
    $('.tab-container .content:not(.tab-container #content-' + output + ')').slideUp();
  });
});

$(document).ready(function () {
  // For Slide Open And Close
  $(".close").click(function () {
    $('div[cell-Sl^="["][cell-Sl$="]"][cell-Sl*="-so"]').attr('cell-Sl', '[-sc]');
  });
  $(".open").click(function () {
    $('div[cell-Sl^="["][cell-Sl$="]"][cell-Sl*="-sc"]').attr('cell-Sl', '[-so]');
  });
});
$(document).ready(function () {
  // For Version Page
  //For Column Actions 
  $(".column-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "column-values-" + index);
  })
  $(".output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "output-" + index);
  })
  $('.column-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.column-values').prop("id");
      var output = getId.substring(14);
      $('#output-' + output + '').attr('cell-c', "[" + values + "]");
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
    }
  });
});
$(document).ready(function () {
  //For Flex Actions 
  $(".sequence-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "sequence-values-" + index);
  })
  $(".sequence-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "sequence-output-" + index);
  })
  $('.sequence-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.sequence-values').prop("id");
      var output = getId.substring(16);
      $('#sequence-output-' + output + '').attr('cell-Q', "[" + values + "]")
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
    }
  })
});
$(document).ready(function () {
  $(".code-accord").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "code-accord-" + index);
  })
  $(".code-text").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "code-text-" + index);
  })
  $(".code-content").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "code-content-" + index);
  })
  $(".code-accord .code-text").click(function () {
    var getId = this.id;
    var output = getId.substring(10);
    $('.code-accord  #' + getId + '').toggleClass("active");
    $('.code-accord .code-text:not(.code-accord  #' + getId + ')').removeClass("active");
    $('.code-accord #code-content-' + output + '').slideToggle();
    $('.code-accord .code-content:not(.code-accord #code-content-' + output + ')').slideUp();

  });
});
$(document).ready(function () {
  $(".width-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "width-values-" + index);
  })
  $(".width-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "width-output-" + index);
  })

  $('.width-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.width-values').prop("id");
      var output = getId.substring(13);
      $('#width-output-' + output + '').attr('cell-w', "[" + values + "]")
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
      })
        .resize();
    }
  });
});
$(document).ready(function () {
  $(".height-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "height-values-" + index);
  })
  $(".height-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "height-output-" + index);
  })
  $('.height-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.height-values').prop("id");
      var output = getId.substring(14);
      $('#height-output-' + output + '').attr('cell-h', "[" + values + "]")
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
      })

        .resize();
    }
  });
});
$(document).ready(function () {
  $(".pad-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "pad-values-" + index);
  })
  $(".pad-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "pad-output-" + index);
  })
  $('.pad-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.pad-values').prop("id");
      var output = getId.substring(11);
      $('#pad-output-' + output + '').attr('cell-p', "[" + values + "]")
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
            $(this).css('padding', '0px 0px 0px ' + paddingLeft[1] + 'px');
          }
          if (ele != 'l') {
            if (eleD == 'dl') {
              $(this).css('padding', '0px 0px 0px ' + paddingLeftDesk[1] + 'px');
            }
            if (eleL == 'll' & eleD != 'dl') {
              $(this).css('padding', '0px 0px 0px ' + paddingLeftLarge[1] + 'px');
            }
            if (eleT == 'tl' & eleD != 'dl' & eleL != 'll') {
              $(this).css('padding', '0px 0px 0px ' + paddingLeftTab[1] + 'px');
            }
            if (eleM == 'ml' & eleD != 'dl' & eleL != 'll' & eleT != 'tl') {
              $(this).css('padding', '0px 0px 0px ' + paddingLeftMobile[1] + 'px');
            }
            if (eleS == 'sl' & eleD != 'dl' & eleL != 'll' & eleT != 'tl' & eleM != 'ml') {
              $(this).css('padding', '0px 0px 0px ' + paddingLeftSmall[1] + 'px');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'dl') {
              $(this).css('padding', '0px 0px 0px ' + paddingLeftDesk[1] + 'px');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'dl') {
              $(this).css('padding', '0px 0px 0px ' + paddingLeftDesk[1] + 'px');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'll') {
              $(this).css('padding', '0px 0px 0px ' + paddingLeftLarge[1] + 'px');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tl') {
              $(this).css('padding', '0px 0px 0px ' + paddingLeftTab[1] + 'px');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'ml') {
              $(this).css('padding', '0px 0px 0px ' + paddingLeftMobile[1] + 'px');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'sl') {
              $(this).css('padding', '0px 0px 0px ' + paddingLeftSmall[1] + 'px');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'sl') {
              $(this).css('padding', '0px 0px 0px ' + paddingLeftSmall[1] + 'px');
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
            $(this).css('padding', '0px ' + paddingRight[1] + 'px 0px 0px');
          }
          if (ele != 'r') {
            if (eleD == 'dr') {
              $(this).css('padding', '0px ' + paddingRightDesk[1] + 'px 0px 0px');
            }
            if (eleL == 'lr' & eleD != 'dr') {
              $(this).css('padding', '0px ' + paddingRightLarge[1] + 'px 0px 0px');
            }
            if (eleT == 'tr' & eleD != 'dr' & eleL != 'lr') {
              $(this).css('padding', '0px ' + paddingRightTab[1] + 'px 0px 0px');
            }
            if (eleM == 'mr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr') {
              $(this).css('padding', '0px ' + paddingRightMobile[1] + 'px 0px 0px');
            }
            if (eleS == 'sr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr' & eleM != 'mr') {
              $(this).css('padding', '0px ' + paddingRightSmall[1] + 'px 0px 0px');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'dr') {
              $(this).css('padding', '0px ' + paddingRightDesk[1] + 'px 0px 0px');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'dr') {
              $(this).css('padding', '0px ' + paddingRightDesk[1] + 'px 0px 0px');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'lr') {
              $(this).css('padding', '0px ' + paddingRightLarge[1] + 'px 0px 0px');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tr') {
              $(this).css('padding', '0px ' + paddingRightTab[1] + 'px 0px 0px');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'mr') {
              $(this).css('padding', '0px ' + paddingRightMobile[1] + 'px 0px 0px');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'sr') {
              $(this).css('padding', '0px ' + paddingRightSmall[1] + 'px 0px 0px');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'sr') {
              $(this).css('padding', '0px ' + paddingRightSmall[1] + 'px 0px 0px');
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
            $(this).css('padding', '' + paddingTop[1] + 'px 0px 0px 0px');
          }
          if (ele != 't') {
            if (eleD == 'dt') {
              $(this).css('padding', '' + paddingTopDesk[1] + 'px 0px 0px 0px');
            }
            if (eleL == 'lt' & eleD != 'dt') {
              $(this).css('padding', '' + paddingTopLarge[1] + 'px 0px 0px 0px');
            }
            if (eleT == 'tt' & eleD != 'dt' & eleL != 'lt') {
              $(this).css('padding', '' + paddingTopTab[1] + 'px 0px 0px 0px');
            }
            if (eleM == 'mt' & eleD != 'dt' & eleL != 'lt' & eleT != 'tt') {
              $(this).css('padding', '' + paddingTopMobile[1] + 'px 0px 0px 0px');
            }
            if (eleS == 'st' & eleD != 'dt' & eleL != 'lt' & eleT != 'tt' & eleM != 'mt') {
              $(this).css('padding', '' + paddingTopSmall[1] + 'px 0px 0px 0px');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'dt') {
              $(this).css('padding', '' + paddingTopDesk[1] + 'px 0px 0px 0px');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'dt') {
              $(this).css('padding', '' + paddingTopDesk[1] + 'px 0px 0px 0px');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'lt') {
              $(this).css('padding', '' + paddingTopLarge[1] + 'px 0px 0px 0px');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tt') {
              $(this).css('padding', '' + paddingTopTab[1] + 'px 0px 0px 0px');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'mt') {
              $(this).css('padding', '' + paddingTopMobile[1] + 'px 0px 0px 0px');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'st') {
              $(this).css('padding', '' + paddingTopSmall[1] + 'px 0px 0px 0px');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'st') {
              $(this).css('padding', '' + paddingTopSmall[1] + 'px 0px 0px 0px');
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
            $(this).css('padding', '0px 0px ' + paddingBottom[1] + 'px 0px');
          }
          if (ele != 'b') {
            if (eleD == 'db') {
              $(this).css('padding', '0px 0px ' + paddingBottomDesk[1] + 'px 0px');
            }
            if (eleL == 'lb' & eleD != 'db') {
              $(this).css('padding', '0px 0px ' + paddingBottomLarge[1] + 'px 0px');
            }
            if (eleT == 'tb' & eleD != 'db' & eleL != 'lb') {
              $(this).css('padding', '0px 0px ' + paddingBottomTab[1] + 'px 0px');
            }
            if (eleM == 'mb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb') {
              $(this).css('padding', '0px 0px ' + paddingBottomMobile[1] + 'px 0px');
            }
            if (eleS == 'sb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb' & eleM != 'mb') {
              $(this).css('padding', '0px 0px ' + paddingBottomSmall[1] + 'px 0px');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'db') {
              $(this).css('padding', '0px 0px ' + paddingBottomDesk[1] + 'px 0px');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'db') {
              $(this).css('padding', '0px 0px ' + paddingBottomDesk[1] + 'px 0px');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'lb') {
              $(this).css('padding', '0px 0px ' + paddingBottomLarge[1] + 'px 0px');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tb') {
              $(this).css('padding', '0px 0px ' + paddingBottomTab[1] + 'px 0px');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'mb') {
              $(this).css('padding', '0px 0px ' + paddingBottomMobile[1] + 'px 0px');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'sb') {
              $(this).css('padding', '0px 0px ' + paddingBottomSmall[1] + 'px 0px');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'sb') {
              $(this).css('padding', '0px 0px ' + paddingBottomSmall[1] + 'px 0px');
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
            $(this).css('padding', '0% 0% 0% ' + paddingLeft[1] + '%');
          }
          if (ele != 'l.') {
            if (eleD == 'dl.') {
              $(this).css('padding', '0% 0% 0% ' + paddingLeftDesk[1] + '%');
            }
            if (eleL == 'll.' & eleD != 'dl.') {
              $(this).css('padding', '0% 0% 0% ' + paddingLeftLarge[1] + '%');
            }
            if (eleT == 'tl.' & eleD != 'dl.' & eleL != 'll.') {
              $(this).css('padding', '0% 0% 0% ' + paddingLeftTab[1] + '%');
            }
            if (eleM == 'ml.' & eleD != 'dl.' & eleL != 'll.' & eleT != 'tl.') {
              $(this).css('padding', '0% 0% 0% ' + paddingLeftMobile[1] + '%');
            }
            if (eleS == 'sl.' & eleD != 'dl.' & eleL != 'll.' & eleT != 'tl.' & eleM != 'ml.') {
              $(this).css('padding', '0% 0% 0% ' + paddingLeftSmall[1] + '%');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'dl.') {
              $(this).css('padding', '0% 0% 0% ' + paddingLeftDesk[1] + '%');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'dl.') {
              $(this).css('padding', '0% 0% 0% ' + paddingLeftDesk[1] + '%');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'll.') {
              $(this).css('padding', '0% 0% 0% ' + paddingLeftLarge[1] + '%');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tl.') {
              $(this).css('padding', '0% 0% 0% ' + paddingLeftTab[1] + '%');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'ml.') {
              $(this).css('padding', '0% 0% 0% ' + paddingLeftMobile[1] + '%');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'sl.') {
              $(this).css('padding', '0% 0% 0% ' + paddingLeftSmall[1] + '%');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'sl.') {
              $(this).css('padding', '0% 0% 0% ' + paddingLeftSmall[1] + '%');
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
            $(this).css('padding', '0% ' + paddingRight[1] + '% 0% 0%');
          }
          if (ele != 'r.') {
            if (eleD == 'dr.') {
              $(this).css('padding', '0% ' + paddingRightDesk[1] + '% 0% 0%');
            }
            if (eleL == 'lr.' & eleD != 'dr.') {
              $(this).css('padding', '0% ' + paddingRightLarge[1] + '% 0% 0%');
            }
            if (eleT == 'tr.' & eleD != 'dr.' & eleL != 'lr.') {
              $(this).css('padding', '0px ' + paddingRightTab[1] + 'px 0px 0px');
            }
            if (eleM == 'mr.' & eleD != 'dr.' & eleL != 'lr.' & eleT != 'tr.') {
              $(this).css('padding', '0% ' + paddingRightMobile[1] + '% 0% 0%');
            }
            if (eleS == 'sr.' & eleD != 'dr.' & eleL != 'lr.' & eleT != 'tr.' & eleM != 'mr.') {
              $(this).css('padding', '0% ' + paddingRightSmall[1] + '% 0% 0%');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'dr.') {
              $(this).css('padding', '0% ' + paddingRightDesk[1] + '% 0% 0%');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'dr.') {
              $(this).css('padding', '0% ' + paddingRightDesk[1] + '% 0% 0%');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'lr.') {
              $(this).css('padding', '0% ' + paddingRightLarge[1] + '% 0% 0%');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tr.') {
              $(this).css('padding', '0% ' + paddingRightTab[1] + '% 0% 0%');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'mr.') {
              $(this).css('padding', '0% ' + paddingRightMobile[1] + '% 0% 0%');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'sr.') {
              $(this).css('padding', '0% ' + paddingRightSmall[1] + '% 0% 0%');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'sr.') {
              $(this).css('padding', '0% ' + paddingRightSmall[1] + '% 0% 0%');
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
            $(this).css('padding', '' + paddingTop[1] + '% 0% 0% 0%');
          }
          if (ele != 't.') {
            if (eleD == 'dt.') {
              $(this).css('padding', '' + paddingTopDesk[1] + '% 0% 0% 0%');
            }
            if (eleL == 'lt.' & eleD != 'dt.') {
              $(this).css('padding', '' + paddingTopLarge[1] + '% 0% 0% 0%');
            }
            if (eleT == 'tt.' & eleD != 'dt.' & eleL != 'lt.') {
              $(this).css('padding', '' + paddingTopTab[1] + '% 0% 0% 0%');
            }
            if (eleM == 'mt.' & eleD != 'dt.' & eleL != 'lt.' & eleT != 'tt.') {
              $(this).css('padding', '' + paddingTopMobile[1] + '% 0% 0% 0%');
            }
            if (eleS == 'st.' & eleD != 'dt.' & eleL != 'lt.' & eleT != 'tt.' & eleM != 'mt.') {
              $(this).css('padding', '' + paddingTopSmall[1] + '% 0% 0% 0%');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'dt.') {
              $(this).css('padding', '' + paddingTopDesk[1] + '% 0% 0% 0%');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'dt.') {
              $(this).css('padding', '' + paddingTopDesk[1] + '% 0% 0% 0%');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'lt.') {
              $(this).css('padding', '' + paddingTopLarge[1] + '% 0% 0% 0%');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tt.') {
              $(this).css('padding', '' + paddingTopTab[1] + '% 0% 0% 0%');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'mt.') {
              $(this).css('padding', '' + paddingTopMobile[1] + '% 0% 0% 0%');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'st.') {
              $(this).css('padding', '' + paddingTopSmall[1] + '% 0% 0% 0%');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'st.') {
              $(this).css('padding', '' + paddingTopSmall[1] + '% 0% 0% 0%');
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
            $(this).css('padding', '0% 0% ' + paddingBottom[1] + '% 0%');
          }
          if (ele != 'b.') {
            if (eleD == 'db.') {
              $(this).css('padding', '0% 0% ' + paddingBottomDesk[1] + '% 0%');
            }
            if (eleL == 'lb.' & eleD != 'db.') {
              $(this).css('padding', '0% 0% ' + paddingBottomLarge[1] + '% 0%');
            }
            if (eleT == 'tb.' & eleD != 'db.' & eleL != 'lb.') {
              $(this).css('padding', '0% 0% ' + paddingBottomTab[1] + '% 0%');
            }
            if (eleM == 'mb.' & eleD != 'db.' & eleL != 'lb.' & eleT != 'tb.') {
              $(this).css('padding', '0% 0% ' + paddingBottomMobile[1] + '% 0%');
            }
            if (eleS == 'sb.' & eleD != 'db.' & eleL != 'lb.' & eleT != 'tb.' & eleM != 'mb.') {
              $(this).css('padding', '0% 0% ' + paddingBottomSmall[1] + '% 0%');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'db.') {
              $(this).css('padding', '0% 0% ' + paddingBottomDesk[1] + '% 0%');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'db.') {
              $(this).css('padding', '0% 0% ' + paddingBottomDesk[1] + '% 0%');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'lb.') {
              $(this).css('padding', '0% 0% ' + paddingBottomLarge[1] + '% 0%');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tb.') {
              $(this).css('padding', '0% 0% ' + paddingBottomTab[1] + '% 0%');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'mb.') {
              $(this).css('padding', '0% 0% ' + paddingBottomMobile[1] + '% 0%');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'sb.') {
              $(this).css('padding', '0% 0% ' + paddingBottomSmall[1] + '% 0%');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'sb.') {
              $(this).css('padding', '0% 0% ' + paddingBottomSmall[1] + '% 0%');
            }
          }
        })
      })

        .resize();
    }
  });
});
$(document).ready(function () {
  $(".marg-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "marg-values-" + index);
  })
  $(".marg-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "marg-output-" + index);
  })
  $('.marg-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.marg-values').prop("id");
      var output = getId.substring(12);
      $('#marg-output-' + output + '').attr('cell-m', "[" + values + "]")
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
            $(this).css('margin', '0px 0px 0px ' + marginLeft[1] + 'px');
          }
          if (ele != 'l') {
            if (eleD == 'dl') {
              $(this).css('margin', '0px 0px 0px ' + marginLeftDesk[1] + 'px');
            }
            if (eleL == 'll' & eleD != 'dl') {
              $(this).css('margin', '0px 0px 0px ' + marginLeftLarge[1] + 'px');
            }
            if (eleT == 'tl' & eleD != 'dl' & eleL != 'll') {
              $(this).css('margin', '0px 0px 0px ' + marginLeftTab[1] + 'px');
            }
            if (eleM == 'ml' & eleD != 'dl' & eleL != 'll' & eleT != 'tl') {
              $(this).css('margin', '0px 0px 0px ' + marginLeftMobile[1] + 'px');
            }
            if (eleS == 'sl' & eleD != 'dl' & eleL != 'll' & eleT != 'tl' & eleM != 'ml') {
              $(this).css('margin', '0px 0px 0px ' + marginLeftSmall[1] + 'px');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'dl') {
              $(this).css('margin', '0px 0px 0px ' + marginLeftDesk[1] + 'px');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'dl') {
              $(this).css('margin', '0px 0px 0px ' + marginLeftDesk[1] + 'px');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'll') {
              $(this).css('margin', '0px 0px 0px ' + marginLeftLarge[1] + 'px');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tl') {
              $(this).css('margin', '0px 0px 0px ' + marginLeftTab[1] + 'px');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'ml') {
              $(this).css('margin', '0px 0px 0px ' + marginLeftMobile[1] + 'px');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'sl') {
              $(this).css('margin', '0px 0px 0px ' + marginLeftSmall[1] + 'px');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'sl') {
              $(this).css('margin', '0px 0px 0px ' + marginLeftSmall[1] + 'px');
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
            $(this).css('margin', '0px ' + marginRight[1] + 'px 0px 0px');
          }
          if (ele != 'r') {
            if (eleD == 'dr') {
              $(this).css('margin', '0px ' + marginRightDesk[1] + 'px 0px 0px');
            }
            if (eleL == 'lr' & eleD != 'dr') {
              $(this).css('margin', '0px ' + marginRightLarge[1] + 'px 0px 0px');
            }
            if (eleT == 'tr' & eleD != 'dr' & eleL != 'lr') {
              $(this).css('margin', '0px ' + marginRightTab[1] + 'px 0px 0px');
            }
            if (eleM == 'mr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr') {
              $(this).css('margin', '0px ' + marginRightMobile[1] + 'px 0px 0px');
            }
            if (eleS == 'sr' & eleD != 'dr' & eleL != 'lr' & eleT != 'tr' & eleM != 'mr') {
              $(this).css('margin', '0px ' + marginRightSmall[1] + 'px 0px 0px');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'dr') {
              $(this).css('margin', '0px ' + marginRightDesk[1] + 'px 0px 0px');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'dr') {
              $(this).css('margin', '0px ' + marginRightDesk[1] + 'px 0px 0px');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'lr') {
              $(this).css('margin', '0px ' + marginRightLarge[1] + 'px 0px 0px');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tr') {
              $(this).css('margin', '0px ' + marginRightTab[1] + 'px 0px 0px');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'mr') {
              $(this).css('margin', '0px ' + marginRightMobile[1] + 'px 0px 0px');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'sr') {
              $(this).css('margin', '0px ' + marginRightSmall[1] + 'px 0px 0px');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'sr') {
              $(this).css('margin', '0px ' + marginRightSmall[1] + 'px 0px 0px');
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
            $(this).css('margin', '' + marginTop[1] + 'px 0px 0px 0px');
          }
          if (ele != 't') {
            if (eleD == 'dt') {
              $(this).css('margin', '' + marginTopDesk[1] + 'px 0px 0px 0px');
            }
            if (eleL == 'lt' & eleD != 'dt') {
              $(this).css('margin', '' + marginTopLarge[1] + 'px 0px 0px 0px');
            }
            if (eleT == 'tt' & eleD != 'dt' & eleL != 'lt') {
              $(this).css('margin', '' + marginTopTab[1] + 'px 0px 0px 0px');
            }
            if (eleM == 'mt' & eleD != 'dt' & eleL != 'lt' & eleT != 'tt') {
              $(this).css('margin', '' + marginTopMobile[1] + 'px 0px 0px 0px');
            }
            if (eleS == 'st' & eleD != 'dt' & eleL != 'lt' & eleT != 'tt' & eleM != 'mt') {
              $(this).css('margin', '' + marginTopSmall[1] + 'px 0px 0px 0px');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'dt') {
              $(this).css('margin', '' + marginTopDesk[1] + 'px 0px 0px 0px');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'dt') {
              $(this).css('margin', '' + marginTopDesk[1] + 'px 0px 0px 0px');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'lt') {
              $(this).css('margin', '' + marginTopLarge[1] + 'px 0px 0px 0px');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tt') {
              $(this).css('margin', '' + marginTopTab[1] + 'px 0px 0px 0px');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'mt') {
              $(this).css('margin', '' + marginTopMobile[1] + 'px 0px 0px 0px');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'st') {
              $(this).css('margin', '' + marginTopSmall[1] + 'px 0px 0px 0px');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'st') {
              $(this).css('margin', '' + marginTopSmall[1] + 'px 0px 0px 0px');
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
            $(this).css('margin', '0px 0px ' + marginBottom[1] + 'px 0px');
          }
          if (ele != 'b') {
            if (eleD == 'db') {
              $(this).css('margin', '0px 0px ' + marginBottomDesk[1] + 'px 0px');
            }
            if (eleL == 'lb' & eleD != 'db') {
              $(this).css('margin', '0px 0px ' + marginBottomLarge[1] + 'px 0px');
            }
            if (eleT == 'tb' & eleD != 'db' & eleL != 'lb') {
              $(this).css('margin', '0px 0px ' + marginBottomTab[1] + 'px 0px');
            }
            if (eleM == 'mb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb') {
              $(this).css('margin', '0px 0px ' + marginBottomMobile[1] + 'px 0px');
            }
            if (eleS == 'sb' & eleD != 'db' & eleL != 'lb' & eleT != 'tb' & eleM != 'mb') {
              $(this).css('margin', '0px 0px ' + marginBottomSmall[1] + 'px 0px');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'db') {
              $(this).css('margin', '0px 0px ' + marginBottomDesk[1] + 'px 0px');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'db') {
              $(this).css('margin', '0px 0px ' + marginBottomDesk[1] + 'px 0px');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'lb') {
              $(this).css('margin', '0px 0px ' + marginBottomLarge[1] + 'px 0px');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tb') {
              $(this).css('margin', '0px 0px ' + marginBottomTab[1] + 'px 0px');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'mb') {
              $(this).css('margin', '0px 0px ' + marginBottomMobile[1] + 'px 0px');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'sb') {
              $(this).css('margin', '0px 0px ' + marginBottomSmall[1] + 'px 0px');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'sb') {
              $(this).css('margin', '0px 0px ' + marginBottomSmall[1] + 'px 0px');
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
            $(this).css('margin', '0% 0% 0% ' + marginLeft[1] + '%');
          }
          if (ele != 'l.') {
            if (eleD == 'dl.') {
              $(this).css('margin', '0% 0% 0% ' + marginLeftDesk[1] + '%');
            }
            if (eleL == 'll.' & eleD != 'dl') {
              $(this).css('margin', '0% 0% 0% ' + marginLeftLarge[1] + '%');
            }
            if (eleT == 'tl.' & eleD != 'dl.' & eleL != 'll.') {
              $(this).css('margin', '0% 0% 0% ' + marginLeftTab[1] + '%');
            }
            if (eleM == 'ml.' & eleD != 'dl.' & eleL != 'll.' & eleT != 'tl.') {
              $(this).css('margin', '0% 0% 0% ' + marginLeftMobile[1] + '%');
            }
            if (eleS == 'sl.' & eleD != 'dl.' & eleL != 'll.' & eleT != 'tl.' & eleM != 'ml.') {
              $(this).css('margin', '0% 0% 0% ' + marginLeftSmall[1] + '%');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'dl.') {
              $(this).css('margin', '0% 0% 0% ' + marginLeftDesk[1] + '%');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'dl.') {
              $(this).css('margin', '0% 0% 0% ' + marginLeftDesk[1] + '%');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'll.') {
              $(this).css('margin', '0% 0% 0% ' + marginLeftLarge[1] + '%');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tl.') {
              $(this).css('margin', '0% 0% 0% ' + marginLeftTab[1] + '%');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'ml.') {
              $(this).css('margin', '0% 0% 0% ' + marginLeftMobile[1] + '%');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'sl.') {
              $(this).css('margin', '0% 0% 0% ' + marginLeftSmall[1] + '%');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'sl.') {
              $(this).css('margin', '0% 0% 0% ' + marginLeftSmall[1] + '%');
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
            $(this).css('margin', '0% ' + marginRight[1] + '% 0% 0%');
          }
          if (ele != 'r.') {
            if (eleD == 'dr.') {
              $(this).css('margin', '0% ' + marginRightDesk[1] + '% 0% 0%');
            }
            if (eleL == 'lr.' & eleD != 'dr.') {
              $(this).css('margin', '0% ' + marginRightLarge[1] + '% 0% 0%');
            }
            if (eleT == 'tr.' & eleD != 'dr.' & eleL != 'lr.') {
              $(this).css('margin', '0% ' + marginRightTab[1] + '% 0% 0%');
            }
            if (eleM == 'mr.' & eleD != 'dr.' & eleL != 'lr.' & eleT != 'tr.') {
              $(this).css('margin', '0% ' + marginRightMobile[1] + '% 0% 0%');
            }
            if (eleS == 'sr.' & eleD != 'dr.' & eleL != 'lr.' & eleT != 'tr.' & eleM != 'mr.') {
              $(this).css('margin', '0% ' + marginRightSmall[1] + '% 0% 0%');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'dr.') {
              $(this).css('margin', '0% ' + marginRightDesk[1] + '% 0% 0%');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'dr.') {
              $(this).css('margin', '0% ' + marginRightDesk[1] + '% 0% 0%');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'lr.') {
              $(this).css('margin', '0% ' + marginRightLarge[1] + '% 0% 0%');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tr.') {
              $(this).css('margin', '0% ' + marginRightTab[1] + '% 0% 0%');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'mr.') {
              $(this).css('margin', '0px ' + marginRightMobile[1] + 'px 0px 0px');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'sr.') {
              $(this).css('margin', '0% ' + marginRightSmall[1] + '% 0% 0%');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'sr.') {
              $(this).css('margin', '0% ' + marginRightSmall[1] + '% 0% 0%');
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
            $(this).css('margin', '' + marginTop[1] + '% 0% 0% 0%');
          }
          if (ele != 't.') {
            if (eleD == 'dt.') {
              $(this).css('margin', '' + marginTopDesk[1] + '% 0% 0% 0%');
            }
            if (eleL == 'lt.' & eleD != 'dt.') {
              $(this).css('margin', '' + marginTopLarge[1] + '% 0% 0% 0%');
            }
            if (eleT == 'tt.' & eleD != 'dt.' & eleL != 'lt.') {
              $(this).css('margin', '' + marginTopTab[1] + '% 0% 0% 0%');
            }
            if (eleM == 'mt.' & eleD != 'dt.' & eleL != 'lt.' & eleT != 'tt.') {
              $(this).css('margin', '' + marginTopMobile[1] + '% 0% 0% 0%');
            }
            if (eleS == 'st.' & eleD != 'dt.' & eleL != 'lt.' & eleT != 'tt.' & eleM != 'mt.') {
              $(this).css('margin', '' + marginTopSmall[1] + '% 0% 0% 0%');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'dt.') {
              $(this).css('margin', '' + marginTopDesk[1] + '% 0% 0% 0%');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'dt.') {
              $(this).css('margin', '' + marginTopDesk[1] + '% 0% 0% 0%');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'lt.') {
              $(this).css('margin', '' + marginTopLarge[1] + '% 0% 0% 0%');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tt.') {
              $(this).css('margin', '' + marginTopTab[1] + '% 0% 0% 0%');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'mt.') {
              $(this).css('margin', '' + marginTopMobile[1] + '% 0% 0% 0%');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'st.') {
              $(this).css('margin', '' + marginTopSmall[1] + '% 0% 0% 0%');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'st.') {
              $(this).css('margin', '' + marginTopSmall[1] + '% 0% 0% 0%');
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
            $(this).css('margin', '0% 0% ' + marginBottom[1] + '% 0%');
          }
          if (ele != 'b.') {
            if (eleD == 'db.') {
              $(this).css('margin', '0% 0% ' + marginBottomDesk[1] + '% 0%');
            }
            if (eleL == 'lb.' & eleD != 'db.') {
              $(this).css('margin', '0% 0% ' + marginBottomLarge[1] + '% 0%');
            }
            if (eleT == 'tb.' & eleD != 'db.' & eleL != 'lb.') {
              $(this).css('margin', '0% 0% ' + marginBottomTab[1] + '% 0%');
            }
            if (eleM == 'mb.' & eleD != 'db.' & eleL != 'lb.' & eleT != 'tb.') {
              $(this).css('margin', '0% 0% ' + marginBottomMobile[1] + '% 0%');
            }
            if (eleS == 'sb.' & eleD != 'db.' & eleL != 'lb.' & eleT != 'tb.' & eleM != 'mb.') {
              $(this).css('margin', '0% 0% ' + marginBottomSmall[1] + '% 0%');
            }
          }

          var width = $(window).width();
          if (width >= 1484.99 && width <= 2500) {
            if (eleD == 'db.') {
              $(this).css('margin', '0% 0% ' + marginBottomDesk[1] + '% 0%');
            }
          }
          if (width >= 1199.99 && width <= 1484.98) {
            if (eleD == 'db.') {
              $(this).css('margin', '0% 0% ' + marginBottomDesk[1] + '% 0%');
            }
          }
          if (width >= 991.99 && width <= 1199.98) {
            if (eleL == 'lb.') {
              $(this).css('margin', '0% 0% ' + marginBottomLarge[1] + '% 0%');
            }
          }
          if (width >= 767.99 && width <= 991.98) {
            if (eleT == 'tb.') {
              $(this).css('margin', '0% 0% ' + marginBottomTab[1] + '% 0%');
            }
          }
          if (width >= 575.99 && width <= 767.98) {
            if (eleM == 'mb.') {
              $(this).css('margin', '0% 0% ' + marginBottomMobile[1] + '% 0%');
            }
          }
          if (width >= 319.98 && width <= 575.98) {
            if (eleS == 'sb.') {
              $(this).css('margin', '0% 0% ' + marginBottomSmall[1] + '% 0%');
            }
          }
          else if (width < 319.98) {
            if (eleS == 'sb.') {
              $(this).css('margin', '0% 0% ' + marginBottomSmall[1] + '% 0%');
            }
          }
        })
      })

        .resize();
    }
  });
});
$(document).ready(function () {
  $(".dis-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "dis-values-" + index);
  })
  $(".dis-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "dis-output-" + index);
  })
  $('.dis-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.dis-values').prop("id");
      var output = getId.substring(11);
      $('#dis-output-' + output + '').attr('cell-d', "[" + values + "]")
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
    }
  });
});
$(document).ready(function () {
  $(".grid-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "grid-values-" + index);
  })
  $(".grid-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "grid-output-" + index);
  })
  $('.grid-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.grid-values').prop("id");
      var output = getId.substring(12);
      $('#grid-output-' + output + '').attr('cell-G', "[" + values + "]")
      $(window).resize(function () {
        $("[cell-G]").each(function () {
          var ele = $(this).attr('cell-G').match(/[g][c](\d{1,})/i);
          if (ele[0] == 'gc1') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto' });
          }
          if (ele[0] == 'gc2') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto' });
          }
          if (ele[0] == 'gc3') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto' });
          }
          if (ele[0] == 'gc4') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto' });
          }
          if (ele[0] == 'gc5') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto' });
          }
          if (ele[0] == 'gc6') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto' });
          }
          if (ele[0] == 'gc7') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto' });
          }
          if (ele[0] == 'gc8') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto' });
          }
          if (ele[0] == 'gc9') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto' });
          }
          if (ele[0] == 'gc10') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto' });
          }
          if (ele[0] == 'gc11') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto' });
          }
          if (ele[0] == 'gc12') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto' });
          }
          if (ele[0] == 'gc13') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto' });
          }
          if (ele[0] == 'gc14') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto' });
          }
          if (ele[0] == 'gc15') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto' });
          }
          if (ele[0] == 'gc16') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto' });
          }
          if (ele[0] == 'gc17') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto' });
          }
          if (ele[0] == 'gc18') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto' });
          }
          if (ele[0] == 'gc19') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto' });
          }
          if (ele[0] == 'gc20') {
            $(this).css({ 'display': 'grid', 'grid-template-columns': 'auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto' });
          }
        })
      })
        .resize();
    }
  });
});
$(document).ready(function () {
  $(".box-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "box-values-" + index);
  })
  $(".box-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "box-output-" + index);
  })
  $('.box-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.box-values').prop("id");
      var output = getId.substring(11);
      $('#box-output-' + output + '').attr('cell-Gb', "[" + values + "]")
      $(window).resize(function () {
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
    }
  });
});
$(document).ready(function () {
  $(".text-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "text-values-" + index);
  })
  $(".text-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "text-output-" + index);
  })
  $('.text-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.text-values').prop("id");
      var output = getId.substring(12);
      $('#text-output-' + output + '').attr('cell-t', "[" + values + "]")
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
    }
  });
});
$(document).ready(function () {
  $(".ts-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "ts-values-" + index);
  })
  $(".ts-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "ts-output-" + index);
  })
  $('.ts-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.ts-values').prop("id");
      var output = getId.substring(10);
      $('#ts-output-' + output + '').attr('cell-ts', "[" + values + "]")
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
          if (ele == 'l') {
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
          if (ele == 'r') {
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
          if (ele == 't') {
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
          if (ele == 'b') {
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
    }
  });
});
$(document).ready(function () {
  $(".bs-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "bs-values-" + index);
  })
  $(".bs-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "bs-output-" + index);
  })
  $('.bs-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.bs-values').prop("id");
      var output = getId.substring(10);
      $('#bs-output-' + output + '').attr('cell-bs', "[" + values + "]")
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
          if (ele == 'l') {
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
          if (ele == 'r') {
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
          if (ele == 't') {
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
          if (ele == 'b') {
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
    }
  });
});
$(document).ready(function () {
  $(".font-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "font-values-" + index);
  })
  $(".font-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "font-output-" + index);
  })
  $('.font-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.font-values').prop("id");
      var output = getId.substring(12);
      $('#font-output-' + output + '').attr('cell-f', "[" + values + "]")
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
    }
  });
});
$(document).ready(function () {
  $(".border-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "border-values-" + index);
  })
  $(".border-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "border-output-" + index);
  })
  $('.border-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.border-values').prop("id");
      var output = getId.substring(14);
      $('#border-output-' + output + '').attr('cell-b', "[" + values + "]")
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
    }
  });
});
$(document).ready(function () {
  $(".radius-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "radius-values-" + index);
  })
  $(".radius-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "radius-output-" + index);
  })
  $('.radius-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.radius-values').prop("id");
      var output = getId.substring(14);
      $('#radius-output-' + output + '').attr('cell-r', "[" + values + "]")
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
    }
  });
});
$(document).ready(function () {
  $(".bg-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "bg-values-" + index);
  })
  $(".bg-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "bg-output-" + index);
  })
  $('.bg-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.bg-values').prop("id");
      var output = getId.substring(10);
      $('#bg-output-' + output + '').attr('cell-bg', "[" + values + "]")
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
    }
  });
});
$(document).ready(function () {
  $(".over-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "over-values-" + index);
  })
  $(".over-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "over-output-" + index);
  })
  $('.over-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.over-values').prop("id");
      var output = getId.substring(12);
      $('#over-output-' + output + '').attr('cell-o', "[" + values + "]")
    }
  });
});
$(document).ready(function () {
  $(".table-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "table-values-" + index);
  })
  $(".table-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "table-output-" + index);
  })
  $('.table-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.table-values').prop("id");
      var output = getId.substring(13);
      $('#table-output-' + output + '').attr('cell-ta', "[" + values + "]")
    }
  });
});
$(document).ready(function () {
  $(".ac-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "ac-values-" + index);
  })
  $(".ac-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "ac-output-" + index);
  })
  $(".ac-values").keyup(function () {
    var getId = this.id;
    var value = $(this).val();
    var output = getId.substring(10);
    $('#ac-output-' + output + '').attr('cell-a', "[" + value + "]");
    console.log(value)
  });
});
$(document).ready(function () {
  $(".dw-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "dw-values-" + index);
  })
  $(".dw-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "dw-output-" + index);
  })
  $(".dw-values").keyup(function () {
    var getId = this.id;
    var value = $(this).val();
    var output = getId.substring(10);
    $('#dw-output-' + output + '').attr('cell-dw', "[" + value + "]");
    console.log(value)
  });
});
$(document).ready(function () {
  $(".sl-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "sl-values-" + index);
  })
  $(".sl-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "sl-output-" + index);
  })
  $(".sl-values").keyup(function () {
    var getId = this.id;
    var value = $(this).val();
    var output = getId.substring(10);
    $('#sl-output-' + output + '').attr('cell-sl', "[" + value + "]");
    console.log(value)
  });
});
$(document).ready(function () {
  $(".tab-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "tab-values-" + index);
  })
  $(".tab-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "tab-output-" + index);
  })
  $(".tab-values").keyup(function () {
    var getId = this.id;
    var value = $(this).val();
    var output = getId.substring(11);
    $('#tab-output-' + output + '').attr('cell-tb', "[" + value + "]")
    console.log(value)
  });
});
$(document).ready(function () {
  $(".sm-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "sm-values-" + index);
  })
  $(".sm-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "sm-output-" + index);
  })
  $(".sm-values").keyup(function () {
    var getId = this.id;
    var value = $(this).val();
    var output = getId.substring(10);
    $('#sm-output-' + output + '').attr('cell-sm', "[" + value + "]")
    console.log(value)
  });
});
$(document).ready(function () {
  $(".ap-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "ap-values-" + index);
  })
  $(".ap-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "ap-output-" + index);
  })
  $('.ap-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.ap-values').prop("id");
      var output = getId.substring(10);
      $('#ap-output-' + output + '').attr('cell-ap', "[" + values + "]")
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
    }
  });
});
$(document).ready(function () {
  $(".pa-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "pa-values-" + index);
  })
  $(".pa-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "pa-output-" + index);
  })
  $('.pa-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.pa-values').prop("id");
      var output = getId.substring(10);
      $('#pa-output-' + output + '').attr('cell-pa', "[" + values + "]")
    }
  });
});
$(document).ready(function () {
  $(".po-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "po-values-" + index);
  })
  $(".po-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "po-output-" + index);
  })
  $(".po-values").keyup(function () {
    var getId = this.id;
    var value = $(this).val();
    var output = getId.substring(10);
    $('#po-output-' + output + '').attr('cell-po', "[" + value + "]")
  });
});
$(document).ready(function () {
  $(".in-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "in-values-" + index);
  })
  $(".in-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "in-output-" + index);
  })
  $('.in-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.in-values').prop("id");
      var output = getId.substring(10);
      $('#in-output-' + output + '').attr('cell-in', "[" + values + "]")
      $(window).resize(function () {
        $(".input-box").each(function () {
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
          var border = $(this).attr('cell-in').match(/[b][o](\d{1,})[^\w\*](\d{1,})/i);
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


          if (eleB == '-bo') {
            var borderNum = border[2] - 1;
            $(this).find('input').css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
          }
          if (eleBHo == '.bo') {
            $(this).mouseenter(function () {
              var borderHoverNum = borderHover[2] - 1;
              $(this).find('input').css('border', '' + border[1] + 'px solid ' + colors[borderHoverNum] + '');
            })
            $(this).mouseleave(function () {
              var borderNum = border[2] - 1;
              $(this).find('input').css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
            })
          }

          if (eleBl == 'bl') {
            var borderLeftNum = borderLeft[2] - 1;
            $(this).find('input').css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
            $(this).find('input').css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
          }
          if (eleBlHo == '.bl') {
            $(this).hover(function () {
              var borderLeftHoverNum = borderLeftHover[2] - 1;
              $(this).find('input').css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
              $(this).find('input').css('border-left', '' + borderLeftHover[1] + 'px solid ' + colors[borderLeftHoverNum] + '');
            })
            $(this).mouseleave(function () {
              var borderLeftNum = borderLeft[2] - 1;
              $(this).find('input').css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
              $(this).find('input').css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
            })
          }

          if (eleBr == 'br') {
            var borderRightNum = borderRight[2] - 1;
            $(this).find('input').css({ 'botder-top': '0', 'botder-bottom': '0', 'botder-left': '0' })
            $(this).find('input').css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
          }
          if (eleBrHo == '.br') {
            $(this).hover(function () {
              var borderRightHoverNum = borderRightHover[2] - 1;
              $(this).find('input').css({ 'botder-top': '0', 'botder-bottom': '0', 'botder-left': '0' })
              $(this).find('input').css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
            })
          }

          if (eleBt == 'bt') {
            var borderTopNum = borderTop[2] - 1;
            $(this).find('input').css({ 'botder-bottom': '0', 'botder-right': '0', 'botder-left': '0' })
            $(this).find('input').css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
          }
          if (eleBtHo == '.bt') {
            $(this).hover(function () {
              var borderTopHoverNum = borderTopHover[2] - 1;
              $(this).find('input').css({ 'botder-bottom': '0', 'botder-right': '0', 'botder-left': '0' })
              $(this).find('input').css('border-top', '' + borderTopHover[1] + 'px solid ' + colors[borderTopHoverNum] + '');
            })
          }

          if (eleBb == 'bb') {
            var borderBottomNum = borderBottom[2] - 1;
            $(this).find('input').css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
            $(this).find('input').css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
          }
          if (eleBbHo == '.bb') {
            $(this).hover(function () {
              var borderBottomHoverNum = borderBottomHover[2] - 1;
              $(this).find('input').css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
              $(this).find('input').css('border-bottom', '' + borderBottomHover[1] + 'px solid ' + colors[borderBottomHoverNum] + '');
            })
            $(this).mouseleave(function () {
              var borderBottomNum = borderBottom[2] - 1;
              $(this).find('input').css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
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
        $(".icon-box").each(function () {
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

          if (eleTc == 'tc') {
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
            $(this).mouseleave(function () {
              var borderRightNum = borderRight[2] - 1;
              $(this).css({ 'botder-top': '0', 'botder-bottom': '0', 'botder-left': '0' })
              $(this).css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
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
            $(this).mouseleave(function () {
              var borderTopNum = borderTop[2] - 1;
              $(this).css({ 'botder-bottom': '0', 'botder-right': '0', 'botder-left': '0' })
              $(this).css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
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
            $(this).parent('div[cell-in^="["][cell-in$="]"][cell-in*="-ic"]').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
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
        $(".radio-box").each(function () {
          var widthOuter = $(this).attr('cell-in').match(/[w][o][^,]*?(\d{1,})*/i);
          var widthInner = $(this).attr('cell-in').match(/[w][i][^,]*?(\d{1,})*/i);
          var borderOuter = $(this).attr('cell-in').match(/[b][o](\d{1,})[^\w\*](\d{1,})/i);
          var borderOuterHover = $(this).attr('cell-in').match(/[.][b][o](\d{1,})[^\w\*](\d{1,})/i);

          var text = $(this).attr('cell-in').match(/[t][s](\d{1,})[^\w\*](\d{1,})/i);
          var textHover = $(this).attr('cell-in').match(/[.][t][s](\d{1,})[^\w\*](\d{1,})/i);


          var eleWo = $(this).attr('cell-in').match(/[w][o]/i);
          var eleWi = $(this).attr('cell-in').match(/[w][i]/i);

          var eleB = $(this).attr('cell-in').match(/[b][o]/i);
          var eleBHo = $(this).attr('cell-in').match(/[.][b][o]/i);

          var eleTx = $(this).attr('cell-in').match(/[t][s]/i);
          var eleTxHo = $(this).attr('cell-in').match(/[.][t][s]/i);

          if (eleWi == 'wi') {
            $(this).find('input').css({ 'width': '' + widthInner[1] + 'px', 'height': '' + widthInner[1] + 'px' });
          }
          if (eleWo == 'wo') {
            $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-rd"]').css({ 'width': '' + widthOuter[1] + 'px', 'height': '' + widthOuter[1] + 'px' });
          }

          if (eleB == 'bo') {
            var borderOuterNum = borderOuter[2] - 1;
            $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-rd"]').css('border', '' + borderOuter[1] + 'px solid ' + colors[borderOuterNum] + '');
          }
          if (eleBHo == '.bo') {
            $(this).mouseenter(function () {
              var borderOuterHoverNum = borderOuterHover[2] - 1;
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-rd"]').css('border', '' + borderOuter[1] + 'px solid ' + colors[borderOuterHoverNum] + '');
            })
            $(this).mouseleave(function () {
              var borderOuterNum = borderOuter[2] - 1;
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-rd"]').css('border', '' + borderOuter[1] + 'px solid ' + colors[borderOuterNum] + '');
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
        $(".select-area").each(function () {
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
            $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border-radius', '' + radius[1] + 'px');
          }

          if (eleW == 'w') {
            $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('width', '' + width[1] + '%');
          }

          if (eleH == 'h') {
            $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('height', '' + height[1] + 'px');
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

          if (eleTc == 'tc') {
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
            $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
          }
          if (eleBHo == '.bo') {
            $(this).mouseenter(function () {
              var borderHoverNum = borderHover[2] - 1;
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border', '' + border[1] + 'px solid ' + colors[borderHoverNum] + '');
            })
            $(this).mouseleave(function () {
              var borderNum = border[2] - 1;
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border', '' + border[1] + 'px solid ' + colors[borderNum] + '');
            })
          }

          if (eleBl == 'bl') {
            var borderLeftNum = borderLeft[2] - 1;
            $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
            $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
          }
          if (eleBlHo == '.bl') {
            $(this).hover(function () {
              var borderLeftHoverNum = borderLeftHover[2] - 1;
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border-left', '' + borderLeftHover[1] + 'px solid ' + colors[borderLeftHoverNum] + '');
            })
            $(this).mouseleave(function () {
              var borderLeftNum = borderLeft[2] - 1;
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
            })
          }

          if (eleBr == 'br') {
            var borderRightNum = borderRight[2] - 1;
            $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css({ 'botder-top': '0', 'botder-bottom': '0', 'botder-left': '0' })
            $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
          }
          if (eleBrHo == '.br') {
            $(this).hover(function () {
              var borderRightHoverNum = borderRightHover[2] - 1;
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css({ 'botder-top': '0', 'botder-bottom': '0', 'botder-left': '0' })
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
            })
            $(this).mouseleave(function () {
              var borderRightNum = borderRight[2] - 1;
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css({ 'botder-top': '0', 'botder-bottom': '0', 'botder-left': '0' })
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
            })
          }

          if (eleBt == 'bt') {
            var borderTopNum = borderTop[2] - 1;
            $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css({ 'botder-bottom': '0', 'botder-right': '0', 'botder-left': '0' })
            $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
          }
          if (eleBtHo == '.bt') {
            $(this).hover(function () {
              var borderTopHoverNum = borderTopHover[2] - 1;
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css({ 'botder-bottom': '0', 'botder-right': '0', 'botder-left': '0' })
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border-top', '' + borderTopHover[1] + 'px solid ' + colors[borderTopHoverNum] + '');
            })
            $(this).mouseleave(function () {
              var borderTopNum = borderTop[2] - 1;
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css({ 'botder-bottom': '0', 'botder-right': '0', 'botder-left': '0' })
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
            })
          }

          if (eleBb == 'bb') {
            var borderBottomNum = borderBottom[2] - 1;
            $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
            $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
          }
          if (eleBbHo == '.bb') {
            $(this).hover(function () {
              var borderBottomHoverNum = borderBottomHover[2] - 1;
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border-bottom', '' + borderBottomHover[1] + 'px solid ' + colors[borderBottomHoverNum] + '');
            })
            $(this).mouseleave(function () {
              var borderBottomNum = borderBottom[2] - 1;
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
              $(this).find('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
            })
          }

          if (eleTx == 'ts') {
            var textNum = text[2] - 1;
            $(this).css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
            $(this).find('option').css({ 'font-size': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
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
        $(".select-area .box").each(function () {
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
            $(this).find('option').css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
            $(this).find('option').css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
          }
          if (eleBlHo == '.bl') {
            $(this).hover(function () {
              var borderLeftHoverNum = borderLeftHover[2] - 1;
              $(this).find('option').css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
              $(this).find('option').css('border-left', '' + borderLeftHover[1] + 'px solid ' + colors[borderLeftHoverNum] + '');
            })
            $(this).mouseleave(function () {
              var borderLeftNum = borderLeft[2] - 1;
              $(this).find('option').css({ 'botder-top': '0', 'botder-right': '0', 'botder-bottom': '0' })
              $(this).find('option').css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
            })
          }

          if (eleBr == 'br') {
            var borderRightNum = borderRight[2] - 1;
            $(this).find('option').css({ 'botder-top': '0', 'botder-bottom': '0', 'botder-left': '0' })
            $(this).find('option').css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
          }
          if (eleBrHo == '.br') {
            $(this).hover(function () {
              var borderRightHoverNum = borderRightHover[2] - 1;
              $(this).find('option').css({ 'botder-top': '0', 'botder-bottom': '0', 'botder-left': '0' })
              $(this).find('option').css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
            })
            $(this).mouseleave(function () {
              var borderRightNum = borderRight[2] - 1;
              $(this).find('option').css({ 'botder-top': '0', 'botder-bottom': '0', 'botder-left': '0' })
              $(this).find('option').css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
            })
          }

          if (eleBt == 'bt') {
            var borderTopNum = borderTop[2] - 1;
            $(this).find('option').css({ 'botder-bottom': '0', 'botder-right': '0', 'botder-left': '0' })
            $(this).find('option').css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
          }
          if (eleBtHo == '.bt') {
            $(this).hover(function () {
              var borderTopHoverNum = borderTopHover[2] - 1;
              $(this).find('option').css({ 'botder-bottom': '0', 'botder-right': '0', 'botder-left': '0' })
              $(this).find('option').css('border-top', '' + borderTopHover[1] + 'px solid ' + colors[borderTopHoverNum] + '');
            })
            $(this).mouseleave(function () {
              var borderTopNum = borderTop[2] - 1;
              $(this).find('option').css({ 'botder-bottom': '0', 'botder-right': '0', 'botder-left': '0' })
              $(this).find('option').css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
            })
          }

          if (eleBb == 'bb') {
            var borderBottomNum = borderBottom[2] - 1;
            $(this).find('option').css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
            $(this).find('option').css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
          }
          if (eleBbHo == '.bb') {
            $(this).hover(function () {
              var borderBottomHoverNum = borderBottomHover[2] - 1;
              $(this).find('option').css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
              $(this).find('option').css('border-bottom', '' + borderBottomHover[1] + 'px solid ' + colors[borderBottomHoverNum] + '');
            })
            $(this).mouseleave(function () {
              var borderBottomNum = borderBottom[2] - 1;
              $(this).find('option').css({ 'botder-top': '0', 'botder-right': '0', 'botder-left': '0' })
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
        $(".select-area .select-box").each(function () {

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
      })
        .resize();
      //For Box Select
      $('[cell-in^="["][cell-in$="]"][cell-in*="-ob"]').hide();
      $('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').each(function (index) {
        $(this).attr("");
        $(this).attr("id", "select-box-" + index);
      })
      $('[cell-in^="["][cell-in$="]"][cell-in*="-ob"]').each(function (index) {
        $(this).attr("");
        $(this).attr("id", "box-" + index);
      })
      $('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').click(function () {
        var getId = this.id;
        var idNum = getId.substring(11);
        $('#box-' + idNum + '').toggle()
        $('#' + getId + ' option').appendTo('#box-' + idNum + '');
      });
      $('[cell-in^="["][cell-in$="]"][cell-in*="-bs"]').on('mousedown', function (e) {
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

    }
  });
});
$(document).ready(function () {
  $(".mo-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "mo-values-" + index);
  })
  $(".mo-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "mo-output-" + index);
  })
  $(".mo-values").keyup(function () {
    var getId = this.id;
    var value = $(this).val();
    var output = getId.substring(10);
    $('#mo-output-' + output + '').attr('cell-mo', "[" + value + "]")
    console.log(value)
  });
});
$(document).ready(function () {
  $(".fl-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "fl-values-" + index);
  })
  $(".fl-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "fl-output-" + index);
  })
  $(".fl-values").keyup(function () {
    var getId = this.id;
    var value = $(this).val();
    var output = getId.substring(10);
    $('#fl-output-0 .float').attr('cell-fl', "[" + value + "]")
    $('#fl-output-1 .float').attr('cell-rf', "[" + value + "]")
    console.log(value)
  });
});
$(document).ready(function () {
  $(".gr-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "gr-values-" + index);
  })
  $(".gr-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "gr-output-" + index);
  })
  $(".gr-values").keyup(function () {
    var getId = this.id;
    var value = $(this).val();
    var output = getId.substring(10);
    $('#gr-output-' + output + '').attr('cell-gr', "[" + value + "]")
    console.log(value)
  });
});
$(document).ready(function () {
  $(".ga-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "ga-values-" + index);
  })
  $(".ga-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "ga-output-" + index);
  })
  $(".ga-values").keyup(function () {
    var getId = this.id;
    var value = $(this).val();
    var output = getId.substring(10);
    $('#ga-output-' + output + '').attr('cell-gr', "[" + value + "]")
    console.log(value)
  });
});
$(document).ready(function () {
  $(".ba-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "ba-values-" + index);
  })
  $(".ba-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "ba-output-" + index);
  })
  $(".ba-values").keyup(function () {
    var getId = this.id;
    var value = $(this).val();
    var output = getId.substring(10);
    $('#ba-output-' + output + '').attr('cell-gr', "[" + value + "]")
    console.log(value)
  });
});
$(document).ready(function () {
  $(".bu-values").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "bu-values-" + index);
  })
  $(".bu-output").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "bu-output-" + index);
  })
  $('.bu-values option').each(function () {
    $(this).click(specify).keyup(specify);
    function specify() {
      var values = this.value;
      var getId = $(this).closest('.bu-values').prop("id");
      var output = getId.substring(10);
      $('#bu-output-' + output + '').attr('cell-bu', "[" + values + "]")
      $("[cell-bu]").each(function () {
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
          $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderBottom': '0' })
          $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
        }
        if (eleBlHo == '.bl') {
          $(this).hover(function () {
            var borderLeftHoverNum = borderLeftHover[2] - 1;
            $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderBottom': '0' })
            $(this).css('border-left', '' + borderLeftHover[1] + 'px solid ' + colors[borderLeftHoverNum] + '');
          })
          $(this).mouseleave(function () {
            var borderLeftNum = borderLeft[2] - 1;
            $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderBottom': '0' })
            $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
          })
        }

        if (eleBr == 'br') {
          var borderRightNum = borderRight[2] - 1;
          $(this).css({ 'borderTop': '0', 'borderBottom': '0', 'borderLeft': '0' })
          $(this).css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
        }
        if (eleBrHo == '.br') {
          $(this).hover(function () {
            var borderRightHoverNum = borderRightHover[2] - 1;
            $(this).find('input').css({ 'borderTop': '0', 'borderBottom': '0', 'borderLeft': '0' })
            $(this).find('input').css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
          })
        }

        if (eleBt == 'bt') {
          var borderTopNum = borderTop[2] - 1;
          $(this).css({ 'borderBottom': '0', 'borderRight': '0', 'borderLeft': '0' })
          $(this).css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
        }
        if (eleBtHo == '.bt') {
          $(this).hover(function () {
            var borderTopHoverNum = borderTopHover[2] - 1;
            $(this).css({ 'borderBottom': '0', 'borderRight': '0', 'borderLeft': '0' })
            $(this).css('border-top', '' + borderTopHover[1] + 'px solid ' + colors[borderTopHoverNum] + '');
          })
        }

        if (eleBb == 'bb') {
          var borderBottomNum = borderBottom[2] - 1;
          $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderLeft': '0' })
          $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
        }
        if (eleBbHo == '.bb') {
          $(this).hover(function () {
            var borderBottomHoverNum = borderBottomHover[2] - 1;
            $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderLeft': '0' })
            $(this).css('border-bottom', '' + borderBottomHover[1] + 'px solid ' + colors[borderBottomHoverNum] + '');
          })
          $(this).mouseleave(function () {
            var borderBottomNum = borderBottom[2] - 1;
            $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderLeft': '0' })
            $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
          })
        }
      })
    }
  });
});


$(document).ready(function () {
  $(".actual-col").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "actual-col-" + index);
  })
  $(".append-col").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "append-col-" + index);
  })
});
$(document).ready(function () {
  $(".title-col").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "title-col-" + index);
  })
  $(".title-content").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "title-content-" + index);
  })
  $(".content .title-col").click(function () {
    var getId = this.id;
    var output = getId.substring(10);
    $('.content  #' + getId + '').toggleClass("active");
    $('.content .title-col:not(.content #' + getId + ')').removeClass("active");
    $('.content #title-content-' + output + '').slideToggle();
    $('.content .title-content:not(.content #title-content-' + output + ')').slideUp();

  });
});

$(document).ready(function () {
  $(window).resize(function () {
    var width = $(window).width();
    if (width >= 1484.99 && width <= 2500) {
      $('div[cell-fl^="["][cell-fl$="]"][cell-fl*=-fl]').attr('cell-fl',)

    }
    if (width >= 1199.99 && width <= 1484.98) {
      var appLength = $(".actual-col").length;
      for (i = 0; i <= appLength; i++) {
        $('#append-col-' + i + ' .set').appendTo('#actual-col-' + i + '')
      }

    }
    if (width >= 991.99 && width <= 1199.98) {
      var appLength = $(".actual-col").length;
      for (i = 0; i <= appLength; i++) {
        $('#actual-col-' + i + ' .set').appendTo('#append-col-' + i + '');
      }

    }
    if (width >= 767.99 && width <= 991.98) {
      var appLength = $(".actual-col").length;
      for (i = 0; i <= appLength; i++) {
        $('#actual-col-' + i + ' .set').appendTo('#append-col-' + i + '');
      }

    }
    if (width >= 575.99 && width <= 767.98) {
      var appLength = $(".actual-col").length;
      for (i = 0; i <= appLength; i++) {
        $('#actual-col-' + i + ' .set').appendTo('#append-col-' + i + '');
      }

    }
    else if (width >= 319.98 && width <= 575.98) {
      var appLength = $(".actual-col").length;
      for (i = 0; i <= appLength; i++) {
        $('#actual-col-' + i + ' .set').appendTo('#append-col-' + i + '');
      }

    }
  })
    .resize();
});
//For Animations
$(document).ready(function () {
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
      $('[cell-an^="' + anValue + '"]').css({ 'textTransform': 'uppercase' });
    }

    if (eleLc == 'lc') {
      $('[cell-an^="' + anValue + '"]').css({ 'textTransform': 'lowercase' });
    }

    if (eleCf == 'cf') {
      $('[cell-an^="' + anValue + '"]').css({ 'textTransform': 'capitalize' });
    }

    $('[cell-an^="' + anValue + '"]').css({ 'transformOrigin': '' + values[12] + '' });


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
        $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '-' + values[14] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '-' + values[15] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '-' + values[16] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '-' + values[17] + '%' });
      }
      if (eleNm != 'nm') {
        $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '' + values[14] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '' + values[15] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '' + values[16] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '' + values[17] + '%' });
      }
      $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + values[13] + '%' });
      $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + values[18] + '%' });
      $('[cell-an^="' + anValue + '"]').css({ 'paddingLeft': '' + values[19] + '%' });
      $('[cell-an^="' + anValue + '"]').css({ 'paddingRight': '' + values[20] + '%' });
      $('[cell-an^="' + anValue + '"]').css({ 'paddingTop': '' + values[21] + '%' });
      $('[cell-an^="' + anValue + '"]').css({ 'paddingBottom': '' + values[22] + '%' });
      $('[cell-an^="' + anValue + '"]').css({ 'border': '' + values[23] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'borderLeft': '' + values[24] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'borderRight': '' + values[25] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'borderTop': '' + values[26] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'borderBottom': '' + values[27] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'borderColor': '' + values[28] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + values[29] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + values[30] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
      $('[cell-an^="' + anValue + '"]').css({ outline: '' + values[33] + ' solid ' + values[34] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'color': '' + values[35] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'fontSize': '' + values[36] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'fontWeight': '' + values[37] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'letterSpacing': '' + values[38] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'wordSpacing': '' + values[39] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'lineHeight': '' + values[40] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'backgroundColor': '' + values[41] + '' });
      $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + values[42] + '' });
      if (eleTs == 'ts') {
        var textShadowNum = textShadow[2] - 1
        var pos = textShadow[1] * (1)
        $('[cell-an^="' + anValue + '"]').css({ 'textShadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[textShadowNum] + '' });
      }
      if (eleBs == 'bs') {
        var boxShadowNum = boxShadow[2] - 1
        var pos = boxShadow[1] * (1)
        $('[cell-an^="' + anValue + '"]').css({ 'boxShadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[boxShadowNum] + '' });

      }
      $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + values[10] + 's' });
      $('[cell-an^="' + anValue + '"]').css({ 'transitionDelay': '' + values[11] + 's' });

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
          $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '-' + fValues[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '-' + fValues[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '-' + fValues[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '-' + fValues[17] + '%' });
        }
        if (eleNm != 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '' + fValues[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '' + fValues[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '' + fValues[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '' + fValues[17] + '%' });
        }
        $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + fValues[13] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + fValues[18] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingLeft': '' + fValues[19] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingRight': '' + fValues[20] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingTop': '' + fValues[21] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingBottom': '' + fValues[22] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'border': '' + fValues[23] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderLeft': '' + fValues[24] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRight': '' + fValues[25] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderTop': '' + fValues[26] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderBottom': '' + fValues[27] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderColor': '' + fValues[28] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + fValues[29] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + fValues[30] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + fValues[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + fValues[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ outline: '' + fValues[33] + ' solid ' + fValues[34] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'color': '' + fValues[35] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'fontSize': '' + fValues[36] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'fontWeight': '' + fValues[37] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'letterSpacing': '' + fValues[38] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'wordSpacing': '' + fValues[39] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'lineHeight': '' + fValues[40] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'backgroundColor': '' + fValues[41] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + fValues[42] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + fValues[10] + 's' });
        $('[cell-an^="' + anValue + '"]').css({ 'transitionDelay': '' + fValues[11] + 's' });
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
          $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '-' + values[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '-' + values[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '-' + values[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '-' + values[17] + '%' });
        }
        if (eleNm != 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '' + values[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '' + values[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '' + values[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '' + values[17] + '%' });
        }
        $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + values[13] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + values[18] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingLeft': '' + values[19] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingRight': '' + values[20] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingTop': '' + values[21] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingBottom': '' + values[22] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'border': '' + values[23] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderLeft': '' + values[24] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRight': '' + values[25] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderTop': '' + values[26] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderBottom': '' + values[27] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderColor': '' + values[28] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + values[29] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + values[30] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ outline: '' + values[33] + ' solid ' + values[34] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'color': '' + values[35] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'fontSize': '' + values[36] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'fontWeight': '' + values[37] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'letterSpacing': '' + values[38] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'wordSpacing': '' + values[39] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'lineHeight': '' + values[40] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'backgroundColor': '' + values[41] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + values[42] + '' });
        if (eleTs == 'ts') {
          var textShadowNum = textShadow[2] - 1
          var pos = textShadow[1] * (1)
          $('[cell-an^="' + anValue + '"]').css({ 'textShadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[textShadowNum] + '' });
        }
        if (eleBs == 'bs') {
          var boxShadowNum = boxShadow[2] - 1
          var pos = boxShadow[1] * (1)
          $('[cell-an^="' + anValue + '"]').css({ 'boxShadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[boxShadowNum] + '' });

        }
        $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + values[10] + 's' });
        $('[cell-an^="' + anValue + '"]').css({ 'transitionDelay': '' + values[11] + 's' });
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
            $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '-' + fValues[14] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '-' + fValues[15] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '-' + fValues[16] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '-' + fValues[17] + '%' });
          }
          if (eleNm != 'nm') {
            $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '' + fValues[14] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '' + fValues[15] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '' + fValues[16] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '' + fValues[17] + '%' });
          }
          $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + fValues[13] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + fValues[18] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'paddingLeft': '' + fValues[19] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'paddingRight': '' + fValues[20] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'paddingTop': '' + fValues[21] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'paddingBottom': '' + fValues[22] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'border': '' + fValues[23] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderLeft': '' + fValues[24] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderRight': '' + fValues[25] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderTop': '' + fValues[26] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderBottom': '' + fValues[27] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderColor': '' + fValues[28] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + fValues[29] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + fValues[30] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'width': '' + fValues[31] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'height': '' + fValues[32] + '' });
          $('[cell-an^="' + anValue + '"]').css({ outline: '' + fValues[33] + ' solid ' + fValues[34] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'color': '' + fValues[35] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'fontSize': '' + fValues[36] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'fontWeight': '' + fValues[37] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'letterSpacing': '' + fValues[38] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'wordSpacing': '' + fValues[39] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'lineHeight': '' + fValues[40] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'backgroundColor': '' + fValues[41] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + fValues[42] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + fValues[10] + 's' });
          $('[cell-an^="' + anValue + '"]').css({ 'transitionDelay': '' + fValues[11] + 's' });
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
          $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '-' + values[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '-' + values[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '-' + values[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '-' + values[17] + '%' });
        }
        if (eleNm != 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '' + values[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '' + values[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '' + values[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '' + values[17] + '%' });
        }
        $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + values[13] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + values[18] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingLeft': '' + values[19] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingRight': '' + values[20] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingTop': '' + values[21] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingBottom': '' + values[22] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'border': '' + values[23] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderLeft': '' + values[24] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRight': '' + values[25] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderTop': '' + values[26] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderBottom': '' + values[27] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderColor': '' + values[28] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + values[29] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + values[30] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ outline: '' + values[33] + ' solid ' + values[34] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'color': '' + values[35] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'fontSize': '' + values[36] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'fontWeight': '' + values[37] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'letterSpacing': '' + values[38] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'wordSpacing': '' + values[39] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'lineHeight': '' + values[40] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'backgroundColor': '' + values[41] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + values[42] + '' });
        if (eleTs == 'ts') {
          var textShadowNum = textShadow[2] - 1
          var pos = textShadow[1] * (1)
          $('[cell-an^="' + anValue + '"]').css({ 'textShadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[textShadowNum] + '' });
        }
        if (eleBs == 'bs') {
          var boxShadowNum = boxShadow[2] - 1
          var pos = boxShadow[1] * (1)
          $('[cell-an^="' + anValue + '"]').css({ 'boxShadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[boxShadowNum] + '' });

        }
        $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + values[10] + 's' });
        $('[cell-an^="' + anValue + '"]').css({ 'transitionDelay': '' + values[11] + 's' });
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
          $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '-' + fValues[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '-' + fValues[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '-' + fValues[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '-' + fValues[17] + '%' });
        }
        if (eleNm != 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '' + fValues[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '' + fValues[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '' + fValues[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '' + fValues[17] + '%' });
        }
        $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + fValues[13] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + fValues[18] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingLeft': '' + fValues[19] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingRight': '' + fValues[20] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingTop': '' + fValues[21] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingBottom': '' + fValues[22] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'border': '' + fValues[23] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderLeft': '' + fValues[24] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRight': '' + fValues[25] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderTop': '' + fValues[26] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderBottom': '' + fValues[27] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderColor': '' + fValues[28] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + fValues[29] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + fValues[30] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + fValues[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + fValues[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ outline: '' + fValues[33] + ' solid ' + fValues[34] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'color': '' + fValues[35] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'fontSize': '' + fValues[36] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'fontWeight': '' + fValues[37] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'letterSpacing': '' + fValues[38] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'wordSpacing': '' + fValues[39] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'lineHeight': '' + fValues[40] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'backgroundColor': '' + fValues[41] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + fValues[42] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + fValues[10] + 's' });
        $('[cell-an^="' + anValue + '"]').css({ 'transitionDelay': '' + fValues[11] + 's' });

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
          $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '-' + values[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '-' + values[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '-' + values[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '-' + values[17] + '%' });
        }
        if (eleNm != 'nm') {
          $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '' + values[14] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '' + values[15] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '' + values[16] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '' + values[17] + '%' });
        }
        $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + values[13] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + values[18] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingLeft': '' + values[19] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingRight': '' + values[20] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingTop': '' + values[21] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'paddingBottom': '' + values[22] + '%' });
        $('[cell-an^="' + anValue + '"]').css({ 'border': '' + values[23] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderLeft': '' + values[24] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRight': '' + values[25] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderTop': '' + values[26] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderBottom': '' + values[27] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderColor': '' + values[28] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + values[29] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + values[30] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="' + anValue + '"]').css({ outline: '' + values[33] + ' solid ' + values[34] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'color': '' + values[35] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'fontSize': '' + values[36] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'fontWeight': '' + values[37] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'letterSpacing': '' + values[38] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'wordSpacing': '' + values[39] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'lineHeight': '' + values[40] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'backgroundColor': '' + values[41] + '' });
        $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + values[42] + '' });
        if (eleTs == 'ts') {
          var textShadowNum = textShadow[2] - 1
          var pos = textShadow[1] * (1)
          $('[cell-an^="' + anValue + '"]').css({ 'textShadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[textShadowNum] + '' });
        }
        if (eleBs == 'bs') {
          var boxShadowNum = boxShadow[2] - 1
          var pos = boxShadow[1] * (1)
          $('[cell-an^="' + anValue + '"]').css({ 'boxShadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[boxShadowNum] + '' });

        }
        $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + values[10] + 's' });
        $('[cell-an^="' + anValue + '"]').css({ 'transitionDelay': '' + values[11] + 's' });
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
            $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '-' + fValues[14] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '-' + fValues[15] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '-' + fValues[16] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '-' + fValues[17] + '%' });
          }
          if (eleNm != 'nm') {
            $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '' + fValues[14] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '' + fValues[15] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '' + fValues[16] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '' + fValues[17] + '%' });
          }
          $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + fValues[13] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + fValues[18] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'paddingLeft': '' + fValues[19] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'paddingRight': '' + fValues[20] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'paddingTop': '' + fValues[21] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'paddingBottom': '' + fValues[22] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'border': '' + fValues[23] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderLeft': '' + fValues[24] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderRight': '' + fValues[25] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderTop': '' + fValues[26] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderBottom': '' + fValues[27] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderColor': '' + fValues[28] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + fValues[29] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + fValues[30] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'width': '' + fValues[31] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'height': '' + fValues[32] + '' });
          $('[cell-an^="' + anValue + '"]').css({ outline: '' + fValues[33] + ' solid ' + fValues[34] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'color': '' + fValues[35] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'fontSize': '' + fValues[36] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'fontWeight': '' + fValues[37] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'letterSpacing': '' + fValues[38] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'wordSpacing': '' + fValues[39] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'lineHeight': '' + fValues[40] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'backgroundColor': '' + fValues[41] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + fValues[42] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + fValues[10] + 's' });
          $('[cell-an^="' + anValue + '"]').css({ 'transitionDelay': '' + fValues[11] + 's' });
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
            $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '-' + values[14] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '-' + values[15] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '-' + values[16] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '-' + values[17] + '%' });
          }
          if (eleNm != 'nm') {
            $('[cell-an^="' + anValue + '"]').css({ 'marginLeft': '' + values[14] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginRight': '' + values[15] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginTop': '' + values[16] + '%' });
            $('[cell-an^="' + anValue + '"]').css({ 'marginBottom': '' + values[17] + '%' });
          }
          $('[cell-an^="' + anValue + '"]').css({ 'margin': '' + values[13] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'padding': '' + values[18] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'paddingLeft': '' + values[19] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'paddingRight': '' + values[20] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'paddingTop': '' + values[21] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'paddingBottom': '' + values[22] + '%' });
          $('[cell-an^="' + anValue + '"]').css({ 'border': '' + values[23] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderLeft': '' + values[24] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderRight': '' + values[25] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderTop': '' + values[26] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderBottom': '' + values[27] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderColor': '' + values[28] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + values[29] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'borderRadius': '' + values[30] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'width': '' + values[31] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'height': '' + values[32] + '' });
          $('[cell-an^="' + anValue + '"]').css({ outline: '' + values[33] + ' solid ' + values[34] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'color': '' + values[35] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'fontSize': '' + values[36] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'fontWeight': '' + values[37] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'letterSpacing': '' + values[38] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'wordSpacing': '' + values[39] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'lineHeight': '' + values[40] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'backgroundColor': '' + values[41] + '' });
          $('[cell-an^="' + anValue + '"]').css({ 'opacity': '' + values[42] + '' });
          if (eleTs == 'ts') {
            var textShadowNum = textShadow[2] - 1
            var pos = textShadow[1] * (1)
            $('[cell-an^="' + anValue + '"]').css({ 'textShadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[textShadowNum] + '' });
          }
          if (eleBs == 'bs') {
            var boxShadowNum = boxShadow[2] - 1
            var pos = boxShadow[1] * (1)
            $('[cell-an^="' + anValue + '"]').css({ 'boxShadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[boxShadowNum] + '' });

          }
          $('[cell-an^="' + anValue + '"]').css({ 'transition': 'all ' + values[10] + 's' });
          $('[cell-an^="' + anValue + '"]').css({ 'transitionDelay': '' + values[11] + 's' });
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
        $('[cell-an^="' + anValue + '"]').css({ 'textTransform': 'uppercase' });
      }

      if (eleLc == 'lc') {
        $('[cell-an^="' + anValue + '"]').css({ 'textTransform': 'lowercase' });
      }

      if (eleCf == 'cf') {
        $('[cell-an^="' + anValue + '"]').css({ 'textTransform': 'capitalize' });
      }

      $('[cell-an^="' + anValue + '"]').css({ 'transformOrigin': '' + values[12] + '' });


      $('[cell-an*="-cl' + i + '"]').click(function () {
        if (eleNr == 'nr') {
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ transform: 'translateY(-' + values[0] + '%) translateX(-' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(-' + values[5] + 'deg) skewX(-' + values[6] + 'deg) rotateY(-' + values[7] + 'deg) rotateX(-' + values[8] + 'deg) rotateZ(-' + values[9] + 'deg)' });
        }
        if (eleNr != 'nr') {
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ transform: 'translateY(' + values[0] + '%) translateX(' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(' + values[5] + 'deg) skewX(' + values[6] + 'deg) rotateY(' + values[7] + 'deg) rotateX(' + values[8] + 'deg) rotateZ(' + values[9] + 'deg)' });
        }
        if (eleNm == 'nm') {
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'marginLeft': '-' + values[14] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'marginRight': '-' + values[15] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'marginTop': '-' + values[16] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'marginBottom': '-' + values[17] + '%' });
        }
        if (eleNm != 'nm') {
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'marginLeft': '' + values[14] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'marginRight': '' + values[15] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'marginTop': '' + values[16] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'marginBottom': '' + values[17] + '%' });
        }
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'margin': '' + values[13] + '%' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'padding': '' + values[18] + '%' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'paddingLeft': '' + values[19] + '%' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'paddingRight': '' + values[20] + '%' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'paddingTop': '' + values[21] + '%' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'paddingBottom': '' + values[22] + '%' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'border': '' + values[23] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'borderLeft': '' + values[24] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'borderRight': '' + values[25] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'borderTop': '' + values[26] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'borderBottom': '' + values[27] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'borderColor': '' + values[28] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'borderRadius': '' + values[29] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'borderRadius': '' + values[30] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'width': '' + values[31] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'height': '' + values[32] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ outline: '' + values[33] + ' solid ' + values[34] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'color': '' + values[35] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'fontSize': '' + values[36] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'fontWeight': '' + values[37] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'letterSpacing': '' + values[38] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'wordSpacing': '' + values[39] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'lineHeight': '' + values[40] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'backgroundColor': '' + values[41] + '' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'opacity': '' + values[42] + '' });
        if (eleTs == 'ts') {
          var textShadowNum = textShadow[2] - 1
          var pos = textShadow[1] * (1)
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'textShadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[textShadowNum] + '' });
        }
        if (eleBs == 'bs') {
          var boxShadowNum = boxShadow[2] - 1;
          var pos = boxShadow[1] * (1);
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'boxShadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[boxShadowNum] + '' });
        }
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'transition': 'all ' + values[10] + 's' });
        $('[cell-an^="[-an' + j + ':"][cell-an*="-ca' + i + '"]').css({ 'transitionDelay': '' + values[11] + 's' });

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
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginLeft': '-' + fValues[14] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginRight': '-' + fValues[15] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginTop': '-' + fValues[16] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginBottom': '-' + fValues[17] + '%' });
          }
          if (eleNm != 'nm') {
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginLeft': '' + fValues[14] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginRight': '' + fValues[15] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginTop': '' + fValues[16] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginBottom': '' + fValues[17] + '%' });
          }
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin': '' + fValues[13] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'padding': '' + fValues[18] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'paddingLeft': '' + fValues[19] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'paddingRight': '' + fValues[20] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'paddingTop': '' + fValues[21] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'paddingBottom': '' + fValues[22] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border': '' + fValues[23] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'borderLeft': '' + fValues[24] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'borderRight': '' + fValues[25] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'borderTop': '' + fValues[26] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'borderBottom': '' + fValues[27] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'borderColor': '' + fValues[28] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'borderRadius': '' + fValues[29] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'borderRadius': '' + fValues[30] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'width': '' + fValues[31] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'height': '' + fValues[32] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ outline: '' + fValues[33] + ' solid ' + fValues[34] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'color': '' + fValues[35] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'fontSize': '' + fValues[36] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'fontWeight': '' + fValues[37] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'letterSpacing': '' + fValues[38] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'wordSpacing': '' + fValues[39] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'lineHeight': '' + fValues[40] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'backgroundColor': '' + fValues[41] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'opacity': '' + fValues[42] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'transition': 'all ' + fValues[10] + 's' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'transitionDelay': '' + fValues[11] + 's' });
        }
        if (count % 2 != 0) {
          if (eleNr == 'nr') {
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ transform: 'translateY(-' + values[0] + '%) translateX(-' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(-' + values[5] + 'deg) skewX(-' + values[6] + 'deg) rotateY(-' + values[7] + 'deg) rotateX(-' + values[8] + 'deg) rotateZ(-' + values[9] + 'deg)' });
          }
          if (eleNr != 'nr') {
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ transform: 'translateY(' + values[0] + '%) translateX(' + values[1] + '%) scaleY(' + values[2] + ') scaleX(' + values[3] + ') scale(' + values[4] + ') skewY(' + values[5] + 'deg) skewX(' + values[6] + 'deg) rotateY(' + values[7] + 'deg) rotateX(' + values[8] + 'deg) rotateZ(' + values[9] + 'deg)' });
          }
          if (eleNm == 'nm') {
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginLeft': '-' + values[14] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginRight': '-' + values[15] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginTop': '-' + values[16] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginBottom': '-' + values[17] + '%' });
          }
          if (eleNm != 'nm') {
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginLeft': '' + values[14] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginRight': '' + values[15] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginTop': '' + values[16] + '%' });
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'marginBottom': '' + values[17] + '%' });
          }
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'margin': '' + values[13] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'padding': '' + values[18] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'paddingLeft': '' + values[19] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'paddingRight': '' + values[20] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'paddingTop': '' + values[21] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'paddingBottom': '' + values[22] + '%' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'border': '' + values[23] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'borderLeft': '' + values[24] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'borderRight': '' + values[25] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'borderTop': '' + values[26] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'borderBottom': '' + values[27] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'borderColor': '' + values[28] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'borderRadius': '' + values[29] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'borderRadius': '' + values[30] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'width': '' + values[31] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'height': '' + values[32] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'width': '' + values[31] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'height': '' + values[32] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ outline: '' + values[33] + ' solid ' + values[34] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'color': '' + values[35] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'fontSize': '' + values[36] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'fontWeight': '' + values[37] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'letterSpacing': '' + values[38] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'wordSpacing': '' + values[39] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'lineHeight': '' + values[40] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'backgroundColor': '' + values[41] + '' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'opacity': '' + values[42] + '' });
          if (eleTs == 'ts') {
            var textShadowNum = textShadow[2] - 1
            var pos = textShadow[1] * (1)
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'textShadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[textShadowNum] + '' });
          }
          if (eleBs == 'bs') {
            var boxShadowNum = boxShadow[2] - 1;
            var pos = boxShadow[1] * (1);
            $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'boxShadow': '' + pos + 'px ' + pos + 'px 5px ' + colors[boxShadowNum] + '' });
          }
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'transition': 'all ' + values[10] + 's' });
          $('[cell-an^="[-an' + j + ':"][cell-an*="-ta' + i + '"]').css({ 'transitionDelay': '' + values[11] + 's' });
        }
      })
    })
  });
});
//For Wizards
$(document).ready(function () {
  $('[cell-wz^="[-wz"]').each(function (index) {
    var counts = [];
    counts[index] = -1;

    var wz = $(this).attr('cell-wz').match(/[-][w][z](\d{1,})/i);
    var wzValue = '[-wz' + wz[1] + ':';

    $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > [cell-wz="[-l]"]').each(function (index) {
      $(this).attr("");
      $(this).attr("id", "wz-list-" + index);
    })
    $('[cell-wz^="' + wzValue + '"]  > [cell-wz^="[-ca]"] >  [cell-wz^="[-c]"]').each(function (index) {
      $(this).attr("");
      $(this).attr("id", "wz-content-" + index);
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
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > #wz-content-' + output + '').toggle();
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > [cell-wz="[-c]"]:not([cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] >  #wz-content-' + output + ')').hide();

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
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > #wz-content-' + output + '').toggle();
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > [cell-wz="[-c]"]:not([cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] >  #wz-content-' + output + ')').hide();
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
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > #wz-list-' + counts[index] + '').toggleClass("active");
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > [cell-wz="[-l]"]:not([cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > #wz-list-' + counts[index] + ')').removeClass("active");
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > #wz-content-' + counts[index] + '').toggle();
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > [cell-wz="[-c]"]:not([cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] >  #wz-content-' + counts[index] + ')').hide();
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

      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > #wz-list-' + counts[index] + '').toggleClass("active");
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > [cell-wz="[-l]"]:not([cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] > #wz-list-' + counts[index] + ')').removeClass("active");
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > #wz-content-' + counts[index] + '').toggle();
      $('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] > [cell-wz="[-c]"]:not([cell-wz^="' + wzValue + '"]  > [cell-wz="[-ca]"] >  #wz-content-' + counts[index] + ')').hide();
    });

    var eleVr = $('[cell-wz^="' + wzValue + '"]').attr('cell-wz').match(/[-][a]/i);
    if (eleVr == '-a') {
      var active = $('[cell-wz^="' + wzValue + '"]').attr('cell-wz').match(/a(\d{1,})/i);
      jQuery(function () {
        jQuery('[cell-wz^="' + wzValue + '"]  > [cell-wz="[-wa]"] >  #wz-list-' + active[1] + '').click();
      });
    }
  })
})
//For Smoot Scroll
$(document).ready(function () {
  $('[cell-ss^="[-ss"]').each(function () {
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
})
//For Buttons
$(document).ready(function () {
  $("[cell-bu]").each(function () {
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
      $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderBottom': '0' })
      $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
    }
    if (eleBlHo == '.bl') {
      $(this).hover(function () {
        var borderLeftHoverNum = borderLeftHover[2] - 1;
        $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderBottom': '0' })
        $(this).css('border-left', '' + borderLeftHover[1] + 'px solid ' + colors[borderLeftHoverNum] + '');
      })
      $(this).mouseleave(function () {
        var borderLeftNum = borderLeft[2] - 1;
        $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderBottom': '0' })
        $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
      })
    }

    if (eleBr == 'br') {
      var borderRightNum = borderRight[2] - 1;
      $(this).css({ 'borderTop': '0', 'borderBottom': '0', 'borderLeft': '0' })
      $(this).css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
    }
    if (eleBrHo == '.br') {
      $(this).hover(function () {
        var borderRightHoverNum = borderRightHover[2] - 1;
        $(this).find('input').css({ 'borderTop': '0', 'borderBottom': '0', 'borderLeft': '0' })
        $(this).find('input').css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
      })
    }

    if (eleBt == 'bt') {
      var borderTopNum = borderTop[2] - 1;
      $(this).css({ 'borderBottom': '0', 'borderRight': '0', 'borderLeft': '0' })
      $(this).css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
    }
    if (eleBtHo == '.bt') {
      $(this).hover(function () {
        var borderTopHoverNum = borderTopHover[2] - 1;
        $(this).css({ 'borderBottom': '0', 'borderRight': '0', 'borderLeft': '0' })
        $(this).css('border-top', '' + borderTopHover[1] + 'px solid ' + colors[borderTopHoverNum] + '');
      })
    }

    if (eleBb == 'bb') {
      var borderBottomNum = borderBottom[2] - 1;
      $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderLeft': '0' })
      $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
    }
    if (eleBbHo == '.bb') {
      $(this).hover(function () {
        var borderBottomHoverNum = borderBottomHover[2] - 1;
        $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderLeft': '0' })
        $(this).css('border-bottom', '' + borderBottomHover[1] + 'px solid ' + colors[borderBottomHoverNum] + '');
      })
      $(this).mouseleave(function () {
        var borderBottomNum = borderBottom[2] - 1;
        $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderLeft': '0' })
        $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
      })
    }
  })
});
//For Toggle Switches
$(document).ready(function () {
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
      $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderBottom': '0' })
      $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
    }
    if (eleBlHo == '.bl') {
      $(this).hover(function () {
        var borderLeftHoverNum = borderLeftHover[2] - 1;
        $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderBottom': '0' })
        $(this).css('border-left', '' + borderLeftHover[1] + 'px solid ' + colors[borderLeftHoverNum] + '');
      })
      $(this).mouseleave(function () {
        var borderLeftNum = borderLeft[2] - 1;
        $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderBottom': '0' })
        $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
      })
    }

    if (eleBr == 'br') {
      var borderRightNum = borderRight[2] - 1;
      $(this).css({ 'borderTop': '0', 'borderBottom': '0', 'borderLeft': '0' })
      $(this).css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
    }
    if (eleBrHo == '.br') {
      $(this).hover(function () {
        var borderRightHoverNum = borderRightHover[2] - 1;
        $(this).css({ 'borderTop': '0', 'borderBottom': '0', 'borderLeft': '0' })
        $(this).css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
      })
    }

    if (eleBt == 'bt') {
      var borderTopNum = borderTop[2] - 1;
      $(this).css({ 'borderBottom': '0', 'borderRight': '0', 'borderLeft': '0' })
      $(this).css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
    }
    if (eleBtHo == '.bt') {
      $(this).hover(function () {
        var borderTopHoverNum = borderTopHover[2] - 1;
        $(this).css({ 'borderBottom': '0', 'borderRight': '0', 'borderLeft': '0' })
        $(this).css('border-top', '' + borderTopHover[1] + 'px solid ' + colors[borderTopHoverNum] + '');
      })
    }

    if (eleBb == 'bb') {
      var borderBottomNum = borderBottom[2] - 1;
      $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderLeft': '0' })
      $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
    }
    if (eleBbHo == '.bb') {
      $(this).hover(function () {
        var borderBottomHoverNum = borderBottomHover[2] - 1;
        $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderLeft': '0' })
        $(this).css('border-bottom', '' + borderBottomHover[1] + 'px solid ' + colors[borderBottomHoverNum] + '');
      })
      $(this).mouseleave(function () {
        var borderBottomNum = borderBottom[2] - 1;
        $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderLeft': '0' })
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
      $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderBottom': '0' })
      $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
    }
    if (eleBlHo == '.bl') {
      $(this).hover(function () {
        var borderLeftHoverNum = borderLeftHover[2] - 1;
        $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderBottom': '0' })
        $(this).css('border-left', '' + borderLeftHover[1] + 'px solid ' + colors[borderLeftHoverNum] + '');
      })
      $(this).mouseleave(function () {
        var borderLeftNum = borderLeft[2] - 1;
        $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderBottom': '0' })
        $(this).css('border-left', '' + borderLeft[1] + 'px solid ' + colors[borderLeftNum] + '');
      })
    }

    if (eleBr == 'br') {
      var borderRightNum = borderRight[2] - 1;
      $(this).css({ 'borderTop': '0', 'borderBottom': '0', 'borderLeft': '0' })
      $(this).css('border-right', '' + borderRight[1] + 'px solid ' + colors[borderRightNum] + '');
    }
    if (eleBrHo == '.br') {
      $(this).hover(function () {
        var borderRightHoverNum = borderRightHover[2] - 1;
        $(this).css({ 'borderTop': '0', 'borderBottom': '0', 'borderLeft': '0' })
        $(this).css('border-right', '' + borderRightHover[1] + 'px solid ' + colors[borderRightHoverNum] + '');
      })
    }

    if (eleBt == 'bt') {
      var borderTopNum = borderTop[2] - 1;
      $(this).css({ 'borderBottom': '0', 'borderRight': '0', 'borderLeft': '0' })
      $(this).css('border-top', '' + borderTop[1] + 'px solid ' + colors[borderTopNum] + '');
    }
    if (eleBtHo == '.bt') {
      $(this).hover(function () {
        var borderTopHoverNum = borderTopHover[2] - 1;
        $(this).css({ 'borderBottom': '0', 'borderRight': '0', 'borderLeft': '0' })
        $(this).css('border-top', '' + borderTopHover[1] + 'px solid ' + colors[borderTopHoverNum] + '');
      })
    }

    if (eleBb == 'bb') {
      var borderBottomNum = borderBottom[2] - 1;
      $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderLeft': '0' })
      $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
    }
    if (eleBbHo == '.bb') {
      $(this).hover(function () {
        var borderBottomHoverNum = borderBottomHover[2] - 1;
        $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderLeft': '0' })
        $(this).css('border-bottom', '' + borderBottomHover[1] + 'px solid ' + colors[borderBottomHoverNum] + '');
      })
      $(this).mouseleave(function () {
        var borderBottomNum = borderBottom[2] - 1;
        $(this).css({ 'borderTop': '0', 'borderRight': '0', 'borderLeft': '0' })
        $(this).css('border-bottom', '' + borderBottom[1] + 'px solid ' + colors[borderBottomNum] + '');
      })
    }

  });
});
//For Pie
$(document).ready(function () {
  $('[cell-pi^="[-pi"]').each(function () {
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
    var backgroundColor = $(this).attr('cell-pi').match(/[b][g][^,]*?(\d{1,})*/i);

    var eleH = $(this).attr('cell-pi').match(/[h]/i);
    var eleW = $(this).attr('cell-pi').match(/[w]/i);
    var eleR = $(this).attr('cell-pi').match(/[r][a]/i);
    var eleRp = $(this).attr('cell-pi').match(/[r][a][.]/i);
    var eleBg = $(this).attr('cell-pi').match(/[b][g]/i);

    if (eleH == 'h') {
      $(this).css('height', '' + height[1] + 'px');
    }
    if (eleW == 'w') {
      $(this).css('width', '' + width[1] + 'px');
    }
    if (eleBg == 'bg') {
      backgroundColorNum = backgroundColor[1] - 1
      $(this).css('backgroundColor', '' + colors[backgroundColorNum] + '');
    }
    if (eleR == 'ra') {
      $(this).css('border-radius', '' + radius[1] + 'px');
    }
    if (eleRp == 'ra.') {
      $(this).css('border-radius', '' + radiusPer[1] + '%');
    }
  });
});
//For Progress Bar
$(document).ready(function () {
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
      $(this).find('label').css({ 'fontSize': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
    }
    if (eleLs == 'ls') {
      $(this).find('label').css({ 'width': '' + labelWidth[1] + 'px' });
    }

    if (eleTxHo == '.ts') {
      $(this).hover(function () {
        var textHoverNum = textHover[2] - 1;
        $(this).find('label').css({ 'fontSize': '' + text[1] + 'px', 'color': '' + colors[textHoverNum] + '' });
      })
      $(this).mouseleave(function () {
        var textNum = text[2] - 1;
        $(this).find('label').css({ 'fontSize': '' + text[1] + 'px', 'color': '' + colors[textNum] + '' });
      })
    }
  });
});
//For Nav Bar
$(document).ready(function () {
  $(window).resize(function () {
    $('[cell-nv^="[-nv"]').each(function () {

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
});