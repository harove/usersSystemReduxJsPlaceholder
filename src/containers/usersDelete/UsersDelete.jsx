import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserThunk } from "../../store/users/thunks";

function UsersDelete() {
  const { id } = useParams();
  const users = useSelector((state) => state.users.data);
  const [name, setName] = useState("");
  const dispatch = useDispatch()
  const history = useHistory()


  useEffect(() => {
    const user = users.find((user) => user.id === parseInt(id));
    setName(user.name);
  },[]);


  const handlerDelete = ()=>{
    dispatch(deleteUserThunk(id))
    history.push('/')
  }

  return (
    <div className="row">
      <div className="col-3">seguro deseas eliminar a: {name}</div>
      <div className="col-3"> <button onClick={e=>handlerDelete()} className="btn btn-danger">Delete</button> </div>
    </div>
  );
}

export default UsersDelete;
