(function(){
  // nav active state
  const path = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll(".nav a").forEach(a=>{
    const href = a.getAttribute("href");
    if(!href) return;
    if(href === path) a.classList.add("active");
  });

  // Publication filters (on research.html)
  const filterWrap = document.querySelector("[data-pub-filters]");
  if(filterWrap){
    const chips = [...filterWrap.querySelectorAll("[data-filter]")];
    const pubs = [...document.querySelectorAll("[data-pub]")];

    const apply = (type)=>{
      chips.forEach(c=>c.classList.toggle("active", c.dataset.filter === type));
      pubs.forEach(p=>{
        const t = p.dataset.pub;
        const show = (type === "all") || (t === type);
        p.style.display = show ? "" : "none";
      });
    };

    chips.forEach(c=>c.addEventListener("click", ()=>apply(c.dataset.filter)));
    apply("all");
  }
})();