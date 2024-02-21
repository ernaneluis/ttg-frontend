export const copyToClipboard = (text: undefined | string | number) => {
  if (!text) return;
  const content = String(text);
  if (navigator?.clipboard) {
    return navigator.clipboard.writeText(content);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = content;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    return Promise.resolve();
  }
};

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
