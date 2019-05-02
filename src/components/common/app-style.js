const borderLight = 'rgba(228, 220, 224, 0.2)'
const borderDark = 'rgba(228, 220, 224, 0.3)'

const dropShadow =
  '0 1px 0px #000, 1px 0 0px #000, 1px 2px 1px #000, 2px 1px 1px #000, 2px 3px 2px #000'
const dropShadowCR =
  '0 1px 0px #555, 1px 0 0px #555, 1px 2px 1px #555, 2px 1px 1px #555, 2px 3px 2px #555'
const backgroundSize = 'contain'

module.exports = {
  buttonSty: {
    backgroundColor: 'rgba(228, 220, 224, 0.1)',
    borderBottomColor: borderLight,
    borderLeftColor: borderDark,
    borderRightColor: borderLight,
    borderTopColor: borderDark,
    borderRadius: '6px',
    color: '#435c3c',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: '600',
    margin: '0 3px',
    outline: 'none',
    padding: '3px 5px 3px',
    whiteSpace: 'nowrap'
  },
  buttonMobileSty: {
    backgroundColor: 'rgba(228, 220, 224, 0.1)',
    borderBottomColor: borderLight,
    borderLeftColor: borderDark,
    borderRightColor: borderLight,
    borderTopColor: borderDark,
    borderRadius: '6px',
    color: '#435c3c',
    cursor: 'pointer',
    fontSize: '1.3rem',
    fontWeight: '600',
    lineHeight: '100%',
    margin: '0 3px',
    outline: 'none',
    padding: '5px 5px 3px',
    whiteSpace: 'nowrap'
  },
  PageTopPageSty: {
    height: '100%',
    overflow: 'hidden',
    padding: '0px',
    width: '100%'
  },
  innerSty: {
    background: 'rgba(228, 220, 224, 0.55)',
    height: '96vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '800px',
    overflowX: 'hidden',
    overflowY: 'auto',
    position: 'relative'
  },
  innerTextSty: {
    background: 'transparent',
    fontFamily: 'Georgia, serif',
    maxWidth: '800px',
    padding: '30px 40px',
    position: 'relative'
  },
  headSty5: {
    height: '3em',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  },
  headSty2: {
    height: '2vh',
    marginLeft: '-10px',
    textAlign: 'left'
  },
  headSty35: {
    height: '35em',
    marginLeft: '0px',
    textAlign: 'left'
  },
  headImageSty: {
    height: '100%',
    maxWidth: '90%',
    width: 'auto'
  },
  subHeadSty: {
    color: '#e2d290',
    fontSize: '1.1em',
    fontWeight: '600',
    height: '2vh',
    marginTop: '.1em',
    maxWidth: '500px',
    textAlign: 'left',
    textShadow: dropShadow
  },
  textHeadSty: {
    color: '#615217',
    fontSize: '1.1em',
    fontWeight: '600',
    height: '2vh',
    marginBottom: '.5em',
    marginLeft: '0px',
    marginTop: '.1em',
    maxWidth: '500px',
    textAlign: 'left'
  },
  blankKeySty: {
    backgroundColor: 'transparent',
    backgroundImage: 'url(img/Blank-Key-NS.png)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize,
    height: '30px',
    MozBackgroundSize: backgroundSize,
    OBackgroundSize: backgroundSize,
    overflow: 'hidden',
    padding: '5px 0px 0px',
    position: 'relative',
    textAlign: 'center',
    WebkitBackgroundSize: backgroundSize,
    width: '30px'
  },
  blankKeyTextSty: {
    color: '#615217',
    fontFamily: 'Arial, san-serif',
    fontSize: '1em',
    fontWeight: '600'
  },
  textHeadScSty: {
    color: '#000',
    fontSize: '1em',
    fontWeight: '600',
    height: '20px',
    verticalAlign: 'bottom'
  },
  textHeadScDivSty: {
    color: '#615217',
    fontSize: '1.1em',
    fontWeight: '600',
    height: '30px',
    marginLeft: '0px',
    marginTop: '.1em',
    maxWidth: '500px',
    textAlign: 'left'
  },
  textHeadImgSty: {
    color: '#615217',
    fontSize: '1.1em',
    fontWeight: '600',
    height: '2vh',
    marginBottom: '.5em',
    marginLeft: '80px',
    marginTop: '-1.5em',
    maxWidth: '500px',
    textAlign: 'left'
  },
  textSty: {
    color: '#000',
    fontSize: '1.0em',
    textAlign: 'left'
  },
  boldTextSty: {
    color: '#000',
    fontSize: '1.0em',
    fontWeight: '600',
    textAlign: 'left'
  },
  ulSty: {
    color: '#000',
    fontSize: '1.0em',
    marginLeft: '5cw',
    maxWidth: '600px',
    textAlign: 'left'
  },
  topImgLogoDiv: {
    height: 'auto',
    width: '100%'
  },
  topImgDiv: {
    height: 'auto',
    position: 'relative',
    width: '100%'
  },
  topCRDiv: {
    position: 'absolute',
    color: '#999',
    right: '5px',
    bottom: '15px',
    fontSize: '.8em',
    writingMode: 'vertical-rl',
    textShadow: dropShadowCR
  },
  topImg: {
    border: 'none',
    height: 'auto',
    maxWidth: '800px'
  },
  logoImg: {
    height: '200px',
    maxWidth: 'auto'
  },
  topLogoDiv: {
    height: '300px',
    position: 'absolute',
    top: '0px',
    width: '100%'
  },
  innerLogoDiv: {
    height: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '35px',
    textAlign: 'center'
  },
  topImageSrcAbout: [
    {
      file: 'assets/pageTop/PageTopA6.jpg',
      copyright: 'Image ©2015 Caitlin Atkinson'
    },
    {
      file: 'assets/pageTop/PageTopA12.jpg',
      copyright: 'Image ©2015 Caitlin Atkinson'
    },
    {
      file: 'assets/pageTop/PageTopA17.jpg',
      copyright: 'Image ©2010 Chris Stevens'
    },
    {
      file: 'assets/pageTop/PageTopA31.jpg',
      copyright: 'Image ©2010 Chris Stevens'
    }
  ],
  topImageSrcGarden: [
    {
      file: 'assets/pageTop/PageTopG1b.jpg',
      copyright: 'Image ©2010 Chris Stevens'
    },
    {
      file: 'assets/pageTop/PageTopG13.jpg',
      copyright: 'Image ©2016 Edith Bergstrom'
    },
    {
      file: 'assets/pageTop/PageTopG14.jpg',
      copyright: 'Image ©2016 Edith Bergstrom'
    },
    {
      file: 'assets/pageTop/PageTopG32.jpg',
      copyright: 'Image ©2016 Edith Bergstrom'
    }
  ],
  topImageSrcHelp: [
    {
      file: 'assets/pageTop/PageTopH4.jpg',
      copyright: 'Image ©2010 Chris Stevens'
    },
    {
      file: 'assets/pageTop/PageTopH5c.jpg',
      copyright: 'Image ©2010 Chris Stevens'
    },
    {
      file: 'assets/pageTop/PageTopH10c.jpg',
      copyright: 'Image ©2010 Chris Stevens'
    }
  ]
}
