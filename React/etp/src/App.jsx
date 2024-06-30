import "./App.css";


import React, { useState } from 'react';
import Navbar from './components/Navbar';

const App = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <Navbar activeLink={activeLink} handleNavLinkClick={handleNavLinkClick} />
      <div className="content">
        <h1>{activeLink}</h1>
        <p>This is the content for {activeLink}.</p>
      </div>
    </div>
  );
}

export default App;


// const App = () => {
//     const [home, setHome] = useState(true);
//     const [issue, setIssue] = useState(false);
//     const [books, setBooks] = useState(false);
//     const [profile, setProfile] = useState(false);

//     const handlClick = (p) => {
//         setHome(false);
//         setBooks(false);
//         setIssue(false);
//         setProfile(false);
//     }
// 	return (
// 		<>
//             <div className='navbar'>
//                 <ul className='navlist'>
//                     <li className='navitem' onClick={handlClick('Home')}>Home</li>
//                     <li className='navitem' onClick={handlClick('Books')}>Books</li>
//                     <li className='navitem' onClick={handlClick('Issue')}>Issue Books</li>
//                     <li className='navitem' onClick={handlClick('Profile')}>Profile</li>
//                 </ul>
//             </div>
//             <div className="content">
//                 {home && <Home />}
//                 {books && <Books />}
//                 {issue && <Issue />}
//                 {profile && <Profile />}
//             </div>
//         </>
// 	);
// };

// export default App;
