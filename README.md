# CSS Framework

This is a CSS framework designed as a part of microverse's curricullum.

## Technologies Used
1. HTML5
2. CSS3
3. SASS

# How to use the framework
The framework was designed to be responsive using <code>display: flex</code> property. The javascript is meant to make the navigaion bar responsive

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
1. The classes -- <code>text-center</code>, <code>text-right<c/ode>, and <code>text-left</code> align the text according to the naming convention.
2. The classes -- <code>align-right</code> and <code>align-left</code> align elements according to the naming convention.
3. The classes -- <code>float-right</code> and <code>float-left</code> float elements according to the naming convention.
4. The class <code>.clearfix</code> clears any float overflow.
5. The classes -- <code>text-uppercase</code>, <code>text-lowercase</code>, and <code>text-capitalize</code> transform the text according to the naming convention.
6. These classes are used for adding margin and padding. The <code>m</code> stands for margin and the <code>p</code> for padding, after that you can add a <code>-</code> and a value from 1 to 3 in order to add 5, 10 or 15 pixels respectively. You can use the letters <code>x</code>, <code>y</code>, <code>t</code>, <code>b</code>, <code>r</code> or <code>l</code> between the letter and the <code>-</code> to specify the side.
   <code>
      m-1 m-2 m-3
      mx-1 mx-2 mx-3
      my-1 my-2 my-3
      mr-1 mr-2 mr-3
      ml-1 ml-2 ml-3
   </code>
   <code>
      p-1 p-2 p-3
      px-1 px-2 px-3
      py-1 py-2 py-3
      pr-1 pr-2 pr-3
      pl-1 pl-2 pl-3
   </code>

### Navigation bar
Use the class <code>.navbar</code> to make your navigation bar responsive. You can use <code>.navbar-logo</code> class to make the logo align and the class <code>navbar-nav</code> for any other list of links in the navigation bar. The <code>.navbar-toggle</code> makes the list of navigation bar links disappear and display under the icon toggle on click. The <code>.overlay</code> adds an overlay to your navbar-toggle on mobile.

### Grid
This framework uses a 6-column grid to define the width. 


    



A sample website built with this framework is live at: 
