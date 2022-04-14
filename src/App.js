import './App.scss';
import jsonData from './assets/data.json';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';

import NewFeedback from './layouts/NewFeedback/NewFeedback.js';
import EditFeedback from './layouts/EditFeedback/EditFeedback.js';
import FeedbackDetail from './layouts/FeedbackDetail/FeedbackDetail.js';
import Suggestions from './layouts/Suggestions/Suggestions.js';
import Roadmap from './layouts/Roadmap/Roadmap.js'
import { useEffect, useState } from 'react';

function App() {
    
    const [data, setData]= useState(null);
    // localStorage.clear();

    useEffect(() => {
        if (!localStorage.getItem('data')) {
            console.log(localStorage)
            localStorage.setItem('data', JSON.stringify(jsonData))
        }

        if (!data) {
            const storageString = localStorage.getItem('data');
            setData(JSON.parse(storageString));
        }

        localStorage.setItem('data', JSON.stringify(data));
    },[data])


    let statusArray;
    if (data) {
        statusArray = [['Planned', data.productRequests.filter(elem => elem.status === 'planned').length, 'Ideas prioritized for research'], ['In-Progress', data.productRequests.filter(elem => elem.status === 'in-progress').length, 'Currently in Development'], ['Live', data.productRequests.filter(elem => elem.status === 'live').length, 'Released features']];
    }

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
                     <Route index element={data && <Suggestions data={data} statusArray={statusArray} />}/>
                    <Route path="/:testId" element={<Element />}></Route>
                    <Route path="/feedback">
                        <Route path="/feedback/new" element={data && <NewFeedback data={data} setData={setData} />} />  
                        <Route path=":id" element={data && <FeedbackDetail data={data} setData={setData} />} />
                        <Route path=":id/edit" element={data && <EditFeedback data={data} setData={setData} />} />
                    </Route>
                    <Route path="/roadmap" element={data && <Roadmap data={data} statusArray={statusArray} />}/>
                </Routes>
                </Router>
        </div>
    );
}

export default App;
