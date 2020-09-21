import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  actAddUserRequest,
  actGetUserRequest,
  actUpdateUserRequest 
} from "./../../actions/Users";
import "../../App.css";

class UserActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtUserName: "",
      txtEmail: "",
      txtPhone: "",
      txtPassword: ""
    };
  }

  componentDidMount() {
    var { match } = this.props
    if (match || "") {
      var id = Number(match.params.id);
      const user = this.props.users.data.forEach(user =>
        user.id === id ? this.setState({
        id: user.id,
        txtName: user.fullName,
        txtUserName: user.username,
        txtEmail: user.email,
        txtPhone: user.phone,
        txtPassword: user.password
      }): null)
      if (user) {
        this.setState({
          id,
          txtName: user.fullName,
          txtUserName: user.username,
          txtEmail: user.email,
          txtPhone: user.phone,
          txtPassword: user.password
        })
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.usersItemEditing) {
      var { usersItemEditing } = nextProps;
      this.setState({
        id: usersItemEditing.id,
        txtName: usersItemEditing.fullName,
        txtUserName: usersItemEditing.username,
        txtEmail: usersItemEditing.email,
        txtPhone: usersItemEditing.phone,
        txtPassword: usersItemEditing.password

      });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  onSave = (e) => {
    e.preventDefault();
    var { id, txtName, txtUserName, txtEmail, txtPhone, txtPassword } = this.state;
    var { history } = this.props;
    var user = {
      id: id,
      fullName: txtName,
      username: txtUserName,
      email: txtEmail,
      phone: txtPhone,
      password: txtPassword
    }
    // console.log(user)

    if (id === Number(this.props.match.params.id)) { //update product by id
      this.props.onUpdateUser(user);
    } else { //add new product by id
      this.props.onAddUser(user);
    }
    history.goBack();
  }

  goBack = () =>{
    this.props.history.goBack();
  }

  render() {
    var { txtName, txtUserName, txtEmail, txtPhone, txtPassword } = this.state;
    return (
      <div className="form-center">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>FullName:</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName || ""}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>UserName:</label>
            <input
              type="text"
              className="form-control"
              name="txtUserName"
              value={txtUserName || ""}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              name="txtEmail"
              value={txtEmail || ""}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="number"
              className="form-control"
              name="txtPhone"
              value={txtPhone || ""}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              name="txtPassword"
              autoComplete="current-password"
              value={txtPassword || ""}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
          <Link to="/user-list" className="btn btn-danger mr-10" onClick={this.goBack}>Cancel</Link>
        </form>
      </div>
         
      
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    usersItemEditing: state.usersItemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddUser: (user) => {
      dispatch(actAddUserRequest(user)); // add data
    },
    onEditUser: (id) => {
      dispatch(actGetUserRequest(id)); // show data
    },
    onUpdateUser: (user) => {
      dispatch(actUpdateUserRequest(user)); // // update data
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserActionPage);