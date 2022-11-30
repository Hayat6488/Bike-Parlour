import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Components/Routes/PublicRoutes/Routes';

function App() {
  return (
    <div className="App bg-base-200">
            <RouterProvider router={router}></RouterProvider>
            <Toaster></Toaster>
    </div>
  );
}

export default App;
