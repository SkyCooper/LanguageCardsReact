import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Icon from "./components/icon/Icon";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Icon />
      <Header />
      <div className="card-wrapper">
        <Card />
      </div>
    </div>
  );
};

export default App;
