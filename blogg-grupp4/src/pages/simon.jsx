
import "../simonStyle.css";


class BlogPost {
    constructor(title, id, content, author) {
        this.title = title;
        this.id = id;
        this.content = content;
        this.author = author;
    }
}


export function SimonSida() {
    const blogPosts = [
    new BlogPost(
        "Getting Started with JavaScript",
        1,
        "JavaScript is a powerful programming language that runs in web browsers and on servers. This guide will help you understand the basics of variables, functions, and objects.",
        "Sarah Chen"
    ),
    new BlogPost(
        "The Future of Web Development",
        2,
        "Web development is constantly evolving with new frameworks, tools, and best practices. Let's explore what's coming next in the world of web technology.",
        "Mike Rodriguez"
    ),
    new BlogPost(
        "CSS Grid vs Flexbox: When to Use Which",
        3,
        "Both CSS Grid and Flexbox are powerful layout systems, but they serve different purposes. Understanding when to use each one will make you a better developer.",
        "Emily Watson"
    ),
    new BlogPost(
        "Building Accessible Web Applications",
        4,
        "Accessibility isn't just nice to have—it's essential. Learn how to create web applications that work for everyone, including users with disabilities.",
        "David Park"
    ),
    new BlogPost(
        "Introduction to Node.js",
        5,
        "Node.js allows you to run JavaScript on the server side. Discover how to build scalable backend applications using this popular runtime environment.",
        "Lisa Thompson"
    ),
    new BlogPost(
        "React Hooks: A Complete Guide",
        6,
        "React Hooks changed the way we write React components. This comprehensive guide covers useState, useEffect, and custom hooks with practical examples.",
        "Alex Kumar"
    ),

];

    return (
    <div>
        
        {blogPosts.map((post) =>

        <section className="post">
            <div className="post-content">
            <p>{post.id}</p>
            <h3>{post.title}</h3>
            <h4>{post.author}</h4>
            <p>{post.content}</p>
            </div>
        </section>
   
        )}
    </div>
    );
}
    
    //formatera css amigastyle, box i mitten 

   