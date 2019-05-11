//alert();
let sld1,sld2,sld3,sld4,sld5,sld6,sld7,sld8,sld9,sld10,sld11,sld12,sld13,sld14,sld15,sld16;
let arr = [sld1,sld2,sld3,sld4,sld5,sld6,sld7,sld8,sld9,sld10,sld11,sld12,sld13,sld14,sld15,sld16];
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

sld4 = `
           <h1 class="sldH1">package.json</h1> 
           <div class="sldDiv">
           <p>
           The package.json file belongs in the root directory of your project, next to the Gruntfile, 
           and should be committed with your project source. Running npm install in the same folder 
           as a package.json file will install the correct version of each dependency listed therein.<br>
           There are a few ways to create a package.json file for your project:
           <uo>
           <li>
                Most grunt-init templates will automatically create a project-specific package.json file.
           </li>
           <li>The npm init command will create a basic package.json file.</li>
           <li>Start with the example below, and expand as needed, following this specification.</li>
           </uo>
           <pre>
    {
        "name": "my-project-name",
        "version": "0.1.0",
        "devDependencies": {
            "grunt": "~0.4.5",
            "grunt-contrib-jshint": "~0.10.0",
            "grunt-contrib-nodeunit": "~0.4.1",
            "grunt-contrib-uglify": "~0.5.0"
            }
     }         
           </pre>
           </p>
           </div>
           
       `;
sld5 = `
            <h1 class="sldH1">Installing Grunt and gruntplugins</h1> 
            <div class="sldDiv">
            <p>
            The easiest way to add Grunt and gruntplugins to an existing package.json is with the 
            command <code>npm install &lt;module> --save-dev </code>. Not only will this install &lt;module> locally, 
            but it will automatically be added to the devDependencies section, using a tilde version 
            range. <br>
            For example, this will install the latest version of Grunt in your project folder, adding 
            it to your devDependencies: <br>
            <code>npm install grunt --save-dev</code> <br>
            The same can be done for gruntplugins and other node modules. As seen in the following 
            example installing the JSHint task module:<br>
            <code>npm install grunt-contrib-jshint --save-dev</code><br>
            Be sure to commit the updated package.json file with your project when you're done!
            </p>
            
            </div>
       `;

sld6 = `
            <h1 class="sldH1">The Gruntfile</h1> 
            <div class="sldDiv">
            <p>
            The Gruntfile.js or Gruntfile.coffee file is a valid JavaScript or CoffeeScript file that 
            belongs in the root directory of your project, next to the package.json file, and should 
            be committed with your project source. <br>
            A Gruntfile is comprised of the following parts:
            <ul>
            <li>The "wrapper" function</li>
            <li>Project and task configuration</li>
            <li>Loading Grunt plugins and tasks</li>
            <li>Custom tasks</li>
            </ul>
            </p>
            <h2 class="sldH2">An example Gruntfile</h2>
            <p>
            In the following Gruntfile, project metadata is imported into the Grunt config from 
            the project's package.json file and the grunt-contrib-uglify plugin's uglify task is 
            configured to minify a source file and generate a banner comment dynamically using that 
            metadata. When grunt is run on the command line, the uglify task will be run by default.
            </p>
            </div>
       `;
sld7 = `
            <div id = "sldDiv">
            
            <pre>
  module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};          
            </pre>
            </div>
            <div class="sldDiv">
            <p>
            Now that you've seen the whole Gruntfile, let's look at its component parts.
            </p>
            </div>
            
       `;
