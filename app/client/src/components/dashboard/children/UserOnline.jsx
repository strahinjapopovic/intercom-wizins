import * as React from 'react';
import { DashboardSkeleton } from "../skeletoncomp/DashSkeleton";
//-------------------------------------------------------------------------//
import { faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
//-------------------------------------------------------------------------//

class UserOnline extends React.Component {
    render() {
        return(
            <DashboardSkeleton 
                link={'/user-online'}
                icon={faUsersViewfinder}
                txt={`who's online`}
            />
        );
    }
}
export default UserOnline;