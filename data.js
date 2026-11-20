/* Everything here is taken from Huncho's own pages (hunchoprogram.com and its thank-you page).
   Nothing in this demo talks to his real systems: no webhooks, no pixel, no CRM, no calendar. */

window.HX = window.HX || {};

HX.LOGO = "https://assets.cdn.filesafe.space/laPSc9SCqYLMPKvHDDeO/media/6a6eaf5f32db2dd157048de5.png";
HX.VSL = "2q4m8xyilo";            // the sales video on his landing page (Wistia)
HX.DQ_VIDEO = "1p_h9h0Ei2M";      // his free 1 hour "how to get lean" guide (YouTube)
HX.CONFIRM_VIDEO = "fzRJWZzKKVI"; // the 5 minute "confirm your call" video on his thank-you page

/* The wall on his landing page, in his order. [name, Wistia id] */
HX.WALL = [
  ["Shamar","lneq40tdcw"],["Chance","wn33wg3kmy"],["Jonathan Garza","7ale1iiqcq"],["Gabe","eetfema4no"],
  ["Dion","acew0urp42"],["Vega","c9ud5qrjvb"],["Jarim","11t53n3112"],["Felix Calderon","nvmsosewii"],
  ["Gio","z2wuozimku"],["Beaudon","sefhstdzp5"],["Garrett Lewis","80tg7rsbbr"],["Jose Nunez","p25d4keqhm"],
  ["Aaron Lopez","dht7hel0i3"],["Jamon","8y43fmwlub"],["Sandro","1qabx0u0d0"],["Bilal","9i4jaqfdvi"],
  ["Mark Foster","pzca8lof0k"],["Marc Anthony","gpaafhuwey"],
  ["Adam","395oqof66j"],["Ahmed","2d8zubc2c7"],["Alberty","i2g0gm9eg6"],["Alec","00phybusxf"],
  ["Calvin","arw5nitm3l"],["Daniel","yl57mtlgpi"],["Derek","nme3agj0qa"],["Derek Cooley","pzqgttf7fy"],
  ["Douglas","sklcc48458"],["Eric Wu","tjejjflizq"],["Eric Jones","xlxn0qzl1o"],["Felix Hoy","q3p0a8nuxf"],
  ["Gagan","yzpgg3xgwc"],["Gary","h8xe4k7qfu"],["Guillermo","uc6nkn6dkh"],["Isaac","agx3ussq19"],
  ["Jaime","q963qflq70"],["John","gwexf95fb4"],["John Valera","s0smwq6akp"],["Juan","etagb5t1ku"],
  ["Lucas","sqqpd3jzks"],["Mando","ygnql81ibb"],["Michael","7taxq4bc8d"],["Nando","ai8756z9kk"],
  ["Nathan","db431esact"],["Neil","12nbxjp5mi"],["Paul","d3tdtd1ol4"],["Ragu","135j13luyu"],
  ["Robert","w3242soc7y"],["Sam","ztgl43zvtd"],["Shawn","aowaeouqhz"],["Stu","696gi4hk70"],
  ["Ammar","jm4fxckaxh"]
];
HX.WALL_LAST = [["Francisco","cfy03hlfhv"],["Chris Somaru","3sfyqqmusq"]];

/* Case studies with real stats, off his thank-you page. YouTube ids.
   age: null where his page gives none. bf: [start, end] body fat where his page gives it. */
HX.CASES = [
  {name:"Chance",       yt:"HiLfJGpybjQ", age:44, stat:"44 · 30 lbs, no TRT",                tags:["lose","health"], lbs:30},
  {name:"Shamar",       yt:"ZQWzrFcjUWc", age:45, stat:"45 · 269 to 203 lbs",                tags:["lose"], lbs:66},
  {name:"Jonathan",     yt:"5HL1Krqb0Ws", age:null, stat:"25% to 12% body fat",              tags:["lean"], bf:[25,12]},
  {name:"Antonio",      yt:"CEW11g6saYw", age:33, stat:"33 · 45 lbs in 11 weeks",            tags:["lose"], lbs:45},
  {name:"Felix",        yt:"BgdcxyUAKHI", age:48, stat:"48 · Six-pack with 3 spinal fusions",tags:["lean","health"]},
  {name:"Dion",         yt:"TzFfSLxroOg", age:56, stat:"56 · 28% to 14% body fat",           tags:["lean","health"], bf:[28,14]},
  {name:"Marc Anthony", yt:"bHkw4acibec", age:38, stat:"38 · First abs of his life",         tags:["lean","muscle"]},
  {name:"Alec",         yt:"nDNN2XFWsSA", age:22, stat:"22 · 238 to 185 lbs",                tags:["lose"], lbs:53},
  {name:"Gio",          yt:"0bwQ_qW-Hhw", age:41, stat:"41 · 260 lbs to almost 50 down",     tags:["lose"], lbs:50},
  {name:"Nicolas",      yt:"oy_DHu3gEnI", age:null, stat:"Shredded in 60 days",              tags:["lean","muscle"]},
  {name:"Ammar",        yt:"72quc-MJgMU", age:null, stat:"20% to 10% body fat",              tags:["lean","muscle"], bf:[20,10]},
  {name:"Vega",         yt:"Nl32W7l4QQs", age:null, stat:"Truck driver · 60 lbs down",       tags:["lose"], lbs:60},
  {name:"Anthony",      yt:"GRnNF6mmijU", age:41, stat:"41 · 31% to 19% body fat",           tags:["lose","lean"], bf:[31,19]},
  {name:"Nando",        yt:"CejktyKr-QA", age:null, stat:"73 lbs in 6 months",               tags:["lose"], lbs:73},
  {name:"Samir Duncan", yt:"C79FV-UPNSU", age:null, stat:"25 lbs in 88 days",                tags:["lose"], lbs:25},
  {name:"Derek",        yt:"ZmJtC1DwfNs", age:null, stat:"Skinny fat to shredded in 90 days",tags:["muscle","lean"]},
  {name:"Robert",       yt:"a0YNhAfKYqk", age:51, stat:"51 · 254 to 220 lbs",                tags:["lose","health"], lbs:34},
  {name:"Cisco",        yt:"FXnXh5nA8ys", age:29, stat:"29 · 186 to 152 lbs",                tags:["lose","lean"], lbs:34},
  {name:"Felix",        yt:"y3v5PyyO7E0", age:null, stat:"30% to 12% body fat",              tags:["lean"], bf:[30,12]}
];

