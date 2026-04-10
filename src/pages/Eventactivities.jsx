import React from 'react';
// Assuming the image is a picture of an event/crowd/meeting
import right from "../assets/banner1.jpeg";

export default function EventActivities() {
  // Array of activities showing the journey from Village to District
  const activities = [
    {
      id: 1,
      level: "Village Level",
      title: "Free Health & Wellness Camp",
      description: "Organized free medical check-ups, eye exams, and medicine distribution for senior citizens and children in 15 Gram Panchayats.",
      icon: "bi-heart-pulse text-danger"
    },
    {
      id: 2,
      level: "Block / Tehsil Level",
      title: "Kisan Sampark Abhiyan",
      description: "A farmer's meet educating local agricultural workers on modern farming techniques, crop insurance, and government subsidies.",
      icon: "bi-tree text-success"
    },
    {
      id: 3,
      level: "District Level",
      title: "Youth Skill & Employment Mela",
      description: "Partnered with local businesses and tech institutes to provide digital skill workshops and job placements for district youth.",
      icon: "bi-briefcase text-primary"
    }
  ];

  return (
    <section className='container py-5'>
      
      {/* --- Section Header --- */}
      <div className="text-center mb-5">
        <span 
          className="badge text-dark px-4 py-2 rounded-pill text-uppercase shadow-sm mb-3 tracking-wide" 
          style={{ backgroundColor: "#FF9933" }} // Keeping your custom color
        >
          Event Activities
        </span>
        <h2 className="fw-bold">Empowering People, Top to Bottom</h2>
        <p className="text-muted col-md-8 mx-auto">
          Dedicated to the welfare of the public. From resolving grassroots issues at the village level to implementing large-scale development programs across the district.
        </p>
      </div>

      {/* --- Featured Main Event (Using your imported image) --- */}
      <div className="row align-items-center mb-5 pb-4 border-bottom">
        {/* Event Details */}
        <div className="col-lg-6 mb-4 mb-lg-0 order-2 order-lg-1">
          <div className="pe-lg-4">
            <h6 className="text-uppercase fw-bold text-muted mb-2">Featured District Event</h6>
            <h3 className="fw-bold mb-3">Jan Sampark Abhiyan (Public Grievance Hearing)</h3>
            <p className="text-muted fs-5 mb-4">
              A massive district-level initiative where the leadership directly interacts with citizens to hear their daily struggles. Immediate actions are taken on issues related to electricity, water supply, and road maintenance.
            </p>
            <ul className="list-unstyled text-muted mb-4">
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Over 500+ grievances resolved on the spot.</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Direct coordination with district administrative officers.</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Transparent tracking system for pending village applications.</li>
            </ul>
            <button className="btn text-white px-4 py-2 fw-semibold shadow-sm" style={{ backgroundColor: "#FF9933" }}>
              View Event Gallery
            </button>
          </div>
        </div>

        {/* Event Image */}
        <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
          {/* Note: changed src="right" to src={right} so React actually uses the image file */}
          <img 
            src={right} 
            alt="Public Gathering Event" 
            className="img-fluid rounded-4 shadow-lg w-100" 
            style={{ objectFit: 'cover', minHeight: '350px' }}
          />
        </div>
      </div>

      {/* --- Ongoing Initiatives Grid --- */}
      <div className="row g-4">
        <h4 className="fw-bold mb-3 text-center">Recent Public Welfare Initiatives</h4>
        
        {activities.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card h-100 border-0 shadow-sm rounded-4 bg-light hover-shadow transition-all">
              <div className="card-body p-4">
                
                {/* Level Badge */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-dark rounded-pill px-3 py-2">
                    {item.level}
                  </span>
                  <i className={`bi ${item.icon} fs-3`}></i>
                </div>
                
                <h5 className="card-title fw-bold">{item.title}</h5>
                <p className="card-text text-muted mt-3">
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