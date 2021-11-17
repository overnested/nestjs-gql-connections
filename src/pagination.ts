import { Type } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';
import { PageInfo } from './page-info.model';

interface IEdgeType<TItem> {
  cursor: string;
  node: TItem;
}

export interface IPaginatedType<TItem> {
  edges: IEdgeType<TItem>[];
  pageInfo: PageInfo;
}

export function Paginated<TItem>(
  classRef: Type<TItem>
): Type<IPaginatedType<TItem>> {
  @ObjectType(`${classRef.name}Edge`, {
    description: `A ${classRef.name} edge.`,
  })
  abstract class EdgeType {
    @Field(() => String, {
      description: 'A cursor for use in pagination.',
    })
    cursor: string;

    @Field(() => classRef, {
      description: `The item at the end of ${classRef.name}Edge.`,
    })
    node: TItem;
  }

  @ObjectType({
    isAbstract: true,
    description:
      'An auto-generated type for paginating through multiple Publications.',
  })
  abstract class PaginatedType implements IPaginatedType<TItem> {
    @Field(() => [EdgeType], { nullable: true, description: 'A list of edges' })
    edges: EdgeType[];

    @Field(() => PageInfo, {
      description: 'Information to aid in pagination.',
    })
    pageInfo: PageInfo;
  }
  return PaginatedType as Type<IPaginatedType<TItem>>;
}
