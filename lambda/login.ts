import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import axios from "axios";
import { ApiHandler, useJsonBody } from "sst/node/api";

export const handler = ApiHandler(async () => {
  const { phone } = useJsonBody();
  const client = new DynamoDBClient({ region: "ap-south-1" });

  const otp = Math.floor(1000 + Math.random() * 9000);

  const API_KEY = "463FA2B9B796A9";
  const from = "NBDKHO";
  const text = encodeURI(`Dear User,

  Your OTP for login to Nearby Dekho is ${otp} and is valid only for 5 minutes.
  Do not share this OTP with anyone.
  
  Thanks
  Team Nearby Dekho `);

  const api_url =
    "https://sms.autobysms.com/app/smsapi/index.php?key=" +
    API_KEY +
    "&campaign=0&routeid=9&type=text&contacts=" +
    phone +
    "&senderid=" +
    from +
    "&msg=" +
    text +
    "&template_id=1207168716109224897";

  try {
    const response = await axios.get(api_url);
    if (response.status !== 200) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: `Error sending OTP to ${phone}`,
        }),
      };
    }

    const ttlInSeconds = 120;

    const command = new PutItemCommand({
      TableName: "dev-nearbydekho-website-NearbyDekho-partner-otp",
      Item: {
        phone: { N: phone },
        otp: { N: otp.toString() },
        TTL: { N: Math.floor(Date.now() / 1000 + ttlInSeconds).toString() },
      },
    });

    const res = await client.send(command);
    console.log(res.$metadata);
  } catch (err) {
    console.log(err);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `one Message sent to ${phone}`,
    }),
  };
});
