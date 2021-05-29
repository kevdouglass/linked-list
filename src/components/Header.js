import Button from './Button'
import * as d3 from 'd3'
import {useRef} from 'react'
import { color } from 'd3'

/**
 * This creates a Header-React-component
 */
const Header = ({ title }) => {
    
    const d3Ref = useRef()
    // console.log("d3.select  ",d3.select('h1'))
    // let header1 = d3.select('h1')
    //                 .style('color', 'red')
    //                 .attr('class', 'heading1')
    //                 .text('update H1 tag')
    
    return (
        // <header className='header'>
            <h1 ref={d3Ref}> {title} </h1>
        // </header>
    )
}

Header.defaultProps = {
    title: 'Datastructor Visualizor',
}

export default Header