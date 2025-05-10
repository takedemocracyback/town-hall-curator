import Fastify from "fastify";

import { testFunction } from "core";

const fastify = Fastify({
	logger: true,
});

// Declare a route
fastify.get("/", (_, reply) => {
	testFunction();
	reply.send({ hello: "world" });
});

// Run the server!
fastify.listen({ port: 3000 }, (err, _) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
