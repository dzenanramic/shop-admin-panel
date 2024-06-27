// ----------------------------------------------------------------------

import { useAuthContext } from '../components/Auth';

type ReturnType = {
  hasPermission: (permission: string) => boolean;
};

export default function usePermissions(): ReturnType {
  const { user } = useAuthContext();

  const hasPermission = (permission: string) => {
    return user?.role?.permissions?.includes(permission);
  };

  return {
    hasPermission,
  };
}
