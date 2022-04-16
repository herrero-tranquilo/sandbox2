import { join } from "path";
import { readFileSync } from "fs";

import { makeExecutableSchema } from "graphql-tools";

import { resolvers } from "./resolver";

function createScheme() {
  const typeDefs = readFileSync(join(__dirname, "schema.graphql"), {
    encoding: "utf-8",
  });
  const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  return executableSchema;
}

export const schema = createScheme();
