
import './App.css';
import Converuppercase from './converuppercase';
import Displayday from './Displayday';
import Displaynumber from './displaynumber';
import FormTheme from './FormTheme';
import Hobbies from './Hobbies';

function App() {

  return (
    <div className="App">
      <h2>Task 1</h2>
      <p>Create a text box that accepts only numbers and display the same using buttons</p>
      <Displaynumber/>
      <hr />
      <h2>Task 2</h2>
      <p>Create a Text area and convert the text into uppercase using button</p>
      <Converuppercase/>
      <hr />
      <h2>Task 3</h2>
      <p>Create a Dropdown list that has entries from 1 to 7, onchange of this dropdown the respective day must be printed</p>
      <Displayday/>
      <hr />
      <h2>Task 4</h2>
      <p>Create a button that converts the forms theme to dark mode/Light mode (Dark mode: Background color Black text white)</p>
      <FormTheme/>
      <hr />
      <h2>Task 5</h2>
      <p>Make 3 Checkboxes of Hobbies on submit print only selected hobbies</p>
      <Hobbies/>
    </div>
  );
}

export default App;
