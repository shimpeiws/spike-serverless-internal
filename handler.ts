import { APIGatewayProxyHandler } from 'aws-lambda';

export const hello: APIGatewayProxyHandler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World! This is internal API',
      input: event
    })
  };
};
