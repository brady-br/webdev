import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/car.png" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2345/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/tophat.png" width={200} />
            <div>
              <h5> CS2345 Advanced React JS </h5>
              <p className="wd-dashboard-course-title">
                Experienced Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3456/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/dog.png" width={200} />
            <div>
              <h5> CS3456 Very Advanced React JS </h5>
              <p className="wd-dashboard-course-title">
                Highly Experienced Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1210/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/ship.png" width={200} />
            <div>
              <h5> CS1210 Professional Development </h5>
              <p className="wd-dashboard-course-title">
                Hopefully get a co-op  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4550/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/thimble.png" width={200} />
            <div>
              <h5> CS4550 Web Development </h5>
              <p className="wd-dashboard-course-title">
                Hey that's us!  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4321/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/boot.png" width={200} />
            <div>
              <h5> CS4321 Advanced HTML+CSS </h5>
              <p className="wd-dashboard-course-title">
                Make it look good!  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5432/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/iron.png" width={200} />
            <div>
              <h5> CS5432 Master React JS </h5>
              <p className="wd-dashboard-course-title">
                Oh you thought you were done?  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
