import Link from 'next/link';
import * as Styled from './styles';
import { FormEvent, useState } from 'react';

import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close } from '@styled-icons/material-rounded/Close';

export type MenuLink = {
  title: string;
  href?: string;
  onClick?: (event: FormEvent<Element>) => void;
};

export type MenuProps = {
  links: MenuLink[];
};
export const Menu = ({ links }: MenuProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Styled.Button
        onClick={() => setVisible(!visible)}
        aria-label="Open/Close Menu"
        className="Button"
      >
        {visible ? (
          <Close aria-label="Close Menu" className="Close" />
        ) : (
          <MenuIcon aria-label="Open Menu" className="Open" />
        )}
      </Styled.Button>
      <Styled.MenuContainer
        visible={visible}
        onClick={() => setVisible(!visible)}
      >
        <Styled.MenuWrapper>
          {links.map((link) => {
            if (link.href) {
              return (
                <Link href={link.href}>
                  <p className="Link">{link.title}</p>
                </Link>
              );
            } else {
              return (
                <a onClick={link.onClick}>
                  <p className="Link">{link.title}</p>
                </a>
              );
            }
          })}
        </Styled.MenuWrapper>
      </Styled.MenuContainer>
    </>
  );
};