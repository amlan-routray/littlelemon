import React from "react";

import { HomePage } from "../../routes/Homepage";
import { Route, Routes } from "react-router";
import { Menu } from "../../routes/Menu";
import { Reservation } from "../../routes/Reservation";
import { bookingReducer, initialState } from "../../utilities/bookingReducer";

export const RootLayout = () => {
  const [state, dispatch] = React.useReducer(bookingReducer, initialState);
  return (
    <main>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservation"
          element={<Reservation dispatch={dispatch} slots={state.availableSlots} />}
        />
      </Routes>
      <h2>Bookings List</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>Occasion</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
        {state.bookingList.map(
          ({ guestName, guestNumber, occasion, reservationDate, reservationTime }) => (
            <tr>
              <td>{guestName}</td>
              <td>{guestNumber}</td>
              <td>{occasion}</td>
              <td>{reservationDate}</td>
              <td>{reservationTime}</td>
            </tr>
          )
        )}
      </table>
    </main>
  );
};
