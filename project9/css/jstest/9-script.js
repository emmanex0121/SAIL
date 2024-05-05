$.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function (data) {
    const hello = data['hello'];
    $('div#hello').text(hello)
});