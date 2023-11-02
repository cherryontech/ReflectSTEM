// LIBRARY IMPORTS
import React, { useState, useRef } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

// LOCAL IMPORTS
import { bioData } from './assets/bioData.js';
import { Home, Layout, ProfessionalsPage } from './views';

function App() {
  // SET STATES
  const [data, setData] = useState(bioData);

  // SET REFERENCES
  const fullDataSetRef = useRef(bioData);

  return (

    console.log(data)
    <Router>

      <Routes>
        <Route
          path="/"
          element={<Layout />}
          >
          <Route
						index
						element={
              <Home />
						}
            />
          <Route
						path="/professionals"
						element={<ProfessionalsPage data={data} setData={setData} fullDataSet={fullDataSetRef.current} />}
            />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
