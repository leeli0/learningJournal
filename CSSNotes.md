### Selector
| Name | Example | Description |
| ---- | ------- | ----------- |
| class | .special | apply the class of *special* to any element |
| element.class | li.special | target any li element that has a class of *special* |
| descendant combinator | li em | select any `<em>` element that is inside (a descendant of ) an `<li>`|
| adjacent sibling combinator | h1 + p | select a `<p>` comes directly after an `<h1>`|
| state | a:link a:visited a:hover | unvisited links, visited links, hover over links |
| combining selectors and combinators | body h1 + p .special | any element with a class of *special*, which is inside a `<p>`, which comes just after an `<h1>`, which is inside a `<body>` |

### Applying CSS to HTML
| Method | Example | Description | Recommend |
| ------ | ------- | ----------- | --------- |
| external stylesheet | `<link rel="stylesheet" href="styles.css">` | an external stylesheet contains CSS in a separate file with a `.css` extension. | Yes |
| internal stylesheet | `<style> p { color: red; } </style>` | an internal stylesheet resides within an HTML document | Avoid |
| inline styles | `style="color:red;"` | inline styles are CSS declarations that affect a single HTML element, contained with a `style` attribute | Avoid |

### Priority
- Later styles replace conflicting styles that appear earlier in the stylesheet. This is cascade rule.
- A class is rated as being more specific, as in having more specificity than the element selector, so ti cancels the other conflicting style declaration.

### Properties and values
- Properties: These are human-readable identifiers that indicate which stylistic features you want to modify.
- Values: Each property is assigned a value.This value indicate how to style the property.
- When a property is paired with a value, this pairing is called a CSS declaration. CSS declarations are found within CSS Declaration Blocks.
- CSS declaration blocks are paired with selectors to produce CSS rulesets.
- Setting CSS properties to specific values is the primary way of defining layout and styling for a document.
- CSS properties and values are case-sensitive. The property and value in each pair are separated by a colon. (:)
- If a property is unknown, or if a value is not valid for a given property, the declaration is processed as invalid. It is completedly ignored by the browser's CSS engine.
- In CSS (and other web standards), it has been agreed that US spelling is the standard where there is language variation or uncertainty.

### functions
- A function consists of the function name, and parentheses to enclose the values for the function.

### @rules
- CSS @rules provide instruction for what CSS should perform or how it behave.

### Shorthands
Some properties like font, background, padding, border, and margin are called shorthand properties. This is because shorthand properties set several values in a single line.

In 4-value shorthands like padding and margin, the values are applied in the order top, right, bottom, left (clockwise from the top). There are also other shorthand types, for example 2-value shorthands, which set padding/margin for top/bottom, then left/right.

One less obvious aspect of using CSS shorthand is how omitted values reset. A value not specified in CSS shorthand reverts to its initial value. This means an omission in CSS shorthand can override previously set values.

### Comments
As with any coding work, it is best practice to write comments along with CSS. This help you to remember how the code works as you come back later to fixes or enhancement. It also helps others understand the code.

### White space
You should always make sure to separate distinct values from on another by at least one space. Keep property names and property values together as single unbroken strings.