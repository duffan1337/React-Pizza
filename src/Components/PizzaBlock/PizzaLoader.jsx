import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoader = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={457}
    viewBox="0 0 280 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="546" cy="213" r="20" /> 
    <circle cx="125" cy="112" r="113" /> 
    <rect x="0" y="254" rx="0" ry="0" width="279" height="29" /> 
    <rect x="-4" y="304" rx="6" ry="6" width="306" height="98" /> 
    <rect x="3" y="408" rx="0" ry="0" width="76" height="33" /> 
    <rect x="47" y="428" rx="0" ry="0" width="1" height="0" /> 
    <rect x="157" y="408" rx="18" ry="18" width="125" height="41" />
  </ContentLoader>
)

export default PizzaLoader