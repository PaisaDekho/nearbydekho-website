import type { SSTConfig } from "sst";
import { Api, Table } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "nearbydekho-website",
      region: "ap-south-1",
    };
  },
  stacks(app) {
    app.stack(({ stack }) => {
      const api = new Api(stack, "Api", {
        routes: {
          "POST /login": "lambda/login.handler",
          "post /verify-otp": "lambda/verify-otp.handler",
        },
        cors: {
          allowOrigins: ["http://localhost:3000"],
          allowMethods: ["POST"],
        },
      });

      const table = new Table(stack, "NearbyDekho-partner-otp", {
        primaryIndex: { partitionKey: "phone" },
        fields: {
          phone: "number",
        },
      });

      api.attachPermissions([table]);

      stack.addOutputs({
        ApiEndpoint: api.url,
        tableName: table.tableName,
      });
    });
  },
} satisfies SSTConfig;
