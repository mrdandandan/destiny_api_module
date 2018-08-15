import {API_PLATFORM, PARAMETERS} from '../../constants';
import DestinyApiRequest from '../../DestinyApiRequest';

export default {
    getProfile: new DestinyApiRequest({
        path: `{${PARAMETERS.MEMBERSHIP_TYPE}}/Profile/{${PARAMETERS.MEMBERSHIP_ID}}`,
        routeBinding: `:${PARAMETERS.MEMBERSHIP_TYPE}/:${PARAMETERS.MEMBERSHIP_ID}`,
        requiredParameters: [
            PARAMETERS.MEMBERSHIP_TYPE,
            PARAMETERS.MEMBERSHIP_ID
        ],
        platform: API_PLATFORM.D2
    }).buildRequest()
};