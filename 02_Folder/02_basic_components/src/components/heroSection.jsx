import Navlogo from '../assets/navimg.jpg';

const MycardHeroSection = () => {
    return (
        <div className="card bg-dark text-primary" style={{ width: '18rem' }}>
            <img src={Navlogo} className="card-img-top" alt="image" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default MycardHeroSection;