sld8 = `
            <h2 class="sldH2">The "wrapper" function</h2>
            <div class="sldDiv">
            <p>
            Every Gruntfile (and gruntplugin) uses this basic format, and all of your Grunt code 
            must be specified inside this function:
            </p>
            <pre>
    module.exports = function(grunt) {
    // Do grunt-related things in here
   };
            </pre>
            
            </div>
            <div class="sldDiv">
            <h2 class="sldH2">Project and task configuration</h2>
            <p>
            Most Grunt tasks rely on configuration data defined in an object passed to the grunt.
            initConfig method.<br>
            In this example, grunt.file.readJSON('package.json') imports the JSON metadata stored 
            in package.json into the grunt config. Because &lt% %> template strings may reference any 
            config properties, configuration data like filepaths and file lists may be specified 
            this way to reduce repetition.<br>
            You may store any arbitrary data inside of the configuration object, and as long as it 
            doesn't conflict with properties your tasks require, it will be otherwise ignored. Also, 
            because this is JavaScript, you're not limited to JSON; you may use any valid JS here. 
            You can even programmatically generate the configuration if necessary.
            </p>
            </div>
       `;
sld9 = `
            <h2 class="sldH2"></h2>
            <div class="sldDiv">
            <p>
            Like most tasks, the grunt-contrib-uglify plugin's uglify task expects its configuration 
            to be specified in a property of the same name. Here, the banner option is specified, along 
            with a single uglify target named build that minifies a single source file to a single 
            destination file.
            </p>
            <pre>
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\\n'
        },
        build: {
          src: 'src/<%= pkg.name %>.js',
          dest: 'build/<%= pkg.name %>.min.js'
        }
      }
    });
            </pre>
            </div>
            <h2 class="sldH2">Loading Grunt plugins and tasks</h2>
            <div class="sldDiv">
            <p>
            Many commonly used tasks like concatenation, minification and linting are available 
            as grunt plugins. As long as a plugin is specified in package.json as a dependency, 
            and has been installed via npm install, it may be enabled inside your Gruntfile with 
            a simple command:
            </p>
            <code class="myCode">
            // Load the plugin that provides the "uglify" task.<br>
            grunt.loadNpmTasks('grunt-contrib-uglify');
            </code>
            </div>
       `;
sld10 = `
            <h1 class="sldH1">Custom tasks</h1>
            <div class="sldDiv">
            <p>
            You can configure Grunt to run one or more tasks by default by defining a default task. 
            In the following example, running grunt at the command line without specifying a task 
            will run the uglify task. This is functionally the same as explicitly running grunt 
            uglify or even grunt default. Any number of tasks (with or without arguments) may be 
            specified in the array.        
            </p>
            <code class="myCode">
            // Default task(s).
            grunt.registerTask('default', ['uglify']);
            </code>
            <p>
            If your project requires tasks not provided by a Grunt plugin, you may define custom 
            tasks right inside the Gruntfile. For example, this Gruntfile defines a completely 
            custom default task that doesn't even utilize task configuration:
            </p>
            <code class="myCode">
                  module.exports = function(grunt) { <br>
                  // A very basic default task.<br>
                  grunt.registerTask('default', 'Log some stuff.', function() {<br>
                    grunt.log.write('Logging some stuff...').ok();<br>
                  });
                
                };
            </code>
            <p>
            Custom project-specific tasks don't need to be defined in the Gruntfile; 
            they may be defined in external .js files and loaded via the grunt.loadTasks method.
            </p>
            </div>
`;
sld11 = `
            <h1 class="sldH1">GULP Vs GRUNT</h1>  
            <div class="sldDiv">
            <p>
            Using a website designer as an example, common tasks for this position include debugging 
            code, concatenating and minifying CSS and JavaScript files, compressing images and applying 
            changes to a server or files on the server. Many of these tasks are simple, but they can be 
            very time-consuming. This is especially true with a large website or one that requires 
            frequent changes and updates. Someone could be assigned to handle these tasks, but since 
            they’re fairly basic, the individual doing them could probably be doing more productive 
            tasks. This is where Grunt or Gulp come in. <br>
            Using a bit of fairly simple code, plugins and either Gulp or Grunt, you can set up a 
            process that automates tasks. Both of these tools allow you to check for new files or 
            changes to files in certain directories and to run tasks applicable to them. In other words, 
            once you’ve set up the processes you want and applied them to your existing files, any new 
            or modified files can automatically have processes applied to them as well.
            </p>
            <p>
            Using a bit of fairly simple code, plugins and either Gulp or Grunt, you can set up a 
            process that automates tasks. Both of these tools allow you to check for new files or 
            changes to files in certain directories and to run tasks applicable to them. In other words, 
            once you’ve set up the processes you want and applied them to your existing files, any new 
            or modified files can automatically have processes applied to them as well.
            </p>
            </div> 
        `;
