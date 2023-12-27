
export default function menuPageLoad() {
    const content = document.getElementById('content');
    const buttondiv = document.getElementById('buttondiv');

    content.innerHTML = `<h1>Menu</h1>
    <img src="../src/hotdog.jpeg" width="500px" height="300px">
    <h2>Classic Dogs</h2>
    <ul>
        <li><strong>The Texan Classic</strong> - A traditional beef hotdog with mustard, ketchup, and onions.</li>
        <li><strong>The Cheesy Champ</strong> - A beef hotdog topped with melted cheddar and a sprinkle of chili flakes.</li>
        <li><strong>The Garden Dog</strong> - A veggie hotdog loaded with fresh lettuce, tomatoes, cucumbers, and avocado spread.</li>
    </ul>

    <h2>Specialty Dogs</h2>
    <ul>
        <li><strong>The Lone Star BBQ</strong> - A beef hotdog smothered in Texas-style BBQ sauce, crispy fried onions, and coleslaw.</li>
        <li><strong>The Spicy Rodeo</strong> - A beef hotdog with jalapeños, pepper jack cheese, and a spicy mayo drizzle.</li>
        <li><strong>The Big Dill</strong> - A beef hotdog with dill pickle relish, mustard, and fresh dill.</li>
    </ul>`;
}