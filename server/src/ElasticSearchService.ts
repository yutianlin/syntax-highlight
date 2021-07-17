const ElasticSearch = require('elasticsearch');

export default class ElasticSearchService {
    elasticClient: any;

    constructor() {
        this.elasticClient = new ElasticSearch.Client({
            host: process.env.ELASTIC_SEARCH_HOST,
            log: process.env.ELASTIC_SEARCH_LOG
        })
    }

    public async ping() {
        return this.elasticClient.ping({requestTimeout: 30000});
    }
}