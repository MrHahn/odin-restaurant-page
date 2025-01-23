const wrapper = document.querySelector('#content');

export const buildMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('page-menu');
    menu.innerHTML = `<div class="menu-section">
    <h2>Appetizers</h2>
    <ul>
      <li class="menu-item"><strong>Calamari Fritti</strong> - Lightly battered and fried calamari with marinara sauce (12.99)</li>
      <li class="menu-item"><strong>Mussels Marinara</strong> - Steamed mussels in a rich marinara sauce with garlic bread (10.99)</li>
      <li class="menu-item"><strong>Shrimp Cocktail</strong> - Jumbo shrimp served with cocktail sauce and lemon (14.99)</li>
      <li class="menu-item"><strong>Oysters Rockefeller</strong> - Baked oysters topped with spinach, bacon, and hollandaise sauce (16.99)</li>
      <li class="menu-item"><strong>Lobster Bisque</strong> - Creamy lobster bisque with a touch of sherry (11.99)</li>
    </ul>
  </div>

  <div class="menu-section">
    <h2>Entrees</h2>
    <ul>
      <li class="menu-item"><strong>Grilled Salmon</strong> - Grilled salmon fillet with a lemon-herb glaze and seasonal vegetables (24.99)</li>
      <li class="menu-item"><strong>Seafood Paella</strong> - A classic Spanish dish with shrimp, mussels, clams, and chorizo (28.99)</li>
      <li class="menu-item"><strong>Lobster Roll</strong> - Chilled lobster meat on a toasted roll with lettuce and mayo (26.99)</li>
      <li class="menu-item"><strong>Fried Fish & Chips</strong> - Crispy battered cod with french fries and tartar sauce (19.99)</li>
      <li class="menu-item"><strong>Shrimp Scampi</strong> - Sautéed shrimp in garlic butter with white wine and lemon (22.99)</li>
    </ul>
  </div>`;
    wrapper.appendChild(menu);
}