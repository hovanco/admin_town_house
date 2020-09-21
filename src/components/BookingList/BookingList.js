import React, { Component } from "react";
import BookingItem from "../BookingItem/BookingItem";
import { connect } from "react-redux";
import { actFetchBookingsRequest, actDeleteBookingRequest } from "./../../actions/Bookings";

class BookingList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      booking_Ids: []
    }
  }

  componentDidMount() {
    this.props.fetchAllBookings();
  }

  onDelete = (id) => {
    this.props.onDeleteBooking(id);
  }

  handleOnSelect = id => {
    const { booking_Ids } = this.state
    if (booking_Ids.includes(id)) {
      this.setState({ // Xoa 1 phan tu trong mot mang
        booking_Ids: [...booking_Ids.filter(element => element !== id)]
      })
    } else {
      this.setState({ // Them 1 phan tu trong mot mang
        booking_Ids: [...booking_Ids, id]
      })
    }
  }

  showBookings(bookings) {
    var result = null;
    if (bookings) {
      if (bookings.length > 0) {
        bookings = bookings.sort((a, b) => b.id - a.id); // sap xep theo value gi, cu the o day la id
        result = bookings.map((booking, index) => {
          return (
            <BookingItem
              onSelect={this.handleOnSelect}
              key={index}
              booking={booking}
              index={index}
              checked={this.state.booking_Ids.includes(booking.id)} //de truyen t/tinh cho the input vao ProductItem
              onDelete={this.onDelete}
            />
          );
        });
      }
    }
    return result;
  }

  handleOnDeleteSelectedIds = () => {
    const { booking_Ids } = this.state
    booking_Ids.forEach(booking_Id => {
      this.props.onDeleteBooking(booking_Id);
    });
  }
  
  render() {
    const { bookings } = this.props;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">LIST BOOKING</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                {/* <th></th> */}
                <th>No.</th>
                <th>bookingCode</th>
                <th>checkInDate</th>
                <th>checkOutDate</th>
                <th>pricePerNight</th>
                <th>totalPrice</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {this.showBookings(bookings.data)}
            </tbody>
          </table>
          {/* <button
            onClick={this.handleOnDeleteSelectedIds}
            type="button"
            className="btn btn-danger btn-delete">Delete
          </button> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookings: state.bookings
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllBookings: () => {
      dispatch(actFetchBookingsRequest());
    },
    onDeleteBooking: (id) => {
      dispatch(actDeleteBookingRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingList);