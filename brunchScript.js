//alert();
let slider = document.getElementById("b2");
let sld1,sld2,sld3,sld0,sld4,sld5,sld6,sld7;
arr = [sld1,sld2,sld3,sld4,sld5,sld6,sld7];
let count = 0;
sld0 = `
                     <h2 id="sl0"> Why uses Brunch?</h2>
                     <p>
                        One of the first decisions that developers of JavaScript web applications 
                        have to make is which build tool to use; they’ve never had so much choice. 
                        They can use Grunt, Gulp, Brunch, Broccoli, Mimosa, or Jake, just to name 
                        a few. So how does one choose the right tool for the job?
                        Let’s compare Brunch with Grunt and Gulp, two of the most popular JavaScript 
                        build tools.
                     </p>
                   `;
sld1 = `
                <h2 class="slideTitle">Grunt</h2>
                <p>
                    Grunt is arguably the most popular build tool for JavaScript projects. 
                    It sports the largest ecosystem and a great amount of flexibility 
                    (WebStorm even has built-in Grunt integration!). However, Grunt configuration 
                    can often be complicated and result in larger configuration files than Gulp or 
                    Brunch. Grunt is great out of the box for small to medium sized projects, but 
                    the lack of out-of-the-box incremental builds and file caching makes it necessary 
                    to use plugins like grunt-newer to get short build times with very large projects, 
                    which may further increase configuration complexity. In addition, Grunt doesn’t have 
                    the level of support for project skeletons that Brunch does; often another tool is 
                    used, such as Yeoman.
                </p>
       `;

sld2 = `
          <h2 class="slideTitle">Gulp</h2>
          <p>
          Gulp, the newest system of the three, is a bit different from either Brunch 
          or Grunt in that it uses Node streams to achieve high performance. Its ecosystem 
          isn’t as large as Grunt’s, but it’s still pretty large with 600+ plugins. The 
          configuration files are very simple. Like Grunt, it doesn’t have great skeleton 
          support or caching or incremental rebuilds built in, but has well-supported plugins 
          which provide that functionality. Those plugins combined with the streams make Gulp 
          the winner in terms of pure performance.
          </p>
       `;

sld3  = `
          <h2 class="slideTitle">Conclusion</h2>
          <div class="slideTitle">
          <p>
          You really can’t go wrong these days with build tools as long as you consider the 
          anticipated scope, size, and technology requirements of your projects. Grunt has 
          the largest ecosystem and most flexibility, Gulp has the best performance, and Brunch 
          provides the easiest setup and great out-of-the-box performance. At CodeCombat, we’re 
          very satisfied with Brunch, but can’t wait to see what the future holds in terms of 
          new and improved build tools.
          </p>
          <h3>BRUNCH Official Documantation</h3>
          <p>Official Site : <a href="https://brunch.io/">https://brunch.io/</a></p>
          <P>Brunch is much simpler to set and use. Brunch is able to provide a smooth
             and fast experience, and makes your config files take a drastic cut.</P>
             
             </div>
             <div id="next" >Next</div>
       `;

sld4 = `
          <h2 class="slideTitle1"> In Brunch the configs are much simpler</h2>
          <div class="inner">
               <h3> It doesn't take much to get around with brunch:</h3>
               <p>Three simple commands</p>
               <ul>
                   <li class="simple">brunch new to create a new project</li>
                   <li class="simple">brunch build to build</li>
                   <li class="simple">brunch watch to live-compile</li>
               </ul>
               <p>Brunch was built with two things in mind: speed and simplicity.</p>
               <p>You will find that the typical config of a Brunch application is an order of magnitude simpler, 
                  compared to Webpack, Grunt, or Gulp.</p>
               <p>Besides configs, brunch is also simpler in terms of commands. Grunt / Gulp 
                  commands replicate all plugins it loads. Brunch always has three commands: new, 
                  build and watch. Build / watch commands may receive optional production flag 
                  which will tell Brunch to optimize assets, javascripts and stylesheets.</p>   
          </div>
          <div id="next" >Next</div>
       `;
