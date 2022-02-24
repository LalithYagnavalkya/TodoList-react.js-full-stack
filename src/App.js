import styledComponents from 'styled-components';
import './App.css';
import { Item } from './components/Item';


function App() {
  return (
    <div className="App">
     <h1> Todo List</h1>
     <Wrapper>

     <Item />
     </Wrapper>
    </div>
  );
}

const Wrapper = styledComponents.div`
display: flex;
width: auto;
background-color: black;
align-items: center;

`
export default App;

