import DestinyApiRequest from './DestinyApiRequest';
import account from './endpoints/account';
import advisors from './endpoints/advisors';
import group from './endpoints/group';
import manifest from './endpoints/manifest';
import search from './endpoints/search';
import stats from './endpoints/stats';
import user from './endpoints/user';

import d2 from './endpoints/d2';

export {
    DestinyApiRequest
}

export default {
    account,
    advisors,
    group,
    manifest,
    search,
    stats,
    user,

    d2
};