import React, { Component } from "react";
import { Link } from 'react-router-dom';

class CategoryItem extends Component {
  onDelete = (id) => {
    if (confirm("ban muon xoa?")) {//eslint-disable-line
      this.props.onDelete(id)
    }
  }
  onSelectCategory = id => {
    this.props.onSelect(id)
  }
  render() {
    var { category, index } = this.props;
    console.log(category, 'category');
    return (
      <tr>
        <td>
          <input type="checkbox"
            className=""
            checked={this.props.checked} // nhan ckecked thong qua props tu ProductList truyen vao
            onChange={() => this.onSelectCategory(category.id)} />
        </td>
        <td>{index + 1}</td>
        <td>{category.name}</td>
        <td>{category.description}</td>
        <td>
          <Link to={`/category/${category.id}/edit`} className="btn btn-warning mr-10">Update</Link>
        </td>
      </tr>
    )
  }
}
export default CategoryItem;
