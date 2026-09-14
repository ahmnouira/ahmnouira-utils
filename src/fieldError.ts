export function fieldError(name?: string, errors?: any) {
  if (!name || !errors) return null;

  return errors[name] && errors[name].message ? errors[name].message : null;
}
