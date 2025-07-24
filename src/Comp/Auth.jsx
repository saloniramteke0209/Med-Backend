import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Auth = () => {
    const [name, setName] = useState('');
    const [Id, setId] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting:", { name, Id, role });
            const res = await axios.post('http://localhost:2000/api/auth', {
                name,
                Id,
                role
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert("Login Successfully")
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("role", res.data.role);

                if (res.data.role === "admin") {
                    navigate("/admin");
                    alert("Login Successfully")
                }
                else {
                    alert("No token return")
                }
                console.log("Sending login:", { name, Id, role });

            }
        }
        catch (error) {
            console.log(error.message)
            alert("Login Failed")
        }
    }
    //   console.log({ name, Id, role });
    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className='w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50  placeholder-gray-800'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                </div>
                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
                    <input
                        type="tel"
                        placeholder="Enter ID"
                        className="w-full px-4 py-2 border border-gray-300  rounded-md bg-gray-50 placeholder-gray-800"
                        value={Id}
                        onChange={(e) => setId(e.target.value)}
                    />

                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                    <label className="block text-gray-800 font-medium text-sm mb-1">Role</label>
                    <select className="w-full px-4 py-2 border border-gray-300  rounded-md bg-white" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="doctor">Doctor</option>
                        <option value="patient">Patient</option>
                    </select>
                </div>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium"
            >
                Submit
            </button>
        </form>
    )
}

export default Auth;
