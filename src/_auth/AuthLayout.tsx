import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
  const isAuth = false;

  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <div className="h-screen w-screen bg-gradient-to-b from-blue-600 via-purple-600 to-white-500 flex justify-center items-center">
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
        </div>
      )}
    </>
  );
};

export default AuthLayout;
