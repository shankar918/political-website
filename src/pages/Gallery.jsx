import React, { useState } from "react";
import social1 from "../assets/banner1.jpeg";

// Component for Individual Card to manage its own "Read More" state
const GalleryCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm border-0">
        <div className="position-relative">
          <img
            src={item.image}
            alt={item.title}
            className="card-img-top"
            style={{ height: "220px", objectFit: "cover" }}
          />
          <span className="position-absolute top-0 end-0 m-2 badge bg-warning text-dark">
            {item.category}
          </span>
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="fw-bold">{item.title}</h5>
          <p className="text-muted small mb-2">
            <i className="bi bi-calendar-check me-1"></i> {item.date}
          </p>
          
          {/* Short Description */}
          <p className="card-text text-secondary">
            {item.shortDesc}
          </p>

          {/* Expanded Content (The "Exceted" Matter) */}
          <div className={`collapse ${isExpanded ? "show" : ""}`}>
            <div className="mt-2 pt-2 border-top text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              {item.longDesc}
            </div>
          </div>

          {/* Toggle Button */}
          <button
            className={`btn mt-auto w-100 ${isExpanded ? "btn-outline-secondary" : "btn-primary"}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less ↑" : "Read More ↓"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const galleryData = [
    {
      id: 1,
      category: "Events",
      title: "Grand Election Rally",
      date: "March 10, 2024",
      image: social1,
      shortDesc: "A historic gathering of over 50,000 supporters at the main square.",
      longDesc: "The leader addressed the crowd regarding the 5-year vision plan. Key highlights included the promise of 24/7 electricity, better road connectivity for rural areas, and new scholarships for students. The event concluded with a peaceful march through the city center."
    },
    {
      id: 2,
      category: "Social",
      title: "Free Medical Camp",
      date: "Feb 15, 2024",
      image: social1,
      shortDesc: "Providing free checkups and medicines to 500+ families.",
      longDesc: "In collaboration with top city doctors, we organized a health camp focusing on eye care and maternal health. Over 200 pairs of glasses were distributed for free, and elderly citizens received specialized cardiac consultations."
    },
    {
      id: 3,
      category: "Development",
      title: "Smart School Inauguration",
      date: "Jan 20, 2024",
      image: social1,
      shortDesc: "Inaugurated the first digital-classroom primary school in the district.",
      longDesc: "Education is our priority. This school features high-speed internet, tablets for students, and a state-of-the-art science lab. The leader interacted with students and emphasized the role of technology in modern India."
    },
    {
        id: 4,
        category: "Development",
        title: "Water Pipeline Project",
        date: "Jan 05, 2024",
        image: social1,
        shortDesc: "Inspection of the new pipeline bringing water to 15 dry villages.",
        longDesc: "Walking through the construction site, the leader ensured that the pipeline quality meets national standards. This project will solve the drinking water crisis for over 10,000 residents in the western belt."
      }
  ];

  const categories = ["All", "Events", "Social", "Development"];

  const filteredData = filter === "All" 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6">Leader's Activity Gallery</h2>
        <p className="text-muted">Serving the People, Building the Nation</p>
      </div>

      {/* Filter Tabs */}
      <ul className="nav nav-pills justify-content-center mb-5">
        {categories.map(cat => (
          <li className="nav-item" key={cat}>
            <button 
              className={`nav-link border-0 mx-1 ${filter === cat ? "active bg-primary" : "text-dark"}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

      {/* Gallery Grid */}
      <div className="row g-4">
        {filteredData.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
      
      {/* Footer Info */}
      <div className="mt-5 text-center p-4 bg-light rounded shadow-sm">
        <h5 className="fw-bold">Stay Updated</h5>
        <p className="mb-0">Follow our social media channels for daily updates on development work and public service.</p>
      </div>
    </div>
  );
}