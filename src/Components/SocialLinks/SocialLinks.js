import React from 'react'
import classes from './SocialLinks.module.css';

const socialLinks = (props) => {
  return (
    <ul className={classes.SocialLinks}>
      {props.links.map(link => {
        return <li key={link.id}>
          <a href={link.href} className={"icon fa " + link.icon}>
          </a>
        </li>
      })}
    </ul>
  )
}

export default socialLinks;
