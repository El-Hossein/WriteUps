import './nav_bar.scss';
import { useState } from 'react';

function NavBar() {
    const [test, setTest] = useState(0);
    
    return (
      <div>
        <p onClick={() => setTest(test === 0 ? 1 : 0)}>button</p>
        <p className={test ? 'hello' : 'test' }  >hello</p>
        {/* {test ? "med" : "test"} */}
      </div>
    );
  }
  
  export default NavBar;
  