// Component
const Link  = require('./Components/Link') 
const Nav  = require('./Components/Nav')
const Dropdown  = require('./Components/Dropdown')

this['Link'] = Link.default
this['Nav'] = Nav.default
this['Dropdown'] = Dropdown.default

this["render"] = function render(id, elem, props = null,children = null){
    ReactDOM.render( React.createElement(elem,props,children) , document.getElementById(id)) 
}