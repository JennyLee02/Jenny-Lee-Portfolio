import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	reactjs,
	vuejs,
	tailwind,
	nodejs,
	mongodb,
	git,
	UE5,
	docker,
	bestAthletes,
	fitness,
	Uber1,
	Uber2,
	PixelGame,
	threejs,
	reactIcon,
	cpp,
	blender,
  } from "../assets";
  
  export const navLinks = [
	{
	  id: "about",
	  title: "About",
	},
	{
	  id: "Projects",
	  title: "Projects",
	},
	{
	  id: "contact",
	  title: "Contact",
	},
  ];
  
  const services = [
	{
	  title: "Web Development",
	  icon: web,
	},
	{
	  title: "React Native Development",
	  icon: mobile,
	},
	{
	  title: "Game Development",
	  icon: backend,
	},
	{
	  title: "C++ Development",
	  icon: creator,
	},
  ];
  
  const technologies = [
	{
	  name: "HTML 5",
	  icon: html,
	},
	{
	  name: "JavaScript",
	  icon: javascript,
	},
	{
	  name: "TypeScript",
	  icon: typescript,
	},
	{
	  name: "React JS",
	  icon: reactjs,
	},
	{
	  name: "Vue JS",
	  icon: vuejs,
	},
	{
	  name: "Tailwind CSS",
	  icon: tailwind,
	},
	{
	  name: "Node JS",
	  icon: nodejs,
	},
	{
	  name: "MongoDB",
	  icon: mongodb,
	},
	{
	  name: "Three JS",
	  icon: threejs,
	},
	{
	  name: "git",
	  icon: git,
	},
	{
	  name: "UE5",
	  icon: UE5,
	},
	{
	  name: "docker",
	  icon: docker,
	},
	{
		name: "C++",
		icon: cpp,
	},
  ];
  
  const experiences = [
	{
	  title: "Web Developer",
	  company_name: "Best Athletes",
	  icon: bestAthletes,
	  iconBg: "#E6DEDD",
	  date: "February 2023 - April 2023",
	  points: [
		"Developing and maintaining web applications connecting athletes to recruiters for higher education through Vue.js.",
		"Implementing the PDF exporting feature of the recruiting profile containing Chart.js elements using HTML-2-Canvas.",
		"Designing advanced filters for athlete listing by integrating the front-end to DB",
		"Collaborating with the team through the agile and git version control. ",
	  ],
	},
	{
	  title: "Looking For Fall 2023 CO-OP!",
	  company_name: "Web Development / Game Development / Machine Learning",
	  icon: reactIcon,
	  iconBg: "#E6DEDD",
	  date: "September 2023 - April 2024",
	  points: [
		"I am currently looking for a 4-8 month co-op starting September 2023. If you have enjoyed browsing my projects, and are looking for a passionate co-op student, please don't hesitate to reach out!",
	  ],
	},
  ];
  
  const projects = [
	{
	  name: "Fitness Web Application",
	  description:
		"Beautiful web application for gym membership. It provides Sign up feature as well as displaying benefits and available fitness classes. Uses Form Submit for users to send emails to reach out.",
	  tags: [
		{
		  name: "React",
		  color: "blue-text-gradient",
		},
		{
		  name: "TypeScript",
		  color: "green-text-gradient",
		},
		{
		  name: "Framer_Motion",
		  color: "pink-text-gradient",
		},
	  ],
	  image: fitness,
	  source_code_link: "https://github.com/JennyLee02/Fitness-typescript",
	},
	{
	  name: "Uber App",
	  description:
		"Uber App created with React Native featuring Google places autocomplete, directions, and distance matrix API.",
	  tags: [
		{
		  name: "React_Native",
		  color: "blue-text-gradient",
		},
		{
		  name: "TailwindCSS",
		  color: "green-text-gradient",
		},
		{
		  name: "Google_cloud_APIs",
		  color: "pink-text-gradient",
		},
	  ],
	  image: Uber2,
	  source_code_link: "https://github.com/JennyLee02/Uber-Clone",
	},
	{
	  name: "2D Plaformer Game (Ongoing)",
	  description:
		"a 2D pixel graphic platformer game that will take the player into the world full of dragons and monsters. More to come in the future. Stay tuned!",
	  tags: [
		{
		  name: "Unreal_Engine_5",
		  color: "blue-text-gradient",
		},
		{
		  name: "blueprint",
		  color: "green-text-gradient",
		},
		{
		  name: "C++",
		  color: "pink-text-gradient",
		},
	  ],
	  image: PixelGame,
	  source_code_link: "https://github.com/",
	},
  ];
  
  export { services, technologies, experiences, projects };