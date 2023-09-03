/* import 部品 */
import {Layout} from '@/layouts'
import {ReserveForm} from './components'

/**
 * 予約画面
 */
export default function Reserve() {
    /**
     * 通信実行 TODO:なんかs
     */
    const action = (data) => { console.log('予約登録実行', data); }

    // 画面描画
    return (
        <Layout>
            {/* フォーム */}
            <ReserveForm action={action} />
        </Layout>
    )
}