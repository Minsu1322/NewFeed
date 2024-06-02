import { router } from '@/routes';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { store } from './redux/store';

const Globalstyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <Globalstyle />
      <Provider store={store}>
        <RouterProvider router={router} />
        <h1>Hello, Team IKUZO!</h1>
      </Provider>
    </>
  );
}

export default App;
