const ElasticSearch = require('elasticsearch');

export default class ElasticSearchService {
    elasticClient: any;

    constructor() {
        this.elasticClient = new ElasticSearch.Client({
            host: process.env.ELASTIC_SEARCH_HOST,
            log: process.env.ELASTIC_SEARCH_LOG
        })
    }

    public ping() {
        return this.elasticClient.ping({requestTimeout: 30000});
    }

    public initIndex(indexName: string) {
        return this.elasticClient.indices.create({
            index: indexName
        });
    }

    public indexExists(indexName: string) {
        return this.elasticClient.indices.exists({
            index: indexName
        });
    }

    public initMapping(indexName: string, docType: string, payload: JSON) {
        return this.elasticClient.indices.putMapping({
            index: indexName,
            type: docType,
            body: payload
        });
    }

    public addDocument(indexName: string, docType: string, payload: JSON) {
        return this.elasticClient.index({
            index: indexName,
            type: docType,
            body: payload
        });
    }

    public updateDocument(indexName: string, id: string, docType: string, payload: JSON) {
        return this.elasticClient.update({
            index: indexName,
            type: docType,
            id: id,
            body: payload
        });
    }

    public search(indexName: string, docType: string, payload: JSON) {
        this.elasticClient.search({
            index: indexName,
            type: docType,
            body: payload
        });
    }

    public deleteDocument(indexName: string, id: string, docType: string) {
        this.elasticClient.delete({
            index: indexName,
            type: docType,
            id: id
        });
    }
}