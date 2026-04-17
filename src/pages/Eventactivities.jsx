import React from 'react';
import right from "../assets/banner1.jpeg";

export default function EventActivities() {

  const activities = [
    {
      id: 1,
      level: "Village Level",
      title: "Free Health & Wellness Camp",
      description:
        "Organized free medical check-ups, eye exams, and medicine distribution for senior citizens and children in 15 Gram Panchayats.",
      icon: "bi-heart-pulse"
    },
    {
      id: 2,
      level: "Block / Tehsil Level",
      title: "Kisan Sampark Abhiyan",
      description:
        "Educating farmers on modern farming, crop insurance, and government subsidies.",
      icon: "bi-tree"
    },
    {
      id: 3,
      level: "District Level",
      title: "Youth Skill & Employment Mela",
      description:
        "Digital skill workshops and job placement programs for district youth.",
      icon: "bi-briefcase"
    }
  ];

  return (
    <section
      className="container py-5"
      style={{
        background: "linear-gradient(135deg, #fff 0%, #fff5e6 100%)",
        borderRadius: "20px"
      }}
    >

      {/* 🔥 HEADER */}
      <div className="text-center mb-5">
        <span
          className="badge px-4 py-2 rounded-pill shadow-sm mb-3"
          style={{ backgroundColor: "#FF9933", color: "#fff" }}
        >
          Event Activities
        </span>

        <h2 className="fw-bold display-5">
          Transforming Lives Through Action
        </h2>

        <p className="text-muted col-md-8 mx-auto fs-5">
          From grassroots problem-solving to district-wide development initiatives,
          our mission is to deliver real change where it matters most.
        </p>
      </div>

      {/* 🔥 FEATURED EVENT */}
      <div className="row align-items-center mb-5 pb-4 border-bottom">

        {/* TEXT */}
        <div className="col-lg-6 order-2 order-lg-1">
          <div className="pe-lg-4">
            <h6 className="text-uppercase fw-bold text-muted mb-2">
              Featured District Event
            </h6>

            <h3 className="fw-bold mb-3">
              Jan Sampark Abhiyan (Public Grievance Hearing)
            </h3>

            <p className="text-muted fs-5 mb-4">
              Direct interaction with citizens to resolve issues related to
              electricity, water supply, and infrastructure with immediate action.
            </p>

            <ul className="list-unstyled text-muted mb-4">
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                500+ grievances resolved instantly
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Coordination with district officers
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Transparent tracking system
              </li>
            </ul>

            <button
              className="btn text-white px-4 py-2 fw-semibold shadow"
              style={{ backgroundColor: "#FF9933" }}
            >
              View Event Gallery
            </button>
          </div>
        </div>

        {/* 🔥 IMAGE WITH OVERLAY */}
        <div className="col-lg-6 order-1 order-lg-2 position-relative">

          <img
            src={right}
            alt="Event"
            className="img-fluid rounded-4 shadow-lg w-100"
            style={{ minHeight: "350px", objectFit: "cover" }}
          />

          {/* Overlay */}
          <div
            className="rounded-4"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.6), transparent)"
            }}
          ></div>

          {/* Text on image */}
          <div
            className="position-absolute bottom-0 start-0 p-4 text-white"
          >
            <h5 className="fw-bold">People First Leadership</h5>
            <small>Serving from Village to District</small>
          </div>

        </div>
      </div>

      {/* 🔥 ACTIVITIES */}
      <h4 className="fw-bold text-center mb-4">
        Recent Public Welfare Initiatives
      </h4>

      <div className="row g-4">

        {activities.map((item) => (
          <div className="col-md-4" key={item.id}>

            <div
              className="card border-0 rounded-4"
              style={{
                transition: "0.3s",
                cursor: "pointer",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(0,0,0,0.05)";
              }}
            >

              <div className="card-body p-4 bg-white">

                {/* Top */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-dark rounded-pill px-3 py-2">
                    {item.level}
                  </span>

                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "#FF9933",
                      color: "#fff"
                    }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                </div>

                <h5 className="fw-bold">{item.title}</h5>

                <p className="text-muted mt-3">
                  {item.description}
                </p>

              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}