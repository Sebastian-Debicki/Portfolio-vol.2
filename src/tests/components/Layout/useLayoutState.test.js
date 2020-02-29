import { useLayoutState } from '../../../components/Layout/useLayoutState';
import { renderHook, act } from '@testing-library/react-hooks'

describe('useOpen', () => {
  it('change open state to true when togglerNavHandler was run', () => {
    const { result } = renderHook(useLayoutState);
    act(() => {
      result.current.togglerNavHandler()
    })
    expect(result.current.open).toBe(true)
  })

  it('change open state to false when togglerNavHandler runs two times', () => {
    const { result } = renderHook(useLayoutState);
    act(() => {
      result.current.togglerNavHandler()
    })
    act(() => {
      result.current.togglerNavHandler()
    })
    expect(result.current.open).toBe(false)
  })

  it('change touched state to true when togglerNavHandler was run', () => {
    const { result } = renderHook(useLayoutState);
    act(() => {
      result.current.togglerNavHandler()
    })
    expect(result.current.touched).toBe(true)
  })

  it('change open state to false always when closeNavHandler was run', () => {
    const { result } = renderHook(useLayoutState);
    act(() => {
      result.current.togglerNavHandler()
    })
    act(() => {
      result.current.closeNavHandler()
    })
    expect(result.current.open).toBe(false)
  })
})