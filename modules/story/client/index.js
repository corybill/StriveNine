/**
 * Created with IntelliJ IDEA.
 * User: Cory
 * Date: 1/19/14
 * Time: 6:08 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

var moduleName = 'story';

module.exports = function (angular) {
    angular.module(moduleName, [])
        .directive('ourStory', require('./directives/storyDirective'))
        .directive('storyContent', require('./directives/storyContentDirective'))
        .service('$storyService', require('./services/storyService'))
        .controller('storyContentController', require('./controllers/storyContentController'))
        .config(function ($routeProvider) {
            $routeProvider
                .when("/story", {templateUrl: "story"});
        });
    return moduleName;
};