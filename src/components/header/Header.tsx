
import * as S from './style'

import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/rp.jpg'

const Header = () => {
  return (
    <S.Container>
      <Image src={Logo} width={150} height={150} alt='rp'/>
    </S.Container>
  )
}

export default Header
