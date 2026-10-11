import NavButton from './NavButton'

// the pink bar at the top: 
// logo and store name on the left, navigation buttons on the right
function StoreHeader(props) {
    return (
    // page header contains store-brand and nav-panel
        <header className="store-header">
            {/* store-brand contains store logo and name */}
            <div className="store-brand">
                <img className="store-logo" src="src/images/barbie-logo.png" alt="Lazado logo" />
                <h1 className="store-name">Lazado</h1>
            </div>

            {/* nav-panel contains all the nav buttons */}
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

// Image Sources
    // https://i.pinimg.com/originals/be/32/c7/be32c79d60b8087dbcd2dc2cb6fb1f44.jpg
