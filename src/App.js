import './App.scss';
import Header from './components/Header/Header.js';
import Subheader from './components/Subheader/Subheader';
import SuggestionCard from './components/SuggestionCard/SuggestionCard';

function App() {
  return (
    <div className="App">
        <Header />
        <Subheader />
        <SuggestionCard />
    </div>
  );
}

export default App;
