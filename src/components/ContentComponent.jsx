import React from 'react'

const ContentComponent = (props) => {
    return (
        <div className='bg-white border border-primary rounded p-2'>
            <h3 className='mb-2'>Content:</h3>
            <div>
                {
                    props.tabs.map(
                        (tab, idx) => {
                            if (tab.isActive) {
                                return <div>{ tab.content }</div>
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
