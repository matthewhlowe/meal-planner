import type { MenuItem } from '../types';

interface MenuProps {
  items: MenuItem[];
}

export default function Menu({ items }: MenuProps) {
    return (
        <>
            {items.map((item, index) => (
                <button key={index} onClick={item.onClick}>
                    {item.text}
                </button>
            ))}
        </>
    );
}