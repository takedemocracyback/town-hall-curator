import type {
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
	Context,
} from "aws-lambda";
import path from "node:path";

const SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), "token.json");
const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

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
