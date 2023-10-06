import './App.css'
import HeaderDesktop from './images/image-header-desktop.jpg'
import HeaderMobile from './images/image-header-mobile.jpg'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="text">
            <h1>Get <span className='insights'>insights</span> that help your business grow.</h1>
            <p id='p-main'>Discover the benefits of data analytics and make better decisions regarding revenue, customer 
            experience, and overall efficiency.</p>

            <div className="cards">
              <div className="card">
                <h3>10k+</h3>
                <p>companies</p>
              </div>
              <div className="card">
                <h3>314</h3>
                <p>templates</p>
              </div>
              <div className="card">
                <h3>12m+</h3>
                <p>queries</p>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={HeaderDesktop} alt="#" id='header-image'/>
            <img src={HeaderMobile} alt="#" id='header-mobile'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
