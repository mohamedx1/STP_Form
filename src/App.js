import Timeline from "./Timeline";
import logo from "../src/assets/LOGO.png";

const App = () => {
  const goals = [
    {
      id: 1,
      title: "UI&UX Design of website",
      description:
        "Gain a solid understanding of React components, state management, and hooks. Build small projects to reinforce learning.",
      date: "from 1 feb to 30 feb",
    },
    {
      id: 2,
      title: "Sessions React",
      description:
        "Create a showcase of projects and skills using React and Tailwind CSS. Include interactive elements and responsive design.",
      date: "from 1 feb to 14 feb",
    },
    {
      id: 3,
      title: "Front-End of website",
      description:
        "Identify and contribute to React-based open source projects. Aim for at least 3 meaningful contributions.",
      date: "from 14 feb to 30 mar",
    },
    {
      id: 4,
      title: "Back-End of website",
      description:
        "Study and implement advanced concepts like render props, higher-order components, and custom hooks.",
      date: "from 1 march to 30 march",
    },
    {
      id: 5,
      title: "Sessions juniors",
      description:
        "Develop a complex web application using React for frontend and a suitable backend technology. Implement authentication and database integration.",
      date: "from 1 feb to 6 feb",
    },

    {
      id: 6,
      title: "Support for Project Juniors",
      description:
        "Develop a complex web application using React for frontend and a suitable backend technology. Implement authentication and database integration.",
      date: "from 6 feb to 21 feb",
    },
  ];

  return (
    <div className='min-h-screen bg-primary py-12 px-4 sm:px-6 lg:px-8 relative'>
      <div className='w-24 absolute top-5'>
        <img src={logo} alt='logo' className='w-full' />
      </div>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-12 text-secondary'>
          Software Section Timeline
        </h1>
        <Timeline goals={goals} />
      </div>
    </div>
  );
};

export default App;
