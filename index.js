function includes(base, checkedvalue) {
  if (Array.isArray(base)) {
    for (let i = 0; i < base.length; i++) {
      if (base[i] === checkedvalue) {
        return true;
      }
    }
  } else if (typeof base === "object" && base !== null) {
    for (let keys in base) {
      if (base[keys] === checkedvalue) {
        return true;
      }
    }
  } else {
    return base === checkedvalue;
  }
  return false;
}
