const wrapper = document.querySelector('#content');

export const buildContact = () => {
    const contact = document.createElement('div');
    contact.classList.add('page-menu');
    contact.innerHTML = `<div class="contact-info">
      <p><strong>Address:</strong> 123 Ocean View Drive, Coastal City, CA 90210</p>
      <p><strong>Phone:</strong> (555) 555-1234</p>
      <p><strong>Email:</strong> info@thesaltysiren.com</p>
    </div>

    <div class="contact-form">
      <h3>Send us a message</h3>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>`;
    wrapper.appendChild(contact);
}