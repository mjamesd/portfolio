// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Author: Mark Drummond
// Date: 06-Nov-2021
// My Portfolio
// See README.md for more information
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Get heights of specified elements and compare them.
// Set the shorter elements' `height` style to the height of the tallest element.
const equalizeRowItems = (dataLabel) => {
  if ($(window).width() > 576) {
    let targetEls = $(`.row[data-label='${dataLabel}']`).find('article.card-content');
    let rowCardHeight = 0;
    for (let projectItem of targetEls) {
      $(projectItem).removeAttr('style');
      let thisHeight = $(projectItem).outerHeight(true);
      if (thisHeight > rowCardHeight) {
        rowCardHeight = thisHeight;
      }
    }
    for (let projectItem of targetEls) {
      if (rowCardHeight !== $(projectItem).outerHeight(true)) {
        $(projectItem).attr('style', `height: ${rowCardHeight}px;`);
      }
    }
  }
};

// Compare heights of .card-content and .card-panel in #about-me element.
// Set shorter element's `height` style to that of the taller element.
const equalizeAboutMe = () => {
  if ($(window).width() > 576) {
    let cardContentHeight = $('#about-me').find('.card-content').outerHeight(true);
    let cardPanelHeight = $('#about-me').find('.card-panel').outerHeight(true);
    let targetHeight = 0;
    if (cardContentHeight > cardPanelHeight) {
      $('#about-me').find('.card-panel').outerHeight(cardContentHeight, false);
    } else {
      $('#about-me').find('.card-content').outerHeight(cardPanelHeight, true);
    }
    // let targetHeight = $('#about-me').find('.card-content').outerHeight(true);
    // $('#about-me').find('.card-panel').outerHeight(targetHeight, false);
  }
};


$(document).ready(() => {
  // Initialize Materialize JS components
  $('.sidenav').sidenav();
  $('.carousel').carousel({
    padding: 200
  });

  // Dynamically set the height of specific cards to make row items equal in height
  // Materialize's CSS makes it impossible to do without JavaScript?
  equalizeAboutMe();
  equalizeRowItems('project-row-3');
});

// On window resize, re-calculate heights and re-set the element heights
$(window).resize(() => {
  // Remove `height` style if window is mobile-size
  if ($(window).width() < 576) {
    for (let projectItem of $(".row").find('article.card-content')) {
      $(projectItem).removeAttr('style');
    }
    $("#about-me").find('.card-panel').removeAttr('style');
  }
  equalizeAboutMe();
  equalizeRowItems('project-row-3');
});