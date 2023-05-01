import catchAsyncErrors from "@/middlewares/catchAsyncErrors";
import Rooms from "@/models/roomModel";
import APIFeatures from "@/utility/apiFeatures";
import createError from "@/utility/createError";

/**
 *
 * @api /api/rooms
 * @purpose GET ALL ROOMS
 * @method GET
 */
const allRoom = catchAsyncErrors (async(req, res, next) => {
  const apiFeatures = new APIFeatures(Rooms.find(), req.query).search().filter()
  

  const rooms = await apiFeatures.query
    return res.status(200).json({
      success: true,
      count: rooms.length,
      rooms: rooms,
    });
});
/**
 *
 * @api /api/rooms
 * @purpose Create a Room
 * @method POST
 */

const newRoom = catchAsyncErrors (async (req, res, next) => {

    const room = await Rooms.create(req.body);
    res.status(200).json({
      success: true,
      room,
    });
});

/**
 *
 * @api /api/rooms/:id
 * @purpose Get Singel Room
 * @method GET
 */
const getSingelRoom = async (req, res, next) => {

  try {
    const room = await Rooms.findById(req.query.id);

    if (!room) {
      return next(createError(404, 'Not Found Room with id!'))
    }
    return res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    console.log(error)
    return next(error)

  }
};

/**
 *
 * @api /api/rooms/:id
 * @purpose Update Singel Room
 * @method Patch
 */
const updateRoom = async (req, res, next) => {

  try {
    const room = await Rooms.findByIdAndUpdate(req.query.id, req.body)

    return res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    console.log(error)
    return next(error)

  }
};

/**
 *
 * @api /api/rooms/:id
 * @purpose Remove Singel Room
 * @method delete
 */
const removeRoom = async (req, res, next) => {

  try {
    let room = await Rooms.findById(req.query.id);

    if (!room) {
      return next(createError(402, 'Room Not Found!'))
    }
    room = await Rooms.findByIdAndDelete(req.query.id)

    return res.status(200).json({
      success: true,
      message : 'Room Deleted!'
    });
  } catch (error) {
    console.log(error)
    return next(error)

  }
};

//  export modules
export { allRoom, newRoom, getSingelRoom, updateRoom, removeRoom };
