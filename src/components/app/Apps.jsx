import Battlefield2 from "../global/battlefield copy/test";
import NavBar from "../global/navBar/NavBar";
import mc from "./app.module.scss";

const App = () => {
  return (
    <div className={mc.container}>
      <NavBar />
      <Battlefield2 />
    </div>
  );
};
export default App;
