```
import {DestinyApiRequest} from 'mrdandandan-destiny-api-module';
import api from 'mrdandandan-destiny-api-module';

// Required for initialization
DestinyApiRequest.setApiKey('<bungienet-api-key>');

// API things
api.search.searchDestinyPlayer({
    membershipType: 1, // XBOX
    displayName: 'mr dandandan'
}).then( response => {
    // Do something
});
```