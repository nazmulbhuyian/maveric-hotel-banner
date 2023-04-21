import Navbar from "./pages/Navbar";
import './App.css'
import Heading from "./pages/Heading";
import Banner from "./pages/Banner";

function App() {
  return (
    <div className="w-[1440px] mx-auto app">
      <Navbar></Navbar>
      <Heading></Heading>
      <Banner></Banner>
    </div>
  );
}

export default App;
