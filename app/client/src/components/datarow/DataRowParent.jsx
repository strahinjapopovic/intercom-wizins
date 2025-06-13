import * as React from 'react';
function DataRowParent({ children }) {
    return (
        <>
            {React.Children.map(children, (child) => 
                <div id='data-type'>
                    {child}
                </div>
            )}
        </>
    );
}
export default DataRowParent;