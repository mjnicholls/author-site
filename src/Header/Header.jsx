import React from 'react'
import { BoxColorOne, HeaderText, MenuText, SubBox } from './Styles';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const pages = [
      {
        title: "Home",
        link: "/",
      },
        {
          title: "Books",
          link: "/books",
        },
        {
          title: "Nibbles",
          link: "/nibbles"
        }
      ];

      const history = useNavigate();
  
      const handleNavigation = (link) => {
        history(link);
      };
    

  return (
    <BoxColorOne>
      <SubBox pt={6}>
      <HeaderText>
        I am M.J. Nicholls. I write comic novels. I am nothing.
      </HeaderText>
      </SubBox>

      <SubBox pt={4} pb={6}>
        {pages.map((i) => 
            <MenuText pl={4} onClick={() => handleNavigation(i.link)} sx={{ cursor: "pointer" }}>
             ⇝ {i.title}
            </MenuText>
      )}
      </SubBox>
     </BoxColorOne>
  )
}

export default Header