// import { ChangeEvent, EventHandler, FC, MouseEventHandler } from "react"
// import { TSuggestion } from "../models"

// interface IProps{
//     id:number
//     question:string
//     suggestions:TSuggestion[]
//     handlClick:(id:number,checked:boolean)=>void;
// }

// export const Answer:FC<IProps>  =({id,question,suggestions,handleClick})=>{
//     return(
//         <div key={id + index}>
//         <div>{question}</div>
//         <div>
//           {suggestions.map((suggestion, idx) => (
//             <button
//               key={`${id}-${idx}`} 
//               id={id.toString()}
              
//               onClick={(e:MouseEventHandler<HTMLButtonElement>) => handleClick(e.target.id,suggestion.checked)}
//             >
//               {suggestion.answer} 
//             </button>
//           ))}
//         </div>
//       </div>
//     )
// }