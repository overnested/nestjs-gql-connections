import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  // Forward pagination arguments
  @Field(() => Int, { nullable: true })
  first?: number;

  @Field(() => String, { nullable: true })
  after?: string;

  // Backward pagination arguments
  @Field(() => Int, { nullable: true })
  last?: number;

  @Field(() => String, { nullable: true })
  before?: string;
}
