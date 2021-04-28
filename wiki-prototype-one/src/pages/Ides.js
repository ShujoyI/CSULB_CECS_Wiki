import {Link} from "react-router-dom";
import '../styles/Ides.css';



const Ides = () =>
{
    return(
        <div>
            <body className="card_body" >
                <div className="contaier">

                    <h3 className="heading">
                        Welcome to IDES!
                        <h5>Check out free useful software </h5>
                    </h3>
                    
                    <div className="row">
                        <div className="card">
                           
                            <div className="vs_pic"></div>

                            <div className="card_body">
                                <p>Free IDE, use to develop computer programs, websites, web apps and many school projects</p>
                                <p>Languages supported: C#, C, C++, Visual Basic</p>
                                <a href='https://visualstudio.microsoft.com/vs/community/'>Click here to learn more</a>

                            </div>
                        </div>

                        <div className="card">
                            <div className="vs_code"></div>

                            <div className="card_body">
                                <p>Visual Code is a free source code editor for debugging, syntax highlighting, intelligent code completion,
                                    snippets, code refactoring and embedded git.</p>
                                <a href='https://code.visualstudio.com/'>Click here to learn more</a>

                            </div>
                        </div>

                        <div className="card">
                            <div className="python"></div>

                            <div className="card_body">
                                <p>Python is an interpreted high-level general purpose language.</p>
                                <p>Python emphasizes code readability and great use of indentation.</p>
                                <a href='https://www.python.org/downloads/'>Click here to learn more</a>

                            </div>
                        </div>

                        <div className="card">
                            <div className="eclipse"></div>

                            <div className="card_body">
                                <p>Eclipse is an integrated development envirenment mainly for java programing language.</p>
                                <p>Great for Java developers and it includes Java development tools.</p>
                                <a href='https://www.eclipse.org/downloads/'>Click here to learn more</a>

                            </div>
                        </div>

                        <div className="card">
                            <div className="replit"></div>

                            <div className="card_body">
                                <p>Replit is an online IDE supporting multiple programming languages.</p>
                                <a href='https://replit.com/'>Click here to code now!</a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="virtualb"></div>

                            <div className="card_body">
                                <p>VirtualBox is a free and open source for virtualization.</p>
                                <p>VirtualBox can load multiple OSes under a single host operating system.</p>
                                <a href='https://www.virtualbox.org/wiki/Downloads'>Click here to learn more</a>
                                

                            </div>
                        </div>

                        <div className="card">
                            <div className="online"></div>

                            <div className="card_body">
                                <p>GDB online is an online compiler and debugger tool.</p>
                                <p>support c, c++, python, PHP, Ruby and many more</p>
                                <a href='https://www.onlinegdb.com/'>Click here to code now!</a>

                            </div>
                        </div>

                    </div>
                </div>
            </body>

        <div>
            <h2 className="h2">
                <Link to='/guides'>Back to Guide</Link>
            </h2>
        </div>
    </div>
    );
}


export default Ides;