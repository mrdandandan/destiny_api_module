import {PARAMETERS} from '../constants';
import DestinyApiRequest from '../DestinyApiRequest';

export default {
    getBungieAccount: new DestinyApiRequest({
        path: `User/GetBungieAccount/{${PARAMETERS.MEMBERSHIP_ID}}/{${PARAMETERS.MEMBERSHIP_TYPE}}`,
        routeBinding: `:${PARAMETERS.MEMBERSHIP_ID}/:${PARAMETERS.MEMBERSHIP_TYPE}`,
        requiredParameters: [
            PARAMETERS.MEMBERSHIP_ID,
            PARAMETERS.MEMBERSHIP_TYPE
        ],
        isPlatformRequest: false
    }).buildRequest(),
    getBungieNetUserById: new DestinyApiRequest({
        path: `User/GetBungieNetUserById/{${PARAMETERS.MEMBERSHIP_ID}}`,
        routeBinding: `:${PARAMETERS.MEMBERSHIP_ID}`,
        requiredParameters: [
            PARAMETERS.MEMBERSHIP_ID
        ],
        isPlatformRequest: false
    }).buildRequest()
};