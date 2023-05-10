import axios from 'axios'
import { ALL_ROOMS_SUCCESS, ALL_ROOMS_FAILDED , CLEAR_ERROR, ROOMS_DETAILS_SUCCESS, ROOMS_DETAILS_FAILDED} from "../types/roomTypes";
import absolutUrl from 'next-absolute-url'


// GET ALL ROOMS

export const getRooms = (req, currentPage = 1, location='') => async (dispatch) => {
    try {
        const {origin} = absolutUrl(req)
      const {data} =  await axios.get( `${origin}/api/rooms?page=${currentPage}&location=${location}`)
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

// GET  ROOMS Details

export const roomDetails = (req, id) => async (dispatch) => {
    try {
        const {origin} = absolutUrl(req)
      const {data} =  await axios.get( `${origin}/api/rooms/${id}`)
      dispatch({
        type : ROOMS_DETAILS_SUCCESS,
        payload : data
      })
    } catch (error) {
        dispatch({
            type : ROOMS_DETAILS_FAILDED,
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
