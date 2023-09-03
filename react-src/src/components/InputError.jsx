/* 入力エラー 共通部品化 */
export default function InputError({ message, className = '', ...props }) {
    // TODO: 複数個に対応しないと...

    return message ? (
        <p {...props} className={'text-sm text-red-600 ' + className}>
            {message}
        </p>
    ) : null;
}
