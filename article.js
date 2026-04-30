const categories = [
  "technology",
  "business",
  "entertainment",
  "marketing",
  "lifestyle"
];

const titles = [
  "Latest Technology Trends",
  "Business Growth Strategy",
  "Modern Entertainment Platform",
  "Digital Media Access",
  "Cloud Infrastructure Update"
];

const paragraphs = [
  "Modern digital platforms continue to evolve rapidly with improved speed and scalability.",
  "Users now expect fast-loading pages, better performance, and secure access.",
  "SEO-friendly article pages improve both user retention and search visibility.",
  "Premium content layouts help websites look more natural and professional.",
  "Modern businesses rely heavily on digital transformation and analytics."
];

const authors = [
  "James Carter",
  "Emily Johnson",
  "Daniel Brooks",
  "Sophia Turner"
];

function randomFrom(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

function slugify(text){
  return text.toLowerCase().replace(/[^a-z0-9]+/g,"-");
}

function randomDate(){
  return new Date(
    Date.now() - Math.random()*10000000000
  ).toLocaleDateString("en-US");
}

function buildContent(){
  let html = "";
  for(let i=0;i<6;i++){
    html += `<p>${randomFrom(paragraphs)}</p>`;
  }
  return html;
}

const articles = Array.from({length:1000}, (_,i)=>({
  title: randomFrom(titles) + " " + (i+1),
  slug: slugify(randomFrom(titles)) + "-" + (i+1),
  metaDescription: "Premium article content with SEO style layout.",
  author: randomFrom(authors),
  publishDate: randomDate(),
  readTime: (Math.floor(Math.random()*5)+3)+" min read",
  category: randomFrom(categories),
  content: buildContent()
}));

function getRandomArticle(){
  return randomFrom(articles);
}
