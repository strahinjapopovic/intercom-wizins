import type { CheckboxProps } from '../../../types/types.ts';
export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={checked} onChange={onChange} />
            {label}
        </label>
    );
}