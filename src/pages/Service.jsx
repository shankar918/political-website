import React, { useState } from "react";
// import logo from "../assets/banner1";
import {
  FaTools,
  FaUniversity,
  FaCalendarCheck,
  FaBuilding,
  FaUsers,
  FaAmbulance,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

export default function Service() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FaTools />,
      title: "Public Issue Resolution",
      desc: "Report and track issues like roads, water, and electricity quickly.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
      longDesc: "Our dedicated portal allows citizens to upload photos of local issues. Once submitted, a ticket is generated and assigned to the relevant department with a 48-hour response guarantee. We bridge the gap between people and bureaucracy.",
      color: "#4e73df"
    },
    {
      id: 2,
      icon: <FaUniversity />,
      title: "Government Schemes",
      desc: "Guidance for applying to welfare schemes and claiming benefits.",
      image: "https://images.unsplash.com/photo-1541872703-74c5e443d1fe?auto=format&fit=crop&q=80&w=800",
      longDesc: "Many citizens miss out on benefits because of complex paperwork. We provide a step-by-step guide and digital assistance for Pension schemes, Student scholarships, and Farmer subsidies.",
      color: "#f6ad55"
    },
    {
      id: 3,
      icon: <FaCalendarCheck />,
      title: "Book an Appointment",
      desc: "Schedule a one-on-one meeting with your representative easily.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
      longDesc: "Direct communication is the key to democracy. Use our automated system to book a 15-minute slot at the constituency office to discuss your concerns directly with the leadership.",
      color: "#38b2ac"
    },
    {
      id: 4,
      icon: <FaBuilding />,
      title: "Development Projects",
      desc: "Track ongoing infrastructure projects like schools and hospitals.",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800",
      longDesc: "Transparency in tax-payer money usage. View real-time progress, budget allocation, and completion dates for new schools, clinics, and community centers in your area.",
      color: "#9f7aea"
    },
    {
      id: 5,
      icon: <FaUsers />,
      title: "Join the Movement",
      desc: "Volunteer with our team to bring real change to society.",
      image: "https://images.unsplash.com/photo-1559027615-cd7607c1f3cf?auto=format&fit=crop&q=80&w=800",
      longDesc: "Change starts with you. Join our 500+ volunteer network to help in cleanliness drives, blood donation camps, and digital literacy programs.",
      color: "#ed64a6"
    },
    {
      id: 6,
      icon: <FaAmbulance />,
      title: "Emergency Assistance",
      desc: "Immediate support and coordination during medical urgencies.",
      image: "https://images.unsplash.com/photo-1587748803976-68572bd0af2d?auto=format&fit=crop&q=80&w=800",
      longDesc: "Our 24/7 helpline coordinates with local hospitals and ambulance services to ensure that no citizen is left without care during a medical emergency.",
      color: "#e53e3e"
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container py-4">
        {/* HEADER SECTION */}
        <div className="text-center mb-5">
          <span className="badge px-3 py-2 rounded-pill mb-3 shadow-sm" 
            style={{ backgroundColor: "#FF9933", color: "#fff", letterSpacing: "1px" }}>
            OUR MISSION
          </span>
          <h2 className="fw-bold display-5 text-dark mb-3">Service to the People</h2>
          <p className="text-muted mx-auto fs-5" style={{ maxWidth: "700px" }}>
            Transforming our community through transparency, digital accessibility, and immediate action.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="row g-4">
          {services.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <ServiceCard item={item} onOpen={() => setSelectedService(item)} />
            </div>
          ))}
        </div>

        {/* TRUST BANNER */}
        <div className="mt-5 p-5 text-center rounded-4 shadow-sm position-relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #ffffff 0%, #fff5e6 100%)", border: "1px solid #ffe0b3" }}>
          <div className="position-relative z-1">
            <h3 className="fw-bold mb-3">Why Trust Our Leadership?</h3>
            <p className="text-secondary mx-auto mb-0" style={{ maxWidth: "800px", fontSize: "1.1rem" }}>
              We don't just make promises; we provide a platform for accountability. Every grievance reported is a step toward a better tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* MODAL POPUP */}
      {selectedService && (
        <DetailModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </section>
  );
}

function ServiceCard({ item, onOpen }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden"
      style={{
        transition: "all 0.3s ease",
        transform: hover ? "translateY(-10px)" : "none",
        backgroundColor: "#fff"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Top Accent Line */}
      <div style={{ height: "4px", width: "100%", backgroundColor: item.color }}></div>
      
      <div className="card-body p-4 d-flex flex-column">
        <div
          className="mb-4 d-flex align-items-center justify-content-center rounded-3"
          style={{ 
            width: "600px", 
            height: "60px", 
            fontSize: "1.5rem", 
            backgroundColor: `${item.color}15`, 
            color: item.color 
          }}
        >
          {item.icon}
        </div>

        <h5 className="fw-bold mb-3">{item.title}</h5>
        <p className="text-muted small mb-4 flex-grow-1">{item.desc}</p>

        <button 
          onClick={onOpen}
          className="btn w-100 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 transition-all"
          style={{ 
            backgroundColor: hover ? item.color : "transparent",
            color: hover ? "#fff" : item.color,
            border: `2px solid ${item.color}`,
            padding: "10px"
          }}
        >
          Learn More <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

function DetailModal({ service, onClose }) {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3" 
      style={{ zIndex: 1050, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(5px)" }}>
      
      <div className="bg-white rounded-4 shadow-lg overflow-hidden position-relative animate__animated animate__zoomIn" 
        style={{ maxWidth: "800px", width: "100%", maxHeight: "90vh", overflowY: "auto" }}>
        
        <button 
          onClick={onClose}
          className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle shadow-sm"
          style={{ zIndex: 10, width: "40px", height: "40px" }}
        >
          <FaTimes />
        </button>

        <div className="row g-0">
          <div className="col-md-5">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-100 h-100" 
              style={{ objectFit: "cover", minHeight: "300px" }}
            />
          </div>
          <div className="col-md-7 p-4 p-md-5">
            <div className="d-flex align-items-center gap-3 mb-3">
               <span style={{ fontSize: "2rem", color: service.color }}>{service.icon}</span>
               <h2 className="fw-bold m-0">{service.title}</h2>
            </div>
            <hr />
            <p className="text-secondary lh-lg mb-4">
              {service.longDesc}
            </p>
            <div className="p-3 rounded-3 mb-4" style={{ backgroundColor: "#f8f9fa", borderLeft: `4px solid ${service.color}` }}>
                <small className="text-dark fw-bold italic">"Your participation drives our progress. Join hands today."</small>
            </div>
            <button className="btn btn-dark btn-lg w-100 rounded-pill shadow-sm" onClick={onClose}>
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}