import avatar from '../../assets/avataaars.svg'
export default function Home() {
    return (
        <>
            <title >Home</title>
            <section className="vh-100 pt-5 bg-main">
                <div className="container pt-5 h-100">
                    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                        <div className="">
                            <img src={avatar} className='w-100 d-block' alt="avatar" />
                        </div>
                        <div className="py-3">
                            <p className="m-0 fs-1 fw-bold text-white text-uppercase">start framework</p>
                        </div>
                        <div className="pb-3 d-flex gap-2 flex-column justify-content-center align-items-center ">
                            <span className="text-white  p-2 position-relative star">
                                <i className='fa fa-star'></i>
                            </span>
                            <p className="m-0 fs-6 text-white ">Graphic Artist - Web Designer - Illustrator
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
