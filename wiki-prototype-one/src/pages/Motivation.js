import {Link} from "react-router-dom";



const Motivation = () =>
{
    return(
        <div>
        <h3>
            Welcome to Motivation Guides!
        </h3>

        <div className = "motivation_container">
            <div className="row">
                <div className="video">
                    <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ks-_Mh1QhMc" title="YouTube video player" frameborder="0" allow="accelerometer; 
                    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>


                </div>

                <div className= "video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RcGyVTAoXEU" title="YouTube video player" frameborder="0" allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4vAjCs0nkx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                 clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>

                <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2FMBSblpcrc" title="YouTube video player" frameborder="0" allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/n3kNlFMXslo" title="YouTube video player" frameborder="0" allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VSceuiPBpxY" title="YouTube video player" frameborder="0" allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>

            </div>

        </div>
        <div>
            <Link to='/guides'>Back to Guide</Link>
        </div>
    </div>  
    );
}

export default Motivation;