sld12 = `
            <h1 class="sldH1">How Are They Similar?</h1>  
            <div class="sldDiv">
            <p>
            Now that you have an idea of what Gulp and Grunt can do, we’ll discuss how they do what 
            they do. Both tools are task runners that use Node.js, which is an open source JavaScript 
            runtime environment used to develop tools and applications. Grunt and Gulp both also use 
            plugins to accomplish whatever tasks you need them to automate for you <br>
            Both tools use .js files to build tasks; for Grunt, you use a gruntfile.js, and for Gulp, 
            you use a gulpfile.js. You can also define flows with grunt.task and gulp.task instead of 
            using a function. Some of the most common tasks that either tool can accomplish and/or 
            automate include:
            <ul>
            <li>Compressing image files</li>
            <li>Eliminating debugger and console statements from scripts</li>
            <li>Minifying, concatenating, and cleaning up CSS and JavaScript</li>
            <li>Linting code for errors</li>
            <li>Compiling LESS files</li>
            <li>Running unit tests</li>
            <li>Sending updates to a production server</li>
            <li>Updating databases</li>
            </ul>
            </p>
            </div>
        `;
sld13 = `
            <h1 class="sldH1">Custom tasks</h1>   
            <div class="sldDiv">
            <p>
            
            </p>
            </div>
        `;
sld14 = `
            <h1 class="sldH1">Custom tasks</h1>   
        `;
sld15 = `
            <h1 class="sldH1">Custom tasks</h1>   
        `;
sld16 = `
            <h1 class="sldH1">Custom tasks</h1> 
        `;
let sldNo = document.querySelector("#no");
arr = [sld1,sld2,sld3,sld4,sld5,sld6,sld7,sld8,sld9,sld10,sld11,sld12];
let next = document.querySelector("#btn1");
next.addEventListener("click",sliderG);
function sliderG() {
    count++;
    if (count>arr.length-1){
        count = 0;
    }

    b3.innerHTML = arr[count];
    sldNo.innerText = "Slide "+  count;
    colorChangeForCompare();
}
let back = document.querySelector("#btn2");
back.addEventListener("click",sliderB);
function sliderB() {
    count--;
    if (count<0){
        count = arr.length-1;
    }
    b3.innerHTML = arr[count];
    sldNo.innerText = "Slide "+ count ;
}


/////////////////////////
//let compare = document.getElementsByClassName("compare");
let compare = document.getElementsByClassName("compare");
//compare[0].addEventListener("click",compareFunction);
/*function compareFunction() {
    b3.innerHTML = sld11;
    count = 10;
    sldNo.innerText = "Slide "+ count ;
    compare[0].style.color = "gray";//sandybrown
}*/


//compare.forEach(colorChangeForCompare);
function colorChangeForCompare() {

    for(let i=0;i<compare.length;i++){

        compare[i].style.color = "sandybrown";
    }

}

function evokeCompareListener() {
    for(let i=0;i<compare.length;i++){

        compare[i].addEventListener("click",compareFunction);
        function compareFunction() {
            let tt = 10 + i ;
            //if (i === 0){
                b3.innerHTML = arr[tt];
            //}
            alert( arr.length + "and "+tt);
            count = tt;
            sldNo.innerText = "Slide "+ count ;
            compare[i].style.color = "gray";//sandybrown
        }
    }
}
evokeCompareListener();