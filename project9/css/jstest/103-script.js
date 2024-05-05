$(document).ready(function () {
  const lang = [
    "ar",
    "az",
    "be",
    "bg",
    "bn",
    "bs",
    "cs",
    "da",
    "de",
    "dz",
    "el",
    "en",
    "en-gb",
    "en-us",
    "es",
    "et",
    "fa",
    "fi",
    "fil",
    "fr",
    "he",
    "hi",
    "hr",
    "hu",
    "hy",
    "id",
    "is",
    "it",
    "ja",
    "ka",
    "kk",
    "km",
    "ko",
    "lb",
    "lo",
    "lt",
    "lv",
    "mk",
    "mn",
    "ms",
    "my",
    "ne",
    "no",
    "pl",
    "pt",
    "ro",
    "ru",
    "sk",
    "sl",
    "sq",
    "sr",
    "sv",
    "sw",
    "th",
    "tk",
    "uk",
    "vi",
    "zh",
  ];
  const buttonTranslate = $("input#btn_translate");
  buttonTranslate.on("click", function () {
    getTranslate();
  });

  $("input#language_code").on("keypress", function (event) {
    if (event.which === 13) getTranslate();
  });

  function getTranslate() {
    const languageCode = $("input#language_code").val();
    $.each(lang, function (index, item) {
      if (languageCode === item) {
        const apiUrl =
          "https://hellosalut.stefanbohacek.dev/?lang=" + languageCode;
        $.get(apiUrl, function (data) {
          const hello = data["hello"];
          $("div#hello").text(hello);
        });
      }
    });
  }
});
