import './App.css';
import Timer from './Timer';
import Counter from './Counter';
import ProfileViewer from './ProfileViewer';

function App() {
  return (
    <div className="App">
      <Timer/>
      <Counter/>
      <ProfileViewer profileName="jaklarsen" color="teal"/>
      {/* <ProfileViewer profileName="elie" color="teal"/> */}
    </div>
  );
}

export default App;
