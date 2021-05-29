
import { useRef, useState, useEffect } from 'react'
// import Node from '../datastructures/Node'
// import LinkedList from '../datastructures/LinkedList'
// import DeleteNode from './DeleteNode'



/**
 * This Allows user to 'AddNode' through input field rendered by the React-component
 */
const AddNode = ({onAdd}) => {


    // set state for each Node
    const [data, setData] = useState('')
    // const [prev, setPreviousData] = useState('')
    // const prevState = useRef('')
    const inputRef = useRef()

    const focus = () => {
        //  console.log("inputRef:  ",inputRef.current)
        inputRef.current.focus();

    }

    // useEffect(() => { // to keep track of cur and prev-State
    //     console.log("prevState.current (Before):  ",prevState.current)
    //     prevState.current = data;

    // }, [data])

    const onSubmit = (e) => {
        e.preventDefault();
        if(!data){
            // alert('Please insert Node->data')
            return;
        }
        if(data !== null){
            onAdd({data})

        }
            // onAdd({data, next})

        setData('')
        // setPreviousData(prev)

    }


    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-control'>
                <label>Node</label>
                <input ref={inputRef} type='text' placeholder='Add Node'
                        value={data} onChange={(e) => setData(e.target.value)}/>
                       
                {/* <div> Tail: {prev}</div> */}
            </div>
            {/* <input type='submit' value='Remove Node' className='btn btn-block'/> */}
            <input type='submit' onClick={focus} value='Add Node' className='btn btn-block'/>
            {/* <button type='sumbit' onSubmit={(e) => setPreviousData(e.target.value)} onClick={focus} value='Add Node' className='btn btn-block'/> */}
        </form>
    )
}

export default AddNode;