import "../App.css"
import { Navbar, Nav, Form, FormControl, Modal, Button } from "react-bootstrap";
import { FaShoppingCart,FaSignOutAlt } from "react-icons/fa";
import { Component } from "react";
import BookDetails from "./BookDetails";
import BookForm from "./BookForm";
import CartItems from "./cartitems";
import PaymentPage from "./PaymentPage";
import ThanksPage from "./ThanksPage";
import { withRouter } from "react-router";

class HomePage extends Component {
  query="popular";
  state = {
    books: [],
    show: false,
    cartShow: false,
    paymentShow:false,
    thankShow:false,
    cartBooks: [],
    paymentOption:"none",
    modalType:"new",
    curBook:{},
    inputs:{},
    authors:[],
    author:"",
    category:""
  };

  handlePaymentOption=(option)=>{
    this.setState({paymentOption:option})
  }

  handleCloseModel = () => {
    if(!this.state.show)
    this.setState({ modalType: "new",curBook:{} });
    this.setState({ show: !this.state.show });
    
  };

  handleCartCloseModel = () => {
    this.setState({ cartShow: !this.state.cartShow });
  };

  handlePaymentCloseModel = () => {
    this.setState({ paymentShow: !this.state.paymentShow });
  };

  handleThanksPageCloseModel = () => {
    this.setState({ thankShow: !this.state.thankShow });
  };

  handleCheckOut = ()=> {
    this.setState({ cartShow: !this.state.cartShow ,paymentShow:!this.state.paymentShow});

  };
  handleProceedToPay = ()=> {
    this.setState({ paymentShow:!this.state.paymentShow,cartBooks: [],thankShow:!this.state.thankShow});
    

  };
  addToCart = (book) => {
    let books=this.state.cartBooks;
    books.push(book);
    this.setState({ cartBooks: books });
  };
  updateBook=(book)=>{
    this.setState({modalType: "update"})
    this.setState({ show: !this.state.show,curBook:book });
  }

