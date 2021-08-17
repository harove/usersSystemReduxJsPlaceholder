import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {createUserThunk} from '../../store/users/thunks'

function UserCreate() {
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()

    const handlerSubmit = (e)=>{
        e.preventDefault()
        dispatch(createUserThunk({id:new Date().getTime(), name:name}))
        history.push("/")
    }

    return (
        <div>
            <form onSubmit={e=>handlerSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input id="name" className="form-control" type="text" value={name} onChange={e=>setName(e.target.value)} />    
                <button>Send</button>
            </form>        
        </div>
    )
}

export default UserCreate
