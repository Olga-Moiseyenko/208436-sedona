var link = document.querySelector(".btn-find");
var searchForm = document.querySelector(".find-hotel");
var date = searchForm.querySelector("#day-from");
link.addEventListener("click", function(event) {
event.preventDefault();
if (searchForm.classList.contains("search-form-visible")) {
  searchForm.classList.add("search-form-invisible");
  searchForm.classList.remove("search-form-visible");}
else {
  searchForm.classList.add("search-form-visible");
  searchForm.classList.remove("search-form-invisible");
  };
  });
