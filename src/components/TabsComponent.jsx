import React from 'react'

const TabsComponent = (props) => {
    return (
        <div className='bg-white rounded'>
            <h3>Tabs Component</h3>
            <p>{ JSON.stringify(props.tabs) }</p>
            <div className="row">
                {
                    props.tabs.map(
                        (tab, idx) => {
                            return <div className="col bg-info rounded m-3" key={ idx } >
                                { tab.label }
                            </div>;
                    }
                    )
                }
            </div>
        </div>
    )
}

export default TabsComponent
