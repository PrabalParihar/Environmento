// import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Explore from './Explore';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import "./css/style.css";
import "./css/style.scss";




function App() {
  return (
    <BrowserRouter>
      <div className="App">
       
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/explore' element={<Explore />} />
          
        </Routes>
        {/* component={Card} */}
      </div>
    </BrowserRouter>
    
  )
}

// <div>
//       {/* <Homepage /> */}
//       <Explore/>
//     </div>


//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>


//         <a className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//         <a className="btn btn-primary"
//           data-bs-toggle="collapse"
//           href="#collapseExample"
//           role="button"
//           aria-expanded="false"
//           aria-controls="collapseExample">
//           Bootstrap button
//         </a>
//       </header>
//     </div>
//   );
// }
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

export default App;
