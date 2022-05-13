import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default function Button(props) {
  const clasName = [props.clasName]
  if (props.isPrimary)  clasName.push('btn-primary')
  if (props.isLarge)  clasName.push('btn-lg')
  if (props.isSmall)  clasName.push('btn-sm')
  if (props.isBlock)  clasName.push('btn-block')
  if (props.hasShadow)  clasName.push('btn-shadow')

  const onClick = () => {
    if (props.onClick) props.onClick()
  }
  if(props.isDisabled || props.isLoading){
    if(props.isDisabled) clasName.push('disabled')
    return ( 
      <span className={clasName.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className='spinner-border spinner-border-sm mx-5'></span>
            <span className='sr-only'>Loading...</span>
          </>
        ):(
          props.children
        )}
        </span>
      );
  }
  if(props.type === 'link') {
    if(props.isExternal) {
      return (
        <a href={props.href} className={clasName.join(' ')} style={props.style} target={props.target === "_blank" ? "noopener noreferer":undefined}>{props.children}</a>
      )
    } else {
      return (
        <Link to={props.href} className={clasName.join(' ')} style={props.style} onClick={onClick}>{props.children}</Link>
      )
    }
  }
  return (
    <button className={clasName.join(" ")} style={props.style} onClick={onClick}>{props.children}</button>
  )
}
Button.propTypes = {
  type: PropTypes.oneOf(['button', 'link']),
  onchange: PropTypes.func,
  href : PropTypes.string,
  target : PropTypes.string,
  clasName: PropTypes.string,
  isDisabled: PropTypes.bool,
  isExternal: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isBlock: PropTypes.bool,
  hasShadow: PropTypes.bool,
}
