// redirect people to rocket.chat/docs if they try and browse the github pages version
if (location.hostname == 'goalify.chat' && location.href.indexOf('?noredirect') == -1) {
	location = 'https://docs.goalify.chat' + location.pathname;
}

function scroll_toc(path) {
	// remove base either '/docs/' or '/'
	var base = '/docs/';
	var currentPath = path;

	path = path.indexOf(base) == 0 ? path.substring(base.length) : path.substring(1);

	if (path[path.length - 1] == '/') {
		path = path.substring(0, path.length - 1);
	}

	path = '.' + path.split('/').join(' .');

	$('.active').removeClass('active');

	if (path.length > 1) {
		pathA = path.replace('.vi ', '');
		$(pathA).addClass('active');

		while (pathA.lastIndexOf(' ') > -1) {
			pathA = pathA.substring(0, pathA.lastIndexOf(' '));
			$(pathA).addClass('active');
		}
	}

	var currentLang = currentPath.split('/')[1];
	var enLang = document.querySelector('.js-en-lang');
	var viLang = document.querySelector('.js-vi-lang');
	var allLink = document.querySelectorAll('.toc a[href]');

	if (currentLang === 'vi') {
		enLang.style.display = 'block';
		enLang.href = currentPath.replace('/vi', '');
		viLang.style.display = 'none';

		allLink.forEach(link => {
			if (!link.pathname.includes('vi')) {
				link.href = link.origin + '/vi' + link.pathname;
			}
		});
	} else {
		viLang.style.display = 'block';
		viLang.href = '/vi' + currentPath;
		enLang.style.display = 'none';
	}
}

$(document).ready(function() {
	scroll_toc(window.location.pathname);

	var app = new senna.App();

	if (location.hostname == 'goalify.chat' || location.hostname == 'docs.goalify.chat') {
		app.setBasePath('/docs/');
	} else {
		app.setBasePath('/');
	}

	app.addSurfaces('content');
	app.addRoutes(new senna.Route(/.*/, senna.HtmlScreen));

	app.on('startNavigate', function(event) {
		scroll_toc(event.path);
	});

	app.on('endNavigate', function(event) {
		var hash = event.path.indexOf('#');

		if (hash !== -1) {
			location.hash = path.substr(hash);
		} else {
			$('#content').scrollTop(0);
		}
	});
});
