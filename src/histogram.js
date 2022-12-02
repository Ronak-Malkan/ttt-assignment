import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Histogram(props){

   const [topWords, setTopWors] = React.useState(new Map());
   const [data, setData] = React.useState(new Array);

   React.useEffect(()=> {
      let words = props.fetchedText.split(/(\s|\.|,|\?|\n|\(|\)|{|}|\/|"|:)/);
      console.log(words);
      const temp = [];
      for(let i=0; i<words.length; i++){
         if( words[i] === "" || words[i] === "–" || words[i] === " " || words[i] === "." || words[i] === "," || words[i] === "?" || words[i] === "\n" || words[i] === "(" || words[i] === ")" || words[i] === "{" || words[i] === "}" || words[i] === "/" || words[i] === '"' || words[i] === ":"){
            continue;
         }
         temp.push(words[i]);
      }
      words = temp;
      let wordFrequence = new Map();
      let word;
      for(let i=0; i<words.length; i++){
         word = wordFrequence.get(words[i]);
         if(word != null){
            wordFrequence.set(words[i], word+1);
         }
         else {
            wordFrequence.set(words[i], 1);
         }
      }
      wordFrequence = new Map([...wordFrequence].sort((a,b)=> b[1]-a[1]));
      let i=0;
      console.log(wordFrequence);
      wordFrequence.forEach((value, key) => {
         if(i<20){
            console.log(key, "  ", value);
            topWords.set(key, value);
            i++;
         }
      })
      console.log(topWords);
      let tempData = []
      topWords.forEach((value, key)=> {
         tempData.push({"Words": key, "Frequency": value});
      })
      setData(tempData);
      console.log(data);
   }, [])
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