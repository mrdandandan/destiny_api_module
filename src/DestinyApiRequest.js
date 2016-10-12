import {ApiRequest} from 'api-request-base';
import {METHOD, API_PLATFORM, API_URL} from './constants';
import DestinyApiResponse from './DestinyApiResponse';
import url from 'url';


let apiKey = '';
export default class DestinyApiRequest extends ApiRequest {
    constructor({isPlatformRequest = true, path, routeBinding, requiredParameters = [], method = METHOD.GET}) {
        super({
            path,
            routeBinding,
            requiredParameters,
            method
        });

        let baseUrl = API_URL;
        if (isPlatformRequest) {
            baseUrl = url.resolve(baseUrl, API_PLATFORM);
        }
        // Cheesy hack because wtf node
        if (baseUrl[baseUrl.length - 1] !== '/') {
            baseUrl += '/';
        }

        this.setBaseUrl(baseUrl);
        this.addHeader('X-API-Key', apiKey);
        this.addHeader('Accept', 'application/json');
        this.addHeader('Content-Type', 'application/json');
    }

    static setApiKey(key) {
        apiKey = key;
    }

    buildRequest() {
        let request = super.buildRequest();
        let destinyApiRequest = function destinyApiRequest() {
            return request(...arguments)
                .then(DestinyApiResponse.unwrap)
                .catch(DestinyApiResponse.error);
        };
        return this.appendRequestMetadata(destinyApiRequest);
    }
}