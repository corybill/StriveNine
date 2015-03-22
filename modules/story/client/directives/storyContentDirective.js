'use strict';

module.exports = function () {
  return {
    restrict : 'E',
    replace : true,
    link: require('../links/storyContentLink'),
    scope: {
        next: "@nextSet",
        identifier: "@id",
        lastFull: "@lastItem"
    },
    templateUrl: '/component/story/storyContentComponent'
  };
};