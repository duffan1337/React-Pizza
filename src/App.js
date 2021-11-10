import React from "react";
import { Route } from "react-router";
import {Header } from "./Components";
import {Home, Card} from "./pages";
 
import PropTypes from 'prop-types'

const App=(props)=>{

    return(
      <div className="wrapper">
      <Header/>
      <div className="content">
      <Route exact path="/" component={Home} />
      <Route exact path="/card" component={Card} />
      </div>
    </div>
    )
}

export default App;

// const mapStateToProps=state=>{
//   return{
//     items:state.pizzas.items,
//     filters:state.filters,
//   }
// }

// const mapDispatchToProps={
//     setPizzas,
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App)