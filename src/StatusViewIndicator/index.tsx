import React, { useMemo } from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import styles from './styles';

const StatusViewIndicator: React.FC<{
  storyCount: number;
  viewCount: number;
  windowWidth: number;
  imgUrl?: string;
  activeStrokeColor?: string;
  inActiveStrokeColor?: string;
  children: React.ReactNode;
}> = ({
  storyCount,
  viewCount,
  windowWidth,
  activeStrokeColor,
  inActiveStrokeColor,
  children,
}) => {
  const styleProps = useMemo(
    () => ({
      windowWidth,
    }),
    [windowWidth]
  );

  const R = windowWidth / 5.4;
  const radius = R / 1.705;
  const circumference = 2 * Math.PI * radius;
  const spacing = 10;
  const dashLength = circumference / storyCount - spacing;

  const generateSteps = (step: any) => {
    const stepSize = dashLength;
    const spacingSize = spacing;
    let dasharray = '';

    for (let i = 0; i <= step; i++) {
      dasharray = `${dasharray} ${stepSize}`;

      if (i === step - 1) {
        dasharray = `${dasharray} 1000`;
      } else {
        dasharray = `${dasharray} ${spacingSize}`;
      }
    }
    return dasharray;
  };

  const backgroundDashArr =
    storyCount > 1 ? generateSteps(storyCount) : storyCount;
  const activeDashArr = storyCount > 1 ? generateSteps(viewCount) : viewCount;

  return (
    <View style={styles(styleProps).container} testID="story-bubble">
      <View style={styles(styleProps).viewContainer}>
        <View style={styles(styleProps).childContainer}>{children}</View>
      </View>
      <View
        style={{
          ...styles(styleProps).outlineContainer,
          transform: [{ rotate: '90deg' }], // Rotate the container to make the circle vertical
        }}
      >
        <Svg
          width={'100%'}
          height={'100%'}
          viewBox={`0 0 ${windowWidth / 2.35} ${windowWidth / 4.3}`} // Adjusted viewBox for vertical orientation
          preserveAspectRatio="xMidYMid slice"
          style={styles(styleProps).svg1}
          testID="story-bubble-svg"
        >
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke={activeStrokeColor || '#FB473C'}
            fill="none"
            strokeWidth={3.3}
            strokeDasharray={backgroundDashArr}
            stroke-dashoffset="-2"
            strokeLinecap="round"
          />
          {viewCount > 0 ? (
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke={inActiveStrokeColor || '#CCCCCC'}
              fill="none"
              strokeWidth={3.5}
              strokeDasharray={activeDashArr}
              stroke-dashoffset="-2"
              strokeLinecap="round"
              testID="active-circle"
            />
          ) : (
            <></>
          )}
        </Svg>
      </View>
    </View>
  );
};

export default StatusViewIndicator;
