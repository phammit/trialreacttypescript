//need to tell TypeScript about .graphql query files from github.com/MichalLytek/type-graphql/tree/master/examples/simple-usage

declare module '*.graphql' {
    import { DocumentNode } from 'graphql';
    const Schema: DocumentNode;
  
    export = Schema;
  }

