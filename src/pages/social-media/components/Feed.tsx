import { Box } from '@mui/material';
import Post from './Post';

const posts = [
  {
    personInitial: 'R',
    imageUrl:
      'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Ohh how much I miss these mountains...',
    title: 'Mountains',
    date: 'September 14, 2016',
  },
  {
    personInitial: 'J',
    imageUrl:
      'https://images.pexels.com/photos/1838680/pexels-photo-1838680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'This one reminds me of my honeymoon, MSC Seashore haha',
    title: 'MSC',
    date: 'July 08, 2023',
  },
];

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </Box>
  );
};

export default Feed;
