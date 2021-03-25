import React from "react";
import Gallery from "react-photo-gallery";
import { SRLWrapper } from "simple-react-lightbox";
import { photos } from "../components/photos";
import "react-responsive-carousel/lib/styles/carousel.min.css";


 const FamilyGallery = () => {
 
  return (
    <div>
      <SRLWrapper elements={photos}>
      <Gallery photos={photos} direction={"column"} margin={4}/>
      </SRLWrapper>
            
         
 
     
    </div>
  );
}
export default FamilyGallery;