
import './App.css';
import { Routes, Route, Link, NavLink } from "react-router-dom";

const Page = ({ content }) => {
  return (
    <div>
      {content}
    </div>
  )
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/"> Anasayfa  </Link>
        <Link to="/contact"> Siber  </Link>
        <Link to="/blog"> Elektronik  </Link>

      </nav>

      <Routes>

        <Route path="/" element={<Page content={"a"} />} />
        <Route path="/contact" element={<Page content={"b"} />} />
        <Route path="/blog" element={<Page content={"c"} />} />

      </Routes>
    </div>
  );
}

export default App;
