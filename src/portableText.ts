import type {ArbitraryTypedObject, TypedObject} from './related.js'

/**
 * A Portable Text Block can be thought of as one paragraph, quote or list item.
 * In other words, it is a container for text, that can have a visual style associated with it.
 * The actual text value is stored in portable text spans inside of the `childen` array.
 *
 * @typeParam M - Mark types that be used for text spans
 * @typeParam C - Types allowed as children of this block
 * @typeParam S - Allowed block styles (eg `normal`, `blockquote`, `h3` etc)
 * @typeParam L - Allowed list item types (eg `number`, `bullet` etc)
 * @public
 */
export interface PortableTextBlock<
  M extends PortableTextMarkDefinition = PortableTextMarkDefinition,
  C extends TypedObject = ArbitraryTypedObject | PortableTextSpan,
  S extends string = PortableTextBlockStyle,
  L extends string = PortableTextListItemType,
> extends TypedObject {
  /**
   * Type name identifying this as a portable text block.
   * All items within a portable text array should have a `_type` property.
   *
   * Usually 'block', but can be customized to other values
   */
  _type: 'block' | string

  /**
   * A key that identifies this block uniquely within the parent array. Used to more easily address
   * the block when editing collaboratively, but is also very useful for keys inside of React and
   * other rendering frameworks that can use keys to optimize operations.
   */
  _key?: string

  /**
   * Array of inline items for this block. Usually contain text spans, but can be
   * configured to include inline objects of other types as well.
   */
  children: C[]

  /**
   * Array of mark definitions used in child text spans. By having them be on the block level,
   * the same mark definition can be reused for multiple text spans, which is often the case
   * with nested marks.
   */
  markDefs?: M[]

  /**
   * Visual style of the block
   * Common values: 'normal', 'blockquote', 'h1'...'h6'
   */
  style?: S

  /**
   * If this block is a list item, identifies which style of list item this is
   * Common values: 'bullet', 'number', but can be configured
   */
  listItem?: L

  /**
   * If this block is a list item, identifies which level of nesting it belongs within
   */
  level?: number
}

/**
 * Strictly speaking the same as a portable text block, but `listItem` is required
 *
 * @typeParam M - Mark types that be used for text spans
 * @typeParam C - Types allowed as children of this block
 * @typeParam S - Allowed block styles (eg `normal`, `blockquote`, `h3` etc)
 * @typeParam L - Allowed list item types (eg `number`, `bullet` etc)
 * @public
 */
export interface PortableTextListItemBlock<
  M extends PortableTextMarkDefinition = PortableTextMarkDefinition,
  C extends TypedObject = PortableTextSpan,
  S extends string = PortableTextBlockStyle,
  L extends string = PortableTextListItemType,
> extends Omit<PortableTextBlock<M, C, S, L>, 'listItem'> {
  listItem: L
}

/**
 * A set of _common_ (but not required/standarized) block styles
 * @public
 */
export type PortableTextBlockStyle =
  | 'normal'
  | 'blockquote'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | string

/**
 * A set of _common_ (but not required/standardized) list item types
 * @public
 */
export type PortableTextListItemType = 'bullet' | 'number' | string

/**
 * A mark definition holds information for marked text. For instance, a text span could reference
 * a mark definition for a hyperlink, a geoposition, a reference to a document or anything that is
 * representable as a JSON object.
 * @public
 */
export interface PortableTextMarkDefinition {
  /**
   * Unknown properties
   */
  [key: string]: unknown

  /**
   * Identifies the type of mark this is, and is used to pick the correct React components to use
   * when rendering a text span marked with this mark type.
   */
  _type: string

  /**
   * Uniquely identifies this mark definition within the block
   */
  _key: string
}

/**
 * A Portable Text Span holds a chunk of the actual text value of a Portable Text Block
 * @public
 */
export interface PortableTextSpan {
  /**
   * Type is always `span` for portable text spans, as these don't vary in shape
   */
  _type: 'span'

  /**
   * Unique (within parent block) key for this portable text span
   */
  _key?: string

  /**
   * The actual text value of this text span
   */
  text: string

  /**
   * An array of marks this text span is annotated with, identified by its `_key`.
   * If the key cannot be found in the parent blocks mark definition, the mark is assumed to be a
   * decorator (a simpler mark without any properties - for instance `strong` or `em`)
   */
  marks?: string[]
}

/**
 * The simplest representation of a link
 * @public
 */
export interface PortableTextLink {
  _type: 'link'
  href: string
}
