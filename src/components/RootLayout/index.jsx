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
          element={
            <Reservation dispatch={dispatch} slots={state.availableSlots} />
          }
        />
      </Routes>

      <h2 id="bookings-heading">Bookings List</h2>

      <table aria-labelledby="bookings-heading">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Occasion</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
          </tr>
        </thead>

        <tbody>
          {state.bookingList.map(
            (
              {
                guestName,
                guestNumber,
                occasion,
                reservationDate,
                reservationTime,
              },
              index
            ) => (
              <tr key={index}>
                <td>{guestName}</td>
                <td>{guestNumber}</td>
                <td>{occasion}</td>
                <td>{reservationDate}</td>
                <td>{reservationTime}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </main>
  );
};