  deleteBook = (book) => {
    console.log(book._id)
    fetch("http://localhost:8081/api/delete/"+book._id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(response => response.json()).then(out=>{
      console.log(out);
      let books=this.state.books;
      const index = books.indexOf(book);
      if (index > -1) {
        books.splice(index, 1);
      }
      this.setState({ books: books });
    });
  };

  removeFromCart = (book) => {
    let books=this.state.cartBooks;
    const index = books.indexOf(book);
    if (index > -1) {
      books.splice(index, 1);
    }
    this.setState({ cartBooks: books });
  };
  handleFilterChange = (event) => {
    let val = event.target.value;
  
    if (val === "1") this.query="popular";
    if (val === "2") this.query="new";
    if (val === "3") this.query="collection";
    if (val === "4") this.query="authors";
  
    fetch('http://localhost:8081/api/'+this.query)
    .then(response => response.json())
    .then(data => {
      this.setState({books:data});
    });
  };

  handleAuthorChange=(event)=>{
    let val=event.target.value;
    this.setState({author:val})
    fetch('http://localhost:8081/api/filter/?author='+val+"&category="+this.state.category)
    .then(response => response.json())
    .then(data => {
      this.setState({books:data});
    });
  }
  handleCategoryChange=(event)=>{
    let val=event.target.value;
    this.setState({category:val})
    fetch('http://localhost:8081/api/filter/?category='+val+"&author="+this.state.author)
    .then(response => response.json())
    .then(data => {
      this.setState({books:data});
    });
  }

  onSearchChangeHandler=(event)=>{
  
    let val = event.target.value.trim();
    if(val){
      fetch('http://localhost:8081/api/search/'+val)
      .then(response => response.json())
      .then(data => {
        this.setState({books:data});
      });
    }
    else{
      fetch('http://localhost:8081/api/'+this.query)
      .then(response => response.json())
      .then(data => {
        this.setState({books:data});
      });
    }
  }

  componentDidMount(){

    if(sessionStorage.getItem("user")==="customer" || sessionStorage.getItem("user")==="admin"){
      fetch('http://localhost:8081/api/popular')
      .then(response => response.json())
      .then(data => {
        this.setState({books:data});
      });
      fetch('http://localhost:8081/api/fetchauthors')
      .then(response => response.json())
      .then(data => {
        let uniqueArray = data.map(function(item, pos, self) {
          return item.toUpperCase();
          })
         uniqueArray = uniqueArray.filter(function(item, pos, self) {
          return self.indexOf(item) === pos;
          })
           uniqueArray = uniqueArray.map(function(item, pos, self) {
            return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
            })
        
        
        this.setState({authors:uniqueArray});

      });
    }
    else{
      this.props.history.replace("/login");
    }


  }
  refreshAuthor(){
    fetch('http://localhost:8081/api/fetchauthors')
    .then(response => response.json())
    .then(data => {
      let uniqueArray = data.map(function(item, pos, self) {
        return item.toUpperCase();
        })
       uniqueArray = uniqueArray.filter(function(item, pos, self) {
        return self.indexOf(item) === pos;
        })
         uniqueArray = uniqueArray.map(function(item, pos, self) {
          return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
          })
      
      
      this.setState({authors:uniqueArray});

    });
  }

  addBookhandler = (data) => {

    if(this.state.modalType==="update"){

      fetch("http://localhost:8081/api/update/"+data._id, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }).then(response => response.json()).then(out=>{
        console.log(out);
        fetch('http://localhost:8081/api/'+this.query)
        .then(response => response.json())
        .then(data => {
          this.setState({books:data});
          this.refreshAuthor();
        });
      });
    }
    else{
      fetch("http://localhost:8081/api/book/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }).then(response => response.json()).then(out=>{
        console.log(out);
        fetch('http://localhost:8081/api/'+this.query)
        .then(response => response.json())
        .then(data => {
          this.setState({books:data});
          this.refreshAuthor();
        });
      });
    }



    
  };

  handleLogout=()=>{
    sessionStorage.setItem('user', "");
    this.props.history.replace("/login");
  }

 

  render() {
    return (
      <div style={{padding:"5px"}}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand style={{fontSize:30}} href="/">BookStore { <span style={{fontSize:20,textTransform:'capitalize'}}>- {sessionStorage.getItem("user")}</span>}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <a href="/" style={{marginLeft:"20px"}}>
              <span>Home</span>
            </a>
            <a href="/contact" style={{marginLeft:"20px"}}>
              <span>Contact</span>
            </a>
            <a href="/about" style={{marginLeft:"20px"}}>
              <span>About Us</span>
            </a>
            <Form inline style={{marginLeft:"20px"}}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={this.onSearchChangeHandler.bind(this)}
              />
            </Form>

            {sessionStorage.getItem("user")!=="admin" &&
            <a href="#" Z>
              <FaShoppingCart onClick={this.handleCartCloseModel} />
              <sup>{this.state.cartBooks.length > 0 && this.state.cartBooks.length}</sup>
            </a>
  }

          <a href="#" style={{marginLeft:"20px"}}>
              <FaSignOutAlt onClick={this.handleLogout} />
              
            </a>
  

          </Navbar.Collapse>
        </Navbar>
        <div style={{ marginTop: "25px",marginLeft:"30px",marginRight:"30px" }}>
          <div className="d-flex justify-content-between">
            <div>
              <Form.Group>
                <FormControl
                  as="select"
                  style={{ width: "200px" }}
                  onChange={this.handleFilterChange.bind(this)}
                >
                  <option value="1">Popular</option>
                  <option value="2">New Releases</option>
                  <option value="3">Collection</option>
                  <option value="4">Authors</option>
                </FormControl>
              </Form.Group>
            </div>

            <div>
            <div className="input-group">
            <label className="col-sm-3 control-label" style={{marginTop:"5px"}}>Author: </label>
          <div className="col-sm-9">

                <FormControl
                  as="select"
                  style={{ width: "200px" }}
                  placeholder=""
                  onChange={this.handleAuthorChange.bind(this)}
                >
                    <option value="" selected>Choose one</option>
                   {this.state.authors.map((author, i) => {
                     return <option key={i} value={author}>{author}</option>
                   })}
                </FormControl>
              </div>
            </div>
            </div>

            <div>
            <div className="input-group">
            <label className="col-sm-3 control-label" style={{marginTop:"5px"}}>Category: </label>
          <div className="col-sm-9">

                <FormControl
                  as="select"
                  style={{ width: "200px" }}
                  placeholder=""
                  onChange={this.handleCategoryChange.bind(this)}
                >
                    <option value="" selected>Choose one</option>
                    <option>Action and adventure</option>
              <option>Comic</option>
              <option>Drama</option>
              <option>Horror</option>
              <option>Thriller</option>
                </FormControl>
              </div>
            </div>
            </div>
            
            <div>
            {sessionStorage.getItem("user")!=="customer" && <Button onClick={this.handleCloseModel}>Add new Book</Button>}

              <Modal
                animation={false}
                show={this.state.show}
                onHide={this.handleCloseModel}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>{this.state.modalType=="new" && "Add a new Book"} {this.state.modalType=="update" && "Update the Book"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BookForm
                   type={this.state.modalType}
                   curBook={this.state.curBook}
                    handleCloseModel={this.handleCloseModel}
                    addBookhandler={this.addBookhandler}
                   
                  />
                </Modal.Body>
              </Modal>


              <Modal
                animation={false}
                show={this.state.cartShow}
                onHide={this.handleCartCloseModel}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Cart Items</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <CartItems
                    removeFromCart={this.removeFromCart}
                    books={this.state.cartBooks}
                    handleCO={this.handleCheckOut}
                  />
                </Modal.Body>
              </Modal>

              <Modal
                animation={false}
                show={this.state.paymentShow}
                onHide={this.handlePaymentCloseModel}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <PaymentPage
                  handlePToP={this.handleProceedToPay}
                  paymentOption={this.state.paymentOption}
                  handlePaymentOption={this.handlePaymentOption}
                  />
                </Modal.Body>
              </Modal>
              <Modal
                animation={false}
                show={this.state.thankShow}
                onHide={this.handleThanksPageCloseModel}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 <ThanksPage></ThanksPage>
                </Modal.Body>
              </Modal>

            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "5px",marginLeft:"30px",marginRight:"30px" }}>
          {this.state.books.map((b, i) => {
            return (
              <div className="col-4" key={i} style={{ marginBottom: "20px" }}>
                <BookDetails book={b} addToCart={this.addToCart} 
                 cartBooks={this.state.cartBooks}
                
                 updateBook={this.updateBook}
                 deleteBook={this.deleteBook}
                 removeFromCart={this.removeFromCart}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);