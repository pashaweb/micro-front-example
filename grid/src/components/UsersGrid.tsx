import { useEffect, useState } from "react";
import { UsersList } from "../types/types";

export default function UsersGrid({ list }: { list: UsersList }) {
    const [users, setUsers] = useState<UsersList>([]);
    useEffect(() => {
        setUsers(list);
    }, [list]);
    if(users.length === 0) {
        return <div data-id='loading'>loading...</div>
    }
    return (
        <>
            <div className="container w-full" data-id="table">
                <table className="w-full">
                    <thead>
                        <tr className=" font-semibold">
                            <th className=" border px-4 py-2">ID</th>
                            <th className=" border px-4 py-2">Name</th>
                            <th className=" border px-4 py-2">Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index) => (
                            <tr key={user.id} className={index%2 ? 'bg-lime-100': 'bg-blue-100'}>
                                <td className="px-2 py-2">{user.id}</td>
                                <td className="px-2 py-2">{user.name}</td>
                                <td className="px-2 py-2">{user.username}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
            </div>

        </>

    );
}