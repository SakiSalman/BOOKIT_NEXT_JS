import { wrapper } from '@/redux/store'
import { getRooms, roomDetails } from '@/redux/action/roomActions'
import Layout from '@/Components/Layouts/Layout';
import RoomDetails from '@/Components/room/RoomDetails';
import { useSelector } from 'react-redux';

export default  function Index() {


    const {rooms} = useSelector(state => state.roomDetails)

  return (
    <>
     <Layout>
        <RoomDetails room={rooms.room}></RoomDetails>
     </Layout>
    </>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(roomDetails(req, params.id));
    });


