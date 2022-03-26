import './App.scss';
import Header from './components/Header/Header.js';
import Subheader from './components/Subheader/Subheader';
import jsonData from './assets/data.json';
import { commentsCompare, commentsCompareReverse, upvoteCompare, upvoteCompareReverse  } from './helpers/sortFunctions';
import { useEffect, useState } from 'react';
import Main from './components/Main/Main';

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [data, setData] = useState([]);
    const [dashboardOpen, setDashboardOpen] = useState(false);

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
                const sortedCommentsAsc = [...jsonData.productRequests].sort(commentsCompare);
                setData(sortedCommentsAsc);
                break;

            case 3:
                const sortedCommentsDesc = [...jsonData.productRequests].sort(commentsCompareReverse);
                setData(sortedCommentsDesc);
            break;
        
            default:
                break;
        }
    }, [selectedIndex]);

    return (
        <div className="App">
            <Header dashboardOpen={dashboardOpen} setDashboardOpen={setDashboardOpen} />
            <Subheader selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            <Main data={data} dashboardOpen={dashboardOpen} />
        </div>
    );
}

export default App;
