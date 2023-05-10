import React from "react";

import { useSelector } from "react-redux";
import RoomCard from "./room/RoomCard";
import Pagination from "react-js-pagination";
import { useRouter } from "next/router";
import Link from "next/link";
const Home = () => {
  const router = useRouter()
  const { rooms, resPerPage, roomsCount, filteredRoomsCount, error } = useSelector((state) => state.allRooms);
  let {location,page = 1} = router.query
  page = Number(page)
  const handlePagination = (pageNum ) => {
      window.location.href = `/?page=${pageNum}`
  }
  return (
    <>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">{location ? `Stays in ${{location}}` : 'All Rooms'}</h2>

        <Link href="/search" className="ml-2 back-to-search">
          
          <i className="fa fa-arrow-left"></i> Back to Search
        </Link>
        <div className="row">
          {rooms && rooms.length == 0 ? (
            <div className="alert alert-danger">
              <b>No Rooms Available</b>
            </div>
          ) : (
            rooms.map((room, index) => {
              return <RoomCard room={room}></RoomCard>;
            })
          )}
        </div>
      </section>

      <div className="container">

        {
          resPerPage < roomsCount &&  <Pagination
      activePage={page}
        itemsCountPerPage={resPerPage}
        totalItemsCount={roomsCount}
        nextPageText={'Next'}
        onChange={handlePagination}
        prevPageText={'Previous'}
        itemClass="page-items"
        linkClass="page-link"
      
      />
        }
      
      </div>
    </>
  );
};

export default Home;
