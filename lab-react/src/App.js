import "./App.css";
import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import AddJob from "./components/AddJob";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    useFetch,
    createUser,
    deleteUser,
    editUser,
} from "./components/useFetch";
import { list } from "./List";

function App() {
    const [myuser, setUsers] = useState(list);

    const url = "http://localhost:8000/api/";
    // useFetch(url, setUsers);`

    const addUsers = (newUser) => {
        createUser(url, setUsers, newUser);
        setUsers([...myuser, newUser]);
    };

    const editUsers = (newUser) => {
        editUser(url, newUser);
        const data = myuser.filter((user) => user.id != newUser.id);
        setUsers([...data, newUser]);
    };
    const deleteCallback = (id) => {
        deleteUser(url, id);
        const data = myuser.filter((user) => user.id !== id);
        setUsers(data);
    };

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <h2>Welcome Home</h2>
                </Route>
                <Route path="/employeeList">
                    <div>
                        <EmployeeList list={myuser} callback={deleteCallback} />
                    </div>
                </Route>
              
                <Route path="/createEmployee">
                    <AddEmployee status="add" callback={addUsers} />
                </Route>
                <Route path="/editEmployee/:id">
                    <AddEmployee status="edit" callback={editUsers} />
                </Route>
                <Route path="/createJob">
                    <AddJob status="add" callback={addUsers} />
                </Route>
                //<Route path="/editJob/:id">
                    <AddJob status="edit" callback={editUsers} />
                </Route>
                <Route path="*">
                    <h3>404 not found</h3>
                </Route>
            </Switch>
        </Router>
    );
}
export default App;
