import { faGithub} from "@fortawesome/free-brands-svg-icons";
import img_workshop1 from "../assets/img_workshop1.png"
import img_workshop2 from "../assets/img_workshop2.png"
import img_workshop3 from "../assets/img_workshop3.png"
import img_workshop4 from "../assets/img_workshop4.png"

export const Data_Project = [
    {
        date: "Jan 2024 - May 2024",
        picture: img_workshop1,
        title: "Workshop Project Portfolio React + Tailwind",
        link: "https://portfolio-tailwind-bay.vercel.app/",
        iconlinks: [
            {type: faGithub, link: "https://github.com/JanoiBJR21/portfolio-react-tailwindcss"},
        ],
        descriptions: [
            "A simple and minimalist portfolio for developers built with React and TailwindCSS, designed to be clean and fast.",
            "Responsive portfolio website is one that is designed to look good on any device, whether it be desktop, tablet or mobile. Creating a responsive portfolio website allows you to showcase your work. and your abilities to employers or clients effectively",
            "On the portfolio website There are details of the work. Includes details about the project, images, and links to existing projects.",
            "There is a contact form so users can get in touch. This may include other contact channels such as email or social media.",
        ],
        techs: [
            ["HTML", "JavaScript", "Tailwind", "React", "FontAwesome"],
        ],
    },
    {
        date: "Feb 2024 - Mar 2024",
        picture: img_workshop3,
        title: "Workshop Project Website Todolist",
        link: "https://project-react-todolist-nu.vercel.app/",
        iconlinks: [
            {type: faGithub, link: "https://github.com/JanoiBJR21/Workshop-project-react-todolist"},
        ],
        descriptions: [
            "A to-do list helps you keep track of all the tasks you need to complete. By listing them out, you can prioritize what needs to be done first and allocate your time accordingly",
            "Writing down tasks ensures that you won’t forget important things. It’s easy to overlook tasks when they’re only in your mind, but a to-do list acts as a reliable reminder",
            "With a to-do list, you can allocate time for each task and avoid wasting time on less important activities. It helps streamline your workflow and keeps you focused on what matters most",
            "Tools like Todoist allow teams to organize work together. You can create shared workspaces where team members collaborate on tasks while keeping their personal to-do lists separate. This feature is especially useful for project management and team coordination",
        ],
        techs: [
            ["HTML", "CSS", "JavaScript", "React"],
        ],
    },
    {
        date: "Mar 2024 - Apr 2024",
        picture: img_workshop4,
        title: "Workshop Project Portfolio Website Responsive",
        link: "https://portfolio-website-responsive-phi.vercel.app/",
        iconlinks: [
            {type: faGithub, link: "https://github.com/JanoiBJR21/portfolio-website-responsive"},
        ],
        descriptions: [
            "A responsive portfolio website is one that is designed to look good on any device, whether it be desktop, tablet or mobile. Creating a responsive portfolio website allows you to showcase your work. and your abilities to employers or clients effectively",
            "On the portfolio website There are details of the work. Includes details about the project, images, and links to existing projects.",
            "There is a contact form so users can get in touch. This may include other contact channels such as email or social media.",
        ],
        techs: [
            ["HTML", "CSS", "JavaScript", "React", "FontAwesome"],
        ],
    },
    {
        date: "Apr 2024 - May 2024",
        picture: img_workshop2,
        title: "Workshop Project Shopping Cart API",
        link: "https://project-react-shopping-app-api.vercel.app/",
        iconlinks: [
            {type: faGithub, link: "https://github.com/JanoiDev/Project-React-Shopping-App-API"},
        ],
        descriptions: [
            "The Project Shopping Cart API website is part of creating an online application for shopping.",
            "Add to Cart: Adding products to cart is the process in which users select the products they want to purchase and add them to their cart. This usually involves clicking the “Add to Cart” or similar button on the product page.",
            "Remove from Cart: Removing products from cart is a process in which the user selects the products that they want to remove from the cart. This usually involves clicking the “Remove” or similar button on the cart page.",
            "Calculate Total Order: When the user adds or deletes items in the cart. The system must calculate the total amount of all products in the cart. This includes the price of each product. and show the total to the user."
        ],
        techs: [
            ["HTML", "CSS", "JavaScript", "React", "API"],
        ],
    }
]