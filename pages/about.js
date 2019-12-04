import Layout from '../components/Layout';
import Link from 'next/link';

const About = () =>(
    <React.Fragment>
        <Layout>
            <p>This is the about page!</p>
            <Link href="/"><a>Back</a></Link>
        </Layout>
    </React.Fragment>
);

export default About;


