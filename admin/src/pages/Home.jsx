// src/pages/Home.js
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { DoctorContext } from '../context/DoctorContext';

const Home = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  const role = aToken ? 'Admin' : dToken ? 'Doctor' : 'User';

  return (
    <div className="flex flex-col justify-center items-center w-full h-[80vh] px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 md:p-12 text-center w-full max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Welcome {role} 🎉
        </h1>
        <p className="text-gray-500 text-lg">
          We’re glad to have you here. Let’s make today productive.
        </p>
      </div>
    </div>
  );
};

export default Home;
