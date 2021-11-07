// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Author: Mark Drummond
// Date: 06-Nov-2021
// My Portfolio
// See README.md for more information
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const equalizeRowItems = (dataLabel) => {
  if ($(window).width() > 576) {
    let thirdRowTargetEls = $(`.row[data-label='${dataLabel}']`).find('article.card-content');
    let rowCardHeight = 0;
    for (let workItem of thirdRowTargetEls) {
      // $(workItem).attr('style', 'unset');
      let thisHeight = $(workItem).outerHeight(true);
      if (thisHeight > rowCardHeight) {
        rowCardHeight = thisHeight;
      }
    }
    for (let workItem of thirdRowTargetEls) {
      if (rowCardHeight !== $(workItem).outerHeight(true)) {
        $(workItem).attr('style', `height: ${rowCardHeight}px;`);
      }
    }
  }
};

const equalizeAboutMe = () => {
  if ($(window).width() > 576) {
    let targetHeight = $('#about-me').find('.card-content').outerHeight(true);
    $('#about-me').find('.card-panel').outerHeight(targetHeight, false);
  }
};


$(document).ready(function () {
  $('.sidenav').sidenav();
  
  equalizeAboutMe();
  equalizeRowItems('my-work-3');
});

$(window).resize(() => {
  if ($(window).width() < 576) {
    for (let workItem of $(".row").find('article.card-content')) {
      $(workItem).removeAttr('style');
    }
  }
  equalizeAboutMe();
  equalizeRowItems('my-work-3');
});