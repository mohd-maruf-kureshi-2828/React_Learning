
const MyCard = (props) => {
    return (
        <div className="mycard">
            <img 
                src={props.image} 
                alt="card-img" 
                className="mycard-img" 
            />

            <h3 className="mycard-title">{props.title}</h3>

            <p className="mycard-text">
                {props.text}
            </p>

            <button className="mycard-btn"><a href={props.readmore}>Click To GO</a></button>
        </div>
    );
};

export default MyCard;
