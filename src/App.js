import './App.scss';
import Header from './components/Header/Header.js';
import jsonData from './assets/data.json';
import { commentsCompare, commentsCompareReverse, upvoteCompare, upvoteCompareReverse  } from './helpers/sortFunctions';
import { useEffect, useState } from 'react';
import Main from './components/Main/Main';

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const [data, setData] = useState(jsonData.productRequests);

    const [suggestionData, setSuggestionData] = useState(jsonData.productRequests.filter(elem => elem.status === 'suggestion'));
    const [dashboardOpen, setDashboardOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [roadmapVisible, setRoadmapVisible] = useState(false);

    const statusArray = [['Planned', jsonData.productRequests.filter(elem => elem.status === 'planned').length, 'Ideas prioritized for research'], ['In-Progress', jsonData.productRequests.filter(elem => elem.status === 'in-progress').length, 'Currently in Development'], ['Live', jsonData.productRequests.filter(elem => elem.status === 'live').length, 'Released features']];


    const [selectedRoadmapStatus, setSelectedRoadmapStatus] = useState(statusArray[1]);
    const [roadmapData, setRoadmapData] = useState(jsonData.productRequests.filter(elem => elem.status === 'in-progress'))



    useEffect(() => {
        const allSuggestionData = jsonData.productRequests.filter(elem => elem.status === 'suggestion');

        if (selectedCategory === 'all') {
            return setSuggestionData(jsonData.productRequests.filter(elem => elem.status === 'suggestion'));
        }

        const result = allSuggestionData.filter(elem => elem.category === selectedCategory);
        
        setSuggestionData(result);

    }, [selectedCategory])


    useEffect(() => {
        switch (selectedIndex) {
            case 0:
                setSuggestionData(prevState => ([...prevState].sort(upvoteCompare)))
                break;
                
            case 1:
                setSuggestionData(prevState => ([...prevState].sort(upvoteCompareReverse)));
                break;

            case 2:
                setSuggestionData(prevState => ([...prevState].sort(commentsCompare)));
                break;

            case 3:
                setSuggestionData(prevState => ([...prevState].sort(commentsCompareReverse)))
            break;

            default:
                break;
        }
    }, [selectedIndex, selectedCategory]);

    useEffect(() => {
        setRoadmapData(jsonData.productRequests.filter(elem => elem.status === selectedRoadmapStatus));
    }, [selectedRoadmapStatus])

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
                statusArray={statusArray}

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
                statusArray={statusArray}
            />
        </div>
    );
}

export default App;
