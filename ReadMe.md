# **Local Heroes - Project Overview**  

## **Description**  
**Local Heroes** is a community-focused volunteering portal that connects individuals in need of assistance with those who have the skills and time to help. The platform enables users to post and respond to tasks such as shopping, cooking, cleaning, DIY projects, or other day-to-day needs.  

The aim is to foster stronger community ties, benefiting both those seeking help and those offering their assistance. The site incorporates playful, comic-inspired design elements to evoke a sense of heroism while maintaining accessibility and approachability.  

**[Local-Heroes Deployment Link](https://local-heroes.netlify.app/)**  

---  

## **Getting Started / Code Installation**  
This is a fully web-based app; no installation is required.  

To explore the code:  
- [Backend GitHub Repository](https://github.com/Archietheowl/local-heroes-backend)  
- [Frontend GitHub Repository](https://github.com/Archietheowl/local-heroes-frontend)  

---  

## **Timeframe & Team**  
**Duration:** 1 week  
**Team Members:**  
- David  
- Iris  
- Adam  

The project focused on delivering an MVP with additional stretch goals. Some of these goals were met during development, with others planned for future iterations.  

---  

## **Technologies Used**  

### **Planning & Documentation:**  
- Figma  
- Trello  
- dbdiagram.io  
- Markdown  

### **Developer Tools:**  
- VSCode  

### **Frontend:**  
- React.js  
- HTML, CSS, JavaScript  

### **Backend:**  
- MongoDB  
- Express.js  
- Node.js  
- Mongoose  

### **Hosting & Storage:**  
- Netlify (Frontend Deployment)  
- Cloudinary (Media Storage)  

---  

## **Project Brief**  
The goal was to build a CRUD application using the MERN stack, incorporating these deliverables:  
- **User Stories**  
- **Wireframes**  
- **RESTful Routes**  
- **Data Architecture**  
- **Full-stack Functionality** with React as the frontend, Express for the backend, and MongoDB as the database.  

---  

## **Planning**  
Planning was a collaborative effort using tools like Trello, Figma, and Slack. The team divided initial tasks, drafted plans individually, then reviewed and refined them together.  

**My contributions included:**  
- Drafting and finalizing the **routing table**, mapping endpoints to user stories.  
- Designing the visual theme of the frontend, inspired by comic book aesthetics to subtly align with the idea of everyday heroes.  

---  

## **Build Process**  
Using Slack for communication and task assignment, we each focused on specific areas:  
- **Jobs API** - My responsibility (backend).  
- **Auth/User API** - Iris.  
- **Helpers API** - David.  

Over time, roles became more fluid, allowing for collaborative problem-solving.  
### My Key Contributions:  
- Implemented the **responsive navigation bar**, including a state-managed hamburger menu:  
```jsx
const NavBar = ({ user, handleSignOut }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navContainer}>
      <img src="/images/header-background.svg" alt="" />
      <NavLink to="/">
        <h1>Local Heroes</h1>
      </NavLink>
      <nav>
        <div 
          className={styles.menu} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? `${styles.open}` : ""}>
          {user ? (
            <>
              <li><NavLink to="/">Dashboard</NavLink></li>
              <li><NavLink to="/jobs">See Jobs</NavLink></li>
              <li><NavLink to="/helpers">See Helpers</NavLink></li>
              <li><NavLink to="" onClick={handleSignOut}>Sign Out</NavLink></li>
            </>
          ) : (
            <>
              <li><NavLink to="/signin">Sign In</NavLink></li>
              <li><NavLink to="/signup">Sign Up</NavLink></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
```  
- Designed and implemented global styling, ensuring a cohesive look and feel.  

---  

## **Challenges**  
1. **React Learning Curve**:  
   Transitioning to React posed initial challenges, particularly in managing component state and props effectively.  

2. **Collaboration Learning Curve**:  
   - Resolving merge conflicts was time-consuming but became smoother as we improved workflows.  
   - Working as a team introduced unexpected delays compared to solo projects, highlighting the importance of efficient communication and task division.  

---  

## **Wins**  
- Delivered a functional MVP within the timeframe.  
- Achieved some stretch goals.  
- Gained valuable experience in collaborative development and React.  

---  

## **Key Learnings**  
1. **Collaboration Skills**: Effective teamwork requires practice and intentional effort.  
2. **Full-stack Integration**: Building seamless interactions between frontend and backend components.  

---  

## **Bugs**  
- **Styling Issues:** Minor inconsistencies after deployment need correction.  

---  

## **Future Improvements**  
1. Introduce a task lifecycle system, enabling:  
   - Offers to be accepted.  
   - Tasks to be marked as completed.  
   - Testimonials and appreciation for helpers.  
2. Implement a **badge system** to reward active community members.  
3. Enable **photo uploads** for job postings.  
4. Develop a **local activity feed** to showcase and encourage community engagement.  