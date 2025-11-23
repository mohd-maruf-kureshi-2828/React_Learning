import './App.css'
import Mycards from './components/Cards'


function App() {
  

  return (
      <div style={{ 
      display: "flex", 
      gap: "20px",
      justifyContent: "center",
      // marginTop: "30px"
    }}>
      <Mycards image="https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        title="Python Programming" 
        text="This Is A Python Course Learn 0 to 100 And Explore More Fields Like Ai Data Science Ext Ext."
        readmore="https://www.python.org/"
        
        
        />

      
       <Mycards image="https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon.png" 
        title="java Programming" 
        text="This Is A Java Course Learn 0 to 100 And Explore More Fields Like DSA Stpirng Web Dev Ext Ext."
        readmore="https://www.java.com/en/"
        
        />


        <Mycards
          image="https://img.freepik.com/premium-photo/javascript-website-3d-icon-isolated-white-background_1108860-2391.jpg"
          title="JavaScript Programming"
          text="This Is A JavaScript Course Learn 0 to 100 And Explore More Fields Like Frontend Web Dev Ext Ext."
          readmore="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />

        <Mycards
          image="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
          title="PHP Programming"
          text="This Is A PHP Course Learn 0 to 100 And Explore More Fields Like Backend Web Dev Ext ."
          readmore="https://www.php.net/" />


      </div>
    
  )
}

export default App;