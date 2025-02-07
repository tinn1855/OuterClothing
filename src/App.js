import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import "@fontsource/roboto"; // Import font Roboto mặc định
import "@fontsource/roboto/300.css"; // Import font với trọng số 300 (Light)
import "@fontsource/roboto/400.css"; // Normal
import "@fontsource/roboto/500.css"; // Medium
import "@fontsource/roboto/700.css"; // Bold


function App() {
  

  return (
      <BrowserRouter>
          <div className='App'>
            <Routes>
              
                { publicRoutes.map((route, index) => {
                    const Page = route.component
                    return <Route key={index} path={route.path} element={<Page/>}/>
                })}
            </Routes>
          </div>
      </BrowserRouter>
    
  );
}

export default App;
