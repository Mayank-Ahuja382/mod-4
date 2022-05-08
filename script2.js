(function(window) {
    var hellospeak=new Object();
    var speakword="Hello";
    hellospeak.speak=function(name) {
    console.log(speakword + " " +name);
};
    window.hellospeak=hellospeak;

})(window);