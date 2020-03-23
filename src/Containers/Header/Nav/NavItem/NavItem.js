import React, { useContext } from 'react'
import ContentContext from '../../../../context/content-context'

const NavItem = (props) => {
  const content = useContext(ContentContext)
  const found = content.main.find(item => item.name === props.link.name)

  return (
    <div className="nav-menu-item" key={found.id} className={"http://localhost:3000/#" + found.name.replace(/ /g, "-") === document.URL ? "nav-anim" : ""} >
      <a href={"#" + found.name.replace(/ /g, "-")}>
        <span className="text">{found.name}</span>
      </a>
    </div>
  )
}


export default NavItem;
