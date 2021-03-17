function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
   var formText = document.getElementById('url')
    
    if(Client.checkForURL(formText))
    console.log("::: Form Submitted :::")

    postData('http://localhost:8060/api', {url: formText})

    .then(function(res) {
        document.getElementById('polarity').innerHTML = 'Polarität: ' +polarityChecker(res.score_tag);
        document.getElementById('agreement').innerHTML = `Übereinstimmung: ${res.agreement}`;
        document.getElementById('subjectivity').innerHTML = `Subjektivität: ${res.subjectivity}`;
        document.getElementById('confidence').innerHTML = `Vertrauen: ${res.confidence}`;
        document.getElementById('irony').innerHTML = `Ironie: ${res.irony}`;        
        })
    };
const postData = async (url = "", data = {}) => {
    console.log('Analysiere: ', data);
    const response = await fetch(url, {
        method: 'Post',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',   
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Daten sind da:', newData)
        return newData;
      } catch (error) {
          console.log('error', error);
      }
};
// ApPI Response Ausgabe https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response
const polarityChecker = (score) => {
    let display;
    switch (score) {
        case 'P+':
            display = 'Himmlisch :D';
            break;
        case 'P':
            display = 'positiv';
            break;
        case 'NEW':
            display = 'neutral';
            break;
        case 'N':
            display = 'sehr negativ :(';
            break;
        case 'NONE':
            display = 'kein Gefühl';
    }
    return display.toUpperCase();

}

export { handleSubmit }
export { polarityChecker }
