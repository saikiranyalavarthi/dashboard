
function showContent(contentId) {

  var contentSections = document.getElementsByClassName("content-section");
  for (var i = 0; i < contentSections.length; i++) {
    contentSections[i].style.display = "none";
  }

  
  var selectedContent = document.getElementById(contentId);
  selectedContent.style.display = "block";
}
