import { ALL_ROOMS_SUCCESS, ALL_ROOMS_FAILDED , CLEAR_ERROR} from "../types/roomTypes";



// all room reducers

export const allRoomsReducer = (state = {rooms : []}, {type, action}) => {

    switch (type) {
        case ALL_ROOMS_SUCCESS:
            return {
                roomsCount : payload.roomsCount,
                resPerPage : payload.resPerPage,
                filteredRoomsCount : payload.filteredRoomsCount,
                rooms : payload.rooms
            }
        case ALL_ROOMS_FAILDED:
            return {
                error : payload
            }
            
        case CLEAR_ERROR:
            return {
                ...state,
                error : null
            }
        default:
            return state
    }


}