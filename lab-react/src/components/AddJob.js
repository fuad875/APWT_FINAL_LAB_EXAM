import { useParams } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddJob = ({ status, addcallback }) => {
    const { id: eid } = useParams();
    const [user, setUser] = useState({
        title: "",
        location: "",
        company_name: "",
        salary: "",
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
                        <td>Title</td>
                        <td>
                            <input
                                type="text"
                                name="title"
                                value={user.title}
                                onChange={change}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>
                            <input
                                type="text"
                                name="location"
                                value={user.location}
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
                        <td>Salary</td>
                        <td>
                            <input
                                type="text"
                                name="salary"
                                value={user.salary}
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

export default AddJob;
