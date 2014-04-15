// © Tui Popenoe, 2014
'use strict';

// Filters Module

angular.module('tuipopenoeFilters', []).filter('checkmark', function(){
    return function(input){
        return input ? '\u2713' : '\u2718';
    };
});