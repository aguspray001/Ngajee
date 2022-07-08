import { Link } from "react-router-dom";

interface buttonProps {
  type: String,
  children: any,
  href?: string,
  className?: string[],
  onClick?: () => void
}
const Button = (props: buttonProps): JSX.Element => {

  const { type = '', children = '', href = '', className = [], onClick } = props;

  if (type === "external-link") {
    return (
      <a className={`btn__container ${className.join(' ')}`} href={href} target="_blank" rel='noreferrer'>
        {children}
      </a>
    )
  } else if (type === "internal-link") {
    return (
      <Link to={href} className={`btn__container ${className.join(' ')}`}>
        {children}
      </Link>
    )
  } else if (type === "icon") {
    return (
      <div onClick={onClick}>
        {children}
      </div>
    )
  } else {
    return (
      <button className={`btn__container ${className.join(' ')}`} onClick={onClick}>
        {children}
      </button>
    )
  }
}

export default Button