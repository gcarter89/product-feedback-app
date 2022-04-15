import RoadmapHeader from "./_subcomponents/RoadmapHeader.js";
import RoadmapMain from "./_subcomponents/RoadmapMain.js";
import { useState, useEffect } from "react";

export default function Roadmap({data, setData, statusArray}) {

    const [roadmapData, setRoadmapData] = useState(data.productRequests.filter(elem => elem.status === 'in-progress'));
    const [selectedRoadmapStatus, setSelectedRoadmapStatus] = useState(statusArray[1]);


    useEffect(() => {
        setRoadmapData(data.productRequests.filter(elem => elem.status === selectedRoadmapStatus[0].toLowerCase()));
    }, [selectedRoadmapStatus, data])

    return (
        <>
            <RoadmapHeader selectedRoadmapStatus={selectedRoadmapStatus} setSelectedRoadmapStatus={setSelectedRoadmapStatus} statusArray={statusArray} />
            <RoadmapMain selectedRoadmapStatus={selectedRoadmapStatus} roadmapData={roadmapData} data={data} setData={setData} />
        </>
    )
}