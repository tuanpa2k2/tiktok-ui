import config from '~/config';

//Layouts
import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Detect from '~/pages/Detect';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Những file ko cần login có thể xem đc
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.detect, component: Detect },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

// Những file phải login thì mới có thể vào xem đc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
