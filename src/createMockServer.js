import { createServer } from 'miragejs';

import searchResults from './search-results.json';
import weather from './weather.json';

const createMockServer = () => {
    return createServer({
        routes() {
            this.urlPrefix = 'https://openweathermap.org';
            this.get('geo/1.0/direct', () => {
                return searchResults;
            });
            this.get('data/2.5/onecall', () => {
                return weather;
            });
        },
    });
};

export { createMockServer };