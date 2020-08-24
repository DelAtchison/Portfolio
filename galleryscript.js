Gallery();

function Gallery() { //Everything goes in here to keep it tidy and avoid global variables messing up your day

    
/* This bit puts the gallery images and info in the right places */
    
        var gallery = document.getElementById("gallery");
        var pagetype = containerouter.getAttribute("data-page");
        for (var i = 0; i < works.length; i++) {
            console.log (pagetype);
        var imageholder = document.createElement("div");
        var thumbnail = document.createElement("img");       
        var content = document.createElement("div");

        if ((pagetype === "default")||(pagetype ===  "illustration")) {
                if ((i ===3)||(i===4)||(i===8)||(i===9)||(i===12)||(i===13))  //3,2,3   (i ===0)||(i===1)||(i===2)||(i===5)||(i===6)||(i===7)
                { imageholder.className = "one-half column imageholder"; }
                else {
        imageholder.className = "one-third column imageholder";};
        thumbnail.className = "thumbnail clicker";
        thumbnail.style.backgroundImage="url("+works[i].tbimage+")";
        thumbnail.style.backgroundPosition="center";
        thumbnail.setAttribute("href", works[i].tbimage);
        thumbnail.setAttribute("content", works[i].tbimage);
        thumbnail.style.cssText += "background-repeat:no-repeat;background-size:cover;";
        thumbnail.setAttribute("data-worksnumber", +i); 
        content.className = "holdercontent a clicker";
        content.setAttribute("data-worksnumber", +i); 
        content.innerHTML = works[i].name ;
        imageholder.appendChild(content);
        imageholder.appendChild(thumbnail);
        gallery.appendChild(imageholder);
        gallery.style.opacity ="1";
                          }
        else if ((pagetype === "design")||(pagetype === "photography")){
            if ((i ===0)||(i===1)||(i===5)||(i===6)||(i===10)||(i===11))  //3,2,3   
                { imageholder.className = "one-half column imageholder"; }
                else {
        imageholder.className = "one-third column imageholder";};
        thumbnail.className = "thumbnail clicker";
        thumbnail.style.backgroundImage="url("+works[i].tbimage+")";
        thumbnail.style.backgroundPosition="center";
        thumbnail.setAttribute("href", works[i].tbimage);
        thumbnail.setAttribute("content", works[i].tbimage);
        thumbnail.style.cssText += "background-repeat:no-repeat;background-size:cover;";
        thumbnail.setAttribute("data-worksnumber", +i); 
        content.className = "holdercontent a clicker";
        content.setAttribute("data-worksnumber", +i); 
        content.innerHTML = works[i].name ;
        imageholder.appendChild(content);
        imageholder.appendChild(thumbnail);
        gallery.appendChild(imageholder);
        gallery.style.opacity ="1";

                          };
        }
    
/* This bit takes the relevant information associated with the image you clicked on, and puts it into a full page div so it looks like a cross between a lightbox and a "new window" type effect */
    
        var imgpage = document.getElementById("imgpage");
        var thingamabob = document.getElementsByClassName("clicker");
        for (var i = 0; i < works.length*2; i++) { //listing 2 elements for each item doubles the number needed
                thingamabob[i].addEventListener("click",tester)
            };   
        function tester2(){alert(this.getAttribute("data-worksnumber"))};
        function tester(){
            //alert("works");
            
            if (!document.getElementById("full_image")) {   //if the divs for the full image view content DOESN"T exist, create them and add the data
                var imgpage = document.getElementById("imgpage");
                var thingamabob = document.getElementsByClassName("clicker");
                imgpage.style.cssText += "display:hidden;opacity:0;"; //not sure i need this but there used to be a fade in
                imgpage.style.cssText += "display:block;opacity:1";
                var containerstyle = document.getElementsByClassName("container")
                    for (i = 0; i < containerstyle.length; i++) {
                            containerstyle[i].style.cssText += "-webkit-filter:blur(3px);filter:blur(3px);"
                        };
                var fullimage = document.createElement("div");
                var workinfo = document.createElement("div");
                var titlebox = document.createElement("div");
                var datebox = document.createElement("div");
                var descriptionbox = document.createElement("div");
                var thumbnailimage = document.getElementById("thumbnail");        
                var contentnumber = this.getAttribute("data-worksnumber");
                fullimage.id = "full_image";
                imgpage.appendChild(fullimage);
                workinfo.className = "workinfo";
                imgpage.appendChild(workinfo); /// imgpage for below image - fullimage for inside?
                titlebox.id = "work_title";
                workinfo.appendChild(titlebox);
                datebox.id = "datebox";
                workinfo.appendChild(datebox);
                descriptionbox.id ="description";
                imgpage.appendChild(descriptionbox);
                fullimage.setAttribute("style" , "background-image:url(\""+ works[contentnumber].image + "\");"); 
                fullimage.setAttribute("data-worksnumber", +contentnumber);
                titlebox.innerHTML= works[contentnumber].name ;
                datebox.innerHTML= works[contentnumber].year;
                descriptionbox.innerHTML=works[contentnumber].description ;
                document.getElementsByTagName("body")[0].style.cssText += "overflow:hidden;";
            }
            else {                                       //if the divs that hold the full image view contend DOES exist, just edit the data in them
                var contentnumber2 = this.getAttribute("data-worksnumber");
                var imgpage = document.getElementById("imgpage");
                var fullimage = document.getElementById("full_image");
                var titlebox = document.getElementById("work_title");
                var datebox = document.getElementById("datebox");
                var descriptionbox = document.getElementById("description");

                imgpage.style.cssText += "display:hidden;opacity:0;"; //not sure i need this but there used to be a fade in
                imgpage.style.cssText += "display:block;opacity:1";
                fullimage.setAttribute("style" , "background-image:url(\""+ works[contentnumber2].image + "\");"); 
                fullimage.setAttribute("data-worksnumber", +contentnumber2);
                titlebox.innerHTML= works[contentnumber2].name ;
                datebox.innerHTML= works[contentnumber2].year;
                descriptionbox.innerHTML=works[contentnumber2].description ;
                document.getElementsByTagName("body")[0].style.cssText += "overflow:hidden;";
            };

/* This bit hides and/or removes all the divs and data and associated info so they can be replaced with the correct info again when you click on another gallery image */
    
        var closepage = document.getElementById("close");
        var closepage2 = document.getElementById("imgpage");
        var next_button = document.getElementById("next_button");
        var prev_button = document.getElementById("prev_button");
        closepage.addEventListener("click", hidethings);
        closepage2.addEventListener("click", hidethings);
        function hidethings(){
            var containerstyle = document.getElementsByClassName("container")
            for (i = 0; i < containerstyle.length; i++) {
                    containerstyle[i].style.cssText += "-webkit-filter:blur(0px);filter:blur(0px);"
                };
            var imgpage = document.getElementById("imgpage");
            var titlebox = document.getElementById("work_title");
            var fullimage = document.getElementById("full_image");
            var workinfo = document.getElementsByClassName("workinfo");
            var datebox = document.getElementById("datebox");
            var descriptionbox = document.getElementById("description");
            fullimage.setAttribute("style" , "background-image:none"); 
            titlebox.innerHTML= " ";
            datebox.innerHTML= "";
            descriptionbox.innerHTML= "";
            titlebox.innerHTML="";
            document.getElementsByTagName("body")[0].style.cssText += "overflow:auto;";
            imgpage.style.cssText += "opacity:0;display:none;"; 
        };
    
      };  
    
/* Next and previous butons that find the current number of the content you"re on and add or remove one from it to take you to the next or previous item in    the list, loops around if at the beginning or end of the list */
    
        next_button.addEventListener("click", next);
        function next(e){ 
            var currentnumber = document.getElementById("full_image").getAttribute("data-worksnumber");   
            currentnumber = parseInt(currentnumber, 10) + 1;
            currentnumber = currentnumber % works.length; // if we"ve gone too high, start from `0` again
            var fullimage = document.getElementById("full_image");
            var datebox = document.getElementById("datebox");
            var descriptionbox = document.getElementById("description");
            var titlebox = document.getElementById("work_title");
            fullimage.setAttribute("style" , "background-image:url(\""+ works[currentnumber].image + "\");"); 
            fullimage.setAttribute("data-worksnumber", +currentnumber);
            titlebox.innerHTML= works[currentnumber].name;
            datebox.innerHTML=works[currentnumber].year ;
            descriptionbox.innerHTML= works[currentnumber].description; 
            e.stopPropagation();
        };

        prev_button.addEventListener("click", prev);
        function prev(e){ 
            var currentnumber = document.getElementById("full_image").getAttribute("data-worksnumber");  
            if (currentnumber <= 0) { // i would become 0
                currentnumber = works.length; // so put it at the other end of the array
            };
            currentnumber = parseInt(currentnumber, 10) - 1;
            var fullimage = document.getElementById("full_image");
            var datebox = document.getElementById("datebox");
            var descriptionbox = document.getElementById("description");
            var titlebox = document.getElementById("work_title");
            fullimage.setAttribute("style" , "background-image:url(\""+ works[currentnumber].image + "\");"); 
            fullimage.setAttribute("data-worksnumber", +currentnumber);
            titlebox.innerHTML= works[currentnumber].name;
            datebox.innerHTML=works[currentnumber].year ;
            descriptionbox.innerHTML= works[currentnumber].description; 
            e.stopPropagation();
        };
    
};