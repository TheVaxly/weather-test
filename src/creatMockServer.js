import { createServer } from 'miragejs';

import searchResults from './search-results.json';

const createMockServer = () => {
    return createServer({
        routes() {
            this.urlPrefix = 'https://openweathermap.org';
            this.get('geo/1.0/direct', () => {
                return searchResults;
            });
        },
    });
};

export { createMockServer };