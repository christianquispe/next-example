import Head from 'next/head';
import posts from '../../posts.json'
import Layout from '../../components/Layout.js';

const Post = props => {
  return (
    <Layout>
      <Head>
        <title>{props.post.title}</title>
      </Head>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </Layout>
  )
}

Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id]
  }
}

export default Post