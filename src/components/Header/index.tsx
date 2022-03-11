import { FaGithub, FaCartPlus } from 'react-icons/fa'

export function Header() {
    return (
        <header className="header">
            <div className="header__left">I AM LOGO</div>
            <div className="header__right">
                <button className="header__right_cart">
                    <FaCartPlus />
                </button>
                <button className="header__right--github">
                    <a href="/">
                        <FaGithub />
                    </a>
                </button>
                <p className="header__right--user">USER</p>
            </div>
        </header>
    )
}
