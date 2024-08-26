function performSearch() {
    const query = document.getElementById('search').value;
    console.log(`Searching for: ${query}`);
    // Redirect to Google with the search query (optional)
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}
