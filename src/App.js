
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import { Router } from 'react-router-dom';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar'


const App =()=> {

  const pageSize = 9;

 
const [progress, setProgress] = useState(0)

  

    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
        
      />
          <Switch>
            <Route exact path="/"> <News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general" /> </Route>
            <Route exact path="/business"> <News setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business" /> </Route>
            <Route exact path="/entertainment"> <News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment" /> </Route>
            <Route exact path="/general"> <News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general" /> </Route>
            <Route exact path="/health"> <News setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health" /> </Route>
            <Route exact path="/science"><News setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science" /> </Route>
            <Route exact path="/sports"> <News setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports" /> </Route>
            <Route exact path="/technology"> <News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology" /> </Route>
          </Switch>

        </Router>

      </>
    )
  }

  export default App ;
{/* <Router> */ }
{/* <Navbar /> */ }
{/* <News setProgress={setProgress}  pageSize={pageSize} country="in" category="/general"/> */ }
{/* <Switch>
            <Route path="/about" component={<News setProgress={setProgress}  pageSize={pageSize} country="in" category="/general" />} />
            <Route path="/business" component={<News setProgress={setProgress}  pageSize={pageSize} country="in" category="/business" />} />

            <Route path="/entertainment" component={<News setProgress={setProgress}  pageSize={pageSize} country="in" category="/entertainment" />} />
            <Route path="/general" component={<News setProgress={setProgress}  pageSize={pageSize} country="in" category="/general" />} />
            <Route path="/health" component={<News setProgress={setProgress}  pageSize={pageSize} country="in" category="/health" />} />
            <Route path="/science" component={<News setProgress={setProgress}  pageSize={pageSize} country="in" category="/science" />} />
            <Route path="/sports" component={<News setProgress={setProgress}  pageSize={pageSize} country="in" category="/sports" />} />
            <Route path="/technology" component={<News setProgress={setProgress}  pageSize={pageSize} country="in" category="/technology" />} />

          </Switch> */}
{/* </Router> */ }


// NewsApi Key
// Your API key is: 0276bd8c64f04326beecde6813d3a6a3

