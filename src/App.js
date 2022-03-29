import './App.scss';
import Header from './components/Header/Header.js';
import jsonData from './assets/data.json';
import { commentsCompare, commentsCompareReverse, upvoteCompare, upvoteCompareReverse  } from './helpers/sortFunctions';
import { useEffect, useState } from 'react';
import Main from './components/Main/Main';

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    //use this suggestion data for the suggestion cards.
    const [data, setData] = useState(jsonData.productRequests);
    const [suggestionData, setSuggestionData] = useState(jsonData.productRequests.filter(elem => elem.status === 'suggestion'))


    const [dashboardOpen, setDashboardOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [roadmapVisible, setRoadmapVisible] = useState(false);

    const [selectedRoadmapStatus, setSelectedRoadmapStatus] = useState('in-progress');



    useEffect(() => {
        if (selectedCategory === 'all') {
            return setData(jsonData.productRequests);
        }

        const result = jsonData.productRequests.filter(elem => elem.category === selectedCategory);
        
        setData(result);

    }, [selectedCategory])


    useEffect(() => {
        switch (selectedIndex) {
            case 0:
                setData(prevState => ([...prevState].sort(upvoteCompare)))
                break;
                
            case 1:
                setData(prevState => ([...prevState].sort(upvoteCompareReverse)));
                break;

            case 2:
                setData(prevState => ([...prevState].sort(commentsCompare)));
                break;

            case 3:
                setData(prevState => ([...prevState].sort(commentsCompareReverse)))
            break;

            default:
                break;
        }
    }, [selectedIndex, selectedCategory]);

    return (
        <div className="App">
            <Header
                dashboardOpen={dashboardOpen}
                setDashboardOpen={setDashboardOpen}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                roadmapVisible={roadmapVisible}
                setRoadmapVisible={setRoadmapVisible}
                selectedRoadmapStatus={selectedRoadmapStatus}
                setSelectedRoadmapStatus={setSelectedRoadmapStatus}

            />
            <Main
                data={data}
                suggestionData={suggestionData}
                dashboardOpen={dashboardOpen}
                setDashboardOpen={setDashboardOpen}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                roadmapVisible={roadmapVisible}
                setRoadmapVisible={setRoadmapVisible} 
                selectedRoadmapStatus={selectedRoadmapStatus}
            />
        </div>
    );
}

export default App;
