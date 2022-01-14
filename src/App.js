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
  const handleTabOnClick = () => {
    
  }

  // //// OUTPUT //////////////////////////////////////////////////
  return (
    <div className="App">
      {/* **** TABS COMPONENT ********************************* */}
      <TabsComponent tabs={ tabs } />
      {/* **** CONTENT COMPONENT ****************************** */}
      <ContentComponent tabs={ tabs } />
    </div>
  );
}

export default App;
