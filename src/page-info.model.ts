import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Information about pagination in a connection.' })
export class PageInfo {
  @Field(() => Boolean, {
    description: 'Indicates if there are more pages to fetch.',
  })
  hasNextPage: boolean;

  @Field(() => Boolean, {
    description: 'Indicates if there are any pages prior to the current page.',
  })
  hasPreviousPage: boolean;

  @Field(() => String, {
    nullable: true,
    description: 'The cursor of the first edge in the connection.',
  })
  startCursor: string;

  @Field(() => String, {
    nullable: true,
    description: 'The cursor of the last edge in the connection.',
  })
  endCursor: string;
}
