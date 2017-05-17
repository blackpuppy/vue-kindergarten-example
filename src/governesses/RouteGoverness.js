import { HeadGoverness } from 'vue-kindergarten';

export default class RouteGoverness extends HeadGoverness {
  constructor({ from, to, next }) {
    super();

    this.next = next;
    this.from = from;
    this.to = to;
  }

  guard(action) {
    this.next(super.isAllowed(action) ? undefined : '/');
  }
}
