import React from 'react'

/////////////////////////////////////////////////////////////////////
//  TABS COMPONENT
/////////////////////////////////////////////////////////////////////

const TabsComponent = (props) => {

    const handleClick = (label) => {
        console.log("In Handle Click", label);
        props.handleTabOnClick(label);
    }

    return (
        <div className='mb-3'>
            <h3>Tabs:</h3>
            <div className="row">
                {
                    // **** Iterate through each tab and display them as columns ********
                    props.tabs.map(
                        (tab, idx) => {
                            // **** If this tab is Active, make it color blue ********
                            if (tab.isActive) {
                                return <div className="col bg-primary rounded m-3 p-2" key={ idx } 
                                            onClick={ (e) => handleClick(tab.label) } >
                                    <strong>{tab.label}</strong>
                                </div>;
                            } 
                            // **** Else, if this tab is Not Acctive, grey it out
                            else {
                                return <div className="col bg-secondary rounded m-3 p-2" key={ idx }
                                            onClick={ (e) => handleClick(tab.label) } >
                                    <strong>{tab.label}</strong>
                                </div>;
                            }
                        }
                    )
                }
            </div>
        </div>
    )
}

export default TabsComponent