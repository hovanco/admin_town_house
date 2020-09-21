import React, { Component } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import { connect } from "react-redux";
import { actFetchCategorysRequest, actDeleteCategoryRequest } from "./../../actions/Category";

class CategoryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category_Ids: []
    }
  }


  componentDidMount() {
    this.props.fetchAllCategorys();
  }


  onDelete = (id) => {
    this.props.onDeleteCategory(id);
  }

  handleOnSelect = id => {
    const { category_Ids } = this.state
    if (category_Ids.includes(id)) {
      this.setState({ // Xoa 1 phan tu trong mot mang
        category_Ids: [...category_Ids.filter(element => element !== id)]
      })
    } else {
      this.setState({ // Them 1 phan tu trong mot mang
        category_Ids: [...category_Ids, id]
      })
    }
  }

  showCategorys(categorys) {
    var result = null;
    if (categorys) {
      if (categorys.length > 0) {
        categorys = categorys.sort((a, b) => b.id - a.id); // sap xep theo value gi, cu the o day la id
        result = categorys.map((category, index) => {
          return (
            <CategoryItem
              onSelect={this.handleOnSelect}
              key={index}
              category={category}
              index={index}
              checked={this.state.category_Ids.includes(category.id)} //de truyen t/tinh cho the input vao CategoryItem
              onDelete={this.onDelete}
            />
          );
        });
      }
    }
    return result;
  }

  handleOnDeleteSelectedIds = () => {
    const { category_Ids } = this.state
    category_Ids.forEach(categoryId => {
      this.props.onDeleteCategory(categoryId)
    });
  }
  
  render() {
    const { categorys } = this.props;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">LIST CATEGORY </h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th></th>
                <th>No.</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.showCategorys(categorys.data)}
            </tbody>
          </table>
          <button
            onClick={this.handleOnDeleteSelectedIds}
            type="button"
            className="btn btn-danger btn-delete">Delete</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    categorys: state.categorys
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllCategorys: () => {
      dispatch(actFetchCategorysRequest());
    },
    onDeleteCategory: (id) => {
      dispatch(actDeleteCategoryRequest(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);