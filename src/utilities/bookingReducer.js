import { fetchAPI } from "./fetchFakeApiData";

export const initialState = {
  availableSlots: fetchAPI(new Date()),
  bookingList: [],
};

// Reducer function
export const bookingReducer = (state, action) => {
  switch (action.type) {
    case "SET_SLOTS":
      const generatedAvailableSlots = fetchAPI(action.payload);
      return {
        ...state,
        availableSlots: generatedAvailableSlots,
      };

    case "ADD_BOOKING":
      return {
        bookingList: [...state.bookingList, action.payload], 
        availableSlots: fetchAPI(new Date()),
      };

    default:
      return state;
  }
};

