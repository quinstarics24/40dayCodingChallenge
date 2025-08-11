document.getElementById("bookmarkForm").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
    e.preventDefault();

    let siteName = document.getElementById("siteName").value;
    let siteUrl = document.getElementById("siteUrl").value;

    if (!siteName || !siteUrl) {
        alert("Please fill in both fields");
        return;
    }

    let bookmark = { name: siteName, url: siteUrl };

    if (localStorage.getItem("bookmarks") === null) {
        let bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
        let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }

    document.getElementById("bookmarkForm").reset();
    fetchBookmarks();
}

function deleteBookmark(url) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks = bookmarks.filter(bookmark => bookmark.url !== url);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    fetchBookmarks();
}

function fetchBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    let bookmarksList = document.getElementById("bookmarksList");

    bookmarksList.innerHTML = "";

    bookmarks.forEach(bookmark => {
        bookmarksList.innerHTML += `
            <div class="bookmark">
                <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
                <button class="delete" onclick="deleteBookmark('${bookmark.url}')">Delete</button>
            </div>
        `;
    });
}

fetchBookmarks();
