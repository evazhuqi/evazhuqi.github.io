window.onload = function () {
  $(".navbar-toggle").click(function(){
    if ($(".navbar-collapse").hasClass("collapse")) {
      $(".navbar-collapse").removeClass("collapse");
    } else {
      $(".navbar-collapse").addClass("collapse");
    }
  })

  function hideAll() {
    if (!$(".navbar-collapse").hasClass("collapse")) {
      $(".navbar-collapse").addClass("collapse");
    }
    window.scrollTo(0, 0);
    $("#info").hide();
    $("#intro").hide();
    $("#education").hide();
    $("#experience").hide();
    $("#service").hide();
    $("#personal").hide();
  }

  hideAll();
  $("#info").show();
  $("#intro").show();

  $("#home-button").click(function(){
    hideAll();
    $("#info").show();
    $("#intro").show();
  })

  $("#background-button").click(function(){
    hideAll();
    $("#education").show();
    $("#experience").show();
  })


  $("#service-button").click(function(){
    hideAll();
    $("#service").show();
  })

  $("#others-button").click(function(){
    hideAll();
    $("#personal").show();
  })


  document.getElementById("intro-text").innerHTML += introText;
 
  let eduText = "";
  for (let i=0; i<educations.length; i++) {
    console.assert(educations[i].length == 3);
    eduText += "<h4>" + educations[i][0] + " <sup>" + educations[i][1] + "</sup></h4>";
    for (let j=0; j<educations[i][2].length; j++) {
      eduText += "<p>" + educations[i][2][j] + "</p>";
    }
  }
  document.getElementById("intro-text").innerHTML += "<h3>Education</h3>"
  document.getElementById("intro-text").innerHTML += eduText;
  document.getElementById("education").innerHTML += eduText;

  let expText = "";
  for (let i=0; i<experiences.length; i++) {
	if (typeof experiences[i] === 'string')
	{expText += "<br><li>" + experiences[i] + "</li>";}
	else if (experiences[i].length == 3) {
    let verb = "supervised"; 
    expText += "<h4>" + experiences[i][0] + " <sup>" + experiences[i][1] + "</sup></h4>";
    expText += "<p>" + experiences[i][2];
    expText += "</p>";
  }
  }
  document.getElementById("experience").innerHTML += expText;

  let serviceText = "";
  for (let i=0; i<services.length; i++) {
    serviceText += "<li>" + services[i] + "</li>";
  }
  document.getElementById("service").innerHTML += "<ul>" + serviceText + "</ul>";
  
  let otherText = "";
  for (let i=0; i<others.length; i++) {
    otherText += "<li>" + others[i] + "</li>";
  }
  document.getElementById("personal").innerHTML += "<ul>" + otherText + "</ul>";
  
  
};
