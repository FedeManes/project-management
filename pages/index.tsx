import Head from 'next/head';
import HomeTemplate from '../components/Templates/Home'

const user = undefined
export default function Home() {
  return (
    <>
      <Head>
        <title>Project Management App</title>
      </Head>
      <main>
        <HomeTemplate user={user}></HomeTemplate>
      </main>
    </>
  );
}
