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

    // **** Go through all the tabs and make the tab that is being targeted become active';
    let updatedTabs = [...tabs];
    // **** Iterate through all the tabs ********
    for (let idx=0; idx<updatedTabs.length; idx++) {
      // **** If this tab is the target tab, then  make it Active
      if (updatedTabs[idx].label === targetLabel) {
        updatedTabs[idx].isActive = true;
      } 
      // **** If this tab is NOT the target tab, then make it Not Active
      else {
        updatedTabs[idx].isActive = false;
      }
    }
    setTabs(updatedTabs);
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
