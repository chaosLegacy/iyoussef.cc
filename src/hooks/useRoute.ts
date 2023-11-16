import { useEffect, useState } from 'react';

import { IRoute } from '@types/navigation';
import { usePathname } from 'next/navigation';
import { useApp } from '@contexts/AuthUserProvider';

export const useActiveRouteInfo = (routes?: IRoute[]) => {
  const { name } = useApp();
  const pathname = usePathname();
  const [activeRoute, setActiveRoute] = useState(name);
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [routePath, setRoutePath] = useState<string>('');

  useEffect(() => {
    const route = routes?.find(
      (route) => pathname.indexOf(route.layout + route.path) !== -1 && route,
    );
    setActiveRoute(route?.name || name);
    setActiveNavbar(route?.secondary || false);
    setRoutePath(pathname);
  }, [pathname]);

  return { activeRoute, activeNavbar, routePath };
};
