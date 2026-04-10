import React, { useState } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  MapPin, 
  Search, 
  CheckCircle, 
  ArrowRight,
  Award
} from "lucide-react";
import banner from "../assets/Youth.png";

export default function YouthEmployment() {
  const [formData, setFormData] = useState({ name: "", email: "", village: "", skills: "" });

  const jobs = [
    { title: "Software Developer", skill: "Full Stack", loc: "Hyderabad", type: "Full-Time" },
    { title: "Data Entry Operator", skill: "Basic Computer", loc: "Karimnagar", type: "Part-Time" },
    { title: "Marketing Executive", skill: "Communication", loc: "Warangal", type: "Full-Time" },
  ];

  const stats = [
    { label: "Jobs Created", value: "100+", icon: <Briefcase className="text-primary" /> },
    { label: "Youth Trained", value: "800+", icon: <GraduationCap className="text-success" /> },
    { label: "Placed in 2023", value: "400+", icon: <Users className="text-info" /> },
  ];

  return (
    <div className="pb-5 bg-light">
      {/* 🔹 Hero Section with Overlay */}
      <div className="position-relative overflow-hidden mb-5" style={{ height: "450px" }}>
        <img 
          src={banner} 
          alt="Youth Empowerment" 
          className="w-100 h-100 object-fit-cover position-absolute"
          style={{ filter: "brightness(0.4)" }}
        />
        <div className="position-relative h-100 d-flex align-items-center justify-content-center text-center text-white p-4">
          <div style={{ maxWidth: "800px" }}>
            {/* <span className="badge bg-primary mb-3 px-3 py-2 text-uppercase">Shaping the Future</span>
            <h1 className="display-4 fw-bold mb-3">Empowering Our Youth, <br/>Building Our Nation</h1> */}
            <p className="lead mb-4">Our mission is to bridge the gap between talent and opportunity. Access exclusive job listings, skill training, and career mentorship.</p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="#jobs" className="btn btn-primary btn-lg px-4">Find a Job</a>
              <a href="#apply" className="btn btn-outline-light btn-lg px-4">Register for Training</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        
        {/* 🔹 Statistics Section */}
        <div className="row g-4 mb-5 mt-n5 position-relative" style={{ marginTop: "-80px" }}>
          {stats.map((stat, i) => (
            <div key={i} className="col-md-4">
              <div className="card border-0 shadow-sm text-center p-4">
                <div className="mb-2 d-flex justify-content-center">{stat.icon}</div>
                <h2 className="fw-bold m-0">{stat.value}</h2>
                <p className="text-muted m-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Job Opportunities Section */}
        <section id="jobs" className="mb-5">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h2 className="fw-bold">Latest Job Opportunities</h2>
              <p className="text-muted">Verified opportunities in the private and public sectors.</p>
            </div>
            <button className="btn btn-outline-primary btn-sm">View All Jobs</button>
          </div>

          <div className="row g-4">
            {jobs.map((job, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                  <div className="card-body p-4">
                    <span className="badge bg-soft-primary text-primary mb-2">{job.type}</span>
                    <h4 className="fw-bold mb-3">{job.title}</h4>
                    <div className="d-flex align-items-center text-muted mb-2">
                      <Award size={16} className="me-2" />
                      <small>{job.skill}</small>
                    </div>
                    <div className="d-flex align-items-center text-muted mb-4">
                      <MapPin size={16} className="me-2" />
                      <small>{job.loc}</small>
                    </div>
                    <a href="#apply" className="btn btn-primary w-100">
                       Apply Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 Training & Skills */}
        <section className="mb-5 bg-white p-5 rounded-4 shadow-sm">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Skill Development Programs</h2>
              <p className="text-muted mb-4">We have partnered with top industries to provide free certification courses for the youth of our constituency.</p>
              
              <div className="list-group list-group-flush mb-4">
                <div className="list-group-item bg-transparent px-0 d-flex">
                  <CheckCircle className="text-success me-3 mt-1" />
                  <div>
                    <h6 className="mb-1">Web Development Bootcamp</h6>
                    <p className="small text-muted mb-0">Learn React, Node.js and modern web tools.</p>
                  </div>
                </div>
                <div className="list-group-item bg-transparent px-0 d-flex">
                  <CheckCircle className="text-success me-3 mt-1" />
                  <div>
                    <h6 className="mb-1">Digital Marketing Training</h6>
                    <p className="small text-muted mb-0">Master SEO, Social Media, and Content Strategy.</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-success px-4 py-2">Explore All Courses <ArrowRight size={18} /></button>
            </div>
            {/* <div className="col-lg-5 offset-lg-1 mt-4 mt-lg-0">
              <div className="p-4 bg-light rounded-4 border">
                <h5 className="fw-bold mb-3 text-center">Candidate's Message</h5>
                <p className="fst-italic text-muted font-serif">
                  "Our youth are our greatest asset. By providing them with the right skills and job opportunities, we are not just building careers, we are building the future of our state."
                </p>
                <div className="d-flex align-items-center mt-3">
                  <div className="bg-primary rounded-circle me-3" style={{width: "40px", height: "40px"}}></div>
                  <div>
                    <h6 className="mb-0 fw-bold">Candidate Name</h6>
                    <small className="text-muted">MLA / Representative</small>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* 🔹 Registration Form */}
        <section id="apply" className="mb-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg p-2 p-md-4">
                <div className="card-body">
                  <div className="text-center mb-4">
                    <h2 className="fw-bold">Job Seeker Registration</h2>
                    <p className="text-muted">Fill the form and our career counseling team will reach out to you.</p>
                  </div>
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Full Name</label>
                      <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="John Doe" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Email Address</label>
                      <input type="email" className="form-control form-control-lg bg-light border-0" placeholder="name@email.com" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Village / Mandal</label>
                      <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="Enter Area" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Highest Qualification</label>
                      <select className="form-select form-select-lg bg-light border-0">
                        <option>B.Tech / Graduate</option>
                        <option>Intermediate / 12th</option>
                        <option>SSC / 10th</option>
                        <option>Post Graduate</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">Key Skills</label>
                      <textarea className="form-control form-control-lg bg-light border-0" rows="3" placeholder="List your skills (e.g. Tally, Coding, Sales, Driving)"></textarea>
                    </div>
                    <div className="col-12 text-center mt-4">
                      <button className="btn btn-primary btn-lg px-5 shadow">Submit Application</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🔹 Success Stories Section */}
        {/* <section>
          <h3 className="fw-bold mb-4">Success Stories</h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm p-3">
                <div className="d-flex align-items-center">
                  <div className="bg-light rounded p-3 me-3">
                    <Users className="text-primary" />
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold">Ramesh Kumar</h5>
                    <p className="text-muted small mb-0">Software Job at TCS</p>
                    <p className="mt-2 text-dark">"The free training program helped me clear my technical interviews. I am now the first engineer in my village."</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm p-3">
                <div className="d-flex align-items-center">
                  <div className="bg-light rounded p-3 me-3">
                    <Users className="text-primary" />
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold">Anitha P.</h5>
                    <p className="text-muted small mb-0">Digital Marketing Executive</p>
                    <p className="mt-2 text-dark">"I learned SEO through the skill center and was placed within 2 months. Great initiative for women!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>

      {/* Add Custom CSS to your stylesheet */}
      <style>{`
        .bg-soft-primary { background-color: #e7f1ff; }
        .hover-shadow:hover { 
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
        }
        .transition { transition: all 0.3s ease; }
        .mt-n5 { margin-top: -50px; }
      `}</style>
    </div>
  );
}