import React, { useEffect, useState } from "react";
import { FaRegSave } from "react-icons/fa";

export default function ProfileDetails({ setProfile, profile }) {
  const [labelBackground, setLabelBackground] = useState("");
  const [alert, setAlert] = useState(false);

  const handleFileChange = (event) => {
    // Get the selected file from the input
    const file = event.target.files[0];

    // Update the state with the selected file

    setProfile((prev) => ({
      ...prev,
      picture: file,
    }));
  };

  useEffect(() => {
    if (profile.picture) {
      const reader = new FileReader();
      reader.onload = () => {
        setLabelBackground(`url(${reader.result})`);
        setProfile((prev) => ({
          ...prev,
          profilePictureUse: `url(${reader.result})`,
        }));
      };
      reader.readAsDataURL(profile.picture);
    }
  }, [profile.picture]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile((prev) => ({
      ...prev,
    }));
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 4000);
  };

  return (
    <div className="profileDetails">
      <div className="header">
        <h3>Profile Details</h3>
        <p>Add/edit/remove links below and then share all your profiles</p>
      </div>
      <div className="upload">
        <form action="">
          <p>Profile picture</p>
          <label
            htmlFor="upload"
            style={{
              backgroundImage: labelBackground,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 40 40"
              >
                <path
                  fill="#633CFF"
                  d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z"
                />
              </svg>
              <p>Change Image</p>
            </div>
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            id="upload"
            name="upload"
            accept="image/*"
          />
          <p></p>
        </form>
      </div>
      <div className="information">
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div>
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className={`alert ${alert && "appear"}`}>
        <p>
          <FaRegSave /> Your changes have been successfully saved!
        </p>
      </div>
    </div>
  );
}
