function hideProjects() {
	$("#projects").hide();
	$("#bio").show();
	$("#headline").show();
	scroll(0,0);
}

function showProjects() {
	$("#projects").show();
	$("#bio").hide();
	$("#headline").hide();
	scroll(0,0);
}

$(function() {       
    
    hideProjects();
})