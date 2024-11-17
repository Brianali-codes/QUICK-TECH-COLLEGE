import './App.css'


export default function Sources(){
    return(
        <section className="video-section p-5">
            <h3 className="Desc text-center">Some Sources to get you started</h3>
            <br />

            <div id="VideoContainer">
                <div className="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/pLnN3ooJcqw"
                        title="YouTube video"
                        frameBorder="0"
                        className="Player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-wrapper">
                    <iframe
                    className="Player"
                    src="https://www.youtube.com/embed/fiIaqAYPzFk"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>

            </div>
            <br /><br />
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati accusamus quidem numquam, veritatis, debitis natus ratione itaque sit ipsa aperiam eligendi porro fugiat consequatur recusandae delectus autem amet modi fugit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempore et ex illum nihil quis dolore magni iste, provident enim ullam autem amet? Odio, doloribus iure delectus excepturi esse itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt aut cumque, mollitia temporibus rem dolorem culpa perferendis inventore cum ab, consectetur unde eaque laboriosam aperiam impedit quibusdam eius minus.</p>
            </div>
           
        </section>

    )
}