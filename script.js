
function geUrl() {
let baseUrl = "https://api.github.com/search/repositories";

let params = {
  q: "language:javascript stars:>100000",
  per page: 20,
  sort: "stars"
};

let queryString = Object.entries(params).map(pair => {
  return `${pair[0]}=${encodeURIComponent(pair[1])};
  }).join("&");

  return `$[baseUrl}?${queryString}`;
  }

  let url = getUrl();
  d3.json(url).then(data=> {
  console.log(data);
  });
