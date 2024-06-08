import {Text, TextInput, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {colors, globalStyles} from '../../../config/theme/theme';
import {Card} from '../../components/ui/Card';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

interface Form {
  name: string;
  email: string;
  phone: string;
}

export const TextInputScreen = () => {
  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    phone: '',
  });
  return (
    <ScrollView>
      <CustomView margin>
        <Title text="Text Inputs" safe />
        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder="Full name"
            placeholderTextColor="rgba(0,0,0,0.2)"
            autoCapitalize="words"
            onChangeText={text => setForm(prev => ({...prev, name: text}))}
            value={form.name}
            autoCorrect={false}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Email"
            placeholderTextColor="rgba(0,0,0,0.2)"
            onChangeText={text => setForm(prev => ({...prev, email: text}))}
            value={form.email}
            autoCorrect={false}
            keyboardType="email-address"
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Phone"
            placeholderTextColor="rgba(0,0,0,0.2)"
            onChangeText={text => setForm(prev => ({...prev, phone: text}))}
            value={form.phone}
            autoCorrect={false}
            keyboardType="phone-pad"
          />
        </Card>

        <View style={{height: 10}} />
        <Card>
          <Text style={{color: colors.text}}>
            {JSON.stringify(form, null, 2)}
          </Text>
        </Card>
      </CustomView>
    </ScrollView>
  );
};
