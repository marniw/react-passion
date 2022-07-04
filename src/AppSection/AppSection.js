import './AppSection.css';
import mar from './images/main.jpeg';
import loli from './images/lolli_icon.png';
import anime from './images/spyfamily.jpg';
import movie from './images/toronto.jpg';
import games from './images/valhalla.webp';

function AppSection() {
    return (
        <section class="container-fluid px-0">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div id="headingGroup" class="text-white text-center d-none d-lg-block mt-5">
                        <h1 class="">PASSION<span>/</span>OF<span>/</span>MARWIN</h1>
                        <h1 class="">PASSION<span>/</span>OF<span>/</span>MARWIN</h1>
                        <h1 class="">PASSION<span>/</span>OF<span>/</span>MARWIN</h1>
                        <h1 class="">PASSION<span>/</span>OF<span>/</span>MARWIN</h1>
                        <h1 class="">PASSION<span>/</span>OF<span>/</span>MARWIN</h1>
                        <h1 class="">PASSION<span>/</span>OF<span>/</span>MARWIN</h1>
                        <h1 class="">PASSION<span>/</span>OF<span>/</span>MARWIN</h1>
                    </div>
                </div>
                <div class="col-lg-6"><img class="img-fluid" src={mar} /></div>
            </div>

            <div class="row align-items-center content">
                <div class="col-md-6 order-2 order-md-1">
                    <img src={anime} alt="" class="img-fluid" />
                </div>
                <div class="col-md-6 text-center order-1 order-md-2">
                    <div class="row justify-content-center">
                        <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                            <h2>Anime/s</h2>
                            <img src={loli} alt="" class="d-none d-lg-inline" />
                            <p class="lead">What is Anime? Anime is a style of computer and hand-draw animation that is commonly linked with Japan. It is incredibly popular all around the world, with legions of hardcore fans.
                                Example: Spy × Family is a Japanese manga series written and illustrated by Tatsuya Endo.
                                The story follows a spy who has to "build a family" to execute a mission,
                                not realizing that the girl he adopts as his daughter is a telepath, and the woman he agrees to be in a marriage with is a skilled assassin.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row align-items-center content">
                <div class="col-md-6 text-center">
                    <div class="row justify-content-center">
                        <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                            <h2>Movie/s</h2>
                            <img src={loli} alt="" class="d-none d-lg-inline" />
                            <p class="lead">People go to watch the movies to feel and to escape from reality,
                                movies transport us to a different time, place or situation we may never be able to experience.
                                Example: Man from Toronto the plot follows a New York City screw-up named Teddy who is mistaken for the "Man from Toronto" when the two wind up in the same Airbnb. Antics ensue</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src={movie} alt="" class="img-fluid" />
                </div>
            </div>

            <div class="row align-items-center content">
                <div class="col-md-6 order-2 order-md-1">
                    <img src={games} alt="" class="img-fluid" />
                </div>
                <div class="col-md-6 text-center order-1 order-md-2">
                    <div class="row justify-content-center">
                        <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                            <h2>PASSION OF MARWIN</h2>
                            <img src={loli} alt="" class="d-none d-lg-inline" />
                            <p class="lead">Gaming is really a workout for your mind disguised as fun.
                                Studies have shown that playing video games regularly may increase gray matter in the brain and boost brain connectivity.
                                Example: Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppSection