import './App.css'
import { SplitScreen } from './components/split-screen'
import { RightComponent } from './components/right-component'
import { LeftComponent } from './components/left-component'

function App() {
  return (
    <>
      <SplitScreen Left={LeftComponent} Right={RightComponent} rightWidth={500} leftWidth={500} /> 
    </>
  );
}

export default App
