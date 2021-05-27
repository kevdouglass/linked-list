
import { useRef, useState } from 'react'
// import Node from '../datastructures/Node'
// import LinkedList from '../datastructures/LinkedList'
// import DeleteNode from './DeleteNode'




/**
 * This Allows user to 'AddNode' through input field rendered by the React-component
 */
const AddNode = ({onAdd}) => {
    // set state for each Node
    const [data, setData] = useState('')

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

    }


    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-control'>
                <label>Node</label>
                <input type='text' placeholder='Add Node'
                        value={data} onChange={(e) => setData(e.target.value)}/>
                {/* <DeleteNode    /> */}
            </div>
            {/* <input type='submit' value='Remove Node' className='btn btn-block'/> */}
            <input type='submit' value='Add Node' className='btn btn-block'/>
        </form>
    )
}

export default AddNode;