import * as React from 'react';
import { DashboardSkeleton } from "../skeletoncomp/DashSkeleton";
//-------------------------------------------------------------------------//
import { faDownload } from '@fortawesome/free-solid-svg-icons';
//-------------------------------------------------------------------------//

class DownloadLink extends React.Component {
    render() {
        return(
            <DashboardSkeleton 
                link={'/download'}
                icon={faDownload}
                txt={'download'}
            />
        );
    }
}
export default DownloadLink;