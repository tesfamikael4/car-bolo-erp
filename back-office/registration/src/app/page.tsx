"use client"
import Head from 'next/head';
import RegisterForm from './components/RegisterForm';
import { Provider } from 'react-redux';
import store from './../redux/store';

const Home: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>User Registration</title>
          <meta name="description" content="User registration with Next.js, Mantine, and Redux" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>User Registration</h1>
          <RegisterForm />
        </main>
      </div>
    </Provider>
  );
};

export default Home;