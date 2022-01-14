import React from 'react'

/////////////////////////////////////////////////////////////////////
//  CONTENT COMPONENT
/////////////////////////////////////////////////////////////////////

const ContentComponent = (props) => {
    return (
        <div className='bg-white border border-primary rounded p-2'>
            <h3 className='mb-2'>Content:</h3>
            <div>
                {
                    // **** Iterate through each tab and display its content if it is Active ********
                    props.tabs.map(
                        (tab, idx) => {
                            if (tab.isActive) {
                                return <div key={ idx }>{ tab.content }</div>
                            }
                            return;
                        }
                    )
                }
            </div>
        </div>
    )
}

export default ContentComponent
