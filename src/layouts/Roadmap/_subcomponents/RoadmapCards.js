import RoadmapCard from "./RoadmapCard.js";

export default function RoadmapCards({roadmapData}) {

    const children = roadmapData.map((elem, index) => {
        return (
            <RoadmapCard key={index} cardData={elem} />
        )
    })

    return (
        children
    )
}