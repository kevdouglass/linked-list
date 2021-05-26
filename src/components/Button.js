import PropTypes from 'prop-types'

/**
 * 
 * Create a Button-React-Compnonent
 */
const Button = ({text, color}) => {
    // console.log('clicked insert')
    return (
        <button className='btn' 
                    style={ {backgroundColor: color} } >{text}</button>
    )
}

// set default state for Button
Button.defaultProptypes = {
    color: 'steelblue',
}

// make 'text, color' properties (attributes) of Button-Component only be allowed to retrieve 'String' input.
Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default Button