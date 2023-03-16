import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'
import { borderRadius } from '@mui/system'

const ChannelCard = ({ channelDetail, marginTop }) => {

    return (
        <Box
            sx={{
                boxShadow: 'none', borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { sx: '356px', md: '320px' },
                height: '326px',
                margin: 'auto',
                marginTop
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: 'white' }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.medium?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: '50%', height: '180px', width: '180px' }}
                    />
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                    </Typography>
                    <Typography>
                        {channelDetail?.statistics?.subscriberCount && (
                            <Typography>
                                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                            </Typography>
                        )}
                    </Typography>
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard