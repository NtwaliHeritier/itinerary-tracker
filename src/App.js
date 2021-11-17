import './App.css';
import React, {useState} from 'react';
import Footer from './components/footer';
import About from './components/about';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Itinerary from './components/itinerary';
import Home from './components/home';
import Navbar from './components/navbar';

export const Context = React.createContext();

function App() {
  const itinerary = [
    {
      name: "Read React documentation",
      time: "Sun at 10 am"
    },
    {
      name: "Do laundry",
      time: "Sun at 10 am"
    },
    {
      name: "Go to the gym",
      time: "Sun at 10 am"
    }
  ]

  const [content, setContent] = useState(itinerary)

  const deleteProgram = (name) => {
    const state = content.filter(c => c.name !== name)
    setContent(state)
  }

  const saveItinerary = (state) => {
    setContent([state, ...content])
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Context.Provider value={content}>
          <Switch>
              <Route path="/itinerary" component={() => <Itinerary saveItinerary={saveItinerary}/>}/>
              <Route path="/about" component={About}/>
              <Route path="/" component={() => <Home deleteProgram = {deleteProgram}/>}/>
          </Switch>
          <Footer/>
        </Context.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
