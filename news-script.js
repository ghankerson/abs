	document.addEventListener("DOMContentLoaded", function() { 
  var imglink = document.querySelector('.header-display-desktop .header-title-logo a');
  var mobileImglink = document.querySelector('.header-display-mobile .header-title-logo a')
  var lnks = [imglink, mobileImglink];
  var imgSrc = "//images.squarespace-cdn.com/content/v1/626d3a53496e6707a6e79662/0a2aa120-e023-4725-b7c7-866d97462f96/news-logo-purple.png"
  lnks.forEach(lnk => {
    lnk.setAttribute("href", "/news");
    lnk.children[0].setAttribute("src", imgSrc);
    lnk.children[0].src =  imgSrc;
  })

  var mobileItems = document.querySelectorAll(".header-menu-nav-list .header-menu-nav-item");	
  var mobileMother = document.querySelectorAll('nav.header-menu-nav-list')[0];
  var mobileClass =  "header-menu-nav-item";
  redoMenu(mobileItems, mobileMother.children[0].children[0], mobileClass);


  var desktopItems = document.querySelectorAll(".header-nav-list .header-nav-item");	
  var desktopMother = document.querySelectorAll('nav.header-nav-list')[0];
  var desktopClass =  "header-nav-item";
  redoMenu(desktopItems, desktopMother, desktopClass);


  function redoMenu(items, mother, cssClass) {
    items.forEach(itm => itm.remove());

    const newItems = [
      { href: '/news' , txt: 'Al Bustan News' },
      { href: '/' , txt: 'Al Bustan Home' },
      { href: '/donate-1' , txt: 'Donate' }
    ];

    newItems.forEach(itm => {
      const newItem = document.createElement("div");
      newItem.className = cssClass;

      const anchor = document.createElement("a");
      anchor.innerText = itm.txt
      anchor.setAttribute('href', itm.href);

      newItem.appendChild(anchor);
      mother.appendChild(newItem);
    })
  }
});
