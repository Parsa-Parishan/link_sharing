import React, { useState, useEffect } from "react";
import NewLink from "./NewLink";

export default function Links({ setList, list }) {
  const [idCounter, setIdCounter] = useState(1);

  function generateUniqueId() {
    setIdCounter((prevId) => prevId + 1);
  }

  useEffect(() => {
    // This code will run only once when the component mounts
    // Initialize idCounter to the last used id in the list + 1
    const lastUsedId = list.length > 0 ? list[0].id : 0;
    setIdCounter(lastUsedId + 1);
  }, [list]);

  const handleClick = () => {
    const newId = idCounter;
    const newLinks = {
      id: newId,
      platform: "github",
      links: "",
    };
    generateUniqueId();
    setList((prev) => [newLinks, ...prev]);
    console.log(list);
  };

  const removeLinks = (e) => {
    setList(() => list.filter((link) => link.id !== e.id));
  };

  const updateLink = (id, platform, address) => {
    setList((prev) =>
      prev.map((link) =>
        link.id === id ? { ...link, platform, links: address } : link
      )
    );
  };

  return (
    <div className="links">
      <div className="header">
        <h3>Customize your links</h3>
        <p>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <div className="create">
        <button onClick={handleClick}>+ Add new link</button>
      </div>
      <div className="links">
        {list.map((link) => (
          <NewLink
            link={link}
            key={link.id}
            removeLinks={removeLinks}
            updateLink={updateLink}
            list={list}
          />
        ))}
      </div>
    </div>
  );
}
