import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  // Forward pagination arguments
  @Field(() => Int)
  first?: number;
  @Field()
  after?: string;
  // Backward pagination arguments
  @Field(() => Int)
  last?: number;
  @Field()
  before?: string;
}
