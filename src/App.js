import React from 'react';
import CakeContainer from './component/cakeComponent.js'
import UserContainer from './component/usercomponent.js'
import Sagas from './component/sagacomponenet.js'
import {Provider} from 'react-redux'
import {stores} from './redux/sage/stores.js'

function App() {
  return (
    <Provider store={stores}>
    <div className="App">
      <Sagas />
    </div>
    </Provider>
  );
}

export default App;
