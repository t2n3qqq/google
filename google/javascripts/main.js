(function(){

  var nav = navigator.userAgent.toLowerCase(),
      search_wrap = document.getElementById('search_wrap'),
      search_input = document.getElementById('search_input');

  (nav.indexOf('msie') != -1)&&(parseInt(nav.split('msie')[1]) < 9) ? document.attachEvent('onclick', toggle, false) : document.addEventListener('click', toggle, false);
  
  window.onresize = resizeContainers; 
  function resizeContainers(){
    var page_container = document.getElementById('main'),
        apps_container = document.getElementById('apps_dropdown');
    if(window.innerHeight < 487 && page_container.style.height !== "487px"){
      page_container.style.height = "487px";
    };

    if(window.innerHeight < 600 ){
      apps_container.style.height =  (window.innerHeight - 100) + "px";
      apps_container.style.overflowY = "scroll";
    }
    else if(apps_container.style.overflowY === "scroll"){
      apps_container.style.overflowY = "hidden";
    }
  }
  resizeContainers();

  function toggle(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
    apps_dropdown = document.getElementById('apps_dropdown'),
    display = apps_dropdown.style.display;
    apps_dropdown.style.display = ((target.id === 'apps') && (display === 'none' || !display))||isParent(target, apps_dropdown) ? "block" : "none"; 
  };

  function isParent(child, parent){
    while(child.parentNode){
      if(child === parent) return true;
      child = child.parentNode;
    }
    return false;
  }

  search_input.addEventListener("focus", function(){
    search_wrap.style.outline = "-webkit-focus-ring-color auto 5px";
  });
  search_input.addEventListener("focusout", function(){
    search_wrap.style.outline = "";
  });
})();