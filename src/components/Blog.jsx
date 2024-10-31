import React from "react";
import { useDispatch } from "react-redux";
import { setInfo } from "../ReactRedux-Toolkit";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePage = (post) => {
    dispatch(setInfo(post));
    navigate("/BlogPage");
  };
  const posts = [
    {key:1,
      title: "My Journey in Coding",
      date: "October 29, 2024",
      content: `
        Ever since I was 10 years old, I dreamt of developing an app for playing games, inspired by my love for Subway Surfers. This childhood passion led me to pursue a Bachelor of Computer Applications (BCA), allowing me to focus more on coding concepts rather than the theoretical lessons of engineering.
  
        My coding journey began with learning C, my first programming language. I was amazed by the concepts of Data Structures and Algorithms (DSA); it felt like a brain puzzle for me. This intrigue motivated me to dive deeper into DSA using C++. As I solved coding questions on the Coding Ninjas platform, I was proud to achieve a rank of 2000 among fellow coders.
  
        With this newfound knowledge, I shifted my focus toward exploring web development. I started with HTML, followed by CSS, and then JavaScript, which took me around four to six months to grasp. After that, I dedicated a month to learning ReactJS to create functional projects. The thrill of building something tangible and seeing my ideas come to life was exhilarating!
  
        This journey has shaped who I am today, and I continue to strive for growth in the coding world. I’m excited about the endless possibilities that lie ahead as I keep learning and developing new skills.
      `,
      image: `https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    },
    {key:2,
      title: "Top 5 Free Resources for Learning JavaScript",
      date: "October 22, 2024",

      content: `
      When I started my journey in web development, I was so confused and overwhelmed that I found myself searching for resources all over the internet. Some of them were irrelevant, making it difficult to focus. It took me a month to learn JavaScript, but I want to share the best resources I came across while exploring this language!
      
      1) Hitesh Chaudhary
      Hitesh Chaudhary's JavaScript playlist on YouTube is a goldmine for anyone starting out. The playlist, JavaScript Playlist, covers all the important topics in JavaScript. After watching this playlist, you'll feel confident in mastering the art of JavaScript.
      
      2) Mozilla Developer Network (MDN)
      MDN is the best website for JavaScript documentation. The explanations provided are simple and clear, making it easy to understand. Check out their JavaScript documentation here. It helped me immensely when I was learning and continues to be a valuable resource for my projects.
      
      3) freeCodeCamp
      freeCodeCamp is dedicated to beginners and is a perfect guide for those new to programming. It offers comprehensive resources for diving into JavaScript, making it one of the most widely used websites for learning.
      
      4) CodeWithHarry
      While many YouTubers teach JavaScript as instructors, CodeWithHarry has a friendly teaching style. He explains tough concepts, such as recursion and graphs, in an approachable way. As an IIT graduate, he knows his stuff! Check him out here.
      
      5) ChatGPT
      Yes, ChatGPT! This AI has been a game-changer for me. It helps clarify doubts and explains concepts in a way that feels like having a personal tutor. Just use clear commands, and you'll find it incredibly helpful in your learning journey.
      `,

      image: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png`
    ,links:[
      {link:`https://youtu.be/2md4HQNRqJA?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD`,name:"Hitesh chaudhary"},
      {link:`https://developer.mozilla.org/en-US/docs/Web/JavaScript`,name:"Mozilla Developer Network (MDN)"},
      {link:`https://www.freecodecamp.org/news/full-javascript-course-for-beginners/`,name:"freeCodeCamp"},
      {link:`https://youtu.be/ER9SspLe4Hg?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR`,name:"CodeWithHarry"},
      {link:`https://openai.com/chat`,name:"ChatGPT"}
    ]
    },
    {key:3,
      title:
        "The Importance of Clean Code: Best Practices for Writing Maintainable Code",
      date: "October 15, 2024",
      content: `The Best Practices for Writing Maintainable Code":

The Importance of Clean Code: Best Practices for Writing Maintainable Code
When I first started coding, I was so focused on getting things to work that I often overlooked how my code looked. But as I progressed in my journey, I realized that writing clean, maintainable code is just as important as the functionality itself. Let me share why clean code matters and some of the best practices I’ve picked up along the way.

Why Clean Code Matters
Readability: Clean code is easy to read. It’s like a well-written book—when you revisit it later, you want to understand it without scratching your head. If someone else (or even future you) has to dive into your code weeks or months later, it should make sense right away.

Maintainability: When code is well-organized and follows consistent naming conventions, it becomes a breeze to maintain. You don’t want to be stuck trying to remember what you did six months ago! Clean code allows for quick updates or bug fixes without the risk of breaking something else.

Collaboration: In a team setting, clean code is crucial. Everyone should be able to jump into each other’s work without feeling lost. It makes collaboration smoother and helps prevent misunderstandings when integrating different parts of a project.

Scalability: As projects grow, messy code can become a nightmare. Clean code practices lay a solid foundation that allows your codebase to expand without needing a major overhaul later on.

Debugging and Testing: Clean code typically has well-defined functions and classes, which makes it easier to test individual components. Trust me, this can save you a lot of headaches down the road!

Best Practices for Writing Clean Code
Use Meaningful Names: Choose names for your variables and functions that clearly describe what they do. Instead of naming a variable x, go for something like userAge—it’s all about context.

Keep Functions Small: Aim to have your functions do one thing and do it well. If a function is getting too long, consider breaking it down into smaller pieces. This not only makes it easier to read but also simplifies testing.

Comment Wisely: While it’s great if your code can speak for itself, sometimes you’ll need to explain your thought process. Just be careful not to over-comment. Use comments to clarify complex logic or important decisions.

Consistent Formatting: Maintain a consistent style with your code—indentations, spacing, and line breaks. Tools like Prettier or ESLint can help enforce these styles and keep things tidy.

Avoid Duplication: If you find yourself writing the same code in multiple places, that’s a red flag. Aim to encapsulate that behavior in a function or module. It’ll save you time and reduce the chance of bugs.

Refactor Regularly: Don’t be afraid to revisit and improve your code. Refactoring is an ongoing process that helps eliminate technical debt. Regular code reviews can also highlight areas that need a little TLC.

Embrace Best Practices: Familiarize yourself with design patterns and principles, like DRY (Don’t Repeat Yourself) and SOLID. They’re there for a reason and can significantly enhance your coding practices.

Write Tests: Automated tests are your best friend. They ensure that your code behaves as expected and help you catch issues before they become bigger problems. Plus, they document the intended behavior of your code.

`,
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5nEWR2CAuDFMAbO4dsl7921vtQoaIG0Fa00VyEsKU0s8_Y2SWvRGqls9BL23jSRyPAs&usqp=CAU`,
    },
    {key:4,
      title: "Understanding Redux: A Beginner’s Guide",
      date: "October 8, 2024",
      content: `Understanding Redux: A Beginner’s Guide
Hey there! If you’ve started working with React, you’ve probably heard of Redux. At first, it can sound a bit intimidating, like one of those complex math equations you dread facing. But trust me, once you grasp the basics, it becomes a powerful tool in your web development toolkit.

What is Redux?
At its essence, Redux is a state management library for JavaScript applications. It helps you manage the state of your application in a more organized way, especially when things start getting complicated. Think of it as a centralized store that holds all the data your app needs. Instead of passing data down through layers of components, Redux allows you to access your state from anywhere in your app.

Why Should You Use Redux?
Centralized Control: In larger applications, managing state across multiple components can feel like trying to herd cats. Redux centralizes your app’s state, making it easier to keep track of everything.

Predictable State Changes: With Redux, you have a clear flow of how state changes occur. This predictability makes debugging easier because you can track down exactly what changed and why.

Powerful Debugging Tools: Redux comes with amazing debugging tools, like Redux DevTools. You can see the history of every action that’s dispatched, which is super helpful when something goes wrong.

Simpler Testing: Since Redux relies on pure functions for reducers, it’s much easier to write tests. You can test each part of your state management independently to ensure it behaves as expected.

Core Concepts of Redux
Store: The store is the heart of Redux. It holds the entire state of your application. You can think of it as the single source of truth for your app's data.

Actions: Actions are plain objects that describe what happened in your app. Each action has a type that indicates the action being performed, and it can also carry additional data.

Reducers: Reducers are functions that take the current state and an action as arguments, returning a new state. They determine how the state changes in response to an action.

Dispatch: To change the state, you need to dispatch actions. This sends actions to the store, which then triggers the reducers to update the state.

Selectors: Selectors are functions that help you extract specific pieces of state from the store. They allow you to keep your components focused and clean.

Getting Started with Redux
Ready to jump in? Here’s how you can start using Redux in your React project:

Install Redux and React-Redux to add the library to your project.

Create a Redux Store where all your application state will be stored.

Wrap Your Application with the Provider component to give your app access to the Redux store.

Connect Your Components to the Redux store, allowing them to access state and dispatch actions.

conclusion:-
Getting started with Redux might seem daunting at first, but once you understand its core concepts, it can significantly enhance your ability to manage state in your applications. By centralizing state management, making state changes predictable, and utilizing the debugging tools available, you’ll find that Redux not only improves your development process but also leads to more maintainable and scalable applications.

As you dive deeper into Redux, you'll likely discover new techniques and best practices that will further enhance your coding skills`,
      image: `https://dropinblog.net/34256781/files/featured/learn-redux-toolkit-for-state-management-in-react.png`,
    },
  ];

 

  return (
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <p className="blog-description">
        Welcome to my blog where I share insights, tutorials, and experiences
        from my journey in tech.
      </p>
      <div className="posts">
        {posts.map((post, index) => (
          <div
            className="post"
            key={index}
            onClick={() => {
              handlePage(post);
            }}
          >
            <h5 className="post-title">{post.title}</h5>
            <p className="post-date">{post.date}</p>
            <img
              src={post.image}
              class="rounded float-end"
              alt="..."
              style={{ height: "100px" }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
