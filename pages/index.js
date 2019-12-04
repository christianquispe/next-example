import Head from 'next/head';
import Link from 'next/link';
import posts from '../posts.json';
import Layout from '../components/Layout';

export default () => {
    
  return (
    <Layout>
        <Head>
            <title>Blog</title>
        </Head>
        <h1>Blog</h1>
        <ul>
        {Object.entries(posts).map((value, index) => {
            return (
                <li key={index}>
                    <Link href='post/[id]' as={`post/${value[0]}`}>
                        <a>{value[1].title}</a>
                    </Link>
                </li>
            )
        })}
        </ul>
    </Layout>
  )
}