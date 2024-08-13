document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = [
        {
            title: "Day 1: Introduction to Tailwind CSS",
            date: "August 13, 2024",
            file: "posts/day1.md"
        },
        {
            title: "Day 2: Setting Up GitHub Pages",
            date: "August 14, 2024",
            file: "posts/day2.md"
        }
        // Add more posts here
    ];

    const blogPostsSection = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
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
});