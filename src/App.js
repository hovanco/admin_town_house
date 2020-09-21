import React, { Component } from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/homes/Home";
import Login from "./components/logins/Login";
import Register from "./components/registers/Register";
import Profile from "./components/profiles/Profile";
import NotFoundPage from "./components/notfoundpages/NotFoundPage";
import Users from "./components/users/Users";
import Languages from "./components/languages/Languages";
import RoomTypes from "./components/roomtypes/RoomTypes";
import Citys from "./components/citys/Citys";
import Categories from "./components/categories/Categories";
import Bookings from "./components/bookings/Bookings";
import Revenues from "./components/revenues/Revenues";
import Hosts from "./components/hosts/Hosts";
import CategoryActionPage from "./pages/CategoryActionPage/CategoryActionPage";
import RoomTypeActionPage from "./pages/RoomTypeActionPage/RoomTypeActionPage";
import CityActionPage from "./pages/CityActionPage/CityActionPage";
import LanguageActionPage from "./pages/LanguageActionPage/LanguageActionPage";
import UserActionPage from "./pages/UserActionPage/UserActionPage";
import HostActionPage from "./pages/HostActionPage/HostActionPage";
import BookingActionPage from "./pages/BookingActionPage/BookingActionPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-body"> 
          <Switch>
            <Route path="/" exact component={Login} /> 
            <Route path="/users" component={Users} />
            <Route path="/languages" component={Languages} />
            <Route path="/roomtypes" component={RoomTypes} />
            <Route path="/citys" component={Citys} />
            <Route path="/categories" component={Categories} />
            <Route path="/bookings" component={Bookings} />
            <Route path="/revenues" component={Revenues} />
            <Route path="/hosts" component={Hosts} />
            
            {/* cac router them vao de chay CRUD category */}
            <Route path="/category/add" component={CategoryActionPage} /> 
            <Route path="/category-list" component={CategoryActionPage} />
            <Route path="/category/:id/edit"  component={CategoryActionPage} />

            {/* cac router them vao de chay CRUD room type */}
            <Route path="/roomtype/add" component={RoomTypeActionPage} /> 
            <Route path="/roomtype-list" component={RoomTypeActionPage} />
            <Route path="/roomtype/:id/edit"  component={RoomTypeActionPage} />

            {/* cac router them vao de chay CRUD citys */}
            <Route path="/city/add" component={CityActionPage} /> 
            <Route path="/city-list" component={CityActionPage} />
            <Route path="/city/:id/edit"  component={CityActionPage} />

            {/* cac router them vao de chay CRUD languages */}
            <Route path="/language/add" component={LanguageActionPage} /> 
            <Route path="/language-list" component={LanguageActionPage} />
            <Route path="/language/:id/edit"  component={LanguageActionPage} />

            {/* cac router them vao de chay CRUD users */}
            <Route path="/user/add" component={UserActionPage} /> 
            <Route path="/user-list" component={UserActionPage} />
            <Route path="/user/:id/edit"  component={UserActionPage} />

            {/* cac router them vao de chay CRUD hosts */}
            <Route path="/host/add" component={HostActionPage} /> 
            <Route path="/host-list" component={HostActionPage} />
            <Route path="/host/:id/edit"  component={HostActionPage} />

            {/* cac router them vao de chay CRUD booking */}
            <Route path="/booking/add" component={BookingActionPage} /> 
            <Route path="/booking-list" component={BookingActionPage} />
            <Route path="/booking/:id/edit"  component={BookingActionPage} />


            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} /> 
            <Route path="/profile" component={Profile} /> 
            <Route component={NotFoundPage} /> 
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
