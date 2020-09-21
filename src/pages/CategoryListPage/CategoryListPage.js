import React, { Component } from "react";
import CategoryList from "./../../componets/CategoryList/CategoryList";
import { Link } from "react-router-dom";

class CategoryListPage extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/category/add" className="btn btn-success mb-10">Add New Category</Link>
        <CategoryList />
      </div>
    );
  }
}
export default CategoryListPage;