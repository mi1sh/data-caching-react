import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DataWithCachePage from './pages/DataWithCachePage';
import DataWithoutCachePage from './pages/DataWithoutCachePage';

const App: React.FC = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/withoutcache">Always Fetch</Link>
                    </li>
                    <li>
                        <Link to="/withcache/1">Cached Fetch (ID: 1)</Link>
                    </li>
                    <li>
                        <Link to="/withcache/2">Cached Fetch (ID: 2)</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/withoutcache" element={<DataWithoutCachePage />} />
                <Route path="/withcache/:id" element={<DataWithCachePage />} />
            </Routes>
        </Router>
    );
};

export default App;