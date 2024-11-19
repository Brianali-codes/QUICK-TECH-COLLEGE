import './App.css'


export default function Sources(){
    return(
        <section className="video-section p-5">
            <h3 className="Desc text-center">Some Sources to get you started</h3>
            <br />
            <p className='Desc'>Begin your learning journey with our curated videos designed to introduce you to the world of computers. The first video covers the fundamentals of computer basics, including how hardware and software work together to perform everyday tasks. The second video focuses on mastering essential computer packages, offering practical guidance on tools like Microsoft Office to boost your productivity and professional skills. These resources provide the perfect starting point for building your tech expertise.</p>
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
                <p className='Desc'>At Quick-Tech College, we pledge to support you along the way. help you Keep exploring, learning, and remember – the future is yours to shape!</p>
            </div>
           
        </section>

    )
}