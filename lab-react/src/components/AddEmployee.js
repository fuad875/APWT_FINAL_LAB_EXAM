import { useParams } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddEmployee = ({ status, addcallback }) => {
   const { id: eid } = useParams();
    const [user, setUser] = useState({
        name: "",
        user_name: "",
        company_name: "",
        password: "",
        contact: "",
    });
    const history = useHistory();

    const change = (e) => {
        const attr = e.target.name;
        const val = e.target.value;
        setUser({ ...user, [attr]: val });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addcallback(user);
        history.push("/employeelist");
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={change}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>User Name</td>
                        <td>
                            <input
                                type="text"
                                name="user_name"
                                value={user.user_name}
                                onChange={change}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={change}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Company Name</td>
                        <td>
                            <input
                                type="text"
                                name="company_name"
                                value={user.company_name}
                                onChange={change}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Contact</td>
                        <td>
                            <input
                                type="text"
                                name="contact"
                                value={user.contact}
                                onChange={change}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" name="submit" value={status} />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default AddEmployee;
