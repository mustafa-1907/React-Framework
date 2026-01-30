
export default function About() {
  return (
    <>
    <title>About</title>
      <section className="vh-100 pt-5 bg-main">
        <div className="container pt-5 h-100">
          <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <div className="py-3">
              <p className="m-0 fs-1 fw-bold text-white text-uppercase">about component </p>
            </div>
            <div className="pb-3 d-flex gap-2 flex-column justify-content-center align-items-center ">
              <span className="text-white fs-4  p-2 position-relative star">
                <i className='fa fa-star'></i>
              </span>
              <div className="row px-5 g-4 py-3">
                <div className="col-md-6 ps-md-5">
                  <p className="m-0 fs-6 text-white lead">
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                  </p>
                </div>
                <div className="col-md-6 pe-5">
                  <p className="m-0 fs-6 text-white lead">
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
