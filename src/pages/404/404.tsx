import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./404.css";
import { useNavigate } from "react-router-dom";
function Fourofour() {
  document.title = "Mintage | 404 Page Not Found";

  const navigate = useNavigate();
  return (
    <div className="fullfourofourpage no-scroll-page">
      <Header></Header>

      <div className="mainfourofourbox">
        <div>
          <p className="bigefourofour">404</p>
          <p className="spanpagenotfound">Page not found.</p>
          <button className="returnhomebutton" onClick={() => navigate("/")}>
            Return home{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "2px" }}
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Fourofour;
