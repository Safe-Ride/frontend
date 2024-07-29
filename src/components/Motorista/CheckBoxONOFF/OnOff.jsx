import React, { useState } from 'react';
import './OnOff.module.css';

const ToggleSwitch = ({ label, onChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        if (onChange) {
            onChange(!isChecked);
        }
    };

    return (
        <div className="toggle-switch">
            {label && <span>{label}</span>}
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
                className="toggle-switch-checkbox"
                id="toggle-switch"/>
            <label className="toggle-switch-label" htmlFor="toggle-switch">
            <span className="toggle-switch-inner" />
            <span className="toggle-switch-switch" />
        </label>
    </div>
  );
};

export default ToggleSwitch;