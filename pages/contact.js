import Link from 'next//link';
import Layout from '../components/Layout';


const Contact = () =>(
    <Layout>
        <h1>This is Contact page!</h1>
        <Link href="/"><a>Home</a></Link>
    </Layout>
);

export default Contact;