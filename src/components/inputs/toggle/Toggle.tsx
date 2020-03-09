import * as React from 'react';
import { Wrapper, HiddenCheckbox, Slider, Knob } from './components';
import { Props } from './types';

export const Toggle: React.FC<Props> = React.forwardRef(
  (
    { testId, defaultChecked, checked, onChange, className, disabled, ...rest },
    ref: React.Ref<HTMLLabelElement>
  ) => {
    const [isChecked, setIsChecked] = React.useState(
      !!(checked || defaultChecked)
    );

    React.useEffect(() => setIsChecked(!!(checked || defaultChecked)), [
      defaultChecked,
      checked
    ]);

    const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
      const newCheckedValue = changeEvent.target.checked;

      if (checked == null) {
        setIsChecked(newCheckedValue);
      }

      onChange?.(newCheckedValue);
    };

    return (
      <Wrapper ref={ref} data-testid={testId} className={className}>
        <HiddenCheckbox
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          {...rest}
        />
        <Slider checked={isChecked} disabled={disabled}>
          <Knob checked={isChecked} />
        </Slider>
      </Wrapper>
    );
  }
);

Toggle.defaultProps = {
  testId: 'toggle'
};
