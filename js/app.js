if ("ontouchstart" in document.documentElement) { 
    document.querySelector(".hint").innerHTML = "<p>Tap on the left or right to navigate</p>";
}

if ( !window.location.search.match(/print/) ) {
    impress().init();
    $('#printView').addClass('webView');
} else {
	$('#printView').html('Web View');
}

$('#printView').on('click', function() {
	if ($('#printView').hasClass('webView')) {
		window.location.href='?print';
	} else {
		window.location.href="/joshjam";
	}
});
