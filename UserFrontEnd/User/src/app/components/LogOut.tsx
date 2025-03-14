'use client'
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <button onClick={handleLogout} className="flex items-center">
      <h4 className='font-black pr-3'>Log out</h4>
    </button>
  );
};

export default LogoutButton;
