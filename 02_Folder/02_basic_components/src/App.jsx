import Navbar from "./components/navbar"
import Footer from "./components/footer"
import MycardHeroSection from "./components/heroSection"

const App = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="row">

          <div className="col-md-4 mb-4 mt-4">
            <MycardHeroSection />
          </div>

          <div className="col-md-4 mb-4 mt-4">
            <MycardHeroSection />
          </div>
          <div className="col-md-4 mb-4 mt-4">
            <MycardHeroSection />
          </div>
          <div className="col-md-4 mb-4 mt-4">
            <MycardHeroSection />
          </div>
          <div className="col-md-4 mb-4 mt-4">
            <MycardHeroSection />
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
