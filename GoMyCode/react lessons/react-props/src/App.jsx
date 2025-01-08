import "./App.css";
import Card from "./components/Card";
import img1 from "./logo192.png"
function App() {
  return (
    <div className="App">
     <Card image={img1} name="maria" prof="studient gomycode" />
     <Card image={img1} name="afaf"  prof="studient gomycode" />
     <Card image={img1} name="mouna" prof="studient gomycode" />
     <Card image={img1} name="siham" prof="studient gomycode" />
     <Card image={img1} name="ilyes" prof="studient gomycode" />
     <Card image={img1} name="omar"  prof="studient gomycode" />
     <Card/>
      

    </div>
  );
}
export default App;
