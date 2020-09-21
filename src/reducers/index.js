import { combineReducers } from "redux";

import categorys from "./categorys";
import categoryItemEditing from "./categoryItemEditing";

import room_types from "./roomtypes";
import roomTypeItemEditing from "./roomTypeItemEditing";

import citys from "./reducer-city/citys";
import cityItemEditing from "./reducer-city/cityItemEditing";

import languages from "./reducer-language/languages";
import languageItemEditing from "./reducer-language/languageItemEditing";

import users from "./reducer-user/users";
import userItemEditing from "./reducer-user/userItemEditing";

import hosts from "./reducer-host/hosts";
import hostItemEditing from "./reducer-host/hostItemEditing";

import bookings from "./reducer-booking/bookings";
import bookingItemEditing from "./reducer-booking/bookingItemEditing";


const appReducers = combineReducers({
  categorys,
  categoryItemEditing,

  room_types,
  roomTypeItemEditing,

  citys,
  cityItemEditing,

  languages,
  languageItemEditing,

  users,
  userItemEditing,

  hosts,
  hostItemEditing,

  bookings,
  bookingItemEditing,
});

export default appReducers;