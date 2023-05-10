import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAILDED,
  CLEAR_ERROR,
  ROOMS_DETAILS_SUCCESS,
  ROOMS_DETAILS_FAILDED
} from "../types/roomTypes";

// all room reducers

export const allRoomsReducer = (state = { rooms: [] }, { type, payload }) => {
  switch (type) {
    case ALL_ROOMS_SUCCESS:
      return {
        roomsCount: payload.roomsCount,
        resPerPage: payload.resPerPage,
        filteredRoomsCount: payload.filteredRoomsCount,
        rooms: payload.rooms,
      };
    case ALL_ROOMS_FAILDED:
      return {
        error: payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// room details reducers

export const roomDetailsReducer = (state = { rooms: [] }, { type, payload }) => {
  switch (type) {
    case ROOMS_DETAILS_SUCCESS:
      return {
            rooms: payload
      };
    case ROOMS_DETAILS_FAILDED:
      return {
        error: payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
