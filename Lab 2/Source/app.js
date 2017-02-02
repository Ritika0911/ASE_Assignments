/**
 * Created by Ritika on 01-02-2017.
 */
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    "use strict";
    $routeProvider
        .when('/', {
            templateUrl: 'firstpage.html',
            controller: 'firstpageController'
        })
        .when('/Log In', {
            templateUrl: 'login.html',
            controller: 'loginController'
        })
        .when('/register', {
            templateUrl: 'register.html',
            controller: 'registerController'
        })
        .when('/directions', {
            templateUrl: 'directions.html',
            controller: 'dirController'
        })
        .when('/weather', {
            templateUrl: 'weather.html',
            controller: 'weatherctrl'
        })

        .otherwise({ redirectTo: '/login' });

});

animateApp.controller('firstpageController', function($scope) {
    "use strict";
    $scope.pageClass = 'firstpage';
});

animateApp.controller('loginController',function($scope) {
    "use strict";
    $scope.pageClass = 'login';
});

animateApp.controller('registerController', function($scope) {
    "use strict";
    $scope.pageClass = 'register';
});

animateApp.controller('dirController', function($scope) {
    "use strict";
    $scope.pageClass = 'directions';
});

animateApp.controller('weatherController', function($scope) {
    "use strict";
    $scope.pageClass = 'weather';
});

/*welcome  page js*/

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })
})(jQuery); // End of use strict
//register page js

(function ($) {
    $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            }
            else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }

        // Initialization
        function init() {

            updateDisplay();

            // Inject the icon if applicable
            if ($button.find('.state-icon').length === 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i>');
            }
        }
        init();
    });
});
