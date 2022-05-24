import Chart from './Components/Chart';
import CreateAccount from './Components/CreateAccount';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  const data = [];
  for(var i=0; i<20; i++){
  const x =  {year:Math.floor(Math.random() * (2022 - 1980 + 1) + 1980), efficiency: Math.random() * (20 - 30 + 1) + 20, sales: Math.floor((Math.random() * 2000000) + 1)}
    data.push(x);
  }
  console.log(data)
  
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route exact 
        path="/" 
        element={<CreateAccount/>}
      /> 
      <Route 
        path="/chart" 
        element={<Chart data={data}/>}
      /> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
