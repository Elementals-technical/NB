import { useEffect } from 'react';
import './shared/fonts.css';
import { AppRouter } from './shared/function/providers';
import { ReactRedaxProvide } from './shared/function/providers/redax';
import { getTrueVh } from './shared/function/getTrueVh';

const App = () => {
  useEffect(() => {
    getTrueVh();
  }, []);
  return (
    <ReactRedaxProvide>
      <AppRouter />
    </ReactRedaxProvide>
  );
};

export default App;
