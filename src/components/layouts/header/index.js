import React, { Fragment, useEffect, useState } from "react";
import { Input, Typography } from "@mui/material";
import Link from "next/link";
import { Search } from "@mui/icons-material";
import Banner from "./banner";

const nav_link = [
  {
    path:'/',
    display:'Home'
  },
  {
    path:'#meditationChair',
    display:'Meditationk Chair'
  },
  {
    path:'#meditationcushions',
    display:'Meditation Cushions'
  },
  {
    path:'#sleepmask',
    display:'Sleep Mask'
  },
  {
    path:'#backlessyogachair',
    display:'Backless Yoga Chair'
  },
  {
    path:'#yogamats',
    display:'Yoga mats'
  },
  {
    path:'#facemasks',
    display:'Face Masks'
  },
  {
    path:'#more',
    display:'More'
  },
]

export const Header = () =>{
  // const [fix, setFix] = useState(false);
  // function setFixed(){
  //   console.log(fix);
  //   if(window.screenY <= 288){
  //     setFix(true);
  //   }else{
  //     setFix(false);
  //   }
  // }
  // useEffect(() => {
  //   console.log(window)
  //   window.addEventListener("scroll",setFixed);
  // }, [fix]);
  
  // if(typeof window != "undefined"){
  //   const header = document.getElementById("#header")
  //   if (typeof header != "undefined") header.addEventListener("scroll",setFixed);
  // }
  
  return(
    <Fragment>
    <Banner/>
      <header className='header_container'>
        <div className="header_container_left">
          {
            nav_link.map((value,index)=>(
              <Link href={value.path} key={index} >
              <div className="header_container_left_items">{value.display}</div>
              </Link>
            ))
          }

        </div>
        <div className="header_container_right">
          <div className="header_container_right_search">
            <Search className="header_container_right_search_icon" />
            <input placeholder="Search all FOM (Friends of meditation" type={"search"} className="header_container_right_search_feild"></input>   
          </div>
        </div>
      </header>
    </Fragment>    
  )
}