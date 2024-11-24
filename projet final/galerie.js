

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
     console.log("Source de l'image (src):", previewPic.src);
           console.log("Texte alternatif (alt):", previewPic.alt);
     let imad = document.getElementById('image');
     imad.innerHTML = previewPic.alt;
   imad.style.backgroundImage=`url(${previewPic.src})`;
       }
       
   
function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
           let im = document.getElementById('image');
     im.innerHTML = "Hover over an image below to display here";
     im.style.backgroundImage="";
       }


function tabfocus(){
    console.log("tabfocus est declenche");
    my_images = document.querySelectorAll("img")
for (let i = 0; i < my_images.length; i++) {
    my_images[i].setAttribute("tabindex",0);
    
}


}