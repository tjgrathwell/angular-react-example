angular.module('tableRendering').directive('ngReactComponent', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {

      if (!attrs.ngReactComponent) {
        throw new Error('ngReactComponent expected attribute to be the name of a react component');
      }

      var renderComponent = function() {
        $timeout(function() {
          React.renderComponent(
            // For now, expect the React Component to be globally available on window
            window[attrs.ngReactComponent]({
              scope: scope,
              dataProp: attrs.data
            }),
            elem[0]
          );
        });
      };

      // attrs.data is optional
      if (attrs.data) {
        scope.$watch(attrs.data, renderComponent, true);
      } else {
        renderComponent();
      }
    }
  }
});
