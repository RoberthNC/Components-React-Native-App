import {Modal, Platform, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {useState} from 'react';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <CustomView margin>
      <Title text="Modal" safe />
      <Button text="Open modal" onPress={() => setIsVisible(true)} />
      <Modal visible={isVisible} animationType="slide">
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.1)'}}>
          <View style={{paddingHorizontal: 10}}>
            <Title text="Modal content" safe />
          </View>
          <Button
            text="Close Modal"
            onPress={() => setIsVisible(false)}
            styles={{
              height: Platform.OS === 'android' ? 40 : 60,
            }}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
