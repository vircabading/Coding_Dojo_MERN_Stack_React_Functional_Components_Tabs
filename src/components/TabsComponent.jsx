import React from 'react'

const TabsComponent = (props) => {
    return (
        <div className='mb-3'>
            <h3>Tabs:</h3>
            <div className="row">
                {
                    props.tabs.map(
                        (tab, idx) => {
                            if (tab.isActive) {
                                return <div className="col bg-primary rounded m-3 p-2" key={ idx } >
                                    <strong>{tab.label}</strong>
                                </div>;
                            } else {
                                return <div className="col bg-secondary rounded m-3 p-2" key={ idx } >
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
