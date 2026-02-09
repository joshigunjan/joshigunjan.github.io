(function(){
  // Highlight active nav link
  const path = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll(".nav a").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === path) a.classList.add("active");
  });

  // Publications filters (research.html)
  const filterWrap = document.querySelector("[data-pub-filters]");
  if(filterWrap){
    const chips = [...filterWrap.querySelectorAll("[data-filter]")];
    // IMPORTANT: only publication cards, not any other element that might have data-pub
    const pubs = [...document.querySelectorAll(".pub[data-pub]")];

    const apply = (type)=>{
      type = (type || "all").toLowerCase().trim();

      chips.forEach(c=>{
        const f = (c.dataset.filter || "").toLowerCase().trim();
        c.classList.toggle("active", f === type);
      });

      pubs.forEach(p=>{
        const raw = (p.getAttribute("data-pub") || "").toLowerCase().trim();
        // supports "journal dataset" or "journal,dataset" or extra spaces
        const tags = raw.split(/[\s,]+/).filter(Boolean);
        const show = (type === "all") || tags.includes(type);
        p.style.display = show ? "" : "none";
      });
    };

    chips.forEach(c=>c.addEventListener("click", ()=>apply(c.dataset.filter)));
    apply("all");
  }

  // Tabs filter for recognitions/awards (resume.html)
  const awardTabWrap = document.querySelector("[data-award-tabs]");
  if (awardTabWrap){
    const tabs = [...awardTabWrap.querySelectorAll("[data-filter]")];
    const items = [...document.querySelectorAll("[data-award]")];

    const applyAward = (type)=>{
      type = (type || "all").toLowerCase().trim();

      tabs.forEach(t=>{
        const f = (t.dataset.filter || "").toLowerCase().trim();
        t.classList.toggle("active", f === type);
      });

      items.forEach(it=>{
        const raw = (it.getAttribute("data-award") || "").toLowerCase().trim();
        const tags = raw.split(/[\s,]+/).filter(Boolean);
        const show = (type === "all") || tags.includes(type);
        it.style.display = show ? "" : "none";
      });
    };

    tabs.forEach(t=>t.addEventListener("click", ()=>applyAward(t.dataset.filter)));
    applyAward("all");
  }

})();
