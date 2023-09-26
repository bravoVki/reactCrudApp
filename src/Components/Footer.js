import React from "react";

export default function Footer()
{
    return(
         //bootsrap ko class ho
         <React.Fragment>
         <footer className="bg-info fixed-bottom">
           <div className="container">
             <div className="col-md-8 mt-3 text-center">
               <p className="mx-auto" style={{ maxWidth: "fit-content" }}>All Rights Reserverd @webtechnologies</p>
             </div>
           </div>
         </footer>
       </React.Fragment>
       
       
       
    )
}