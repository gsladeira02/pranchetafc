(() => {
  const cfg = window.PRANCHETA_CONFIG || {};
  const buttons = [
    document.getElementById("downloadButton"),
    document.getElementById("downloadButtonBottom")
  ].filter(Boolean);

  const hashRow = document.getElementById("hashRow");
  const hashText = document.getElementById("hashText");

  if (cfg.downloadUrl) {
    buttons.forEach((button) => {
      button.href = cfg.downloadUrl;
      button.classList.remove("is-disabled");
      button.removeAttribute("aria-disabled");
    });
  }

  if (cfg.sha256 && hashRow && hashText) {
    hashText.textContent = cfg.sha256;
    hashRow.hidden = false;
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
