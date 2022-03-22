import { DocumentClient } from "aws-sdk/clients/dynamodb";
import * as AWS from "aws-sdk";

export default class databaseClient {
  constructor(
    private docClient: DocumentClient = new AWS.DynamoDB.DocumentClient()
  ) {}

  getDatabaseClient(): DocumentClient {
    return this.docClient;
  }
}
