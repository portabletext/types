/**
 * Any object with an `_type` property (which is required in portable text arrays),
 * as well as a _potential_ `_key` (highly encouraged)
 */
export interface TypedObject {
  /**
   * Identifies the type of object/span this is, and is used to pick the correct React components
   * to use when rendering a span or inline object with this type.
   */
  _type: string

  /**
   * Uniquely identifies this object within its parent block.
   * Not _required_, but highly encouraged.
   */
  _key?: string
}

/**
 * Any object with an `_type` that is a string. Can hold any other properties.
 */
export type ArbitraryTypedObject = TypedObject & {[key: string]: any}
