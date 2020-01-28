# CSS Framework

This is a CSS framework designed to have basic functionalities. 
[Sample Website Live Demo](https://suretrust.github.io/css-framework/)

![Image](https://i.ibb.co/fXKqr0D/Screenshot-2020-01-28-at-07-34-05.png)
## Technologies Used
1. HTML5
2. CSS3
3. SASS

# How to use the framework
The framework was designed to be responsive using <code>display: flex</code> property. The javascript is meant to make the navigation bar responsive

## Colors

### Text colors
You can add these classes -- <code>text-primary</code>, <code>text-secondary</code>, <code>text-tertiary</code>, <code>text-accent</code>, <code>text-white</code>, <code>text-gray-1</code>, <code>text-gray-2</code>, and <code>text-gray-3</code> --  to change the text color.

### Background colors
You can add background colors using these classes -- <code>bg-primary</code>, <code>bg-secondary</code>, <code>bg-tertiary</code>, <code>bg-accent</code>, <code>bg-white</code>, <code>bg-gray-1</code>, <code>bg-gray-2</code>, and <code>bg-gray-3</code>.

### Form input, buttons and links
Use the class <code>.btn</code> to use predefined CSS styling for your form input, buttons or links.

### Body
Body has a predefined font-size of 16px and <code>font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif</code>.

### Breakpoints
We defined breakpoints using: 
<code>
$huge: 1300px
$large: 1024px
$medium: 900px
$small: 540px
</code>

### Layout
The classes <code>.container</code> and <code>.container-fluid</code> defines the max-width of the layout. The class <code>.container-fluid</code> stretches to the full screen while <code>.container</code> class has a max-width.

### Alignment, transformation and spacing
1. The classes -- <code>text-center</code>, <code>text-right</code>, and <code>text-left</code> align the text according to the naming convention.
2. The classes -- <code>align-right</code> and <code>align-left</code> align elements according to the naming convention.
3. The classes -- <code>float-right</code> and <code>float-left</code> float elements according to the naming convention.
4. The class <code>.clearfix</code> clears any float overflow.
5. The classes -- <code>text-uppercase</code>, <code>text-lowercase</code>, and <code>text-capitalize</code> transform the text according to the naming convention.
6. These classes are used for adding margin and padding. The <code>m</code> stands for margin and the <code>p</code> for padding, after that you can add a <code>-</code> and a value from 1 to 3 in order to add 5, 10 or 15 pixels respectively. You can use the letters <code>x</code>, <code>y</code>, <code>t</code>, <code>b</code>, <code>r</code> or <code>l</code> between the letter and the <code>-</code> to specify the side.<br>
    <code>m-1 m-2 m-3</code><br>
    <code>mx-1 mx-2 mx-3</code><br>
    <code>my-1 my-2 my-3</code><br>
    <code>mr-1 mr-2 mr-3</code><br>
    <code>ml-1 ml-2 ml-3</code><br><br>
    <code>p-1 p-2 p-3</code><br>
    <code>px-1 px-2 px-3</code><br>
    <code>py-1 py-2 py-3</code><br>
    <code>pr-1 pr-2 pr-3</code><br>
    <code>pl-1 pl-2 pl-3</code><br>

### Navigation bar
Use the class <code>.navbar</code> to make your navigation bar responsive. You can use <code>.navbar-logo</code> class to make the logo align and the class <code>navbar-nav</code> for any other list of links in the navigation bar. The <code>.navbar-toggle</code> makes the list of navigation bar links disappear and display under the icon toggle on click.

### Grid
This framework uses a 6-column grid to define the width. It is necessary to specify the row by adding class <code>.row</code> which makes every child a column. If you want to specify the width, you can add the class <code>.col</code> followed by <code>-</code> and varying number from <code>1 to 6</code> which proportionates each column with <code>6</code> being 100% width. You can also specify the responsiveness of the column by adding <code>small</code>, <code>medium</code>, <code>large</code>, and <code>huge</code> after the <code>col-</code> before the <code>1 to 6</code>.<br>
    <code>col col-small col-medium col-large col-huge</code><br>
    <code>col-1 col-small-1 col-medium-1 col-large-1  col-huge-1</code><br>
    <code>col-2 col-small-2 col-medium col-large  col-huge-2</code><br>
    <code>col-3 col-small-3 col-medium col-3-large  col-huge-3</code><br>
    <code>col-4 col-small-4 col-medium col-4-large  col-huge-4</code><br>
    <code>col-4 col-small-4 col-medium col-4-large  col-huge-4</code><br>
    <code>col-6 col-small-6 col-medium col-6-large  col-huge-6</code><br>   



