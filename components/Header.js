import Link from 'next/link';

const Header = () => (
    <div className="container container--header">
        <nav className="Navigation">
            <h1 className="Navigation__title">
                <Link href="/">
                    <a className="Navigation__title--link">Equip Industry</a>
                </Link>
            </h1>
            <ul className="Navigation__menu">
                <li className="Navigation__item">
                    <Link href="/">
                        <a className="Navigation__link">Home</a>
                    </Link>
                </li>
                <li className="Navigation__item">
                    <Link href="/about">
                        <a className="Navigation__link">About</a>
                    </Link>
                </li>
                <li className="Navigation__item">
                    <Link href="/contact">
                        <a className="Navigation__link">Contact</a>
                    </Link>
                </li>
            </ul>
            <style>{`
                .container{
                    background: #010101;
                }
                .Navigation{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    max-width: 1024px;
                    margin: 0 auto;
                    height: 60px;
                }
                .Navigation__title--link{
                    color: #ffffff;
                }
                .Navigation__menu{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    padding-left: 0;
                    list-style: none;
                }
                .Navigation__item{
                    width: 150px;
                    text-align: center;
                }
                .Navigation__link{
                    color: #ffffff;
                }
            `}</style>
        </nav>
    </div>
)
export default Header;