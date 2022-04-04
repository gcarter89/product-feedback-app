import SuggestionsHeader from './_subcomponents/SuggestionsHeader';
import SuggestionsMain from './_subcomponents/SuggestionsMain';
import { commentsCompare, commentsCompareReverse, upvoteCompare, upvoteCompareReverse  } from '../../helpers/sortFunctions.js';
import { useState, useEffect } from 'react';


export default function Suggestions({data, setSelectedFeedbackDetail, setFeedbackDetailVisible, statusArray, setCardsVisible, setRoadmapVisible }) {

    const [dashboardOpen, setDashboardOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [suggestionData, setSuggestionData] = useState(data.productRequests.filter(elem => elem.status === 'suggestion'));

    
    let featureArray = ['all', 'UI', 'UX', 'enhancement', 'bug', 'feature'];
    featureArray.push(...data.productRequests.map(elem => { return elem.category }));
    featureArray = [...new Set(featureArray)];


    useEffect(() => {
        const allSuggestionData = data.productRequests.filter(elem => elem.status === 'suggestion');

        if (selectedCategory === 'all') {
            return setSuggestionData(data.productRequests.filter(elem => elem.status === 'suggestion'));
        }

        const result = allSuggestionData.filter(elem => elem.category === selectedCategory);
        
        setSuggestionData(result);

    }, [selectedCategory, data])


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

    return (
        <>
            <SuggestionsHeader dashboardOpen={dashboardOpen} setDashboardOpen={setDashboardOpen} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            <SuggestionsMain setSelectedFeedbackDetail={setSelectedFeedbackDetail} setFeedbackDetailVisible={setFeedbackDetailVisible} suggestionData={suggestionData} statusArray={statusArray} setCardsVisible={setCardsVisible} setRoadmapVisible={setRoadmapVisible} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} featureArray={featureArray} dashboardOpen={dashboardOpen} setDashboardOpen={setDashboardOpen} />
        </>
    )
}