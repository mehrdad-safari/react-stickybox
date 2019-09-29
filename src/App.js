import React from 'react';
import StickyBox from './components/stickyBox/StickyBox'
function App() {
  return (
   
         <StickyBox closeBtn="show" textColor="#000" position="top-right" width="450px" header={{ title:'Hello World This is StickyBox!!', bgColor:'#FF704D', textColor:'#fff' }} bgColor="#f5f5f5" >
         <p>The goal of react-stickyBox is make it easier for developers to build UIs that have sticky elements. Some examples include a sticky navbar, or dialog , fixed footer and etc.</p>
         <a href="#" >Learn More</a>
         </StickyBox>
     
  );
}

export default App;
