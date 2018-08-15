import {PARAMETERS, API_PLATFORM} from '../../constants';
import DestinyApiRequest from '../../DestinyApiRequest';

export default {
    getHistoricalStats: new DestinyApiRequest({
        path: `{${PARAMETERS.MEMBERSHIP_TYPE}}/Account/{${PARAMETERS.MEMBERSHIP_ID}}/Character/{${PARAMETERS.CHARACTER_ID}}/Stats/`,
        routeBinding: `:${PARAMETERS.MEMBERSHIP_TYPE}/:${PARAMETERS.MEMBERSHIP_ID}/:${PARAMETERS.CHARACTER_ID}`,
        requiredParameters: [
            PARAMETERS.MEMBERSHIP_TYPE,
            PARAMETERS.MEMBERSHIP_ID,
            PARAMETERS.CHARACTER_ID
        ],
        platform: API_PLATFORM.D2
    }).buildRequest(),
    getHistoricalStatsForAccount: new DestinyApiRequest({
        path: `{${PARAMETERS.MEMBERSHIP_TYPE}}/Account/{${PARAMETERS.MEMBERSHIP_ID}}/Stats/`,
        routeBinding: `:${PARAMETERS.MEMBERSHIP_TYPE}/:${PARAMETERS.MEMBERSHIP_ID}`,
        requiredParameters: [
            PARAMETERS.MEMBERSHIP_TYPE,
            PARAMETERS.MEMBERSHIP_ID
        ],
        platform: API_PLATFORM.D2
    }).buildRequest()
};