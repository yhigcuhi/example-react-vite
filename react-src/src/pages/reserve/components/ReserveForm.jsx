/* import react */
import { useEffect, useRef } from 'react'
/* import hooks */
import { useReserveForm } from '../hooks/useReserveForm'
/* import 部品 */
import {InputLabel, TextInput, InputError, PrimaryButton} from '@/components'

/* 予約フォーム */
export default function ReserveForm({action}) {
    // 予約フォーム管理
    const { fields, errors, handleSubmit, setFocus } = useReserveForm()
    // フォーム処理中 管理
    const processing = useRef(false);

    // 初回 画面表示時の処理
    useEffect(() => {setFocus('name')}, [setFocus]);
    // イベントハンドラー
    // 成功時
    const handleValid = (data, event) => {
        // バブリング
        event.preventDefault();
        event.stopPropagation();

        // 通信中
        if (processing.current) return
        processing.current = true // 処理中へ

        // 呼び出し元の action実行
        action(data);
        processing.current = false // 再度処理可能な状態へ
        console.log("成功", data)
    }
    //　失敗時
    const handleInvalid = (errors) => {
        processing.current = false
        console.log("失敗", errors)
    }
    // 画面描画
    return (
        <form onSubmit={handleSubmit(handleValid, handleInvalid)} className="spacer-y-4">
            {/* 各フォーム */}
            <div>
                {/* 入力フォーム */}
                <InputLabel htmlFor="name" value="お名前(カタカナ)" />
                <TextInput id="name" type="text" {...fields.name} />
                {/* エラー メッセージ表示 */}
                {/* <InputError message={errors.name?.message} className="mt-2" /> TODO:元々はこうs... カスタムしたから ↓ */}
                <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
                {/* 入力フォーム */}
                <InputLabel htmlFor="email" value="メールアドレス" />
                <TextInput id="email" type="email" autoComplete="username" {...fields.email} />
                {/* エラー メッセージ表示 */}
                <InputError message={errors.email} className="mt-2" />
            </div>
            <div>
                {/* 入力フォーム */}
                <InputLabel htmlFor="phone_number" value="電話番号" />
                <TextInput id="phone_number" type="tel" autoComplete="tel" {...fields.phone_number} />
                {/* エラー メッセージ表示 */}
                <InputError message={errors.phone_number} className="mt-2" />
            </div>
            <div>
                {/* 入力フォーム */}
                <InputLabel htmlFor="born_on" value="生年月日" />
                <TextInput id="born_on" type="date" {...fields.born_on} />
                {/* エラー メッセージ表示 */}
                <InputError message={errors.born_on} className="mt-2" />
            </div>
            <div>
                <PrimaryButton disabled={processing.current}>
                    送信
                </PrimaryButton>
            </div>
        </form>
    )
}