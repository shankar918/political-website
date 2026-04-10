import React from 'react';

export default function NewsUpdate() {
  // Array holding the content. This makes it easy to add or remove updates in the future.
  const updateData = [
    {
      id: 1,
      level: "Village Level",
      title: "Grassroots Influencer",
      description: "Building local trust at the Panchayat level through authentic digital storytelling and daily updates.",
      link: "https://www.instagram.com/p/DSMq2GJgV0S/",
      badgeColor: "bg-success"
    },
    {
      id: 2,
      level: "Block / Ward Level",
      title: "Digital Ward Leader",
      description: "Connecting neighborhoods and resolving local civic issues through hyper-local WhatsApp networks.",
      link: "https://www.instagram.com/p/DRxXMILk11Q/",
      badgeColor: "bg-warning text-dark"
    },
    {
      id: 3,
      level: "Tehsil Level",
      title: "Tehsil Communicator",
      description: "Bridging the gap between rural and urban voters using interactive social media live sessions.",
      link: "https://www.instagram.com/p/DN_J8lgDVHp/",
      badgeColor: "bg-info text-dark"
    },
    {
      id: 4,
      level: "Constituency Level",
      title: "Digital Political Leader",
      description: "Managing public perception and large-scale public communication for assembly constituencies.",
      link: "https://www.instagram.com/p/DPwWFCWgZ-b/",
      badgeColor: "bg-primary"
    },
    {
      id: 5,
      level: "District Level",
      title: "Data-Driven Politician",
      description: "Utilizing deep analytics for district-wide voter sentiment tracking and strategic campaign management.",
      link: "#youtube",
      badgeColor: "bg-danger"
    },
    {
      id: 6,
      level: "Policy & Strategy",
      title: "Modern Policy Advocate",
      description: "Translating complex district policies into easy-to-understand, viral video content.",
      link: "https://www.instagram.com/p/C6whQU4MGY3/",
      badgeColor: "bg-dark"
    }
  ];

  return (
    <section className="bg-light py-5">
      <div className="container">
        {/* Section Header */}
        <div className="row mb-5 text-center">
          <div className="col-lg-8 mx-auto">
            <h2 className="fw-bold text-uppercase">Digital Leadership Journey</h2>
            <p className="text-muted">
              Exploring public communication and political strategy from the Village grassroots up to the District level.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="row g-4">
          {updateData.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              {/* Bootstrap Card */}
              <div className="card h-100 shadow-sm border-0 rounded-3">
                <div className="card-body d-flex flex-column">
                  
                  {/* Badge showing the level (Village, District, etc.) */}
                  <div className="mb-3">
                    <span className={`badge ${item.badgeColor} rounded-pill px-3 py-2`}>
                      {item.level}
                    </span>
                  </div>
                  
                  <h4 className="card-title fw-bold mb-3">{item.title}</h4>
                  <p className="card-text text-muted flex-grow-1">
                    {item.description}
                  </p>
                  
                  {/* Watch Now Button */}
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-primary w-100 mt-3 fw-semibold"
                  >
                    <i className="bi bi-play-circle me-2"></i> Watch Now
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}