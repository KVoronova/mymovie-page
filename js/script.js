//Main Slied
function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');
}

function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("/img/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}

function changeTrailer(trl) {
    const video = document.querySelector('video');
    video.scr = `("/assets/${trl}")`;

}


//Filter Movie
document.addEventListener('DOMContentLoaded', () => {
    const genreSelect = document.querySelector('select.genre');
    const yearSelect = document.querySelector('select.year');
    const movieCards = document.querySelectorAll('.movie-card');


    function filterMovies() {
        const selectedGenre = genreSelect.value;
        const selectedYear = yearSelect.value;

        movieCards.forEach(card => {
            const cardGenre = card.querySelector('.genre').textContent.toLowerCase();
            const cardYear = card.querySelector('.year').textContent;

            const genreMatch = selectedGenre === 'all genre' || cardGenre === selectedGenre;
            const yearMatch = selectedYear === 'all years' || checkYearRange(cardYear, selectedYear);

            card.style.display = genreMatch && yearMatch ? 'block' : 'none';
        });
    }


    function checkYearRange(cardYear, selectedYear) {
        if (selectedYear.includes('-')) {
            const [startYear, endYear] = selectedYear.split('-').map(Number);
            return cardYear >= startYear && cardYear <= endYear;
        } else {
            return cardYear === selectedYear;
        }
    }


    genreSelect.addEventListener('change', filterMovies);
    yearSelect.addEventListener('change', filterMovies);
});
