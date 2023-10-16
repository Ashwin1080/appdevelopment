package snippet;

public class Snippet {
	/* dashboard.css */
	
	/* Dashboard Container */
	.dashboard-container {
	  display: flex;
	  height: 100vh;
	  background-color: rgb(255, 255, 255);
	  overflow-x: hidden; /* Hide horizontal scrollbar if sidebar is too wide */
	}
	
	
	
	/* Content */
	.content {
	  flex-grow: 1;
	  padding: 20px;
	  transition: margin-left 0.3s; /* Add a smooth transition for content when the sidebar opens/closes */
	}
	
	.navbartitle {
	  font-size: 30px;
	  font-weight: bold;
	}
	
	.Btn {
	  width: 130px;
	  height: 40px;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  background-color: rgb(15, 15, 15);
	  border: none;
	  color: white;
	  font-size: 20px;
	  font-weight: 600;
	  gap: 8px;
	  cursor: pointer;
	  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
	  position: relative;
	  overflow: hidden;
	  transition-duration: 0.3s;
	}
	
	.Btn::before {
	  width: 130px;
	  height: 130px;
	  position: absolute;
	  content: "";
	  background-color: white;
	  border-radius: 50%;
	  left: -100%;
	  top: 0;
	  transition-duration: 0.3s;
	  mix-blend-mode: difference;
	}
	
	.Btn:hover::before {
	  transition-duration: 0.3s;
	  transform: translate(100%, -50%);
	  border-radius: 0;
	}
	
	.Btn:active {
	  transform: translate(5px, 5px);
	  transition-duration: 0.3s;
	}
	
	/* Top Navigation */
	.top-nav {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  margin-top: -250px;
	}
	
	.welcome {
	  margin-top: 100px;
	  margin-bottom: 50px;
	  margin-left: 0px;
	  font-size: 50px;
	  font-weight: bold;
	}
	
	.welcomedesp {
	  font-size: 20px;
	  width: 800px;
	  border: 2px solid #000;
	  padding: 20px;
	  border-radius: 20px;
	  margin-left:230px;
	}
	
	.maincontentdashboard {
	  display: flex;
	  flex-direction: column;
	}
	
	button {
	  background-color: #333;
	  color: white;
	  border: none;
	  cursor: pointer;
	}
	
	button:hover {
	  text-decoration: underline;
	}
	@media (max-width:890px) {
	  .welcomedesp{
	    width:600px;  
	  }
	}
	@media (max-width:680px) {
	  .welcomedesp{
	    width:400px;  
	  }
	}
	@media (max-width:490px) {
	  .welcomedesp{
	    width:300px;  
	  }
	  
	}
}

