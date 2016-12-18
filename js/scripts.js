
var CfAProjects = {};

CfAProjects.projects = [];
CfAProjects.projects_sheet = '1JxjCN4Nf8P8KEdVkvyuAo9fgbkKTC91PP39dC5JvYv0'

/// TABLETOP STUFF
CfAProjects.init = function(){
	Tabletop.init( { key: CfAProjects.projects_sheet,
	                 callback: CfAProjects.loadGoogleSpreadsheetData,
	                 simpleSheet: false } );
}

CfAProjects.loadGoogleSpreadsheetData = function(data, tabletop) {
	console.log("Data Loaded");
	CfAProjects.rawProjects = data.Sheet1.elements;
	var project_template = $("#project-list-item").clone();
	project_template.removeAttr('id');
	$("#project-list-item").remove();

	CfAProjects.rawProjects.map( (project) => {
		var title = project.Title;
		var current = project_template.clone();
		current.find(".project-title").html(title);
		current.find(".project-description").html(project.Description);
		current.find(".project-link").attr("href", project.Link);
		if (project.Image) {
			current.find(".project-image").attr("src", project.Image);
		}
		else {
			current.find(".project-image").remove();
		}
		$("#project-list").append(current);
	});
	$("#project-list-container").fadeIn(500);

}
// END TABLETOP


// On Load, Get the lookup
window.onload = function() { 
	CfAProjects.init(); 
};

