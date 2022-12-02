## Components
This project has two components App.js and histogram.js, 
App.js conditionally renders either a button or histogram.js
On click of Submit button in App.js, first text from "https://www.terriblytinytales.com/test.txt" is fetched and then value of renderButton state is changed to false, causing App component to re render, this time it renders histogram component, text is given as props to histogram component.
In histogram component, the text is parsed using split function, top 20 most frequent words are selected. And then Recharts library is used to plot Barchart of those 20 words along with their frequency.

## Library Used
Recharts is used for creating and rendering the bar graph, site link: https://recharts.org/en-US
