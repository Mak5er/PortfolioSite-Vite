import {StrictMode} from 'react'
import './index.css'
import App from './App'

(async () => {
    const { createRoot } = await import('react-dom/client');
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
})();
