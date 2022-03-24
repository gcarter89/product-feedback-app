import './App.scss';
import Header from './components/Header/Header.js';
import Subheader from './components/Subheader/Subheader';
import SuggestionCards from './components/SuggestionCards/SuggestionCards.js';
import jsonData from './assets/data.json';
import { useEffect, useState } from 'react';

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [data, setData] = useState([])

    function upvoteCompare( a, b ) {
        if ( a.upvotes > b.upvotes ){
          return -1;
        }
        if ( a.upvotes < b.upvotes ){
          return 1;
        }
        return 0;
      }

      function upvoteCompareReverse( a, b ) {
        if ( a.upvotes < b.upvotes ){
          return -1;
        }
        if ( a.upvotes > b.upvotes ){
          return 1;
        }
        return 0;
      }






    useEffect(() => {

        switch (selectedIndex) {
            case 0:
                const sortedUpvotesAsc = [...jsonData.productRequests].sort(upvoteCompare);
                setData(sortedUpvotesAsc)
                break;
            case 1:
                const sortedUpvotesDesc = [...jsonData.productRequests].sort(upvoteCompareReverse);
                setData(sortedUpvotesDesc);
                break;

            case 2:
                break;

            case 3:
            break;
        
            default:
                break;
        }
    }, [selectedIndex]);


    return (
        <div className="App">
            <Header />
            <Subheader selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            <SuggestionCards data={data} />
        </div>
    );
}

export default App;
