import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';

type Props = {
  personInitial: string;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
};

const colorsList = [
  '#dc2626',
  '#ea580c',
  '#facc15',
  '#84cc16',
  '#10b981',
  '#06b6d4',
  '#3b82f6',
  '#c026d3',
  '#f43f5e',
];

const Post = ({ personInitial, imageUrl, title, description, date }: Props) => {
  const randomColor = colorsList[Math.floor(Math.random() * colorsList.length)];
  return (
    <Card sx={{ marginTop: '20px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: randomColor }} aria-label="recipe">
            {personInitial}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="20%"
        image={imageUrl}
        alt="Photo content"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: 'red' }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
