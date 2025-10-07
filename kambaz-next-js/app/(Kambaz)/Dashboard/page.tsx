import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/car.png" alt="car" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/tophat.png" alt="tophat" width={200} height={150} />
            <div>
              <h5> CS2345 Advanced React JS </h5>
              <p className="wd-dashboard-course-title">
                Experienced Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/dog.png" alt="dog" width={200} height={150} />
            <div>
              <h5> CS3456 Very Advanced React JS </h5>
              <p className="wd-dashboard-course-title">
                Highly Experienced Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/ship.png" alt="ship" width={200} height={150} />
            <div>
              <h5> CS1210 Professional Development </h5>
              <p className="wd-dashboard-course-title">
                Hopefully get a co-op  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/thimble.png" alt="thimble" width={200} height={150} />
            <div>
              <h5> CS4550 Web Development </h5>
              <p className="wd-dashboard-course-title">
                Hey that's us!  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/boot.png" alt="boot" width={200} height={150} />
            <div>
              <h5> CS4321 Advanced HTML+CSS </h5>
              <p className="wd-dashboard-course-title">
                Make it look good!  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/iron.png" alt="iron" width={200} height={150} />
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
