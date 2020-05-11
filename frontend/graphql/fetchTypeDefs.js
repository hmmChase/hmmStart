import fetch from 'isomorphic-unfetch';
import { writeFileSync } from 'fs';
import { HttpLink } from 'apollo-link-http';
import { printSchema } from 'graphql';
import { introspectSchema } from 'graphql-tools';

//! Currently not used for anything

export const fetchTypeDefs = async () => {
  const typescript = false;

  const path = `${process.cwd()}/typeDefs.${typescript ? 'ts' : 'js'}`;

  const uri = 'http://localhost:6969/api/graphql';

  const link = new HttpLink({ uri, fetch });

  console.log('writing typeDefs to: ', path);

  writeFileSync(
    path,
    `export const typeDefs = \`${printSchema(
      await introspectSchema(link)
    ).replace(/`/g, '\\`')}\``
  );
};
