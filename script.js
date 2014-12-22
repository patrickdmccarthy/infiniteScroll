
angular.module('testApp', [])
  .controller('MainCtrl', function ($scope) {

    var app = this;
    app.data = [];
    app.id = 1;

    app.loadItems = function(){
      for(i = 0; i < 50; i++){
        app.data.push({
          id: app.id,
          name: "Name " + app.id,
          description: "Description " + app.id
        });
        app.id++;
      }
    }
    app.loadItems();
  })

  
  .directive('infiniteScroll', function(){
    return {
      restrict: 'A',
      scope: {
        ajaxCall: '&'
      },
      link: function (scope, elem, attrs){
        box = elem[0];
        elem.bind('scroll', function(){
          if((box.scrollTop + box.offsetHeight) >= box.scrollHeight){
            scope.$apply(scope.ajaxCall)
          }
        })
        }
      } 
  })