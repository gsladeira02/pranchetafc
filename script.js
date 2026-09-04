(() => {
  const cfg = window.PRANCHETA_CONFIG || {};
  const buttons = [
    document.getElementById("downloadButton"),
    document.getElementById("downloadButtonBottom")
  ].filter(Boolean);

  const versionText = document.getElementById("versionText");
  const downloadLabel = document.getElementById("downloadLabel");
  const downloadLabelBottom = document.getElementById("downloadLabelBottom");
  const downloadKicker = document.getElementById("downloadKicker");
  const hashRow = document.getElementById("hashRow");
  const hashText = document.getElementById("hashText");

  if (cfg.version) {
    versionText.textContent = `Versão ${cfg.version}`;
  }

  if (cfg.downloadUrl) {
    buttons.forEach((button) => {
      button.href = cfg.downloadUrl;
      button.classList.remove("is-disabled");
      button.removeAttribute("aria-disabled");
      if (cfg.fileName) button.setAttribute("download", cfg.fileName);
    });
    const label = cfg.version ? `Baixar v${cfg.version}` : "Baixar Prancheta";
    downloadLabel.textContent = label;
    downloadLabelBottom.textContent = label;
    downloadKicker.textContent = cfg.fileName || "DOWNLOAD PARA WINDOWS";
  } else {
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => event.preventDefault());
    });
  }

  if (cfg.sha256) {
    hashText.textContent = cfg.sha256;
    hashRow.hidden = false;
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
