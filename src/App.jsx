import logo from "./assets/logo.svg";
import { Container } from "./Components/Container";

function App() {
  return (
    <Container>
      <aside>
        <img src={logo} alt="" />
      </aside>
      <h1>Poupapp</h1>
    </Container>
  );
}

export default App;
