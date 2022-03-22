import type { AWS } from "@serverless/typescript";

import hello from "src/application/handlers/addTask";

import getMax from "src/application/handlers/getTasks";

const serverlessConfiguration: AWS = {
  service: "serverless-ts-dynamodb",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "us-west-2",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
    iam: {
      role: {
        statements: [
          {
            Effect: "Allow",
            Action: [
              "dynamodb:Query",
              "dynamodb:Scan",
              "dynamodb:GetItem",
              "dynamodb:PutItem",
              "dynamodb:UpdateItem",
              "dynamodb:DeleteItem",
              "xray:PutTraceSegments",
              "xray:PutTelemetryRecords",
            ],
            Resource: "arn:aws:dynamodb:us-west-2:650850574221:table/TaskTable",
          },
        ],
      },
    },
  },
  // import the function via paths
  functions: { hello, getMax },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
