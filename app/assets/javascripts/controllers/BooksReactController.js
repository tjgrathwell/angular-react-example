angular.module('tableRendering').controller('BooksController', function ($scope, $http, $filter) {
  $scope.sortColumn = 'title';
  $scope.sortReverse = false;
  var BooksController = this;

  $scope.data = {};
  $scope.ctrl = this;

  this.assignReactData = function () {
    $scope.data = {
      selectedBook: $scope.selectedBook,
      books: $filter('orderBy')($scope.books, $scope.sortColumn, $scope.sortReverse)
    };
  };

  this.selectBook = function (book) {
    $scope.selectedBook = book;
    this.assignReactData();
  };

  this.toggleSort = function (newSortColumn) {
    if ($scope.sortColumn == newSortColumn) {
      $scope.sortReverse = !$scope.sortReverse;
    }
    $scope.sortColumn = newSortColumn;
    this.assignReactData();
  };

  this.refreshBooks = function () {
    $http.get('/books.json?count=1000').then(function (response) {
      $scope.books = response.data;
      BooksController.assignReactData();
    });
  };

  this.refreshBooks()
});
