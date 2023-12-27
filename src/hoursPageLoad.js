
export default function hoursPageLoad() {
    const content = document.getElementById('content');
    const buttondiv = document.getElementById('buttondiv');

    content.innerHTML = `<h1>Hours</h1>
    <img src="../src/hotdog.jpeg" width="500px" height="300px">
    <h2>Classic Dogs</h2>
    <ul>
        <li><strong>Normal Hours:</strong> - 9AM - 7PM Weekdays (Mon-Fri) 10AM - 9PM Weekends (Sat-Sun)</li>
        <li><strong>Holiday Hours</strong> - CLOSED: Christmas (Dec 26), Thanksgiving (Nov 28), Easter (Mar 31)</li>
    </ul>`;
}