//alert();
let sld1,sld2,sld3;
let arr = [sld1,sld2,sld3];
let b3 = document.getElementById("b3");
sld1 = `
         <h1 class="sldH1">Why Grunt?</h1>
         <div class="sldDiv">
         <p>
             In one word: automation. The less work you have to do 
             when performing repetitive tasks like minification, 
             compilation, unit testing, linting, etc, the easier your 
             job becomes.
             After you've configured it through a Gruntfile, a task runner 
             can do most of that mundane work for you—and your team—with 
             basically zero effort.
         </p>
         <p>
              The Grunt ecosystem is huge and it's growing every day. With 
              literally hundreds of plugins to choose from, you can use Grunt 
              to automate just about anything with a minimum of effort. 
         </p>
         </div>
         <h2 class="sldH2"> When to use it?</h2>
         <div class="sldDiv">
         <p>
               If you're developing websites or web apps Grunt will almost always 
               be an enrichment for you. Using Grunt now a day - for 
               websites, web apps and even things like HTML prototypes. The latter 
               mainly to make use of SASS.
            
          </p>     
         </div>
       `;

b3.innerHTML = sld1;