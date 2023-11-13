import React, { useEffect, useState } from "react";

export default function NewLink({ link, removeLinks, updateLink }) {
  const { id, platform: initialPlatform, links: initialLinks } = link;

  const [platform, setPlatform] = useState(initialPlatform);
  const [address, setAddress] = useState(initialLinks || "");

  const handleChange = (e) => {
    setPlatform(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(() => e.target.value);
  };

  const handleUpdateLink = (e) => {
    updateLink(link.id, platform, address);
  };

  useEffect(() => {
    handleUpdateLink();
  }, [platform, address]);

  return (
    <div className="newLink">
      <div className="header">
        <h4>= Link #{link.id}</h4>
        <button onClick={() => removeLinks(link)} className="">
          Remove
        </button>
      </div>
      <div className="platform">
        <form action="">
          <label htmlFor="platform">Platform</label>
          <br />
          <select
            name="platform"
            id="platform"
            onChange={handleChange}
            value={platform}
          >
            <option value="github" data-icon="github">
              Github
            </option>
            <option value="youtube" data-icon="youtube">
              Youtube
            </option>
            <option value="linkedin" data-icon="linkedin">
              Linkedin
            </option>
            <option value="instagram" data-icon="instagram">
              Instagram
            </option>
            <option value="twitter" data-icon="twitter">
              Twitter
            </option>
          </select>
          <label htmlFor="link">Link</label>
          <br />
          <input
            type="text"
            id="link"
            name="link"
            placeholder={`https://www.${platform}.com/username`}
            value={address}
            onChange={handleAddressChange}
          />
        </form>
      </div>
      <div className="link"></div>
    </div>
  );
}