/* The applicant's answers map to a goal tag and an age band. */
HX.goalTag = function(goalText){
  var g = (goalText || "").toLowerCase();
  if (g.indexOf("abs") > -1) return "lean";
  if (g.indexOf("lose weight") > -1) return "lose";
  if (g.indexOf("health") > -1) return "health";
  if (g.indexOf("muscle") > -1) return "muscle";
  return "lean";
};
HX.ageMid = function(ageText){
  return ({"18-21":20,"21-29":26,"30-40":35,"40+":48})[ageText] || 35;
};

/* Pick the client this man will see himself in: same goal first, then the closest age. */
HX.matchCase = function(goalText, age){
  var tag = HX.goalTag(goalText);
  var best = null, bestScore = -1e9;
  HX.CASES.forEach(function(c){
    var s = 0;
    if (c.tags[0] === tag) s += 60; else if (c.tags.indexOf(tag) > -1) s += 35;
    if (c.age != null) s += 40 - Math.min(40, Math.abs(c.age - age) * 3);
    else s += 8;
    if (s > bestScore){ bestScore = s; best = c; }
  });
  return best;
};

/* Second-best, so the follow-up can show a different man than the first text. */
HX.matchCase2 = function(goalText, age, not){
  var tag = HX.goalTag(goalText), list = HX.CASES.filter(function(c){ return c !== not && c.name !== not.name; });
  list.sort(function(a,b){
    function sc(c){ var s=0; if (c.tags.indexOf(tag)>-1) s+=40; if (c.age!=null) s+=40-Math.min(40,Math.abs(c.age-age)*3); else s+=8; return s; }
    return sc(b)-sc(a);
  });
  return list[0];
};

/* Every time in the demo is US Eastern, his time zone, wherever the demo is opened from. */
HX.TZ = "America/New_York";
HX.etDate = function(y, m, d, h, min){
  var guess = Date.UTC(y, m, d, h, min);
  var asET = new Date(new Date(guess).toLocaleString("en-US", {timeZone:HX.TZ}));
  var asUTC = new Date(new Date(guess).toLocaleString("en-US", {timeZone:"UTC"}));
  return new Date(guess + (asUTC - asET));
};
HX.etParts = function(t){
  var p = {}; new Intl.DateTimeFormat("en-US", {timeZone:HX.TZ, year:"numeric", month:"numeric", day:"numeric"}).formatToParts(new Date(t)).forEach(function(x){ p[x.type] = +x.value; });
  return {y:p.year, m:p.month - 1, d:p.day};
};
HX.etTime = function(t){ return new Date(t).toLocaleTimeString("en-US", {timeZone:HX.TZ, hour:"numeric", minute:"2-digit"}); };

HX.first = function(full){ return ((full || "").trim().split(/\s+/)[0] || "bro"); };
HX.ytThumb = function(id){ return "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg"; };

/* "Demo build for Huncho" tag on every page. Inside the Machine the Machine's own top bar carries it,
   so the copy of his site shown there does not get a second one. */
(function(){
  function addTag(){
    if (window.parent !== window) return;
    if (document.body.hasAttribute("data-notag")) return;
    var t = document.createElement("div");
    t.className = "hx-demo-tag";
    t.innerHTML = '<i></i>Demo build for Huncho';
    var css = document.createElement("style");
    css.textContent = ".hx-demo-tag{position:fixed;left:12px;bottom:12px;z-index:9999;display:flex;align-items:center;gap:7px;padding:6px 11px;border-radius:999px;background:rgba(8,8,8,.86);border:1px solid rgba(255,255,255,.14);color:rgba(255,255,255,.82);font:600 11.5px Inter,Arial,sans-serif;letter-spacing:.02em;backdrop-filter:blur(8px);pointer-events:none}.hx-demo-tag i{width:7px;height:7px;border-radius:50%;background:#CC1B1B;display:block}";
    document.head.appendChild(css); document.body.appendChild(t);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addTag); else addTag();
})();

/* The page and the machine talk over one channel, so the machine lights up as the form is filled. */
HX.bus = (function(){
  var ch = null;
  try { ch = new BroadcastChannel("huncho-machine"); } catch(e) {}
  return {
    send: function(type, data){
      var msg = {type:type, data:data || {}, at:Date.now()};
      try { if (ch) ch.postMessage(msg); } catch(e) {}
      try { if (window.parent && window.parent !== window) window.parent.postMessage({hx:msg}, "*"); } catch(e) {}
    },
    on: function(fn){
      if (ch) ch.onmessage = function(e){ fn(e.data); };
      window.addEventListener("message", function(e){ if (e.data && e.data.hx) fn(e.data.hx); });
    }
  };
})();
