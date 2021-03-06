productScroll();

function productScroll() {
     let slider = document.getElementById("slider");
     let next = document.getElementsByClassName("pro-next");
     let prev = document.getElementsByClassName("pro-prev");
     let slide = document.getElementById("slide");
     let item = document.getElementById("slide");

     for (let i = 0; i < next.length; i++) {
          //refer elements by class name

          let position = 0; //slider postion

          prev[i].addEventListener("click", function () {
               //click previos button
               if (position > 0) {
                    //avoid slide left beyond the first item
                    position -= 1;
                    translateX(position); //translate items
               }
          });

          next[i].addEventListener("click", function () {
               if (position >= 0 && position < hiddenItems()) {
                    //avoid slide right beyond the last item
                    position += 1;
                    translateX(position); //translate items
               }
          });
     }

     function hiddenItems() {
          //get hidden items
          let items = getCount(item, false);
          let visibleItems = slider.offsetWidth / 210;
          return items - Math.ceil(visibleItems);
     }
}

function translateX(position) {
     //translate items
     slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
     //count no of items
     let relevantChildren = 0;
     let children = parent.childNodes.length;
     for (let i = 0; i < children; i++) {
          if (parent.childNodes[i].nodeType != 3) {
               if (getChildrensChildren)
                    relevantChildren += getCount(parent.childNodes[i], true);
               relevantChildren++;
          }
     }
     return relevantChildren;
}

// Code to Add New-item
// <button onclick="addImage()" id="Image-BTN">Add Image</button>
// function addImage() {
//      var new_item = `<li class="item-a"><div class="box">
//      <!--img-box---------->
//      <div class="slide-img">
//           <img
//                src="./Images/Girls/kidG1.jpg"
//                alt="1"
//           />
//           <!--overlayer---------->
//           <div class="overlay">
//                <!--buy-btn------>
//                <a href="#" class="buy-btn">Buy Now</a>
//           </div>
//      </div>
//      <!--detail-box--------->
//      <div class="detail-box">
//           <!--type-------->
//           <div class="type">
//                <a href="#">Rabbed Cardigan</a>
//                <span>Noe Arrival</span>
//           </div>
//           <!--price-------->
//           <a href="#" class="price">$23</a>
//      </div>
// </div>
// </li>`;
//      $(".slide-girls").append(new_item);
// }
