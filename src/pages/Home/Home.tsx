import { LogoAndName } from "../../components/Logo";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="pageWrap">
        <div className="topBarWrap">
          <div className="topBarBetween">
            <LogoAndName />
            <span className="docsStyle">Docs</span>
          </div>
          <div className="topBarBetween">
            <button className="docsStyle">Log In</button>
            <button className="createAccountButton">Create Account</button>
          </div>
        </div>
        <div className="sectionOne"></div>
      </div>
    </>
  );
}

export default Home;
