import axios from "axios";
async function handleSubmit(e) {
    
    e.preventDefault();
    //Remove previous results.
    document.querySelector('.results').innerHTML =""

  let formText = document.getElementById('url').value
    console.log("::: Form Submitted :::");

    if(!Client.urlChecker(formText)){
        alert('Please enter a valid URL!')
        return;
    }       
        
        
            axios
			.post('http://localhost:8081/api', { url: formText })
            
			.then((res) =>{
               
                document.querySelector('.results').innerHTML =

                ` <div class="data block">
            <h2>Results</h2>                
           
           
            <span>- Polarity: ${res.data.score_tag}</span><br></
            <span>- Agreement: ${res.data.agreement}</span><br></
            <span>- Confidence: ${res.data.confidence}</span><br></
            <span>- Mode: ${res.data.model}</span><br></
            <span>- Irony: ${res.data.irony}</span><br></
            <span>- subjectivity: ${res.data.subjectivity} </span>

        </div> `
    


              })
        .catch((error) => console.log("Error", error))


              
               
              

            

           
            
    }




export { handleSubmit }




