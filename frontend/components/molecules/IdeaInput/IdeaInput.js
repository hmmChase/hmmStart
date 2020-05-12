import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import debounce from 'lodash.debounce';
import TextArea from '../../atoms/TextArea/TextArea';
import { UPDATE_IDEA } from '../../../graphql/queries';
// import * as sc from './IdeaInput.style';

const IdeaInput = (props) => {
  const [updateIdea] = useMutation(UPDATE_IDEA, { onError(_error) {} });

  const handleChangeideaInput = debounce(
    (e) => updateIdea({ variables: { id: props.id, content: e.target.value } }),
    200
  );

  return (
    <TextArea
      ariaLabel='idea input'
      autoSize={{ minRows: 1, maxRows: 10 }}
      // defaultValue={props.content}
      value={props.content}
      onChange={(e) => {
        e.persist();
        handleChangeideaInput(e);
      }}
    />
  );
};

IdeaInput.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default IdeaInput;
