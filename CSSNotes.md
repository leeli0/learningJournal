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
- A class is rated as being more specific, as in having more specificity than the element selector, so it cancels the other conflicting style declaration.

### Properties and values
- Properties: These are human-readable identifiers that indicate which stylistic features you want to modify.
- Values: Each property is assigned a value.This value indicate how to style the property.
- When a property is paired with a value, this pairing is called a CSS declaration. CSS declarations are found within CSS Declaration Blocks.
- CSS declaration blocks are paired with selectors to produce CSS rulesets.
- Setting CSS properties to specific values is the primary way of defining layout and styling for a document.
- CSS properties and values are case-sensitive. The property and value in each pair are separated by a colon. (:)
- If a property is unknown, or if a value is not valid for a given property, the declaration is processed as invalid. It is completedly ignored by the browser's CSS engine.
- In CSS (and other web standards), it has been agreed that US spelling is the standard where there is language variation or uncertainty.
- Similarly, if a browser encouters a selector that it doesn't understand,  it will just ignore the whole rule and move on to the next one.

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

### Inheritance
Inheritance also need to be understood in this context - some CSS property values set on parent elements are inheritanted by their child elements, and some aren't. For example, `color`, `font-family`.

### Cascade, specificity, and inheritance together control which CSS applies to what elemnt.

### Controlling inheritance
- inherit Sets the property value applied to a selected element to be the same as that of its parent element. Effectively, this "turns on inheritance".
- initial Sets the property value applied to a selected element to the initial value of that property.
- unset Resets the property to its natural value, which means that if the property is naturally inherited it acts like inherit, otherwise it acts like initial.
- revert Acts like unset in many cases, however will revert the property to the browser's default styling rather than the default applied to that property.

### The amount of specificity a selector has is measured using four different values (or components), which can be thought of as thousands, hundreds, tens and ones - four single digits in four columns:
1. Thousands: Score one in this column if the declaration is inside a `style` attribute, aka inline style. Such decleration don't have selectors, so their specificity is always 1000.
2. Hundreds: Socre one in this column for each ID selector contained inside the overall selector.
3. Tens: Score one in this column for each class selector, attribute selector, or pseudo-class contained inside the overall selector.
4. Ones: Score one in this column for each element selector or pseudo-element contained inside the overall selector.
### This has only been an approximate example for ease of understanding. In actuality, each selector type has its own level of specificity that cannot be overwritten by selectors with a lower specificity level. A more accurate way to evaluate specificilty would be to score the specificity levels individually starting from highest and moving on to lowest when necessary.

### !important is used to make a particular property and value the most specific thing, thus overriding the normal rules of cascade.

### The only way to override this !important declaration would be to include another !important declaration on a declaration with the same specificity later in the source order, or one with the higher specificity.

### Strongly recommend that you never use it unless you absolutely have to. !important changes the way cascade normally works, so it can make debugging CSS problems really hard to work out, especially in a large stylesheet.

### Conflicting declarations will be applied in the following order, with later ones overriding earlier ones:
1. Delcarations in user agent style sheets (e.g. the browser's defualt styles, used when no other styling is set)
2. Normal declarations in user style sheets (custom styles set by a user)
3. Normal declarations in author style sheets (these are the styles set by us, the web developers)
4. Important declarations in author style sheets
5. Important declarations in user style sheets

### What is a selector?
A CSS selector is the first part of a CSS Rule. It is a pattern of elements and other terms that tell the browser which HTML elements should be selected to have the CSS property values inside the rule applied to them. The element or elements which are selected by the selector are referred to as the subject of the selector.

### Selector lists
If you have more than one thing which uses the same CSS then the individual selectors can be combined into a selector list so that the rule is applied to all of the individual selectors. Combining individual selector into a selector list, by adding a comma between them. If any selector in a selector list is invalid the whole rule will be ignored.


### Types of selectors
- Type, class and ID selectors
- Attribute selectors, select elements based on the presence of a certain attribute or attribute with a particular value
- Pseudo-classes (style certain states of an element) and pseudo-elements (select a certain part of an element rather than the element itself)
- Combinators


### What is pseudo-class?
A pseudo-class is a selector that selects elements that are in a specific state, e.g. they are the first element of their type, or they are being hovered over by the mouse pointer.

### What is a pseudo-element?
Pseudo-elements behave in a similar way. However, they act as if you had added a whole new HTML element into the markup, rather than applying a class to existing elements. Pseudo-elements start with a double colon ::.

### Descendant conbinator
The descendant combinator - typically represented by a single space ( ) character - combine two selectors such that elements matched by the second selector are selected if they have an ancestor (parent, parent's parent, parent's parent's parent, etc) element matching the first selector. Selectors that utilize a descendant combinator are called descendant selectors.

### Child combinator
The child combinator (>) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first. Descendant elements further down the hierarchy don't match.

### Adjacent sibling combinator
The adjacent sibling selector (+) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the next sibling element of the first selector.

### General sibling combinator
If you want to select siblings of an element even if they are not directly adjacent, then you can use the general sibling combinator (~).

### block boxes and inline blocks

### inner display type and outer display type
- outer display type which details whether the box is block or inline
- inner display type, however, which dictates how elements inside that box are laid out.

### margin collapsing
If you have two elements whose margins touch, and both margins are positive, those margins will combine to become one margin, and its size will be equal to the largest individual margin. If one margin is negative, its value will be subtracted from the total. Where both are negative, the margins will collapse and the smallest (furthest from zero) value will be used.



