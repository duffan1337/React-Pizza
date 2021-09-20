import React from "react";
import { Route } from "react-router";
import {Header, } from "./Components";
import {Home, Card} from "./pages";
import axios from "axios";
import {connect} from 'react-redux'

import {setPizzas} from "./redux/actions/pizzas"
import PropTypes from 'prop-types'
// const App=()=>{

//   React.useEffect(()=>{
//     axios.get('http://localhost:3000/db.json').then(({data})=>{
//        setPizzas(data.pizzas)
//     })

//   },[])

//     return(
//         <div className="wrapper">
//         <Header/>
//         <div className="content">
//         <Route exact path="/" render={ ()=> <Home items={pizzas} /> } />
//         <Route exact path="/card" component={Card} />
//         </div>
//       </div>
//     )
// }

class App extends React.Component{
componentDidMount(){
  axios.get('http://localhost:3000/db.json').then(({data})=>{
      this.props.setPizzas(data.pizzas);
 })
}

  render(){
    return(
      <div className="wrapper">
      <Header/>
      <div className="content">
      <Route exact path="/" render={ ()=> <Home items={this.props.items} /> } />
      <Route exact path="/card" component={Card} />
      </div>
    </div>
    )
  }
}

const mapStateToProps=state=>{
  return{
    items:state.pizzas.items,
    filters:state.filters,
  }
}

const mapDispatchToProps={
    setPizzas,
}

export default connect(mapStateToProps,mapDispatchToProps)(App)