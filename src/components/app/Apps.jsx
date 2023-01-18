import Battlefield from "../global/battlefield/Battlefield";
import NavBar from "../global/navBar/NavBar";
import mc from "./app.module.scss";

const App = () => {
  return (
    <div className={mc.container}>
      <NavBar />
      <Battlefield />
    </div>
  );
};
export default App;
