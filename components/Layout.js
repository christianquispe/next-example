import Header from './Header';
import Footer from './Footer';

const Layout = props =>(
    <React.Fragment>
        <Header />
            { props.children }
        <Footer />
        <style global jsx>{`
            Body{
                margin:0;
                padding: 0;
            }
            ul{
                margin: 0;
            }
            a{
                text-decoration: none;
            }
        
        `}</style>
    </React.Fragment>
)
export default Layout;