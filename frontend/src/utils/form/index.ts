export const validateFormEventTarget = (
  eventTarget: EventTarget,
): {
  formData: FormData;
  form: HTMLFormElement;
} => {
  let form = eventTarget instanceof HTMLFormElement ? eventTarget : null;
  form =
    form ??
    (eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement
      ? eventTarget.form
      : null);
  if (!form) {
    throw new Error('Could not find form element');
  }

  return {
    formData: new FormData(form),
    form,
  };
};

export const validateFormElement = (
  el: Element | RadioNodeList | null,
): HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | false => {
  return (
    (el instanceof HTMLInputElement ||
      el instanceof HTMLTextAreaElement ||
      el instanceof HTMLSelectElement) &&
    el
  );
};
