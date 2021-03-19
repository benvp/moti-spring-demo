import { View as MotiView } from 'moti';
import React from 'react';
import { Pressable } from 'react-native';

const ScaleButton = ({ children, scaleTo = 0.9, ...props }) => {
  return (
    <Pressable {...props}>
      {({ pressed }) => <MotiView animate={{ scale: pressed ? scaleTo : 1 }}>{children}</MotiView>}
    </Pressable>
  );
};

export default ScaleButton;
