/** @jsx React.DOM */
window.BooksComponent = React.createClass({
  render: function() {
    var scope = this.props.scope;
    var ctrl = this.props.scope.ctrl;
    var data = scope[this.props.dataProp];

    var cx = React.addons.classSet;

    var bookRowClasses = function (book) {
      return cx({
        selected: scope.selectedBook == book
      });
    };

    var bookRows = _.map(data.books, function(book) {
      var rowClick = function () {
        scope.$apply(function () {
          ctrl.selectBook(book);
        });
      };

      return (
        <tr key={book.id} className={bookRowClasses(book)} onClick={rowClick}>
          <td>
            {book.title}
          </td>
          <td>
            {book.author}
          </td>
        </tr>
      );
    });

    return (
      <tbody>
        {bookRows}
      </tbody>
    );
  }
});
