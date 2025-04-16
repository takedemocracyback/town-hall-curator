import Fastify from "fastify";

console.log("hello");
const fastify = Fastify({
	logger: true,
});
// Declare a route
fastify.get("/", (_, reply) => {
	reply.send({ hello: "world" });
});

// Run the server!
fastify.listen({ port: 3000 }, (err, _) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
