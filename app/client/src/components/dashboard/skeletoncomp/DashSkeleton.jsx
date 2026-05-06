import { Link } from 'react-router-dom';
//-------------------------------------------------------------------------//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//-------------------------------------------------------------------------//
export const DashboardSkeleton = ({ link, icon, txt }) => {
    return (
        <div id='profileSection'>
            <div id='innerWindow'>
                <Link to={link}>
                    <FontAwesomeIcon id='profileFontAwesome' icon={icon} />
                </Link>
                <br />
                <Link to={link}>{txt}</Link>
            </div>
        </div>
    );
}