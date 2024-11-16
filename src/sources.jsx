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
           
        </section>

    )
}