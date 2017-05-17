import { Perimeter } from 'vue-kindergarten';

export default class BasePerimeter extends Perimeter {
  isAdmin() {
    return this.child && this.child.role === 'admin';
  }
}
