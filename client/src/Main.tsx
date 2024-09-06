import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { CvApp } from './CvApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <CvApp />
    </BrowserRouter>
)