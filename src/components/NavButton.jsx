// one navigation button (icon and name), reused for every button in the navigation panel
function NavButton(props) {
  return (
    <a className="nav-button" href={props.url}>
      <img className="nav-icon" src={props.icon} alt={props.name + ' icon'} />
      {props.name}
    </a>
  )
}

export default NavButton