import SuggestionsHeader from './_subcomponents/SuggestionsHeader';
import SuggestionsMain from './_subcomponents/SuggestionsMain';


export default function Suggestions({setSelectedFeedbackDetail, setFeedbackDetailVisible, suggestionData, statusArray, setCardsVisible, setRoadmapVisible, setSelectedCategory, selectedCategory, featureArray, dashboardOpen, setDashboardOpen, selectedIndex, setSelectedIndex}) {
    return (
        <>
            <SuggestionsHeader dashboardOpen={dashboardOpen} setDashboardOpen={setDashboardOpen} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            <SuggestionsMain setSelectedFeedbackDetail={setSelectedFeedbackDetail} setFeedbackDetailVisible={setFeedbackDetailVisible} suggestionData={suggestionData} statusArray={statusArray} setCardsVisible={setCardsVisible} setRoadmapVisible={setRoadmapVisible} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} featureArray={featureArray} dashboardOpen={dashboardOpen} setDashboardOpen={setDashboardOpen} />
        </>
    )
}