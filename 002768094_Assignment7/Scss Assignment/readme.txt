Name: Sujith Kaluva
NU ID: 002768094

Designed Sandwich Website using different SCSS features.

Functions: 
Functions allow you to define complex operations on SassScript values that you can re-use throughout your stylesheet.
A function has been defined to change the text color based on the background color. 
The fuctions are demonstarted in _functions.scss.

Variables:
Variables are used to store a value in a name and use the name everywhere instead of bringing the value everytime.
Some of the variables are for storing colors.
Several variables have been used in the _variables.scss.

Nesting:
Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. 
Nesting has been implemented at several locations like about section.
Refer to style.scss for samples.

Mixins:
Mixins allow you to define styles that can be re-used throughout your stylesheet.
The Mixins are demonstrated in _mixins.scss
These are leveraged for changing text format in this assignment like for 'p' tag in about, menu, contact sections. (graph-text mixin)

Interpolation:
Interpolation can be used almost anywhere in a Sass stylesheet to embed the result of a SassScript expression into a chunk of CSS.
Just wraping an expression in #{} in any place.
We used it for text-decoration property as it is lengthy and used at multiple places.
The Mixins are demonstrated in style.scss

Flexbox Layout:
flexbox was designed for layout in one dimension.
Few places where flexbox has been used are for icons in about section, nav section.
Check in style.scss

Grid Layout:
Grid was designed for two-dimensional layout - rows, and columns at the same time.
Few places where grid has been used are for contact, menu section.
Check in style.scss

Placeholder Selectors: 
It looks and acts a lot like a class selector, but it starts with a % and it's not included in the CSS output.
We used it for changing font-size.
Check in _placeholder.scss

Custom Properties: 
The custom properties includes color e.t.c
Check in style.scss
