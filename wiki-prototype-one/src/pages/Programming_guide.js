import '../styles/Programming_g.css';
import {Link} from "react-router-dom";

function useEffectc()
{
    document.querySelectorAll('.button_list_c').forEach(button =>
    {
       


            button.classList.toggle('button_list_active');

        
    });
}

function useEffectcpp()
{
    document.querySelectorAll('.button_list_cpp').forEach(button =>
    {
       


            button.classList.toggle('button_list_active_cpp');

        
    });
}

function useEffectjava()
{
    document.querySelectorAll('.button_list_java').forEach(button =>
    {
       


            button.classList.toggle('button_list_active_java');

        
    });
}

function useEffecths()
{
    document.querySelectorAll('.button_list_hs').forEach(button =>
    {
       


            button.classList.toggle('button_list_active_hs');

        
    });
}

function useEffectpy()
{
    document.querySelectorAll('.button_list_py').forEach(button =>
    {
       


            button.classList.toggle('button_list_active_py');

        
    });
}

function useEffectpro()
{
    document.querySelectorAll('.button_list_pro').forEach(button =>
    {
       


            button.classList.toggle('button_list_active_pro');

        
    });
}



const Programming_guide = () =>
{
    return (
    <div className='programmingPage'>
        <h3>
            Welcome to Programming Guides!
        </h3>

        <div className ="learn_pro">
            <button onClick={useEffectpro}  className = "button_list_pro" > Prolog reference </button>
                            
                <div className ="pro_list">
                    <p>
                        Prolog is a logical and declarative programming language in which the program statements express the facts 
                        and rules about different problems within a system of formal logic.
                    </p>
                    <img src='images/pro.jpg' alt='some_c' width='200' height='70'></img>
                    <p>Need help with Prolog ... <a href="https://www.tutorialspoint.com/prolog/prolog_introduction.htm">Click Here</a></p>
                                
                </div>
        </div>

        <div className ="learn_c">
            <button onClick={useEffectc}  className = "button_list_c" > C reference </button>
                            
                <div className ="c_list">
                    <p>
                        C is a genral purpose, procedural, imperative programing language.
                        C is the most widely used computer language.
                    </p>
                    <img src='images/c.jpg' alt='some_c' width='350' height='200'></img>
                    <p>Need help with C code ... <a href="https://www.tutorialspoint.com/cprogramming/index.htm">Click Here</a></p>
                                
                </div>
        </div>
        
        <div className ="learn_py">
            <button onClick={useEffectpy}  className = "button_list_py" > Python reference </button>
                            
                <div className ="py_list">
                    <p>
                        Python is a high level and interpreted language, and unlike most high level programming lamguages, 
                        Python does not need a compiler. Python is also one of the official programming languages used by Google.
                    </p>
                    <img src='images/py.jpg' alt='some_py' width='200' height='100'></img>
                    <p>Need help with Python code ... <a href="https://docs.python.org/3/tutorial/index.html">Click Here</a></p>
                                
                </div>
        </div>

        <div className='learn_cpp'>
            <button onClick={useEffectcpp} className='button_list_cpp'>C++ reference</button>

            <div className='cpp_list'>
                <p>C++ is a middle-level programing language, it is very close to hardware which gives you a lot of control
                    in terms of memory management.
                </p>
                <img src='images/cpp.jpg' alt='some_cpp' width='380' height='200'></img>
                <p>Need help with C code ... <a href="https://www.tutorialspoint.com/cplusplus/index.htm">Click Here</a></p>


            </div>

        </div>


        <div className='learn_java'>
            <button onClick={useEffectjava}  className = "button_list_java" > Java reference </button>

             <div className='java_list'>
                <p>Java is very useful for many back-end development projects. Java is also used for desktop 
                    computing, mobile computing, games and numerical computing.
                </p>
                <img src='images/java.jpg' alt='some_java' width='400' height='200'></img>
                <p>Need more help with Java ...<a href='https://www.tutorialspoint.com/java/java_quick_guide.htm'>Click here</a></p>

            </div>
        </div>

        <div className='learn_hs'>
            <button onClick={useEffecths}  className = "button_list_hs" > Haskell reference </button>

             <div className='hs_list'>
                <p>Unlike other languages such as Java, C/C++, Haskell is a purely functional programming language. Haskell
                    is 'LAZY' meaning that Haskell won't execute and calculate things until it is forced to show results.
                </p>
                <img src='images/hs.jpg' alt='some_java' width='200' height='80'></img>
                <p>Need more help with Haskell ...<a href='http://learnyouahaskell.com/introduction'>Click here</a></p>

            </div>
        </div>


        <div>
            <Link to='/guides'>Back to Guide</Link>
        </div>
    </div>

  
    );
}


export default Programming_guide;