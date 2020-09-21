import React, { Component } from "react";
import { Link } from 'react-router-dom';

class HostItem extends Component {
  
  onDelete = (id) => {
    if (confirm("ban muon xoa?")) {//eslint-disable-line
      this.props.onDelete(id)
    }
  }

  onSelectHost = id => {
    this.props.onSelect(id)
  }

  render() {
    var { host, index } = this.props;
    return (
      <tr>
        {/* <td>
          <input type="checkbox"
            className=""
            checked={this.props.checked} // nhan ckecked thong qua props tu ProductList truyen vao
            onChange={() => this.onSelectHost(host.id)} />
        </td> */}
        <td>{index + 1}</td>
        <td>{host.user.fullName}</td>
        <td>{host.name}</td>
        <td>{host.standardPriceMondayToThursday}</td>
        <td>{host.hostCategory.name}</td>
        <td>{host.hostCity.name}</td>
        <td>{host.languages[0].name}</td>
        {/* <td>
          <Link to={`/host/${host.id}/edit`} className="btn btn-warning mr-10">Update</Link>
        </td> */}
        </tr>
    )
  }
}
export default HostItem;