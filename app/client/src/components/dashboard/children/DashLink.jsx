import * as React from 'react';
import { DashboardSkeleton } from "../skeletoncomp/DashSkeleton";
//-------------------------------------------------------------------------//
import { faCube } from '@fortawesome/free-solid-svg-icons';
//-------------------------------------------------------------------------//

class DashLink extends React.Component {
    render() {
        return(
            <DashboardSkeleton 
                link={'/dashboard'}
                icon={faCube}
                txt={'dashboard'}
            />
        );
    }
}
export default DashLink;