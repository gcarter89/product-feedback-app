import './App.scss';
import Header from './components/Header/Header.js';
import jsonData from './assets/data.json';
import { commentsCompare, commentsCompareReverse, upvoteCompare, upvoteCompareReverse  } from './helpers/sortFunctions';
import { useEffect, useState } from 'react';
import Main from './components/Main/Main';

import NewFeedback from './layouts/NewFeedback/NewFeedback.js';
import EditFeedback from './layouts/EditFeedback/EditFeedback.js';

function App() {

    //data state variables
    const [suggestionData, setSuggestionData] = useState(jsonData.productRequests.filter(elem => elem.status === 'suggestion'));
    const [roadmapData, setRoadmapData] = useState(jsonData.productRequests.filter(elem => elem.status === 'in-progress'));

    //miscellaneous array props
    const statusArray = [['Planned', jsonData.productRequests.filter(elem => elem.status === 'planned').length, 'Ideas prioritized for research'], ['In-Progress', jsonData.productRequests.filter(elem => elem.status === 'in-progress').length, 'Currently in Development'], ['Live', jsonData.productRequests.filter(elem => elem.status === 'live').length, 'Released features']];
    let featureArray = ['all', 'UI', 'UX', 'enhancement', 'bug', 'feature'];
    featureArray.push(...jsonData.productRequests.map(elem => { return elem.category }));
    featureArray = [...new Set(featureArray)];


    //visibility state variables
    const [dashboardOpen, setDashboardOpen] = useState(false);
    const [cardsVisible, setCardsVisible] = useState(true);
    const [roadmapVisible, setRoadmapVisible] = useState(false);
    const [feedbackDetailVisible, setFeedbackDetailVisible] = useState(false);

    //selection state variables
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedRoadmapStatus, setSelectedRoadmapStatus] = useState(statusArray[1]);
    const [selectedFeedbackDetail, setSelectedFeedbackDetail] = useState({});


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
        setRoadmapData(jsonData.productRequests.filter(elem => elem.status === selectedRoadmapStatus[0].toLowerCase()));
    }, [selectedRoadmapStatus])

    return (
        <div className="App">
            {/* <Header
                dashboardOpen={dashboardOpen}
                setDashboardOpen={setDashboardOpen}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                roadmapVisible={roadmapVisible}
                setRoadmapVisible={setRoadmapVisible}
                setCardsVisible={setCardsVisible}
                selectedRoadmapStatus={selectedRoadmapStatus}
                setSelectedRoadmapStatus={setSelectedRoadmapStatus}
                statusArray={statusArray}
            />
            <Main
                featureArray={featureArray}
                suggestionData={suggestionData}
                dashboardOpen={dashboardOpen}
                setDashboardOpen={setDashboardOpen}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                roadmapVisible={roadmapVisible}
                setRoadmapVisible={setRoadmapVisible}
                cardsVisible={cardsVisible}
                setCardsVisible={setCardsVisible}
                selectedRoadmapStatus={selectedRoadmapStatus}
                feedbackDetailVisible={feedbackDetailVisible}
                setFeedbackDetailVisible={setFeedbackDetailVisible}
                selectedFeedbackDetail={selectedFeedbackDetail}
                setSelectedFeedbackDetail={setSelectedFeedbackDetail}
                statusArray={statusArray}
                roadmapData={roadmapData}
            /> */}
            {/* <NewFeedback /> */}
            <EditFeedback />
        </div>
    );
}

export default App;
