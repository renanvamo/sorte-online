import StoreProvider from './context/StoreProvider';
import Router from './Routes'

function App() {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
}

export default App;
