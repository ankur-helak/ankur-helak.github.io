document.addEventListener('DOMContentLoaded', function() {
    if (typeof marked === 'undefined') {
        console.error('Marked.js is not loaded.');
        return;
    }

    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const blogPostsSection = document.getElementById('blog-posts');

            posts.forEach(post => {
                fetch(post.file)
                    .then(response => response.text())
                    .then(content => {
                        const postElement = document.createElement('article');
                        postElement.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md');

                        postElement.innerHTML = `
                            <h2 class="text-2xl font-bold mb-2">${post.title}</h2>
                            <p class="text-sm text-gray-500 mb-4">${post.date}</p>
                            <div>${marked(content)}</div>
                        `;

                        blogPostsSection.appendChild(postElement);
                    })
                    .catch(error => {
                        console.error('Error fetching the post:', error);
                    });
            });
        })
        .catch(error => {
            console.error('Error loading posts:', error);
        });
});