export function resize(
  textArea: HTMLTextAreaElement | null,
  fitContents?: boolean
) {
  if (!textArea || !fitContents) {
    return;
  }

  textArea.style.height = 'auto';
  textArea.style.height = `${textArea.scrollHeight}px`;
}
