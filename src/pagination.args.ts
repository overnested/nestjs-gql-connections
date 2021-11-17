import { ArgsType } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  // Forward pagination arguments
  first?: number;
  after?: string;
  // Backward pagination arguments
  last?: number;
  before?: string;
}
