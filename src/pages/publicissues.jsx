import React, { useState } from 'react';
import "../public.css";

export default function PublicIssues() {
  // 1. State Management for the form
  const [formData, setFormData] = useState({
    isAnonymous: false,
    fullName: '',
    phone: '',
    district: '',
    mandal: '',
    village: '',
    landmark: '',
    category: '',
    issueTitle: '',
    description: '',
    priority: '',
    previouslyReported: 'No',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Issue Submitted to Leader's Dashboard:", formData);
    alert("Thank you! Your issue has been successfully registered. Our team will look into it.");
    // Here you would typically send 'formData' to your backend API
  };

  return (
    <div className="issue-container">
      <form className="issue-form" onSubmit={handleSubmit}>
        
        <div className="form-header">
          <h2>Report a Public Issue</h2>
          <p>Help us build a better constituency. Report your village or district issues directly to the leader's office.</p>
        </div>

        {/* CONCEPT 1: Privacy / Anonymity Option */}
        <div className="form-group anonymous-toggle">
          <label>
            <input 
              type="checkbox" 
              name="isAnonymous" 
              checked={formData.isAnonymous} 
              onChange={handleChange} 
            />
            Keep my identity anonymous (Useful for sensitive issues)
          </label>
        </div>

        {/* CONCEPT 2: Conditional Personal Details */}
        {!formData.isAnonymous && (
          <fieldset>
            <legend>Personal Details</legend>
            <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required={!formData.isAnonymous} />
            <input type="tel" name="phone" placeholder="Phone Number (WhatsApp preferred)" onChange={handleChange} required={!formData.isAnonymous} />
          </fieldset>
        )}

        {/* CONCEPT 3: Hierarchical Location (District -> Mandal -> Village) */}
        <fieldset>
          <legend>Location of the Issue</legend>
          <div className="location-grid">
            <select name="district" onChange={handleChange} required>
              <option value="">Select District</option>
              <option value="District 1">District 1</option>
              <option value="District 2">District 2</option>
              {/* Add actual districts here */}
            </select>

            <select name="mandal" onChange={handleChange} required>
              <option value="">Select Mandal / Block / Municipality</option>
              <option value="Mandal A">Mandal A</option>
              <option value="Mandal B">Mandal B</option>
              {/* Add actual mandals here */}
            </select>
          </div>

          <div className="location-grid">
            <input type="text" name="village" placeholder="Village / Ward Number" onChange={handleChange} required />
            <input type="text" name="landmark" placeholder="Specific Landmark / Street" onChange={handleChange} required />
          </div>
        </fieldset>

        {/* CONCEPT 4: Detailed Issue Categorization */}
        <fieldset>
          <legend>Issue Details</legend>
          <select name="category" onChange={handleChange} required>
            <option value="">Select Issue Category</option>
            <option value="Agriculture & Farming">Agriculture & Farming</option>
            <option value="Govt Schemes & Pensions">Govt Schemes & Pensions</option>
            <option value="Roads & Infrastructure">Roads & Infrastructure</option>
            <option value="Drinking Water & Sanitation">Drinking Water & Sanitation</option>
            <option value="Electricity & Power">Electricity & Power</option>
            <option value="Hospitals & Healthcare">Hospitals & Healthcare</option>
            <option value="Schools & Education">Schools & Education</option>
            <option value="Law & Order / Police">Law & Order / Police</option>
            <option value="Other">Other</option>
          </select>

          <input type="text" name="issueTitle" placeholder="Short Title of the Issue (e.g., Broken pipe in Main Bazar)" onChange={handleChange} required />
          
          <textarea name="description" rows="4" placeholder="Describe your issue in detail. How long has this been a problem?" onChange={handleChange} required></textarea>
        </fieldset>

        {/* CONCEPT 5: Evidence & Administrative Check */}
        <fieldset>
          <legend>Additional Information</legend>
          
          <label className="file-upload-label">
            Upload Photo/Video Evidence (Optional):
            <input type="file" accept="image/*,video/*" multiple />
          </label>

          <label className="radio-label">
            Have you reported this to local Govt Officials before?
            <select name="previouslyReported" onChange={handleChange}>
              <option value="No">No, reporting here first</option>
              <option value="Yes - Gram Panchayat">Yes, to Gram Panchayat</option>
              <option value="Yes - Mandal Level">Yes, to Mandal / Block Officer</option>
              <option value="Yes - Collectorate">Yes, to District Collectorate</option>
            </select>
          </label>

          <select name="priority" onChange={handleChange} required>
            <option value="">Urgency / Priority Level</option>
            <option value="Low">Low - Needs attention but not urgent</option>
            <option value="Medium">Medium - Affecting daily life</option>
            <option value="High">High - Emergency / Danger to life</option>
          </select>
        </fieldset>

        <button type="submit" className="submit-btn">Submit Issue to Leader</button>

      </form>
    </div>
  )
}