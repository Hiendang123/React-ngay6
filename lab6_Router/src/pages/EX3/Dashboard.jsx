import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-12 text-center">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <h1 className="font-bold text-2xl mb-6">Welcome to Dashboard!</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white font-bold py-3 px-12 rounded-full uppercase transition-transform duration-75 transform active:scale-95 focus:outline-none"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
