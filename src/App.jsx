import './App.css';
// I'll import here the bootstrap css file, but really you can import it in any component
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Home from './components/Home';
import Booking from './components/Booking';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound';
import MyLayout from './components/MyLayout';
import Menu from './components/Menu';
import Details from './components/Details';

// in this case App is the parent component, and MyNavbar is a child
// you can pass props from a parent to a child

// typically the routing system will start from your main component, in our case App.jsx
// here we're going to load some react-router-dom components and we're just going to set some rules:
// what to load, and on which path

// BrowserRouter is the main component from the library, will enable the routing features to its children
// just wrap everything into it
// Routes must be placed inside BrowserRouter; Routes will try to match the path of its inner elements
// with the browser URL and load one Route at a time
// Route defines a single route: you have to specify the element to load, and on which URL

function App() {
  return (
    <BrowserRouter>
      {/* BrowserRouter, Routes and Route does not provide any visual difference */}
      <div className="App">
        <MyNavbar payoff="We can serve only pasta!" links={['menu', 'booking', 'contact', 'roberta']} />
        <Routes>
          {/* these pieces of content now are going to be loaded DINAMYCALLY */}
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          {/* the section below is using MyLayout for framing the Booking component, */}
          {/* injecting it in the middle of a Navbar and a footer */}
          {/* <Route path="/booking" element={
            <MyLayout>
              <Booking />
            </MyLayout>
          } /> */}
          {/* path is the URL you're loading your components in */}
          {/* and element is the JSX structure you want to load on that path */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/details/:pastaId" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
