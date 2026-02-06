(function(){
  const path = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll(".nav a").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === path) a.classList.add("active");
  });

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

  // Tabs filter for recognitions/awards (on resume.html)
  const awardTabWrap = document.querySelector("[data-award-tabs]");
  if (awardTabWrap){
    const tabs = [...awardTabWrap.querySelectorAll("[data-filter]")];
    const items = [...document.querySelectorAll("[data-award]")];

    const applyAward = (type)=>{
      tabs.forEach(t=>t.classList.toggle("active", t.dataset.filter === type));
      items.forEach(it=>{
        const t = it.dataset.award;
        const show = (type === "all") || (t === type);
        it.style.display = show ? "" : "none";
      });
    };

    tabs.forEach(t=>t.addEventListener("click", ()=>applyAward(t.dataset.filter)));
    applyAward("all");
  }

})();
