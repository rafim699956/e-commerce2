function coundown(endDate, containerEl) {
    const end = new Date(endDate);

    const _second = 1000;
    const _minute = _second * 60;
    const _hour = _minute * 60;
    const _day = _hour * 24;
    let timer;

    function showRemaining() {
        const now = new Date();
        const distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            return 'EXPIRED!';
        }
        const days = Math.floor(distance / _day);
        const hours = Math.floor((distance % _day) / _hour);
        const minutes = Math.floor((distance % _hour) / _minute);
        const seconds = Math.floor((distance % _minute) / _second);
        const container = document.getElementById(containerEl)

        container.querySelector('.day').innerText = days;
        container.querySelector('.hour').innerText = hours;
        container.querySelector('.minutes').innerText = minutes;
        container.querySelector('.second').innerText = seconds;
        return seconds;
    }

    timer = setInterval(showRemaining, 1000);

    return timer;
}