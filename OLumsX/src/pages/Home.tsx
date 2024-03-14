import "../styles/home.scss";
import sse_main from "../assets/image/sse_main.png";
// import Header from "../components/HeaderMain.jsx";
import Header from "../components/HeaderMain"

const Home = () => {
  return (
    <>
      <div className="home-page">
        <Header/>

        <img src={sse_main} alt="LUMS Market" id="sse-img" />

        <div className="category-bar">
          <div className="category-box">Grocery</div>

          <div className="category-box">Tuition</div>

          <div className="category-box">Gadgets</div>

          <div className="category-box">Food</div>

          <div className="category-box">Gifts</div>

          <div className="category-box">Art</div>

          <div className="category-box">Clothing</div>

          <div className="category-box">Services</div>

          <div className="category-box">Misc</div>
        </div>
      </div>
    </>
  );
};

export default Home;
