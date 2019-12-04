import React from 'react';
import Layout from '../../components/Layout'

class User extends React.Component {
    static async getInitialProps ({query}) {
        console.log(query)
        return {}
    }
    render() {
        return (
            <Layout>
                <h1>This is User page</h1>
            </Layout>
        );
    }
}

export default User;




