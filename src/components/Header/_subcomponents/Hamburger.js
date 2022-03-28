import {ReactComponent as Open } from '../../../assets/shared/mobile/icon-hamburger.svg';
import {ReactComponent as Close } from '../../../assets/shared/mobile/icon-close.svg';

export default function Hamburger({dashboardOpen, setDashboardOpen}) {

    function handleClick(event) {
        event.preventDefault();
        setDashboardOpen(!dashboardOpen);
    }

    return (
        <>
            {!dashboardOpen && <Open onClick={(e) => handleClick(e)} />}
            {dashboardOpen && <Close onClick={(e) => handleClick(e)} />}
        </>
    )
}