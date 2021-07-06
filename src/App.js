import './App.css';
import Map from './components/Map';
import Legend from './components/Legend';

function App() {
  return (
      <div id="mapid">
          <div className='container'>
              <Map/>
              <Legend/>
          </div>
      </div>
  );
}

export default App;
