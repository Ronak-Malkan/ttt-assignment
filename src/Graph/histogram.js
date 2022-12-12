import React from 'react';
import './graph.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Histogram(props){

   // eslint-disable-next-line
   const [topWords, setTopWords] = React.useState(new Map());
   const [data, setData] = React.useState([]);

   React.useEffect(()=> {

      //parse the text into words
      let words = parseText();
      
      //calculate the word frequency of every word
      let wordFrequency = new Map();
      wordFrequency = calculateWordFreq(words);
   
      //store the top 20 most frequent words
      let i=0;
      wordFrequency.forEach((value, key) => {
         if(i<20){
            console.log(key, "  ", value);
            topWords.set(key, value);
            i++;
         }
      })
      let tempData = []
      topWords.forEach((value, key)=> {
         tempData.push({"Words": key, "Frequency": value});
      })
      setData(tempData);
      console.log(tempData);
   // eslint-disable-next-line   
   }, [])

   const parseText = () => {
      let words = props.fetchedText.split(/(\s|\.|,|\?|\n|\(|\)|{|}|\/|"|:)/);
      const temp = [];
      for(let i=0; i<words.length; i++){
         if( words[i] === "" || words[i] === "–" || words[i] === " " || words[i] === "." || words[i] === "," || words[i] === "?" || words[i] === "\n" || words[i] === "(" || words[i] === ")" || words[i] === "{" || words[i] === "}" || words[i] === "/" || words[i] === '"' || words[i] === ":"){
            continue;
         }
         temp.push(words[i].toLowerCase());
      }
      words = temp;
      return words;
   }

   const calculateWordFreq = (words) => {
      let wordFrequency = new Map();
      let word;
      for(let i=0; i<words.length; i++){
         word = wordFrequency.get(words[i]);
         if(word != null){
            wordFrequency.set(words[i], word+1);
         }
         else {
            wordFrequency.set(words[i], 1);
         }
      }
      wordFrequency = new Map([...wordFrequency].sort((a,b)=> b[1]-a[1]));
      return wordFrequency;
   }

   
   return (
      <div className='chartContainer'>
         <ResponsiveContainer>
            <BarChart width={1000} height={400} data={data}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="Words" />
               <YAxis/>
               <Tooltip />
               <Legend />
               <Bar dataKey="Frequency" fill="#1560bd" />
            </BarChart>
         </ResponsiveContainer>
      </div>
   );
}

export default Histogram;