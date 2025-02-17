console.log("✅ dad_jokes.js loaded!");


document.getElementById("searchButton").addEventListener("click", async function () {
    const searchTerm = document.getElementById("search").value;
    const response = await fetch(`/dad_jokes?term=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();


    console.log('this is starting to execute...')
    console.log("✅ Fetch started, waiting for response...");
    const text = await response.text();
    console.log("✅ Response received:", text);
     

    console.log("API Response:", data); // Check full API response


    const resultsDiv = document.getElementById("jokeResults");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (data.total_jokes > 0) {
        data.results.forEach(joke => {
            const p = document.createElement("p");
            p.textContent = joke.joke;
            resultsDiv.appendChild(p);
        });
    } else {
        resultsDiv.innerHTML = "<p>No jokes found. Try another search!</p>";
    }
});
