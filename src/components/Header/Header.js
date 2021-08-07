import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LaptopActionGroup>
          <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
        </LaptopActionGroup>
        <Logo />
        <LaptopActionGroup>
          <SubscribeActions>
            <Button>Subscribe</Button>
            <SubscribeLink>Already a member?</SubscribeLink>
          </SubscribeActions>
        </LaptopActionGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const LaptopActionGroup = styled(ActionGroup)`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const SubscribeActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`;

const SubscribeLink = styled.a`
  color: inherit;
  font-family: var(--font-family-serif);
  font-size: 14px;
  font-style: italic;
  text-decoration: underline;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
   @media ${QUERIES.laptopAndUp} {
    align-items: baseline;
  justify-content: space-between;
  }
`;

export default Header;
