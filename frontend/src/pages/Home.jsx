import { Link } from "react-router-dom";

import {
  FaUserGraduate,
  FaMoneyBillWave,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaUniversity,
  FaMobileAlt,
  FaShieldAlt,
  FaClock,
  FaChartPie
} from "react-icons/fa";

function Home() {

  const styles = {

    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0f172a,#111827,#1e293b)",
      color: "white",
      fontFamily: "Segoe UI"
    },

    heroTitle: {
      fontSize: "60px",
      fontWeight: "bold"
    },

    heroText: {
      fontSize: "20px",
      color: "#cbd5e1"
    },

    glass: {
      background: "rgba(255,255,255,.08)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,.1)",
      borderRadius: "20px",
      transition: ".4s"
    },

    iconCircle: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#22c55e",
      margin: "auto"
    },

    featureCard: {
      transition: ".35s",
      cursor: "pointer"
    },

    statNumber: {
      fontSize: "45px",
      fontWeight: "bold",
      color: "#22c55e"
    },

    sectionTitle: {
      fontSize: "40px",
      fontWeight: "bold"
    }

  };

  return (

    <div style={styles.page}>

      {/* ================= HERO ================= */}

      <div className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-6">

            
            <h1 style={styles.heroTitle}>

              Tuition
              <span className="text-success">
                Flow
              </span>

            </h1>

            <p style={styles.heroText} className="mt-4">

              Manage all your students,
              monthly payments,
              dues,
              income reports
              and tuition records
              from one beautiful dashboard.

            </p>

            <div className="mt-5">

              <Link
                to="/register"
                className="btn btn-success btn-lg px-4 me-3"
              >

                Get Started

                <FaArrowRight
                  className="ms-2"
                />

              </Link>

              <Link
                to="/login"
                className="btn btn-outline-light btn-lg px-4"
              >

                Login

              </Link>

            </div>

          </div>

          {/* Hero Illustration */}

          <div className="col-lg-6 text-center mt-5 mt-lg-0">

            <div
              style={{
                fontSize: "220px"
              }}
            >
              🎓
            </div>

            <h3 className="fw-bold">

              Built For Every Tutor

            </h3>

            <p className="text-secondary">

              Fast • Secure • Easy

            </p>

          </div>

        </div>

      </div>

      {/* ================= STATS ================= */}

      <div className="container py-5">

        <div className="row g-4">

          <div className="col-md-3">

            <div
              style={styles.glass}
              className="p-4 text-center h-100"
            >

              <FaUsers
                size={45}
                className="text-success mb-3"
              />

              <h2 style={styles.statNumber}>

                500+

              </h2>

              <p>

                Students Managed

              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div
              style={styles.glass}
              className="p-4 text-center h-100"
            >

              <FaMoneyBillWave
                size={45}
                className="text-warning mb-3"
              />

              <h2 style={styles.statNumber}>

                20K+

              </h2>

              <p>

                Payments Recorded

              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div
              style={styles.glass}
              className="p-4 text-center h-100"
            >

              <FaChartPie
                size={45}
                className="text-info mb-3"
              />

              <h2 style={styles.statNumber}>

                95%

              </h2>

              <p>

                Time Saved

              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div
              style={styles.glass}
              className="p-4 text-center h-100"
            >

              <FaShieldAlt
                size={45}
                className="text-danger mb-3"
              />

              <h2 style={styles.statNumber}>

                100%

              </h2>

              <p>

                Secure Data

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ================= FEATURES ================= */}

      <div className="container py-5">

        <h2
          className="text-center mb-5"
          style={styles.sectionTitle}
        >

          Powerful Features

        </h2>

        <div className="row g-4">
                    {/* Feature 1 */}

          <div className="col-lg-4 col-md-6">

            <div
              style={styles.glass}
              className="p-4 text-center h-100"
            >

              <div style={styles.iconCircle}>

                <FaUserGraduate size={38} />

              </div>

              <h4 className="mt-4">

                Student Management

              </h4>

              <p className="text-light">

                Store all student information in one place.
                Search, edit and organize students effortlessly.

              </p>

            </div>

          </div>

          {/* Feature 2 */}

          <div className="col-lg-4 col-md-6">

            <div
              style={styles.glass}
              className="p-4 text-center h-100"
            >

              <div style={styles.iconCircle}>

                <FaMoneyBillWave size={38} />

              </div>

              <h4 className="mt-4">

                Payment Tracking

              </h4>

              <p className="text-light">

                Record monthly fees, paid amounts,
                outstanding dues and payment history.

              </p>

            </div>

          </div>

          {/* Feature 3 */}

          <div className="col-lg-4 col-md-6">

            <div
              style={styles.glass}
              className="p-4 text-center h-100"
            >

              <div style={styles.iconCircle}>

                <FaChartLine size={38} />

              </div>

              <h4 className="mt-4">

                Reports & Analytics

              </h4>

              <p className="text-light">

                View monthly income,
                payment summaries
                and financial reports instantly.

              </p>

            </div>

          </div>

          {/* Feature 4 */}

          <div className="col-lg-4 col-md-6">

            <div
              style={styles.glass}
              className="p-4 text-center h-100"
            >

              <div style={styles.iconCircle}>

                <FaUniversity size={38} />

              </div>

              <h4 className="mt-4">

                Tuition Dashboard

              </h4>

              <p className="text-light">

                Everything is organized inside one
                beautiful dashboard designed for tutors.

              </p>

            </div>

          </div>

          {/* Feature 5 */}

          <div className="col-lg-4 col-md-6">

            <div
              style={styles.glass}
              className="p-4 text-center h-100"
            >

              <div style={styles.iconCircle}>

                <FaMobileAlt size={38} />

              </div>

              <h4 className="mt-4">

                Responsive Design

              </h4>

              <p className="text-light">

                Access TuitionFlow from desktop,
                tablet or mobile anytime.

              </p>

            </div>

          </div>

          {/* Feature 6 */}

          <div className="col-lg-4 col-md-6">

            <div
              style={styles.glass}
              className="p-4 text-center h-100"
            >

              <div style={styles.iconCircle}>

                <FaClock size={38} />

              </div>

              <h4 className="mt-4">

                Save Time

              </h4>

              <p className="text-light">

                Spend less time managing records
                and more time teaching students.

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ================= WHY CHOOSE ================= */}

      <div className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <h2
              style={styles.sectionTitle}
              className="mb-4"
            >

              Why Choose TuitionFlow?

            </h2>

            <p className="text-light fs-5">

              TuitionFlow is designed especially for
              private tutors who want to simplify
              student management, monitor payments,
              track dues and understand their income
              without using spreadsheets.

            </p>

            <div className="mt-4">

              <p>

                <FaCheckCircle className="text-success me-2" />

                Student Information Management

              </p>

              <p>

                <FaCheckCircle className="text-success me-2" />

                Monthly Payment Tracking

              </p>

              <p>

                <FaCheckCircle className="text-success me-2" />

                Automatic Due Calculation

              </p>

              <p>

                <FaCheckCircle className="text-success me-2" />

                Income Reports

              </p>

              <p>

                <FaCheckCircle className="text-success me-2" />

                Secure User Accounts

              </p>

              <p>

                <FaCheckCircle className="text-success me-2" />

                Clean & Easy Interface

              </p>

            </div>

          </div>

          <div className="col-lg-6 text-center">

            <div style={{fontSize:"200px"}}>

              📚

            </div>

          </div>

        </div>

      </div>

      {/* ================= HOW IT WORKS ================= */}

      <div className="container py-5">

        <h2
          className="text-center mb-5"
          style={styles.sectionTitle}
        >

          How It Works

        </h2>

        <div className="row text-center">

          <div className="col-md-3">

            <h1 className="text-success">

              1️⃣

            </h1>

            <h5>Create Account</h5>

            <p className="text-light">

              Register in less than one minute.

            </p>

          </div>

          <div className="col-md-3">

            <h1 className="text-success">

              2️⃣

            </h1>

            <h5>Add Students</h5>

            <p className="text-light">

              Store student details securely.

            </p>

          </div>

          <div className="col-md-3">

            <h1 className="text-success">

              3️⃣

            </h1>

            <h5>Record Payments</h5>

            <p className="text-light">

              Update fees and dues every month.

            </p>

          </div>

          <div className="col-md-3">

            <h1 className="text-success">

              4️⃣

            </h1>

            <h5>View Reports</h5>

            <p className="text-light">

              Analyze income with beautiful summaries.

            </p>

          </div>

        </div>

      </div>
            {/* ================= TESTIMONIAL ================= */}

      <div className="container py-5">

        <div
          style={styles.glass}
          className="p-5 text-center"
        >

          <FaStar
            size={55}
            className="text-warning mb-4"
          />

          <h2 className="mb-4">

            Loved by Private Tutors

          </h2>

          <p
            className="lead"
            style={{
              maxWidth: "800px",
              margin: "auto",
              color: "#d1d5db"
            }}
          >

            "TuitionFlow has completely changed the way I
            manage my tuition classes. Instead of using
            notebooks and spreadsheets, I can now track
            students, payments and monthly income in just
            a few clicks."

          </p>

          <h5 className="mt-4 text-success">

            ★★★★★

          </h5>

          <p className="text-secondary">

            — A Happy Private Tutor

          </p>

        </div>

      </div>

      {/* ================= CALL TO ACTION ================= */}

      <div className="container py-5">

        <div
          className="text-center p-5 rounded-4"
          style={{
            background:
              "linear-gradient(135deg,#16a34a,#15803d)"
          }}
        >

          <h2 className="display-5 fw-bold">

            Ready to Organize Your Tuition Business?

          </h2>

          <p
            className="lead mt-3"
            style={{
              maxWidth: "700px",
              margin: "auto"
            }}
          >

            Join hundreds of tutors who use TuitionFlow
            to manage students, monitor payments,
            calculate dues and grow their tuition business
            with confidence.

          </p>

          <div className="mt-4">

            <Link
              to="/register"
              className="btn btn-light btn-lg px-5 me-3"
            >

              Join Us Now

            </Link>

            

          </div>

        </div>

      </div>

      {/* ================= FOOTER ================= */}

      <footer
        className="text-center py-5"
        style={{
          borderTop: "1px solid rgba(255,255,255,.1)"
        }}
      >

        <h3 className="fw-bold">

          Tuition
          <span className="text-success">
            Flow
          </span>

        </h3>

        <p
          className="mt-3"
          style={{
            color: "#9ca3af"
          }}
        >

          Smart Tuition Management System for Private Tutors

        </p>

        

        <hr
          className="my-4"
          style={{
            borderColor: "rgba(255,255,255,.1)"
          }}
        />

        <p
          style={{
            color: "#6b7280"
          }}
        >

          © 2026 TuitionFlow. All Rights Reserved.

        </p>

      </footer>

    </div>

  );

}

export default Home;