//alert();
let sld1,sld2,sld3;
let arr = [sld1,sld2,sld3];
let count = 0;
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

sld2 = `
           <h1 class="sldH1">Getting Started with Grunt</h1> 
           <div class="sldDiv">
                <p>
                Grunt and Grunt plugins are installed and managed via npm, the Node.js 
                package manager. Grunt 0.4.x requires stable Node.js versions >= 0.8.0.
                Before setting up Grunt ensure that your npm is up-to-date by running 
                <code>npm update -g npm </code>(this might require sudo on certain systems).
                </p>
                <p>
                In order to get started, you'll want to install Grunt's command line 
                interface (CLI) globally.
                <pre>
      npm install -g grunt-cli
                </pre>
                </p>
                <p>
                Each time grunt is run, it looks for a locally installed Grunt using node's 
                require() system. Because of this, you can run grunt from any subfolder in 
                your project.If a locally installed Grunt is found, the CLI loads the local 
                installation of the Grunt library, applies the configuration from your Gruntfile, 
                and executes any tasks you've requested for it to run. 
                </p>
           </div>
       `;
sld3 = `
            <h1 class="sldH1">How to Start a new Grunt project!!</h1>
            <div class="sldDiv">
            <p>
            A typical setup will involve adding two files to your project:<em>package.json</em>  
            and the <em>Gruntfile</em>.
            </p>
            <p>
            <label>package.json:</label> This file is used by npm to store metadata for projects published as npm 
            modules. You will list grunt and the Grunt plugins your project needs as devDependencies 
            in this file.
            </p>
            <p>
            <label>Gruntfile:</label> This file is named Gruntfile.js or Gruntfile.coffee and is used to configure or 
            define tasks and load Grunt plugins. When this documentation mentions a Gruntfile it is 
            talking about a file, which is either a Gruntfile.js or a Gruntfile.coffee.
            </p>
            </div>
       `;

arr = [sld1,sld2,sld3];
let next = document.querySelector("#btn1");
next.addEventListener("click",sliderG);
function sliderG() {
    if (count>arr.length-1){
        count = 0;
    }
    count++;
    b3.innerHTML = arr[count];
}