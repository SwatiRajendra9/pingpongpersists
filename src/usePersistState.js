import { useState, useEffect} from "react";

function getScore(key,defaultScore) {
    const saved = localStorage.getItem(key);
    const parsedValue = JSON.parse(saved);
    return parsedValue || defaultScore;
}

const usePersistState = (key,defaultScore) => {
    const [score,setScore] = useState(() => {
        return getScore(key,defaultScore);
    });


    useEffect(()=> {
        localStorage.setItem(key,score);
    },[key,score]);


    return [score,setScore];
}

export default usePersistState;