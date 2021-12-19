async function handleSubmit(e) {
    e.preventDefault();

    let formText = document.getElementById('url').value

    if (Client.urlChecker(formText)) {
        console.log("::: Form Submitted :::")

        Client.postData('http://localhost:8081/api', { url: formText })
            .then((res) => {
                document.getElementById("polarity").innerHTML = "Polarity: " + res.score_tag;
                document.getElementById("agreement").innerHTML = "Agreement: " + res.agreement;
                document.getElementById("subjectivity").innerHTML = "Subjectivity: " + res.subjectivity;
                document.getElementById("confidence").innerHTML = "Confidence: " + res.confidence;
                document.getElementById("irony").innerHTML = "Irony: " + res.irony;

            })


    } else {
        alert('Please enter a valid URL!')
    }
};



export { handleSubmit }




