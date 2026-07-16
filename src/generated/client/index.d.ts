
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Office
 * 
 */
export type Office = $Result.DefaultSelection<Prisma.$OfficePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model InventoryItem
 * 
 */
export type InventoryItem = $Result.DefaultSelection<Prisma.$InventoryItemPayload>
/**
 * Model InventoryBatch
 * 
 */
export type InventoryBatch = $Result.DefaultSelection<Prisma.$InventoryBatchPayload>
/**
 * Model InventoryTransaction
 * 
 */
export type InventoryTransaction = $Result.DefaultSelection<Prisma.$InventoryTransactionPayload>
/**
 * Model Requisition
 * 
 */
export type Requisition = $Result.DefaultSelection<Prisma.$RequisitionPayload>
/**
 * Model RequisitionItem
 * 
 */
export type RequisitionItem = $Result.DefaultSelection<Prisma.$RequisitionItemPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Offices
 * const offices = await prisma.office.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Offices
   * const offices = await prisma.office.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.office`: Exposes CRUD operations for the **Office** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offices
    * const offices = await prisma.office.findMany()
    * ```
    */
  get office(): Prisma.OfficeDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.inventoryItem`: Exposes CRUD operations for the **InventoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryItems
    * const inventoryItems = await prisma.inventoryItem.findMany()
    * ```
    */
  get inventoryItem(): Prisma.InventoryItemDelegate<ExtArgs>;

  /**
   * `prisma.inventoryBatch`: Exposes CRUD operations for the **InventoryBatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryBatches
    * const inventoryBatches = await prisma.inventoryBatch.findMany()
    * ```
    */
  get inventoryBatch(): Prisma.InventoryBatchDelegate<ExtArgs>;

  /**
   * `prisma.inventoryTransaction`: Exposes CRUD operations for the **InventoryTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryTransactions
    * const inventoryTransactions = await prisma.inventoryTransaction.findMany()
    * ```
    */
  get inventoryTransaction(): Prisma.InventoryTransactionDelegate<ExtArgs>;

  /**
   * `prisma.requisition`: Exposes CRUD operations for the **Requisition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requisitions
    * const requisitions = await prisma.requisition.findMany()
    * ```
    */
  get requisition(): Prisma.RequisitionDelegate<ExtArgs>;

  /**
   * `prisma.requisitionItem`: Exposes CRUD operations for the **RequisitionItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequisitionItems
    * const requisitionItems = await prisma.requisitionItem.findMany()
    * ```
    */
  get requisitionItem(): Prisma.RequisitionItemDelegate<ExtArgs>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Office: 'Office',
    User: 'User',
    InventoryItem: 'InventoryItem',
    InventoryBatch: 'InventoryBatch',
    InventoryTransaction: 'InventoryTransaction',
    Requisition: 'Requisition',
    RequisitionItem: 'RequisitionItem',
    Activity: 'Activity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "office" | "user" | "inventoryItem" | "inventoryBatch" | "inventoryTransaction" | "requisition" | "requisitionItem" | "activity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Office: {
        payload: Prisma.$OfficePayload<ExtArgs>
        fields: Prisma.OfficeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfficeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfficeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          findFirst: {
            args: Prisma.OfficeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfficeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          findMany: {
            args: Prisma.OfficeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>[]
          }
          create: {
            args: Prisma.OfficeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          createMany: {
            args: Prisma.OfficeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OfficeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          update: {
            args: Prisma.OfficeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          deleteMany: {
            args: Prisma.OfficeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfficeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OfficeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficePayload>
          }
          aggregate: {
            args: Prisma.OfficeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffice>
          }
          groupBy: {
            args: Prisma.OfficeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfficeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfficeCountArgs<ExtArgs>
            result: $Utils.Optional<OfficeCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      InventoryItem: {
        payload: Prisma.$InventoryItemPayload<ExtArgs>
        fields: Prisma.InventoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findFirst: {
            args: Prisma.InventoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findMany: {
            args: Prisma.InventoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          create: {
            args: Prisma.InventoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          createMany: {
            args: Prisma.InventoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          update: {
            args: Prisma.InventoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          deleteMany: {
            args: Prisma.InventoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          aggregate: {
            args: Prisma.InventoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryItem>
          }
          groupBy: {
            args: Prisma.InventoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemCountAggregateOutputType> | number
          }
        }
      }
      InventoryBatch: {
        payload: Prisma.$InventoryBatchPayload<ExtArgs>
        fields: Prisma.InventoryBatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryBatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryBatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBatchPayload>
          }
          findFirst: {
            args: Prisma.InventoryBatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryBatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBatchPayload>
          }
          findMany: {
            args: Prisma.InventoryBatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBatchPayload>[]
          }
          create: {
            args: Prisma.InventoryBatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBatchPayload>
          }
          createMany: {
            args: Prisma.InventoryBatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryBatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBatchPayload>
          }
          update: {
            args: Prisma.InventoryBatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBatchPayload>
          }
          deleteMany: {
            args: Prisma.InventoryBatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryBatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryBatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryBatchPayload>
          }
          aggregate: {
            args: Prisma.InventoryBatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryBatch>
          }
          groupBy: {
            args: Prisma.InventoryBatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryBatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryBatchCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryBatchCountAggregateOutputType> | number
          }
        }
      }
      InventoryTransaction: {
        payload: Prisma.$InventoryTransactionPayload<ExtArgs>
        fields: Prisma.InventoryTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          findFirst: {
            args: Prisma.InventoryTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          findMany: {
            args: Prisma.InventoryTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>[]
          }
          create: {
            args: Prisma.InventoryTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          createMany: {
            args: Prisma.InventoryTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          update: {
            args: Prisma.InventoryTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          deleteMany: {
            args: Prisma.InventoryTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          aggregate: {
            args: Prisma.InventoryTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryTransaction>
          }
          groupBy: {
            args: Prisma.InventoryTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryTransactionCountAggregateOutputType> | number
          }
        }
      }
      Requisition: {
        payload: Prisma.$RequisitionPayload<ExtArgs>
        fields: Prisma.RequisitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequisitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequisitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionPayload>
          }
          findFirst: {
            args: Prisma.RequisitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequisitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionPayload>
          }
          findMany: {
            args: Prisma.RequisitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionPayload>[]
          }
          create: {
            args: Prisma.RequisitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionPayload>
          }
          createMany: {
            args: Prisma.RequisitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RequisitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionPayload>
          }
          update: {
            args: Prisma.RequisitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionPayload>
          }
          deleteMany: {
            args: Prisma.RequisitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequisitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RequisitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionPayload>
          }
          aggregate: {
            args: Prisma.RequisitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequisition>
          }
          groupBy: {
            args: Prisma.RequisitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequisitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequisitionCountArgs<ExtArgs>
            result: $Utils.Optional<RequisitionCountAggregateOutputType> | number
          }
        }
      }
      RequisitionItem: {
        payload: Prisma.$RequisitionItemPayload<ExtArgs>
        fields: Prisma.RequisitionItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequisitionItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequisitionItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionItemPayload>
          }
          findFirst: {
            args: Prisma.RequisitionItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequisitionItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionItemPayload>
          }
          findMany: {
            args: Prisma.RequisitionItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionItemPayload>[]
          }
          create: {
            args: Prisma.RequisitionItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionItemPayload>
          }
          createMany: {
            args: Prisma.RequisitionItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RequisitionItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionItemPayload>
          }
          update: {
            args: Prisma.RequisitionItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionItemPayload>
          }
          deleteMany: {
            args: Prisma.RequisitionItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequisitionItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RequisitionItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequisitionItemPayload>
          }
          aggregate: {
            args: Prisma.RequisitionItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequisitionItem>
          }
          groupBy: {
            args: Prisma.RequisitionItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequisitionItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequisitionItemCountArgs<ExtArgs>
            result: $Utils.Optional<RequisitionItemCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OfficeCountOutputType
   */

  export type OfficeCountOutputType = {
    users: number
    inventoryBatches: number
    inventoryTransactions: number
    requisitions: number
  }

  export type OfficeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OfficeCountOutputTypeCountUsersArgs
    inventoryBatches?: boolean | OfficeCountOutputTypeCountInventoryBatchesArgs
    inventoryTransactions?: boolean | OfficeCountOutputTypeCountInventoryTransactionsArgs
    requisitions?: boolean | OfficeCountOutputTypeCountRequisitionsArgs
  }

  // Custom InputTypes
  /**
   * OfficeCountOutputType without action
   */
  export type OfficeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficeCountOutputType
     */
    select?: OfficeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfficeCountOutputType without action
   */
  export type OfficeCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OfficeCountOutputType without action
   */
  export type OfficeCountOutputTypeCountInventoryBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryBatchWhereInput
  }

  /**
   * OfficeCountOutputType without action
   */
  export type OfficeCountOutputTypeCountInventoryTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionWhereInput
  }

  /**
   * OfficeCountOutputType without action
   */
  export type OfficeCountOutputTypeCountRequisitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequisitionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    requisitions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requisitions?: boolean | UserCountOutputTypeCountRequisitionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequisitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequisitionWhereInput
  }


  /**
   * Count Type InventoryItemCountOutputType
   */

  export type InventoryItemCountOutputType = {
    batches: number
    transactions: number
    requisitionItems: number
  }

  export type InventoryItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batches?: boolean | InventoryItemCountOutputTypeCountBatchesArgs
    transactions?: boolean | InventoryItemCountOutputTypeCountTransactionsArgs
    requisitionItems?: boolean | InventoryItemCountOutputTypeCountRequisitionItemsArgs
  }

  // Custom InputTypes
  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItemCountOutputType
     */
    select?: InventoryItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeCountBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryBatchWhereInput
  }

  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionWhereInput
  }

  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeCountRequisitionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequisitionItemWhereInput
  }


  /**
   * Count Type InventoryBatchCountOutputType
   */

  export type InventoryBatchCountOutputType = {
    transactions: number
  }

  export type InventoryBatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | InventoryBatchCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * InventoryBatchCountOutputType without action
   */
  export type InventoryBatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBatchCountOutputType
     */
    select?: InventoryBatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryBatchCountOutputType without action
   */
  export type InventoryBatchCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionWhereInput
  }


  /**
   * Count Type RequisitionCountOutputType
   */

  export type RequisitionCountOutputType = {
    items: number
  }

  export type RequisitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | RequisitionCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * RequisitionCountOutputType without action
   */
  export type RequisitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequisitionCountOutputType
     */
    select?: RequisitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RequisitionCountOutputType without action
   */
  export type RequisitionCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequisitionItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Office
   */

  export type AggregateOffice = {
    _count: OfficeCountAggregateOutputType | null
    _avg: OfficeAvgAggregateOutputType | null
    _sum: OfficeSumAggregateOutputType | null
    _min: OfficeMinAggregateOutputType | null
    _max: OfficeMaxAggregateOutputType | null
  }

  export type OfficeAvgAggregateOutputType = {
    id: number | null
  }

  export type OfficeSumAggregateOutputType = {
    id: number | null
  }

  export type OfficeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfficeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfficeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OfficeAvgAggregateInputType = {
    id?: true
  }

  export type OfficeSumAggregateInputType = {
    id?: true
  }

  export type OfficeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfficeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfficeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OfficeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Office to aggregate.
     */
    where?: OfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offices to fetch.
     */
    orderBy?: OfficeOrderByWithRelationInput | OfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offices
    **/
    _count?: true | OfficeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfficeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfficeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfficeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfficeMaxAggregateInputType
  }

  export type GetOfficeAggregateType<T extends OfficeAggregateArgs> = {
        [P in keyof T & keyof AggregateOffice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffice[P]>
      : GetScalarType<T[P], AggregateOffice[P]>
  }




  export type OfficeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficeWhereInput
    orderBy?: OfficeOrderByWithAggregationInput | OfficeOrderByWithAggregationInput[]
    by: OfficeScalarFieldEnum[] | OfficeScalarFieldEnum
    having?: OfficeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfficeCountAggregateInputType | true
    _avg?: OfficeAvgAggregateInputType
    _sum?: OfficeSumAggregateInputType
    _min?: OfficeMinAggregateInputType
    _max?: OfficeMaxAggregateInputType
  }

  export type OfficeGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: OfficeCountAggregateOutputType | null
    _avg: OfficeAvgAggregateOutputType | null
    _sum: OfficeSumAggregateOutputType | null
    _min: OfficeMinAggregateOutputType | null
    _max: OfficeMaxAggregateOutputType | null
  }

  type GetOfficeGroupByPayload<T extends OfficeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfficeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfficeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfficeGroupByOutputType[P]>
            : GetScalarType<T[P], OfficeGroupByOutputType[P]>
        }
      >
    >


  export type OfficeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Office$usersArgs<ExtArgs>
    inventoryBatches?: boolean | Office$inventoryBatchesArgs<ExtArgs>
    inventoryTransactions?: boolean | Office$inventoryTransactionsArgs<ExtArgs>
    requisitions?: boolean | Office$requisitionsArgs<ExtArgs>
    _count?: boolean | OfficeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["office"]>


  export type OfficeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OfficeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Office$usersArgs<ExtArgs>
    inventoryBatches?: boolean | Office$inventoryBatchesArgs<ExtArgs>
    inventoryTransactions?: boolean | Office$inventoryTransactionsArgs<ExtArgs>
    requisitions?: boolean | Office$requisitionsArgs<ExtArgs>
    _count?: boolean | OfficeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OfficePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Office"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      inventoryBatches: Prisma.$InventoryBatchPayload<ExtArgs>[]
      inventoryTransactions: Prisma.$InventoryTransactionPayload<ExtArgs>[]
      requisitions: Prisma.$RequisitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["office"]>
    composites: {}
  }

  type OfficeGetPayload<S extends boolean | null | undefined | OfficeDefaultArgs> = $Result.GetResult<Prisma.$OfficePayload, S>

  type OfficeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OfficeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OfficeCountAggregateInputType | true
    }

  export interface OfficeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Office'], meta: { name: 'Office' } }
    /**
     * Find zero or one Office that matches the filter.
     * @param {OfficeFindUniqueArgs} args - Arguments to find a Office
     * @example
     * // Get one Office
     * const office = await prisma.office.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfficeFindUniqueArgs>(args: SelectSubset<T, OfficeFindUniqueArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Office that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OfficeFindUniqueOrThrowArgs} args - Arguments to find a Office
     * @example
     * // Get one Office
     * const office = await prisma.office.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfficeFindUniqueOrThrowArgs>(args: SelectSubset<T, OfficeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Office that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeFindFirstArgs} args - Arguments to find a Office
     * @example
     * // Get one Office
     * const office = await prisma.office.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfficeFindFirstArgs>(args?: SelectSubset<T, OfficeFindFirstArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Office that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeFindFirstOrThrowArgs} args - Arguments to find a Office
     * @example
     * // Get one Office
     * const office = await prisma.office.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfficeFindFirstOrThrowArgs>(args?: SelectSubset<T, OfficeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Offices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offices
     * const offices = await prisma.office.findMany()
     * 
     * // Get first 10 Offices
     * const offices = await prisma.office.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const officeWithIdOnly = await prisma.office.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfficeFindManyArgs>(args?: SelectSubset<T, OfficeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Office.
     * @param {OfficeCreateArgs} args - Arguments to create a Office.
     * @example
     * // Create one Office
     * const Office = await prisma.office.create({
     *   data: {
     *     // ... data to create a Office
     *   }
     * })
     * 
     */
    create<T extends OfficeCreateArgs>(args: SelectSubset<T, OfficeCreateArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Offices.
     * @param {OfficeCreateManyArgs} args - Arguments to create many Offices.
     * @example
     * // Create many Offices
     * const office = await prisma.office.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfficeCreateManyArgs>(args?: SelectSubset<T, OfficeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Office.
     * @param {OfficeDeleteArgs} args - Arguments to delete one Office.
     * @example
     * // Delete one Office
     * const Office = await prisma.office.delete({
     *   where: {
     *     // ... filter to delete one Office
     *   }
     * })
     * 
     */
    delete<T extends OfficeDeleteArgs>(args: SelectSubset<T, OfficeDeleteArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Office.
     * @param {OfficeUpdateArgs} args - Arguments to update one Office.
     * @example
     * // Update one Office
     * const office = await prisma.office.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfficeUpdateArgs>(args: SelectSubset<T, OfficeUpdateArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Offices.
     * @param {OfficeDeleteManyArgs} args - Arguments to filter Offices to delete.
     * @example
     * // Delete a few Offices
     * const { count } = await prisma.office.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfficeDeleteManyArgs>(args?: SelectSubset<T, OfficeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offices
     * const office = await prisma.office.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfficeUpdateManyArgs>(args: SelectSubset<T, OfficeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Office.
     * @param {OfficeUpsertArgs} args - Arguments to update or create a Office.
     * @example
     * // Update or create a Office
     * const office = await prisma.office.upsert({
     *   create: {
     *     // ... data to create a Office
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Office we want to update
     *   }
     * })
     */
    upsert<T extends OfficeUpsertArgs>(args: SelectSubset<T, OfficeUpsertArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Offices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeCountArgs} args - Arguments to filter Offices to count.
     * @example
     * // Count the number of Offices
     * const count = await prisma.office.count({
     *   where: {
     *     // ... the filter for the Offices we want to count
     *   }
     * })
    **/
    count<T extends OfficeCountArgs>(
      args?: Subset<T, OfficeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfficeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Office.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfficeAggregateArgs>(args: Subset<T, OfficeAggregateArgs>): Prisma.PrismaPromise<GetOfficeAggregateType<T>>

    /**
     * Group by Office.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfficeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfficeGroupByArgs['orderBy'] }
        : { orderBy?: OfficeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfficeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Office model
   */
  readonly fields: OfficeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Office.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfficeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Office$usersArgs<ExtArgs> = {}>(args?: Subset<T, Office$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    inventoryBatches<T extends Office$inventoryBatchesArgs<ExtArgs> = {}>(args?: Subset<T, Office$inventoryBatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryBatchPayload<ExtArgs>, T, "findMany"> | Null>
    inventoryTransactions<T extends Office$inventoryTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Office$inventoryTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findMany"> | Null>
    requisitions<T extends Office$requisitionsArgs<ExtArgs> = {}>(args?: Subset<T, Office$requisitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequisitionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Office model
   */ 
  interface OfficeFieldRefs {
    readonly id: FieldRef<"Office", 'Int'>
    readonly name: FieldRef<"Office", 'String'>
    readonly description: FieldRef<"Office", 'String'>
    readonly createdAt: FieldRef<"Office", 'DateTime'>
    readonly updatedAt: FieldRef<"Office", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Office findUnique
   */
  export type OfficeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * Filter, which Office to fetch.
     */
    where: OfficeWhereUniqueInput
  }

  /**
   * Office findUniqueOrThrow
   */
  export type OfficeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * Filter, which Office to fetch.
     */
    where: OfficeWhereUniqueInput
  }

  /**
   * Office findFirst
   */
  export type OfficeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * Filter, which Office to fetch.
     */
    where?: OfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offices to fetch.
     */
    orderBy?: OfficeOrderByWithRelationInput | OfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offices.
     */
    cursor?: OfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offices.
     */
    distinct?: OfficeScalarFieldEnum | OfficeScalarFieldEnum[]
  }

  /**
   * Office findFirstOrThrow
   */
  export type OfficeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * Filter, which Office to fetch.
     */
    where?: OfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offices to fetch.
     */
    orderBy?: OfficeOrderByWithRelationInput | OfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offices.
     */
    cursor?: OfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offices.
     */
    distinct?: OfficeScalarFieldEnum | OfficeScalarFieldEnum[]
  }

  /**
   * Office findMany
   */
  export type OfficeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * Filter, which Offices to fetch.
     */
    where?: OfficeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offices to fetch.
     */
    orderBy?: OfficeOrderByWithRelationInput | OfficeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offices.
     */
    cursor?: OfficeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offices.
     */
    skip?: number
    distinct?: OfficeScalarFieldEnum | OfficeScalarFieldEnum[]
  }

  /**
   * Office create
   */
  export type OfficeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * The data needed to create a Office.
     */
    data: XOR<OfficeCreateInput, OfficeUncheckedCreateInput>
  }

  /**
   * Office createMany
   */
  export type OfficeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offices.
     */
    data: OfficeCreateManyInput | OfficeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Office update
   */
  export type OfficeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * The data needed to update a Office.
     */
    data: XOR<OfficeUpdateInput, OfficeUncheckedUpdateInput>
    /**
     * Choose, which Office to update.
     */
    where: OfficeWhereUniqueInput
  }

  /**
   * Office updateMany
   */
  export type OfficeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offices.
     */
    data: XOR<OfficeUpdateManyMutationInput, OfficeUncheckedUpdateManyInput>
    /**
     * Filter which Offices to update
     */
    where?: OfficeWhereInput
  }

  /**
   * Office upsert
   */
  export type OfficeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * The filter to search for the Office to update in case it exists.
     */
    where: OfficeWhereUniqueInput
    /**
     * In case the Office found by the `where` argument doesn't exist, create a new Office with this data.
     */
    create: XOR<OfficeCreateInput, OfficeUncheckedCreateInput>
    /**
     * In case the Office was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfficeUpdateInput, OfficeUncheckedUpdateInput>
  }

  /**
   * Office delete
   */
  export type OfficeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    /**
     * Filter which Office to delete.
     */
    where: OfficeWhereUniqueInput
  }

  /**
   * Office deleteMany
   */
  export type OfficeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offices to delete
     */
    where?: OfficeWhereInput
  }

  /**
   * Office.users
   */
  export type Office$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Office.inventoryBatches
   */
  export type Office$inventoryBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBatch
     */
    select?: InventoryBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBatchInclude<ExtArgs> | null
    where?: InventoryBatchWhereInput
    orderBy?: InventoryBatchOrderByWithRelationInput | InventoryBatchOrderByWithRelationInput[]
    cursor?: InventoryBatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryBatchScalarFieldEnum | InventoryBatchScalarFieldEnum[]
  }

  /**
   * Office.inventoryTransactions
   */
  export type Office$inventoryTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    where?: InventoryTransactionWhereInput
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    cursor?: InventoryTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * Office.requisitions
   */
  export type Office$requisitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requisition
     */
    select?: RequisitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionInclude<ExtArgs> | null
    where?: RequisitionWhereInput
    orderBy?: RequisitionOrderByWithRelationInput | RequisitionOrderByWithRelationInput[]
    cursor?: RequisitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequisitionScalarFieldEnum | RequisitionScalarFieldEnum[]
  }

  /**
   * Office without action
   */
  export type OfficeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    officeId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    officeId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    officeId: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    officeId: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    isAdmin: number
    officeId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    officeId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    officeId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isAdmin?: true
    officeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isAdmin?: true
    officeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    isAdmin?: true
    officeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    isAdmin: boolean
    officeId: number | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    officeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    office?: boolean | User$officeArgs<ExtArgs>
    requisitions?: boolean | User$requisitionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    officeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    office?: boolean | User$officeArgs<ExtArgs>
    requisitions?: boolean | User$requisitionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      office: Prisma.$OfficePayload<ExtArgs> | null
      requisitions: Prisma.$RequisitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      isAdmin: boolean
      officeId: number | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    office<T extends User$officeArgs<ExtArgs> = {}>(args?: Subset<T, User$officeArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    requisitions<T extends User$requisitionsArgs<ExtArgs> = {}>(args?: Subset<T, User$requisitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequisitionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly officeId: FieldRef<"User", 'Int'>
    readonly status: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.office
   */
  export type User$officeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    where?: OfficeWhereInput
  }

  /**
   * User.requisitions
   */
  export type User$requisitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requisition
     */
    select?: RequisitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionInclude<ExtArgs> | null
    where?: RequisitionWhereInput
    orderBy?: RequisitionOrderByWithRelationInput | RequisitionOrderByWithRelationInput[]
    cursor?: RequisitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequisitionScalarFieldEnum | RequisitionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model InventoryItem
   */

  export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  export type InventoryItemAvgAggregateOutputType = {
    id: number | null
    minStock: number | null
  }

  export type InventoryItemSumAggregateOutputType = {
    id: number | null
    minStock: number | null
  }

  export type InventoryItemMinAggregateOutputType = {
    id: number | null
    sku: string | null
    name: string | null
    location: string | null
    minStock: number | null
    unit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryItemMaxAggregateOutputType = {
    id: number | null
    sku: string | null
    name: string | null
    location: string | null
    minStock: number | null
    unit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryItemCountAggregateOutputType = {
    id: number
    sku: number
    name: number
    location: number
    minStock: number
    unit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryItemAvgAggregateInputType = {
    id?: true
    minStock?: true
  }

  export type InventoryItemSumAggregateInputType = {
    id?: true
    minStock?: true
  }

  export type InventoryItemMinAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    location?: true
    minStock?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryItemMaxAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    location?: true
    minStock?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryItemCountAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    location?: true
    minStock?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItem to aggregate.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryItems
    **/
    _count?: true | InventoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryItemMaxAggregateInputType
  }

  export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryItem[P]>
      : GetScalarType<T[P], AggregateInventoryItem[P]>
  }




  export type InventoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithAggregationInput | InventoryItemOrderByWithAggregationInput[]
    by: InventoryItemScalarFieldEnum[] | InventoryItemScalarFieldEnum
    having?: InventoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryItemCountAggregateInputType | true
    _avg?: InventoryItemAvgAggregateInputType
    _sum?: InventoryItemSumAggregateInputType
    _min?: InventoryItemMinAggregateInputType
    _max?: InventoryItemMaxAggregateInputType
  }

  export type InventoryItemGroupByOutputType = {
    id: number
    sku: string
    name: string
    location: string | null
    minStock: number
    unit: string
    createdAt: Date
    updatedAt: Date
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
        }
      >
    >


  export type InventoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    location?: boolean
    minStock?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batches?: boolean | InventoryItem$batchesArgs<ExtArgs>
    transactions?: boolean | InventoryItem$transactionsArgs<ExtArgs>
    requisitionItems?: boolean | InventoryItem$requisitionItemsArgs<ExtArgs>
    _count?: boolean | InventoryItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>


  export type InventoryItemSelectScalar = {
    id?: boolean
    sku?: boolean
    name?: boolean
    location?: boolean
    minStock?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batches?: boolean | InventoryItem$batchesArgs<ExtArgs>
    transactions?: boolean | InventoryItem$transactionsArgs<ExtArgs>
    requisitionItems?: boolean | InventoryItem$requisitionItemsArgs<ExtArgs>
    _count?: boolean | InventoryItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InventoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryItem"
    objects: {
      batches: Prisma.$InventoryBatchPayload<ExtArgs>[]
      transactions: Prisma.$InventoryTransactionPayload<ExtArgs>[]
      requisitionItems: Prisma.$RequisitionItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sku: string
      name: string
      location: string | null
      minStock: number
      unit: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventoryItem"]>
    composites: {}
  }

  type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = $Result.GetResult<Prisma.$InventoryItemPayload, S>

  type InventoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryItemCountAggregateInputType | true
    }

  export interface InventoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'], meta: { name: 'InventoryItem' } }
    /**
     * Find zero or one InventoryItem that matches the filter.
     * @param {InventoryItemFindUniqueArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryItemFindUniqueArgs>(args: SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryItemFindUniqueOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryItemFindFirstArgs>(args?: SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany()
     * 
     * // Get first 10 InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryItemFindManyArgs>(args?: SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryItem.
     * @param {InventoryItemCreateArgs} args - Arguments to create a InventoryItem.
     * @example
     * // Create one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.create({
     *   data: {
     *     // ... data to create a InventoryItem
     *   }
     * })
     * 
     */
    create<T extends InventoryItemCreateArgs>(args: SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryItems.
     * @param {InventoryItemCreateManyArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryItemCreateManyArgs>(args?: SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryItem.
     * @param {InventoryItemDeleteArgs} args - Arguments to delete one InventoryItem.
     * @example
     * // Delete one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.delete({
     *   where: {
     *     // ... filter to delete one InventoryItem
     *   }
     * })
     * 
     */
    delete<T extends InventoryItemDeleteArgs>(args: SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryItem.
     * @param {InventoryItemUpdateArgs} args - Arguments to update one InventoryItem.
     * @example
     * // Update one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryItemUpdateArgs>(args: SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryItems.
     * @param {InventoryItemDeleteManyArgs} args - Arguments to filter InventoryItems to delete.
     * @example
     * // Delete a few InventoryItems
     * const { count } = await prisma.inventoryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryItemUpdateManyArgs>(args: SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryItem.
     * @param {InventoryItemUpsertArgs} args - Arguments to update or create a InventoryItem.
     * @example
     * // Update or create a InventoryItem
     * const inventoryItem = await prisma.inventoryItem.upsert({
     *   create: {
     *     // ... data to create a InventoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryItem we want to update
     *   }
     * })
     */
    upsert<T extends InventoryItemUpsertArgs>(args: SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemCountArgs} args - Arguments to filter InventoryItems to count.
     * @example
     * // Count the number of InventoryItems
     * const count = await prisma.inventoryItem.count({
     *   where: {
     *     // ... the filter for the InventoryItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryItemCountArgs>(
      args?: Subset<T, InventoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryItemAggregateArgs>(args: Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>

    /**
     * Group by InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryItemGroupByArgs['orderBy'] }
        : { orderBy?: InventoryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryItem model
   */
  readonly fields: InventoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    batches<T extends InventoryItem$batchesArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItem$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryBatchPayload<ExtArgs>, T, "findMany"> | Null>
    transactions<T extends InventoryItem$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItem$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findMany"> | Null>
    requisitionItems<T extends InventoryItem$requisitionItemsArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItem$requisitionItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequisitionItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryItem model
   */ 
  interface InventoryItemFieldRefs {
    readonly id: FieldRef<"InventoryItem", 'Int'>
    readonly sku: FieldRef<"InventoryItem", 'String'>
    readonly name: FieldRef<"InventoryItem", 'String'>
    readonly location: FieldRef<"InventoryItem", 'String'>
    readonly minStock: FieldRef<"InventoryItem", 'Int'>
    readonly unit: FieldRef<"InventoryItem", 'String'>
    readonly createdAt: FieldRef<"InventoryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryItem findUnique
   */
  export type InventoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findUniqueOrThrow
   */
  export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findFirst
   */
  export type InventoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findFirstOrThrow
   */
  export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findMany
   */
  export type InventoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem create
   */
  export type InventoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryItem.
     */
    data: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
  }

  /**
   * InventoryItem createMany
   */
  export type InventoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryItem update
   */
  export type InventoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryItem.
     */
    data: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
    /**
     * Choose, which InventoryItem to update.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem updateMany
   */
  export type InventoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
  }

  /**
   * InventoryItem upsert
   */
  export type InventoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryItem to update in case it exists.
     */
    where: InventoryItemWhereUniqueInput
    /**
     * In case the InventoryItem found by the `where` argument doesn't exist, create a new InventoryItem with this data.
     */
    create: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
    /**
     * In case the InventoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
  }

  /**
   * InventoryItem delete
   */
  export type InventoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter which InventoryItem to delete.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem deleteMany
   */
  export type InventoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to delete
     */
    where?: InventoryItemWhereInput
  }

  /**
   * InventoryItem.batches
   */
  export type InventoryItem$batchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBatch
     */
    select?: InventoryBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBatchInclude<ExtArgs> | null
    where?: InventoryBatchWhereInput
    orderBy?: InventoryBatchOrderByWithRelationInput | InventoryBatchOrderByWithRelationInput[]
    cursor?: InventoryBatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryBatchScalarFieldEnum | InventoryBatchScalarFieldEnum[]
  }

  /**
   * InventoryItem.transactions
   */
  export type InventoryItem$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    where?: InventoryTransactionWhereInput
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    cursor?: InventoryTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryItem.requisitionItems
   */
  export type InventoryItem$requisitionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequisitionItem
     */
    select?: RequisitionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionItemInclude<ExtArgs> | null
    where?: RequisitionItemWhereInput
    orderBy?: RequisitionItemOrderByWithRelationInput | RequisitionItemOrderByWithRelationInput[]
    cursor?: RequisitionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequisitionItemScalarFieldEnum | RequisitionItemScalarFieldEnum[]
  }

  /**
   * InventoryItem without action
   */
  export type InventoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
  }


  /**
   * Model InventoryBatch
   */

  export type AggregateInventoryBatch = {
    _count: InventoryBatchCountAggregateOutputType | null
    _avg: InventoryBatchAvgAggregateOutputType | null
    _sum: InventoryBatchSumAggregateOutputType | null
    _min: InventoryBatchMinAggregateOutputType | null
    _max: InventoryBatchMaxAggregateOutputType | null
  }

  export type InventoryBatchAvgAggregateOutputType = {
    id: number | null
    inventoryItemId: number | null
    officeId: number | null
    stock: number | null
    transactionCount: number | null
    costPerUnit: Decimal | null
  }

  export type InventoryBatchSumAggregateOutputType = {
    id: number | null
    inventoryItemId: number | null
    officeId: number | null
    stock: number | null
    transactionCount: number | null
    costPerUnit: Decimal | null
  }

  export type InventoryBatchMinAggregateOutputType = {
    id: number | null
    inventoryItemId: number | null
    batchId: string | null
    brand: string | null
    supplier: string | null
    stockNumber: string | null
    expiryDate: Date | null
    officeId: number | null
    stock: number | null
    transactionCount: number | null
    ptr: string | null
    costPerUnit: Decimal | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryBatchMaxAggregateOutputType = {
    id: number | null
    inventoryItemId: number | null
    batchId: string | null
    brand: string | null
    supplier: string | null
    stockNumber: string | null
    expiryDate: Date | null
    officeId: number | null
    stock: number | null
    transactionCount: number | null
    ptr: string | null
    costPerUnit: Decimal | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryBatchCountAggregateOutputType = {
    id: number
    inventoryItemId: number
    batchId: number
    brand: number
    supplier: number
    stockNumber: number
    expiryDate: number
    officeId: number
    stock: number
    transactionCount: number
    ptr: number
    costPerUnit: number
    remarks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryBatchAvgAggregateInputType = {
    id?: true
    inventoryItemId?: true
    officeId?: true
    stock?: true
    transactionCount?: true
    costPerUnit?: true
  }

  export type InventoryBatchSumAggregateInputType = {
    id?: true
    inventoryItemId?: true
    officeId?: true
    stock?: true
    transactionCount?: true
    costPerUnit?: true
  }

  export type InventoryBatchMinAggregateInputType = {
    id?: true
    inventoryItemId?: true
    batchId?: true
    brand?: true
    supplier?: true
    stockNumber?: true
    expiryDate?: true
    officeId?: true
    stock?: true
    transactionCount?: true
    ptr?: true
    costPerUnit?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryBatchMaxAggregateInputType = {
    id?: true
    inventoryItemId?: true
    batchId?: true
    brand?: true
    supplier?: true
    stockNumber?: true
    expiryDate?: true
    officeId?: true
    stock?: true
    transactionCount?: true
    ptr?: true
    costPerUnit?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryBatchCountAggregateInputType = {
    id?: true
    inventoryItemId?: true
    batchId?: true
    brand?: true
    supplier?: true
    stockNumber?: true
    expiryDate?: true
    officeId?: true
    stock?: true
    transactionCount?: true
    ptr?: true
    costPerUnit?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryBatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryBatch to aggregate.
     */
    where?: InventoryBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryBatches to fetch.
     */
    orderBy?: InventoryBatchOrderByWithRelationInput | InventoryBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryBatches
    **/
    _count?: true | InventoryBatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryBatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryBatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryBatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryBatchMaxAggregateInputType
  }

  export type GetInventoryBatchAggregateType<T extends InventoryBatchAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryBatch[P]>
      : GetScalarType<T[P], AggregateInventoryBatch[P]>
  }




  export type InventoryBatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryBatchWhereInput
    orderBy?: InventoryBatchOrderByWithAggregationInput | InventoryBatchOrderByWithAggregationInput[]
    by: InventoryBatchScalarFieldEnum[] | InventoryBatchScalarFieldEnum
    having?: InventoryBatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryBatchCountAggregateInputType | true
    _avg?: InventoryBatchAvgAggregateInputType
    _sum?: InventoryBatchSumAggregateInputType
    _min?: InventoryBatchMinAggregateInputType
    _max?: InventoryBatchMaxAggregateInputType
  }

  export type InventoryBatchGroupByOutputType = {
    id: number
    inventoryItemId: number
    batchId: string
    brand: string | null
    supplier: string | null
    stockNumber: string | null
    expiryDate: Date | null
    officeId: number | null
    stock: number
    transactionCount: number
    ptr: string | null
    costPerUnit: Decimal | null
    remarks: string | null
    createdAt: Date
    updatedAt: Date
    _count: InventoryBatchCountAggregateOutputType | null
    _avg: InventoryBatchAvgAggregateOutputType | null
    _sum: InventoryBatchSumAggregateOutputType | null
    _min: InventoryBatchMinAggregateOutputType | null
    _max: InventoryBatchMaxAggregateOutputType | null
  }

  type GetInventoryBatchGroupByPayload<T extends InventoryBatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryBatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryBatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryBatchGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryBatchGroupByOutputType[P]>
        }
      >
    >


  export type InventoryBatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryItemId?: boolean
    batchId?: boolean
    brand?: boolean
    supplier?: boolean
    stockNumber?: boolean
    expiryDate?: boolean
    officeId?: boolean
    stock?: boolean
    transactionCount?: boolean
    ptr?: boolean
    costPerUnit?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
    office?: boolean | InventoryBatch$officeArgs<ExtArgs>
    transactions?: boolean | InventoryBatch$transactionsArgs<ExtArgs>
    _count?: boolean | InventoryBatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryBatch"]>


  export type InventoryBatchSelectScalar = {
    id?: boolean
    inventoryItemId?: boolean
    batchId?: boolean
    brand?: boolean
    supplier?: boolean
    stockNumber?: boolean
    expiryDate?: boolean
    officeId?: boolean
    stock?: boolean
    transactionCount?: boolean
    ptr?: boolean
    costPerUnit?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryBatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
    office?: boolean | InventoryBatch$officeArgs<ExtArgs>
    transactions?: boolean | InventoryBatch$transactionsArgs<ExtArgs>
    _count?: boolean | InventoryBatchCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InventoryBatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryBatch"
    objects: {
      inventoryItem: Prisma.$InventoryItemPayload<ExtArgs>
      office: Prisma.$OfficePayload<ExtArgs> | null
      transactions: Prisma.$InventoryTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inventoryItemId: number
      batchId: string
      brand: string | null
      supplier: string | null
      stockNumber: string | null
      expiryDate: Date | null
      officeId: number | null
      stock: number
      transactionCount: number
      ptr: string | null
      costPerUnit: Prisma.Decimal | null
      remarks: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventoryBatch"]>
    composites: {}
  }

  type InventoryBatchGetPayload<S extends boolean | null | undefined | InventoryBatchDefaultArgs> = $Result.GetResult<Prisma.$InventoryBatchPayload, S>

  type InventoryBatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryBatchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryBatchCountAggregateInputType | true
    }

  export interface InventoryBatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryBatch'], meta: { name: 'InventoryBatch' } }
    /**
     * Find zero or one InventoryBatch that matches the filter.
     * @param {InventoryBatchFindUniqueArgs} args - Arguments to find a InventoryBatch
     * @example
     * // Get one InventoryBatch
     * const inventoryBatch = await prisma.inventoryBatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryBatchFindUniqueArgs>(args: SelectSubset<T, InventoryBatchFindUniqueArgs<ExtArgs>>): Prisma__InventoryBatchClient<$Result.GetResult<Prisma.$InventoryBatchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryBatch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryBatchFindUniqueOrThrowArgs} args - Arguments to find a InventoryBatch
     * @example
     * // Get one InventoryBatch
     * const inventoryBatch = await prisma.inventoryBatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryBatchFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryBatchClient<$Result.GetResult<Prisma.$InventoryBatchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryBatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBatchFindFirstArgs} args - Arguments to find a InventoryBatch
     * @example
     * // Get one InventoryBatch
     * const inventoryBatch = await prisma.inventoryBatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryBatchFindFirstArgs>(args?: SelectSubset<T, InventoryBatchFindFirstArgs<ExtArgs>>): Prisma__InventoryBatchClient<$Result.GetResult<Prisma.$InventoryBatchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryBatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBatchFindFirstOrThrowArgs} args - Arguments to find a InventoryBatch
     * @example
     * // Get one InventoryBatch
     * const inventoryBatch = await prisma.inventoryBatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryBatchFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryBatchClient<$Result.GetResult<Prisma.$InventoryBatchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryBatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryBatches
     * const inventoryBatches = await prisma.inventoryBatch.findMany()
     * 
     * // Get first 10 InventoryBatches
     * const inventoryBatches = await prisma.inventoryBatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryBatchWithIdOnly = await prisma.inventoryBatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryBatchFindManyArgs>(args?: SelectSubset<T, InventoryBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryBatchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryBatch.
     * @param {InventoryBatchCreateArgs} args - Arguments to create a InventoryBatch.
     * @example
     * // Create one InventoryBatch
     * const InventoryBatch = await prisma.inventoryBatch.create({
     *   data: {
     *     // ... data to create a InventoryBatch
     *   }
     * })
     * 
     */
    create<T extends InventoryBatchCreateArgs>(args: SelectSubset<T, InventoryBatchCreateArgs<ExtArgs>>): Prisma__InventoryBatchClient<$Result.GetResult<Prisma.$InventoryBatchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryBatches.
     * @param {InventoryBatchCreateManyArgs} args - Arguments to create many InventoryBatches.
     * @example
     * // Create many InventoryBatches
     * const inventoryBatch = await prisma.inventoryBatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryBatchCreateManyArgs>(args?: SelectSubset<T, InventoryBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryBatch.
     * @param {InventoryBatchDeleteArgs} args - Arguments to delete one InventoryBatch.
     * @example
     * // Delete one InventoryBatch
     * const InventoryBatch = await prisma.inventoryBatch.delete({
     *   where: {
     *     // ... filter to delete one InventoryBatch
     *   }
     * })
     * 
     */
    delete<T extends InventoryBatchDeleteArgs>(args: SelectSubset<T, InventoryBatchDeleteArgs<ExtArgs>>): Prisma__InventoryBatchClient<$Result.GetResult<Prisma.$InventoryBatchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryBatch.
     * @param {InventoryBatchUpdateArgs} args - Arguments to update one InventoryBatch.
     * @example
     * // Update one InventoryBatch
     * const inventoryBatch = await prisma.inventoryBatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryBatchUpdateArgs>(args: SelectSubset<T, InventoryBatchUpdateArgs<ExtArgs>>): Prisma__InventoryBatchClient<$Result.GetResult<Prisma.$InventoryBatchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryBatches.
     * @param {InventoryBatchDeleteManyArgs} args - Arguments to filter InventoryBatches to delete.
     * @example
     * // Delete a few InventoryBatches
     * const { count } = await prisma.inventoryBatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryBatchDeleteManyArgs>(args?: SelectSubset<T, InventoryBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryBatches
     * const inventoryBatch = await prisma.inventoryBatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryBatchUpdateManyArgs>(args: SelectSubset<T, InventoryBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryBatch.
     * @param {InventoryBatchUpsertArgs} args - Arguments to update or create a InventoryBatch.
     * @example
     * // Update or create a InventoryBatch
     * const inventoryBatch = await prisma.inventoryBatch.upsert({
     *   create: {
     *     // ... data to create a InventoryBatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryBatch we want to update
     *   }
     * })
     */
    upsert<T extends InventoryBatchUpsertArgs>(args: SelectSubset<T, InventoryBatchUpsertArgs<ExtArgs>>): Prisma__InventoryBatchClient<$Result.GetResult<Prisma.$InventoryBatchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBatchCountArgs} args - Arguments to filter InventoryBatches to count.
     * @example
     * // Count the number of InventoryBatches
     * const count = await prisma.inventoryBatch.count({
     *   where: {
     *     // ... the filter for the InventoryBatches we want to count
     *   }
     * })
    **/
    count<T extends InventoryBatchCountArgs>(
      args?: Subset<T, InventoryBatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryBatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryBatchAggregateArgs>(args: Subset<T, InventoryBatchAggregateArgs>): Prisma.PrismaPromise<GetInventoryBatchAggregateType<T>>

    /**
     * Group by InventoryBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryBatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryBatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryBatchGroupByArgs['orderBy'] }
        : { orderBy?: InventoryBatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryBatch model
   */
  readonly fields: InventoryBatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryBatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryBatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventoryItem<T extends InventoryItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItemDefaultArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    office<T extends InventoryBatch$officeArgs<ExtArgs> = {}>(args?: Subset<T, InventoryBatch$officeArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    transactions<T extends InventoryBatch$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, InventoryBatch$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryBatch model
   */ 
  interface InventoryBatchFieldRefs {
    readonly id: FieldRef<"InventoryBatch", 'Int'>
    readonly inventoryItemId: FieldRef<"InventoryBatch", 'Int'>
    readonly batchId: FieldRef<"InventoryBatch", 'String'>
    readonly brand: FieldRef<"InventoryBatch", 'String'>
    readonly supplier: FieldRef<"InventoryBatch", 'String'>
    readonly stockNumber: FieldRef<"InventoryBatch", 'String'>
    readonly expiryDate: FieldRef<"InventoryBatch", 'DateTime'>
    readonly officeId: FieldRef<"InventoryBatch", 'Int'>
    readonly stock: FieldRef<"InventoryBatch", 'Int'>
    readonly transactionCount: FieldRef<"InventoryBatch", 'Int'>
    readonly ptr: FieldRef<"InventoryBatch", 'String'>
    readonly costPerUnit: FieldRef<"InventoryBatch", 'Decimal'>
    readonly remarks: FieldRef<"InventoryBatch", 'String'>
    readonly createdAt: FieldRef<"InventoryBatch", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryBatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryBatch findUnique
   */
  export type InventoryBatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBatch
     */
    select?: InventoryBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBatchInclude<ExtArgs> | null
    /**
     * Filter, which InventoryBatch to fetch.
     */
    where: InventoryBatchWhereUniqueInput
  }

  /**
   * InventoryBatch findUniqueOrThrow
   */
  export type InventoryBatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBatch
     */
    select?: InventoryBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBatchInclude<ExtArgs> | null
    /**
     * Filter, which InventoryBatch to fetch.
     */
    where: InventoryBatchWhereUniqueInput
  }

  /**
   * InventoryBatch findFirst
   */
  export type InventoryBatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBatch
     */
    select?: InventoryBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBatchInclude<ExtArgs> | null
    /**
     * Filter, which InventoryBatch to fetch.
     */
    where?: InventoryBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryBatches to fetch.
     */
    orderBy?: InventoryBatchOrderByWithRelationInput | InventoryBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryBatches.
     */
    cursor?: InventoryBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryBatches.
     */
    distinct?: InventoryBatchScalarFieldEnum | InventoryBatchScalarFieldEnum[]
  }

  /**
   * InventoryBatch findFirstOrThrow
   */
  export type InventoryBatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBatch
     */
    select?: InventoryBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBatchInclude<ExtArgs> | null
    /**
     * Filter, which InventoryBatch to fetch.
     */
    where?: InventoryBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryBatches to fetch.
     */
    orderBy?: InventoryBatchOrderByWithRelationInput | InventoryBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryBatches.
     */
    cursor?: InventoryBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryBatches.
     */
    distinct?: InventoryBatchScalarFieldEnum | InventoryBatchScalarFieldEnum[]
  }

  /**
   * InventoryBatch findMany
   */
  export type InventoryBatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBatch
     */
    select?: InventoryBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBatchInclude<ExtArgs> | null
    /**
     * Filter, which InventoryBatches to fetch.
     */
    where?: InventoryBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryBatches to fetch.
     */
    orderBy?: InventoryBatchOrderByWithRelationInput | InventoryBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryBatches.
     */
    cursor?: InventoryBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryBatches.
     */
    skip?: number
    distinct?: InventoryBatchScalarFieldEnum | InventoryBatchScalarFieldEnum[]
  }

  /**
   * InventoryBatch create
   */
  export type InventoryBatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBatch
     */
    select?: InventoryBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBatchInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryBatch.
     */
    data: XOR<InventoryBatchCreateInput, InventoryBatchUncheckedCreateInput>
  }

  /**
   * InventoryBatch createMany
   */
  export type InventoryBatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryBatches.
     */
    data: InventoryBatchCreateManyInput | InventoryBatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryBatch update
   */
  export type InventoryBatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBatch
     */
    select?: InventoryBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBatchInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryBatch.
     */
    data: XOR<InventoryBatchUpdateInput, InventoryBatchUncheckedUpdateInput>
    /**
     * Choose, which InventoryBatch to update.
     */
    where: InventoryBatchWhereUniqueInput
  }

  /**
   * InventoryBatch updateMany
   */
  export type InventoryBatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryBatches.
     */
    data: XOR<InventoryBatchUpdateManyMutationInput, InventoryBatchUncheckedUpdateManyInput>
    /**
     * Filter which InventoryBatches to update
     */
    where?: InventoryBatchWhereInput
  }

  /**
   * InventoryBatch upsert
   */
  export type InventoryBatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBatch
     */
    select?: InventoryBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBatchInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryBatch to update in case it exists.
     */
    where: InventoryBatchWhereUniqueInput
    /**
     * In case the InventoryBatch found by the `where` argument doesn't exist, create a new InventoryBatch with this data.
     */
    create: XOR<InventoryBatchCreateInput, InventoryBatchUncheckedCreateInput>
    /**
     * In case the InventoryBatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryBatchUpdateInput, InventoryBatchUncheckedUpdateInput>
  }

  /**
   * InventoryBatch delete
   */
  export type InventoryBatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBatch
     */
    select?: InventoryBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBatchInclude<ExtArgs> | null
    /**
     * Filter which InventoryBatch to delete.
     */
    where: InventoryBatchWhereUniqueInput
  }

  /**
   * InventoryBatch deleteMany
   */
  export type InventoryBatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryBatches to delete
     */
    where?: InventoryBatchWhereInput
  }

  /**
   * InventoryBatch.office
   */
  export type InventoryBatch$officeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    where?: OfficeWhereInput
  }

  /**
   * InventoryBatch.transactions
   */
  export type InventoryBatch$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    where?: InventoryTransactionWhereInput
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    cursor?: InventoryTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryBatch without action
   */
  export type InventoryBatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBatch
     */
    select?: InventoryBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBatchInclude<ExtArgs> | null
  }


  /**
   * Model InventoryTransaction
   */

  export type AggregateInventoryTransaction = {
    _count: InventoryTransactionCountAggregateOutputType | null
    _avg: InventoryTransactionAvgAggregateOutputType | null
    _sum: InventoryTransactionSumAggregateOutputType | null
    _min: InventoryTransactionMinAggregateOutputType | null
    _max: InventoryTransactionMaxAggregateOutputType | null
  }

  export type InventoryTransactionAvgAggregateOutputType = {
    id: number | null
    inventoryItemId: number | null
    inventoryBatchId: number | null
    receiptQty: number | null
    issuanceQty: number | null
    balance: number | null
    officeId: number | null
    costPerUnit: Decimal | null
  }

  export type InventoryTransactionSumAggregateOutputType = {
    id: number | null
    inventoryItemId: number | null
    inventoryBatchId: number | null
    receiptQty: number | null
    issuanceQty: number | null
    balance: number | null
    officeId: number | null
    costPerUnit: Decimal | null
  }

  export type InventoryTransactionMinAggregateOutputType = {
    id: number | null
    inventoryItemId: number | null
    inventoryBatchId: number | null
    date: Date | null
    reference: string | null
    receiptQty: number | null
    issuanceQty: number | null
    balance: number | null
    officeId: number | null
    ptr: string | null
    costPerUnit: Decimal | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryTransactionMaxAggregateOutputType = {
    id: number | null
    inventoryItemId: number | null
    inventoryBatchId: number | null
    date: Date | null
    reference: string | null
    receiptQty: number | null
    issuanceQty: number | null
    balance: number | null
    officeId: number | null
    ptr: string | null
    costPerUnit: Decimal | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryTransactionCountAggregateOutputType = {
    id: number
    inventoryItemId: number
    inventoryBatchId: number
    date: number
    reference: number
    receiptQty: number
    issuanceQty: number
    balance: number
    officeId: number
    ptr: number
    costPerUnit: number
    remarks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryTransactionAvgAggregateInputType = {
    id?: true
    inventoryItemId?: true
    inventoryBatchId?: true
    receiptQty?: true
    issuanceQty?: true
    balance?: true
    officeId?: true
    costPerUnit?: true
  }

  export type InventoryTransactionSumAggregateInputType = {
    id?: true
    inventoryItemId?: true
    inventoryBatchId?: true
    receiptQty?: true
    issuanceQty?: true
    balance?: true
    officeId?: true
    costPerUnit?: true
  }

  export type InventoryTransactionMinAggregateInputType = {
    id?: true
    inventoryItemId?: true
    inventoryBatchId?: true
    date?: true
    reference?: true
    receiptQty?: true
    issuanceQty?: true
    balance?: true
    officeId?: true
    ptr?: true
    costPerUnit?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryTransactionMaxAggregateInputType = {
    id?: true
    inventoryItemId?: true
    inventoryBatchId?: true
    date?: true
    reference?: true
    receiptQty?: true
    issuanceQty?: true
    balance?: true
    officeId?: true
    ptr?: true
    costPerUnit?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryTransactionCountAggregateInputType = {
    id?: true
    inventoryItemId?: true
    inventoryBatchId?: true
    date?: true
    reference?: true
    receiptQty?: true
    issuanceQty?: true
    balance?: true
    officeId?: true
    ptr?: true
    costPerUnit?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTransaction to aggregate.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryTransactions
    **/
    _count?: true | InventoryTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryTransactionMaxAggregateInputType
  }

  export type GetInventoryTransactionAggregateType<T extends InventoryTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryTransaction[P]>
      : GetScalarType<T[P], AggregateInventoryTransaction[P]>
  }




  export type InventoryTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionWhereInput
    orderBy?: InventoryTransactionOrderByWithAggregationInput | InventoryTransactionOrderByWithAggregationInput[]
    by: InventoryTransactionScalarFieldEnum[] | InventoryTransactionScalarFieldEnum
    having?: InventoryTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryTransactionCountAggregateInputType | true
    _avg?: InventoryTransactionAvgAggregateInputType
    _sum?: InventoryTransactionSumAggregateInputType
    _min?: InventoryTransactionMinAggregateInputType
    _max?: InventoryTransactionMaxAggregateInputType
  }

  export type InventoryTransactionGroupByOutputType = {
    id: number
    inventoryItemId: number
    inventoryBatchId: number | null
    date: Date
    reference: string | null
    receiptQty: number
    issuanceQty: number
    balance: number
    officeId: number | null
    ptr: string | null
    costPerUnit: Decimal | null
    remarks: string | null
    createdAt: Date
    updatedAt: Date
    _count: InventoryTransactionCountAggregateOutputType | null
    _avg: InventoryTransactionAvgAggregateOutputType | null
    _sum: InventoryTransactionSumAggregateOutputType | null
    _min: InventoryTransactionMinAggregateOutputType | null
    _max: InventoryTransactionMaxAggregateOutputType | null
  }

  type GetInventoryTransactionGroupByPayload<T extends InventoryTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryTransactionGroupByOutputType[P]>
        }
      >
    >


  export type InventoryTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryItemId?: boolean
    inventoryBatchId?: boolean
    date?: boolean
    reference?: boolean
    receiptQty?: boolean
    issuanceQty?: boolean
    balance?: boolean
    officeId?: boolean
    ptr?: boolean
    costPerUnit?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
    inventoryBatch?: boolean | InventoryTransaction$inventoryBatchArgs<ExtArgs>
    office?: boolean | InventoryTransaction$officeArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryTransaction"]>


  export type InventoryTransactionSelectScalar = {
    id?: boolean
    inventoryItemId?: boolean
    inventoryBatchId?: boolean
    date?: boolean
    reference?: boolean
    receiptQty?: boolean
    issuanceQty?: boolean
    balance?: boolean
    officeId?: boolean
    ptr?: boolean
    costPerUnit?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
    inventoryBatch?: boolean | InventoryTransaction$inventoryBatchArgs<ExtArgs>
    office?: boolean | InventoryTransaction$officeArgs<ExtArgs>
  }

  export type $InventoryTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryTransaction"
    objects: {
      inventoryItem: Prisma.$InventoryItemPayload<ExtArgs>
      inventoryBatch: Prisma.$InventoryBatchPayload<ExtArgs> | null
      office: Prisma.$OfficePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inventoryItemId: number
      inventoryBatchId: number | null
      date: Date
      reference: string | null
      receiptQty: number
      issuanceQty: number
      balance: number
      officeId: number | null
      ptr: string | null
      costPerUnit: Prisma.Decimal | null
      remarks: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventoryTransaction"]>
    composites: {}
  }

  type InventoryTransactionGetPayload<S extends boolean | null | undefined | InventoryTransactionDefaultArgs> = $Result.GetResult<Prisma.$InventoryTransactionPayload, S>

  type InventoryTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryTransactionCountAggregateInputType | true
    }

  export interface InventoryTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryTransaction'], meta: { name: 'InventoryTransaction' } }
    /**
     * Find zero or one InventoryTransaction that matches the filter.
     * @param {InventoryTransactionFindUniqueArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryTransactionFindUniqueArgs>(args: SelectSubset<T, InventoryTransactionFindUniqueArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryTransactionFindUniqueOrThrowArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionFindFirstArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryTransactionFindFirstArgs>(args?: SelectSubset<T, InventoryTransactionFindFirstArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionFindFirstOrThrowArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransaction.findMany()
     * 
     * // Get first 10 InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryTransactionWithIdOnly = await prisma.inventoryTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryTransactionFindManyArgs>(args?: SelectSubset<T, InventoryTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryTransaction.
     * @param {InventoryTransactionCreateArgs} args - Arguments to create a InventoryTransaction.
     * @example
     * // Create one InventoryTransaction
     * const InventoryTransaction = await prisma.inventoryTransaction.create({
     *   data: {
     *     // ... data to create a InventoryTransaction
     *   }
     * })
     * 
     */
    create<T extends InventoryTransactionCreateArgs>(args: SelectSubset<T, InventoryTransactionCreateArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryTransactions.
     * @param {InventoryTransactionCreateManyArgs} args - Arguments to create many InventoryTransactions.
     * @example
     * // Create many InventoryTransactions
     * const inventoryTransaction = await prisma.inventoryTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryTransactionCreateManyArgs>(args?: SelectSubset<T, InventoryTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryTransaction.
     * @param {InventoryTransactionDeleteArgs} args - Arguments to delete one InventoryTransaction.
     * @example
     * // Delete one InventoryTransaction
     * const InventoryTransaction = await prisma.inventoryTransaction.delete({
     *   where: {
     *     // ... filter to delete one InventoryTransaction
     *   }
     * })
     * 
     */
    delete<T extends InventoryTransactionDeleteArgs>(args: SelectSubset<T, InventoryTransactionDeleteArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryTransaction.
     * @param {InventoryTransactionUpdateArgs} args - Arguments to update one InventoryTransaction.
     * @example
     * // Update one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryTransactionUpdateArgs>(args: SelectSubset<T, InventoryTransactionUpdateArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryTransactions.
     * @param {InventoryTransactionDeleteManyArgs} args - Arguments to filter InventoryTransactions to delete.
     * @example
     * // Delete a few InventoryTransactions
     * const { count } = await prisma.inventoryTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryTransactionDeleteManyArgs>(args?: SelectSubset<T, InventoryTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryTransactions
     * const inventoryTransaction = await prisma.inventoryTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryTransactionUpdateManyArgs>(args: SelectSubset<T, InventoryTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryTransaction.
     * @param {InventoryTransactionUpsertArgs} args - Arguments to update or create a InventoryTransaction.
     * @example
     * // Update or create a InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.upsert({
     *   create: {
     *     // ... data to create a InventoryTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryTransaction we want to update
     *   }
     * })
     */
    upsert<T extends InventoryTransactionUpsertArgs>(args: SelectSubset<T, InventoryTransactionUpsertArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionCountArgs} args - Arguments to filter InventoryTransactions to count.
     * @example
     * // Count the number of InventoryTransactions
     * const count = await prisma.inventoryTransaction.count({
     *   where: {
     *     // ... the filter for the InventoryTransactions we want to count
     *   }
     * })
    **/
    count<T extends InventoryTransactionCountArgs>(
      args?: Subset<T, InventoryTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryTransactionAggregateArgs>(args: Subset<T, InventoryTransactionAggregateArgs>): Prisma.PrismaPromise<GetInventoryTransactionAggregateType<T>>

    /**
     * Group by InventoryTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryTransactionGroupByArgs['orderBy'] }
        : { orderBy?: InventoryTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryTransaction model
   */
  readonly fields: InventoryTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventoryItem<T extends InventoryItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItemDefaultArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    inventoryBatch<T extends InventoryTransaction$inventoryBatchArgs<ExtArgs> = {}>(args?: Subset<T, InventoryTransaction$inventoryBatchArgs<ExtArgs>>): Prisma__InventoryBatchClient<$Result.GetResult<Prisma.$InventoryBatchPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    office<T extends InventoryTransaction$officeArgs<ExtArgs> = {}>(args?: Subset<T, InventoryTransaction$officeArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryTransaction model
   */ 
  interface InventoryTransactionFieldRefs {
    readonly id: FieldRef<"InventoryTransaction", 'Int'>
    readonly inventoryItemId: FieldRef<"InventoryTransaction", 'Int'>
    readonly inventoryBatchId: FieldRef<"InventoryTransaction", 'Int'>
    readonly date: FieldRef<"InventoryTransaction", 'DateTime'>
    readonly reference: FieldRef<"InventoryTransaction", 'String'>
    readonly receiptQty: FieldRef<"InventoryTransaction", 'Int'>
    readonly issuanceQty: FieldRef<"InventoryTransaction", 'Int'>
    readonly balance: FieldRef<"InventoryTransaction", 'Int'>
    readonly officeId: FieldRef<"InventoryTransaction", 'Int'>
    readonly ptr: FieldRef<"InventoryTransaction", 'String'>
    readonly costPerUnit: FieldRef<"InventoryTransaction", 'Decimal'>
    readonly remarks: FieldRef<"InventoryTransaction", 'String'>
    readonly createdAt: FieldRef<"InventoryTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryTransaction findUnique
   */
  export type InventoryTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction findUniqueOrThrow
   */
  export type InventoryTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction findFirst
   */
  export type InventoryTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTransactions.
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryTransactions.
     */
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryTransaction findFirstOrThrow
   */
  export type InventoryTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTransactions.
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryTransactions.
     */
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryTransaction findMany
   */
  export type InventoryTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransactions to fetch.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryTransactions.
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryTransaction create
   */
  export type InventoryTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryTransaction.
     */
    data: XOR<InventoryTransactionCreateInput, InventoryTransactionUncheckedCreateInput>
  }

  /**
   * InventoryTransaction createMany
   */
  export type InventoryTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryTransactions.
     */
    data: InventoryTransactionCreateManyInput | InventoryTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryTransaction update
   */
  export type InventoryTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryTransaction.
     */
    data: XOR<InventoryTransactionUpdateInput, InventoryTransactionUncheckedUpdateInput>
    /**
     * Choose, which InventoryTransaction to update.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction updateMany
   */
  export type InventoryTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryTransactions.
     */
    data: XOR<InventoryTransactionUpdateManyMutationInput, InventoryTransactionUncheckedUpdateManyInput>
    /**
     * Filter which InventoryTransactions to update
     */
    where?: InventoryTransactionWhereInput
  }

  /**
   * InventoryTransaction upsert
   */
  export type InventoryTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryTransaction to update in case it exists.
     */
    where: InventoryTransactionWhereUniqueInput
    /**
     * In case the InventoryTransaction found by the `where` argument doesn't exist, create a new InventoryTransaction with this data.
     */
    create: XOR<InventoryTransactionCreateInput, InventoryTransactionUncheckedCreateInput>
    /**
     * In case the InventoryTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryTransactionUpdateInput, InventoryTransactionUncheckedUpdateInput>
  }

  /**
   * InventoryTransaction delete
   */
  export type InventoryTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter which InventoryTransaction to delete.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction deleteMany
   */
  export type InventoryTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTransactions to delete
     */
    where?: InventoryTransactionWhereInput
  }

  /**
   * InventoryTransaction.inventoryBatch
   */
  export type InventoryTransaction$inventoryBatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryBatch
     */
    select?: InventoryBatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryBatchInclude<ExtArgs> | null
    where?: InventoryBatchWhereInput
  }

  /**
   * InventoryTransaction.office
   */
  export type InventoryTransaction$officeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    where?: OfficeWhereInput
  }

  /**
   * InventoryTransaction without action
   */
  export type InventoryTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Requisition
   */

  export type AggregateRequisition = {
    _count: RequisitionCountAggregateOutputType | null
    _avg: RequisitionAvgAggregateOutputType | null
    _sum: RequisitionSumAggregateOutputType | null
    _min: RequisitionMinAggregateOutputType | null
    _max: RequisitionMaxAggregateOutputType | null
  }

  export type RequisitionAvgAggregateOutputType = {
    id: number | null
    requestedById: number | null
    officeId: number | null
  }

  export type RequisitionSumAggregateOutputType = {
    id: number | null
    requestedById: number | null
    officeId: number | null
  }

  export type RequisitionMinAggregateOutputType = {
    id: number | null
    risNo: string | null
    responsibilityCenterCode: string | null
    requestDate: Date | null
    requestedById: number | null
    role: string | null
    officeId: number | null
    purpose: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequisitionMaxAggregateOutputType = {
    id: number | null
    risNo: string | null
    responsibilityCenterCode: string | null
    requestDate: Date | null
    requestedById: number | null
    role: string | null
    officeId: number | null
    purpose: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequisitionCountAggregateOutputType = {
    id: number
    risNo: number
    responsibilityCenterCode: number
    requestDate: number
    requestedById: number
    role: number
    officeId: number
    purpose: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RequisitionAvgAggregateInputType = {
    id?: true
    requestedById?: true
    officeId?: true
  }

  export type RequisitionSumAggregateInputType = {
    id?: true
    requestedById?: true
    officeId?: true
  }

  export type RequisitionMinAggregateInputType = {
    id?: true
    risNo?: true
    responsibilityCenterCode?: true
    requestDate?: true
    requestedById?: true
    role?: true
    officeId?: true
    purpose?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequisitionMaxAggregateInputType = {
    id?: true
    risNo?: true
    responsibilityCenterCode?: true
    requestDate?: true
    requestedById?: true
    role?: true
    officeId?: true
    purpose?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequisitionCountAggregateInputType = {
    id?: true
    risNo?: true
    responsibilityCenterCode?: true
    requestDate?: true
    requestedById?: true
    role?: true
    officeId?: true
    purpose?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RequisitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requisition to aggregate.
     */
    where?: RequisitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requisitions to fetch.
     */
    orderBy?: RequisitionOrderByWithRelationInput | RequisitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequisitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requisitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requisitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requisitions
    **/
    _count?: true | RequisitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequisitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequisitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequisitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequisitionMaxAggregateInputType
  }

  export type GetRequisitionAggregateType<T extends RequisitionAggregateArgs> = {
        [P in keyof T & keyof AggregateRequisition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequisition[P]>
      : GetScalarType<T[P], AggregateRequisition[P]>
  }




  export type RequisitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequisitionWhereInput
    orderBy?: RequisitionOrderByWithAggregationInput | RequisitionOrderByWithAggregationInput[]
    by: RequisitionScalarFieldEnum[] | RequisitionScalarFieldEnum
    having?: RequisitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequisitionCountAggregateInputType | true
    _avg?: RequisitionAvgAggregateInputType
    _sum?: RequisitionSumAggregateInputType
    _min?: RequisitionMinAggregateInputType
    _max?: RequisitionMaxAggregateInputType
  }

  export type RequisitionGroupByOutputType = {
    id: number
    risNo: string
    responsibilityCenterCode: string | null
    requestDate: Date
    requestedById: number | null
    role: string | null
    officeId: number | null
    purpose: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: RequisitionCountAggregateOutputType | null
    _avg: RequisitionAvgAggregateOutputType | null
    _sum: RequisitionSumAggregateOutputType | null
    _min: RequisitionMinAggregateOutputType | null
    _max: RequisitionMaxAggregateOutputType | null
  }

  type GetRequisitionGroupByPayload<T extends RequisitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequisitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequisitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequisitionGroupByOutputType[P]>
            : GetScalarType<T[P], RequisitionGroupByOutputType[P]>
        }
      >
    >


  export type RequisitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    risNo?: boolean
    responsibilityCenterCode?: boolean
    requestDate?: boolean
    requestedById?: boolean
    role?: boolean
    officeId?: boolean
    purpose?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestedBy?: boolean | Requisition$requestedByArgs<ExtArgs>
    office?: boolean | Requisition$officeArgs<ExtArgs>
    items?: boolean | Requisition$itemsArgs<ExtArgs>
    _count?: boolean | RequisitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requisition"]>


  export type RequisitionSelectScalar = {
    id?: boolean
    risNo?: boolean
    responsibilityCenterCode?: boolean
    requestDate?: boolean
    requestedById?: boolean
    role?: boolean
    officeId?: boolean
    purpose?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RequisitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestedBy?: boolean | Requisition$requestedByArgs<ExtArgs>
    office?: boolean | Requisition$officeArgs<ExtArgs>
    items?: boolean | Requisition$itemsArgs<ExtArgs>
    _count?: boolean | RequisitionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RequisitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Requisition"
    objects: {
      requestedBy: Prisma.$UserPayload<ExtArgs> | null
      office: Prisma.$OfficePayload<ExtArgs> | null
      items: Prisma.$RequisitionItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      risNo: string
      responsibilityCenterCode: string | null
      requestDate: Date
      requestedById: number | null
      role: string | null
      officeId: number | null
      purpose: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["requisition"]>
    composites: {}
  }

  type RequisitionGetPayload<S extends boolean | null | undefined | RequisitionDefaultArgs> = $Result.GetResult<Prisma.$RequisitionPayload, S>

  type RequisitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RequisitionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RequisitionCountAggregateInputType | true
    }

  export interface RequisitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Requisition'], meta: { name: 'Requisition' } }
    /**
     * Find zero or one Requisition that matches the filter.
     * @param {RequisitionFindUniqueArgs} args - Arguments to find a Requisition
     * @example
     * // Get one Requisition
     * const requisition = await prisma.requisition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequisitionFindUniqueArgs>(args: SelectSubset<T, RequisitionFindUniqueArgs<ExtArgs>>): Prisma__RequisitionClient<$Result.GetResult<Prisma.$RequisitionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Requisition that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RequisitionFindUniqueOrThrowArgs} args - Arguments to find a Requisition
     * @example
     * // Get one Requisition
     * const requisition = await prisma.requisition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequisitionFindUniqueOrThrowArgs>(args: SelectSubset<T, RequisitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequisitionClient<$Result.GetResult<Prisma.$RequisitionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Requisition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequisitionFindFirstArgs} args - Arguments to find a Requisition
     * @example
     * // Get one Requisition
     * const requisition = await prisma.requisition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequisitionFindFirstArgs>(args?: SelectSubset<T, RequisitionFindFirstArgs<ExtArgs>>): Prisma__RequisitionClient<$Result.GetResult<Prisma.$RequisitionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Requisition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequisitionFindFirstOrThrowArgs} args - Arguments to find a Requisition
     * @example
     * // Get one Requisition
     * const requisition = await prisma.requisition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequisitionFindFirstOrThrowArgs>(args?: SelectSubset<T, RequisitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequisitionClient<$Result.GetResult<Prisma.$RequisitionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Requisitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequisitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requisitions
     * const requisitions = await prisma.requisition.findMany()
     * 
     * // Get first 10 Requisitions
     * const requisitions = await prisma.requisition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requisitionWithIdOnly = await prisma.requisition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequisitionFindManyArgs>(args?: SelectSubset<T, RequisitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequisitionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Requisition.
     * @param {RequisitionCreateArgs} args - Arguments to create a Requisition.
     * @example
     * // Create one Requisition
     * const Requisition = await prisma.requisition.create({
     *   data: {
     *     // ... data to create a Requisition
     *   }
     * })
     * 
     */
    create<T extends RequisitionCreateArgs>(args: SelectSubset<T, RequisitionCreateArgs<ExtArgs>>): Prisma__RequisitionClient<$Result.GetResult<Prisma.$RequisitionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Requisitions.
     * @param {RequisitionCreateManyArgs} args - Arguments to create many Requisitions.
     * @example
     * // Create many Requisitions
     * const requisition = await prisma.requisition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequisitionCreateManyArgs>(args?: SelectSubset<T, RequisitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Requisition.
     * @param {RequisitionDeleteArgs} args - Arguments to delete one Requisition.
     * @example
     * // Delete one Requisition
     * const Requisition = await prisma.requisition.delete({
     *   where: {
     *     // ... filter to delete one Requisition
     *   }
     * })
     * 
     */
    delete<T extends RequisitionDeleteArgs>(args: SelectSubset<T, RequisitionDeleteArgs<ExtArgs>>): Prisma__RequisitionClient<$Result.GetResult<Prisma.$RequisitionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Requisition.
     * @param {RequisitionUpdateArgs} args - Arguments to update one Requisition.
     * @example
     * // Update one Requisition
     * const requisition = await prisma.requisition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequisitionUpdateArgs>(args: SelectSubset<T, RequisitionUpdateArgs<ExtArgs>>): Prisma__RequisitionClient<$Result.GetResult<Prisma.$RequisitionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Requisitions.
     * @param {RequisitionDeleteManyArgs} args - Arguments to filter Requisitions to delete.
     * @example
     * // Delete a few Requisitions
     * const { count } = await prisma.requisition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequisitionDeleteManyArgs>(args?: SelectSubset<T, RequisitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requisitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequisitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requisitions
     * const requisition = await prisma.requisition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequisitionUpdateManyArgs>(args: SelectSubset<T, RequisitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Requisition.
     * @param {RequisitionUpsertArgs} args - Arguments to update or create a Requisition.
     * @example
     * // Update or create a Requisition
     * const requisition = await prisma.requisition.upsert({
     *   create: {
     *     // ... data to create a Requisition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Requisition we want to update
     *   }
     * })
     */
    upsert<T extends RequisitionUpsertArgs>(args: SelectSubset<T, RequisitionUpsertArgs<ExtArgs>>): Prisma__RequisitionClient<$Result.GetResult<Prisma.$RequisitionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Requisitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequisitionCountArgs} args - Arguments to filter Requisitions to count.
     * @example
     * // Count the number of Requisitions
     * const count = await prisma.requisition.count({
     *   where: {
     *     // ... the filter for the Requisitions we want to count
     *   }
     * })
    **/
    count<T extends RequisitionCountArgs>(
      args?: Subset<T, RequisitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequisitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Requisition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequisitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequisitionAggregateArgs>(args: Subset<T, RequisitionAggregateArgs>): Prisma.PrismaPromise<GetRequisitionAggregateType<T>>

    /**
     * Group by Requisition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequisitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequisitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequisitionGroupByArgs['orderBy'] }
        : { orderBy?: RequisitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequisitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequisitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Requisition model
   */
  readonly fields: RequisitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Requisition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequisitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requestedBy<T extends Requisition$requestedByArgs<ExtArgs> = {}>(args?: Subset<T, Requisition$requestedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    office<T extends Requisition$officeArgs<ExtArgs> = {}>(args?: Subset<T, Requisition$officeArgs<ExtArgs>>): Prisma__OfficeClient<$Result.GetResult<Prisma.$OfficePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    items<T extends Requisition$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Requisition$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequisitionItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Requisition model
   */ 
  interface RequisitionFieldRefs {
    readonly id: FieldRef<"Requisition", 'Int'>
    readonly risNo: FieldRef<"Requisition", 'String'>
    readonly responsibilityCenterCode: FieldRef<"Requisition", 'String'>
    readonly requestDate: FieldRef<"Requisition", 'DateTime'>
    readonly requestedById: FieldRef<"Requisition", 'Int'>
    readonly role: FieldRef<"Requisition", 'String'>
    readonly officeId: FieldRef<"Requisition", 'Int'>
    readonly purpose: FieldRef<"Requisition", 'String'>
    readonly status: FieldRef<"Requisition", 'String'>
    readonly createdAt: FieldRef<"Requisition", 'DateTime'>
    readonly updatedAt: FieldRef<"Requisition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Requisition findUnique
   */
  export type RequisitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requisition
     */
    select?: RequisitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionInclude<ExtArgs> | null
    /**
     * Filter, which Requisition to fetch.
     */
    where: RequisitionWhereUniqueInput
  }

  /**
   * Requisition findUniqueOrThrow
   */
  export type RequisitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requisition
     */
    select?: RequisitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionInclude<ExtArgs> | null
    /**
     * Filter, which Requisition to fetch.
     */
    where: RequisitionWhereUniqueInput
  }

  /**
   * Requisition findFirst
   */
  export type RequisitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requisition
     */
    select?: RequisitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionInclude<ExtArgs> | null
    /**
     * Filter, which Requisition to fetch.
     */
    where?: RequisitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requisitions to fetch.
     */
    orderBy?: RequisitionOrderByWithRelationInput | RequisitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requisitions.
     */
    cursor?: RequisitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requisitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requisitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requisitions.
     */
    distinct?: RequisitionScalarFieldEnum | RequisitionScalarFieldEnum[]
  }

  /**
   * Requisition findFirstOrThrow
   */
  export type RequisitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requisition
     */
    select?: RequisitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionInclude<ExtArgs> | null
    /**
     * Filter, which Requisition to fetch.
     */
    where?: RequisitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requisitions to fetch.
     */
    orderBy?: RequisitionOrderByWithRelationInput | RequisitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requisitions.
     */
    cursor?: RequisitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requisitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requisitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requisitions.
     */
    distinct?: RequisitionScalarFieldEnum | RequisitionScalarFieldEnum[]
  }

  /**
   * Requisition findMany
   */
  export type RequisitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requisition
     */
    select?: RequisitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionInclude<ExtArgs> | null
    /**
     * Filter, which Requisitions to fetch.
     */
    where?: RequisitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requisitions to fetch.
     */
    orderBy?: RequisitionOrderByWithRelationInput | RequisitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requisitions.
     */
    cursor?: RequisitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requisitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requisitions.
     */
    skip?: number
    distinct?: RequisitionScalarFieldEnum | RequisitionScalarFieldEnum[]
  }

  /**
   * Requisition create
   */
  export type RequisitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requisition
     */
    select?: RequisitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionInclude<ExtArgs> | null
    /**
     * The data needed to create a Requisition.
     */
    data: XOR<RequisitionCreateInput, RequisitionUncheckedCreateInput>
  }

  /**
   * Requisition createMany
   */
  export type RequisitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requisitions.
     */
    data: RequisitionCreateManyInput | RequisitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Requisition update
   */
  export type RequisitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requisition
     */
    select?: RequisitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionInclude<ExtArgs> | null
    /**
     * The data needed to update a Requisition.
     */
    data: XOR<RequisitionUpdateInput, RequisitionUncheckedUpdateInput>
    /**
     * Choose, which Requisition to update.
     */
    where: RequisitionWhereUniqueInput
  }

  /**
   * Requisition updateMany
   */
  export type RequisitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requisitions.
     */
    data: XOR<RequisitionUpdateManyMutationInput, RequisitionUncheckedUpdateManyInput>
    /**
     * Filter which Requisitions to update
     */
    where?: RequisitionWhereInput
  }

  /**
   * Requisition upsert
   */
  export type RequisitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requisition
     */
    select?: RequisitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionInclude<ExtArgs> | null
    /**
     * The filter to search for the Requisition to update in case it exists.
     */
    where: RequisitionWhereUniqueInput
    /**
     * In case the Requisition found by the `where` argument doesn't exist, create a new Requisition with this data.
     */
    create: XOR<RequisitionCreateInput, RequisitionUncheckedCreateInput>
    /**
     * In case the Requisition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequisitionUpdateInput, RequisitionUncheckedUpdateInput>
  }

  /**
   * Requisition delete
   */
  export type RequisitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requisition
     */
    select?: RequisitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionInclude<ExtArgs> | null
    /**
     * Filter which Requisition to delete.
     */
    where: RequisitionWhereUniqueInput
  }

  /**
   * Requisition deleteMany
   */
  export type RequisitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requisitions to delete
     */
    where?: RequisitionWhereInput
  }

  /**
   * Requisition.requestedBy
   */
  export type Requisition$requestedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Requisition.office
   */
  export type Requisition$officeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Office
     */
    select?: OfficeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficeInclude<ExtArgs> | null
    where?: OfficeWhereInput
  }

  /**
   * Requisition.items
   */
  export type Requisition$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequisitionItem
     */
    select?: RequisitionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionItemInclude<ExtArgs> | null
    where?: RequisitionItemWhereInput
    orderBy?: RequisitionItemOrderByWithRelationInput | RequisitionItemOrderByWithRelationInput[]
    cursor?: RequisitionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequisitionItemScalarFieldEnum | RequisitionItemScalarFieldEnum[]
  }

  /**
   * Requisition without action
   */
  export type RequisitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requisition
     */
    select?: RequisitionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionInclude<ExtArgs> | null
  }


  /**
   * Model RequisitionItem
   */

  export type AggregateRequisitionItem = {
    _count: RequisitionItemCountAggregateOutputType | null
    _avg: RequisitionItemAvgAggregateOutputType | null
    _sum: RequisitionItemSumAggregateOutputType | null
    _min: RequisitionItemMinAggregateOutputType | null
    _max: RequisitionItemMaxAggregateOutputType | null
  }

  export type RequisitionItemAvgAggregateOutputType = {
    id: number | null
    requisitionId: number | null
    inventoryItemId: number | null
    quantity: number | null
  }

  export type RequisitionItemSumAggregateOutputType = {
    id: number | null
    requisitionId: number | null
    inventoryItemId: number | null
    quantity: number | null
  }

  export type RequisitionItemMinAggregateOutputType = {
    id: number | null
    requisitionId: number | null
    inventoryItemId: number | null
    itemName: string | null
    quantity: number | null
    unit: string | null
    stockNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequisitionItemMaxAggregateOutputType = {
    id: number | null
    requisitionId: number | null
    inventoryItemId: number | null
    itemName: string | null
    quantity: number | null
    unit: string | null
    stockNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequisitionItemCountAggregateOutputType = {
    id: number
    requisitionId: number
    inventoryItemId: number
    itemName: number
    quantity: number
    unit: number
    stockNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RequisitionItemAvgAggregateInputType = {
    id?: true
    requisitionId?: true
    inventoryItemId?: true
    quantity?: true
  }

  export type RequisitionItemSumAggregateInputType = {
    id?: true
    requisitionId?: true
    inventoryItemId?: true
    quantity?: true
  }

  export type RequisitionItemMinAggregateInputType = {
    id?: true
    requisitionId?: true
    inventoryItemId?: true
    itemName?: true
    quantity?: true
    unit?: true
    stockNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequisitionItemMaxAggregateInputType = {
    id?: true
    requisitionId?: true
    inventoryItemId?: true
    itemName?: true
    quantity?: true
    unit?: true
    stockNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequisitionItemCountAggregateInputType = {
    id?: true
    requisitionId?: true
    inventoryItemId?: true
    itemName?: true
    quantity?: true
    unit?: true
    stockNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RequisitionItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequisitionItem to aggregate.
     */
    where?: RequisitionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequisitionItems to fetch.
     */
    orderBy?: RequisitionItemOrderByWithRelationInput | RequisitionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequisitionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequisitionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequisitionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequisitionItems
    **/
    _count?: true | RequisitionItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequisitionItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequisitionItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequisitionItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequisitionItemMaxAggregateInputType
  }

  export type GetRequisitionItemAggregateType<T extends RequisitionItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRequisitionItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequisitionItem[P]>
      : GetScalarType<T[P], AggregateRequisitionItem[P]>
  }




  export type RequisitionItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequisitionItemWhereInput
    orderBy?: RequisitionItemOrderByWithAggregationInput | RequisitionItemOrderByWithAggregationInput[]
    by: RequisitionItemScalarFieldEnum[] | RequisitionItemScalarFieldEnum
    having?: RequisitionItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequisitionItemCountAggregateInputType | true
    _avg?: RequisitionItemAvgAggregateInputType
    _sum?: RequisitionItemSumAggregateInputType
    _min?: RequisitionItemMinAggregateInputType
    _max?: RequisitionItemMaxAggregateInputType
  }

  export type RequisitionItemGroupByOutputType = {
    id: number
    requisitionId: number
    inventoryItemId: number | null
    itemName: string
    quantity: number
    unit: string
    stockNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: RequisitionItemCountAggregateOutputType | null
    _avg: RequisitionItemAvgAggregateOutputType | null
    _sum: RequisitionItemSumAggregateOutputType | null
    _min: RequisitionItemMinAggregateOutputType | null
    _max: RequisitionItemMaxAggregateOutputType | null
  }

  type GetRequisitionItemGroupByPayload<T extends RequisitionItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequisitionItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequisitionItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequisitionItemGroupByOutputType[P]>
            : GetScalarType<T[P], RequisitionItemGroupByOutputType[P]>
        }
      >
    >


  export type RequisitionItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requisitionId?: boolean
    inventoryItemId?: boolean
    itemName?: boolean
    quantity?: boolean
    unit?: boolean
    stockNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requisition?: boolean | RequisitionDefaultArgs<ExtArgs>
    inventoryItem?: boolean | RequisitionItem$inventoryItemArgs<ExtArgs>
  }, ExtArgs["result"]["requisitionItem"]>


  export type RequisitionItemSelectScalar = {
    id?: boolean
    requisitionId?: boolean
    inventoryItemId?: boolean
    itemName?: boolean
    quantity?: boolean
    unit?: boolean
    stockNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RequisitionItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requisition?: boolean | RequisitionDefaultArgs<ExtArgs>
    inventoryItem?: boolean | RequisitionItem$inventoryItemArgs<ExtArgs>
  }

  export type $RequisitionItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequisitionItem"
    objects: {
      requisition: Prisma.$RequisitionPayload<ExtArgs>
      inventoryItem: Prisma.$InventoryItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      requisitionId: number
      inventoryItemId: number | null
      itemName: string
      quantity: number
      unit: string
      stockNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["requisitionItem"]>
    composites: {}
  }

  type RequisitionItemGetPayload<S extends boolean | null | undefined | RequisitionItemDefaultArgs> = $Result.GetResult<Prisma.$RequisitionItemPayload, S>

  type RequisitionItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RequisitionItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RequisitionItemCountAggregateInputType | true
    }

  export interface RequisitionItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequisitionItem'], meta: { name: 'RequisitionItem' } }
    /**
     * Find zero or one RequisitionItem that matches the filter.
     * @param {RequisitionItemFindUniqueArgs} args - Arguments to find a RequisitionItem
     * @example
     * // Get one RequisitionItem
     * const requisitionItem = await prisma.requisitionItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequisitionItemFindUniqueArgs>(args: SelectSubset<T, RequisitionItemFindUniqueArgs<ExtArgs>>): Prisma__RequisitionItemClient<$Result.GetResult<Prisma.$RequisitionItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RequisitionItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RequisitionItemFindUniqueOrThrowArgs} args - Arguments to find a RequisitionItem
     * @example
     * // Get one RequisitionItem
     * const requisitionItem = await prisma.requisitionItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequisitionItemFindUniqueOrThrowArgs>(args: SelectSubset<T, RequisitionItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequisitionItemClient<$Result.GetResult<Prisma.$RequisitionItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RequisitionItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequisitionItemFindFirstArgs} args - Arguments to find a RequisitionItem
     * @example
     * // Get one RequisitionItem
     * const requisitionItem = await prisma.requisitionItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequisitionItemFindFirstArgs>(args?: SelectSubset<T, RequisitionItemFindFirstArgs<ExtArgs>>): Prisma__RequisitionItemClient<$Result.GetResult<Prisma.$RequisitionItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RequisitionItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequisitionItemFindFirstOrThrowArgs} args - Arguments to find a RequisitionItem
     * @example
     * // Get one RequisitionItem
     * const requisitionItem = await prisma.requisitionItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequisitionItemFindFirstOrThrowArgs>(args?: SelectSubset<T, RequisitionItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequisitionItemClient<$Result.GetResult<Prisma.$RequisitionItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RequisitionItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequisitionItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequisitionItems
     * const requisitionItems = await prisma.requisitionItem.findMany()
     * 
     * // Get first 10 RequisitionItems
     * const requisitionItems = await prisma.requisitionItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requisitionItemWithIdOnly = await prisma.requisitionItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequisitionItemFindManyArgs>(args?: SelectSubset<T, RequisitionItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequisitionItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RequisitionItem.
     * @param {RequisitionItemCreateArgs} args - Arguments to create a RequisitionItem.
     * @example
     * // Create one RequisitionItem
     * const RequisitionItem = await prisma.requisitionItem.create({
     *   data: {
     *     // ... data to create a RequisitionItem
     *   }
     * })
     * 
     */
    create<T extends RequisitionItemCreateArgs>(args: SelectSubset<T, RequisitionItemCreateArgs<ExtArgs>>): Prisma__RequisitionItemClient<$Result.GetResult<Prisma.$RequisitionItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RequisitionItems.
     * @param {RequisitionItemCreateManyArgs} args - Arguments to create many RequisitionItems.
     * @example
     * // Create many RequisitionItems
     * const requisitionItem = await prisma.requisitionItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequisitionItemCreateManyArgs>(args?: SelectSubset<T, RequisitionItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RequisitionItem.
     * @param {RequisitionItemDeleteArgs} args - Arguments to delete one RequisitionItem.
     * @example
     * // Delete one RequisitionItem
     * const RequisitionItem = await prisma.requisitionItem.delete({
     *   where: {
     *     // ... filter to delete one RequisitionItem
     *   }
     * })
     * 
     */
    delete<T extends RequisitionItemDeleteArgs>(args: SelectSubset<T, RequisitionItemDeleteArgs<ExtArgs>>): Prisma__RequisitionItemClient<$Result.GetResult<Prisma.$RequisitionItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RequisitionItem.
     * @param {RequisitionItemUpdateArgs} args - Arguments to update one RequisitionItem.
     * @example
     * // Update one RequisitionItem
     * const requisitionItem = await prisma.requisitionItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequisitionItemUpdateArgs>(args: SelectSubset<T, RequisitionItemUpdateArgs<ExtArgs>>): Prisma__RequisitionItemClient<$Result.GetResult<Prisma.$RequisitionItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RequisitionItems.
     * @param {RequisitionItemDeleteManyArgs} args - Arguments to filter RequisitionItems to delete.
     * @example
     * // Delete a few RequisitionItems
     * const { count } = await prisma.requisitionItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequisitionItemDeleteManyArgs>(args?: SelectSubset<T, RequisitionItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequisitionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequisitionItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequisitionItems
     * const requisitionItem = await prisma.requisitionItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequisitionItemUpdateManyArgs>(args: SelectSubset<T, RequisitionItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RequisitionItem.
     * @param {RequisitionItemUpsertArgs} args - Arguments to update or create a RequisitionItem.
     * @example
     * // Update or create a RequisitionItem
     * const requisitionItem = await prisma.requisitionItem.upsert({
     *   create: {
     *     // ... data to create a RequisitionItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequisitionItem we want to update
     *   }
     * })
     */
    upsert<T extends RequisitionItemUpsertArgs>(args: SelectSubset<T, RequisitionItemUpsertArgs<ExtArgs>>): Prisma__RequisitionItemClient<$Result.GetResult<Prisma.$RequisitionItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RequisitionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequisitionItemCountArgs} args - Arguments to filter RequisitionItems to count.
     * @example
     * // Count the number of RequisitionItems
     * const count = await prisma.requisitionItem.count({
     *   where: {
     *     // ... the filter for the RequisitionItems we want to count
     *   }
     * })
    **/
    count<T extends RequisitionItemCountArgs>(
      args?: Subset<T, RequisitionItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequisitionItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequisitionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequisitionItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequisitionItemAggregateArgs>(args: Subset<T, RequisitionItemAggregateArgs>): Prisma.PrismaPromise<GetRequisitionItemAggregateType<T>>

    /**
     * Group by RequisitionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequisitionItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequisitionItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequisitionItemGroupByArgs['orderBy'] }
        : { orderBy?: RequisitionItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequisitionItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequisitionItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequisitionItem model
   */
  readonly fields: RequisitionItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequisitionItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequisitionItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requisition<T extends RequisitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RequisitionDefaultArgs<ExtArgs>>): Prisma__RequisitionClient<$Result.GetResult<Prisma.$RequisitionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    inventoryItem<T extends RequisitionItem$inventoryItemArgs<ExtArgs> = {}>(args?: Subset<T, RequisitionItem$inventoryItemArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequisitionItem model
   */ 
  interface RequisitionItemFieldRefs {
    readonly id: FieldRef<"RequisitionItem", 'Int'>
    readonly requisitionId: FieldRef<"RequisitionItem", 'Int'>
    readonly inventoryItemId: FieldRef<"RequisitionItem", 'Int'>
    readonly itemName: FieldRef<"RequisitionItem", 'String'>
    readonly quantity: FieldRef<"RequisitionItem", 'Int'>
    readonly unit: FieldRef<"RequisitionItem", 'String'>
    readonly stockNumber: FieldRef<"RequisitionItem", 'String'>
    readonly createdAt: FieldRef<"RequisitionItem", 'DateTime'>
    readonly updatedAt: FieldRef<"RequisitionItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequisitionItem findUnique
   */
  export type RequisitionItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequisitionItem
     */
    select?: RequisitionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionItemInclude<ExtArgs> | null
    /**
     * Filter, which RequisitionItem to fetch.
     */
    where: RequisitionItemWhereUniqueInput
  }

  /**
   * RequisitionItem findUniqueOrThrow
   */
  export type RequisitionItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequisitionItem
     */
    select?: RequisitionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionItemInclude<ExtArgs> | null
    /**
     * Filter, which RequisitionItem to fetch.
     */
    where: RequisitionItemWhereUniqueInput
  }

  /**
   * RequisitionItem findFirst
   */
  export type RequisitionItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequisitionItem
     */
    select?: RequisitionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionItemInclude<ExtArgs> | null
    /**
     * Filter, which RequisitionItem to fetch.
     */
    where?: RequisitionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequisitionItems to fetch.
     */
    orderBy?: RequisitionItemOrderByWithRelationInput | RequisitionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequisitionItems.
     */
    cursor?: RequisitionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequisitionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequisitionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequisitionItems.
     */
    distinct?: RequisitionItemScalarFieldEnum | RequisitionItemScalarFieldEnum[]
  }

  /**
   * RequisitionItem findFirstOrThrow
   */
  export type RequisitionItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequisitionItem
     */
    select?: RequisitionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionItemInclude<ExtArgs> | null
    /**
     * Filter, which RequisitionItem to fetch.
     */
    where?: RequisitionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequisitionItems to fetch.
     */
    orderBy?: RequisitionItemOrderByWithRelationInput | RequisitionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequisitionItems.
     */
    cursor?: RequisitionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequisitionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequisitionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequisitionItems.
     */
    distinct?: RequisitionItemScalarFieldEnum | RequisitionItemScalarFieldEnum[]
  }

  /**
   * RequisitionItem findMany
   */
  export type RequisitionItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequisitionItem
     */
    select?: RequisitionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionItemInclude<ExtArgs> | null
    /**
     * Filter, which RequisitionItems to fetch.
     */
    where?: RequisitionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequisitionItems to fetch.
     */
    orderBy?: RequisitionItemOrderByWithRelationInput | RequisitionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequisitionItems.
     */
    cursor?: RequisitionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequisitionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequisitionItems.
     */
    skip?: number
    distinct?: RequisitionItemScalarFieldEnum | RequisitionItemScalarFieldEnum[]
  }

  /**
   * RequisitionItem create
   */
  export type RequisitionItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequisitionItem
     */
    select?: RequisitionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionItemInclude<ExtArgs> | null
    /**
     * The data needed to create a RequisitionItem.
     */
    data: XOR<RequisitionItemCreateInput, RequisitionItemUncheckedCreateInput>
  }

  /**
   * RequisitionItem createMany
   */
  export type RequisitionItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequisitionItems.
     */
    data: RequisitionItemCreateManyInput | RequisitionItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequisitionItem update
   */
  export type RequisitionItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequisitionItem
     */
    select?: RequisitionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionItemInclude<ExtArgs> | null
    /**
     * The data needed to update a RequisitionItem.
     */
    data: XOR<RequisitionItemUpdateInput, RequisitionItemUncheckedUpdateInput>
    /**
     * Choose, which RequisitionItem to update.
     */
    where: RequisitionItemWhereUniqueInput
  }

  /**
   * RequisitionItem updateMany
   */
  export type RequisitionItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequisitionItems.
     */
    data: XOR<RequisitionItemUpdateManyMutationInput, RequisitionItemUncheckedUpdateManyInput>
    /**
     * Filter which RequisitionItems to update
     */
    where?: RequisitionItemWhereInput
  }

  /**
   * RequisitionItem upsert
   */
  export type RequisitionItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequisitionItem
     */
    select?: RequisitionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionItemInclude<ExtArgs> | null
    /**
     * The filter to search for the RequisitionItem to update in case it exists.
     */
    where: RequisitionItemWhereUniqueInput
    /**
     * In case the RequisitionItem found by the `where` argument doesn't exist, create a new RequisitionItem with this data.
     */
    create: XOR<RequisitionItemCreateInput, RequisitionItemUncheckedCreateInput>
    /**
     * In case the RequisitionItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequisitionItemUpdateInput, RequisitionItemUncheckedUpdateInput>
  }

  /**
   * RequisitionItem delete
   */
  export type RequisitionItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequisitionItem
     */
    select?: RequisitionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionItemInclude<ExtArgs> | null
    /**
     * Filter which RequisitionItem to delete.
     */
    where: RequisitionItemWhereUniqueInput
  }

  /**
   * RequisitionItem deleteMany
   */
  export type RequisitionItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequisitionItems to delete
     */
    where?: RequisitionItemWhereInput
  }

  /**
   * RequisitionItem.inventoryItem
   */
  export type RequisitionItem$inventoryItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
  }

  /**
   * RequisitionItem without action
   */
  export type RequisitionItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequisitionItem
     */
    select?: RequisitionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequisitionItemInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    id: number | null
  }

  export type ActivitySumAggregateOutputType = {
    id: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: number | null
    item: string | null
    office: string | null
    action: string | null
    type: string | null
    time: string | null
    createdAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: number | null
    item: string | null
    office: string | null
    action: string | null
    type: string | null
    time: string | null
    createdAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    item: number
    office: number
    action: number
    type: number
    time: number
    createdAt: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    id?: true
  }

  export type ActivitySumAggregateInputType = {
    id?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    item?: true
    office?: true
    action?: true
    type?: true
    time?: true
    createdAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    item?: true
    office?: true
    action?: true
    type?: true
    time?: true
    createdAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    item?: true
    office?: true
    action?: true
    type?: true
    time?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: number
    item: string | null
    office: string | null
    action: string
    type: string | null
    time: string | null
    createdAt: Date
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    office?: boolean
    action?: boolean
    type?: boolean
    time?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["activity"]>


  export type ActivitySelectScalar = {
    id?: boolean
    item?: boolean
    office?: boolean
    action?: boolean
    type?: boolean
    time?: boolean
    createdAt?: boolean
  }


  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      item: string | null
      office: string | null
      action: string
      type: string | null
      time: string | null
      createdAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activity model
   */ 
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'Int'>
    readonly item: FieldRef<"Activity", 'String'>
    readonly office: FieldRef<"Activity", 'String'>
    readonly action: FieldRef<"Activity", 'String'>
    readonly type: FieldRef<"Activity", 'String'>
    readonly time: FieldRef<"Activity", 'String'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OfficeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OfficeScalarFieldEnum = (typeof OfficeScalarFieldEnum)[keyof typeof OfficeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    isAdmin: 'isAdmin',
    officeId: 'officeId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InventoryItemScalarFieldEnum: {
    id: 'id',
    sku: 'sku',
    name: 'name',
    location: 'location',
    minStock: 'minStock',
    unit: 'unit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


  export const InventoryBatchScalarFieldEnum: {
    id: 'id',
    inventoryItemId: 'inventoryItemId',
    batchId: 'batchId',
    brand: 'brand',
    supplier: 'supplier',
    stockNumber: 'stockNumber',
    expiryDate: 'expiryDate',
    officeId: 'officeId',
    stock: 'stock',
    transactionCount: 'transactionCount',
    ptr: 'ptr',
    costPerUnit: 'costPerUnit',
    remarks: 'remarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryBatchScalarFieldEnum = (typeof InventoryBatchScalarFieldEnum)[keyof typeof InventoryBatchScalarFieldEnum]


  export const InventoryTransactionScalarFieldEnum: {
    id: 'id',
    inventoryItemId: 'inventoryItemId',
    inventoryBatchId: 'inventoryBatchId',
    date: 'date',
    reference: 'reference',
    receiptQty: 'receiptQty',
    issuanceQty: 'issuanceQty',
    balance: 'balance',
    officeId: 'officeId',
    ptr: 'ptr',
    costPerUnit: 'costPerUnit',
    remarks: 'remarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryTransactionScalarFieldEnum = (typeof InventoryTransactionScalarFieldEnum)[keyof typeof InventoryTransactionScalarFieldEnum]


  export const RequisitionScalarFieldEnum: {
    id: 'id',
    risNo: 'risNo',
    responsibilityCenterCode: 'responsibilityCenterCode',
    requestDate: 'requestDate',
    requestedById: 'requestedById',
    role: 'role',
    officeId: 'officeId',
    purpose: 'purpose',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RequisitionScalarFieldEnum = (typeof RequisitionScalarFieldEnum)[keyof typeof RequisitionScalarFieldEnum]


  export const RequisitionItemScalarFieldEnum: {
    id: 'id',
    requisitionId: 'requisitionId',
    inventoryItemId: 'inventoryItemId',
    itemName: 'itemName',
    quantity: 'quantity',
    unit: 'unit',
    stockNumber: 'stockNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RequisitionItemScalarFieldEnum = (typeof RequisitionItemScalarFieldEnum)[keyof typeof RequisitionItemScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    item: 'item',
    office: 'office',
    action: 'action',
    type: 'type',
    time: 'time',
    createdAt: 'createdAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type OfficeWhereInput = {
    AND?: OfficeWhereInput | OfficeWhereInput[]
    OR?: OfficeWhereInput[]
    NOT?: OfficeWhereInput | OfficeWhereInput[]
    id?: IntFilter<"Office"> | number
    name?: StringFilter<"Office"> | string
    description?: StringNullableFilter<"Office"> | string | null
    createdAt?: DateTimeFilter<"Office"> | Date | string
    updatedAt?: DateTimeFilter<"Office"> | Date | string
    users?: UserListRelationFilter
    inventoryBatches?: InventoryBatchListRelationFilter
    inventoryTransactions?: InventoryTransactionListRelationFilter
    requisitions?: RequisitionListRelationFilter
  }

  export type OfficeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    inventoryBatches?: InventoryBatchOrderByRelationAggregateInput
    inventoryTransactions?: InventoryTransactionOrderByRelationAggregateInput
    requisitions?: RequisitionOrderByRelationAggregateInput
  }

  export type OfficeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: OfficeWhereInput | OfficeWhereInput[]
    OR?: OfficeWhereInput[]
    NOT?: OfficeWhereInput | OfficeWhereInput[]
    description?: StringNullableFilter<"Office"> | string | null
    createdAt?: DateTimeFilter<"Office"> | Date | string
    updatedAt?: DateTimeFilter<"Office"> | Date | string
    users?: UserListRelationFilter
    inventoryBatches?: InventoryBatchListRelationFilter
    inventoryTransactions?: InventoryTransactionListRelationFilter
    requisitions?: RequisitionListRelationFilter
  }, "id" | "name">

  export type OfficeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OfficeCountOrderByAggregateInput
    _avg?: OfficeAvgOrderByAggregateInput
    _max?: OfficeMaxOrderByAggregateInput
    _min?: OfficeMinOrderByAggregateInput
    _sum?: OfficeSumOrderByAggregateInput
  }

  export type OfficeScalarWhereWithAggregatesInput = {
    AND?: OfficeScalarWhereWithAggregatesInput | OfficeScalarWhereWithAggregatesInput[]
    OR?: OfficeScalarWhereWithAggregatesInput[]
    NOT?: OfficeScalarWhereWithAggregatesInput | OfficeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Office"> | number
    name?: StringWithAggregatesFilter<"Office"> | string
    description?: StringNullableWithAggregatesFilter<"Office"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Office"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Office"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    officeId?: IntNullableFilter<"User"> | number | null
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    office?: XOR<OfficeNullableRelationFilter, OfficeWhereInput> | null
    requisitions?: RequisitionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    officeId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    office?: OfficeOrderByWithRelationInput
    requisitions?: RequisitionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    officeId?: IntNullableFilter<"User"> | number | null
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    office?: XOR<OfficeNullableRelationFilter, OfficeWhereInput> | null
    requisitions?: RequisitionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    officeId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    officeId?: IntNullableWithAggregatesFilter<"User"> | number | null
    status?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type InventoryItemWhereInput = {
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    id?: IntFilter<"InventoryItem"> | number
    sku?: StringFilter<"InventoryItem"> | string
    name?: StringFilter<"InventoryItem"> | string
    location?: StringNullableFilter<"InventoryItem"> | string | null
    minStock?: IntFilter<"InventoryItem"> | number
    unit?: StringFilter<"InventoryItem"> | string
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    batches?: InventoryBatchListRelationFilter
    transactions?: InventoryTransactionListRelationFilter
    requisitionItems?: RequisitionItemListRelationFilter
  }

  export type InventoryItemOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    minStock?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batches?: InventoryBatchOrderByRelationAggregateInput
    transactions?: InventoryTransactionOrderByRelationAggregateInput
    requisitionItems?: RequisitionItemOrderByRelationAggregateInput
  }

  export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    name?: StringFilter<"InventoryItem"> | string
    location?: StringNullableFilter<"InventoryItem"> | string | null
    minStock?: IntFilter<"InventoryItem"> | number
    unit?: StringFilter<"InventoryItem"> | string
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    batches?: InventoryBatchListRelationFilter
    transactions?: InventoryTransactionListRelationFilter
    requisitionItems?: RequisitionItemListRelationFilter
  }, "id" | "sku">

  export type InventoryItemOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    minStock?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryItemCountOrderByAggregateInput
    _avg?: InventoryItemAvgOrderByAggregateInput
    _max?: InventoryItemMaxOrderByAggregateInput
    _min?: InventoryItemMinOrderByAggregateInput
    _sum?: InventoryItemSumOrderByAggregateInput
  }

  export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    OR?: InventoryItemScalarWhereWithAggregatesInput[]
    NOT?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InventoryItem"> | number
    sku?: StringWithAggregatesFilter<"InventoryItem"> | string
    name?: StringWithAggregatesFilter<"InventoryItem"> | string
    location?: StringNullableWithAggregatesFilter<"InventoryItem"> | string | null
    minStock?: IntWithAggregatesFilter<"InventoryItem"> | number
    unit?: StringWithAggregatesFilter<"InventoryItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
  }

  export type InventoryBatchWhereInput = {
    AND?: InventoryBatchWhereInput | InventoryBatchWhereInput[]
    OR?: InventoryBatchWhereInput[]
    NOT?: InventoryBatchWhereInput | InventoryBatchWhereInput[]
    id?: IntFilter<"InventoryBatch"> | number
    inventoryItemId?: IntFilter<"InventoryBatch"> | number
    batchId?: StringFilter<"InventoryBatch"> | string
    brand?: StringNullableFilter<"InventoryBatch"> | string | null
    supplier?: StringNullableFilter<"InventoryBatch"> | string | null
    stockNumber?: StringNullableFilter<"InventoryBatch"> | string | null
    expiryDate?: DateTimeNullableFilter<"InventoryBatch"> | Date | string | null
    officeId?: IntNullableFilter<"InventoryBatch"> | number | null
    stock?: IntFilter<"InventoryBatch"> | number
    transactionCount?: IntFilter<"InventoryBatch"> | number
    ptr?: StringNullableFilter<"InventoryBatch"> | string | null
    costPerUnit?: DecimalNullableFilter<"InventoryBatch"> | Decimal | DecimalJsLike | number | string | null
    remarks?: StringNullableFilter<"InventoryBatch"> | string | null
    createdAt?: DateTimeFilter<"InventoryBatch"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryBatch"> | Date | string
    inventoryItem?: XOR<InventoryItemRelationFilter, InventoryItemWhereInput>
    office?: XOR<OfficeNullableRelationFilter, OfficeWhereInput> | null
    transactions?: InventoryTransactionListRelationFilter
  }

  export type InventoryBatchOrderByWithRelationInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    batchId?: SortOrder
    brand?: SortOrderInput | SortOrder
    supplier?: SortOrderInput | SortOrder
    stockNumber?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    officeId?: SortOrderInput | SortOrder
    stock?: SortOrder
    transactionCount?: SortOrder
    ptr?: SortOrderInput | SortOrder
    costPerUnit?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inventoryItem?: InventoryItemOrderByWithRelationInput
    office?: OfficeOrderByWithRelationInput
    transactions?: InventoryTransactionOrderByRelationAggregateInput
  }

  export type InventoryBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    inventoryItemId_batchId?: InventoryBatchInventoryItemIdBatchIdCompoundUniqueInput
    AND?: InventoryBatchWhereInput | InventoryBatchWhereInput[]
    OR?: InventoryBatchWhereInput[]
    NOT?: InventoryBatchWhereInput | InventoryBatchWhereInput[]
    inventoryItemId?: IntFilter<"InventoryBatch"> | number
    batchId?: StringFilter<"InventoryBatch"> | string
    brand?: StringNullableFilter<"InventoryBatch"> | string | null
    supplier?: StringNullableFilter<"InventoryBatch"> | string | null
    stockNumber?: StringNullableFilter<"InventoryBatch"> | string | null
    expiryDate?: DateTimeNullableFilter<"InventoryBatch"> | Date | string | null
    officeId?: IntNullableFilter<"InventoryBatch"> | number | null
    stock?: IntFilter<"InventoryBatch"> | number
    transactionCount?: IntFilter<"InventoryBatch"> | number
    ptr?: StringNullableFilter<"InventoryBatch"> | string | null
    costPerUnit?: DecimalNullableFilter<"InventoryBatch"> | Decimal | DecimalJsLike | number | string | null
    remarks?: StringNullableFilter<"InventoryBatch"> | string | null
    createdAt?: DateTimeFilter<"InventoryBatch"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryBatch"> | Date | string
    inventoryItem?: XOR<InventoryItemRelationFilter, InventoryItemWhereInput>
    office?: XOR<OfficeNullableRelationFilter, OfficeWhereInput> | null
    transactions?: InventoryTransactionListRelationFilter
  }, "id" | "inventoryItemId_batchId">

  export type InventoryBatchOrderByWithAggregationInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    batchId?: SortOrder
    brand?: SortOrderInput | SortOrder
    supplier?: SortOrderInput | SortOrder
    stockNumber?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    officeId?: SortOrderInput | SortOrder
    stock?: SortOrder
    transactionCount?: SortOrder
    ptr?: SortOrderInput | SortOrder
    costPerUnit?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryBatchCountOrderByAggregateInput
    _avg?: InventoryBatchAvgOrderByAggregateInput
    _max?: InventoryBatchMaxOrderByAggregateInput
    _min?: InventoryBatchMinOrderByAggregateInput
    _sum?: InventoryBatchSumOrderByAggregateInput
  }

  export type InventoryBatchScalarWhereWithAggregatesInput = {
    AND?: InventoryBatchScalarWhereWithAggregatesInput | InventoryBatchScalarWhereWithAggregatesInput[]
    OR?: InventoryBatchScalarWhereWithAggregatesInput[]
    NOT?: InventoryBatchScalarWhereWithAggregatesInput | InventoryBatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InventoryBatch"> | number
    inventoryItemId?: IntWithAggregatesFilter<"InventoryBatch"> | number
    batchId?: StringWithAggregatesFilter<"InventoryBatch"> | string
    brand?: StringNullableWithAggregatesFilter<"InventoryBatch"> | string | null
    supplier?: StringNullableWithAggregatesFilter<"InventoryBatch"> | string | null
    stockNumber?: StringNullableWithAggregatesFilter<"InventoryBatch"> | string | null
    expiryDate?: DateTimeNullableWithAggregatesFilter<"InventoryBatch"> | Date | string | null
    officeId?: IntNullableWithAggregatesFilter<"InventoryBatch"> | number | null
    stock?: IntWithAggregatesFilter<"InventoryBatch"> | number
    transactionCount?: IntWithAggregatesFilter<"InventoryBatch"> | number
    ptr?: StringNullableWithAggregatesFilter<"InventoryBatch"> | string | null
    costPerUnit?: DecimalNullableWithAggregatesFilter<"InventoryBatch"> | Decimal | DecimalJsLike | number | string | null
    remarks?: StringNullableWithAggregatesFilter<"InventoryBatch"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InventoryBatch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryBatch"> | Date | string
  }

  export type InventoryTransactionWhereInput = {
    AND?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    OR?: InventoryTransactionWhereInput[]
    NOT?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    id?: IntFilter<"InventoryTransaction"> | number
    inventoryItemId?: IntFilter<"InventoryTransaction"> | number
    inventoryBatchId?: IntNullableFilter<"InventoryTransaction"> | number | null
    date?: DateTimeFilter<"InventoryTransaction"> | Date | string
    reference?: StringNullableFilter<"InventoryTransaction"> | string | null
    receiptQty?: IntFilter<"InventoryTransaction"> | number
    issuanceQty?: IntFilter<"InventoryTransaction"> | number
    balance?: IntFilter<"InventoryTransaction"> | number
    officeId?: IntNullableFilter<"InventoryTransaction"> | number | null
    ptr?: StringNullableFilter<"InventoryTransaction"> | string | null
    costPerUnit?: DecimalNullableFilter<"InventoryTransaction"> | Decimal | DecimalJsLike | number | string | null
    remarks?: StringNullableFilter<"InventoryTransaction"> | string | null
    createdAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
    inventoryItem?: XOR<InventoryItemRelationFilter, InventoryItemWhereInput>
    inventoryBatch?: XOR<InventoryBatchNullableRelationFilter, InventoryBatchWhereInput> | null
    office?: XOR<OfficeNullableRelationFilter, OfficeWhereInput> | null
  }

  export type InventoryTransactionOrderByWithRelationInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    inventoryBatchId?: SortOrderInput | SortOrder
    date?: SortOrder
    reference?: SortOrderInput | SortOrder
    receiptQty?: SortOrder
    issuanceQty?: SortOrder
    balance?: SortOrder
    officeId?: SortOrderInput | SortOrder
    ptr?: SortOrderInput | SortOrder
    costPerUnit?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inventoryItem?: InventoryItemOrderByWithRelationInput
    inventoryBatch?: InventoryBatchOrderByWithRelationInput
    office?: OfficeOrderByWithRelationInput
  }

  export type InventoryTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    OR?: InventoryTransactionWhereInput[]
    NOT?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    inventoryItemId?: IntFilter<"InventoryTransaction"> | number
    inventoryBatchId?: IntNullableFilter<"InventoryTransaction"> | number | null
    date?: DateTimeFilter<"InventoryTransaction"> | Date | string
    reference?: StringNullableFilter<"InventoryTransaction"> | string | null
    receiptQty?: IntFilter<"InventoryTransaction"> | number
    issuanceQty?: IntFilter<"InventoryTransaction"> | number
    balance?: IntFilter<"InventoryTransaction"> | number
    officeId?: IntNullableFilter<"InventoryTransaction"> | number | null
    ptr?: StringNullableFilter<"InventoryTransaction"> | string | null
    costPerUnit?: DecimalNullableFilter<"InventoryTransaction"> | Decimal | DecimalJsLike | number | string | null
    remarks?: StringNullableFilter<"InventoryTransaction"> | string | null
    createdAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
    inventoryItem?: XOR<InventoryItemRelationFilter, InventoryItemWhereInput>
    inventoryBatch?: XOR<InventoryBatchNullableRelationFilter, InventoryBatchWhereInput> | null
    office?: XOR<OfficeNullableRelationFilter, OfficeWhereInput> | null
  }, "id">

  export type InventoryTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    inventoryBatchId?: SortOrderInput | SortOrder
    date?: SortOrder
    reference?: SortOrderInput | SortOrder
    receiptQty?: SortOrder
    issuanceQty?: SortOrder
    balance?: SortOrder
    officeId?: SortOrderInput | SortOrder
    ptr?: SortOrderInput | SortOrder
    costPerUnit?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryTransactionCountOrderByAggregateInput
    _avg?: InventoryTransactionAvgOrderByAggregateInput
    _max?: InventoryTransactionMaxOrderByAggregateInput
    _min?: InventoryTransactionMinOrderByAggregateInput
    _sum?: InventoryTransactionSumOrderByAggregateInput
  }

  export type InventoryTransactionScalarWhereWithAggregatesInput = {
    AND?: InventoryTransactionScalarWhereWithAggregatesInput | InventoryTransactionScalarWhereWithAggregatesInput[]
    OR?: InventoryTransactionScalarWhereWithAggregatesInput[]
    NOT?: InventoryTransactionScalarWhereWithAggregatesInput | InventoryTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InventoryTransaction"> | number
    inventoryItemId?: IntWithAggregatesFilter<"InventoryTransaction"> | number
    inventoryBatchId?: IntNullableWithAggregatesFilter<"InventoryTransaction"> | number | null
    date?: DateTimeWithAggregatesFilter<"InventoryTransaction"> | Date | string
    reference?: StringNullableWithAggregatesFilter<"InventoryTransaction"> | string | null
    receiptQty?: IntWithAggregatesFilter<"InventoryTransaction"> | number
    issuanceQty?: IntWithAggregatesFilter<"InventoryTransaction"> | number
    balance?: IntWithAggregatesFilter<"InventoryTransaction"> | number
    officeId?: IntNullableWithAggregatesFilter<"InventoryTransaction"> | number | null
    ptr?: StringNullableWithAggregatesFilter<"InventoryTransaction"> | string | null
    costPerUnit?: DecimalNullableWithAggregatesFilter<"InventoryTransaction"> | Decimal | DecimalJsLike | number | string | null
    remarks?: StringNullableWithAggregatesFilter<"InventoryTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InventoryTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryTransaction"> | Date | string
  }

  export type RequisitionWhereInput = {
    AND?: RequisitionWhereInput | RequisitionWhereInput[]
    OR?: RequisitionWhereInput[]
    NOT?: RequisitionWhereInput | RequisitionWhereInput[]
    id?: IntFilter<"Requisition"> | number
    risNo?: StringFilter<"Requisition"> | string
    responsibilityCenterCode?: StringNullableFilter<"Requisition"> | string | null
    requestDate?: DateTimeFilter<"Requisition"> | Date | string
    requestedById?: IntNullableFilter<"Requisition"> | number | null
    role?: StringNullableFilter<"Requisition"> | string | null
    officeId?: IntNullableFilter<"Requisition"> | number | null
    purpose?: StringNullableFilter<"Requisition"> | string | null
    status?: StringFilter<"Requisition"> | string
    createdAt?: DateTimeFilter<"Requisition"> | Date | string
    updatedAt?: DateTimeFilter<"Requisition"> | Date | string
    requestedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    office?: XOR<OfficeNullableRelationFilter, OfficeWhereInput> | null
    items?: RequisitionItemListRelationFilter
  }

  export type RequisitionOrderByWithRelationInput = {
    id?: SortOrder
    risNo?: SortOrder
    responsibilityCenterCode?: SortOrderInput | SortOrder
    requestDate?: SortOrder
    requestedById?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    officeId?: SortOrderInput | SortOrder
    purpose?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestedBy?: UserOrderByWithRelationInput
    office?: OfficeOrderByWithRelationInput
    items?: RequisitionItemOrderByRelationAggregateInput
  }

  export type RequisitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    risNo?: string
    AND?: RequisitionWhereInput | RequisitionWhereInput[]
    OR?: RequisitionWhereInput[]
    NOT?: RequisitionWhereInput | RequisitionWhereInput[]
    responsibilityCenterCode?: StringNullableFilter<"Requisition"> | string | null
    requestDate?: DateTimeFilter<"Requisition"> | Date | string
    requestedById?: IntNullableFilter<"Requisition"> | number | null
    role?: StringNullableFilter<"Requisition"> | string | null
    officeId?: IntNullableFilter<"Requisition"> | number | null
    purpose?: StringNullableFilter<"Requisition"> | string | null
    status?: StringFilter<"Requisition"> | string
    createdAt?: DateTimeFilter<"Requisition"> | Date | string
    updatedAt?: DateTimeFilter<"Requisition"> | Date | string
    requestedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    office?: XOR<OfficeNullableRelationFilter, OfficeWhereInput> | null
    items?: RequisitionItemListRelationFilter
  }, "id" | "risNo">

  export type RequisitionOrderByWithAggregationInput = {
    id?: SortOrder
    risNo?: SortOrder
    responsibilityCenterCode?: SortOrderInput | SortOrder
    requestDate?: SortOrder
    requestedById?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    officeId?: SortOrderInput | SortOrder
    purpose?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RequisitionCountOrderByAggregateInput
    _avg?: RequisitionAvgOrderByAggregateInput
    _max?: RequisitionMaxOrderByAggregateInput
    _min?: RequisitionMinOrderByAggregateInput
    _sum?: RequisitionSumOrderByAggregateInput
  }

  export type RequisitionScalarWhereWithAggregatesInput = {
    AND?: RequisitionScalarWhereWithAggregatesInput | RequisitionScalarWhereWithAggregatesInput[]
    OR?: RequisitionScalarWhereWithAggregatesInput[]
    NOT?: RequisitionScalarWhereWithAggregatesInput | RequisitionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Requisition"> | number
    risNo?: StringWithAggregatesFilter<"Requisition"> | string
    responsibilityCenterCode?: StringNullableWithAggregatesFilter<"Requisition"> | string | null
    requestDate?: DateTimeWithAggregatesFilter<"Requisition"> | Date | string
    requestedById?: IntNullableWithAggregatesFilter<"Requisition"> | number | null
    role?: StringNullableWithAggregatesFilter<"Requisition"> | string | null
    officeId?: IntNullableWithAggregatesFilter<"Requisition"> | number | null
    purpose?: StringNullableWithAggregatesFilter<"Requisition"> | string | null
    status?: StringWithAggregatesFilter<"Requisition"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Requisition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Requisition"> | Date | string
  }

  export type RequisitionItemWhereInput = {
    AND?: RequisitionItemWhereInput | RequisitionItemWhereInput[]
    OR?: RequisitionItemWhereInput[]
    NOT?: RequisitionItemWhereInput | RequisitionItemWhereInput[]
    id?: IntFilter<"RequisitionItem"> | number
    requisitionId?: IntFilter<"RequisitionItem"> | number
    inventoryItemId?: IntNullableFilter<"RequisitionItem"> | number | null
    itemName?: StringFilter<"RequisitionItem"> | string
    quantity?: IntFilter<"RequisitionItem"> | number
    unit?: StringFilter<"RequisitionItem"> | string
    stockNumber?: StringNullableFilter<"RequisitionItem"> | string | null
    createdAt?: DateTimeFilter<"RequisitionItem"> | Date | string
    updatedAt?: DateTimeFilter<"RequisitionItem"> | Date | string
    requisition?: XOR<RequisitionRelationFilter, RequisitionWhereInput>
    inventoryItem?: XOR<InventoryItemNullableRelationFilter, InventoryItemWhereInput> | null
  }

  export type RequisitionItemOrderByWithRelationInput = {
    id?: SortOrder
    requisitionId?: SortOrder
    inventoryItemId?: SortOrderInput | SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    stockNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requisition?: RequisitionOrderByWithRelationInput
    inventoryItem?: InventoryItemOrderByWithRelationInput
  }

  export type RequisitionItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RequisitionItemWhereInput | RequisitionItemWhereInput[]
    OR?: RequisitionItemWhereInput[]
    NOT?: RequisitionItemWhereInput | RequisitionItemWhereInput[]
    requisitionId?: IntFilter<"RequisitionItem"> | number
    inventoryItemId?: IntNullableFilter<"RequisitionItem"> | number | null
    itemName?: StringFilter<"RequisitionItem"> | string
    quantity?: IntFilter<"RequisitionItem"> | number
    unit?: StringFilter<"RequisitionItem"> | string
    stockNumber?: StringNullableFilter<"RequisitionItem"> | string | null
    createdAt?: DateTimeFilter<"RequisitionItem"> | Date | string
    updatedAt?: DateTimeFilter<"RequisitionItem"> | Date | string
    requisition?: XOR<RequisitionRelationFilter, RequisitionWhereInput>
    inventoryItem?: XOR<InventoryItemNullableRelationFilter, InventoryItemWhereInput> | null
  }, "id">

  export type RequisitionItemOrderByWithAggregationInput = {
    id?: SortOrder
    requisitionId?: SortOrder
    inventoryItemId?: SortOrderInput | SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    stockNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RequisitionItemCountOrderByAggregateInput
    _avg?: RequisitionItemAvgOrderByAggregateInput
    _max?: RequisitionItemMaxOrderByAggregateInput
    _min?: RequisitionItemMinOrderByAggregateInput
    _sum?: RequisitionItemSumOrderByAggregateInput
  }

  export type RequisitionItemScalarWhereWithAggregatesInput = {
    AND?: RequisitionItemScalarWhereWithAggregatesInput | RequisitionItemScalarWhereWithAggregatesInput[]
    OR?: RequisitionItemScalarWhereWithAggregatesInput[]
    NOT?: RequisitionItemScalarWhereWithAggregatesInput | RequisitionItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RequisitionItem"> | number
    requisitionId?: IntWithAggregatesFilter<"RequisitionItem"> | number
    inventoryItemId?: IntNullableWithAggregatesFilter<"RequisitionItem"> | number | null
    itemName?: StringWithAggregatesFilter<"RequisitionItem"> | string
    quantity?: IntWithAggregatesFilter<"RequisitionItem"> | number
    unit?: StringWithAggregatesFilter<"RequisitionItem"> | string
    stockNumber?: StringNullableWithAggregatesFilter<"RequisitionItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RequisitionItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RequisitionItem"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: IntFilter<"Activity"> | number
    item?: StringNullableFilter<"Activity"> | string | null
    office?: StringNullableFilter<"Activity"> | string | null
    action?: StringFilter<"Activity"> | string
    type?: StringNullableFilter<"Activity"> | string | null
    time?: StringNullableFilter<"Activity"> | string | null
    createdAt?: DateTimeFilter<"Activity"> | Date | string
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    item?: SortOrderInput | SortOrder
    office?: SortOrderInput | SortOrder
    action?: SortOrder
    type?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    item?: StringNullableFilter<"Activity"> | string | null
    office?: StringNullableFilter<"Activity"> | string | null
    action?: StringFilter<"Activity"> | string
    type?: StringNullableFilter<"Activity"> | string | null
    time?: StringNullableFilter<"Activity"> | string | null
    createdAt?: DateTimeFilter<"Activity"> | Date | string
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    item?: SortOrderInput | SortOrder
    office?: SortOrderInput | SortOrder
    action?: SortOrder
    type?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Activity"> | number
    item?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    office?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    action?: StringWithAggregatesFilter<"Activity"> | string
    type?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    time?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type OfficeCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOfficeInput
    inventoryBatches?: InventoryBatchCreateNestedManyWithoutOfficeInput
    inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutOfficeInput
    requisitions?: RequisitionCreateNestedManyWithoutOfficeInput
  }

  export type OfficeUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOfficeInput
    inventoryBatches?: InventoryBatchUncheckedCreateNestedManyWithoutOfficeInput
    inventoryTransactions?: InventoryTransactionUncheckedCreateNestedManyWithoutOfficeInput
    requisitions?: RequisitionUncheckedCreateNestedManyWithoutOfficeInput
  }

  export type OfficeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOfficeNestedInput
    inventoryBatches?: InventoryBatchUpdateManyWithoutOfficeNestedInput
    inventoryTransactions?: InventoryTransactionUpdateManyWithoutOfficeNestedInput
    requisitions?: RequisitionUpdateManyWithoutOfficeNestedInput
  }

  export type OfficeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOfficeNestedInput
    inventoryBatches?: InventoryBatchUncheckedUpdateManyWithoutOfficeNestedInput
    inventoryTransactions?: InventoryTransactionUncheckedUpdateManyWithoutOfficeNestedInput
    requisitions?: RequisitionUncheckedUpdateManyWithoutOfficeNestedInput
  }

  export type OfficeCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfficeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    isAdmin?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    office?: OfficeCreateNestedOneWithoutUsersInput
    requisitions?: RequisitionCreateNestedManyWithoutRequestedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    isAdmin?: boolean
    officeId?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requisitions?: RequisitionUncheckedCreateNestedManyWithoutRequestedByInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    office?: OfficeUpdateOneWithoutUsersNestedInput
    requisitions?: RequisitionUpdateManyWithoutRequestedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requisitions?: RequisitionUncheckedUpdateManyWithoutRequestedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    isAdmin?: boolean
    officeId?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemCreateInput = {
    sku: string
    name: string
    location?: string | null
    minStock?: number
    unit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: InventoryBatchCreateNestedManyWithoutInventoryItemInput
    transactions?: InventoryTransactionCreateNestedManyWithoutInventoryItemInput
    requisitionItems?: RequisitionItemCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUncheckedCreateInput = {
    id?: number
    sku: string
    name: string
    location?: string | null
    minStock?: number
    unit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: InventoryBatchUncheckedCreateNestedManyWithoutInventoryItemInput
    transactions?: InventoryTransactionUncheckedCreateNestedManyWithoutInventoryItemInput
    requisitionItems?: RequisitionItemUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUpdateInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    minStock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: InventoryBatchUpdateManyWithoutInventoryItemNestedInput
    transactions?: InventoryTransactionUpdateManyWithoutInventoryItemNestedInput
    requisitionItems?: RequisitionItemUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    minStock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: InventoryBatchUncheckedUpdateManyWithoutInventoryItemNestedInput
    transactions?: InventoryTransactionUncheckedUpdateManyWithoutInventoryItemNestedInput
    requisitionItems?: RequisitionItemUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemCreateManyInput = {
    id?: number
    sku: string
    name: string
    location?: string | null
    minStock?: number
    unit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryItemUpdateManyMutationInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    minStock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    minStock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryBatchCreateInput = {
    batchId: string
    brand?: string | null
    supplier?: string | null
    stockNumber?: string | null
    expiryDate?: Date | string | null
    stock?: number
    transactionCount?: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItem: InventoryItemCreateNestedOneWithoutBatchesInput
    office?: OfficeCreateNestedOneWithoutInventoryBatchesInput
    transactions?: InventoryTransactionCreateNestedManyWithoutInventoryBatchInput
  }

  export type InventoryBatchUncheckedCreateInput = {
    id?: number
    inventoryItemId: number
    batchId: string
    brand?: string | null
    supplier?: string | null
    stockNumber?: string | null
    expiryDate?: Date | string | null
    officeId?: number | null
    stock?: number
    transactionCount?: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: InventoryTransactionUncheckedCreateNestedManyWithoutInventoryBatchInput
  }

  export type InventoryBatchUpdateInput = {
    batchId?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: InventoryItemUpdateOneRequiredWithoutBatchesNestedInput
    office?: OfficeUpdateOneWithoutInventoryBatchesNestedInput
    transactions?: InventoryTransactionUpdateManyWithoutInventoryBatchNestedInput
  }

  export type InventoryBatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    batchId?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: InventoryTransactionUncheckedUpdateManyWithoutInventoryBatchNestedInput
  }

  export type InventoryBatchCreateManyInput = {
    id?: number
    inventoryItemId: number
    batchId: string
    brand?: string | null
    supplier?: string | null
    stockNumber?: string | null
    expiryDate?: Date | string | null
    officeId?: number | null
    stock?: number
    transactionCount?: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryBatchUpdateManyMutationInput = {
    batchId?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryBatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    batchId?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionCreateInput = {
    date?: Date | string
    reference?: string | null
    receiptQty?: number
    issuanceQty?: number
    balance: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItem: InventoryItemCreateNestedOneWithoutTransactionsInput
    inventoryBatch?: InventoryBatchCreateNestedOneWithoutTransactionsInput
    office?: OfficeCreateNestedOneWithoutInventoryTransactionsInput
  }

  export type InventoryTransactionUncheckedCreateInput = {
    id?: number
    inventoryItemId: number
    inventoryBatchId?: number | null
    date?: Date | string
    reference?: string | null
    receiptQty?: number
    issuanceQty?: number
    balance: number
    officeId?: number | null
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptQty?: IntFieldUpdateOperationsInput | number
    issuanceQty?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: InventoryItemUpdateOneRequiredWithoutTransactionsNestedInput
    inventoryBatch?: InventoryBatchUpdateOneWithoutTransactionsNestedInput
    office?: OfficeUpdateOneWithoutInventoryTransactionsNestedInput
  }

  export type InventoryTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    inventoryBatchId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptQty?: IntFieldUpdateOperationsInput | number
    issuanceQty?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionCreateManyInput = {
    id?: number
    inventoryItemId: number
    inventoryBatchId?: number | null
    date?: Date | string
    reference?: string | null
    receiptQty?: number
    issuanceQty?: number
    balance: number
    officeId?: number | null
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptQty?: IntFieldUpdateOperationsInput | number
    issuanceQty?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    inventoryBatchId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptQty?: IntFieldUpdateOperationsInput | number
    issuanceQty?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequisitionCreateInput = {
    risNo: string
    responsibilityCenterCode?: string | null
    requestDate?: Date | string
    role?: string | null
    purpose?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestedBy?: UserCreateNestedOneWithoutRequisitionsInput
    office?: OfficeCreateNestedOneWithoutRequisitionsInput
    items?: RequisitionItemCreateNestedManyWithoutRequisitionInput
  }

  export type RequisitionUncheckedCreateInput = {
    id?: number
    risNo: string
    responsibilityCenterCode?: string | null
    requestDate?: Date | string
    requestedById?: number | null
    role?: string | null
    officeId?: number | null
    purpose?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: RequisitionItemUncheckedCreateNestedManyWithoutRequisitionInput
  }

  export type RequisitionUpdateInput = {
    risNo?: StringFieldUpdateOperationsInput | string
    responsibilityCenterCode?: NullableStringFieldUpdateOperationsInput | string | null
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedBy?: UserUpdateOneWithoutRequisitionsNestedInput
    office?: OfficeUpdateOneWithoutRequisitionsNestedInput
    items?: RequisitionItemUpdateManyWithoutRequisitionNestedInput
  }

  export type RequisitionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    risNo?: StringFieldUpdateOperationsInput | string
    responsibilityCenterCode?: NullableStringFieldUpdateOperationsInput | string | null
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedById?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RequisitionItemUncheckedUpdateManyWithoutRequisitionNestedInput
  }

  export type RequisitionCreateManyInput = {
    id?: number
    risNo: string
    responsibilityCenterCode?: string | null
    requestDate?: Date | string
    requestedById?: number | null
    role?: string | null
    officeId?: number | null
    purpose?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequisitionUpdateManyMutationInput = {
    risNo?: StringFieldUpdateOperationsInput | string
    responsibilityCenterCode?: NullableStringFieldUpdateOperationsInput | string | null
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequisitionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    risNo?: StringFieldUpdateOperationsInput | string
    responsibilityCenterCode?: NullableStringFieldUpdateOperationsInput | string | null
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedById?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequisitionItemCreateInput = {
    itemName: string
    quantity: number
    unit: string
    stockNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requisition: RequisitionCreateNestedOneWithoutItemsInput
    inventoryItem?: InventoryItemCreateNestedOneWithoutRequisitionItemsInput
  }

  export type RequisitionItemUncheckedCreateInput = {
    id?: number
    requisitionId: number
    inventoryItemId?: number | null
    itemName: string
    quantity: number
    unit: string
    stockNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequisitionItemUpdateInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requisition?: RequisitionUpdateOneRequiredWithoutItemsNestedInput
    inventoryItem?: InventoryItemUpdateOneWithoutRequisitionItemsNestedInput
  }

  export type RequisitionItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    requisitionId?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequisitionItemCreateManyInput = {
    id?: number
    requisitionId: number
    inventoryItemId?: number | null
    itemName: string
    quantity: number
    unit: string
    stockNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequisitionItemUpdateManyMutationInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequisitionItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    requisitionId?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    item?: string | null
    office?: string | null
    action: string
    type?: string | null
    time?: string | null
    createdAt?: Date | string
  }

  export type ActivityUncheckedCreateInput = {
    id?: number
    item?: string | null
    office?: string | null
    action: string
    type?: string | null
    time?: string | null
    createdAt?: Date | string
  }

  export type ActivityUpdateInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyInput = {
    id?: number
    item?: string | null
    office?: string | null
    action: string
    type?: string | null
    time?: string | null
    createdAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type InventoryBatchListRelationFilter = {
    every?: InventoryBatchWhereInput
    some?: InventoryBatchWhereInput
    none?: InventoryBatchWhereInput
  }

  export type InventoryTransactionListRelationFilter = {
    every?: InventoryTransactionWhereInput
    some?: InventoryTransactionWhereInput
    none?: InventoryTransactionWhereInput
  }

  export type RequisitionListRelationFilter = {
    every?: RequisitionWhereInput
    some?: RequisitionWhereInput
    none?: RequisitionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryBatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequisitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfficeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfficeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OfficeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfficeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfficeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OfficeNullableRelationFilter = {
    is?: OfficeWhereInput | null
    isNot?: OfficeWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    officeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    officeId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    officeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    officeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    officeId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RequisitionItemListRelationFilter = {
    every?: RequisitionItemWhereInput
    some?: RequisitionItemWhereInput
    none?: RequisitionItemWhereInput
  }

  export type RequisitionItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryItemCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    location?: SortOrder
    minStock?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemAvgOrderByAggregateInput = {
    id?: SortOrder
    minStock?: SortOrder
  }

  export type InventoryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    location?: SortOrder
    minStock?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    location?: SortOrder
    minStock?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemSumOrderByAggregateInput = {
    id?: SortOrder
    minStock?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type InventoryItemRelationFilter = {
    is?: InventoryItemWhereInput
    isNot?: InventoryItemWhereInput
  }

  export type InventoryBatchInventoryItemIdBatchIdCompoundUniqueInput = {
    inventoryItemId: number
    batchId: string
  }

  export type InventoryBatchCountOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    batchId?: SortOrder
    brand?: SortOrder
    supplier?: SortOrder
    stockNumber?: SortOrder
    expiryDate?: SortOrder
    officeId?: SortOrder
    stock?: SortOrder
    transactionCount?: SortOrder
    ptr?: SortOrder
    costPerUnit?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryBatchAvgOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    officeId?: SortOrder
    stock?: SortOrder
    transactionCount?: SortOrder
    costPerUnit?: SortOrder
  }

  export type InventoryBatchMaxOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    batchId?: SortOrder
    brand?: SortOrder
    supplier?: SortOrder
    stockNumber?: SortOrder
    expiryDate?: SortOrder
    officeId?: SortOrder
    stock?: SortOrder
    transactionCount?: SortOrder
    ptr?: SortOrder
    costPerUnit?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryBatchMinOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    batchId?: SortOrder
    brand?: SortOrder
    supplier?: SortOrder
    stockNumber?: SortOrder
    expiryDate?: SortOrder
    officeId?: SortOrder
    stock?: SortOrder
    transactionCount?: SortOrder
    ptr?: SortOrder
    costPerUnit?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryBatchSumOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    officeId?: SortOrder
    stock?: SortOrder
    transactionCount?: SortOrder
    costPerUnit?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type InventoryBatchNullableRelationFilter = {
    is?: InventoryBatchWhereInput | null
    isNot?: InventoryBatchWhereInput | null
  }

  export type InventoryTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    inventoryBatchId?: SortOrder
    date?: SortOrder
    reference?: SortOrder
    receiptQty?: SortOrder
    issuanceQty?: SortOrder
    balance?: SortOrder
    officeId?: SortOrder
    ptr?: SortOrder
    costPerUnit?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    inventoryBatchId?: SortOrder
    receiptQty?: SortOrder
    issuanceQty?: SortOrder
    balance?: SortOrder
    officeId?: SortOrder
    costPerUnit?: SortOrder
  }

  export type InventoryTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    inventoryBatchId?: SortOrder
    date?: SortOrder
    reference?: SortOrder
    receiptQty?: SortOrder
    issuanceQty?: SortOrder
    balance?: SortOrder
    officeId?: SortOrder
    ptr?: SortOrder
    costPerUnit?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    inventoryBatchId?: SortOrder
    date?: SortOrder
    reference?: SortOrder
    receiptQty?: SortOrder
    issuanceQty?: SortOrder
    balance?: SortOrder
    officeId?: SortOrder
    ptr?: SortOrder
    costPerUnit?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    inventoryBatchId?: SortOrder
    receiptQty?: SortOrder
    issuanceQty?: SortOrder
    balance?: SortOrder
    officeId?: SortOrder
    costPerUnit?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RequisitionCountOrderByAggregateInput = {
    id?: SortOrder
    risNo?: SortOrder
    responsibilityCenterCode?: SortOrder
    requestDate?: SortOrder
    requestedById?: SortOrder
    role?: SortOrder
    officeId?: SortOrder
    purpose?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequisitionAvgOrderByAggregateInput = {
    id?: SortOrder
    requestedById?: SortOrder
    officeId?: SortOrder
  }

  export type RequisitionMaxOrderByAggregateInput = {
    id?: SortOrder
    risNo?: SortOrder
    responsibilityCenterCode?: SortOrder
    requestDate?: SortOrder
    requestedById?: SortOrder
    role?: SortOrder
    officeId?: SortOrder
    purpose?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequisitionMinOrderByAggregateInput = {
    id?: SortOrder
    risNo?: SortOrder
    responsibilityCenterCode?: SortOrder
    requestDate?: SortOrder
    requestedById?: SortOrder
    role?: SortOrder
    officeId?: SortOrder
    purpose?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequisitionSumOrderByAggregateInput = {
    id?: SortOrder
    requestedById?: SortOrder
    officeId?: SortOrder
  }

  export type RequisitionRelationFilter = {
    is?: RequisitionWhereInput
    isNot?: RequisitionWhereInput
  }

  export type InventoryItemNullableRelationFilter = {
    is?: InventoryItemWhereInput | null
    isNot?: InventoryItemWhereInput | null
  }

  export type RequisitionItemCountOrderByAggregateInput = {
    id?: SortOrder
    requisitionId?: SortOrder
    inventoryItemId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    stockNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequisitionItemAvgOrderByAggregateInput = {
    id?: SortOrder
    requisitionId?: SortOrder
    inventoryItemId?: SortOrder
    quantity?: SortOrder
  }

  export type RequisitionItemMaxOrderByAggregateInput = {
    id?: SortOrder
    requisitionId?: SortOrder
    inventoryItemId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    stockNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequisitionItemMinOrderByAggregateInput = {
    id?: SortOrder
    requisitionId?: SortOrder
    inventoryItemId?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    stockNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequisitionItemSumOrderByAggregateInput = {
    id?: SortOrder
    requisitionId?: SortOrder
    inventoryItemId?: SortOrder
    quantity?: SortOrder
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    office?: SortOrder
    action?: SortOrder
    type?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    office?: SortOrder
    action?: SortOrder
    type?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    office?: SortOrder
    action?: SortOrder
    type?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedManyWithoutOfficeInput = {
    create?: XOR<UserCreateWithoutOfficeInput, UserUncheckedCreateWithoutOfficeInput> | UserCreateWithoutOfficeInput[] | UserUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOfficeInput | UserCreateOrConnectWithoutOfficeInput[]
    createMany?: UserCreateManyOfficeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type InventoryBatchCreateNestedManyWithoutOfficeInput = {
    create?: XOR<InventoryBatchCreateWithoutOfficeInput, InventoryBatchUncheckedCreateWithoutOfficeInput> | InventoryBatchCreateWithoutOfficeInput[] | InventoryBatchUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: InventoryBatchCreateOrConnectWithoutOfficeInput | InventoryBatchCreateOrConnectWithoutOfficeInput[]
    createMany?: InventoryBatchCreateManyOfficeInputEnvelope
    connect?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
  }

  export type InventoryTransactionCreateNestedManyWithoutOfficeInput = {
    create?: XOR<InventoryTransactionCreateWithoutOfficeInput, InventoryTransactionUncheckedCreateWithoutOfficeInput> | InventoryTransactionCreateWithoutOfficeInput[] | InventoryTransactionUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutOfficeInput | InventoryTransactionCreateOrConnectWithoutOfficeInput[]
    createMany?: InventoryTransactionCreateManyOfficeInputEnvelope
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
  }

  export type RequisitionCreateNestedManyWithoutOfficeInput = {
    create?: XOR<RequisitionCreateWithoutOfficeInput, RequisitionUncheckedCreateWithoutOfficeInput> | RequisitionCreateWithoutOfficeInput[] | RequisitionUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: RequisitionCreateOrConnectWithoutOfficeInput | RequisitionCreateOrConnectWithoutOfficeInput[]
    createMany?: RequisitionCreateManyOfficeInputEnvelope
    connect?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOfficeInput = {
    create?: XOR<UserCreateWithoutOfficeInput, UserUncheckedCreateWithoutOfficeInput> | UserCreateWithoutOfficeInput[] | UserUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOfficeInput | UserCreateOrConnectWithoutOfficeInput[]
    createMany?: UserCreateManyOfficeInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type InventoryBatchUncheckedCreateNestedManyWithoutOfficeInput = {
    create?: XOR<InventoryBatchCreateWithoutOfficeInput, InventoryBatchUncheckedCreateWithoutOfficeInput> | InventoryBatchCreateWithoutOfficeInput[] | InventoryBatchUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: InventoryBatchCreateOrConnectWithoutOfficeInput | InventoryBatchCreateOrConnectWithoutOfficeInput[]
    createMany?: InventoryBatchCreateManyOfficeInputEnvelope
    connect?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
  }

  export type InventoryTransactionUncheckedCreateNestedManyWithoutOfficeInput = {
    create?: XOR<InventoryTransactionCreateWithoutOfficeInput, InventoryTransactionUncheckedCreateWithoutOfficeInput> | InventoryTransactionCreateWithoutOfficeInput[] | InventoryTransactionUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutOfficeInput | InventoryTransactionCreateOrConnectWithoutOfficeInput[]
    createMany?: InventoryTransactionCreateManyOfficeInputEnvelope
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
  }

  export type RequisitionUncheckedCreateNestedManyWithoutOfficeInput = {
    create?: XOR<RequisitionCreateWithoutOfficeInput, RequisitionUncheckedCreateWithoutOfficeInput> | RequisitionCreateWithoutOfficeInput[] | RequisitionUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: RequisitionCreateOrConnectWithoutOfficeInput | RequisitionCreateOrConnectWithoutOfficeInput[]
    createMany?: RequisitionCreateManyOfficeInputEnvelope
    connect?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutOfficeNestedInput = {
    create?: XOR<UserCreateWithoutOfficeInput, UserUncheckedCreateWithoutOfficeInput> | UserCreateWithoutOfficeInput[] | UserUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOfficeInput | UserCreateOrConnectWithoutOfficeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOfficeInput | UserUpsertWithWhereUniqueWithoutOfficeInput[]
    createMany?: UserCreateManyOfficeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOfficeInput | UserUpdateWithWhereUniqueWithoutOfficeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOfficeInput | UserUpdateManyWithWhereWithoutOfficeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type InventoryBatchUpdateManyWithoutOfficeNestedInput = {
    create?: XOR<InventoryBatchCreateWithoutOfficeInput, InventoryBatchUncheckedCreateWithoutOfficeInput> | InventoryBatchCreateWithoutOfficeInput[] | InventoryBatchUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: InventoryBatchCreateOrConnectWithoutOfficeInput | InventoryBatchCreateOrConnectWithoutOfficeInput[]
    upsert?: InventoryBatchUpsertWithWhereUniqueWithoutOfficeInput | InventoryBatchUpsertWithWhereUniqueWithoutOfficeInput[]
    createMany?: InventoryBatchCreateManyOfficeInputEnvelope
    set?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    disconnect?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    delete?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    connect?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    update?: InventoryBatchUpdateWithWhereUniqueWithoutOfficeInput | InventoryBatchUpdateWithWhereUniqueWithoutOfficeInput[]
    updateMany?: InventoryBatchUpdateManyWithWhereWithoutOfficeInput | InventoryBatchUpdateManyWithWhereWithoutOfficeInput[]
    deleteMany?: InventoryBatchScalarWhereInput | InventoryBatchScalarWhereInput[]
  }

  export type InventoryTransactionUpdateManyWithoutOfficeNestedInput = {
    create?: XOR<InventoryTransactionCreateWithoutOfficeInput, InventoryTransactionUncheckedCreateWithoutOfficeInput> | InventoryTransactionCreateWithoutOfficeInput[] | InventoryTransactionUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutOfficeInput | InventoryTransactionCreateOrConnectWithoutOfficeInput[]
    upsert?: InventoryTransactionUpsertWithWhereUniqueWithoutOfficeInput | InventoryTransactionUpsertWithWhereUniqueWithoutOfficeInput[]
    createMany?: InventoryTransactionCreateManyOfficeInputEnvelope
    set?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    disconnect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    delete?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    update?: InventoryTransactionUpdateWithWhereUniqueWithoutOfficeInput | InventoryTransactionUpdateWithWhereUniqueWithoutOfficeInput[]
    updateMany?: InventoryTransactionUpdateManyWithWhereWithoutOfficeInput | InventoryTransactionUpdateManyWithWhereWithoutOfficeInput[]
    deleteMany?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
  }

  export type RequisitionUpdateManyWithoutOfficeNestedInput = {
    create?: XOR<RequisitionCreateWithoutOfficeInput, RequisitionUncheckedCreateWithoutOfficeInput> | RequisitionCreateWithoutOfficeInput[] | RequisitionUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: RequisitionCreateOrConnectWithoutOfficeInput | RequisitionCreateOrConnectWithoutOfficeInput[]
    upsert?: RequisitionUpsertWithWhereUniqueWithoutOfficeInput | RequisitionUpsertWithWhereUniqueWithoutOfficeInput[]
    createMany?: RequisitionCreateManyOfficeInputEnvelope
    set?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    disconnect?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    delete?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    connect?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    update?: RequisitionUpdateWithWhereUniqueWithoutOfficeInput | RequisitionUpdateWithWhereUniqueWithoutOfficeInput[]
    updateMany?: RequisitionUpdateManyWithWhereWithoutOfficeInput | RequisitionUpdateManyWithWhereWithoutOfficeInput[]
    deleteMany?: RequisitionScalarWhereInput | RequisitionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutOfficeNestedInput = {
    create?: XOR<UserCreateWithoutOfficeInput, UserUncheckedCreateWithoutOfficeInput> | UserCreateWithoutOfficeInput[] | UserUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOfficeInput | UserCreateOrConnectWithoutOfficeInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOfficeInput | UserUpsertWithWhereUniqueWithoutOfficeInput[]
    createMany?: UserCreateManyOfficeInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOfficeInput | UserUpdateWithWhereUniqueWithoutOfficeInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOfficeInput | UserUpdateManyWithWhereWithoutOfficeInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type InventoryBatchUncheckedUpdateManyWithoutOfficeNestedInput = {
    create?: XOR<InventoryBatchCreateWithoutOfficeInput, InventoryBatchUncheckedCreateWithoutOfficeInput> | InventoryBatchCreateWithoutOfficeInput[] | InventoryBatchUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: InventoryBatchCreateOrConnectWithoutOfficeInput | InventoryBatchCreateOrConnectWithoutOfficeInput[]
    upsert?: InventoryBatchUpsertWithWhereUniqueWithoutOfficeInput | InventoryBatchUpsertWithWhereUniqueWithoutOfficeInput[]
    createMany?: InventoryBatchCreateManyOfficeInputEnvelope
    set?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    disconnect?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    delete?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    connect?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    update?: InventoryBatchUpdateWithWhereUniqueWithoutOfficeInput | InventoryBatchUpdateWithWhereUniqueWithoutOfficeInput[]
    updateMany?: InventoryBatchUpdateManyWithWhereWithoutOfficeInput | InventoryBatchUpdateManyWithWhereWithoutOfficeInput[]
    deleteMany?: InventoryBatchScalarWhereInput | InventoryBatchScalarWhereInput[]
  }

  export type InventoryTransactionUncheckedUpdateManyWithoutOfficeNestedInput = {
    create?: XOR<InventoryTransactionCreateWithoutOfficeInput, InventoryTransactionUncheckedCreateWithoutOfficeInput> | InventoryTransactionCreateWithoutOfficeInput[] | InventoryTransactionUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutOfficeInput | InventoryTransactionCreateOrConnectWithoutOfficeInput[]
    upsert?: InventoryTransactionUpsertWithWhereUniqueWithoutOfficeInput | InventoryTransactionUpsertWithWhereUniqueWithoutOfficeInput[]
    createMany?: InventoryTransactionCreateManyOfficeInputEnvelope
    set?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    disconnect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    delete?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    update?: InventoryTransactionUpdateWithWhereUniqueWithoutOfficeInput | InventoryTransactionUpdateWithWhereUniqueWithoutOfficeInput[]
    updateMany?: InventoryTransactionUpdateManyWithWhereWithoutOfficeInput | InventoryTransactionUpdateManyWithWhereWithoutOfficeInput[]
    deleteMany?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
  }

  export type RequisitionUncheckedUpdateManyWithoutOfficeNestedInput = {
    create?: XOR<RequisitionCreateWithoutOfficeInput, RequisitionUncheckedCreateWithoutOfficeInput> | RequisitionCreateWithoutOfficeInput[] | RequisitionUncheckedCreateWithoutOfficeInput[]
    connectOrCreate?: RequisitionCreateOrConnectWithoutOfficeInput | RequisitionCreateOrConnectWithoutOfficeInput[]
    upsert?: RequisitionUpsertWithWhereUniqueWithoutOfficeInput | RequisitionUpsertWithWhereUniqueWithoutOfficeInput[]
    createMany?: RequisitionCreateManyOfficeInputEnvelope
    set?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    disconnect?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    delete?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    connect?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    update?: RequisitionUpdateWithWhereUniqueWithoutOfficeInput | RequisitionUpdateWithWhereUniqueWithoutOfficeInput[]
    updateMany?: RequisitionUpdateManyWithWhereWithoutOfficeInput | RequisitionUpdateManyWithWhereWithoutOfficeInput[]
    deleteMany?: RequisitionScalarWhereInput | RequisitionScalarWhereInput[]
  }

  export type OfficeCreateNestedOneWithoutUsersInput = {
    create?: XOR<OfficeCreateWithoutUsersInput, OfficeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutUsersInput
    connect?: OfficeWhereUniqueInput
  }

  export type RequisitionCreateNestedManyWithoutRequestedByInput = {
    create?: XOR<RequisitionCreateWithoutRequestedByInput, RequisitionUncheckedCreateWithoutRequestedByInput> | RequisitionCreateWithoutRequestedByInput[] | RequisitionUncheckedCreateWithoutRequestedByInput[]
    connectOrCreate?: RequisitionCreateOrConnectWithoutRequestedByInput | RequisitionCreateOrConnectWithoutRequestedByInput[]
    createMany?: RequisitionCreateManyRequestedByInputEnvelope
    connect?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
  }

  export type RequisitionUncheckedCreateNestedManyWithoutRequestedByInput = {
    create?: XOR<RequisitionCreateWithoutRequestedByInput, RequisitionUncheckedCreateWithoutRequestedByInput> | RequisitionCreateWithoutRequestedByInput[] | RequisitionUncheckedCreateWithoutRequestedByInput[]
    connectOrCreate?: RequisitionCreateOrConnectWithoutRequestedByInput | RequisitionCreateOrConnectWithoutRequestedByInput[]
    createMany?: RequisitionCreateManyRequestedByInputEnvelope
    connect?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OfficeUpdateOneWithoutUsersNestedInput = {
    create?: XOR<OfficeCreateWithoutUsersInput, OfficeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutUsersInput
    upsert?: OfficeUpsertWithoutUsersInput
    disconnect?: OfficeWhereInput | boolean
    delete?: OfficeWhereInput | boolean
    connect?: OfficeWhereUniqueInput
    update?: XOR<XOR<OfficeUpdateToOneWithWhereWithoutUsersInput, OfficeUpdateWithoutUsersInput>, OfficeUncheckedUpdateWithoutUsersInput>
  }

  export type RequisitionUpdateManyWithoutRequestedByNestedInput = {
    create?: XOR<RequisitionCreateWithoutRequestedByInput, RequisitionUncheckedCreateWithoutRequestedByInput> | RequisitionCreateWithoutRequestedByInput[] | RequisitionUncheckedCreateWithoutRequestedByInput[]
    connectOrCreate?: RequisitionCreateOrConnectWithoutRequestedByInput | RequisitionCreateOrConnectWithoutRequestedByInput[]
    upsert?: RequisitionUpsertWithWhereUniqueWithoutRequestedByInput | RequisitionUpsertWithWhereUniqueWithoutRequestedByInput[]
    createMany?: RequisitionCreateManyRequestedByInputEnvelope
    set?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    disconnect?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    delete?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    connect?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    update?: RequisitionUpdateWithWhereUniqueWithoutRequestedByInput | RequisitionUpdateWithWhereUniqueWithoutRequestedByInput[]
    updateMany?: RequisitionUpdateManyWithWhereWithoutRequestedByInput | RequisitionUpdateManyWithWhereWithoutRequestedByInput[]
    deleteMany?: RequisitionScalarWhereInput | RequisitionScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RequisitionUncheckedUpdateManyWithoutRequestedByNestedInput = {
    create?: XOR<RequisitionCreateWithoutRequestedByInput, RequisitionUncheckedCreateWithoutRequestedByInput> | RequisitionCreateWithoutRequestedByInput[] | RequisitionUncheckedCreateWithoutRequestedByInput[]
    connectOrCreate?: RequisitionCreateOrConnectWithoutRequestedByInput | RequisitionCreateOrConnectWithoutRequestedByInput[]
    upsert?: RequisitionUpsertWithWhereUniqueWithoutRequestedByInput | RequisitionUpsertWithWhereUniqueWithoutRequestedByInput[]
    createMany?: RequisitionCreateManyRequestedByInputEnvelope
    set?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    disconnect?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    delete?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    connect?: RequisitionWhereUniqueInput | RequisitionWhereUniqueInput[]
    update?: RequisitionUpdateWithWhereUniqueWithoutRequestedByInput | RequisitionUpdateWithWhereUniqueWithoutRequestedByInput[]
    updateMany?: RequisitionUpdateManyWithWhereWithoutRequestedByInput | RequisitionUpdateManyWithWhereWithoutRequestedByInput[]
    deleteMany?: RequisitionScalarWhereInput | RequisitionScalarWhereInput[]
  }

  export type InventoryBatchCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<InventoryBatchCreateWithoutInventoryItemInput, InventoryBatchUncheckedCreateWithoutInventoryItemInput> | InventoryBatchCreateWithoutInventoryItemInput[] | InventoryBatchUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryBatchCreateOrConnectWithoutInventoryItemInput | InventoryBatchCreateOrConnectWithoutInventoryItemInput[]
    createMany?: InventoryBatchCreateManyInventoryItemInputEnvelope
    connect?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
  }

  export type InventoryTransactionCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryItemInput, InventoryTransactionUncheckedCreateWithoutInventoryItemInput> | InventoryTransactionCreateWithoutInventoryItemInput[] | InventoryTransactionUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryItemInput | InventoryTransactionCreateOrConnectWithoutInventoryItemInput[]
    createMany?: InventoryTransactionCreateManyInventoryItemInputEnvelope
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
  }

  export type RequisitionItemCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<RequisitionItemCreateWithoutInventoryItemInput, RequisitionItemUncheckedCreateWithoutInventoryItemInput> | RequisitionItemCreateWithoutInventoryItemInput[] | RequisitionItemUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: RequisitionItemCreateOrConnectWithoutInventoryItemInput | RequisitionItemCreateOrConnectWithoutInventoryItemInput[]
    createMany?: RequisitionItemCreateManyInventoryItemInputEnvelope
    connect?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
  }

  export type InventoryBatchUncheckedCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<InventoryBatchCreateWithoutInventoryItemInput, InventoryBatchUncheckedCreateWithoutInventoryItemInput> | InventoryBatchCreateWithoutInventoryItemInput[] | InventoryBatchUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryBatchCreateOrConnectWithoutInventoryItemInput | InventoryBatchCreateOrConnectWithoutInventoryItemInput[]
    createMany?: InventoryBatchCreateManyInventoryItemInputEnvelope
    connect?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
  }

  export type InventoryTransactionUncheckedCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryItemInput, InventoryTransactionUncheckedCreateWithoutInventoryItemInput> | InventoryTransactionCreateWithoutInventoryItemInput[] | InventoryTransactionUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryItemInput | InventoryTransactionCreateOrConnectWithoutInventoryItemInput[]
    createMany?: InventoryTransactionCreateManyInventoryItemInputEnvelope
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
  }

  export type RequisitionItemUncheckedCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<RequisitionItemCreateWithoutInventoryItemInput, RequisitionItemUncheckedCreateWithoutInventoryItemInput> | RequisitionItemCreateWithoutInventoryItemInput[] | RequisitionItemUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: RequisitionItemCreateOrConnectWithoutInventoryItemInput | RequisitionItemCreateOrConnectWithoutInventoryItemInput[]
    createMany?: RequisitionItemCreateManyInventoryItemInputEnvelope
    connect?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
  }

  export type InventoryBatchUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<InventoryBatchCreateWithoutInventoryItemInput, InventoryBatchUncheckedCreateWithoutInventoryItemInput> | InventoryBatchCreateWithoutInventoryItemInput[] | InventoryBatchUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryBatchCreateOrConnectWithoutInventoryItemInput | InventoryBatchCreateOrConnectWithoutInventoryItemInput[]
    upsert?: InventoryBatchUpsertWithWhereUniqueWithoutInventoryItemInput | InventoryBatchUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: InventoryBatchCreateManyInventoryItemInputEnvelope
    set?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    disconnect?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    delete?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    connect?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    update?: InventoryBatchUpdateWithWhereUniqueWithoutInventoryItemInput | InventoryBatchUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: InventoryBatchUpdateManyWithWhereWithoutInventoryItemInput | InventoryBatchUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: InventoryBatchScalarWhereInput | InventoryBatchScalarWhereInput[]
  }

  export type InventoryTransactionUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryItemInput, InventoryTransactionUncheckedCreateWithoutInventoryItemInput> | InventoryTransactionCreateWithoutInventoryItemInput[] | InventoryTransactionUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryItemInput | InventoryTransactionCreateOrConnectWithoutInventoryItemInput[]
    upsert?: InventoryTransactionUpsertWithWhereUniqueWithoutInventoryItemInput | InventoryTransactionUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: InventoryTransactionCreateManyInventoryItemInputEnvelope
    set?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    disconnect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    delete?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    update?: InventoryTransactionUpdateWithWhereUniqueWithoutInventoryItemInput | InventoryTransactionUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: InventoryTransactionUpdateManyWithWhereWithoutInventoryItemInput | InventoryTransactionUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
  }

  export type RequisitionItemUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<RequisitionItemCreateWithoutInventoryItemInput, RequisitionItemUncheckedCreateWithoutInventoryItemInput> | RequisitionItemCreateWithoutInventoryItemInput[] | RequisitionItemUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: RequisitionItemCreateOrConnectWithoutInventoryItemInput | RequisitionItemCreateOrConnectWithoutInventoryItemInput[]
    upsert?: RequisitionItemUpsertWithWhereUniqueWithoutInventoryItemInput | RequisitionItemUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: RequisitionItemCreateManyInventoryItemInputEnvelope
    set?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    disconnect?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    delete?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    connect?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    update?: RequisitionItemUpdateWithWhereUniqueWithoutInventoryItemInput | RequisitionItemUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: RequisitionItemUpdateManyWithWhereWithoutInventoryItemInput | RequisitionItemUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: RequisitionItemScalarWhereInput | RequisitionItemScalarWhereInput[]
  }

  export type InventoryBatchUncheckedUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<InventoryBatchCreateWithoutInventoryItemInput, InventoryBatchUncheckedCreateWithoutInventoryItemInput> | InventoryBatchCreateWithoutInventoryItemInput[] | InventoryBatchUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryBatchCreateOrConnectWithoutInventoryItemInput | InventoryBatchCreateOrConnectWithoutInventoryItemInput[]
    upsert?: InventoryBatchUpsertWithWhereUniqueWithoutInventoryItemInput | InventoryBatchUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: InventoryBatchCreateManyInventoryItemInputEnvelope
    set?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    disconnect?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    delete?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    connect?: InventoryBatchWhereUniqueInput | InventoryBatchWhereUniqueInput[]
    update?: InventoryBatchUpdateWithWhereUniqueWithoutInventoryItemInput | InventoryBatchUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: InventoryBatchUpdateManyWithWhereWithoutInventoryItemInput | InventoryBatchUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: InventoryBatchScalarWhereInput | InventoryBatchScalarWhereInput[]
  }

  export type InventoryTransactionUncheckedUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryItemInput, InventoryTransactionUncheckedCreateWithoutInventoryItemInput> | InventoryTransactionCreateWithoutInventoryItemInput[] | InventoryTransactionUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryItemInput | InventoryTransactionCreateOrConnectWithoutInventoryItemInput[]
    upsert?: InventoryTransactionUpsertWithWhereUniqueWithoutInventoryItemInput | InventoryTransactionUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: InventoryTransactionCreateManyInventoryItemInputEnvelope
    set?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    disconnect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    delete?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    update?: InventoryTransactionUpdateWithWhereUniqueWithoutInventoryItemInput | InventoryTransactionUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: InventoryTransactionUpdateManyWithWhereWithoutInventoryItemInput | InventoryTransactionUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
  }

  export type RequisitionItemUncheckedUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<RequisitionItemCreateWithoutInventoryItemInput, RequisitionItemUncheckedCreateWithoutInventoryItemInput> | RequisitionItemCreateWithoutInventoryItemInput[] | RequisitionItemUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: RequisitionItemCreateOrConnectWithoutInventoryItemInput | RequisitionItemCreateOrConnectWithoutInventoryItemInput[]
    upsert?: RequisitionItemUpsertWithWhereUniqueWithoutInventoryItemInput | RequisitionItemUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: RequisitionItemCreateManyInventoryItemInputEnvelope
    set?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    disconnect?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    delete?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    connect?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    update?: RequisitionItemUpdateWithWhereUniqueWithoutInventoryItemInput | RequisitionItemUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: RequisitionItemUpdateManyWithWhereWithoutInventoryItemInput | RequisitionItemUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: RequisitionItemScalarWhereInput | RequisitionItemScalarWhereInput[]
  }

  export type InventoryItemCreateNestedOneWithoutBatchesInput = {
    create?: XOR<InventoryItemCreateWithoutBatchesInput, InventoryItemUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutBatchesInput
    connect?: InventoryItemWhereUniqueInput
  }

  export type OfficeCreateNestedOneWithoutInventoryBatchesInput = {
    create?: XOR<OfficeCreateWithoutInventoryBatchesInput, OfficeUncheckedCreateWithoutInventoryBatchesInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutInventoryBatchesInput
    connect?: OfficeWhereUniqueInput
  }

  export type InventoryTransactionCreateNestedManyWithoutInventoryBatchInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryBatchInput, InventoryTransactionUncheckedCreateWithoutInventoryBatchInput> | InventoryTransactionCreateWithoutInventoryBatchInput[] | InventoryTransactionUncheckedCreateWithoutInventoryBatchInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryBatchInput | InventoryTransactionCreateOrConnectWithoutInventoryBatchInput[]
    createMany?: InventoryTransactionCreateManyInventoryBatchInputEnvelope
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
  }

  export type InventoryTransactionUncheckedCreateNestedManyWithoutInventoryBatchInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryBatchInput, InventoryTransactionUncheckedCreateWithoutInventoryBatchInput> | InventoryTransactionCreateWithoutInventoryBatchInput[] | InventoryTransactionUncheckedCreateWithoutInventoryBatchInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryBatchInput | InventoryTransactionCreateOrConnectWithoutInventoryBatchInput[]
    createMany?: InventoryTransactionCreateManyInventoryBatchInputEnvelope
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type InventoryItemUpdateOneRequiredWithoutBatchesNestedInput = {
    create?: XOR<InventoryItemCreateWithoutBatchesInput, InventoryItemUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutBatchesInput
    upsert?: InventoryItemUpsertWithoutBatchesInput
    connect?: InventoryItemWhereUniqueInput
    update?: XOR<XOR<InventoryItemUpdateToOneWithWhereWithoutBatchesInput, InventoryItemUpdateWithoutBatchesInput>, InventoryItemUncheckedUpdateWithoutBatchesInput>
  }

  export type OfficeUpdateOneWithoutInventoryBatchesNestedInput = {
    create?: XOR<OfficeCreateWithoutInventoryBatchesInput, OfficeUncheckedCreateWithoutInventoryBatchesInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutInventoryBatchesInput
    upsert?: OfficeUpsertWithoutInventoryBatchesInput
    disconnect?: OfficeWhereInput | boolean
    delete?: OfficeWhereInput | boolean
    connect?: OfficeWhereUniqueInput
    update?: XOR<XOR<OfficeUpdateToOneWithWhereWithoutInventoryBatchesInput, OfficeUpdateWithoutInventoryBatchesInput>, OfficeUncheckedUpdateWithoutInventoryBatchesInput>
  }

  export type InventoryTransactionUpdateManyWithoutInventoryBatchNestedInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryBatchInput, InventoryTransactionUncheckedCreateWithoutInventoryBatchInput> | InventoryTransactionCreateWithoutInventoryBatchInput[] | InventoryTransactionUncheckedCreateWithoutInventoryBatchInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryBatchInput | InventoryTransactionCreateOrConnectWithoutInventoryBatchInput[]
    upsert?: InventoryTransactionUpsertWithWhereUniqueWithoutInventoryBatchInput | InventoryTransactionUpsertWithWhereUniqueWithoutInventoryBatchInput[]
    createMany?: InventoryTransactionCreateManyInventoryBatchInputEnvelope
    set?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    disconnect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    delete?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    update?: InventoryTransactionUpdateWithWhereUniqueWithoutInventoryBatchInput | InventoryTransactionUpdateWithWhereUniqueWithoutInventoryBatchInput[]
    updateMany?: InventoryTransactionUpdateManyWithWhereWithoutInventoryBatchInput | InventoryTransactionUpdateManyWithWhereWithoutInventoryBatchInput[]
    deleteMany?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
  }

  export type InventoryTransactionUncheckedUpdateManyWithoutInventoryBatchNestedInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryBatchInput, InventoryTransactionUncheckedCreateWithoutInventoryBatchInput> | InventoryTransactionCreateWithoutInventoryBatchInput[] | InventoryTransactionUncheckedCreateWithoutInventoryBatchInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryBatchInput | InventoryTransactionCreateOrConnectWithoutInventoryBatchInput[]
    upsert?: InventoryTransactionUpsertWithWhereUniqueWithoutInventoryBatchInput | InventoryTransactionUpsertWithWhereUniqueWithoutInventoryBatchInput[]
    createMany?: InventoryTransactionCreateManyInventoryBatchInputEnvelope
    set?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    disconnect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    delete?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    update?: InventoryTransactionUpdateWithWhereUniqueWithoutInventoryBatchInput | InventoryTransactionUpdateWithWhereUniqueWithoutInventoryBatchInput[]
    updateMany?: InventoryTransactionUpdateManyWithWhereWithoutInventoryBatchInput | InventoryTransactionUpdateManyWithWhereWithoutInventoryBatchInput[]
    deleteMany?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
  }

  export type InventoryItemCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<InventoryItemCreateWithoutTransactionsInput, InventoryItemUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutTransactionsInput
    connect?: InventoryItemWhereUniqueInput
  }

  export type InventoryBatchCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<InventoryBatchCreateWithoutTransactionsInput, InventoryBatchUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: InventoryBatchCreateOrConnectWithoutTransactionsInput
    connect?: InventoryBatchWhereUniqueInput
  }

  export type OfficeCreateNestedOneWithoutInventoryTransactionsInput = {
    create?: XOR<OfficeCreateWithoutInventoryTransactionsInput, OfficeUncheckedCreateWithoutInventoryTransactionsInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutInventoryTransactionsInput
    connect?: OfficeWhereUniqueInput
  }

  export type InventoryItemUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<InventoryItemCreateWithoutTransactionsInput, InventoryItemUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutTransactionsInput
    upsert?: InventoryItemUpsertWithoutTransactionsInput
    connect?: InventoryItemWhereUniqueInput
    update?: XOR<XOR<InventoryItemUpdateToOneWithWhereWithoutTransactionsInput, InventoryItemUpdateWithoutTransactionsInput>, InventoryItemUncheckedUpdateWithoutTransactionsInput>
  }

  export type InventoryBatchUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<InventoryBatchCreateWithoutTransactionsInput, InventoryBatchUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: InventoryBatchCreateOrConnectWithoutTransactionsInput
    upsert?: InventoryBatchUpsertWithoutTransactionsInput
    disconnect?: InventoryBatchWhereInput | boolean
    delete?: InventoryBatchWhereInput | boolean
    connect?: InventoryBatchWhereUniqueInput
    update?: XOR<XOR<InventoryBatchUpdateToOneWithWhereWithoutTransactionsInput, InventoryBatchUpdateWithoutTransactionsInput>, InventoryBatchUncheckedUpdateWithoutTransactionsInput>
  }

  export type OfficeUpdateOneWithoutInventoryTransactionsNestedInput = {
    create?: XOR<OfficeCreateWithoutInventoryTransactionsInput, OfficeUncheckedCreateWithoutInventoryTransactionsInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutInventoryTransactionsInput
    upsert?: OfficeUpsertWithoutInventoryTransactionsInput
    disconnect?: OfficeWhereInput | boolean
    delete?: OfficeWhereInput | boolean
    connect?: OfficeWhereUniqueInput
    update?: XOR<XOR<OfficeUpdateToOneWithWhereWithoutInventoryTransactionsInput, OfficeUpdateWithoutInventoryTransactionsInput>, OfficeUncheckedUpdateWithoutInventoryTransactionsInput>
  }

  export type UserCreateNestedOneWithoutRequisitionsInput = {
    create?: XOR<UserCreateWithoutRequisitionsInput, UserUncheckedCreateWithoutRequisitionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequisitionsInput
    connect?: UserWhereUniqueInput
  }

  export type OfficeCreateNestedOneWithoutRequisitionsInput = {
    create?: XOR<OfficeCreateWithoutRequisitionsInput, OfficeUncheckedCreateWithoutRequisitionsInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutRequisitionsInput
    connect?: OfficeWhereUniqueInput
  }

  export type RequisitionItemCreateNestedManyWithoutRequisitionInput = {
    create?: XOR<RequisitionItemCreateWithoutRequisitionInput, RequisitionItemUncheckedCreateWithoutRequisitionInput> | RequisitionItemCreateWithoutRequisitionInput[] | RequisitionItemUncheckedCreateWithoutRequisitionInput[]
    connectOrCreate?: RequisitionItemCreateOrConnectWithoutRequisitionInput | RequisitionItemCreateOrConnectWithoutRequisitionInput[]
    createMany?: RequisitionItemCreateManyRequisitionInputEnvelope
    connect?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
  }

  export type RequisitionItemUncheckedCreateNestedManyWithoutRequisitionInput = {
    create?: XOR<RequisitionItemCreateWithoutRequisitionInput, RequisitionItemUncheckedCreateWithoutRequisitionInput> | RequisitionItemCreateWithoutRequisitionInput[] | RequisitionItemUncheckedCreateWithoutRequisitionInput[]
    connectOrCreate?: RequisitionItemCreateOrConnectWithoutRequisitionInput | RequisitionItemCreateOrConnectWithoutRequisitionInput[]
    createMany?: RequisitionItemCreateManyRequisitionInputEnvelope
    connect?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutRequisitionsNestedInput = {
    create?: XOR<UserCreateWithoutRequisitionsInput, UserUncheckedCreateWithoutRequisitionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequisitionsInput
    upsert?: UserUpsertWithoutRequisitionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequisitionsInput, UserUpdateWithoutRequisitionsInput>, UserUncheckedUpdateWithoutRequisitionsInput>
  }

  export type OfficeUpdateOneWithoutRequisitionsNestedInput = {
    create?: XOR<OfficeCreateWithoutRequisitionsInput, OfficeUncheckedCreateWithoutRequisitionsInput>
    connectOrCreate?: OfficeCreateOrConnectWithoutRequisitionsInput
    upsert?: OfficeUpsertWithoutRequisitionsInput
    disconnect?: OfficeWhereInput | boolean
    delete?: OfficeWhereInput | boolean
    connect?: OfficeWhereUniqueInput
    update?: XOR<XOR<OfficeUpdateToOneWithWhereWithoutRequisitionsInput, OfficeUpdateWithoutRequisitionsInput>, OfficeUncheckedUpdateWithoutRequisitionsInput>
  }

  export type RequisitionItemUpdateManyWithoutRequisitionNestedInput = {
    create?: XOR<RequisitionItemCreateWithoutRequisitionInput, RequisitionItemUncheckedCreateWithoutRequisitionInput> | RequisitionItemCreateWithoutRequisitionInput[] | RequisitionItemUncheckedCreateWithoutRequisitionInput[]
    connectOrCreate?: RequisitionItemCreateOrConnectWithoutRequisitionInput | RequisitionItemCreateOrConnectWithoutRequisitionInput[]
    upsert?: RequisitionItemUpsertWithWhereUniqueWithoutRequisitionInput | RequisitionItemUpsertWithWhereUniqueWithoutRequisitionInput[]
    createMany?: RequisitionItemCreateManyRequisitionInputEnvelope
    set?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    disconnect?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    delete?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    connect?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    update?: RequisitionItemUpdateWithWhereUniqueWithoutRequisitionInput | RequisitionItemUpdateWithWhereUniqueWithoutRequisitionInput[]
    updateMany?: RequisitionItemUpdateManyWithWhereWithoutRequisitionInput | RequisitionItemUpdateManyWithWhereWithoutRequisitionInput[]
    deleteMany?: RequisitionItemScalarWhereInput | RequisitionItemScalarWhereInput[]
  }

  export type RequisitionItemUncheckedUpdateManyWithoutRequisitionNestedInput = {
    create?: XOR<RequisitionItemCreateWithoutRequisitionInput, RequisitionItemUncheckedCreateWithoutRequisitionInput> | RequisitionItemCreateWithoutRequisitionInput[] | RequisitionItemUncheckedCreateWithoutRequisitionInput[]
    connectOrCreate?: RequisitionItemCreateOrConnectWithoutRequisitionInput | RequisitionItemCreateOrConnectWithoutRequisitionInput[]
    upsert?: RequisitionItemUpsertWithWhereUniqueWithoutRequisitionInput | RequisitionItemUpsertWithWhereUniqueWithoutRequisitionInput[]
    createMany?: RequisitionItemCreateManyRequisitionInputEnvelope
    set?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    disconnect?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    delete?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    connect?: RequisitionItemWhereUniqueInput | RequisitionItemWhereUniqueInput[]
    update?: RequisitionItemUpdateWithWhereUniqueWithoutRequisitionInput | RequisitionItemUpdateWithWhereUniqueWithoutRequisitionInput[]
    updateMany?: RequisitionItemUpdateManyWithWhereWithoutRequisitionInput | RequisitionItemUpdateManyWithWhereWithoutRequisitionInput[]
    deleteMany?: RequisitionItemScalarWhereInput | RequisitionItemScalarWhereInput[]
  }

  export type RequisitionCreateNestedOneWithoutItemsInput = {
    create?: XOR<RequisitionCreateWithoutItemsInput, RequisitionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RequisitionCreateOrConnectWithoutItemsInput
    connect?: RequisitionWhereUniqueInput
  }

  export type InventoryItemCreateNestedOneWithoutRequisitionItemsInput = {
    create?: XOR<InventoryItemCreateWithoutRequisitionItemsInput, InventoryItemUncheckedCreateWithoutRequisitionItemsInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutRequisitionItemsInput
    connect?: InventoryItemWhereUniqueInput
  }

  export type RequisitionUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<RequisitionCreateWithoutItemsInput, RequisitionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RequisitionCreateOrConnectWithoutItemsInput
    upsert?: RequisitionUpsertWithoutItemsInput
    connect?: RequisitionWhereUniqueInput
    update?: XOR<XOR<RequisitionUpdateToOneWithWhereWithoutItemsInput, RequisitionUpdateWithoutItemsInput>, RequisitionUncheckedUpdateWithoutItemsInput>
  }

  export type InventoryItemUpdateOneWithoutRequisitionItemsNestedInput = {
    create?: XOR<InventoryItemCreateWithoutRequisitionItemsInput, InventoryItemUncheckedCreateWithoutRequisitionItemsInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutRequisitionItemsInput
    upsert?: InventoryItemUpsertWithoutRequisitionItemsInput
    disconnect?: InventoryItemWhereInput | boolean
    delete?: InventoryItemWhereInput | boolean
    connect?: InventoryItemWhereUniqueInput
    update?: XOR<XOR<InventoryItemUpdateToOneWithWhereWithoutRequisitionItemsInput, InventoryItemUpdateWithoutRequisitionItemsInput>, InventoryItemUncheckedUpdateWithoutRequisitionItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutOfficeInput = {
    name: string
    email: string
    password: string
    isAdmin?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requisitions?: RequisitionCreateNestedManyWithoutRequestedByInput
  }

  export type UserUncheckedCreateWithoutOfficeInput = {
    id?: number
    name: string
    email: string
    password: string
    isAdmin?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requisitions?: RequisitionUncheckedCreateNestedManyWithoutRequestedByInput
  }

  export type UserCreateOrConnectWithoutOfficeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOfficeInput, UserUncheckedCreateWithoutOfficeInput>
  }

  export type UserCreateManyOfficeInputEnvelope = {
    data: UserCreateManyOfficeInput | UserCreateManyOfficeInput[]
    skipDuplicates?: boolean
  }

  export type InventoryBatchCreateWithoutOfficeInput = {
    batchId: string
    brand?: string | null
    supplier?: string | null
    stockNumber?: string | null
    expiryDate?: Date | string | null
    stock?: number
    transactionCount?: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItem: InventoryItemCreateNestedOneWithoutBatchesInput
    transactions?: InventoryTransactionCreateNestedManyWithoutInventoryBatchInput
  }

  export type InventoryBatchUncheckedCreateWithoutOfficeInput = {
    id?: number
    inventoryItemId: number
    batchId: string
    brand?: string | null
    supplier?: string | null
    stockNumber?: string | null
    expiryDate?: Date | string | null
    stock?: number
    transactionCount?: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: InventoryTransactionUncheckedCreateNestedManyWithoutInventoryBatchInput
  }

  export type InventoryBatchCreateOrConnectWithoutOfficeInput = {
    where: InventoryBatchWhereUniqueInput
    create: XOR<InventoryBatchCreateWithoutOfficeInput, InventoryBatchUncheckedCreateWithoutOfficeInput>
  }

  export type InventoryBatchCreateManyOfficeInputEnvelope = {
    data: InventoryBatchCreateManyOfficeInput | InventoryBatchCreateManyOfficeInput[]
    skipDuplicates?: boolean
  }

  export type InventoryTransactionCreateWithoutOfficeInput = {
    date?: Date | string
    reference?: string | null
    receiptQty?: number
    issuanceQty?: number
    balance: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItem: InventoryItemCreateNestedOneWithoutTransactionsInput
    inventoryBatch?: InventoryBatchCreateNestedOneWithoutTransactionsInput
  }

  export type InventoryTransactionUncheckedCreateWithoutOfficeInput = {
    id?: number
    inventoryItemId: number
    inventoryBatchId?: number | null
    date?: Date | string
    reference?: string | null
    receiptQty?: number
    issuanceQty?: number
    balance: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionCreateOrConnectWithoutOfficeInput = {
    where: InventoryTransactionWhereUniqueInput
    create: XOR<InventoryTransactionCreateWithoutOfficeInput, InventoryTransactionUncheckedCreateWithoutOfficeInput>
  }

  export type InventoryTransactionCreateManyOfficeInputEnvelope = {
    data: InventoryTransactionCreateManyOfficeInput | InventoryTransactionCreateManyOfficeInput[]
    skipDuplicates?: boolean
  }

  export type RequisitionCreateWithoutOfficeInput = {
    risNo: string
    responsibilityCenterCode?: string | null
    requestDate?: Date | string
    role?: string | null
    purpose?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestedBy?: UserCreateNestedOneWithoutRequisitionsInput
    items?: RequisitionItemCreateNestedManyWithoutRequisitionInput
  }

  export type RequisitionUncheckedCreateWithoutOfficeInput = {
    id?: number
    risNo: string
    responsibilityCenterCode?: string | null
    requestDate?: Date | string
    requestedById?: number | null
    role?: string | null
    purpose?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: RequisitionItemUncheckedCreateNestedManyWithoutRequisitionInput
  }

  export type RequisitionCreateOrConnectWithoutOfficeInput = {
    where: RequisitionWhereUniqueInput
    create: XOR<RequisitionCreateWithoutOfficeInput, RequisitionUncheckedCreateWithoutOfficeInput>
  }

  export type RequisitionCreateManyOfficeInputEnvelope = {
    data: RequisitionCreateManyOfficeInput | RequisitionCreateManyOfficeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOfficeInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOfficeInput, UserUncheckedUpdateWithoutOfficeInput>
    create: XOR<UserCreateWithoutOfficeInput, UserUncheckedCreateWithoutOfficeInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOfficeInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOfficeInput, UserUncheckedUpdateWithoutOfficeInput>
  }

  export type UserUpdateManyWithWhereWithoutOfficeInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOfficeInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    officeId?: IntNullableFilter<"User"> | number | null
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type InventoryBatchUpsertWithWhereUniqueWithoutOfficeInput = {
    where: InventoryBatchWhereUniqueInput
    update: XOR<InventoryBatchUpdateWithoutOfficeInput, InventoryBatchUncheckedUpdateWithoutOfficeInput>
    create: XOR<InventoryBatchCreateWithoutOfficeInput, InventoryBatchUncheckedCreateWithoutOfficeInput>
  }

  export type InventoryBatchUpdateWithWhereUniqueWithoutOfficeInput = {
    where: InventoryBatchWhereUniqueInput
    data: XOR<InventoryBatchUpdateWithoutOfficeInput, InventoryBatchUncheckedUpdateWithoutOfficeInput>
  }

  export type InventoryBatchUpdateManyWithWhereWithoutOfficeInput = {
    where: InventoryBatchScalarWhereInput
    data: XOR<InventoryBatchUpdateManyMutationInput, InventoryBatchUncheckedUpdateManyWithoutOfficeInput>
  }

  export type InventoryBatchScalarWhereInput = {
    AND?: InventoryBatchScalarWhereInput | InventoryBatchScalarWhereInput[]
    OR?: InventoryBatchScalarWhereInput[]
    NOT?: InventoryBatchScalarWhereInput | InventoryBatchScalarWhereInput[]
    id?: IntFilter<"InventoryBatch"> | number
    inventoryItemId?: IntFilter<"InventoryBatch"> | number
    batchId?: StringFilter<"InventoryBatch"> | string
    brand?: StringNullableFilter<"InventoryBatch"> | string | null
    supplier?: StringNullableFilter<"InventoryBatch"> | string | null
    stockNumber?: StringNullableFilter<"InventoryBatch"> | string | null
    expiryDate?: DateTimeNullableFilter<"InventoryBatch"> | Date | string | null
    officeId?: IntNullableFilter<"InventoryBatch"> | number | null
    stock?: IntFilter<"InventoryBatch"> | number
    transactionCount?: IntFilter<"InventoryBatch"> | number
    ptr?: StringNullableFilter<"InventoryBatch"> | string | null
    costPerUnit?: DecimalNullableFilter<"InventoryBatch"> | Decimal | DecimalJsLike | number | string | null
    remarks?: StringNullableFilter<"InventoryBatch"> | string | null
    createdAt?: DateTimeFilter<"InventoryBatch"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryBatch"> | Date | string
  }

  export type InventoryTransactionUpsertWithWhereUniqueWithoutOfficeInput = {
    where: InventoryTransactionWhereUniqueInput
    update: XOR<InventoryTransactionUpdateWithoutOfficeInput, InventoryTransactionUncheckedUpdateWithoutOfficeInput>
    create: XOR<InventoryTransactionCreateWithoutOfficeInput, InventoryTransactionUncheckedCreateWithoutOfficeInput>
  }

  export type InventoryTransactionUpdateWithWhereUniqueWithoutOfficeInput = {
    where: InventoryTransactionWhereUniqueInput
    data: XOR<InventoryTransactionUpdateWithoutOfficeInput, InventoryTransactionUncheckedUpdateWithoutOfficeInput>
  }

  export type InventoryTransactionUpdateManyWithWhereWithoutOfficeInput = {
    where: InventoryTransactionScalarWhereInput
    data: XOR<InventoryTransactionUpdateManyMutationInput, InventoryTransactionUncheckedUpdateManyWithoutOfficeInput>
  }

  export type InventoryTransactionScalarWhereInput = {
    AND?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
    OR?: InventoryTransactionScalarWhereInput[]
    NOT?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
    id?: IntFilter<"InventoryTransaction"> | number
    inventoryItemId?: IntFilter<"InventoryTransaction"> | number
    inventoryBatchId?: IntNullableFilter<"InventoryTransaction"> | number | null
    date?: DateTimeFilter<"InventoryTransaction"> | Date | string
    reference?: StringNullableFilter<"InventoryTransaction"> | string | null
    receiptQty?: IntFilter<"InventoryTransaction"> | number
    issuanceQty?: IntFilter<"InventoryTransaction"> | number
    balance?: IntFilter<"InventoryTransaction"> | number
    officeId?: IntNullableFilter<"InventoryTransaction"> | number | null
    ptr?: StringNullableFilter<"InventoryTransaction"> | string | null
    costPerUnit?: DecimalNullableFilter<"InventoryTransaction"> | Decimal | DecimalJsLike | number | string | null
    remarks?: StringNullableFilter<"InventoryTransaction"> | string | null
    createdAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
  }

  export type RequisitionUpsertWithWhereUniqueWithoutOfficeInput = {
    where: RequisitionWhereUniqueInput
    update: XOR<RequisitionUpdateWithoutOfficeInput, RequisitionUncheckedUpdateWithoutOfficeInput>
    create: XOR<RequisitionCreateWithoutOfficeInput, RequisitionUncheckedCreateWithoutOfficeInput>
  }

  export type RequisitionUpdateWithWhereUniqueWithoutOfficeInput = {
    where: RequisitionWhereUniqueInput
    data: XOR<RequisitionUpdateWithoutOfficeInput, RequisitionUncheckedUpdateWithoutOfficeInput>
  }

  export type RequisitionUpdateManyWithWhereWithoutOfficeInput = {
    where: RequisitionScalarWhereInput
    data: XOR<RequisitionUpdateManyMutationInput, RequisitionUncheckedUpdateManyWithoutOfficeInput>
  }

  export type RequisitionScalarWhereInput = {
    AND?: RequisitionScalarWhereInput | RequisitionScalarWhereInput[]
    OR?: RequisitionScalarWhereInput[]
    NOT?: RequisitionScalarWhereInput | RequisitionScalarWhereInput[]
    id?: IntFilter<"Requisition"> | number
    risNo?: StringFilter<"Requisition"> | string
    responsibilityCenterCode?: StringNullableFilter<"Requisition"> | string | null
    requestDate?: DateTimeFilter<"Requisition"> | Date | string
    requestedById?: IntNullableFilter<"Requisition"> | number | null
    role?: StringNullableFilter<"Requisition"> | string | null
    officeId?: IntNullableFilter<"Requisition"> | number | null
    purpose?: StringNullableFilter<"Requisition"> | string | null
    status?: StringFilter<"Requisition"> | string
    createdAt?: DateTimeFilter<"Requisition"> | Date | string
    updatedAt?: DateTimeFilter<"Requisition"> | Date | string
  }

  export type OfficeCreateWithoutUsersInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryBatches?: InventoryBatchCreateNestedManyWithoutOfficeInput
    inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutOfficeInput
    requisitions?: RequisitionCreateNestedManyWithoutOfficeInput
  }

  export type OfficeUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryBatches?: InventoryBatchUncheckedCreateNestedManyWithoutOfficeInput
    inventoryTransactions?: InventoryTransactionUncheckedCreateNestedManyWithoutOfficeInput
    requisitions?: RequisitionUncheckedCreateNestedManyWithoutOfficeInput
  }

  export type OfficeCreateOrConnectWithoutUsersInput = {
    where: OfficeWhereUniqueInput
    create: XOR<OfficeCreateWithoutUsersInput, OfficeUncheckedCreateWithoutUsersInput>
  }

  export type RequisitionCreateWithoutRequestedByInput = {
    risNo: string
    responsibilityCenterCode?: string | null
    requestDate?: Date | string
    role?: string | null
    purpose?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    office?: OfficeCreateNestedOneWithoutRequisitionsInput
    items?: RequisitionItemCreateNestedManyWithoutRequisitionInput
  }

  export type RequisitionUncheckedCreateWithoutRequestedByInput = {
    id?: number
    risNo: string
    responsibilityCenterCode?: string | null
    requestDate?: Date | string
    role?: string | null
    officeId?: number | null
    purpose?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: RequisitionItemUncheckedCreateNestedManyWithoutRequisitionInput
  }

  export type RequisitionCreateOrConnectWithoutRequestedByInput = {
    where: RequisitionWhereUniqueInput
    create: XOR<RequisitionCreateWithoutRequestedByInput, RequisitionUncheckedCreateWithoutRequestedByInput>
  }

  export type RequisitionCreateManyRequestedByInputEnvelope = {
    data: RequisitionCreateManyRequestedByInput | RequisitionCreateManyRequestedByInput[]
    skipDuplicates?: boolean
  }

  export type OfficeUpsertWithoutUsersInput = {
    update: XOR<OfficeUpdateWithoutUsersInput, OfficeUncheckedUpdateWithoutUsersInput>
    create: XOR<OfficeCreateWithoutUsersInput, OfficeUncheckedCreateWithoutUsersInput>
    where?: OfficeWhereInput
  }

  export type OfficeUpdateToOneWithWhereWithoutUsersInput = {
    where?: OfficeWhereInput
    data: XOR<OfficeUpdateWithoutUsersInput, OfficeUncheckedUpdateWithoutUsersInput>
  }

  export type OfficeUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryBatches?: InventoryBatchUpdateManyWithoutOfficeNestedInput
    inventoryTransactions?: InventoryTransactionUpdateManyWithoutOfficeNestedInput
    requisitions?: RequisitionUpdateManyWithoutOfficeNestedInput
  }

  export type OfficeUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryBatches?: InventoryBatchUncheckedUpdateManyWithoutOfficeNestedInput
    inventoryTransactions?: InventoryTransactionUncheckedUpdateManyWithoutOfficeNestedInput
    requisitions?: RequisitionUncheckedUpdateManyWithoutOfficeNestedInput
  }

  export type RequisitionUpsertWithWhereUniqueWithoutRequestedByInput = {
    where: RequisitionWhereUniqueInput
    update: XOR<RequisitionUpdateWithoutRequestedByInput, RequisitionUncheckedUpdateWithoutRequestedByInput>
    create: XOR<RequisitionCreateWithoutRequestedByInput, RequisitionUncheckedCreateWithoutRequestedByInput>
  }

  export type RequisitionUpdateWithWhereUniqueWithoutRequestedByInput = {
    where: RequisitionWhereUniqueInput
    data: XOR<RequisitionUpdateWithoutRequestedByInput, RequisitionUncheckedUpdateWithoutRequestedByInput>
  }

  export type RequisitionUpdateManyWithWhereWithoutRequestedByInput = {
    where: RequisitionScalarWhereInput
    data: XOR<RequisitionUpdateManyMutationInput, RequisitionUncheckedUpdateManyWithoutRequestedByInput>
  }

  export type InventoryBatchCreateWithoutInventoryItemInput = {
    batchId: string
    brand?: string | null
    supplier?: string | null
    stockNumber?: string | null
    expiryDate?: Date | string | null
    stock?: number
    transactionCount?: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    office?: OfficeCreateNestedOneWithoutInventoryBatchesInput
    transactions?: InventoryTransactionCreateNestedManyWithoutInventoryBatchInput
  }

  export type InventoryBatchUncheckedCreateWithoutInventoryItemInput = {
    id?: number
    batchId: string
    brand?: string | null
    supplier?: string | null
    stockNumber?: string | null
    expiryDate?: Date | string | null
    officeId?: number | null
    stock?: number
    transactionCount?: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: InventoryTransactionUncheckedCreateNestedManyWithoutInventoryBatchInput
  }

  export type InventoryBatchCreateOrConnectWithoutInventoryItemInput = {
    where: InventoryBatchWhereUniqueInput
    create: XOR<InventoryBatchCreateWithoutInventoryItemInput, InventoryBatchUncheckedCreateWithoutInventoryItemInput>
  }

  export type InventoryBatchCreateManyInventoryItemInputEnvelope = {
    data: InventoryBatchCreateManyInventoryItemInput | InventoryBatchCreateManyInventoryItemInput[]
    skipDuplicates?: boolean
  }

  export type InventoryTransactionCreateWithoutInventoryItemInput = {
    date?: Date | string
    reference?: string | null
    receiptQty?: number
    issuanceQty?: number
    balance: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryBatch?: InventoryBatchCreateNestedOneWithoutTransactionsInput
    office?: OfficeCreateNestedOneWithoutInventoryTransactionsInput
  }

  export type InventoryTransactionUncheckedCreateWithoutInventoryItemInput = {
    id?: number
    inventoryBatchId?: number | null
    date?: Date | string
    reference?: string | null
    receiptQty?: number
    issuanceQty?: number
    balance: number
    officeId?: number | null
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionCreateOrConnectWithoutInventoryItemInput = {
    where: InventoryTransactionWhereUniqueInput
    create: XOR<InventoryTransactionCreateWithoutInventoryItemInput, InventoryTransactionUncheckedCreateWithoutInventoryItemInput>
  }

  export type InventoryTransactionCreateManyInventoryItemInputEnvelope = {
    data: InventoryTransactionCreateManyInventoryItemInput | InventoryTransactionCreateManyInventoryItemInput[]
    skipDuplicates?: boolean
  }

  export type RequisitionItemCreateWithoutInventoryItemInput = {
    itemName: string
    quantity: number
    unit: string
    stockNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requisition: RequisitionCreateNestedOneWithoutItemsInput
  }

  export type RequisitionItemUncheckedCreateWithoutInventoryItemInput = {
    id?: number
    requisitionId: number
    itemName: string
    quantity: number
    unit: string
    stockNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequisitionItemCreateOrConnectWithoutInventoryItemInput = {
    where: RequisitionItemWhereUniqueInput
    create: XOR<RequisitionItemCreateWithoutInventoryItemInput, RequisitionItemUncheckedCreateWithoutInventoryItemInput>
  }

  export type RequisitionItemCreateManyInventoryItemInputEnvelope = {
    data: RequisitionItemCreateManyInventoryItemInput | RequisitionItemCreateManyInventoryItemInput[]
    skipDuplicates?: boolean
  }

  export type InventoryBatchUpsertWithWhereUniqueWithoutInventoryItemInput = {
    where: InventoryBatchWhereUniqueInput
    update: XOR<InventoryBatchUpdateWithoutInventoryItemInput, InventoryBatchUncheckedUpdateWithoutInventoryItemInput>
    create: XOR<InventoryBatchCreateWithoutInventoryItemInput, InventoryBatchUncheckedCreateWithoutInventoryItemInput>
  }

  export type InventoryBatchUpdateWithWhereUniqueWithoutInventoryItemInput = {
    where: InventoryBatchWhereUniqueInput
    data: XOR<InventoryBatchUpdateWithoutInventoryItemInput, InventoryBatchUncheckedUpdateWithoutInventoryItemInput>
  }

  export type InventoryBatchUpdateManyWithWhereWithoutInventoryItemInput = {
    where: InventoryBatchScalarWhereInput
    data: XOR<InventoryBatchUpdateManyMutationInput, InventoryBatchUncheckedUpdateManyWithoutInventoryItemInput>
  }

  export type InventoryTransactionUpsertWithWhereUniqueWithoutInventoryItemInput = {
    where: InventoryTransactionWhereUniqueInput
    update: XOR<InventoryTransactionUpdateWithoutInventoryItemInput, InventoryTransactionUncheckedUpdateWithoutInventoryItemInput>
    create: XOR<InventoryTransactionCreateWithoutInventoryItemInput, InventoryTransactionUncheckedCreateWithoutInventoryItemInput>
  }

  export type InventoryTransactionUpdateWithWhereUniqueWithoutInventoryItemInput = {
    where: InventoryTransactionWhereUniqueInput
    data: XOR<InventoryTransactionUpdateWithoutInventoryItemInput, InventoryTransactionUncheckedUpdateWithoutInventoryItemInput>
  }

  export type InventoryTransactionUpdateManyWithWhereWithoutInventoryItemInput = {
    where: InventoryTransactionScalarWhereInput
    data: XOR<InventoryTransactionUpdateManyMutationInput, InventoryTransactionUncheckedUpdateManyWithoutInventoryItemInput>
  }

  export type RequisitionItemUpsertWithWhereUniqueWithoutInventoryItemInput = {
    where: RequisitionItemWhereUniqueInput
    update: XOR<RequisitionItemUpdateWithoutInventoryItemInput, RequisitionItemUncheckedUpdateWithoutInventoryItemInput>
    create: XOR<RequisitionItemCreateWithoutInventoryItemInput, RequisitionItemUncheckedCreateWithoutInventoryItemInput>
  }

  export type RequisitionItemUpdateWithWhereUniqueWithoutInventoryItemInput = {
    where: RequisitionItemWhereUniqueInput
    data: XOR<RequisitionItemUpdateWithoutInventoryItemInput, RequisitionItemUncheckedUpdateWithoutInventoryItemInput>
  }

  export type RequisitionItemUpdateManyWithWhereWithoutInventoryItemInput = {
    where: RequisitionItemScalarWhereInput
    data: XOR<RequisitionItemUpdateManyMutationInput, RequisitionItemUncheckedUpdateManyWithoutInventoryItemInput>
  }

  export type RequisitionItemScalarWhereInput = {
    AND?: RequisitionItemScalarWhereInput | RequisitionItemScalarWhereInput[]
    OR?: RequisitionItemScalarWhereInput[]
    NOT?: RequisitionItemScalarWhereInput | RequisitionItemScalarWhereInput[]
    id?: IntFilter<"RequisitionItem"> | number
    requisitionId?: IntFilter<"RequisitionItem"> | number
    inventoryItemId?: IntNullableFilter<"RequisitionItem"> | number | null
    itemName?: StringFilter<"RequisitionItem"> | string
    quantity?: IntFilter<"RequisitionItem"> | number
    unit?: StringFilter<"RequisitionItem"> | string
    stockNumber?: StringNullableFilter<"RequisitionItem"> | string | null
    createdAt?: DateTimeFilter<"RequisitionItem"> | Date | string
    updatedAt?: DateTimeFilter<"RequisitionItem"> | Date | string
  }

  export type InventoryItemCreateWithoutBatchesInput = {
    sku: string
    name: string
    location?: string | null
    minStock?: number
    unit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: InventoryTransactionCreateNestedManyWithoutInventoryItemInput
    requisitionItems?: RequisitionItemCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUncheckedCreateWithoutBatchesInput = {
    id?: number
    sku: string
    name: string
    location?: string | null
    minStock?: number
    unit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: InventoryTransactionUncheckedCreateNestedManyWithoutInventoryItemInput
    requisitionItems?: RequisitionItemUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemCreateOrConnectWithoutBatchesInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutBatchesInput, InventoryItemUncheckedCreateWithoutBatchesInput>
  }

  export type OfficeCreateWithoutInventoryBatchesInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOfficeInput
    inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutOfficeInput
    requisitions?: RequisitionCreateNestedManyWithoutOfficeInput
  }

  export type OfficeUncheckedCreateWithoutInventoryBatchesInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOfficeInput
    inventoryTransactions?: InventoryTransactionUncheckedCreateNestedManyWithoutOfficeInput
    requisitions?: RequisitionUncheckedCreateNestedManyWithoutOfficeInput
  }

  export type OfficeCreateOrConnectWithoutInventoryBatchesInput = {
    where: OfficeWhereUniqueInput
    create: XOR<OfficeCreateWithoutInventoryBatchesInput, OfficeUncheckedCreateWithoutInventoryBatchesInput>
  }

  export type InventoryTransactionCreateWithoutInventoryBatchInput = {
    date?: Date | string
    reference?: string | null
    receiptQty?: number
    issuanceQty?: number
    balance: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItem: InventoryItemCreateNestedOneWithoutTransactionsInput
    office?: OfficeCreateNestedOneWithoutInventoryTransactionsInput
  }

  export type InventoryTransactionUncheckedCreateWithoutInventoryBatchInput = {
    id?: number
    inventoryItemId: number
    date?: Date | string
    reference?: string | null
    receiptQty?: number
    issuanceQty?: number
    balance: number
    officeId?: number | null
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionCreateOrConnectWithoutInventoryBatchInput = {
    where: InventoryTransactionWhereUniqueInput
    create: XOR<InventoryTransactionCreateWithoutInventoryBatchInput, InventoryTransactionUncheckedCreateWithoutInventoryBatchInput>
  }

  export type InventoryTransactionCreateManyInventoryBatchInputEnvelope = {
    data: InventoryTransactionCreateManyInventoryBatchInput | InventoryTransactionCreateManyInventoryBatchInput[]
    skipDuplicates?: boolean
  }

  export type InventoryItemUpsertWithoutBatchesInput = {
    update: XOR<InventoryItemUpdateWithoutBatchesInput, InventoryItemUncheckedUpdateWithoutBatchesInput>
    create: XOR<InventoryItemCreateWithoutBatchesInput, InventoryItemUncheckedCreateWithoutBatchesInput>
    where?: InventoryItemWhereInput
  }

  export type InventoryItemUpdateToOneWithWhereWithoutBatchesInput = {
    where?: InventoryItemWhereInput
    data: XOR<InventoryItemUpdateWithoutBatchesInput, InventoryItemUncheckedUpdateWithoutBatchesInput>
  }

  export type InventoryItemUpdateWithoutBatchesInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    minStock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: InventoryTransactionUpdateManyWithoutInventoryItemNestedInput
    requisitionItems?: RequisitionItemUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutBatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    minStock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: InventoryTransactionUncheckedUpdateManyWithoutInventoryItemNestedInput
    requisitionItems?: RequisitionItemUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type OfficeUpsertWithoutInventoryBatchesInput = {
    update: XOR<OfficeUpdateWithoutInventoryBatchesInput, OfficeUncheckedUpdateWithoutInventoryBatchesInput>
    create: XOR<OfficeCreateWithoutInventoryBatchesInput, OfficeUncheckedCreateWithoutInventoryBatchesInput>
    where?: OfficeWhereInput
  }

  export type OfficeUpdateToOneWithWhereWithoutInventoryBatchesInput = {
    where?: OfficeWhereInput
    data: XOR<OfficeUpdateWithoutInventoryBatchesInput, OfficeUncheckedUpdateWithoutInventoryBatchesInput>
  }

  export type OfficeUpdateWithoutInventoryBatchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOfficeNestedInput
    inventoryTransactions?: InventoryTransactionUpdateManyWithoutOfficeNestedInput
    requisitions?: RequisitionUpdateManyWithoutOfficeNestedInput
  }

  export type OfficeUncheckedUpdateWithoutInventoryBatchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOfficeNestedInput
    inventoryTransactions?: InventoryTransactionUncheckedUpdateManyWithoutOfficeNestedInput
    requisitions?: RequisitionUncheckedUpdateManyWithoutOfficeNestedInput
  }

  export type InventoryTransactionUpsertWithWhereUniqueWithoutInventoryBatchInput = {
    where: InventoryTransactionWhereUniqueInput
    update: XOR<InventoryTransactionUpdateWithoutInventoryBatchInput, InventoryTransactionUncheckedUpdateWithoutInventoryBatchInput>
    create: XOR<InventoryTransactionCreateWithoutInventoryBatchInput, InventoryTransactionUncheckedCreateWithoutInventoryBatchInput>
  }

  export type InventoryTransactionUpdateWithWhereUniqueWithoutInventoryBatchInput = {
    where: InventoryTransactionWhereUniqueInput
    data: XOR<InventoryTransactionUpdateWithoutInventoryBatchInput, InventoryTransactionUncheckedUpdateWithoutInventoryBatchInput>
  }

  export type InventoryTransactionUpdateManyWithWhereWithoutInventoryBatchInput = {
    where: InventoryTransactionScalarWhereInput
    data: XOR<InventoryTransactionUpdateManyMutationInput, InventoryTransactionUncheckedUpdateManyWithoutInventoryBatchInput>
  }

  export type InventoryItemCreateWithoutTransactionsInput = {
    sku: string
    name: string
    location?: string | null
    minStock?: number
    unit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: InventoryBatchCreateNestedManyWithoutInventoryItemInput
    requisitionItems?: RequisitionItemCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUncheckedCreateWithoutTransactionsInput = {
    id?: number
    sku: string
    name: string
    location?: string | null
    minStock?: number
    unit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: InventoryBatchUncheckedCreateNestedManyWithoutInventoryItemInput
    requisitionItems?: RequisitionItemUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemCreateOrConnectWithoutTransactionsInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutTransactionsInput, InventoryItemUncheckedCreateWithoutTransactionsInput>
  }

  export type InventoryBatchCreateWithoutTransactionsInput = {
    batchId: string
    brand?: string | null
    supplier?: string | null
    stockNumber?: string | null
    expiryDate?: Date | string | null
    stock?: number
    transactionCount?: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItem: InventoryItemCreateNestedOneWithoutBatchesInput
    office?: OfficeCreateNestedOneWithoutInventoryBatchesInput
  }

  export type InventoryBatchUncheckedCreateWithoutTransactionsInput = {
    id?: number
    inventoryItemId: number
    batchId: string
    brand?: string | null
    supplier?: string | null
    stockNumber?: string | null
    expiryDate?: Date | string | null
    officeId?: number | null
    stock?: number
    transactionCount?: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryBatchCreateOrConnectWithoutTransactionsInput = {
    where: InventoryBatchWhereUniqueInput
    create: XOR<InventoryBatchCreateWithoutTransactionsInput, InventoryBatchUncheckedCreateWithoutTransactionsInput>
  }

  export type OfficeCreateWithoutInventoryTransactionsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOfficeInput
    inventoryBatches?: InventoryBatchCreateNestedManyWithoutOfficeInput
    requisitions?: RequisitionCreateNestedManyWithoutOfficeInput
  }

  export type OfficeUncheckedCreateWithoutInventoryTransactionsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOfficeInput
    inventoryBatches?: InventoryBatchUncheckedCreateNestedManyWithoutOfficeInput
    requisitions?: RequisitionUncheckedCreateNestedManyWithoutOfficeInput
  }

  export type OfficeCreateOrConnectWithoutInventoryTransactionsInput = {
    where: OfficeWhereUniqueInput
    create: XOR<OfficeCreateWithoutInventoryTransactionsInput, OfficeUncheckedCreateWithoutInventoryTransactionsInput>
  }

  export type InventoryItemUpsertWithoutTransactionsInput = {
    update: XOR<InventoryItemUpdateWithoutTransactionsInput, InventoryItemUncheckedUpdateWithoutTransactionsInput>
    create: XOR<InventoryItemCreateWithoutTransactionsInput, InventoryItemUncheckedCreateWithoutTransactionsInput>
    where?: InventoryItemWhereInput
  }

  export type InventoryItemUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: InventoryItemWhereInput
    data: XOR<InventoryItemUpdateWithoutTransactionsInput, InventoryItemUncheckedUpdateWithoutTransactionsInput>
  }

  export type InventoryItemUpdateWithoutTransactionsInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    minStock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: InventoryBatchUpdateManyWithoutInventoryItemNestedInput
    requisitionItems?: RequisitionItemUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    minStock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: InventoryBatchUncheckedUpdateManyWithoutInventoryItemNestedInput
    requisitionItems?: RequisitionItemUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryBatchUpsertWithoutTransactionsInput = {
    update: XOR<InventoryBatchUpdateWithoutTransactionsInput, InventoryBatchUncheckedUpdateWithoutTransactionsInput>
    create: XOR<InventoryBatchCreateWithoutTransactionsInput, InventoryBatchUncheckedCreateWithoutTransactionsInput>
    where?: InventoryBatchWhereInput
  }

  export type InventoryBatchUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: InventoryBatchWhereInput
    data: XOR<InventoryBatchUpdateWithoutTransactionsInput, InventoryBatchUncheckedUpdateWithoutTransactionsInput>
  }

  export type InventoryBatchUpdateWithoutTransactionsInput = {
    batchId?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: InventoryItemUpdateOneRequiredWithoutBatchesNestedInput
    office?: OfficeUpdateOneWithoutInventoryBatchesNestedInput
  }

  export type InventoryBatchUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    batchId?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeUpsertWithoutInventoryTransactionsInput = {
    update: XOR<OfficeUpdateWithoutInventoryTransactionsInput, OfficeUncheckedUpdateWithoutInventoryTransactionsInput>
    create: XOR<OfficeCreateWithoutInventoryTransactionsInput, OfficeUncheckedCreateWithoutInventoryTransactionsInput>
    where?: OfficeWhereInput
  }

  export type OfficeUpdateToOneWithWhereWithoutInventoryTransactionsInput = {
    where?: OfficeWhereInput
    data: XOR<OfficeUpdateWithoutInventoryTransactionsInput, OfficeUncheckedUpdateWithoutInventoryTransactionsInput>
  }

  export type OfficeUpdateWithoutInventoryTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOfficeNestedInput
    inventoryBatches?: InventoryBatchUpdateManyWithoutOfficeNestedInput
    requisitions?: RequisitionUpdateManyWithoutOfficeNestedInput
  }

  export type OfficeUncheckedUpdateWithoutInventoryTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOfficeNestedInput
    inventoryBatches?: InventoryBatchUncheckedUpdateManyWithoutOfficeNestedInput
    requisitions?: RequisitionUncheckedUpdateManyWithoutOfficeNestedInput
  }

  export type UserCreateWithoutRequisitionsInput = {
    name: string
    email: string
    password: string
    isAdmin?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    office?: OfficeCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRequisitionsInput = {
    id?: number
    name: string
    email: string
    password: string
    isAdmin?: boolean
    officeId?: number | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRequisitionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequisitionsInput, UserUncheckedCreateWithoutRequisitionsInput>
  }

  export type OfficeCreateWithoutRequisitionsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOfficeInput
    inventoryBatches?: InventoryBatchCreateNestedManyWithoutOfficeInput
    inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutOfficeInput
  }

  export type OfficeUncheckedCreateWithoutRequisitionsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOfficeInput
    inventoryBatches?: InventoryBatchUncheckedCreateNestedManyWithoutOfficeInput
    inventoryTransactions?: InventoryTransactionUncheckedCreateNestedManyWithoutOfficeInput
  }

  export type OfficeCreateOrConnectWithoutRequisitionsInput = {
    where: OfficeWhereUniqueInput
    create: XOR<OfficeCreateWithoutRequisitionsInput, OfficeUncheckedCreateWithoutRequisitionsInput>
  }

  export type RequisitionItemCreateWithoutRequisitionInput = {
    itemName: string
    quantity: number
    unit: string
    stockNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItem?: InventoryItemCreateNestedOneWithoutRequisitionItemsInput
  }

  export type RequisitionItemUncheckedCreateWithoutRequisitionInput = {
    id?: number
    inventoryItemId?: number | null
    itemName: string
    quantity: number
    unit: string
    stockNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequisitionItemCreateOrConnectWithoutRequisitionInput = {
    where: RequisitionItemWhereUniqueInput
    create: XOR<RequisitionItemCreateWithoutRequisitionInput, RequisitionItemUncheckedCreateWithoutRequisitionInput>
  }

  export type RequisitionItemCreateManyRequisitionInputEnvelope = {
    data: RequisitionItemCreateManyRequisitionInput | RequisitionItemCreateManyRequisitionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRequisitionsInput = {
    update: XOR<UserUpdateWithoutRequisitionsInput, UserUncheckedUpdateWithoutRequisitionsInput>
    create: XOR<UserCreateWithoutRequisitionsInput, UserUncheckedCreateWithoutRequisitionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequisitionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequisitionsInput, UserUncheckedUpdateWithoutRequisitionsInput>
  }

  export type UserUpdateWithoutRequisitionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    office?: OfficeUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRequisitionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfficeUpsertWithoutRequisitionsInput = {
    update: XOR<OfficeUpdateWithoutRequisitionsInput, OfficeUncheckedUpdateWithoutRequisitionsInput>
    create: XOR<OfficeCreateWithoutRequisitionsInput, OfficeUncheckedCreateWithoutRequisitionsInput>
    where?: OfficeWhereInput
  }

  export type OfficeUpdateToOneWithWhereWithoutRequisitionsInput = {
    where?: OfficeWhereInput
    data: XOR<OfficeUpdateWithoutRequisitionsInput, OfficeUncheckedUpdateWithoutRequisitionsInput>
  }

  export type OfficeUpdateWithoutRequisitionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOfficeNestedInput
    inventoryBatches?: InventoryBatchUpdateManyWithoutOfficeNestedInput
    inventoryTransactions?: InventoryTransactionUpdateManyWithoutOfficeNestedInput
  }

  export type OfficeUncheckedUpdateWithoutRequisitionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOfficeNestedInput
    inventoryBatches?: InventoryBatchUncheckedUpdateManyWithoutOfficeNestedInput
    inventoryTransactions?: InventoryTransactionUncheckedUpdateManyWithoutOfficeNestedInput
  }

  export type RequisitionItemUpsertWithWhereUniqueWithoutRequisitionInput = {
    where: RequisitionItemWhereUniqueInput
    update: XOR<RequisitionItemUpdateWithoutRequisitionInput, RequisitionItemUncheckedUpdateWithoutRequisitionInput>
    create: XOR<RequisitionItemCreateWithoutRequisitionInput, RequisitionItemUncheckedCreateWithoutRequisitionInput>
  }

  export type RequisitionItemUpdateWithWhereUniqueWithoutRequisitionInput = {
    where: RequisitionItemWhereUniqueInput
    data: XOR<RequisitionItemUpdateWithoutRequisitionInput, RequisitionItemUncheckedUpdateWithoutRequisitionInput>
  }

  export type RequisitionItemUpdateManyWithWhereWithoutRequisitionInput = {
    where: RequisitionItemScalarWhereInput
    data: XOR<RequisitionItemUpdateManyMutationInput, RequisitionItemUncheckedUpdateManyWithoutRequisitionInput>
  }

  export type RequisitionCreateWithoutItemsInput = {
    risNo: string
    responsibilityCenterCode?: string | null
    requestDate?: Date | string
    role?: string | null
    purpose?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestedBy?: UserCreateNestedOneWithoutRequisitionsInput
    office?: OfficeCreateNestedOneWithoutRequisitionsInput
  }

  export type RequisitionUncheckedCreateWithoutItemsInput = {
    id?: number
    risNo: string
    responsibilityCenterCode?: string | null
    requestDate?: Date | string
    requestedById?: number | null
    role?: string | null
    officeId?: number | null
    purpose?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequisitionCreateOrConnectWithoutItemsInput = {
    where: RequisitionWhereUniqueInput
    create: XOR<RequisitionCreateWithoutItemsInput, RequisitionUncheckedCreateWithoutItemsInput>
  }

  export type InventoryItemCreateWithoutRequisitionItemsInput = {
    sku: string
    name: string
    location?: string | null
    minStock?: number
    unit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: InventoryBatchCreateNestedManyWithoutInventoryItemInput
    transactions?: InventoryTransactionCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUncheckedCreateWithoutRequisitionItemsInput = {
    id?: number
    sku: string
    name: string
    location?: string | null
    minStock?: number
    unit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    batches?: InventoryBatchUncheckedCreateNestedManyWithoutInventoryItemInput
    transactions?: InventoryTransactionUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemCreateOrConnectWithoutRequisitionItemsInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutRequisitionItemsInput, InventoryItemUncheckedCreateWithoutRequisitionItemsInput>
  }

  export type RequisitionUpsertWithoutItemsInput = {
    update: XOR<RequisitionUpdateWithoutItemsInput, RequisitionUncheckedUpdateWithoutItemsInput>
    create: XOR<RequisitionCreateWithoutItemsInput, RequisitionUncheckedCreateWithoutItemsInput>
    where?: RequisitionWhereInput
  }

  export type RequisitionUpdateToOneWithWhereWithoutItemsInput = {
    where?: RequisitionWhereInput
    data: XOR<RequisitionUpdateWithoutItemsInput, RequisitionUncheckedUpdateWithoutItemsInput>
  }

  export type RequisitionUpdateWithoutItemsInput = {
    risNo?: StringFieldUpdateOperationsInput | string
    responsibilityCenterCode?: NullableStringFieldUpdateOperationsInput | string | null
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedBy?: UserUpdateOneWithoutRequisitionsNestedInput
    office?: OfficeUpdateOneWithoutRequisitionsNestedInput
  }

  export type RequisitionUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    risNo?: StringFieldUpdateOperationsInput | string
    responsibilityCenterCode?: NullableStringFieldUpdateOperationsInput | string | null
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedById?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUpsertWithoutRequisitionItemsInput = {
    update: XOR<InventoryItemUpdateWithoutRequisitionItemsInput, InventoryItemUncheckedUpdateWithoutRequisitionItemsInput>
    create: XOR<InventoryItemCreateWithoutRequisitionItemsInput, InventoryItemUncheckedCreateWithoutRequisitionItemsInput>
    where?: InventoryItemWhereInput
  }

  export type InventoryItemUpdateToOneWithWhereWithoutRequisitionItemsInput = {
    where?: InventoryItemWhereInput
    data: XOR<InventoryItemUpdateWithoutRequisitionItemsInput, InventoryItemUncheckedUpdateWithoutRequisitionItemsInput>
  }

  export type InventoryItemUpdateWithoutRequisitionItemsInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    minStock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: InventoryBatchUpdateManyWithoutInventoryItemNestedInput
    transactions?: InventoryTransactionUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutRequisitionItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    minStock?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batches?: InventoryBatchUncheckedUpdateManyWithoutInventoryItemNestedInput
    transactions?: InventoryTransactionUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type UserCreateManyOfficeInput = {
    id?: number
    name: string
    email: string
    password: string
    isAdmin?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryBatchCreateManyOfficeInput = {
    id?: number
    inventoryItemId: number
    batchId: string
    brand?: string | null
    supplier?: string | null
    stockNumber?: string | null
    expiryDate?: Date | string | null
    stock?: number
    transactionCount?: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionCreateManyOfficeInput = {
    id?: number
    inventoryItemId: number
    inventoryBatchId?: number | null
    date?: Date | string
    reference?: string | null
    receiptQty?: number
    issuanceQty?: number
    balance: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequisitionCreateManyOfficeInput = {
    id?: number
    risNo: string
    responsibilityCenterCode?: string | null
    requestDate?: Date | string
    requestedById?: number | null
    role?: string | null
    purpose?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutOfficeInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requisitions?: RequisitionUpdateManyWithoutRequestedByNestedInput
  }

  export type UserUncheckedUpdateWithoutOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requisitions?: RequisitionUncheckedUpdateManyWithoutRequestedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryBatchUpdateWithoutOfficeInput = {
    batchId?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: InventoryItemUpdateOneRequiredWithoutBatchesNestedInput
    transactions?: InventoryTransactionUpdateManyWithoutInventoryBatchNestedInput
  }

  export type InventoryBatchUncheckedUpdateWithoutOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    batchId?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: InventoryTransactionUncheckedUpdateManyWithoutInventoryBatchNestedInput
  }

  export type InventoryBatchUncheckedUpdateManyWithoutOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    batchId?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUpdateWithoutOfficeInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptQty?: IntFieldUpdateOperationsInput | number
    issuanceQty?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: InventoryItemUpdateOneRequiredWithoutTransactionsNestedInput
    inventoryBatch?: InventoryBatchUpdateOneWithoutTransactionsNestedInput
  }

  export type InventoryTransactionUncheckedUpdateWithoutOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    inventoryBatchId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptQty?: IntFieldUpdateOperationsInput | number
    issuanceQty?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUncheckedUpdateManyWithoutOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    inventoryBatchId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptQty?: IntFieldUpdateOperationsInput | number
    issuanceQty?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequisitionUpdateWithoutOfficeInput = {
    risNo?: StringFieldUpdateOperationsInput | string
    responsibilityCenterCode?: NullableStringFieldUpdateOperationsInput | string | null
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedBy?: UserUpdateOneWithoutRequisitionsNestedInput
    items?: RequisitionItemUpdateManyWithoutRequisitionNestedInput
  }

  export type RequisitionUncheckedUpdateWithoutOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    risNo?: StringFieldUpdateOperationsInput | string
    responsibilityCenterCode?: NullableStringFieldUpdateOperationsInput | string | null
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedById?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RequisitionItemUncheckedUpdateManyWithoutRequisitionNestedInput
  }

  export type RequisitionUncheckedUpdateManyWithoutOfficeInput = {
    id?: IntFieldUpdateOperationsInput | number
    risNo?: StringFieldUpdateOperationsInput | string
    responsibilityCenterCode?: NullableStringFieldUpdateOperationsInput | string | null
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedById?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequisitionCreateManyRequestedByInput = {
    id?: number
    risNo: string
    responsibilityCenterCode?: string | null
    requestDate?: Date | string
    role?: string | null
    officeId?: number | null
    purpose?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequisitionUpdateWithoutRequestedByInput = {
    risNo?: StringFieldUpdateOperationsInput | string
    responsibilityCenterCode?: NullableStringFieldUpdateOperationsInput | string | null
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    office?: OfficeUpdateOneWithoutRequisitionsNestedInput
    items?: RequisitionItemUpdateManyWithoutRequisitionNestedInput
  }

  export type RequisitionUncheckedUpdateWithoutRequestedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    risNo?: StringFieldUpdateOperationsInput | string
    responsibilityCenterCode?: NullableStringFieldUpdateOperationsInput | string | null
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RequisitionItemUncheckedUpdateManyWithoutRequisitionNestedInput
  }

  export type RequisitionUncheckedUpdateManyWithoutRequestedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    risNo?: StringFieldUpdateOperationsInput | string
    responsibilityCenterCode?: NullableStringFieldUpdateOperationsInput | string | null
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryBatchCreateManyInventoryItemInput = {
    id?: number
    batchId: string
    brand?: string | null
    supplier?: string | null
    stockNumber?: string | null
    expiryDate?: Date | string | null
    officeId?: number | null
    stock?: number
    transactionCount?: number
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionCreateManyInventoryItemInput = {
    id?: number
    inventoryBatchId?: number | null
    date?: Date | string
    reference?: string | null
    receiptQty?: number
    issuanceQty?: number
    balance: number
    officeId?: number | null
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequisitionItemCreateManyInventoryItemInput = {
    id?: number
    requisitionId: number
    itemName: string
    quantity: number
    unit: string
    stockNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryBatchUpdateWithoutInventoryItemInput = {
    batchId?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    office?: OfficeUpdateOneWithoutInventoryBatchesNestedInput
    transactions?: InventoryTransactionUpdateManyWithoutInventoryBatchNestedInput
  }

  export type InventoryBatchUncheckedUpdateWithoutInventoryItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    batchId?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: InventoryTransactionUncheckedUpdateManyWithoutInventoryBatchNestedInput
  }

  export type InventoryBatchUncheckedUpdateManyWithoutInventoryItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    batchId?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: IntFieldUpdateOperationsInput | number
    transactionCount?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUpdateWithoutInventoryItemInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptQty?: IntFieldUpdateOperationsInput | number
    issuanceQty?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryBatch?: InventoryBatchUpdateOneWithoutTransactionsNestedInput
    office?: OfficeUpdateOneWithoutInventoryTransactionsNestedInput
  }

  export type InventoryTransactionUncheckedUpdateWithoutInventoryItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryBatchId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptQty?: IntFieldUpdateOperationsInput | number
    issuanceQty?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUncheckedUpdateManyWithoutInventoryItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryBatchId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptQty?: IntFieldUpdateOperationsInput | number
    issuanceQty?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequisitionItemUpdateWithoutInventoryItemInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requisition?: RequisitionUpdateOneRequiredWithoutItemsNestedInput
  }

  export type RequisitionItemUncheckedUpdateWithoutInventoryItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    requisitionId?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequisitionItemUncheckedUpdateManyWithoutInventoryItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    requisitionId?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionCreateManyInventoryBatchInput = {
    id?: number
    inventoryItemId: number
    date?: Date | string
    reference?: string | null
    receiptQty?: number
    issuanceQty?: number
    balance: number
    officeId?: number | null
    ptr?: string | null
    costPerUnit?: Decimal | DecimalJsLike | number | string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionUpdateWithoutInventoryBatchInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptQty?: IntFieldUpdateOperationsInput | number
    issuanceQty?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: InventoryItemUpdateOneRequiredWithoutTransactionsNestedInput
    office?: OfficeUpdateOneWithoutInventoryTransactionsNestedInput
  }

  export type InventoryTransactionUncheckedUpdateWithoutInventoryBatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptQty?: IntFieldUpdateOperationsInput | number
    issuanceQty?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUncheckedUpdateManyWithoutInventoryBatchInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptQty?: IntFieldUpdateOperationsInput | number
    issuanceQty?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    officeId?: NullableIntFieldUpdateOperationsInput | number | null
    ptr?: NullableStringFieldUpdateOperationsInput | string | null
    costPerUnit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequisitionItemCreateManyRequisitionInput = {
    id?: number
    inventoryItemId?: number | null
    itemName: string
    quantity: number
    unit: string
    stockNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequisitionItemUpdateWithoutRequisitionInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: InventoryItemUpdateOneWithoutRequisitionItemsNestedInput
  }

  export type RequisitionItemUncheckedUpdateWithoutRequisitionInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequisitionItemUncheckedUpdateManyWithoutRequisitionInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    stockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OfficeCountOutputTypeDefaultArgs instead
     */
    export type OfficeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfficeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryItemCountOutputTypeDefaultArgs instead
     */
    export type InventoryItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryBatchCountOutputTypeDefaultArgs instead
     */
    export type InventoryBatchCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryBatchCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RequisitionCountOutputTypeDefaultArgs instead
     */
    export type RequisitionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RequisitionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OfficeDefaultArgs instead
     */
    export type OfficeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OfficeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryItemDefaultArgs instead
     */
    export type InventoryItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryBatchDefaultArgs instead
     */
    export type InventoryBatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryBatchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryTransactionDefaultArgs instead
     */
    export type InventoryTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryTransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RequisitionDefaultArgs instead
     */
    export type RequisitionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RequisitionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RequisitionItemDefaultArgs instead
     */
    export type RequisitionItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RequisitionItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityDefaultArgs instead
     */
    export type ActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}