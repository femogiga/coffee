import Collect from './components/Collect';
import Container from './components/Container';
import Content from './components/Content';
import CoffeeProvider from './context/CoffeeProvider';

function App() {
  return (
    <CoffeeProvider>
      <Container>
        <Content />
        <Collect />
      </Container>
    </CoffeeProvider>
  );
}

export default App;
