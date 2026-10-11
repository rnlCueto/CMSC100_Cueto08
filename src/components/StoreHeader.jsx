import NavButton from './NavButton'

// the gold bar at the top: logo and store name on the left, navigation buttons on the right
function StoreHeader(props) {
  return (
    <header className="store-header">
      <div className="store-brand">
        <img className="store-logo" src="images/store-logo.svg" alt="Lazado logo" />
        <h1 className="store-name">Lazado</h1>
      </div>

      <nav className="navigation-panel">
        {
          props.buttons.map((button) => {
            return <NavButton key={button.id} name={button.name} url={button.url} icon={button.icon} />
          })
        }
      </nav>
    </header>
  )
}

export default StoreHeader