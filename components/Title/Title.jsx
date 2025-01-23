import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import style from './Style';

const Title = props => {
  return (
    <View>
      <Text style={style.title}>{props.title}</Text>
    </View>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
