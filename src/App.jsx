import { Aside } from "./Components/Aside";
import { Container } from "./Components/Container";
import { Main } from "./Components/Main";
import { SearchInput } from "./Components/SearchInput";
import { Typography } from "./Components/Typography";
import Card from "./Components/Card";
import { DailyBudget } from "./Components/DailyBudget";
import { SavingsStatus } from "./Components/SavingsStatus";

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
        <section>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              <DailyBudget value={250}/>
            </Card.Body>
          </Card>
           <Card>
            <Card.Header>
              Progresso da meta financeira
            </Card.Header>
            <Card.Body>
              <SavingsStatus percent={40}/>
            </Card.Body>
          </Card>
           <Card>
            <Card.Header>
              Movimentação financeira
            </Card.Header>
            <Card.Body>
              R$200
            </Card.Body>
          </Card>
           <Card>
            <Card.Header>
              Minhas contas
            </Card.Header>
            <Card.Body>
              R$200
            </Card.Body>
          </Card>
        </section>
      </Main>
    </Container>
  );
}

export default App;
