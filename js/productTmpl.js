angular.module('assessment').directive('productTmpl', function(){
    return {
        restrict: 'AE',
        templateUrl: './views/product-tmpl.html',
        scope: {
            product: '=',
            show: '='
        },
        link: function(scope, elem, attrs){

        },
        controller: function($scope, shopService){
            
        }
    }
})