import { Card, Text } from '@mantine/core';

interface RecipeCardProps {
  name: string;
  description: string;
  estimatedTime: number;
  cuisine: string[];
  className?: string;
  onClick: () => void;
}

export const RecipeCard = ({
  name,
  description,
  estimatedTime,
  cuisine,
  className,
  onClick,
}: RecipeCardProps) => {
  const stats = [
    { title: 'Est. Time', value: estimatedTime },
    { title: 'Cuisine', value: cuisine.join(', ') },
  ];
  const items = stats.map((stat) => (
    <div key={stat.title}>
      <Text size="xs" color="dimmed">
        {stat.title}
      </Text>
      <Text fw={500} size="sm">
        {stat.value}
      </Text>
    </div>
  ));

  return (
    <Card
      className={className}
      onClick={onClick}
      withBorder
      shadow="xs"
      padding="lg"
      sx={{
        minHeight: '200px',
        maxHeight: '200px',

        ':hover': { cursor: 'pointer' },
      }}
    >
      <Text fz="sm" mt="sm" fw={700} sx={{ lineHeight: 1 }}>
        {name}
      </Text>
      <Text mt="sm" mb="md" c="dimmed" fz="xs">
        {description.length > 100
          ? `${description.substring(0, 130)}...`
          : description}
      </Text>
      <Card.Section
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 20,
          borderTop: '1px solid black',
        }}
      >
        {items}
      </Card.Section>
    </Card>
  );
};
