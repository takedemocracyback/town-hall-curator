import type {
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
	Context,
} from "aws-lambda";
import path from "node:path";

/**
 * Core authentication handler. This function is called by the frontend after a user is authenticated by GitHub.
 * TODO: For local development, we'll want the ability to allow developers to provide their own GitHub personal access token.
 * This eliminates the concern around using the GitHub App's secret to authenticate. What this means is that we'll want to
 * have some sort of check when a user hits this endpoint, and see if it's a local development environment request. If so,
 * return the PAT that the user defines in the .env.
 * @param event
 * @param _context
 * @returns
 */
export async function handler(
	event: APIGatewayProxyEvent,
	_context: Context,
): Promise<APIGatewayProxyResult> {
	console.log("request received", event);

	return { body: "hello", statusCode: 200 };
}
