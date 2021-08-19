import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersSelector } from "../../store/users/selector";
import { fetchUsersStartThunk } from "../../store/users/thunks";
import { Link } from "react-router-dom";

const UserContainer = () => {
  const users = useSelector(usersSelector);
  const { isFetching } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
      if (isFetching ==='iddle')
        dispatch(fetchUsersStartThunk());
  }, [isFetching,dispatch]);

  return isFetching === 'loading' ? (
    "...Loading"
  ) : (
    <div>
      <h1>Users</h1>
      <div>
        {users &&
          users.length > 1 &&
          users.map((user) => (
            <div className="row p-1 border border-1" key={user.id}>
              <div className="col-9">{user.name}</div>
              <div className="col-3 d-flex justify-content-end">
                <Link
                  to={`/users/delete/${user.id}`}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default UserContainer;
