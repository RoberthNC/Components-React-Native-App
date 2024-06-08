import {globalStyles} from '../../../config/theme/theme';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {Alert, View} from 'react-native';
import {showPrompt} from '../../../config/adapters/prompt.adapter';

export const AlertScreen = () => {
  const createTwoButton = () => {
    Alert.alert(
      '2 buttons alert',
      'Select your option',
      [
        {
          text: 'Ok',
          style: 'default',
          onPress: () => {
            console.log('Opt 1');
          },
        },
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            console.log('Opt 2');
          },
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const onShowPrompt = () => {
    showPrompt({
      title: 'Lorem Ipsum',
      subtitle:
        'Ullamco ipsum nostrud consectetur ullamco labore amet laborum pariatur dolore.',
      buttons: [{text: 'Ok', onPress: () => console.log('Ok')}],
      placeholder: 'Placeholder',
    });

    // ! Native Code
    // Alert.prompt(
    //   "What's your email?",
    //   'Enter your email to receive more information',
    //   (value: string) => console.log(value),
    // );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alerts" />
      <Button text="Alert - 2 buttons" onPress={() => createTwoButton()} />
      <View style={{height: 10}} />
      <Button text="Alert - 3 buttons" onPress={() => {}} />
      <View style={{height: 10}} />
      <Button text="Prompt input" onPress={() => onShowPrompt()} />
      <View style={{height: 10}} />
    </CustomView>
  );
};
