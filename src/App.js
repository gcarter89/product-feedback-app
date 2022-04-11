import './App.scss';
import jsonData from './assets/data.json';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';

import NewFeedback from './layouts/NewFeedback/NewFeedback.js';
import EditFeedback from './layouts/EditFeedback/EditFeedback.js';
import FeedbackDetail from './layouts/FeedbackDetail/FeedbackDetail.js';
import Suggestions from './layouts/Suggestions/Suggestions.js';
import Roadmap from './layouts/Roadmap/Roadmap.js'

function App() {
    console.log('app refreshed');

    const statusArray = [['Planned', jsonData.productRequests.filter(elem => elem.status === 'planned').length, 'Ideas prioritized for research'], ['In-Progress', jsonData.productRequests.filter(elem => elem.status === 'in-progress').length, 'Currently in Development'], ['Live', jsonData.productRequests.filter(elem => elem.status === 'live').length, 'Released features']];

    const Element = () => {
        const {testId} = useParams()
        return (
            <h1>{`${testId}`}</h1>
        )
    }

    return (
        <div className="App">
                <Router>
                <Routes>
                    <Route index element={<Suggestions data={jsonData} statusArray={statusArray} />}/>
                    <Route path="/:testId" element={<Element />}></Route>
                    <Route path="/feedback">
                        <Route path="/feedback/new" element={<NewFeedback data={jsonData.productRequests} />} />  
                        <Route path=":id" element={<FeedbackDetail data={jsonData.productRequests} />} />
                        <Route path=":id/edit" element={<EditFeedback data={jsonData.productRequests} />} />
                    </Route>
                    <Route path="/roadmap" element={<Roadmap data={jsonData} statusArray={statusArray} />}/>
                </Routes>
                </Router>
        </div>
    );
}

export default App;
