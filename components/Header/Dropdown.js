import { useState } from "react";

function Dropdown(props)
{
    
    const [hidden,setHidden]=useState("hidden")

    const toggleHidden=function()
    {
        if(hidden=="hidden")
        {
            setHidden("")
        }
        else
        {
            setHidden("hidden")
        }
    }
    return(
        <ul className="categories">
            <li>
                <span onClick={toggleHidden}>All categories</span>
                <ul className={"dropdown "+hidden}>
                    {
                        props.pages1.map(function(a,b){
                            return <li>{a}</li>
                        })
                    }
                </ul>
            </li>
        </ul>
    )
}
export default Dropdown;