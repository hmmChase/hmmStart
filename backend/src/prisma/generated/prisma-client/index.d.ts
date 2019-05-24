// Code generated by Prisma (prisma@1.33.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  idea: (where?: IdeaWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  idea: (where: IdeaWhereUniqueInput) => IdeaNullablePromise;
  ideas: (args?: {
    where?: IdeaWhereInput;
    orderBy?: IdeaOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Idea>;
  ideasConnection: (args?: {
    where?: IdeaWhereInput;
    orderBy?: IdeaOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => IdeaConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createIdea: (data: IdeaCreateInput) => IdeaPromise;
  updateIdea: (args: {
    data: IdeaUpdateInput;
    where: IdeaWhereUniqueInput;
  }) => IdeaPromise;
  updateManyIdeas: (args: {
    data: IdeaUpdateManyMutationInput;
    where?: IdeaWhereInput;
  }) => BatchPayloadPromise;
  upsertIdea: (args: {
    where: IdeaWhereUniqueInput;
    create: IdeaCreateInput;
    update: IdeaUpdateInput;
  }) => IdeaPromise;
  deleteIdea: (where: IdeaWhereUniqueInput) => IdeaPromise;
  deleteManyIdeas: (where?: IdeaWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  idea: (
    where?: IdeaSubscriptionWhereInput
  ) => IdeaSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type Role = "ADMIN" | "USER";

export type Permission =
  | "PERMISSIONUPDATE"
  | "IDEACREATE"
  | "IDEAUPDATE"
  | "IDEADELETE";

export type IdeaOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "content_ASC"
  | "content_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "resetToken_ASC"
  | "resetToken_DESC"
  | "resetTokenExpiry_ASC"
  | "resetTokenExpiry_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreatepermissionsInput {
  set?: Maybe<Permission[] | Permission>;
}

export type IdeaWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface IdeaCreateWithoutAuthorInput {
  id?: Maybe<ID_Input>;
  content: String;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email: String;
  password: String;
  roles?: Maybe<UserCreaterolesInput>;
  permissions?: Maybe<UserCreatepermissionsInput>;
  ideas?: Maybe<IdeaCreateManyWithoutAuthorInput>;
  resetToken?: Maybe<String>;
  resetTokenExpiry?: Maybe<Float>;
}

export interface UserUpdaterolesInput {
  set?: Maybe<Role[] | Role>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface IdeaCreateInput {
  id?: Maybe<ID_Input>;
  author: UserCreateOneWithoutIdeasInput;
  content: String;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  roles?: Maybe<UserUpdaterolesInput>;
  permissions?: Maybe<UserUpdatepermissionsInput>;
  resetToken?: Maybe<String>;
  resetTokenExpiry?: Maybe<Float>;
}

export interface UserCreateOneWithoutIdeasInput {
  create?: Maybe<UserCreateWithoutIdeasInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface IdeaUpdateManyWithWhereNestedInput {
  where: IdeaScalarWhereInput;
  data: IdeaUpdateManyDataInput;
}

export interface UserCreateWithoutIdeasInput {
  id?: Maybe<ID_Input>;
  email: String;
  password: String;
  roles?: Maybe<UserCreaterolesInput>;
  permissions?: Maybe<UserCreatepermissionsInput>;
  resetToken?: Maybe<String>;
  resetTokenExpiry?: Maybe<Float>;
}

export interface IdeaUpsertWithWhereUniqueWithoutAuthorInput {
  where: IdeaWhereUniqueInput;
  update: IdeaUpdateWithoutAuthorDataInput;
  create: IdeaCreateWithoutAuthorInput;
}

export interface UserCreaterolesInput {
  set?: Maybe<Role[] | Role>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface IdeaCreateManyWithoutAuthorInput {
  create?: Maybe<IdeaCreateWithoutAuthorInput[] | IdeaCreateWithoutAuthorInput>;
  connect?: Maybe<IdeaWhereUniqueInput[] | IdeaWhereUniqueInput>;
}

export interface IdeaUpdateManyWithoutAuthorInput {
  create?: Maybe<IdeaCreateWithoutAuthorInput[] | IdeaCreateWithoutAuthorInput>;
  delete?: Maybe<IdeaWhereUniqueInput[] | IdeaWhereUniqueInput>;
  connect?: Maybe<IdeaWhereUniqueInput[] | IdeaWhereUniqueInput>;
  set?: Maybe<IdeaWhereUniqueInput[] | IdeaWhereUniqueInput>;
  disconnect?: Maybe<IdeaWhereUniqueInput[] | IdeaWhereUniqueInput>;
  update?: Maybe<
    | IdeaUpdateWithWhereUniqueWithoutAuthorInput[]
    | IdeaUpdateWithWhereUniqueWithoutAuthorInput
  >;
  upsert?: Maybe<
    | IdeaUpsertWithWhereUniqueWithoutAuthorInput[]
    | IdeaUpsertWithWhereUniqueWithoutAuthorInput
  >;
  deleteMany?: Maybe<IdeaScalarWhereInput[] | IdeaScalarWhereInput>;
  updateMany?: Maybe<
    IdeaUpdateManyWithWhereNestedInput[] | IdeaUpdateManyWithWhereNestedInput
  >;
}

export interface IdeaUpdateInput {
  author?: Maybe<UserUpdateOneRequiredWithoutIdeasInput>;
  content?: Maybe<String>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  ideas_every?: Maybe<IdeaWhereInput>;
  ideas_some?: Maybe<IdeaWhereInput>;
  ideas_none?: Maybe<IdeaWhereInput>;
  resetToken?: Maybe<String>;
  resetToken_not?: Maybe<String>;
  resetToken_in?: Maybe<String[] | String>;
  resetToken_not_in?: Maybe<String[] | String>;
  resetToken_lt?: Maybe<String>;
  resetToken_lte?: Maybe<String>;
  resetToken_gt?: Maybe<String>;
  resetToken_gte?: Maybe<String>;
  resetToken_contains?: Maybe<String>;
  resetToken_not_contains?: Maybe<String>;
  resetToken_starts_with?: Maybe<String>;
  resetToken_not_starts_with?: Maybe<String>;
  resetToken_ends_with?: Maybe<String>;
  resetToken_not_ends_with?: Maybe<String>;
  resetTokenExpiry?: Maybe<Float>;
  resetTokenExpiry_not?: Maybe<Float>;
  resetTokenExpiry_in?: Maybe<Float[] | Float>;
  resetTokenExpiry_not_in?: Maybe<Float[] | Float>;
  resetTokenExpiry_lt?: Maybe<Float>;
  resetTokenExpiry_lte?: Maybe<Float>;
  resetTokenExpiry_gt?: Maybe<Float>;
  resetTokenExpiry_gte?: Maybe<Float>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface UserUpdateOneRequiredWithoutIdeasInput {
  create?: Maybe<UserCreateWithoutIdeasInput>;
  update?: Maybe<UserUpdateWithoutIdeasDataInput>;
  upsert?: Maybe<UserUpsertWithoutIdeasInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface IdeaUpdateManyDataInput {
  content?: Maybe<String>;
}

export interface UserUpdateWithoutIdeasDataInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  roles?: Maybe<UserUpdaterolesInput>;
  permissions?: Maybe<UserUpdatepermissionsInput>;
  resetToken?: Maybe<String>;
  resetTokenExpiry?: Maybe<Float>;
}

export interface IdeaUpdateWithoutAuthorDataInput {
  content?: Maybe<String>;
}

export interface IdeaUpdateManyMutationInput {
  content?: Maybe<String>;
}

export interface UserUpsertWithoutIdeasInput {
  update: UserUpdateWithoutIdeasDataInput;
  create: UserCreateWithoutIdeasInput;
}

export interface UserUpdatepermissionsInput {
  set?: Maybe<Permission[] | Permission>;
}

export interface IdeaWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  author?: Maybe<UserWhereInput>;
  content?: Maybe<String>;
  content_not?: Maybe<String>;
  content_in?: Maybe<String[] | String>;
  content_not_in?: Maybe<String[] | String>;
  content_lt?: Maybe<String>;
  content_lte?: Maybe<String>;
  content_gt?: Maybe<String>;
  content_gte?: Maybe<String>;
  content_contains?: Maybe<String>;
  content_not_contains?: Maybe<String>;
  content_starts_with?: Maybe<String>;
  content_not_starts_with?: Maybe<String>;
  content_ends_with?: Maybe<String>;
  content_not_ends_with?: Maybe<String>;
  AND?: Maybe<IdeaWhereInput[] | IdeaWhereInput>;
  OR?: Maybe<IdeaWhereInput[] | IdeaWhereInput>;
  NOT?: Maybe<IdeaWhereInput[] | IdeaWhereInput>;
}

export interface IdeaUpdateWithWhereUniqueWithoutAuthorInput {
  where: IdeaWhereUniqueInput;
  data: IdeaUpdateWithoutAuthorDataInput;
}

export interface IdeaScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  content?: Maybe<String>;
  content_not?: Maybe<String>;
  content_in?: Maybe<String[] | String>;
  content_not_in?: Maybe<String[] | String>;
  content_lt?: Maybe<String>;
  content_lte?: Maybe<String>;
  content_gt?: Maybe<String>;
  content_gte?: Maybe<String>;
  content_contains?: Maybe<String>;
  content_not_contains?: Maybe<String>;
  content_starts_with?: Maybe<String>;
  content_not_starts_with?: Maybe<String>;
  content_ends_with?: Maybe<String>;
  content_not_ends_with?: Maybe<String>;
  AND?: Maybe<IdeaScalarWhereInput[] | IdeaScalarWhereInput>;
  OR?: Maybe<IdeaScalarWhereInput[] | IdeaScalarWhereInput>;
  NOT?: Maybe<IdeaScalarWhereInput[] | IdeaScalarWhereInput>;
}

export interface IdeaSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<IdeaWhereInput>;
  AND?: Maybe<IdeaSubscriptionWhereInput[] | IdeaSubscriptionWhereInput>;
  OR?: Maybe<IdeaSubscriptionWhereInput[] | IdeaSubscriptionWhereInput>;
  NOT?: Maybe<IdeaSubscriptionWhereInput[] | IdeaSubscriptionWhereInput>;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  roles?: Maybe<UserUpdaterolesInput>;
  permissions?: Maybe<UserUpdatepermissionsInput>;
  ideas?: Maybe<IdeaUpdateManyWithoutAuthorInput>;
  resetToken?: Maybe<String>;
  resetTokenExpiry?: Maybe<Float>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  email: String;
  password: String;
  roles: Role[];
  permissions: Permission[];
  resetToken?: String;
  resetTokenExpiry?: Float;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  roles: () => Promise<Role[]>;
  permissions: () => Promise<Permission[]>;
  resetToken: () => Promise<String>;
  resetTokenExpiry: () => Promise<Float>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  roles: () => Promise<AsyncIterator<Role[]>>;
  permissions: () => Promise<AsyncIterator<Permission[]>>;
  resetToken: () => Promise<AsyncIterator<String>>;
  resetTokenExpiry: () => Promise<AsyncIterator<Float>>;
}

export interface AggregateIdea {
  count: Int;
}

export interface AggregateIdeaPromise
  extends Promise<AggregateIdea>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateIdeaSubscription
  extends Promise<AsyncIterator<AggregateIdea>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  email: String;
  password: String;
  roles: Role[];
  permissions: Permission[];
  resetToken?: String;
  resetTokenExpiry?: Float;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  roles: () => Promise<Role[]>;
  permissions: () => Promise<Permission[]>;
  ideas: <T = FragmentableArray<Idea>>(args?: {
    where?: IdeaWhereInput;
    orderBy?: IdeaOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  resetToken: () => Promise<String>;
  resetTokenExpiry: () => Promise<Float>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  roles: () => Promise<AsyncIterator<Role[]>>;
  permissions: () => Promise<AsyncIterator<Permission[]>>;
  ideas: <T = Promise<AsyncIterator<IdeaSubscription>>>(args?: {
    where?: IdeaWhereInput;
    orderBy?: IdeaOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  resetToken: () => Promise<AsyncIterator<String>>;
  resetTokenExpiry: () => Promise<AsyncIterator<Float>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  roles: () => Promise<Role[]>;
  permissions: () => Promise<Permission[]>;
  ideas: <T = FragmentableArray<Idea>>(args?: {
    where?: IdeaWhereInput;
    orderBy?: IdeaOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  resetToken: () => Promise<String>;
  resetTokenExpiry: () => Promise<Float>;
}

export interface IdeaEdge {
  node: Idea;
  cursor: String;
}

export interface IdeaEdgePromise extends Promise<IdeaEdge>, Fragmentable {
  node: <T = IdeaPromise>() => T;
  cursor: () => Promise<String>;
}

export interface IdeaEdgeSubscription
  extends Promise<AsyncIterator<IdeaEdge>>,
    Fragmentable {
  node: <T = IdeaSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Idea {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  content: String;
}

export interface IdeaPromise extends Promise<Idea>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  author: <T = UserPromise>() => T;
  content: () => Promise<String>;
}

export interface IdeaSubscription
  extends Promise<AsyncIterator<Idea>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  author: <T = UserSubscription>() => T;
  content: () => Promise<AsyncIterator<String>>;
}

export interface IdeaNullablePromise
  extends Promise<Idea | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  author: <T = UserPromise>() => T;
  content: () => Promise<String>;
}

export interface IdeaConnection {
  pageInfo: PageInfo;
  edges: IdeaEdge[];
}

export interface IdeaConnectionPromise
  extends Promise<IdeaConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<IdeaEdge>>() => T;
  aggregate: <T = AggregateIdeaPromise>() => T;
}

export interface IdeaConnectionSubscription
  extends Promise<AsyncIterator<IdeaConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<IdeaEdgeSubscription>>>() => T;
  aggregate: <T = AggregateIdeaSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface IdeaSubscriptionPayload {
  mutation: MutationType;
  node: Idea;
  updatedFields: String[];
  previousValues: IdeaPreviousValues;
}

export interface IdeaSubscriptionPayloadPromise
  extends Promise<IdeaSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = IdeaPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = IdeaPreviousValuesPromise>() => T;
}

export interface IdeaSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<IdeaSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = IdeaSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = IdeaPreviousValuesSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface IdeaPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  content: String;
}

export interface IdeaPreviousValuesPromise
  extends Promise<IdeaPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  content: () => Promise<String>;
}

export interface IdeaPreviousValuesSubscription
  extends Promise<AsyncIterator<IdeaPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  content: () => Promise<AsyncIterator<String>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Role",
    embedded: false
  },
  {
    name: "Permission",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Idea",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
