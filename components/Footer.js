

const Footer = () =>(
    <footer className="Footer">
        <p className="Footer__text">&copy; Derechos reservado 2019.</p>
        <style jsx>{`
            .Footer{
                background-color: #343434;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .Footer__text{
                color: #ffffff;
                font-size: 20px;
            }
        `}

        </style>
    </footer>
);
export default Footer;