import { useEffect, useState } from "react";
function useObserver(reference,options){
    const [intersect,setIntersect] = useState(false);
    useEffect(()=>{
        const Observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    setIntersect(true);
                    Observer.unobserve(entry.target);
                }
            });
        },options);
        reference.forEach(ref=>{
            ref.current && Observer.observe(ref.current);
        });
        return ()=> Observer.disconnect();
    },[options,reference]);
    return intersect;
}
export default useObserver;