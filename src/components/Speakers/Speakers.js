import './Speakers.css';
import Button from '../Button/Button';
import Speaker from './Speaker/Speaker';

const speakers = (props) => {
    return (
        <>
            <div className="Speakers-header">
                <h2>Best of <br/><b>Speakers.</b></h2>
                <Button type="outline">View All</Button>
            </div>
            <div className="Speakers">
                {props.speakers.map((speaker, index) => {
                    return (
                        <Speaker
                            key={speaker.id}
                            name={speaker.name}
                            position={speaker.position}
                            division={speaker.division}
                            imageUrl={speaker.imageUrl} />
                    );
                })}
            </div>
        </>
    );
}

export default speakers;
