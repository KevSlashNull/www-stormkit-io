import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AnimationDeploymentPreview from './AnimationDeploymentPreview'

let i = 0
const texts = ['an Indiehacker?', 'a Small Startup?']

const features = [
  {
    title: 'Deployment previews',
    subtitle: 'Preview your deployments right from your pull/merge requests.',
  },
  {
    title: 'Staged rollouts',
    subtitle:
      'Release multiple deployments at the same time to a percentage of your users.',
  },
  {
    title: 'Snippet injections',
    subtitle:
      'Manage 3rd party scripts right from the UI. Useful for marketing teams or PMs.',
  },
  {
    title: 'Feature flags',
    subtitle: 'Toggle features with a simple click.',
  },
  {
    title: 'API',
    subtitle:
      'Manage your Node.js serverless API from the same code repository.',
  },
]

let timeout: NodeJS.Timeout
const TIMEOUT_SWITCH_FEATURE = 5000

export default function FeaturePreview() {
  const [text, setText] = useState(texts[0])
  const [activeFeature, setActiveFeature] = useState(0)
  const [timeoutPaused, setTimeoutPaused] = useState(false)

  useEffect(() => {
    const int = setInterval(() => {
      setText(texts[++i % texts.length])
    }, 3500)

    return () => {
      clearInterval(int)
    }
  }, [])

  useEffect(() => {
    if (!timeoutPaused) {
      timeout = setTimeout(() => {
        setActiveFeature((activeFeature + 1) % features.length)
      }, TIMEOUT_SWITCH_FEATURE)
    }
  }, [activeFeature, timeoutPaused])

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 600,
          fontSize: { xs: 24, md: 48 },
          textAlign: 'center',
          overflow: 'hidden',
          position: 'relative',
          pr: { xs: 27, md: 45 },
        }}
      >
        Are you{' '}
        <Box
          component="span"
          className="slide-up"
          sx={{
            ml: { xs: 1, md: 2 },
            position: 'absolute',
            animation: 'slideUp 3.5s ease-in-out infinite',
          }}
        >
          {text}
        </Box>
      </Typography>
      <Typography
        variant="h3"
        sx={{
          mt: 1,
          fontSize: { xs: 16, md: 20 },
          textAlign: 'center',
          opacity: 0.7,
        }}
      >
        Then you are in the right place.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          mt: 8,
        }}
      >
        <Box>
          {features.map((feature, index) => {
            const isActiveFeature = features[activeFeature] === feature

            return (
              <Box
                key={feature.title}
                sx={{ mb: 0, display: 'flex', '&:last-child': { mb: 0 } }}
              >
                <Box
                  sx={{
                    width: 360,
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12,
                    boxShadow: isActiveFeature ? 12 : 0,
                    bgcolor: isActiveFeature ? 'rgba(0,0,0,0.25)' : undefined,
                    opacity: isActiveFeature ? 1 : 0.7,
                    transition: 'opacity 0.5s ease-in-out',
                    p: 4,
                  }}
                  onMouseLeave={() => {
                    if (timeoutPaused) {
                      setTimeoutPaused(false)
                    }
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 20, cursor: 'pointer' }}
                    onClick={() => {
                      clearTimeout(timeout)
                      setTimeoutPaused(true)
                      setActiveFeature(index)
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: 15,
                      opacity: isActiveFeature ? 0.7 : 0.4,
                      transition: 'opacity 0.5s ease-in-out',
                      mt: 1,
                    }}
                  >
                    {feature.subtitle}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'rgba(0,0,0,0.25)',
            p: 4,
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            boxShadow: 12,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {activeFeature === 0 && <AnimationDeploymentPreview />}
          </Box>
          <LinearProgress sx={{ my: 4 }} />
          <Box sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="secondary">
              See all of our Features
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
