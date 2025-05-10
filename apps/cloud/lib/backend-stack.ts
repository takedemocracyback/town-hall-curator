import * as cdk from "aws-cdk-lib";
import type { Construct } from "constructs";
import { CronConstruct } from "./constructs/cron-construct";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BackendStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		// The code that defines your stack goes here

		// example resource
		console.log("hello");

		new CronConstruct(this, "townhallCronConstruct");
	}
}
