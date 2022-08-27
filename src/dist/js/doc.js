var ptPage;
var pcPage;
var colors;

$('[cell-in^="["][cell-in$="]"][cell-in*="-ob"]').hide();
//For Transfering Page Contents From One Page To Other Page Using Local Storage (Without Ajax)

$('xmp').each(function () {
  var $this = $(this);
  var t = $this.html();
  $this.text(t.replace('<', '<').replace('>', '>').replace(/>/g, '>\n'));
});

$('.xmp').each(function () {
  var $this = $(this);
  var t = $this.html();
  $this.text(t.replace("'[", '[').replace("]'", ']'));
});

$('pre').each(function () {
  var $this = $(this);
  var t = $this.html();
  $this.text(t.replace('<', '<').replace('>', '>').replace(/>/g, '>\n'));
  $this.text(t.replace("'[", '[').replace("]'", ']').replace(/>/g, '>\n'));
});
//For Transfering Page Contents From One Page To Other Page Using Local Storage (Without Ajax)
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
// For Input & Select Values
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
  $("[cell-in^='[-se'] [cell-in^='[-ob']").hide();


//For Tab
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
  // For Slide Open And Close
  $(".close").click(function () {
    $('div[cell-Sl^="["][cell-Sl$="]"][cell-Sl*="-so"]').attr('cell-Sl', '[-sc]');
  });
  $(".open").click(function () {
    $('div[cell-Sl^="["][cell-Sl$="]"][cell-Sl*="-sc"]').attr('cell-Sl', '[-so]');
  });

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

  $(".actual-col").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "actual-col-" + index);
  })
  $(".append-col").each(function (index) {
    $(this).attr("");
    $(this).attr("id", "append-col-" + index);
  })

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
