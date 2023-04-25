import logoVideo from '../../images/logoLoreisVideo.gif'


function MainComponent(){
    return(
        <>
        <div class="bg-black">
        <img src={logoVideo} alt="Logo em vídeo Loreis" style={{ textAlign: "center", padding :"3%" }}  class="mx-auto d-block" />
        </div>
        </>
    )
}

export default MainComponent;