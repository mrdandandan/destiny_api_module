const API_URL = 'http://www.bungie.net/Platform/';
const API_PLATFORM = 'Destiny';

const PARAMETERS = {
    ACTIVITY_ID: 'activityId',
    CHARACTER_ID: 'characterId',
    DISPLAY_NAME: 'displayName',
    GROUP_ID: 'groupId',
    INVENTORY_ITEM_HASH: 'inventoryItemHash',
    ITEM_INSTANCE_ID: 'itemInstanceId',
    MEMBERSHIP_ID: 'membershipId',
    MEMBERSHIP_TYPE: 'membershipType',
    MODE: 'mode',
    NAME: 'name',
    START: 'start'
};

const METHOD = {
    GET: 'GET',
    POST: 'POST'
};

export {
    API_PLATFORM,
    API_URL,
    METHOD,
    PARAMETERS
}