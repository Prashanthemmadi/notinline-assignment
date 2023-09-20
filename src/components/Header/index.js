import {useState} from 'react'
import './index.css'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
      <div className="large-header-container">
        <div>
          <img
            src="https://i.ibb.co/mXX5gVN/Component-10.png"
            alt="Component-10"
            className="logo"
          />
        </div>
        <div className="nav-details">
          <h1 className="home">Home</h1>
          <h1 className="home">Health Conditions</h1>
          <h1 className="lab-tests">Lab tests</h1>
          <h1 className="home">Medicines</h1>
          <button type="button" className="header-btn">
            For patients
          </button>
          <button type="button" className="header-btn">
            For hospitals
          </button>
        </div>
      </div>
      <div className="small-header-container">
        <div className="small-header-card">
          <img
            src="https://i.ibb.co/mXX5gVN/Component-10.png"
            alt="Component-10"
            className="logo"
          />
          {showMenu ? (
            <button
              type="button"
              className="logo-btn"
              onClick={() => {
                setShowMenu(false)
              }}
            >
              <img src="https://i.ibb.co/NrfpmG7/close.png" alt="close" />
            </button>
          ) : (
            <button
              type="button"
              className="logo-btn"
              onClick={() => {
                setShowMenu(true)
              }}
            >
              <img src="https://i.ibb.co/2nKDS3X/menu.png" alt="menu" />
            </button>
          )}
        </div>
        {showMenu && (
          <div className="small-nav-details">
            <h1 className="home">Home</h1>
            <h1 className="home">Health Conditions</h1>
            <h1 className="lab-tests">Lab tests</h1>
            <h1 className="home">Medicines</h1>
            <button type="button" className="header-btn">
              For patients
            </button>
            <button type="button" className="header-btn">
              For hospitals
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
