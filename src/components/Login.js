import { Component } from "react";
import "./login.css"
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import {  Form, Nav, Navbar } from "react-bootstrap";
class Login extends Component {
   
    state={
        email:"",
        password:"",
        message:"",
        customer:true
    }

    componentDidMount(){
      if(sessionStorage.getItem("user")==="customer" || sessionStorage.getItem("user")==="admin"){
        this.props.history.replace("/");
      }
      
    }


    validateForm=()=> {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }
    

    handleSubmit=(event)=> {
        this.setState({message:""})
        event.preventDefault()
        if(this.state.customer){
          if(this.state.email=="customer@bookstore.com" && this.state.password=="customerpwd"){
            sessionStorage.setItem('user', "customer");
            this.props.history.replace("/");
           
        }
        else{
            this.setState({message:"Incorrect Credentials"})
        }
        }
        else{
          if(this.state.email=="admin@bookstore.com" && this.state.password=="adminpwd"){
            sessionStorage.setItem('user', "admin");
            this.props.history.replace("/");
           
        }
        else{
            this.setState({message:"Incorrect Credentials"})
        }
        }
      

    }

    

    render(){
          return(      
          
            <div className="container">
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/">BookStore</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <button type="button" class="btn" onClick={()=>{this.setState({customer:true,email:"",password:""})}}>Customer</button>
                <button type="button" class="btn" onClick={()=>{this.setState({customer:false,email:"",password:""})}}>Admin</button>
                
              </Navbar.Collapse>
            </Navbar>

          <div className="Login">

            {this.state.customer && <h3 style={{textAlign:'center'}}>Customer Login</h3>}
            {!this.state.customer && <h3 style={{textAlign:'center'}}>Admin Login</h3>}
            <br></br>
            <Form onSubmit={e=>this.handleSubmit(e)}>
                <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={(e) => this.setState({email:e.target.value})}
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({password:e.target.value})}
                />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!this.validateForm()}>
                Login
                </Button>
                <br></br>
                <div style={{textAlign:"center",color:"red"}}>{this.state.message}</div>
            </Form>
            
            </div>
            </div>
          )}
}

export default withRouter(Login);