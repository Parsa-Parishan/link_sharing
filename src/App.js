import { useState } from "react";
import iphone from "./assets/logo-devlinks-large.svg";
import logo from "./assets/logo-devlinks-small.svg";
import { FaLink, FaUserCircle, FaEye } from "react-icons/fa";
import Links from "./components/Links";
import Phone from "./components/Phone";
import ProfileDetails from "./components/ProfileDetails";
import Preview from "./components/Preview";

function App() {
  const [view, setView] = useState("links");
  const [list, setList] = useState([]);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    picture: null,
  });
  const [preview, setPreview] = useState(false);

  const handleChange = (e) => {
    setView(() => e.target.value);
    setPreview(false);
  };

  const handlePreview = () => {
    setView(() => null);
    setPreview(true);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <img src={iphone} alt="" className="large-logo" />
            <img src={logo} alt="" className="small-logo" />
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
          <div className="preview" onClick={handlePreview}>
            <a href="#">
              <FaEye />
              <p>Preview</p>
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div className="left">
          {!preview && <Phone list={list} profile={profile} />}
        </div>
        <div className="right">
          {view == "links" ? (
            <Links setList={setList} list={list} />
          ) : view == "profile details" ? (
            <ProfileDetails setProfile={setProfile} profile={profile} />
          ) : null}
          {preview && <Preview list={list} profile={profile} />}
        </div>
      </main>
    </div>
  );
}

export default App;
