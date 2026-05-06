import * as React from 'react';
import { DashboardSkeleton } from "../skeletoncomp/DashSkeleton";
//-------------------------------------------------------------------------//
import { faUser } from '@fortawesome/free-solid-svg-icons';
//-------------------------------------------------------------------------//

class DetailsLink extends React.Component {
    render() {
        return(
            <DashboardSkeleton 
                link={'/account-details'}
                icon={faUser}
                txt={'account details'}
            />
        );
    }
}
export default DetailsLink;