import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-card">
        <div className="best-labs-cards">
          <h1 className="best-labs-header">
            <span className="best-labs-span">Best in class </span> lab tests!
          </h1>
        </div>

        <form className="proceed-form">
          <h1 className="profile-form-heading">
            Fill in the details to get a call!
          </h1>
          <div className="input-card">
            <img
              src="https://i.ibb.co/bPPK34g/person.png"
              alt="person"
              className="person-logo"
            />
            <input
              type="text"
              placeholder="Full name"
              className="proceed-input"
            />
          </div>
          <div className="input-card">
            <img
              src="https://i.ibb.co/JktznNc/call.png"
              alt="call"
              className="person-logo"
            />
            <input
              type="number"
              placeholder="Phone number"
              className="proceed-input"
            />
          </div>
          <div className="input-card">
            <img
              src="https://i.ibb.co/xg8rb1z/distance.png"
              alt="distance"
              className="person-logo"
            />
            <input
              type="text"
              placeholder="Location"
              className="proceed-input"
            />
          </div>
          <div className="input-card">
            <input
              type="checkbox"
              className="checkbox"
              id="check"
              defaultChecked
            />
            <label htmlFor="check" className="label">
              By continuing, you agree to our <span className="terms">T&C</span>{' '}
              and <span className="terms">privacy policy</span>
            </label>
          </div>
          <div className="proceed-btn-card">
            <button
              type="submit"
              className="proceed-btn"
              onClick={e => {
                e.preventDefault()
              }}
            >
              Proceed
            </button>
          </div>
        </form>
        <div className="best-labs-card">
          <img
            src="https://i.ibb.co/vVs6r82/Hero-text-image.png"
            alt="Hero-text"
            className="best-labs-img"
          />
        </div>
      </div>
      <div className="labs-details-card">
        <div className="labs-details">
          <img
            src="https://i.ibb.co/y4R1d8P/Rectangle-80.png"
            alt="Rectangle-80"
          />
          <h1 className="labs-details-heading">NABL Accredited Labs</h1>
        </div>
        <div className="labs-details">
          <img
            src="https://i.ibb.co/fD66BgF/Rectangle-81.png"
            alt="Rectangle-81"
          />
          <h1 className="labs-details-heading">Free sample collection</h1>
        </div>
      </div>
      <h1 className="expanding-heading">
        We keep <span className="expanding-span"> expanding</span>!
      </h1>
      <div className="labs-collection-container">
        <div className="labs-collection-card">
          <h1 className="count">5+</h1>
          <h1 className="text">Labs</h1>
        </div>
        <div className="labs-collection-card">
          <h1 className="count">100+</h1>
          <h1 className="text">Collection centers</h1>
        </div>
        <div className="labs-collection-card">
          <h1 className="count">1000+</h1>
          <h1 className="text">Monthly tests</h1>
        </div>
        <div className="labs-collection-card">
          <h1 className="count">2200</h1>
          <h1 className="text">Test menu</h1>
        </div>
        <div className="labs-collection-card">
          <h1 className="count">5+</h1>
          <h1 className="text">Cities present in</h1>
        </div>
      </div>
    </div>
  </>
)

export default Home
