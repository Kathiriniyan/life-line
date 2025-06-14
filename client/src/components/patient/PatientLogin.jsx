import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useAppContext } from '../../context/AppContext';

const PatientLogin = () => {
    // NOTE: Add setPatient to your AppContext if you want to store patient info.
    const { isPatient, setShowPatientLogin, setPatient, axios, navigate, setIsPatient } = useAppContext();
    const [mode, setMode] = useState("login"); // "login" or "register"
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const url = `/api/patient/${mode}`;
            const payload = mode === "register"
                ? { name, email, password }
                : { email, password };

            const { data } = await axios.post(url, payload);

            if (data.success) {
                toast.success(data.message || (mode === "register" ? "Registered!" : "Logged in!"));
                if (setPatient) setPatient(data.patient);
                if (setIsPatient) setIsPatient(true);
                setShowPatientLogin(false);
                navigate('/patient');
            }

            else {
                toast.error(data.message || "Error");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message || "Error");
        }
        setLoading(false);
    };

    useEffect(() => {
        if (isPatient) {
            setShowPatientLogin(false);
            navigate("patient");
        }
    }, [isPatient]);

    return !isPatient && (
        <div
            onClick={() => setShowPatientLogin(false)}
            className="fixed inset-0 z-30 flex items-center justify-center bg-black/50"
        >
            <form
                onSubmit={handleSubmit}
                onClick={e => e.stopPropagation()}
                className="flex flex-col gap-4 bg-white rounded-lg shadow-xl border border-gray-200 p-8 py-10 w-80 sm:w-[360px]"
            >
                <p className="text-2xl font-medium m-auto">
                    <span className="text-primary">Patient</span> {mode === "login" ? "Login" : "Sign Up"}
                </p>
                {mode === "register" && (
                    <div className="w-full">
                        <p>Name</p>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                            type="text"
                            required
                        />
                    </div>
                )}
                <div className="w-full">
                    <p>Email</p>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                        type="email"
                        required
                    />
                </div>
                <div className="w-full">
                    <p>Password</p>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                        type="password"
                        required
                    />
                </div>
                {mode === "register" ? (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setMode("login")} className="text-primary cursor-pointer">Click here</span>
                    </p>
                ) : (
                    <p>
                        Create an account?{" "}
                        <span onClick={() => setMode("register")} className="text-primary cursor-pointer">Click here</span>
                    </p>
                )}
                <button
                    type="submit"
                    disabled={loading}
                    className={`bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer ${loading && "opacity-60 cursor-wait"}`}
                >
                    {loading
                        ? (mode === "register" ? "Registering..." : "Logging in...")
                        : (mode === "register" ? "Create Account" : "Login")}
                </button>
            </form>
        </div>
    )
};

export default PatientLogin;
