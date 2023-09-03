// 参考:https://github.com/ishiyama0530/react-form-recipes/blob/main/src/pages/advanced/page2/hooks/useUserForm.ts
/* import react-hook-form */
import { useForm } from 'react-hook-form'

// フォーム 初期値
const DEFAULT_VALUES = {
    // 基本情報
    name: '', // お名前(カタカナ)
    email: '', // メールアドレス
    phone_number: '', // 電話番号
    born_on: '', // 生年月日
}

// エラー メッセージを変換するんんだけど いる？？
function resolve(field) { return field?.message ? [field?.message] : undefined }

/**
 * 予約フォームの値管理 hooks (react-hook-form の関心毎を画面側にさせないよう)
 */
export const useReserveForm = () => {
  const {
    register, // フォーム制御の実態
    handleSubmit: handleSubmitOfReactHookForm, // フォームの成功・失敗のハンドラー
    formState: { errors }, // エラー管理
    // その他 react-hook-formの内容 めんどくなった
    ...etc
  } = useForm({
    mode: 'onChange', // 値変更時に 反応しろ
    // resolver: zodResolver(schema), // 独自バリデーション zodとか yupとか
    DEFAULT_VALUES, // フォームの初期値
  })

  /**
   * ハンドリング TODO:共通処理 があればなんか拡張できるよう
   * @param {(data, events) => void} onValid 成功時のハンドラー
   * @param {(error, events) => void} onInvalid 失敗時のハンドラー
   * @returns React Hook formでのハンドリング
   */
  const handleSubmit = (onValid, onInvalid) => handleSubmitOfReactHookForm(onValid, onInvalid)
  
  // export
  return {
    // フィールド定義: react-hook-formの内容
    // TODO:正規表現、メッセージ、枠の選択...
    fields: {
      name: register('name', { required: '入力が必須の項目です。', maxLength: {value: 20, message: '20文字まで'} }), // お名前(カタカナ)
      email: register('email', { required: '入力が必須の項目です。', maxLength: {value: 255, message: '255文字まで'} }), // メールアドレス
      phone_number: register('phone_number', { required: '入力が必須の項目です。', maxLength: {value: 13, message: '13文字まで'} }), // 電話番号
      born_on: register('born_on', { required: '入力が必須の項目です。' }), // 生年月日s
    },
    // エラー一覧 TODO:変換必要??
    errors: {
        name: resolve(errors.name),
        email: resolve(errors.email),
        phone_number: resolve(errors.phone_number),
        born_on: resolve(errors.born_on),
    },
    // ハンドリング
    handleSubmit,
    // その他 react-hook-formの内容 そのまま
    ...etc,
  }
}