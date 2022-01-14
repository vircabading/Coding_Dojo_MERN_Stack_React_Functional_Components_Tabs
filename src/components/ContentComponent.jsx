import React from 'react'

const ContentComponent = (props) => {
    return (
        <div className='bg-white border border-primary rounded'>
            <h3>Content Component</h3>
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
