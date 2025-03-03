import { useState, useEffect } from "react";
import "./TeamRegistrationForm.css";
import { registerTeam } from "../Services/api";

const TeamRegistrationForm = () => {
  // Initialize state with default values
  const [formData, setFormData] = useState({
    teamName: "",
    hackathonExperience: "",
    teamSize: 2,
    contactNumber: "",
    college: "",
    program: "",
    participants: [
      { name: "", email: "" },
      { name: "", email: "" },
      { name: "", email: "" },
      { name: "", email: "" },
    ],
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Keep only the necessary number of participants visible
  const [visibleParticipants, setVisibleParticipants] = useState(2);

  // Update visible participants when team size changes
  useEffect(() => {
    setVisibleParticipants(parseInt(formData.teamSize));
  }, [formData.teamSize]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle special case for team size
    if (name === "teamSize") {
      const newSize = Math.min(Math.max(parseInt(value, 10) || 2, 2), 4);
      setFormData({ ...formData, teamSize: newSize });
      return;
    }

    // Update the form data state
    setFormData({ ...formData, [name]: value });
  };

  // Handle participant field changes
  const handleParticipantChange = (index, field, value) => {
    const updatedParticipants = [...formData.participants];
    updatedParticipants[index] = {
      ...updatedParticipants[index],
      [field]: value,
    };
    setFormData({ ...formData, participants: updatedParticipants });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Prepare data for submission
      const submissionData = {
        ...formData,
        // Only include participants up to the selected team size
        participants: formData.participants.slice(0, formData.teamSize),
      };

      console.log("Submitting form data:", submissionData);
      await registerTeam(submissionData);
      setSubmitted(true);
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
      console.error(
        "Registration failed:",
        err.response?.data?.message || err.message
      );
    } finally {
      setLoading(false);
    }
  };

  // Reset form to register another team
  const handleReset = () => {
    setFormData({
      teamName: "",
      hackathonExperience: "",
      teamSize: 2,
      contactNumber: "",
      college: "",
      program: "",
      participants: [
        { name: "", email: "" },
        { name: "", email: "" },
        { name: "", email: "" },
        { name: "", email: "" },
      ],
    });
    setSubmitted(false);
    setError(null);
  };

  // Generate participant form fields based on team size
  const renderParticipantFields = () => {
    const participantFields = [];

    // Only show the number of participants based on team size
    for (let i = 0; i < visibleParticipants; i++) {
      const ordinalSuffix = ["First", "Second", "Third", "Fourth"][i];

      participantFields.push(
        <div key={`participant-${i}`} className="participant-card">
          <h3>
            {ordinalSuffix} Participant Details {i === 0 && "(Team Leader)"}
          </h3>

          <div className="form-group">
            <label>Participant Name *</label>
            <input
              type="text"
              name={`participant${i + 1}Name`}
              value={formData.participants[i].name}
              onChange={(e) =>
                handleParticipantChange(i, "name", e.target.value)
              }
              required
              placeholder={`Enter ${ordinalSuffix.toLowerCase()} participant's name`}
            />
          </div>

          <div className="form-group">
            <label>Participant Email *</label>
            <input
              type="email"
              name={`participant${i + 1}Email`}
              value={formData.participants[i].email}
              onChange={(e) =>
                handleParticipantChange(i, "email", e.target.value)
              }
              required
              placeholder={`Enter ${ordinalSuffix.toLowerCase()} participant's email`}
            />
          </div>
        </div>
      );
    }

    return participantFields;
  };

  return (
    <div className="registration-container">
      <div className="form-wrapper">
        <div className="form-header">
          <h2>Hackathon Registration</h2>
          <p className="form-subtitle">Register Your Team</p>
        </div>

        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Registration Successful!</h3>
            <p>
              Your team has been registered. We will contact you soon with
              further details.
            </p>
            <button onClick={handleReset} className="primary-button">
              REGISTER ANOTHER TEAM
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="registration-form">
            {error && <div className="error-message">{error}</div>}

            <div className="form-section">
              <h3>Team Information</h3>

              <div className="form-group">
                <label>Team Name*</label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  required
                  placeholder="Enter team name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Number of Team Members*</label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    required
                  >
                    <option value="2">2 Members</option>
                    <option value="3">3 Members</option>
                    <option value="4">4 Members</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Contact Number*</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    placeholder="Enter one contact number"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>College/University Name*</label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    required
                    placeholder="Enter college/university name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Program*</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a program</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="BCA">BCA</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="MCA">MCA</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Hackathon Experience*</label>
                  <select
                    name="hackathonExperience"
                    value={formData.hackathonExperience}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section participants-section">
              <h3>Team Members ({formData.teamSize})</h3>
              <div className="participants-container">
                {renderParticipantFields()}
              </div>
            </div>

            <div className="form-footer">
              <p className="required-note">
                * Required fields. Teams must have {formData.teamSize} members.
              </p>
              <button
                type="submit"
                className="primary-button"
                disabled={loading}
              >
                {loading ? "SUBMITTING..." : "REGISTER TEAM"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default TeamRegistrationForm;
