
import React from 'react';

const BookForm = (props) => {
    let titleInput, authorInput, priceInput, yearInput,ratingInput,publisherInput,categoryInput,bookUrlInput = null;
    return (
      <form onSubmit={e => {
            e.preventDefault();
            var data = {
              title: titleInput.value,
              author: authorInput.value,
              price: priceInput.value,
              year: yearInput.value,
              rating:ratingInput.value,
              publisher:publisherInput.value,
              category:categoryInput.value,
              bookUrl:bookUrlInput.value
            };
            if(props.type==="update")
            data["_id"]=props.curBook._id
            props.addBookhandler(data);
            props.handleCloseModel();
            e.target.reset();
          }}
            className="form-horizontal"
      >
        <div className="input-group">
          <label className="col-sm-2 control-label">Title: </label>
          <div className="col-sm-10">
            <input required
              defaultValue={props.curBook.title} 
              type="text"
              name="title"
              ref={node => titleInput = node}
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <label className="col-sm-2 control-label">Author: </label>
          <div className="col-sm-10">
            <input required
              defaultValue={props.curBook.author}
              type="text"
              name="author"
              ref={node => authorInput = node}
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <label className="col-sm-2 control-label">Category: </label>
          <div className="col-sm-10">
            <select required
              defaultValue={props.curBook.category}
              type="text"
              name="category"
              ref={node => categoryInput = node}
              className="form-control" >  
              <option>Adventure</option>
              <option>Comic</option>
              <option>Drama</option>
              <option>Horror</option>
              <option>Thriller</option>
            </select>
          </div>
        </div>
        <br/>
        <div className="input-group">
          <label className="col-sm-2 control-label">Image: </label>
          <div className="col-sm-10">
            <input required
              defaultValue={props.curBook.bookUrl}
              type="url"
              name="bookUrl"
              ref={node => bookUrlInput = node}
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <label className="col-sm-2 control-label">Publisher: </label>
          <div className="col-sm-10">
            <input required
              defaultValue={props.curBook.publisher}
              type="text"
              name="publisher"
              ref={node => publisherInput = node}
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <label className="col-sm-2 control-label">Price: </label>
          <div className="col-sm-10">
            <input required
              defaultValue={props.curBook.price}
              type="number"
              name="price"
              ref={node => priceInput = node}
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <label className="col-sm-2 control-label">Year: </label>
          <div className="col-sm-10">
            <input required
              defaultValue={props.curBook.year}
              type="text"
              name="year"
              ref={node => yearInput = node}
              className="form-control" />
          </div>
        </div>
        <br/>

        <div className="input-group">
          <label className="col-sm-2 control-label">Rating: </label>
          <div className="col-sm-10">
            <input required
              defaultValue={props.curBook.rating}
              type="number"
              name="rating"
              min="1" max="5"
              ref={node => ratingInput = node}
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <div className="col-sm-offset-2 col-sm-10">
            <input type="submit" className="btn btn-primary"/>
          </div>
        </div>
      </form>
    );
};

export default BookForm;
