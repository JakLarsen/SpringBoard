import React, {useState} from "react";
import NumberItem from "./NumberItem";

const NumbersList = () =>{
    const [nums, setNums] = useState([2,5,7,11,12,18])

    const remove = (num) =>{
        console.log('Removing:', num)
        setNums(nums.filter(n=>n!==num))
    }

    return(
        <ul>
            {nums.map(n => 
                <NumberItem 
                num = {n}
                remove = {remove}
                />
            )}
        </ul>
    )


}

export default NumbersList