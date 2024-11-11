import Torso from './components/Torso/Torso.jsx'
import Navbar from './components/Navbar/Navbar.jsx';

// here we define an App component
const App = () => {
  return (
    <div>
      {/** Here's how we make our */}
      {/** JSX component show up */}
      <h1 className="">Hello</h1>
      <Navbar />
      <Torso />
      <Torso />
    </div>
  );
};

export default App;