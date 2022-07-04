import './Appheader.css';

function Appheader() {
    return (
        <nav id="mainNavbar" class="navbar navbar-dark navbar-expand-md py-0 fixed-top">
            <a href="#" class="navbar-brand">PASSION</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navLinks">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Animes</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Movies</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Games</a>
                    </li>

                </ul>
            </div>
        </nav>

    );
}

export default Appheader