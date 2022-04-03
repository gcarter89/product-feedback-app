import DropdownHeader from '../../layouts/Suggestions/_subcomponents/DropdownHeader.js';
import RoadmapHeader from './_subcomponents/RoadmapHeader.js';

export default function Header({dashboardOpen, setDashboardOpen, selectedIndex, setSelectedIndex, setCardsVisible, roadmapVisible, setRoadmapVisible, selectedRoadmapStatus, setSelectedRoadmapStatus, statusArray}) {
    return (
        roadmapVisible ? <RoadmapHeader setRoadmapVisible={setRoadmapVisible} setCardsVisible={setCardsVisible} selectedRoadmapStatus={selectedRoadmapStatus} setSelectedRoadmapStatus={setSelectedRoadmapStatus} statusArray={statusArray} />  : <DropdownHeader selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} dashboardOpen={dashboardOpen} setDashboardOpen={setDashboardOpen} />
    )
}