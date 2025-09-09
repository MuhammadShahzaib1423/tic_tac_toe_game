import React, { useState,useRef } from 'react'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let data = ["","","","","","","","",""];

const resetbutton = () =>{

        data = ["","","","","","","","",""];
        window.location.reload();
}
const TicTacToe = () => {

      let [count,setCount] = useState(0);
      let [lock,setlock] = useState(false);
      let titleRef = useRef(null);


    const toggle = (w,num) =>{

            if(lock){
                return 0;
            }
            if(count%2===0){
                w.target.innerHTML = `<img src=${cross_icon} class="h-16 w-16" />`
                data[num] = "x";
                setCount(count+1);
            }
            else{
                w.target.innerHTML = `<img src=${circle_icon} class="h-16 w-16" />`
                data[num] = "o";
                setCount(count+1);
            }
            checkwin();
    }

    const checkwin = () =>{
     
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
         won(data[2]);

        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            won(data[0]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            won(data[1]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[2]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data[0]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[6]);
        }
        else if(count===8){
            alert("Match Draw");
            setlock(true);
        }

    }
    
    const won = (winner) =>{

            setlock(true);
            if(winner==="x"){
                titleRef.current.innerHTML = `Cross <span class="text-blue-400">Won</span>`;
            }
            else{
                titleRef.current.innerHTML = `Circle <span class="text-blue-400">Won</span>`;
            }
            titleRef.current.classList.add("animate-bounce");
    }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center "> 
      <h1 className="text-center mb-8 text-white text-5xl font-bold title" ref={titleRef}>
        Tic Tac Toe Game in <span className="text-blue-400">React</span>
      </h1>


      <div className="board space-y-2">
        <div className="row1 flex space-x-2">
          <div className="boxes  flex items-center justify-center cursor-pointer bg-[#1f2540] border rounded-lg h-24 w-24" onClick={(e)=>{toggle(e,0)}}></div>
          <div className="boxes flex items-center justify-center cursor-pointer bg-[#1f2540] border rounded-lg h-24 w-24" onClick={(e)=>{toggle(e,1)}}></div>
          <div className="boxes flex items-center justify-center cursor-pointer bg-[#1f2540] border rounded-lg h-24 w-24" onClick={(e)=>{toggle(e,2)}}></div>
        </div>

        <div className="row2 flex space-x-2">
          <div className="boxes flex items-center justify-center cursor-pointer bg-[#1f2540] border rounded-lg h-24 w-24" onClick={(e)=>{toggle(e,3)}}></div>
          <div className="boxes flex items-center justify-center cursor-pointer bg-[#1f2540] border rounded-lg h-24 w-24" onClick={(e)=>{toggle(e,4)}}></div>
          <div className="boxes flex items-center justify-center cursor-pointer bg-[#1f2540] border rounded-lg h-24 w-24" onClick={(e)=>{toggle(e,5)}}></div>
        </div>

        <div className="row3 flex space-x-2">
          <div className="boxes flex items-center justify-center cursor-pointer bg-[#1f2540] border rounded-lg h-24 w-24" onClick={(e)=>{toggle(e,6)}}></div>
          <div className="boxes flex items-center justify-center cursor-pointer bg-[#1f2540] border rounded-lg h-24 w-24" onClick={(e)=>{toggle(e,7)}}></div>
          <div className="boxes flex items-center justify-center cursor-pointer bg-[#1f2540] border rounded-lg h-24 w-24" onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>

   
      <button className="reset mt-8 px-6 py-2 text-[#26ffcb] bg-[#1f3540] cursor-pointer rounded-lg shadow-md hover:bg-[#1db8a1] hover:text-[#1f3540] transition" onClick={resetbutton}>
        Reset
      </button>
    </div>
  )
}

export default TicTacToe
