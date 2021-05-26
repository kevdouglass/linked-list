import Button from './Button'

/**
 * This creates a Header-React-component
 */
const Header = ({ title }) => {
    
    return (
        <header className='header'>
            <h1>{title} </h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Datastructor Visualizor',
}

export default Header