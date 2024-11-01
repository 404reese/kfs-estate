import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummydata";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const priceData = [
  { quarter: 'Q1 2023', price: 3000 },
  { quarter: 'Q2 2023', price: 3200 },
  { quarter: 'Q3 2023', price: 3100 },
  { quarter: 'Q4 2023', price: 3200 },
  { quarter: 'Q1 2024', price: 3000 },
  { quarter: 'Q2 2024', price: 3500 },
  { quarter: 'Q3 2024', price: 3200 },
  { quarter: 'Q4 2024', price: 3400 },
  { quarter: 'Q1 2025', price: 3200 },
  { quarter: 'Q2 2025', price: 3800 },
  { quarter: 'Q3 2025', price: 4200 },
  { quarter: 'Q4 2025', price: 4000 },
];

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price-rating">
  <div className="price">₹ {singlePostData.price}</div>
  <div className="rating">Rating: 4.5</div>
</div>

              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <div style={{ marginTop: '8px' }}>
                  <span>posted by : </span>
                  <strong>{userData.name}</strong>
                </div>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
            <div className="chartContainer">
        <h2 style={{ marginTop: '20px', marginBottom: '20px' }}>Price Trends (2023 - 2025)</h2>
        <LineChart width={600} height={300} data={priceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <div className="buttons" style={{ marginTop: '20px' }}> {/* Added margin here */}
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7542.693053531199!2d73.836107!3d19.048496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd47f734de7c95%3A0xd66dcfb1981bf333!2sGeetmala%20Greencity%20Booking%20Office!5e0!3m2!1sen!2sin!4v1730271911050!5m2!1sen!2sin"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          </div>
          
        </div>
      </div>

  );
}

export default SinglePage;
