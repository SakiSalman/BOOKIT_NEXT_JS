import axios from 'axios'
import { ALL_ROOMS_SUCCESS, ALL_ROOMS_FAILDED , CLEAR_ERROR} from "../types/roomTypes";
import absolutUrl from 'next-absolute-url'


// GET ALL ROOMS

export const getRooms = (req) => async (dispatch) => {
    try {
        const {origin} = absolutUrl(req)
      const {data} =  await axios.get( `${origin}/api/rooms`)
      dispatch({
        type : ALL_ROOMS_SUCCESS,
        payload : data
      })
    } catch (error) {
        dispatch({
            type : ALL_ROOMS_FAILDED,
            payload : null
        })
    }
}


// CLear Error
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type : CLEAR_ERROR
    })
}
