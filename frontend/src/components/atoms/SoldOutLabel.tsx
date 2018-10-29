import styled from 'styled-components'
import { zindexes, colors } from '../../style'

// MEMO
// SoldOutLabelを使う要素に position:relative を設定してください

export default styled.div`
  ::before {
    content: '';
    top: 0;
    left: 0;
    border-bottom: 5em solid transparent;
    border-left: 5em solid ${colors.red};
    position: absolute;
    z-index: ${zindexes.label};
  }
  ::after {
    content: 'SOLD';
    display: block;
    letter-spacing: 2px;
    top: 22px;
    left: 2px;
    transform: rotate(-45deg);
    color: ${colors.white};
    position: absolute;
    z-index: ${zindexes.label + 1};
  }
`
