import React from 'react';
import { Props, CustomizableComponents } from './types';
import {
  Label,
  HiddenCheckbox,
  VisibleCheckbox,
  Description
} from './components';

export const Checkbox: React.FC<Props> = React.forwardRef(
  (
    {
      components = {},
      testId,
      labelTestId,
      visibleTestId,
      className,
      alignItems,
      defaultChecked,
      checked,
      onChange,
      disabled,
      children,
      ...rest
    },
    ref: React.Ref<HTMLInputElement>
  ) => {
    const [isChecked, setIsChecked] = React.useState(
      !!(checked || defaultChecked)
    );

    const [isHovered, setIsHovered] = React.useState(false);

    React.useEffect(() => setIsChecked(!!(checked || defaultChecked)), [
      checked,
      defaultChecked
    ]);

    const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(changeEvent);

      if (checked == null) {
        setIsChecked(changeEvent.target.checked);
      }
    };

    const Components: CustomizableComponents = {
      Label: components.Label ?? Label,
      VisibleCheckbox: components.VisibleCheckbox ?? VisibleCheckbox,
      Description: components.Description ?? Description
    };

    return (
      <Components.Label
        data-testid={labelTestId}
        alignItems={alignItems}
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HiddenCheckbox
          ref={ref}
          data-testid={testId}
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          {...rest}
        />
        <Components.VisibleCheckbox
          data-testid={visibleTestId}
          checked={isChecked}
          isHovered={isHovered}
          disabled={disabled}
        />
        <Components.Description>{children}</Components.Description>
      </Components.Label>
    );
  }
);

Checkbox.defaultProps = {
  testId: 'checkbox-hidden',
  labelTestId: 'checkbox-label',
  visibleTestId: 'checkbox-visible',
  alignItems: 'flex-start',
  components: {}
};
