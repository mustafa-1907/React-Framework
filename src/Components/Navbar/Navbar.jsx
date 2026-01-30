import { NavLink } from 'react-router'
import './Navbar.css'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top text-white py-4 bg-custom">
                <div className="container">
                    <NavLink className="navbar-brand fs-4 text-uppercase text-white fw-bold" to="/">start framework</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link fw-semibold text-uppercase p-2  fs-6 rounded-4" to="about">about</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-semibold text-uppercase p-2 rounded-4  fs-6 mx-xl-3" to="portfolio">portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-semibold text-uppercase p-2 rounded-4  fs-6" to="contact">contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
