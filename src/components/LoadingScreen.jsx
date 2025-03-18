import { useEffect, useState } from "react";

export const LoadingScreen = ({onComplete}) => {
    const[text, setText] = useState("");
    const fullText = "Bill Nguyen";

    useEffect(() => {
        let index = 1;
        const interval = setInterval(() => {
            
            index++;
            setText(fullText.substring(0, index));
            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }
        , 100);
        
        return () => clearInterval(interval);
    },[onComplete] );

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">{text}<span className="animate-blink ml-1"> | </span></div>

            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-pink-500 shadow-[0_0_15px_#2b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
};