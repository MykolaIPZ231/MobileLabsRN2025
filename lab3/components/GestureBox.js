import React, { useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import {
  TapGestureHandler,
  LongPressGestureHandler,
  PanGestureHandler,
  FlingGestureHandler,
  PinchGestureHandler,
  State,
  Directions,
} from 'react-native-gesture-handler';
import { useGame } from '../context/GameContext';

const GestureBox = () => {
  const { addScore, updateTask } = useGame();
  const [scale] = useState(new Animated.Value(1));
  const [position] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  const doubleTapRef = React.createRef();

  const onSingleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      addScore(1);
      updateTask(1, { count: prev => {
        const newCount = prev + 1;
        if (newCount >= 10) updateTask(1, { completed: true });
        return newCount;
      }});
    }
  };

  const onDoubleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      addScore(2);
      updateTask(2, { count: prev => {
        const newCount = prev + 1;
        if (newCount >= 5) updateTask(2, { completed: true });
        return newCount;
      }});
    }
  };

  const onLongPress = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      addScore(5);
      updateTask(3, { completed: true });
    }
  };

  const onPan = Animated.event(
    [{ nativeEvent: { translationX: position.x, translationY: position.y } }],
    { useNativeDriver: false }
  );
  
  const onPanEnd = () => {
    updateTask(4, { completed: true });
    position.extractOffset();
  };

  const onFling = ({ nativeEvent }, direction) => {
    if (nativeEvent.state === State.ACTIVE) {
      addScore(10);
      if (direction === 'right') updateTask(5, { completed: true });
      if (direction === 'left') updateTask(6, { completed: true });
    }
  };

  const onPinch = Animated.event(
    [{ nativeEvent: { scale } }],
    { useNativeDriver: false }
  );
  
  const onPinchEnd = () => {
    updateTask(7, { completed: true });
    Animated.spring(scale, { toValue: 1, useNativeDriver: false }).start();
  };

  return (
    <PinchGestureHandler
      onGestureEvent={onPinch}
      onHandlerStateChange={onPinchEnd}
    >
      <Animated.View>
        <PanGestureHandler
          onGestureEvent={onPan}
          onEnded={onPanEnd}
        >
          <Animated.View style={[styles.boxWrapper, position.getLayout()]}>
            <LongPressGestureHandler
              onHandlerStateChange={onLongPress}
              minDurationMs={800}
            >
              <FlingGestureHandler
                direction={Directions.RIGHT}
                onHandlerStateChange={(e) => onFling(e, 'right')}
              >
                <FlingGestureHandler
                  direction={Directions.LEFT}
                  onHandlerStateChange={(e) => onFling(e, 'left')}
                >
                  <TapGestureHandler
                    onHandlerStateChange={onSingleTap}
                    waitFor={doubleTapRef}
                  >
                    <TapGestureHandler
                      ref={doubleTapRef}
                      onHandlerStateChange={onDoubleTap}
                      numberOfTaps={2}
                    >
                      <Animated.View style={[
                        styles.box,
                        { transform: [{ scale }] }
                      ]} />
                    </TapGestureHandler>
                  </TapGestureHandler>
                </FlingGestureHandler>
              </FlingGestureHandler>
            </LongPressGestureHandler>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </PinchGestureHandler>
  );
};

const styles = StyleSheet.create({
  boxWrapper: {
    width: 100,
    height: 100,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#3498db',
    borderRadius: 10,
  },
});

export default GestureBox;