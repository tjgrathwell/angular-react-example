angular.module('tableRendering').controller('BooksController', function ($scope, $http) {
  $scope.sortColumn = 'title';
  $scope.sortReverse = false;

  this.selectBook = function (book) {
    $scope.selectedBook = book;
  };

  this.toggleSort = function (newSortColumn) {
    if ($scope.sortColumn == newSortColumn) {
      $scope.sortReverse = !$scope.sortReverse;
    }
    $scope.sortColumn = newSortColumn;
  };

  this.refreshBooks = function () {
    $http.get('/books.json?count=1000').then(function (response) {
      $scope.books = response.data;
    });
  };

  this.refreshBooks()
});
