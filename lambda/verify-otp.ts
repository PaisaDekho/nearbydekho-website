import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
import { ApiHandler, useJsonBody } from "sst/node/api";
import { sign } from "jsonwebtoken";

export const handler = ApiHandler(async () => {
  const { phone, otp } = useJsonBody();

  const client = new DynamoDBClient({ region: "ap-south-1" });

  try {
    const command = new QueryCommand({
      TableName: "dev-nearbydekho-website-NearbyDekho-partner-otp",
      KeyConditionExpression: "phone = :phone AND otp = :otp",
      ExpressionAttributeValues: {
        ":phone": { N: phone },
        ":otp": { N: otp.toString() }, // Convert otp to string for comparison
      },
    });

    const res = await client.send(command);
    if (res.Items.length === 0) {
      return {
        statusCode: 401,
        body: JSON.stringify({
          message: `Invalid OTP for ${phone}`,
        }),
      };
    }

    const token = sign({ phone }, "jajsdbgjabsgjabsgrgu", {
      expiresIn: "24h",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `OTP verified for ${phone}`,
        token,
      }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: `OTP is not valid`,
      }),
    };
  }
});
