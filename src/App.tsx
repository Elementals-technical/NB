import './shared/fonts.css';
import { AppRouter } from './shared/function/providers';
import { ReactRedaxProvide } from './shared/function/providers/redax';

const App = () => {
  return (
    <ReactRedaxProvide>
      <AppRouter />
    </ReactRedaxProvide>
  );
};

export default App;
