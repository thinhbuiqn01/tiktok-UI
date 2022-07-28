//Layouts
import { HeaderOnly } from '~/layouts';

import config from '~/config';
//Pages
import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Search from '~/pages/Search/Search';
import Upload from '~/pages/Upload/Upload';
import Live from '~/pages/Live';

//publicRoutes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

//privateRoutes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
