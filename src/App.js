import Speakers from './components/Speakers/Speakers';
import NavBar from './components/Navigation/NavBar/NavBar';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';

import "./App.css";

import speakersObj from './model/speakers';

function App() {
    return (
        <div className="App">
            <SideDrawer/>
            <NavBar />
            <Speakers speakers={speakersObj}/>
        </div>
    );
}

export default App;
