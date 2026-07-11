# Input

The program does not require any sort user input, instead the resume information is hard-coded in a component file named `Resume.js`. 
This includes my student name, contact information, education, skills, work experience, and projects. 
The CSS file `Resume.css` provides the styling information, refers to the background color, text alignment, spacing, and list formatting in the work experience section.

# Process

When the application runs, the `App.js` component will import and render the `Resume` component. React processes the component's code in `Resume.js` then converts it into HTML elements that is later displayed. The styles defined in `Resume.css` are applied to the rendered elements, controll the page layout, colors, padding, and formatting. The unordered list is also modified/styled to remove bullet points for a cleaner resume appearance.

# Output

The program displays a formatted resume as a single web page. The output includes my personal information, education, skills, work experience, and projects in a structured manner. The CSS styling created a centered design with a green/neon background (`a required portion from PE01 instructions`).