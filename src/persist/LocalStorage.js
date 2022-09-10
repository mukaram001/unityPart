export class LocalStoragePersistanceService {
  getItem(item) {
    const value = window.localStorage.getItem(item);
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  }

  setItem(item, value) {
    window.localStorage.setItem(item, JSON.stringify(value));
  }

  removeItem(item) {
    window.localStorage.removeItem(item);
  }

  getSavedState() {
    return this.getItem(this.STATE_KEY);
  }
}
