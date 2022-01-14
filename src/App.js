import './App.css';
import { useState } from 'react';
import TabsComponent from './components/TabsComponent';

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
      content:"This is a Home 🏡 Tab's Content"
    },
    {
      label: "Work",
      content: "This is Work Related content 🏢"
    },
    {
      label: "Gaming",
      content: "Let's do this. 🎮 Gaming Content"
    }
  ]);


  // //// CALL BACK FUNCTION //////////////////////////////////////
  const handleTabOnClick = () => {
    
  }

  // //// OUTPUT /////////////////////////////////////////////////
  return (
    <div className="App">
      <TabsComponent />
    </div>
  );
}

export default App;
