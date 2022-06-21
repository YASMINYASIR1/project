import  { useState } from "react";
import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';

function App() {
const [name,setName] = useState("");

function warningNotification (){
	addNotification({
	title: 'Warning',
	subtitle: 'You are out of the school',
	message: 'goodbye',
	theme: 'red',
	closeButton:"X",
	})
};

function successNotification (){
	addNotification({
	title: 'Success',
	subtitle: 'You have successfully submitted',
	message: 'Welcome',
	theme: 'light',
	closeButton:"X",
	backgroundTop:"green",
	backgroundBottom:"yellowgreen",
  // colorTop: 'green',
  // colorBottom: 'darkgreen',
  // closeButton: 'Go away',
  // native: boolean,
	})
};

function handleSubmit(e){
	e.preventDefault();
	if(name === "out")
	warningNotification();
	else
	successNotification()
}

return (
	<div className="App">
	<Notifications />
	<h1>Hey there!</h1>
	<form >
		<label>Name:</label>
		<input name="name" value={name}
		onChange={(e) => setName(e.target.value)}
		/>
		<button onClick={handleSubmit}
		type="submit">Submit
		</button>
	</form>
	</div>
);
}

export default App;