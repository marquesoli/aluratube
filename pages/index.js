import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../components/CCSReset";
import Menu from "../components/Menu";
import { StyledTimeline } from "../components/Timeline";

function HomePage() {
    const styleHomepage = { 
        // backgroundColor: "red"
     };

    // console.log(config.playlists);

    return (
        <>
        <CSSReset/>
        <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
            <Menu/>
            <Header />
            <Timeline playlists={config.playlists}>
                Conteudo
                </Timeline>
        </div>
        </>
    )
}

export default HomePage


// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }


const StyledHeader = styled.div`
  img {
    width: 80px;
    heigth: 80px;
    border-radius:50%;
}

.user-info{
    margin-top:50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px ;

}
`;

function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner"/> */}

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>

        </StyledHeader>
    )
}


function Timeline(props) {
    console.log("Dentro do componente", props.playlists);
    const playlistsNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            {playlistsNames.map((playlistsNames) => {
                const videos = props.playlists[playlistsNames];
                console.log(playlistsNames);
                console.log(videos);

                return (
                    <section>
                        <h2>{playlistsNames}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}

                        </div>
                    </section>
                )

            })}

        </StyledTimeline>
    )
}
