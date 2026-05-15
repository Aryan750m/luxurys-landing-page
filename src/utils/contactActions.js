export function scrollToContact() {
  const section = document.getElementById("contact");

  if (!section) {
    return;
  }

  section.scrollIntoView({ behavior: "smooth", block: "start" });

  window.setTimeout(() => {
    document.getElementById("contact-name")?.focus();
  }, 650);
}
