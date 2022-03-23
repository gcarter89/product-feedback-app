import './App.scss';
import Header from './components/Header/Header.js';
import Subheader from './components/Subheader/Subheader';
import SuggestionCards from './components/SuggestionCards/SuggestionCards.js';
import data from './assets/data.json';

function App() {

    return (
        <div className="App">
            <Header />
            <Subheader />
            <SuggestionCards data={data.productRequests} />
        </div>
    );
}

export default App;
