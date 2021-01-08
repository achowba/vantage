import "./Speaker.css";

const speakers = (props) => {
    const style = {
        backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
    };

    return (
        <div className="Speaker" style={style}>
            <div className="Speaker-info">
                <p className="Speaker-name">{props.name}</p>
                <div className="Speaker-job__wrapper">
                    <p className="Speaker-division">{props.division}</p>
                    <span className="circle"></span>
                    <p className="Speaker-position">{props.position}</p>
                </div>
            </div>
        </div>
    );
};

export default speakers;
