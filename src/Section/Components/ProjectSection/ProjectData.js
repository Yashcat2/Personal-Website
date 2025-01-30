import PanelPro from '../../../Assests/ProjectAssests/panelPro.png'
import tourly from '../../../Assests/ProjectAssests/t2.png';
import ml from '../../../Assests/ProjectAssests/ml.jpg';
import ff from '../../../Assests/ProjectAssests/ff.png';
import pms from '../../../Assests/ProjectAssests/pms.png';
import lps from '../../../Assests/ProjectAssests/lps.png';
import gui from '../../../Assests/ProjectAssests/gui.png';

const projects = [
    {
      title: 'Power Drafter Panel Pro ',
      description:
        'Developed a comprehensive web application for designing electrical panel board layouts with a user friendly interface. The platform enables users to create precise, customizable designs while automating the  generation of detailed quotations. Integrated advanced tools to streamline the design process and enhance productivity, making it an ideal solution for engineers and designers in the electrical industry.  ',
      imageSrc:
        PanelPro,
      techUsed: ['Next.js', 'React.js',' Figma',' Tailwind CSS', 'Convex',' HTML',' React DnD',' CSS', 'TypeScript'],
      date: 'June 2024 - Present',
    },
    {
      title: 'Laptop Store Ecommerce Website ',
      description:
        'eveloped and deployed a fully functional eCommerce website for a laptop store using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform provides a seamless shopping experience for users and an advanced admin dashboard for managing the store.',
      imageSrc:
          lps,
      techUsed: ['React.js', 'Node.js', 'Express.js', ' MongoDB',' Stripe',' Razorpay',' Vercel.'],
      date: 'April 2024 - Present',
    },
    {
      title: 'Patient Management System (.NET Desktop Application)',
      description:
        'eveloped a comprehensive desktop application for managing patient records, appointments, and essential medical data. This project demonstrated proficiency in the .NET Framework and database integration, showcasing a deep understanding of building secure and reliable applications.',
      imageSrc:
          pms ,
      techUsed: [' C#',' .NET Framework',' MSSQLLocalDB ','XML ','CRUD'],
      date: 'Oct 2023 - Jan 2024',
    },
    {
      title: 'Tourly- Smart Tour Guide Mobile App',
      description:
        'Streamlined student record management with CRUD operations, built using WPF and C#.',
      imageSrc:
        tourly,
      techUsed: ['Flutter', 'Dart', 'Firebase'],
      date: 'Apr 2023 - May 2023',
    },
    {
      title: 'Credit Card Fraud Detection Using Machine Learning ',
      description:
        'Developed a machine learning model to detect fraudulent credit card transactions using Python and Google Colab. Addressed class imbalance with under sampling and evaluated Logistic Regression and Random Forest models. Achieved effective fraud detection, ensuring high precision and recall. ',
      imageSrc:
        ml,
      techUsed: ['Python', 'Scikit learn', 'Pandas', 'Numpy',' Matplotlib and Seaborn','Google Colab'],
      date: 'Dec 2024',
    },
    
    {
      title: 'Finance Tracker (Front End) ',
      description:
        'Financial tracker is a comprehensive web application developed for our 3rd-semester project on the GUIModule. This project challenged us to implement our GUI module learnings effectively. From HTML structuring to JavaScript functionality and CSS styling, every aspect has been carefully curated to provide users with a powerful yet easy-to-use financial tool. ',
      imageSrc:
          gui,
      techUsed: [' HTML',' CSS',' JavaScript' ],
      date: 'Sept 2023 ',
    },
    {
      title: 'Flappy Bird game',
      description:
        'Developed a replica of the popular Flappy Bird game using Java, showcasing strong programming skills and creativity.',
      imageSrc:
            ff ,
      techUsed: ['Java', 'OOP',],
      date: 'Nov 2024',
    },
  ];
  
  export default projects;
  