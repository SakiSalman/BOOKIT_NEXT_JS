import React from 'react'


import { useSelector } from 'react-redux'
import RoomCard from './room/RoomCard';
const Home = () => {

  const {rooms} = useSelector(state => state.allRooms)

  return (
    <section id="rooms" className="container mt-5">

    <h2 className='mb-3 ml-2 stays-heading'>Stays in New York</h2>

    <a href='#' className='ml-2 back-to-search'> <i className='fa fa-arrow-left'></i> Back to Search</a>
    <div className="row">
      {
        rooms&& rooms.length == 0 ?

        <div className="alert alert-danger"><b>No Rooms Available</b></div> : 
        rooms.map((room, index) => {
          return <RoomCard room={room}></RoomCard>
        })
      }
      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-2">
          <img
            className="card-img-top mx-auto"
            src="https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              <a href="">Charming Studio 10 Miles to Wells' Beaches!</a>
            </h5>

            <div className="ratings mt-auto mb-3">
              <p className="card-text"><b>$12</b> / night</p>

              <div className="rating-outer">
                  <div className="rating-inner"></div>
              </div>
              <span id="no_of_reviews">(5 Reviews)</span>
          </div>

          <button className="btn btn-block view-btn">
              <a href='#'>View Details</a>
          </button>
        </div>
      </div>
    </div>

    </div>
  </section>
  )
}

export default Home