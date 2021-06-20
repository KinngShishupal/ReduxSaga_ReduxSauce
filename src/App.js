import React from "react";
import InputForm from "./components/InputForm";
import Output from "./components/Output";
import { useDispatch, useSelector } from "react-redux";
import { Creators } from "./reducers/movieReducer";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.movieReducer.apiData);
  console.log(users);
  return (
    <div>
      <InputForm />
      <Output /> <br />
      <br />
      <button onClick={() => dispatch(Creators.getUsers())}>
        console Users
      </button>
      <br />
      <br />
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default App;
