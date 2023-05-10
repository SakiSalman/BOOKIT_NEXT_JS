import Head from 'next/head'
import Layout from '@/Components/Layouts/Layout'
import Home from '@/Components/Home'
import { wrapper } from '@/redux/store'
import { getRooms } from '@/redux/action/roomActions'

export default  function Index() {
  return (
    <>
     <Layout>
      <Home></Home>
     </Layout>
    </>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      await store.dispatch(getRooms(req, query.page, query.location));
    });


