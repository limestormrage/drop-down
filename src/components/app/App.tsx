import React from 'react';
import { languages } from '../../const';
import Layout from '../../layout/layout';
import DropDown from '../drop-down/drop-down';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Layout>
        <DropDown
          label="Язык"
          MenuItems={languages}
        />
      </Layout>
    </div>
  );
}

export default App;
