import { connect } from "react-redux";
import App from "../components/App";
//import serialize from "form-serialize";
//import { getGoodreads, getGoodreadsBook, clearBook } from "../actions";

/*
const mapStateToProps = state => {
  return {
    books: state.goodreads.books,
    book: state.goodreads.book
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      console.log(data);
      let query = data.search;
      dispatch(getGoodreads(query));
      form.reset();
    },
    onClick: e => {
      e.preventDefault();
      let id = e.target.getAttribute("bookid");
      console.log(id);
      dispatch(getGoodreadsBook(id));
    },
    clearBook: e => {
      dispatch(clearBook());
    }
  };
};



const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

*/
export default AppContainer;
