import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
const RoomDetails = ({ room }) => {
  console.log(room);
  return (
    <>
     <Head>
        <title>{room.name} - BookIT</title>
      </Head>
      
      <div className="container container-fluid">
        <h2 className="mt-5">{room.name}</h2>
        <div className="ratings mt-auto mb-3">
          <div className="rating-outer">
            <div
              className="rating-inner"
              style={{ width: `${(room.rattings / 5) * 100}%` }}
            />
          </div>
          <span id="no_of_reviews">`(${room.rattings} Reviews)`</span>
        </div>

        <Carousel hover="pause">
          {room.images &&
            room.images.map((image) => (
              <Carousel.Item key={image.public_id}>
                <div style={{ width: "100%", height: "440px" }}>
                  <Image className="d-block m-auto" src={image.url} fill />
                </div>
              </Carousel.Item>
            ))}
        </Carousel>

        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-8">
            <h3>Description</h3>
            <p>{room.description}</p>
            <div className="features mt-5">
              <h3 className="mb-4">Features:</h3>
              <div className="room-feature">
                <i className="fa fa-cog fa-fw fa-users" aria-hidden="true" />
                <p>{room.guestCapacity} Guests</p>
              </div>
              <div className="room-feature">
                <i className="fa fa-cog fa-fw fa-bed" aria-hidden="true" />
                <p>{room.numOfBeds} Beds</p>
              </div>
              <div className="room-feature">
                <i className="fa fa-cog fa-fw fa-bath" aria-hidden="true" />
                <p>2 Baths</p>
              </div>
              <div className="room-feature">
                <i className="fa fa-cog fa-fw fa-cutlery" aria-hidden="true" />
                <p>Kitchen</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="booking-card shadow-lg p-4">
              <p className="price-per-night">
                <b>${room.pricePerNight}</b> / night
              </p>
              <button className="btn btn-block py-3 booking-btn">Pay</button>
            </div>
          </div>
        </div>
        <div className="reviews w-75">
          <h3>Reviews:</h3>
          <hr />
          <div className="review-card my-3">
            <div className="rating-outer">
              <div className="rating-inner" />
            </div>
            <p className="review_user">by John</p>
            <p className="review_comment">Good Quality</p>
            <hr />
          </div>
          <div className="review-card my-3">
            <div className="rating-outer">
              <div className="rating-inner" />
            </div>
            <p className="review_user">by John</p>
            <p className="review_comment">Good Quality</p>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
