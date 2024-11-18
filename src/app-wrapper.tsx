import { AppShell, Burger, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { PiForkKnifeBold } from 'react-icons/pi';
import { Navbar } from './navbar';

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  const onNavigate = () => {
    if (opened) {
      toggle();
    }
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 15,
          gap: 15,
        }}
      >
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <PiForkKnifeBold size={30} />
        <Title>Sara's Cookbook</Title>
      </AppShell.Header>

      <AppShell.Navbar style={{ padding: 10 }}>
        <Navbar onNavigate={onNavigate} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
