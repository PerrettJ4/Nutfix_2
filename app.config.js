import 'dotenv/config';

export default {
  expo: {
    name: 'Nutflix',
    description: 'Nobody puts squirrels in a corner!',
    scheme: 'netflixclone',
    slug: 'netflixclone',
    privacy: 'public',
    version: '0.0.2',
    platforms: ['android', 'ios', 'web'],
    githubUrl: 'https://github.com/calebnance/expo-netflix',
    orientation: 'portrait',
    primaryColor: '#000000',
    icon: 'src/assets/icon.png',
    splash: {
      backgroundColor: '#000000',
      image: 'src/assets/splash.png',
      resizeMode: 'contain'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    extra: {
      apiKey: process.env.REACT_APP_API_KEY,
      apiUrl: process.env.REACT_APP_API_URL
    },
    assetBundlePatterns: ['**/*'],
    android: {
      versionCode: 2,
      statusBar: {
        backgroundColor: '#000000',
        barStyle: 'light-content'
      },
      navigationBar: {
        backgroundColor: '#000000',
        barStyle: 'light-content'
      }
    },
    ios: {
      buildNumber: '0.0.2',
      supportsTablet: true,
      statusBar: {
        style: 'light'
      },
      primaryColor: '#000000'
    },
    web: {
      build: {
        html: {
          head: [
            '<meta name="description" content="netflix clone with expo" />',
            '<meta name="format-detection" content="telephone=no" />',
            '<meta name="apple-touch-fullscreen" content="yes" />',
            '<meta name="mobile-web-app-capable" content="yes" />',
            '<meta name="apple-mobile-web-app-capable" content="yes" />',
            '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />',
            '<meta name="apple-mobile-web-app-title" content="Nutflix" />',
            '<link rel="apple-touch-icon" sizes="57x57" href="/assets/icons/apple-icon-57x57.png">',
            '<link rel="apple-touch-icon" sizes="60x60" href="/assets/icons/apple-icon-60x60.png">',
            '<link rel="apple-touch-icon" sizes="72x72" href="/assets/icons/apple-icon-72x72.png">',
            '<link rel="apple-touch-icon" sizes="76x76" href="/assets/icons/apple-icon-76x76.png">',
            '<link rel="apple-touch-icon" sizes="114x114" href="/assets/icons/apple-icon-114x114.png">',
            '<link rel="apple-touch-icon" sizes="120x120" href="/assets/icons/apple-icon-120x120.png">',
            '<link rel="apple-touch-icon" sizes="144x144" href="/assets/icons/apple-icon-144x144.png">',
            '<link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/apple-icon-152x152.png">',
            '<link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-icon-180x180.png">',
            '<link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/android-icon-192x192.png">',
            '<link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png">',
            '<link rel="icon" type="image/png" sizes="96x96" href="/assets/icons/favicon-96x96.png">',
            '<link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png">',
            '<link rel="manifest" href="/assets/icons/manifest.json">',
            '<meta name="msapplication-TileColor" content="#191919">',
            '<meta name="msapplication-TileImage" content="/assets/icons/ms-icon-144x144.png">',
            '<meta name="theme-color" content="#191919">'
          ]
        }
      },
      manifest: {
        name: 'Nutflix',
        short_name: 'Nutflix',
        description: 'Nobody puts squirrels in a corner!',
        start_url: '/',
        display: 'fullscreen',
        background_color: '#000000',
        theme_color: '#000000',
        orientation: 'portrait',
        icons: [
          {
            src: './icons/apple-icon-57x57.png',
            sizes: '57x57',
            type: 'image/png'
          },
          {
            src: './icons/apple-icon-60x60.png',
            sizes: '60x60',
            type: 'image/png'
          },
          {
            src: './icons/apple-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: './icons/apple-icon-76x76.png',
            sizes: '76x76',
            type: 'image/png'
          },
          {
            src: './icons/apple-icon-114x114.png',
            sizes: '114x114',
            type: 'image/png'
          },
          {
            src: './icons/apple-icon-120x120.png',
            sizes: '120x120',
            type: 'image/png'
          },
          {
            src: './icons/apple-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: './icons/apple-icon-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: './icons/apple-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: './icons/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './icons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: './icons/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      }
    }
  }
};
