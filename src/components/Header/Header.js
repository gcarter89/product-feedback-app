import DropdownHeader from './_subcomponents/DropdownHeader.js';
import RoadmapHeader from './_subcomponents/RoadmapHeader.js';

export default function Header({dashboardOpen, setDashboardOpen, selectedIndex, setSelectedIndex, roadmapVisible, setRoadmapVisible, selectedRoadmapStatus, setSelectedRoadmapStatus}) {
    return (
        roadmapVisible ? <RoadmapHeader setRoadmapVisible={setRoadmapVisible} selectedRoadmapStatus={selectedRoadmapStatus} setSelectedRoadmapStatus={setSelectedRoadmapStatus} />  : <DropdownHeader selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} dashboardOpen={dashboardOpen} setDashboardOpen={setDashboardOpen} />
    )
}