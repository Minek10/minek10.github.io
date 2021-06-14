const AVAILABLE_LANGUAGES = ['fr', 'en'];
let currentLanguage = 'fr';

const setLabels = (language = 'fr') => {
  if (AVAILABLE_LANGUAGES.includes(language)) {
    const httpRequest = new XMLHttpRequest();

    httpRequest.open('GET', `../../labels/${language}.json`, true);
    httpRequest.send();

    httpRequest.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        const labels = JSON.parse(this.response);

        Object.keys(labels).forEach(labelKey => {
          const element = document.getElementById(labelKey);
          if (element) element.innerText = labels[labelKey];
        });
      }
    });
  }
};
