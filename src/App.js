import './App.css';
import { useState } from 'react';
import TabsComponent from './components/TabsComponent';
import ContentComponent from './components/ContentComponent';

//////////////////////////////////////////////////////////////////
//  ROOT APPLICATION
//////////////////////////////////////////////////////////////////

function App() {
  // //// FIELDS /////////////////////////////////////////////////
  // An Array of Tab Objects
  //    Each Tab contains a Label, Content, and isActive
  const [tabs, setTabs] = useState([
    {
      label: "Home",
      content:"This is a Home 🏡 Tab's Content",
      isActive: true
    },
    {
      label: "Work",
      content: "This is Work Related content 🏢",
      isActive: false
    },
    {
      label: "Gaming",
      content: "Let's do this. 🎮 Gaming Content",
      isActive: false
    }
  ]);


  // //// CALL BACK FUNCTION //////////////////////////////////////
  const handleTabOnClick = (targetLabel) => {

    // **** Go through all the tabs and make the tab that is being targeted become active
    setTabs( (tabs) => {
      let newTabs = [];
      // Iterate through all the tabs
      for (let i=0; i< tabs.length; i++) {
        // If this tab's label is the target label, make this tab active
        if (tabs[i].label == targetLabel) {
          newTabs.push({
            label: tabs[i].label,
            content: tabs[i].content,
            isActive: true
          });
        } 
        // Else, if this tab is not the target label, then make this tab inactive
        else {
          newTabs.push (
            {
              label: tabs[i].label,
              content: tabs[i].content,
              isActive: false
            }
          )
        }
      }
      return newTabs;
    });
  }

  // //// OUTPUT //////////////////////////////////////////////////
  return (
    <div className="App">
      {/* **** TABS COMPONENT ********************************* */}
      <TabsComponent tabs={ tabs } handleTabOnClick={ handleTabOnClick }/>
      {/* **** CONTENT COMPONENT ****************************** */}
      <ContentComponent tabs={ tabs } />
    </div>
  );
}

export default App;
