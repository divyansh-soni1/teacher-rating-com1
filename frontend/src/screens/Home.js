import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import im1 from "./assets/Dr.-A.K-Sachan-199x300.jpg";
import im2 from "./assets/DR.-Amit-Bodh-Upadhyay-OSD-LNCTS-199x300.jpg";
import im3 from "./assets/Dr.-Lishan-Karup-LNCT-EC-199x300.jpg";
import im4 from "./assets/DR.-Sunil-Kumar-Singh-OSD-199x300.jpg";
import im5 from "./assets/DR.Ashok-Rai-199x300.jpg";

function Home() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Carousal />
      </div>

     <div  >
      <div className="j">
      <div className="m-3">
        <Card  im={im1} txt={"Dr.-A.K-Sachan"}/>
      </div>
      <div className="m-3">
        <Card  im={im2} txt={"DR.-Amit-Bodh-Upadhyay"}/>
      </div>
      <div className="m-3">
        <Card  im={im3} txt={"Dr.-Lishan-Karup-LNCT-EC"}/>
      </div>
      <div className="m-3">
        <Card  im={im4} txt={"DR.-Sunil-Kumar-Singh"}/>
      </div>
     
     
      <div className="m-3">
        <Card  im={im5} txt={"DR.Ashok-Rai"}/>
      </div>
     
     
      </div>
     
     </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
