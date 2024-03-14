import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/FakeAuthContext';

function ProtectedRoute({ children }) {
  const { isAutheticated } = useAuth();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAutheticated) navigate('/');
    },
    [isAutheticated, navigate]
  );
  return isAutheticated ? children : null;
}

export default ProtectedRoute;
