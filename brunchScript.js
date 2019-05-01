//alert();
let slider = document.getElementById("b2");
let sld1,sld2,sld3,sld0;
arr = [sld1,sld2,sld3];
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
          <p>
          You really can’t go wrong these days with build tools as long as you consider the 
          anticipated scope, size, and technology requirements of your projects. Grunt has 
          the largest ecosystem and most flexibility, Gulp has the best performance, and Brunch 
          provides the easiest setup and great out-of-the-box performance. At CodeCombat, we’re 
          very satisfied with Brunch, but can’t wait to see what the future holds in terms of 
          new and improved build tools.
          </p>
       `;
slider.innerHTML = sld0;
arr = [sld0,sld1,sld2,sld3];
let ff = document.getElementById("btnF");
ff.addEventListener("click",forward);
function forward() {
    if (count === arr.length-1){
        count = -1;
    }
    count++;
    console.log(count);
    slider.innerHTML = arr[count];
}

function createSlideShow(){

}