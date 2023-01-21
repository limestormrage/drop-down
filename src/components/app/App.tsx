import React from 'react';
import { languages, languages2 } from '../../const';
import Layout from '../../layout/layout';
import DropDown from '../drop-down/drop-down';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Layout>
        <DropDown
          dropDownLabel="Язык"
          menuItems={languages}
          isMultiSelect
          isShowIcons
        />
        <DropDown
          dropDownLabel="Одиночный выбор языка без иконок"
          menuItems={languages2}
          isMultiSelect={false}
          isShowIcons={false}
        />
      </Layout>
    </div>
  );
}

export default App;
