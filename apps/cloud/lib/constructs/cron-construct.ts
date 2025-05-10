import { Rule, Schedule } from "aws-cdk-lib/aws-events";
import { LambdaFunction } from "aws-cdk-lib/aws-events-targets";
import { Code } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import path from "node:path";

export class CronConstruct extends Construct {
	constructor(scope: Construct, id: string) {
		super(scope, id);

		const cronLambda = new NodejsFunction(this, "cronLambda", {
			code: Code.fromAsset(path.join(__dirname, "../../src")),
			handler: "index.handler",
		});

		new Rule(this, "townhallCronRule", {
			description: "Runs periodically to grab townhall information",
			schedule: Schedule.cron({
				year: "*",
				month: "*",
				day: "1",
				hour: "1",
				minute: "1",
			}),
			targets: [new LambdaFunction(cronLambda)],
		});
	}
}
