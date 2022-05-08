import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '@/components/Header';
import { TodoList } from '@/components/TodoList';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crop Todo list</title>
        <meta name="description" content="Todo list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TodoList />
    </>
  )
}

export default Home
