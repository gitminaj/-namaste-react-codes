import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body= ()=>{

  const [ resDetail , setResDetail ] = useState([]);

  const [ allResDetail , setAllResDetail ] = useState([]);
  
  const [buttonStatus , setButtonStatus ] = useState("Top rated");
  
  const [searchText , setSearchText ] = useState("");

  useEffect(()=>{
    getData()
  },[]);
  
  const getData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    
    const json = await data.json();

    const restaurnats = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setResDetail(restaurnats);
    setAllResDetail(restaurnats);
  }

 if(resDetail?.length === 0){
  return <Shimmer />
 }

 else{
   return(
       <div>
           <div className="filter m-2">
               <input className="border rounded-sm border-black m-2 pl-1" type="text" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
               }}></input>

               <button className="mr-2 border border-black px-4 rounded-sm bg-green-400 hover:bg-green-500" onClick={() =>{
                  const searched_res = allResDetail.filter(
                    (res)=> res.info.name.toLowerCase().includes(searchText)
                  );
                  setResDetail(searched_res)
               }}>Submit</button>
  
               <button className="mr-2 border border-black px-4 rounded-sm bg-red-400 hover:bg-red-500 " onClick={()=>{
                 if(buttonStatus === "Top rated"){
                   setButtonStatus("All restro");
                   const resData = resDetail.filter((res)=>res.info.avgRating > 4);
                   setResDetail(resData);
                 }
                 else {
                   setResDetail(allResDetail);
                   setButtonStatus("Top rated");
                 }
               }}>{buttonStatus}</button>
               
           </div>
           <div className="flex flex-wrap">
                {
                  resDetail?.map((res)=>{  
                return (<Link key={res.info.id} to={"/restaurant/" + res.info.id} style={{ textDecoration: 'none' }}> <ResCard resData={res}/>  </Link>)
                })
                }
           </div>
       </div>
   )
 }

}

export default Body;