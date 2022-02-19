import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions } from '@mui/material';
import { Collapse, Fab, IconButton, Typography } from '@mui/material';
import PreviewTwoToneIcon from '@mui/icons-material/PreviewTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';


const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });

const ProjectCard = ({ data }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className="hoverable">
            <CardHeader
                title={data.title}
                subheader={data.info}
            />
            <CardMedia
                component="img"
                height="194"
                image={data.img}
                alt={data.title}
            />
            <CardContent position="fixed">
                <Typography variant="body2" color="text.secondary">
                <StyledFab>
                    <PreviewTwoToneIcon />
                </StyledFab>
                    {data.desc1}
                </Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {data.desc2}
                    </Typography>
                    <Typography paragraph>
                        {data.fab1.type}
                        {data.fab1.disabled ? "N/A" : data.fab1.url}
                    </Typography>
                    <Typography>
                        {data.fab2.type}
                        {data.fab2.disabled ? "N/A" : data.fab1.url}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default ProjectCard;