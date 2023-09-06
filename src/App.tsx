import './shared/fonts.css';
import { AppRouter } from './shared/providers';
import { ReactRedaxProvide } from './shared/providers/redax';

const App = () => {
  return (
    <ReactRedaxProvide>
      <AppRouter />
    </ReactRedaxProvide>
  );
};

export default App;
