import logo from './logu.svg';
import React, { Component } from 'react';
import './App.css';



// 1 практика


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Manvelka <code>brat</code> gazuy
//         </p>
//         <a
//           className="App-link"
//           href="https://vk.com/anakonda_jes"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           VK bratva
//         </a>
//       </header>
//     </div>
//   );
// }



// 2 практика
// const App = () => {
//   return (
//     <div className="App">
//       <ul>
//         <li>CSS</li>
//         <li>Html</li>
//         <li>Js</li>
//         <li>React</li>
//       </ul>
//       </div>
//   )
// }



// 3 практика
// import Header from './Header.js';
// class App extends React.Component {
//     render() {
//         return (
//             <div className="App">
//                 <Header />
//                 <ul>
//                     <li>CSS</li>
//                     <li>Html</li>
//                     <li>Js</li>
//                     <li>React</li>
//                 </ul>
//             </div>
//         )
//     }
// }



// 4 практика
import Tablesusi from './Tablesusi.js';
import Sushi from './Sushi.js';
import su from './aa.png';
function App() {
  return (
    <div className="Sushi">
      
      <Sushi />
      
      <br></br>
      <img src={su} className='suchiKar'></img>
      
      <Tablesusi />
    </div>
  );
}



// 5 практика

// function App(props) {
//   const App_My = [
//     { nomer: 1, name: 'Хиллари', fam: 'Клинтон' },
//     { nomer: 2, name: 'Дональд', fam: 'Трамп' }
//   ];
//   let pro = App_My.map((chel) =>
//     <li key={chel.nomer}>{chel.name} {chel.fam}</li>
//     )
//   return (
//     <div className='person'>
      
//       <h1>Сотрудники{props.nomer}</h1>
//       <ul>
//         { pro}
        
//       </ul>
//     </div>
//   );
//  }

// Самостоятелная работа

// import Sam from './Sam.js';
// import Sama from './Sama.js';
// import Samo from './Samo.js';


// function App() {
//   return (
//     <div>
//       <Sam />
//       <Sama />
//        <Samo />
//       </div>
//   );
// }

export default App;
