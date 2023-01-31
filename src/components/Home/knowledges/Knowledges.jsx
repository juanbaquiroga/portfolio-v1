import React from "react";
import Knowledge from './Knowledge'


const Knowledges = ({knowledges})=>{
    
    return(
        <div className="containerKnowledges">
        {knowledges.map((knowledge)=>
            <Knowledge key={knowledge.id} knowledge={knowledge}/>
        )}
        </div>
    )
}
export default Knowledges