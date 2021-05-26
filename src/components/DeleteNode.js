import { useRef, useState } from 'react'

const DeleteNode = ({node, id}) => {

    const [data, setData] = useState('')

    const onSubmit = (e) => {

        console.log('Clicked Remove Node Button in "DeleteNode-Compnonent."')
    }



    return (
        <input type='text' placeholder='Remove Node' 
                        value={data} onChange={(e) => setData(e.target.value)}/>
    )
}

export default DeleteNode;