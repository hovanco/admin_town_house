import React, { Component } from "react";
import RoomTypeItem from "../RoomTypeItem/RoomTypeItem";
import { connect } from "react-redux";
import { actFetchRoomTypesRequest, actDeleteRoomTypeRequest } from "./../../actions/RoomTypes";

class RoomTypeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roomType_Ids: []
    }
  }

  componentDidMount() {
    this.props.fetchAllRoomTypes();
  }

  onDelete = (id) => {
    this.props.onDeleteRoomType(id);
  }

  handleOnSelect = id => {
    const { roomType_Ids } = this.state
    if (roomType_Ids.includes(id)) {
      this.setState({ // Xoa 1 phan tu trong mot mang
        roomType_Ids: [...roomType_Ids.filter(element => element !== id)]
      })
    } else {
      this.setState({ // Them 1 phan tu trong mot mang
        roomType_Ids: [...roomType_Ids, id]
      })
    }
  }

  showRoomTypes(room_types) {
    var result = null;
    if (room_types) {
      if (room_types.length > 0) {
        room_types = room_types.sort((a, b) => b.id - a.id); // sap xep theo value gi, cu the o day la id
        result = room_types.map((room_type, index) => {
          return (
            <RoomTypeItem
              onSelect={this.handleOnSelect}
              key={index}
              room_type={room_type}
              index={index}
              checked={this.state.roomType_Ids.includes(room_type.id)} //de truyen t/tinh cho the input vao ProductItem
              onDelete={this.onDelete}
            />
          );
        });
      }
    }
    return result;
  }

  handleOnDeleteSelectedIds = () => {
    const { roomType_Ids } = this.state
    roomType_Ids.forEach(room_type_Id => {
      this.props.onDeleteRoomType(room_type_Id)
    });
  }
  
  render() {
    const { room_types } = this.props;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">LIST ROOM-TYPE</h3>
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
              {this.showRoomTypes(room_types.data)}
              {/* {this.showProducts(products)} phai dua theo cau truc cua API */}
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
    room_types: state.room_types
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllRoomTypes: () => {
      dispatch(actFetchRoomTypesRequest());
    },
    onDeleteRoomType: (id) => {
      dispatch(actDeleteRoomTypeRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomTypeList);