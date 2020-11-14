import React, {component} from 'react';
import UserContainer from './components/Users/UsersContainer';
import {Route, BrowserRouter} from 'react-router-dom';

const App=(props)=> {

  return (
      <div>
        <Route path='/' render={
				  ()=><UserContainer/>
			}/>
      </div>
  );
}

export default App;
