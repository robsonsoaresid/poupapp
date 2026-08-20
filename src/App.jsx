import { Aside } from "./Components/Aside";
import { Container } from "./Components/Container";
import { Main } from "./Components/Main";
import { SearchInput } from "./Components/SearchInput";
import { Typography } from "./Components/Typography";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <div>
        <Typography variant="h1">
          Olá, Vinny!
        </Typography>
        <Typography variant="body">
          Veja como estão suas finanças hoje.
        </Typography>
        </div>
      </Main>
    </Container>
  );
}

export default App;
