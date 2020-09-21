import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  actAddCategoryRequest,
  actGetCategoryRequest,
  actUpdateCategoryRequest
} from "../../actions/Category";
import "../../App.css";

class CategoryActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtDescription: ""
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match || "") {
      var id = Number(match.params.id);
      const category = this.props.categorys.data.forEach(category => 
        category.id === id ? this.setState({
          id: category.id,
          txtName: category.name,
          txtDescription: category.description
        }) : null)
        if (category) {
        this.setState({
          id,
          txtName: category.name,
          txtDescription: category.description
        })
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtDescription: itemEditing.description
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
    var { id, txtName, txtDescription } = this.state;
    var { history } = this.props;
    var category = {
      id: id,
      name: txtName,
      description: txtDescription
    }
    if (id === Number(this.props.match.params.id)) { //update category by id
      this.props.onUpdateCategory(category);
    } else { //add new category by id
      this.props.onAddCategory(category);
    }
    history.goBack();
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    var { txtName, txtDescription } = this.state;
    return (
      <div className="form-center">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName || ""}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              name="txtDescription"
              value={txtDescription || ""}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
          <Link to="/category-list" className="btn btn-danger mr-10" onClick={this.goBack}>Cancel</Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categorys: state.categorys,
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddCategory: (category) => {
      dispatch(actAddCategoryRequest(category)); 
    },
    onEditCategory: (id) => {
      dispatch(actGetCategoryRequest(id)); 
    },
    onUpdateCategory: (category) => {
      dispatch(actUpdateCategoryRequest(category)); 
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryActionPage);
