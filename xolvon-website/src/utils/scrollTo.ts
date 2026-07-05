/**
 * Smoothly scrolls to an element by its ID.
 * 
 * @param id The ID of the element to scroll to (without the #)
 * @param offset Optional offset in pixels to scroll above or below the element (default 0)
 */
export const scrollTo = (id: string, offset = 0) => {
  const element = document.getElementById(id);
  if (element) {
    if (offset) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
