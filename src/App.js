import './App.css';
import LivingRoom from './LivingRoom';
import Bath from './Bath';
import Kitchen from './Kitchen';
import BedRoom from './Bedroom';

function App() {
  return (
    <div id='FloorPlan'>
      <LivingRoom />
      <Bath size='Full' />
      <Bath size='Half' />
      <Kitchen />
      <BedRoom bedNum={1} />
      <BedRoom bedNum={2} />
      <BedRoom bedNum={3} />
    </div>
  );
}

export default App;
