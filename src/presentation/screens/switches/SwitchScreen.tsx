import {useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {CustomSwitch} from '../../components/ui/CustomSwitch';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <CustomView style={{marginTop: 100, paddingHorizontal: 10}}>
      <Card>
        <CustomSwitch
          isOn={isEnabled}
          onChange={() => toggleSwitch()}
          text="On"
        />
      </Card>
    </CustomView>
  );
};
