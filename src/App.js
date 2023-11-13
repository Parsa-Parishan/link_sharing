import { useState } from "react";
import iphone from "./assets/logo-devlinks-large.svg";
import { FaLink, FaUserCircle } from "react-icons/fa";
import Links from "./components/Links";
import Phone from "./components/Phone";
import ProfileDetails from "./components/ProfileDetails";

function App() {
  const [view, setView] = useState("links");
  const [list, setList] = useState([]);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    picture: null,
  });

  const handleChange = (e) => {
    setView(() => e.target.value);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <img src={iphone} alt="" />
          </div>
          <div className="pages">
            <form>
              <input
                type="radio"
                name="links"
                id="links"
                value="links"
                checked={view == "links"}
                onChange={handleChange}
              />
              <label htmlFor="links">
                <FaLink />
                <p>Links</p>
              </label>

              <input
                type="radio"
                name="profile"
                id="profile"
                value="profile details"
                checked={view == "profile details"}
                onChange={handleChange}
              />
              <label htmlFor="profile">
                <FaUserCircle />
                <p>Profile Details</p>
              </label>
            </form>
          </div>
          <div className="preview">
            <a href="#">Preview</a>
          </div>
        </nav>
      </header>
      <main>
        <div className="left">
          <Phone list={list} profile={profile} />
        </div>
        <div className="right">
          {view == "links" ? (
            <Links setList={setList} list={list} />
          ) : (
            <ProfileDetails setProfile={setProfile} profile={profile} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
