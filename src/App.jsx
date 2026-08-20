import { Aside } from "./Components/Aside";
import { Container } from "./Components/Container";
import { Main } from "./Components/Main";
import { SearchInput } from "./Components/SearchInput";


function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput placeholder="Procure seu dinheiro"/>
        <h1>Olá Rbson!</h1>
      </Main>
    </Container>
  );
}

export default App;
