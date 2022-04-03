import RoadmapHeader from "./_subcomponents/RoadmapHeader.js";
import RoadmapMain from "./_subcomponents/RoadmapMain.js";

export default function Roadmap({roadmapData, setRoadmapVisible, selectedRoadmapStatus, setSelectedRoadmapStatus, setCardsVisible, statusArray}) {
    return (
        <>
            <RoadmapHeader setRoadmapVisible={setRoadmapVisible} selectedRoadmapStatus={selectedRoadmapStatus} setSelectedRoadmapStatus={setSelectedRoadmapStatus} setCardsVisible={setCardsVisible} statusArray={statusArray} />
            <RoadmapMain selectedRoadmapStatus={selectedRoadmapStatus} roadmapData={roadmapData} />
        </>
    )
}