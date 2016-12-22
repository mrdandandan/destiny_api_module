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
    }).buildRequest()
};