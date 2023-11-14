import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Preview({ list, profile }) {
  const [profilePicture, setProfilePicture] = useState(profile.picture);
  console.log(list);

  useEffect(() => {
    if (profile.picture) {
      // If there is a profile picture, read the file and set it as the image source
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(profile.picture);
    }
  }, [profile.picture]);

  return (
    <div className="previewCom">
      <div className="top"></div>
      <div className="bottom">
        <div className="mock">
          <div className="profile">
            <div className="picture">
              <img src={profilePicture} alt="" />
            </div>
            <div className="info">
              <h3>
                {profile.firstName} {profile.lastName}
              </h3>
              <p>{profile.email}</p>
            </div>
          </div>
          <div className="list">
            {list.map((link) => {
              return (
                <a href={link.links} key={link.id} target="_blank">
                  <div className={link.platform}>
                    <p>
                      {link.platform == "github" ? (
                        <FaGithub />
                      ) : link.platform == "youtube" ? (
                        <FaYoutube />
                      ) : link.platform == "linkedin" ? (
                        <FaLinkedin />
                      ) : link.platform == "instagram" ? (
                        <FaInstagram />
                      ) : (
                        <FaTwitter />
                      )}
                      {link.platform}
                    </p>
                    <span>
                      <FaArrowRight />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
