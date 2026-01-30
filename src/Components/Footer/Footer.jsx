
export default function Footer() {
    return (
        <>
            <footer className="bg-custom py-3">
                <div className="container">
                    <div className="row  justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 mb-0 d-flex justify-content-center align-items-center">
                              <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                                <p className="m-0 text-white text-center fs-5 fw-bold">LOCATION</p>
                                <p className="m-0 text-white text-center fs-6 mt-1 mb-2 fw-mediam">2215 John Daniel Drive</p>
                                <p className="m-0 text-white text-center fw-mediam">Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="gap-2 text-white col-md-4 d-flex flex-column align-items-center justify-content-center mb-3 mb-md-0 me-auto md-auto ">
                            <div className="d-block text-uppercase fw-bold ">
                                <p className="m-0 text-white fs-3 text-center">AROUND THE WEB</p>
                            </div>
                            <ul className="nav gap-2 text-center ">
                                <li className="nav-item">
                                    <a href="#" className="nav-link  rounded-circle border border-1 border-white mx-1 ">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link  rounded-circle border border-1 border-white mx-1 ">
                                        <i className="fa fa-linkedin"></i>

                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link  rounded-circle border border-1 border-white mx-1 ">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link  rounded-circle border border-1 border-white mx-1 ">
                                        <i className="fa fa-globe"></i>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="nav col-md-4 justify-content-center r">
                            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                                <p className="m-0 text-white text-center fs-5 fw-bold">ABOUT FREELANCER</p>
                                <p className="m-0 text-white text-center fs-5 fw-mediam">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
