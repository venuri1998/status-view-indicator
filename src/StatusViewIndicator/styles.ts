import { StyleSheet } from 'react-native';

type StyleProps = {
  windowWidth: number;
};

const styles = (props: StyleProps) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: props.windowWidth / 5.4,
      height: props.windowWidth / 5.4,
      marginLeft: 0,
    },
    viewContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: props.windowWidth / 6.5,
      height: props.windowWidth / 6.5,
    },
    childContainer: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      opacity: 1,
    },
    outlineContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      width: props.windowWidth / 5.3,
      height: props.windowWidth / 5.3,
    },
    svg1: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
    },
  });
};

export default styles;
