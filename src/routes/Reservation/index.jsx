import React from "react";
import { Dialog } from "../../common/Dialog";
import { submitAPI } from "../../utilities/fetchFakeApiData";

// Private
const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // "YYYY-MM-DD"
};

export const Reservation = ({ dispatch, slots }) => {
  const [isTableConfirmed, setTableConfirmation] = React.useState(false);
  const [
    { guestName, guestNumber, reservationDate, reservationTime, occasion },
    setGuestInfo,
  ] = React.useState({
    guestName: "",
    guestNumber: 1,
    reservationDate: getTodayDate(),
    reservationTime: slots[0],
    occasion: "Birthday",
  });

  const updateGuestNumber = (isDecrement = false) => {
    setGuestInfo((prev) => {
      const { guestNumber } = prev;
      if (isDecrement && guestNumber !== 1)
        return { ...prev, guestNumber: guestNumber - 1 }; // Minimum allowed guest 1
      if (!isDecrement && guestNumber < 12)
        return { ...prev, guestNumber: guestNumber + 1 }; // Maximum allowed guest 12
      return prev;
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "reservationDate")
      dispatch({ type: "SET_SLOTS", payload: new Date(value) });
    setGuestInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleReservation = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const {
      guestName,
      guestNumber,
      reservationDate,
      reservationTime,
      occasion,
    } = e.target;
    const finalGuestData = {
      guestName: guestName.value,
      guestNumber: guestNumber.value,
      reservationDate: reservationDate.value,
      reservationTime: reservationTime.value,
      occasion: occasion.value,
    };
    setGuestInfo(finalGuestData);
    dispatch({type: 'ADD_BOOKING', payload: finalGuestData})
    const isReservationSuccessful = await submitAPI(finalGuestData);
    isReservationSuccessful && setTableConfirmation(true);
  };
  return (
    <>
      <section className="reservation">
        <h2>Book a table</h2>
        <form onSubmit={(e) => handleReservation(e)}>
          <label htmlFor="guestName">Booking Name</label>
          <input
            type="text"
            name="guestName"
            id="guestName"
            required
            value={guestName}
            onChange={handleChange}
          />
          <label htmlFor="guestNumber">Number of guests</label>
          <div>
            <button type="button" onClick={() => updateGuestNumber(true)}>
              -
            </button>
            <input
              type="number"
              name="guestNumber"
              id="guestNumber"
              required
              value={guestNumber}
              onChange={handleChange}
            />
            <button type="button" onClick={() => updateGuestNumber(false)}>
              +
            </button>
          </div>
          <label htmlFor="reservationDate">Date of reservation</label>
          <input
            type="date"
            name="reservationDate"
            id="reservationDate"
            required
            min={getTodayDate()}
            value={reservationDate}
            onChange={handleChange}
          />
          <label htmlFor="reservationTime">Reservation Time</label>
          <select
            id="reservationTime"
            name="reservationTime"
            onChange={handleChange}
          >
            {slots.map((slot) => (
              <option>{slot}</option>
            ))}
          </select>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name="occasion" onChange={handleChange}>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Get Together</option>
            <option>Date</option>
            <option>Other</option>
          </select>
          <input type="submit" value="Book a table" />
        </form>
      </section>
      <Dialog
        isOpen={isTableConfirmed}
        onClose={() => {
          setTableConfirmation(false);
        }}
      >
        <h2 style={{ color: "green" }}>Table Reserved</h2>
        <p>
          Dear {guestName}, your table for {guestNumber} guest/s has been
          reserved on {reservationDate} at {reservationTime} for your occasion
          of {occasion}
        </p>
      </Dialog>
    </>
  );
};
