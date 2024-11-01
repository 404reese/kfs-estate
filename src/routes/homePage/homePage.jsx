import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import "./prop.scss";
function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">KFS Real Estate</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <SearchBar />
          <a href="/1">Property</a>


<a href="/1" className="property-card">
  <div className="property-image">
    <img 
      src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      alt="Beautiful Apartment" 
    />
  </div>
  <div className="property-details">
    <h2>Geetamala Greencity</h2>
    <p>Location: Ghodegaon, Maharashtra 412408</p>
    <p>Price: ₹180000</p>
    <p>Bedrooms: 2</p>
    <p>Size: 484 sq ft</p>
    <p>Nearby: School - 250m away, Bus - 100m away, Restaurant - 50m away</p>
  </div>
</a>


          {/* <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div> */}

      
    </div>
  );
}

export default HomePage;
