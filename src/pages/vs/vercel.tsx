import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import StormkitToolImg from '~/assets/images/stormkit-tool.png'
import { useScrollToHash } from '~/helpers/scroll'

export const fetchData: FetchDataFunc = async () => {
  return {
    head: {
      title: 'What makes Stormkit a great Vercel alternative',
      description:
        "Here's why you should consider Stormkit as an intiutive, scalable and cost-effective alternative to Vercel.",
    },
    context: {},
  }
}

interface Props {
  children: React.ReactNode
  id?: string
}

function Subtitle({ children, id }: Props) {
  return (
    <Typography
      id={id}
      variant="subtitle2"
      sx={{ fontSize: 20, fontWeight: 600 }}
    >
      {children}
    </Typography>
  )
}

const differences = [
  ['Self-Hostability vs. Managed Service', '#hosting-approach'],
  ['Deployment Flexibility', '#flexibility'],
  ['Customizability and Control', '#customizability'],
  ['Pricing Transparency and Predictability', '#pricing'],
  ['Vendor lock-in', '#vendor-lock-in'],
]

export default function Terms() {
  const theme = useTheme()
  useScrollToHash()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: theme.palette.background.default,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Header />
      <Box
        sx={{
          flex: 1,
          m: 'auto',
          bgcolor: 'rgba(0,0,0,0.1)',
          my: 4,
          p: { xs: 2, md: 4 },
        }}
        maxWidth="768px"
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 600,
            fontSize: { xs: 24, md: 36 },
            mb: 4,
            textAlign: 'center',
          }}
        >
          What makes Stormkit a
          <br /> great Vercel alternative
        </Typography>
        <Typography>
          <Link
            sx={{ color: 'white', fontWeight: 'bold' }}
            href="https://vercel.com"
            rel="nofollow noreferrer"
            target="_blank"
          >
            Vercel
          </Link>{' '}
          is a cloud platform designed to host and deploy frontend applications,
          primarily focused on projects built using modern JavaScript frameworks
          like Next.js and others. Vercel provides a fully managed
          infrastructure that simplifies the process of building, deploying, and
          scaling web applications.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Stormkit is a similar service in the space, which solves different
          problems. Here's why you should consider using it over Vercel.
        </Typography>
        <Box
          component="img"
          src={StormkitToolImg}
          alt="Stormkit - Self-Hosted Frontend Hosting platform"
          sx={{
            mt: { xs: 4, lg: 8 },
            mb: { xs: 4, lg: 8 },
            boxShadow: {
              xs: '0px 0px 15px 0px rgba(255,255,255,0.2)',
              lg: '0px 0px 30px 0px rgba(255,255,255,0.2)',
            },
            borderRadius: '8px',
            position: 'relative',
            width: { xs: '100%', lg: '994px' },
            marginLeft: { xs: 0, lg: '-144px' },
          }}
        ></Box>
        <Box
          sx={{
            border: '1px solid rgba(255,255,255,0.05)',
            bgcolor: 'rgba(0,0,0,0.3)',
            p: 4,
            mb: 8,
          }}
        >
          <Typography component="li" sx={{ listStyle: 'none' }}>
            What are the differences between Stormkit and Vercel?
          </Typography>
          <Box component="ol" sx={{ p: 0, mt: 2, mb: 0 }}>
            {differences.map(([text, hash]) => (
              <Box
                key={hash}
                component="li"
                sx={{ listStylePosition: 'inside' }}
              >
                <Link href={hash} sx={{ color: 'white' }}>
                  {text}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
        <Subtitle id="hosting-approach">
          1. Self-Hostability vs. Managed Service
        </Subtitle>
        <Typography component="ul" sx={{ my: 2 }}>
          <Typography component="li">
            One of the most significant differences between Stormkit and Vercel
            lies in the hosting approach:{' '}
            <strong>Stormkit is self-hostable</strong>. This means you have the
            option to deploy Stormkit on your own infrastructure, providing you
            with complete control over your environment. Whether you're looking
            to deploy on-premises or within your private cloud, Stormkit gives
            you flexibility in how and where your applications are hosted. This
            approach is ideal for enterprises with specific security or
            compliance requirements, allowing full control over data residency,
            networking, and scaling.
          </Typography>
          <Typography component="li" sx={{ mt: 2 }}>
            Vercel, on the other hand, is a fully managed service. You don't
            need to worry about managing the underlying infrastructure; Vercel
            takes care of everything for you. This makes Vercel an excellent
            choice for developers who prioritize convenience and simplicity,
            allowing them to focus solely on coding and application performance
            without handling the complexities of server management.
          </Typography>
        </Typography>
        <Subtitle id="flexibility">2. Deployment Flexibility</Subtitle>
        <Typography component="ul" sx={{ mt: 2 }}>
          <Typography component="li">
            When self-hosting Stormkit, developers can deploy their frontend
            applications in multiple ways, whether via GitHub Actions, custom
            servers, or other CI/CD platforms. This approach empowers teams by
            allowing them to choose the best solution that fits their
            enterprise.
          </Typography>
          <Typography component="li" sx={{ my: 2 }}>
            Vercel excels in automatic deployments thanks to their vast
            infrastructure and tools. Vercel owns Next.js, which also allows
            them tailoring the framework according to their infrastructure
            design. This, in return, gives especially Next.js developers a great
            development experience.
          </Typography>
        </Typography>
        <Subtitle id="customizability">3. Customizability and Control</Subtitle>
        <Typography component="ul" sx={{ mt: 2 }}>
          <Typography component="li">
            Stormkit shines when it comes to customizability. Because Stormkit
            is self-hostable, you have complete control over your deployments,
            server configurations, and infrastructure. This makes it ideal for
            complex use cases where fine-tuning is required, such as deploying
            applications in hybrid environments, or scaling based on your exact
            needs. Stormkit also integrates seamlessly with existing
            infrastructure, whether it's AWS, Google Cloud, or a private data
            center.
          </Typography>
          <Typography component="li" sx={{ my: 2 }}>
            Vercel provides a more opinionated stack. While it is easy to use,
            you are limited to Vercel's infrastructure and configurations.
            Customizations such as scaling, server configurations, or special
            networking requirements might be limited, as Vercel abstracts much
            of the underlying infrastructure away from the user. It is designed
            for simplicity and speed but may not be the best fit for more
            complex or enterprise-level projects requiring a high degree of
            control.
          </Typography>
        </Typography>
        <Subtitle id="pricing">
          4. Pricing Transparency and Predictability
        </Subtitle>
        <Typography component="ul" sx={{ mt: 2 }}>
          <Typography component="li">
            Stormkit offers transparent and predictable pricing. With its clear
            pricing tiers, you know exactly what you're paying for upfront, with
            no hidden costs or add-ons. This can be particularly advantageous
            for teams who want to avoid unexpected overage charges and ensure
            that their hosting costs remain predictable month to month.
          </Typography>
          <Typography component="li" sx={{ my: 2 }}>
            Vercel also offers a variety of pricing tiers, from free to
            enterprise-level plans. However, like many managed services, there
            can be additional costs as you scale up, particularly if your app
            requires advanced features, more bandwidth, or premium performance.
            While the free tier is generous, larger projects may find the
            pricing less predictable as usage grows.
          </Typography>
        </Typography>
        <Subtitle id="vendor-lock-in">4. Vendor Lock-In</Subtitle>
        <Typography component="ul" sx={{ mt: 2 }}>
          <Typography component="li">
            Stormkit is designed with no vendor lock-in in mind. Because it is
            self-hostable, you can deploy it on your own infrastructure, switch
            hosting providers, or move to a completely different cloud with
            ease. This flexibility ensures that you aren't locked into a single
            provider and can retain control of your environment.
          </Typography>
          <Typography component="li" sx={{ my: 2 }}>
            Vercel is a managed service, which inherently comes with some level
            of vendor lock-in. Since Vercel handles everything from deployment
            to hosting and CDN, migrating to another provider could require
            reworking your deployment pipeline and infrastructure.
          </Typography>
        </Typography>
        <Subtitle id="conclusiong">Conclusion</Subtitle>
        <Typography component="ul" sx={{ mt: 2 }}>
          <Typography component="li">
            Both Stormkit and Vercel offer powerful solutions for frontend
            hosting, but they cater to different needs: Stormkit is best for
            developers and teams who value flexibility, control, and
            customizability. Its self-hostable nature makes it ideal for
            projects with specific infrastructure requirements, such as
            enterprise applications or companies that want to avoid vendor
            lock-in.
          </Typography>
          <Typography component="li" sx={{ mt: 2 }}>
            Vercel excels at offering a simple, managed experience with a
            seamless workflow for modern development teams. It's great for those
            who prioritize ease of use and want to focus solely on building and
            deploying without dealing with the complexities of infrastructure
            management.
          </Typography>
          <Typography component="li" sx={{ my: 2 }}>
            Ultimately, the choice between Stormkit and Vercel depends on your
            project's needs. If you want maximum control over your hosting
            environment, Stormkit is the way to go. If you prefer a fully
            managed solution with minimal setup, Vercel might be a better fit.
          </Typography>
        </Typography>
      </Box>
      <Footer maxWidth="lg" />
    </Box>
  )
}
