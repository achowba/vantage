import "./App.css";
import NavBar from '../components/NavBar/NavBar';
import Speakers from '../components/Speakers/Speakers';

import speakersObj from '../model/speakers';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Speakers speakers={speakersObj}/>
        </div>
    );
}

export default App;
