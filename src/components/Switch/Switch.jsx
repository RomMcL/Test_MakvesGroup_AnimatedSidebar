import { cssSwitch } from '../../styles/switch.css'

const { SwitchContainer, HiddenCheckbox, Slider, Labels } = cssSwitch;


const Switch = ({ theme, active, isOpened }) => {
      
    return (
      <SwitchContainer $isOpened={isOpened}>
        <HiddenCheckbox
          checked={theme !== 'light'}
          onChange={active}
        />
        <Slider />
        <Labels          
          data-on={isOpened ? 'Dark' : '🌘'}
          data-off={isOpened ? 'Light' : '☀️'}
        />
      </SwitchContainer>

    );
};

export default Switch;