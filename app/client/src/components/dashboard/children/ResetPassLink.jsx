import * as React from 'react';
import { DashboardSkeleton } from "../skeletoncomp/DashSkeleton";
//-------------------------------------------------------------------------//
import { faLock } from '@fortawesome/free-solid-svg-icons';
//-------------------------------------------------------------------------//

class ResetPassLink extends React.Component {
    render() {
        return(
            <DashboardSkeleton 
                link={'/change-password'}
                icon={faLock}
                txt={'password reset'}
            />
        );
    }
}
export default ResetPassLink;