import React from "react";

const contact = [
  {
    id:1,
    name:"Instagram",
    link:"https://www.instagram.com/friendsofmeditation01/?hl=en",
  },
  {
    id:2,
    name:"Facebook",
    link:" https://www.facebook.com/friendsofmeditation",
  },
]

export const Footer = () =>{
  return(
    <footer className="footer_container">      
      <hr className="footer_container_hr" ></hr>
      <div className="footer_container_main">
        <div className="footer_container_main_contact">
          <h1 className="footer_container_main_text">
            Share
          </h1>
        </div>
        <div className="footer_container_main_contact_lists">
          {contact.map((value,index) => (
            <a href={value.link} key={index.toString()} className="footer_container_main_contact_list">
              {value.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
    
  )
}