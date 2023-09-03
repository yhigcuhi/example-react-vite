/* import react */
import { forwardRef } from 'react';

/* inputの共通部品化 */
export default forwardRef(function TextInput({ type = 'text', className = '', ...props }, ref) {
    // 画面描画
    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={ref}
        />
    );
});
