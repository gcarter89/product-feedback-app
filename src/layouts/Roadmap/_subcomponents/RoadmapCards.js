import RoadmapCard from "./RoadmapCard.js";

export default function RoadmapCards({roadmapData, data, setData}) {

    const children = roadmapData.map((elem, index) => {
        return (
            <RoadmapCard key={index + elem.status} data={data} setData={setData} id={elem.id} cardData={elem} />
        )
    })

    return (
        children
    )
}