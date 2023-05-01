const  rooms =  require( '../data/room')
const mongoose = require('mongoose')
const Room = require( '../models/roomModel')

mongoose.connect('mongodb://127.0.0.1:27017/bookit')


const seedRooms = async () => {
    try {
        await Room.deleteMany()
        console.log('Rooms are Ready')
        await Room.insertMany(rooms)
       console.log('ROOM ADDED');
       process.exit()
        
    } catch (error) {
        console.log(error);
        process.exit()
    }
}

seedRooms()