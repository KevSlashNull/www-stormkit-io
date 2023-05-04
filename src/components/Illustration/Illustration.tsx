import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import IllustrationSKDeploy from './IllustrationSKDeploy'
import IllustrationTechs from './IllustrationTechs'

export default function Illustration() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 360,
          width: 360,
          flexGrow: 0,
          borderRadius: '50%',
          bgcolor: 'rgba(0,0,0,0.2)',
        }}
      >
        <IllustrationTechs />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <LinearProgress sx={{ height: 8, borderRadius: '50%' }} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          width: { xs: '100%', md: 'auto' },
          mt: { xs: 8, md: 0 },
        }}
      >
        <IllustrationSKDeploy />
      </Box>
    </Box>
  )
}
