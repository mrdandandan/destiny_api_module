import {PARAMETERS} from '../constants';
import DestinyApiRequest from '../DestinyApiRequest';

export default {
    searchDestinyPlayer: new DestinyApiRequest({
        path: `GetBungieAccount/{${PARAMETERS.MEMBERSHIP_ID}}/{${PARAMETERS.MEMBERSHIP_TYPE}}`,
        routeBinding: `:${PARAMETERS.MEMBERSHIP_ID}/:${PARAMETERS.MEMBERSHIP_TYPE}`,
        requiredParameters: [
            PARAMETERS.MEMBERSHIP_ID,
            PARAMETERS.MEMBERSHIP_TYPE
        ]
    }).buildRequest()
};