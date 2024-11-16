export default function Sources(){
    return(
        <section className="video-section p-5">
            <h3 className="Desc text-center">Some Sources to get you started</h3>
            <br />

            <div className="flex flex-row p-3 justify-center items-center gap-10">
                <div className="video-wrapper">
                    <iframe
                    width="550"
                    height="350"
                    src="https://www.youtube.com/embed/pLnN3ooJcqw"
                    title="YouTube video"
                    frameBorder="0"
                    className="rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
                <div className="video-wrapper">
                    <iframe
                    width="550"
                    height="350"
                    className="rounded-lg"
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