sld5 = `  
          <h2 class="slideTitle">Testing Brunch</h2>
          <div class="inner">
          <ul>
          <li class="simple simple1">
               First you need to installed Node.js
          </li>
          <li class="simple simple1">
               Now install Brunch
               <pre>
               $ npm install -g brunch
               </pre>
          </li>
          <li class="simple simple1">
               brunch new helps to init new Brunch project from one of community-provided 
               skeletons. The popular "ES6 skeleton" may sound scary, but it's actually very 
               modern and nice. Let's try to create a new app from it!
               <pre>
                $ brunch new proj -s es6 
               </pre>
          </li>
          <li class="simple simple1">
               in your shell prompt. Executing the command will:
               Create directory proj
               Clone git repo git://github.com/brunch/with-es6.git to the dir. The Git URL is 
               basically full name of our "es6" skeleton.
               Run npm install to install app dependencies and brunch plugins
               After the project is created, let's try to build it:
               <pre>
                $ brunch build
                  01 Apr 10:45:30 - info: compiled initialize.js into app.js, copied index.html in 857ms
               </pre>
          </li>
          
          </ul>
          </div>
          <div id="next" >Next</div>  
       `;
sld6 = `
          <h2 class="slideTitle">What is the dish made of?</h2>
          <div class="inner">
               <h3>The app is there, let's take a quick look into the project's structure</h3>
               <code class="cod">
                     app/ <br>
                     assets/ &ensp; &ensp;          // Files inside \`assets\` would be simply copied to \`public\` dir.
                     index.html <br>
                     initialize.js <br>
                     brunch-config.js &ensp; &ensp;    // Basic assumptions about the project, like paths & outputs.<br>
                     node_modules
                     package.json  &ensp; &ensp;      // Describes which dependencies and Brunch plugins your app uses.<br>

                     public/  &ensp; &ensp;           // The "output" Brunch will re-generate on every build.<br>
                     index.html  &ensp; &ensp;      // This was simply copied from our \`app/assets\` <br>
                     app.js  &ensp; &ensp;           // \`app.js\`, in turn, was generated from \`initialize.js\`.<br>
                     app.js.map  &ensp; &ensp;       // Source mappings for simple debugging.
               </code>
               <p>
                    Let's add a few files to our app, then build the app one more time:
               </p>
               <div>
               <pre>
               $ echo "body {font-family: 'Comic Sans MS'}" > app/main.css
               $ echo "console.log('Hello, world')" > app/logger.js
               $ brunch build
                 01 Apr 10:50:10 - info: compiled 3 files into 2 files, copied index.html in 947ms
               </pre>
               </div>
          </div>
          <div id="next" >Next</div> 
       `;
sld7 = `
          <h2 class="slideTitle">Let's inspect files in public to understand what happened at this point:</h2>
          <div class="inner">
               <ul>
                  <li class="simple">app.css simply has content of app/main.css and nothing else</li>
                  <li class="simple">app.js has require definition and contents of both initialize.js and logger.js. 
                      Each file is wrapped into a JS function, which defines a module. This allows us to do 
                      things like require('./logger'). Indeed, your logger.js file will not execute without you first 
                      requiring it inside initialize.js, so go ahead and require it in initialize.js. You can use the 
                      require command as follows, require('./logger').</li>
               </ul>
               <h2 class="slideTitle">Seving The Brunch</h2>
                  <p>
                      Executing brunch build every time seems to take too much effort. Instead, let's just do brunch 
                      watch --server. The watch would automatically & efficiently rebuild the app on every change. 
                      --server flag would also launch a HTTP server. The default location for the server is 
                      http://localhost:3333, so open this URL in a browser of your choice. You'll see our app 
                      and everything which was located in public directory.Since the shell console would be busy 
                      with brunch watch command, we'll need to open a new window.
                  </p>
          </div>
          
          <div id="next" >Next</div> 
       `;

slider.innerHTML = sld0;
arr = [sld0,sld1,sld2,sld3,sld4,sld5,sld6,sld7];
let slideNumber = document.getElementById("slideNumber");


let ff = document.getElementById("btnF");
ff.addEventListener("click",forward);
function forward() {
    if (count === arr.length-1){
        count = -1;
    }
    count++;
    slideNumber.innerHTML = `${count} `;
    console.log(count);
    slider.innerHTML = arr[count];
    if (count>2){
        let next = document.getElementById("next");
        next.addEventListener("click",forward);
    }

}

let rr = document.getElementById("btnR");
rr.addEventListener("click",reverse);
function reverse() {
    if (count===0){
        count = arr.length;
    }
    count--;
    console.log(count);
    slider.innerHTML = arr[count];
    if (count>2){
        let next = document.getElementById("next");
        next.addEventListener("click",forward);
    }
}

function createSlideShow(){

}

function goNext1() {
    count = count+1;
    //alert(count);
    slider.innerHTML = arr[count];

}



/////
function special(){
    let next = document.getElementById("next");
    next.addEventListener("click",goNext1);
    function goNext1() {
        count = count+1;
        //alert(count);
        slider.innerHTML = arr[count];

    }
}


