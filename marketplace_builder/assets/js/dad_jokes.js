console.log("✅ dad_jokes.js loaded! CHECK");

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchButton").addEventListener("click", async function () {
        const searchTerm = document.getElementById("search").value;
        console.log("🔍 Search initiated with term:", searchTerm);
        try {
            console.log("4. START: Frontend Request");
            const searchTerm = document.getElementById("search").value;
            console.log("4a. Search term:", searchTerm);
            
            const response = await fetch(`/dad_jokes?term=${encodeURIComponent(searchTerm)}`);
            console.log("4b. Response status:", response.status);
            console.log("4c. Response headers:", Object.fromEntries([...response.headers]));
            
            const text = await response.text();
            console.log("4d. Raw response text:", text);
            
            const data = JSON.parse(text);
            console.log("4e. Parsed JSON:", data);
            console.log("4. END: Frontend Request");
        } catch (error) {
            console.error("4f. ERROR:", error);
        }
    });
});
