import AppButton from '~/components/AppButton.vue'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen, fireEvent } from '@testing-library/vue'
import { describe, test, expect, vi } from 'vitest'

// alertのモック
const spyOnAlert = vi.spyOn(window, 'alert').mockImplementation(() => vi.fn())

describe('AppButton', async () => {
  // コンポーネントをレンダリング
  await renderSuspended(AppButton, {
    props: {
      buttonText: 'テキスト',
      alertMessage: 'メッセージ',
    },
  })
  // テキストからボタンを取得する
  const appButton = screen.getByText('テキスト')

  test('Propsを渡すと正常に表示される', async () => {
    expect(appButton.innerText).toBe('テキスト')
  })
  test('ボタンを押下した時にアラートが表示される', async () => {
    await fireEvent.click(appButton)
    expect(spyOnAlert).toHaveBeenCalledOnce()
    expect(spyOnAlert).toHaveBeenCalledWith('メッセージ')
  })
})
