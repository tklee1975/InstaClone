import { branch as BaobabBranch } from 'baobab-react/higher-order';
import ReactMixin from 'react-mixin';


/**
 * Branch 'account.profile' to 'accountProfile'
 * @param  {String} branch
 * @return {String}
 */
function makeNameFromBranch(branch) {
  var chunks = branch.split('.');
  var name = chunks.splice(0, 1);
  for (let chunk of chunks) {
    name += chunk.charAt(0).toUpperCase() + chunk.slice(1);
  }

  return name;
}


/**
 * Subscribe component to list of BaobabBranches
 * Ex.:
 *   @SubscribedTo('account', 'company.current')
 *   class SetComponent extends Component {}
 *
 * In component's props was created: this.props.account and this.props.company_current
 */
global.SubscribedTo = (...branches) => {
  let cursors = {};
  let cursorNames = []; // use it to show in ReactConsole

  for (const branch of branches) {
    cursors[makeNameFromBranch(branch)] = branch.split('.');
    cursorNames.push(`.${branch}`);
  }

  return (Component) => {
    let branched = BaobabBranch(Component, { cursors });

    branched.displayName = `${Component.name}👂🌲${cursorNames.join(' & ')}`;
    return branched;
  };
};


/**
 * Apply mixins to class
 * @param  {...Object} mixins List of objects
 * @return {Function}
 */
global.AppliedMixins = (...mixins) => {
  return (Component) => {
    for (const Mixin of mixins) {
      Component = ReactMixin.onClass(Component, Mixin);
    }
    return Component;
  };
};
