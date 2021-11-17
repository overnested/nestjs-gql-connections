# Graphql Connections (Pagination)

This package is a spec-compliant set of models and utilities based on [Relay's Graphql Cursor Connections Specification](https://relay.dev/graphql/connections.htm) and is created using [Generics](https://docs.nestjs.com/graphql/resolvers#generics)

## Introduction

To use pagination in GraphQL, it's proposed by the spec that we use the "Connections" pattern and expose these connections in a standardized way.

- In queries, you use `PaginationArgs` to slice and paginate the result.
- In response, you return `Connection` objects to provide cursors and a way to tell the client when more results are available.

## Installation

On Yarn:

```shell
yarn add @exonest/graphql-connections
```

On NPM:

```shell
npm install @exonest/graphql-connections
```

## Usage

You can create a new paginated model like so:

```ts
import { Paginated } from '@exonest/graphql-connections';
import { Product } from '../product.model';

export class ProductConnection extends Paginated(Product) {}
```

Note that for your connection to be compliant to relay's specifications, its name should end with `Connection`. ([reference](https://relay.dev/graphql/connections.htm#sec-Reserved-Types))

To create a query for a paginated resource, do like so:

```ts
@Query(() => ProductConnection)
resourcePublications(
    @Args() { after, before, first, last, skip }: PaginationArgs,
) {
    // return data based on pagination
}
```
