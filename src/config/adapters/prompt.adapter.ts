import prompt from 'react-native-prompt-android';

interface Props {
  title: string;
  subtitle?: string;
  buttons: PromptButton[];
  promptType?: 'default' | 'plain-text' | 'secure-text';
  placeholder?: string;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'default' | 'destructive';
}

export const showPrompt = ({
  title,
  subtitle,
  buttons,
  promptType = 'default',
  placeholder,
  defaultValue,
}: Props) => {
  prompt(title, subtitle, buttons, {
    type: promptType,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeholder,
  });
};
