import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import CategoryList from "../CategoryList/CategoryList";
import { Link } from "react-router-dom";

class Catigories extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/category/add" className="btn btn-success mb-10">Add New Category</Link>
          <CategoryList />
        </div>
      </>
    )
  }
}
export default Catigories;
