import { useContext } from 'react';
import { AuthContext } from '@/context/auth';

export const useCurrentUser = () => useContext(AuthContext);
