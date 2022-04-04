import './App.scss';
import jsonData from './assets/data.json';
import { useState } from 'react';

import NewFeedback from './layouts/NewFeedback/NewFeedback.js';
import EditFeedback from './layouts/EditFeedback/EditFeedback.js';
import FeedbackDetail from './layouts/FeedbackDetail/FeedbackDetail.js';
import Suggestions from './layouts/Suggestions/Suggestions.js';
import Roadmap from './layouts/Roadmap/Roadmap.js'

function App() {

    //to-do
    //1. look at the state and refactor for each specific layout
    //2. preserve the global state but make sure the localised state is preserved in layout components.


    //miscellaneous array props
    const statusArray = [['Planned', jsonData.productRequests.filter(elem => elem.status === 'planned').length, 'Ideas prioritized for research'], ['In-Progress', jsonData.productRequests.filter(elem => elem.status === 'in-progress').length, 'Currently in Development'], ['Live', jsonData.productRequests.filter(elem => elem.status === 'live').length, 'Released features']];



    //visibility state variables
    const [cardsVisible, setCardsVisible] = useState(true);
    const [roadmapVisible, setRoadmapVisible] = useState(false);
    const [feedbackDetailVisible, setFeedbackDetailVisible] = useState(false);

    //selection state variables

    const [selectedFeedbackDetail, setSelectedFeedbackDetail] = useState(jsonData.productRequests[0]);






    return (
        <div className="App">
            {/* <NewFeedback /> */}
            {/* <EditFeedback /> */}
            {/* <FeedbackDetail selectedFeedbackDetail={selectedFeedbackDetail} /> */}
            {/* <Suggestions data={jsonData} setSelectedFeedbackDetail={setSelectedFeedbackDetail} setFeedbackDetailVisible={setFeedbackDetailVisible} statusArray={statusArray} setCardsVisible={setCardsVisible} setRoadmapVisible={setRoadmapVisible} /> */}
            <Roadmap data={jsonData} setRoadmapVisible={setRoadmapVisible} setCardsVisible={setCardsVisible} statusArray={statusArray} />
        </div>
    );
}

export default App;
