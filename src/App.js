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
  //    Each Tab contains a Label and Content
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
    console.log("*** In Handle Click in App JS *****");
    console.log("target label:", targetLabel);
    setTabs( (tabs) => {
      let newTabs = [];
      for (let i=0; i< tabs.length; i++) {
        console.log("In for loop | label", tabs[i].label, " | target label:", targetLabel);
        if (tabs[i].label == targetLabel) {
          newTabs.push({
            label: tabs[i].label,
            content: tabs[i].content,
            isActive: true
          });
        } else {
          newTabs.push (
            {
              label: tabs[i].label,
              content: tabs[i].content,
              isActive: false
            }
          ) 
        }
      }
      console.log("newTabs:", JSON.stringify(newTabs));
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
