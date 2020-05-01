import PropTypes from 'prop-types';
import SignOutBtn from '../../molecules/SignOutBtn/SignOutBtn';
import { title } from '../../../config';
import * as sc from './Header.style';

const Header = (props) => {
  return (
    <sc.Header>
      <sc.TitleHeader>{props.ideaId ? props.ideaId : title}</sc.TitleHeader>

      <SignOutBtn />

      <sc.Bottom>{props.children}</sc.Bottom>
    </sc.Header>
  );
};

Header.propTypes = {
  children: PropTypes.element,
  ideaId: PropTypes.string,
};

export default React.memo(Header);
